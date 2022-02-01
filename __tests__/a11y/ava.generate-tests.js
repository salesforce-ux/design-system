const fs = require('fs').promises;
const del = require('del');
const playwright = require('playwright');

const portNum = process.env.a11yPort || 9002;

const templatePath = './__tests__/a11y/ava.test-template.js';

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
    // create a test for each story
    const s = stories.splice(0, numTests)

    let template = await fs.readFile(templatePath, 'utf-8');

    template = template.replace(/(?<=const stories = ).+(?=;)/,JSON.stringify(s.map(({name,id,kind})=>({name,id,kind})),null,2));
    template = template.replace(/(?<=a11yPort \|\| ).+(?=;)/,portNum);

    // write tests to file
    await fs.writeFile(
      `./__tests__/a11y/__testfiles__/ava.a11y.${fileNum}.spec.js`,
      template
    );
  }
})();
