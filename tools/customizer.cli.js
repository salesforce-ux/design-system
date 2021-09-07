const { prompt } = require('enquirer');
const fs = require('fs').promises;
const fse = require('fs-extra');
const chalk = require('chalk');
const replace = require('replace-in-file');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const prettier = require('prettier');

async function ask() {
  return prompt([
    {
      type: 'confirm',
      name: 'baseIndex',
      message: 'Is this CSS for Visualforce?'
    },
    {
      type: 'input',
      name: 'scopingClass',
      message: `Enter the scoping selector`,
      initial: '.please-change-me',
    }
  ]).catch(console.error);
}


//
console.log(
  chalk.blue(`\n
███████╗██╗     ██████╗ ███████╗    ███████╗ ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██║     ██╔══██╗██╔════╝    ██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝
███████╗██║     ██║  ██║███████╗    ███████╗██║     ██║   ██║██████╔╝█████╗
╚════██║██║     ██║  ██║╚════██║    ╚════██║██║     ██║   ██║██╔═══╝ ██╔══╝
███████║███████╗██████╔╝███████║    ███████║╚██████╗╚██████╔╝██║     ███████╗
╚══════╝╚══════╝╚═════╝ ╚══════╝    ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚══════╝

 ██████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ███╗██╗███████╗███████╗██████╗
██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔═══██╗████╗ ████║██║╚══███╔╝██╔════╝██╔══██╗
██║     ██║   ██║███████╗   ██║   ██║   ██║██╔████╔██║██║  ███╔╝ █████╗  ██████╔╝
██║     ██║   ██║╚════██║   ██║   ██║   ██║██║╚██╔╝██║██║ ███╔╝  ██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║██║███████╗███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═╝╚══════╝╚══════╝╚═╝  ╚═╝ \n`)
);

// define base directory where Sass files are located
const baseDir = `ui/`;
const customizerOutputPath = `slds-scope-customizer`;

ask().then(async answers => {
  // map selection options to filenames
  const filenames = {
    'false': 'index.scss',
    'true': 'index-vf.scss'
  };

  // set index file
  const indexFile = filenames[answers.baseIndex];

  // simplify scoping selector when needed
  let scopingClassName = answers.scopingClass;
  // remove first character if needed
  if (/^[#|\.]/i.test(scopingClassName)) {
    scopingClassName = scopingClassName.slice(1);
  }

  // specify temporary file
  const tmpFile = `${baseDir}customizer-${scopingClassName}.scss`;

  // copy source to temporary file
  await fs.copyFile(`${baseDir}${indexFile}`, tmpFile);

  // define lines to find in tmpFile
  const finders = [ /@import 'init';/g, /\$scoped: false/g ];

  // strings to use as part of replacements
  const resetClassString = `$reset-wrapping-class: '${answers.scopingClass}';`;
  let wrapper = '';

  // extras as needed when working with index Sass that doesn't already contain reset wrapper
  let data = await fs.readFile(tmpFile);
  data = data.toString(); // turn Buffer into String
  // if string doesn't already exist, add it
  if (data.match(/#{\$reset-wrapping-class}/gim) === null) {
    wrapper = `\n\n#{$reset-wrapping-class} {`;
    // append the closing bracket to close things up
    await fs.appendFile(tmpFile, '}');
  }

  // define replacements
  const replacements = [
    (match) => `${resetClassString}\n\n${match}${wrapper}`,
    `$scoped: true`
  ];

  // set options for find and replace
  const replaceOptions = {
    files: tmpFile,
    from: finders,
    to: replacements,
    countMatches: true
  };

  // modify temporary file to include requested scoping class
  try {
    await replace(replaceOptions);
  }
  catch (error) {
    console.error(chalk.red('Error occurred:', error));
  }

  // refresh data with updated file contents
  data = await fs.readFile(tmpFile);
  data = data.toString(); // turn Buffer into String

  // run Prettier to format things correctly
  const pResults = prettier.format(data, { singleQuote: true, filepath: tmpFile });
  await fs.writeFile(tmpFile, pResults);

  // provide feedback
  console.log(
    chalk.yellow(`\n➜ Processing...\n`)
  );

  // render Sass
  const scopedCSS = sass.renderSync({
    file: tmpFile
  });

  // run parsed Sass through PostCSS
  postcss([
    autoprefixer({remove: false}),
    cssnano({
      preset: [
        'default',
        {
          normalizeWhitespace: false,
          mergeLonghand: false,
          mergeRules: false,
          minifySelectors: false,
          uniqueSelectors: false,
        }
      ]
    })
  ])
    .process(scopedCSS.css, { from: undefined })
    .then(async prefixedResult => {
      // write scoped CSS file (expanded)
      await fs.mkdir(customizerOutputPath, { recursive: true });
      const outputFilename = `${customizerOutputPath}/slds-${scopingClassName}.css`;
      await fs.writeFile(outputFilename, prefixedResult.css)
        .then( () => {
          console.log(
            chalk.white(`➜ CSS written to: ${outputFilename}`)
          );
        });

      // further process to create minified version
      await postcss([
        cssnano({
          preset: [
            'default'
          ]
        })
      ])
        .process(prefixedResult.css, { from: undefined })
        .then(async minifiedResult => {
          const outputMinifiedFilename = `${customizerOutputPath}/slds-${scopingClassName}.min.css`;
          await fs.writeFile(outputMinifiedFilename, minifiedResult.css)
            .then( () => {
              console.log(
                chalk.white(`➜ Minified CSS written to: ${outputMinifiedFilename}`)
              );
            });
        })
    })
    .then( () => {
      console.log(chalk.greenBright.bold(`\n✔ SLDS has been scoped!\n`));
    })
    .catch(
      err => {
        console.log(chalk.red(`!!! Error: `, err));
      }
    );

  // cleanup
  try {
    await fse.remove(tmpFile);
  } catch (err) {
    console.log(chalk.red(`!!! Error: `, err));
  }
});
