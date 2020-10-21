const prompt = require('prompt-sync')({sigint: true});
const branch = require('git-branch');

const currentBranch = branch.sync();

module.exports = {
  appName: 'SLDS',
  matchLevel: 'Strict',
  ignoreDisplacements: true,
  accessibilityValidation: {
    level: 'AA',
    guidelinesVersion: 'WCAG_2_0'
  },
  properties: [
    { name: 'Group', value: 'mobile' }
  ],
  batchName: process.env.CI
        ? undefined
        : prompt(`Please provide a batch name for this run: `) + ` (${process.env.LOGNAME})`,
  branchName: process.env.CI
        ? undefined
        : `localRun/${process.env.LOGNAME}/${currentBranch}`,
  parentBranchName: process.env.CI
        ? undefined
        : `localRun/${currentBranch}`,
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
    {
      iosDeviceInfo: {
        deviceName: 'iPhone XR',
        screenOrientation: 'portrait',
      }
    }
  ]
};
