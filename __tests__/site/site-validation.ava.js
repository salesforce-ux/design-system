const {
  Eyes,
  VisualGridRunner,
  Target,
  BrowserType
} = require('@applitools/eyes-playwright');
const { chromium } = require('playwright');
const test = require('ava').default;
const branch = require('git-branch');

const semver = require('semver');
const basePath = process.env.PWD;
const pkg = require(`${basePath}/package.json`);

const browserPromise = chromium.launch({ channel: 'chrome' });

const hostURL = process.env.SLDS_VALIDATION_URL || 'http://localhost:8080';
const baseline = false;

const GitHub = require('github-api');

const currentBranch = branch.sync();
const batchId = `release-validation__${process.env.LOGNAME}-${Date.now()}`;
const runner = new VisualGridRunner(100);

function eyesMacro() {
  const eyes = new Eyes(runner);
  eyes.setBatch({
    id: batchId,
    name: `Site Release Validation (${process.env.LOGNAME})`
  });
  const conf = eyes.getConfiguration();

  conf.addBrowser({ width: 1200, height: 800, name: BrowserType.CHROME });
  conf.addBrowser({ width: 1200, height: 800, name: BrowserType.FIREFOX });
  conf.addBrowser({ width: 1200, height: 800, name: BrowserType.SAFARI });
  conf.addBrowser({
    width: 1200,
    height: 800,
    name: BrowserType.EDGE_CHROMIUM
  });

  conf.setApiKey(process.env.APPLITOOLS_API_KEY);
  conf.setServerUrl('https://salesforceuxeyesapi.applitools.com');
  conf.setBranchName(
    `localRun/release-process/${process.env.LOGNAME}/${currentBranch}`
  );
  conf.setParentBranchName(`release-process/${currentBranch}`);
  conf.setProperties([{ name: 'Group', value: 'release' }]);
  eyes.setConfiguration(conf);

  return eyes;
}

async function getRepoLatestTag(repoName, validRange = 'X.X.X') {
  // connect to Github
  const gh = new GitHub({
    token: process.env.DSE_BOT_GITHUB_KEY
  });
  const repo = gh.getRepo('salesforce-ux', repoName);

  // retrieve list of tags from Github
  const ghTags = await repo.listTags();

  // Retrieve all unique values using semver
  const tags = [
    ...new Set(
      ghTags.data.map(tag => {
        const version = semver.clean(tag.name);
        // exclude pre-release versions
        return semver.satisfies(version, validRange) ? version : undefined;
      })
    )
  ].filter(t => t !== undefined);

  // sort by version name and retrieve latest one
  const latestVersion = semver.rsort(tags)[0];

  return latestVersion;
}

async function pageMacro(t, callback) {
  const browser = await browserPromise;
  const page = await browser.newPage();
  const eyes = eyesMacro();

  try {
    await callback(t, page, eyes);
  } finally {
    await eyes.close().catch(error => {
      if (typeof error.getTestResults === 'function') {
        const testResults = error.getTestResults();

        if (testResults.getStatus() === 'Passed') {
          t.pass(`👍 No diffs found!`);
        } else {
          t.fail(`⁉️  Test is ${testResults.getStatus()}`);
        }
      }
    });
    await page.close();
  }
}

test('» should not have robots meta tag', pageMacro, async (t, page) => {
  t.plan(1);
  await page.goto(hostURL);
  const metaRobots = await page.evaluate(
    () => !!document.querySelector('meta[name="robots"]')
  );
  t.falsy(metaRobots);
});

test(
  '» framework version number should match git repo tag',
  pageMacro,
  async (t, page) => {
    // set version range for this SHA/commit
    const pkgVersion = semver.coerce(pkg.version);

    // retrieve most recent Github tag for repo `design-system-internal`
    const latestVersion = await getRepoLatestTag(
      'design-system-internal',
      `${pkgVersion.major}.${pkgVersion.minor}.X`
    );

    // perform the test
    t.plan(1);
    await page.goto(hostURL);
    const versionElements = await page.$$(`text=${latestVersion}`);
    t.is(
      versionElements.length,
      2,
      `Page should contain framework version ${latestVersion} twice.`
    );
  }
);

test(
  '» site version number should match git repo tag',
  pageMacro,
  async (t, page) => {
    // retrieve most recent Github tag for repo `design-system-site`
    const latestVersion = await getRepoLatestTag('design-system-site');

    // perform the test
    t.plan(1);
    await page.goto(hostURL);
    const versionElements = await page.$$(`text=${latestVersion}`);
    t.is(
      versionElements.length,
      1,
      `Page should contain site version ${latestVersion} once.`
    );
  }
);

//
// Generate 5 tests for random search keywords
//
// retrieve list of search terms
const csvToJSON = require('csv-file-to-json');
const dataInJSON = csvToJSON({ filePath: '__tests__/site/search-terms.csv' });
const terms = dataInJSON.filter(row => {
  return row.count >= 100;
});

const searchNumTests = baseline ? terms.length : 5;

// shuffle terms
for (let i = terms.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = terms[i];
  terms[i] = terms[j];
  terms[j] = temp;
}
// loop to dynamically generate tests
for (let i = 0; i < searchNumTests; i++) {
  const term = terms[i].search;
  //
  test(
    `» search should return expected results – ${term}`,
    pageMacro,
    async (t, page, eyes) => {
      await page.goto(hostURL, { timeout: 0 });
      await page.type('#search-landing-nav', term, { delay: 150, timeout: 0 });
      const results = await page.isVisible('#algolia-autocomplete-listbox-0', {
        timeout: 0
      });
      t.truthy(results, `Results for "${term}" were not populated.`);

      await eyes.open(page, 'Release process proof', `Search - ${term}`);
      await eyes.check(Target.window().fully());
    }
  );
}

//
// Random 5 blueprint pages
//
// retrieve list of blueprint pages
const path = require('path');

const slds = require(path.resolve('./.dist/', '__internal/slds.umd'));

const getComponentPages = type =>
  slds[type]()
    .map(id => ({
      [`/${type}/${id}`]: {
        page: '/component',
        query: { type, id }
      }
    }))
    .toJS();

const components = getComponentPages('components');
// const utilities = getComponentPages('utilities');

const componentsNumTests = baseline ? components.length : 5;

// shuffle components
for (let i = components.length - 1; i >= 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = components[i];
  components[i] = components[j];
  components[j] = temp;
}

// iterate over first 5 pages from shuffled components list and validate with Applitools
for (let i = 0; i < componentsNumTests; i++) {
  const componentURI = Object.keys(components[i])[0];
  // extract blueprint name
  const parts = componentURI.split('/');
  const componentName = parts[parts.length - 1];

  test(
    `» blueprint page should pass VRT – ${componentName}`,
    pageMacro,
    async (t, page, eyes) => {
      await page.goto(hostURL + componentURI, { timeout: 0 });
      const headerTitle = await page.textContent('.site-masthead-title h1');
      t.is(await page.title(), `${headerTitle} - Lightning Design System`);

      await eyes.open(
        page,
        'Release process proof',
        `Components – ${componentName}`
      );
      await eyes.check(Target.window().fully());
    }
  );
}
