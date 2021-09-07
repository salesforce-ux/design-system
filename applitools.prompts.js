const { prompt } = require('enquirer');
const branch = require('git-branch');
const fs = require('fs').promises;
const pkg = require('./package.json');

const yargs = require('yargs');

const argv = yargs
  .option('type', {
    alias: 't',
    describe: 'provide the type of run (standard, legacy, mobile)',
    demandOption: true,
    default: 'standard',
    type: 'string'
  })
  .help()
  .alias('help', 'h').argv;

let runType = '';

switch (argv.type) {
  case 'legacy':
    runType = 'legacy.';
    break;

  case 'mobile':
    runType = 'mobile.';
    break;

  default:
    break;
}

const sfdcVersion = pkg.slds.id;
const sfdcName = pkg.slds.name.toLowerCase().replace(' ’', '-');
const currentBranch = branch.sync();

async function ask() {
  return prompt([
    {
      type: 'input',
      name: 'apiKey',
      message: 'Please provide your APPLITOOLS_API_KEY value\n ',
      skip: () => {
        if (process.env.APPLITOOLS_API_KEY) {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'batchName',
      message: 'Please provide a batch name for this run\n ',
      initial: 'Local run',
      result(name) {
        return `${name} (${process.env.LOGNAME})`;
      }
    },
    {
      type: 'input',
      name: 'parentBranchName',
      message: 'Which branch would you like to compare against\n ',
      initial: `${sfdcVersion}-${sfdcName}`,
      result(branch) {
        if (branch) {
          return `salesforce-ux/design-system-internal/${branch}`;
        }

        return `localRun/${currentBranch}`;
      }
    },
    {
      type: 'input',
      name: 'testKindPattern',
      message: `If you'd like to test only some blueprints please enter a comma separated list of names\n `,
      footer: `  ex. Path, Buttons, Icons`,
      initial: 'all',
      result(pattern) {
        let kindSearch = '';
        if (pattern.toLowerCase() !== 'all') {
          // convert comma separated list into regex OR pattern
          kindSearch = `(?:` + pattern.split(/,\s?/g).join('|') + `)`;
        }

        // regex clarification:
        // »  [^/]*  => 0 or more of any character except forward-slash
        return `^.*?${kindSearch}[^/]*?(?:\\/[^/]*)?`;
      }
    },
    {
      type: 'input',
      name: 'testKindSubPattern',
      message: `If you'd like to test only a subsection within the patterns above, such as "Examples" or "Base/States" please enter a comma separated list\n `,
      footer: `  ex. Examples, Base/States`,
      initial: 'all',
      result(pattern) {
        let subSearch = '';

        if (pattern.toLowerCase() === 'all') {
          return '.*';
        }

        // convert comma separated list into regex OR pattern
        subSearch = `(?:` + pattern.split(/,\s?/g).join('|') + `)`;

        // regex clarification:
        // »  [^/]*  => 0 or more of any character except forward-slash
        return `${subSearch}.*`;
      }
    },
    {
      type: 'input',
      name: 'testNamePattern',
      message: `If you'd like to test only specific tests within your defined filters above please enter the regex pattern (use ".*" for all)\n `,
      footer: `  NOTE: This is searching on the name of the test such as "Kitchen Sink"`,
      initial: '^(?:.+|) ?Sink'
    },
    {
      type: 'confirm',
      name: 'showStorybookOutput',
      message: `Would you like to show Storybook output logs?\n `
    },
    {
      type: 'confirm',
      name: 'showLogs',
      message: `Would you like to show Applitools output logs?\n `
    }
  ]).catch(console.error);
}

const chalk = require('chalk');
console.log(
  chalk.blue(`\n
██████╗ ███████╗███████╗    ██╗   ██╗██████╗ ████████╗
██╔══██╗██╔════╝██╔════╝    ██║   ██║██╔══██╗╚══██╔══╝
██║  ██║███████╗█████╗      ██║   ██║██████╔╝   ██║
██║  ██║╚════██║██╔══╝      ╚██╗ ██╔╝██╔══██╗   ██║
██████╔╝███████║███████╗     ╚████╔╝ ██║  ██║   ██║
╚═════╝ ╚══════╝╚══════╝      ╚═══╝  ╚═╝  ╚═╝   ╚═╝  \n`)
);

// Special note when running mobile VRT
if (argv.type === 'mobile') {
  console.log(
    chalk.inverse(`
╓───────────────────────────────────────────────────────╖
║                                                       ║
║   Please keep in mind that the mobile                 ║
║   Storybook instance only has a subset of stories.    ║
║                                                       ║
║   To view this locally please run:                    ║
║   > npm run start:mobile                              ║
║                                                       ║
╙───────────────────────────────────────────────────────╜
\n`)
  );
}

ask().then(async answers => {
  const template = require(`./applitools.${runType}config`);

  // add proper full "kind" search regular expression
  answers.testBlueprintPattern = `${answers.testKindPattern}${
    answers.testKindSubPattern
  }$`;

  const userConfig = Object.keys(answers).reduce((acc, key) => {
    if (key in template) {
      acc[key] = answers[key] || template[key];
    }
    return acc;
  }, {});

  const config = Object.assign(template, userConfig);

  const parsedConfig = Object.keys(config)
    .map(key => {
      const value = config[key];
      const type = typeof value;

      if (type === 'object') {
        return `${key}: ${JSON.stringify(value, null, 4)}`;
      } else if (type === 'string') {
        return `${key}: '${value}'`;
      } else {
        return `${key}: ${value}`;
      }
    })
    .join(',\n  ');

  const configExport = `
module.exports = {
  ${parsedConfig}
}
  `;

  await fs.writeFile(`./applitools.${runType}config.local.js`, configExport);
});
