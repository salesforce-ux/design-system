module.exports = {
  appName: 'SLDS [V2.mobile]',
  envName: 'V2 - Mobile',
  // batchId: process.env.APPLITOOLS_BATCH_ID,
  batchName: process.env.CIRCLECI
    ? `PR #${process.env.SLDS_PR_NUMBER}`
    : 'Stand-alone',
  showLogs: false,
  saveDebugData: false,
  exitcode: false,
  concurrency: 100,
  serverUrl: 'https://sfdceyesapi.applitools.com',
  include: ({ name, kind, parameters }) => {
    return /^Kitchen Sink/.test(name);
  },
  // storybookConfigDir: `.storybook-v3`,
  waitBeforeScreenshot: 250,
  browser: [
    {
      deviceName: 'iPhone X',
      screenOrientation: 'portrait',
      name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    },
    {
      deviceName: 'Pixel 2',
      screenOrientation: 'portrait',
      name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    }
  ]
};
