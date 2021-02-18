const prompt = require('prompt-sync')({ sigint: true });
const branch = require('git-branch');

const resolution = { width: 1024, height: 768 };
const currentBranch = branch.sync();

module.exports = {
  appName: 'SLDS',
  matchLevel: 'Strict',
  ignoreDisplacements: true,
  accessibilityValidation: {
    level: 'AA',
    guidelinesVersion: 'WCAG_2_0'
  },
  properties: [{ name: 'Group', value: 'legacy' }],
  batchName: process.env.CI
    ? undefined
    : prompt(`Please provide a batch name for this run: `) +
      ` (${process.env.LOGNAME})`,
  branchName: process.env.CI
    ? undefined
    : `localRun/${process.env.LOGNAME}/${currentBranch}`,
  parentBranchName: process.env.CI
    ? undefined
    : // : `localRun/${currentBranch}`,
      'salesforce-ux/design-system-internal/232-summer-21',
  showLogs: process.env.CI,
  // saveDebugData: false,
  exitcode: false,
  concurrency: 100,
  serverUrl: 'https://salesforceuxeyesapi.applitools.com',
  include: ({ name, kind, parameters }) => {
    return /^Kitchen Sink/.test(name);
  },
  puppeteerOptions: process.env.CIRCLECI
    ? { executablePath: '/usr/bin/google-chrome' }
    : undefined,
  waitBeforeScreenshot: 250,
  browser: [
    // { width: resolution.width, height: resolution.height, name: 'edgelegacy' },
    { width: resolution.width, height: resolution.height, name: 'ie11' }
  ]
};
