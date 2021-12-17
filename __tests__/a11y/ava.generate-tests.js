const fs = require('fs').promises;
const del = require('del');
const playwright = require('playwright');

//
const portNum = process.env.a11yPort || 9002;

/* eslint-disable no-template-curly-in-string */
// base content for tests file
let tests = `const sa11yPresetRules = require('@sa11y/preset-rules');
const axeReporter = require('axe-html-reporter').createHtmlReport;
const AxeBuilder = require('@axe-core/playwright').default;
const playwright = require('playwright');
const test = require('ava').default;
const browserPromise = playwright.chromium.launch();

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

// repeatable function to run accessibility(a11y) tests for a story
async function axeTest(t, page, story) {
  try {
    const results = await new AxeBuilder({ page })
      .options(sa11yPresetRules.recommended)
      .include('#root')
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
          reportFileName: \`${'${story.id}.html'}\`,
        },
      });

      // conditionally generate legible wording for the test failure message
      const plural = numViolations !== 1 ? 'rules have' : 'rule has';
      t.fail(\`${'» ${numViolations} ${plural} violations'}\`);
    }

    t.pass('» No accessibility violations. YAY!');

  } catch (e) {
    // do something with any other error
    t.fail('!! Error occurred: ' + e);
  }
}
`;

// repeatable template for each test
function testTemplate(story) {
  return `
test('» a11y: ${story.kind}/${story.name}', pageMacro, async (t, page) => {
  const story = {
    id: '${story.id}',
    kind: '${story.kind}',
    name: '${story.name}'
  };
  await page.goto('http://localhost:${portNum}/iframe.html?id=${story.id}&args=&viewMode=story', { timeout: 0 });
  await axeTest(t, page, story);
});
  `;
}

// asynchronously build the accessibility(a11y) test files using Storybook as the source of truth
(async () => {
  await del(['./__tests__/a11y/__testfiles__/ava.a11y.*.spec.js']);
  await del(['./__tests__/a11y/results/']);

  const browserInit = await playwright.chromium.launch();
  const contextInit = await browserInit.newContext();
  const pageInit = await contextInit.newPage();
  await pageInit.goto(`http://localhost:${portNum}/`, { timeout: 0 });
  // wait until page is actually fully loaded
  await pageInit.waitForTimeout(5000);

  // use the Storybook client API to retrieve stories data
  // NOTE: Storybook v6.4 will have /stories.json to replace this process
  const stories = await pageInit.evaluate(() => {
    const rawStories = document
      .querySelector('#storybook-preview-iframe')
      .contentWindow.__STORYBOOK_STORY_STORE__.raw();

    // filter stories to exclude those we don't want
    return rawStories.filter(
      (story) => !new RegExp(/.*\s?Sink/, 'gi').test(story.name)
    );
  });

  // browser is no longer needed
  await browserInit.close();

  const numTests = 20;
  const numTestFiles = stories.length / numTests;

  // create test files with `numTests` tests per file
  for (let fileNum = 0; fileNum < numTestFiles; fileNum++) {
    let fileTests = tests;
    // create a test for each story
    stories.splice(0, numTests).forEach((story) => {
      const storyTest = testTemplate(story);
      fileTests += storyTest;
    });

    // write tests to file
    await fs.writeFile(
      `./__tests__/a11y/__testfiles__/ava.a11y.${fileNum}.spec.js`,
      fileTests
    );
  }
})();
