const sa11yPresetRules = require('@sa11y/preset-rules');
const axeReporter = require('axe-html-reporter').createHtmlReport;
const AxeBuilder = require('@axe-core/playwright').default;
const playwright = require('playwright');
const test = require('ava').default;
const browserPromise = playwright.chromium.launch();

// Will be replaced by ava.generate-tests.js
const portNum = process.env.a11yPort || 9002;
const stories = []; // [{name,id,type},...]

// required macro to allow Playwright tests to run efficiently when using the AVA test runner
async function pageMacro(t, callback) {
  const browser = await browserPromise;
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await callback(t, page);
  } finally {
    await page.close();
  }
}

const prettyPrintObject = (obj) =>
  Object.keys(obj).map(key => `${key}: ${obj[key]}`);

const generateNodeDescription = ({ html, target, failureSummary }) =>
  prettyPrintObject({ html, target, failureSummary });

const generateDescription = ({ id, impact, nodes }, i) =>
  [
    `\nRULE ${i + 1}:`,
    prettyPrintObject({ id, impact }).join('\n'),
    '\nViolation:',
    nodes.map(generateNodeDescription).map(x => x.join('\n')).flat().join('\n\n'),
    '\nFor more info run these tests locally with `npm run test:a11y`\n'
  ];

const generateLink = (address) =>
  `To view this error, run \`npm start\` and then click this link ${address}`

// repeatable function to run accessibility(a11y) tests for a story
async function axeTest(t, page, story, address) {
  try {
    const results = await new AxeBuilder({ page })
      .options(sa11yPresetRules.recommended)
      .include('#root')
      .exclude('#GoogleMapID')
      .analyze();

    const numViolations = results.violations.length;

    if (numViolations > 0) {
      axeReporter({
        results: {
          violations: results.violations,
        },
        options: {
          projectKey: 'SLDS a11y',
          outputDir: '__tests__/a11y/results',
          reportFileName: `${story.id}.html`,
        },
      });

      // conditionally generate legible wording for the test failure message
      const plural = numViolations !== 1 ? 'rules have' : 'rule has';
      t.fail(`» ${numViolations} ${plural} violations \n\n ${generateLink(address)} \n\n ${results.violations.map(generateDescription).flat().join("\n")}`);
    }

    t.pass('» No accessibility violations. YAY!');

  } catch (e) {
    // do something with any other error
    t.fail('!! Error occurred: ' + e);
  }
}

const runTest = (story) => test(`» a11y: ${story.kind}/${story.name}`, pageMacro, async (t, page) => {
  const address = `http://localhost:${portNum}/iframe.html?id=${story.id}&args=&viewMode=story`;
  await page.goto(address, { timeout: 0 });
  await axeTest(t, page, story, address);
});

// init
(() => {
  stories.forEach(runTest)
})()
