const resolution = { width: 1366, height: 768 };

module.exports = {
  appName: 'SLDS (design-system-internal) [V2]',
  envName: 'version 2',
  // batchId: process.env.APPLITOOLS_BATCH_ID,
  batchName: process.env.CIRCLECI
    ? `PR #${process.env.SLDS_PR_NUMBER}`
    : 'Stand-alone',
  showLogs: true,
  saveDebugData: false,
  exitcode: false,
  concurrency: 100,
  serverUrl: 'https://sfdceyesapi.applitools.com',
  include: ({ name, kind, parameters }) => {
    return /^Kitchen Sink/.test(name);
  },
  // storybookConfigDir: `.storybook-v3`,
  runInDocker: true,
  // puppeteerOptions: {
  //   args: ['--no-sandbox']
  // },
  waitBeforeScreenshot: 250,
  browser: [
    { width: resolution.width, height: resolution.height, name: 'firefox' },
    { width: resolution.width, height: resolution.height, name: 'chrome' },
    { width: resolution.width, height: resolution.height, name: 'safari' },
    // {
    //   deviceName: 'iPhone X',
    //   screenOrientation: 'portrait',
    //   name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    // },
    // {
    //   deviceName: 'Pixel 2',
    //   screenOrientation: 'landscape',
    //   name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    // },
    { width: resolution.width, height: resolution.height, name: 'ie11' },
    { width: resolution.width, height: resolution.height, name: 'edgechromium' }
  ]
};
