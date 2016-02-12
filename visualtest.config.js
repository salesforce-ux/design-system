const hooks = require('./test/visual/hooks');

module.exports = function() {
  return {
    setup: hooks.setup,
    teardown: hooks.teardown,
    src_folder: ['test/visual/components'],
    test_settings: {
      chrome: {
        selenium_port: 80,
        selenium_host: 'ondemand.saucelabs.com',
        selenium_start_process: false,
        silent: true,
        test_runner: 'mocha',
        screenshots: {
          enabled: true,
          path: ''
        },
        desiredCapabilities: {
          platform: 'mac',
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      },
      firefox: {
        selenium_port: 80,
        selenium_host: 'ondemand.saucelabs.com',
        selenium_start_process: false,
        silent: true,
        test_runner: 'mocha',
        screenshots: {
          enabled: true,
          path: ''
        },
        desiredCapabilities: {
          platform: 'windows',
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      }
    }
  };
};
