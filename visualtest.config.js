const hooks = require('./test/visual/hooks');

module.exports = function() {
  return {
    test_workers: true,
    setup: hooks.setup,
    teardown: hooks.teardown,
    src_folders: ['test/visual/components'],
    test_settings: {
      mac_chrome: {
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
      win_chrome: {
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
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      },
      mac_firefox: {
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
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      },
      win_firefox: {
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
      },
      ie: {
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
          browserName: 'internet explorer',
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      }
    }
  };
};
