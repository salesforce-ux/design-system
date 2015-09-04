/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// SLDS test runner
// command line args:
//   --runfrom [local | sauce] : where to run tests FROM'
//   --testserver [local | prod | stage | test] : where to run tests ON'
//   --osTarget XYZ: e.g. \"Windows 2012\"')
//   --browserTarget XYZ : e.g. \"Internet explorer\"'
//   --test [mainsite  | components | core]

var webdriver = require('selenium-webdriver');
// var test = require('selenium-webdriver/testing');
var parseArgs = require('minimist');

var sauce = 'http://ondemand.saucelabs.com:80/wd/hub';

var lndmrkUsername = process.env.LNDMRK_USERNAME;
var lndmrkPassword = process.env.LNDMRK_PASSWD;

// Setup URLs

var loginUrl;
var componentsUrl;
var iconsUrl;
var coreUrl;
var designTokensUrl;

var driver;

var osTarget = null;
var browserTarget = null;
var runfromlocation = null;
var testserver = null;

var argv = require('minimist')(process.argv.slice(2));
osTarget = argv['osTarget'];
browserTarget = argv['browserTarget'];
runfromlocation = argv['runfrom'];
testserver = argv['server'];
testsToRun = argv['test'];

var showUsage = function() {
  console.log('Did you use the correct test script arguments?');
  console.log('--runfrom [local | sauce] : where to run tests FROM');
  console.log('--testserver [local | prod | stage | test] : where to run tests ON');
  console.log('--osTarget XYZ: e.g. \"Windows 2012\"')
  console.log('--browserTarget XYZ : e.g. \"Internet explorer\"');
  console.log('--test [mainsite | components | core] ');
}

if (runfromlocation == 'local') {
  osTarget = 'local';
  browserTarget = 'chrome';
}

if ((testsToRun == null) || (runfromlocation == null) || (osTarget == null) || (browserTarget == null) || (testserver == null)) {
  showUsage();
  process.exit(1);
}


// check run from location
switch (runfromlocation) {
  case 'sauce':
    break;
  case 'local':
    break;
  default:
    console.log('Cancelling due to unknown run from location: ' + runfromlocation);
    showUsage();
    process.exit(1);
}
console.log("Running tests from: " + runfromlocation);


// check server we are testing
var testurl;
switch (testserver) {
  case 'prod':
    testurl = 'lndmrk.herokuapp.com';
    break;
  case 'stage':
    testurl = 'lndmrk-dev.herokuapp.com';
    break;
  case 'test':
    testurl = 'lndmrk-dev2.herokuapp.com';
    break;
  case 'local':
    testurl = 'localhost:3000';
    break;
  default:
    console.log('Cancelling - due to unknown test server: ' + testserver);
    showUsage();
    process.exit(1);
}
console.log("Test target server: " + testurl);

// check test is valid
switch (testsToRun) {
  case "mainsite":
    break;
  case "core":
    break;
  case "components":
    break;
  default:
    console.log('Cancelling due to unknown test: ' + testsToRun);
    showUsage();
    process.exit(1);
    break;
} 
console.log('Test battery to run: ' + testsToRun);


// ///////////////////////////////////
// SETUP/TIDY BEFORE/AFTER SCRIPTS
// ///////////////////////////////////
before(function(done) {
  console.log('OS: ' + osTarget + ' browser: ' + browserTarget);

  if (runfromlocation == 'sauce') {

    console.log("*** Running tests on SAUCELABS ***");
    loginUrl = 'http://' + lndmrkUsername + ':' + lndmrkPassword + '@' + testurl;

    coreUrl = loginUrl + '/develop/core/#/';
    componentsUrl = loginUrl + '/develop/components/#/';
    utilitiesUrl = loginUrl + '/develop/utilities/#/';
    iconsUrl = loginUrl + '/develop/icons/';
    designTokensUrl = loginUrl + '/develop/tokens/#/';

    driver = new webdriver.Builder().
      usingServer(sauce).
      withCapabilities({
          browserName: browserTarget,
          platform: osTarget,
          name: 'SLDS test: ' + testsToRun + ' on ' + testserver + ' using ' + osTarget + '/' +browserTarget,
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY
      }).
      build();

      driver.get(loginUrl).then(function() {
        done();
      });

  } else if (runfromlocation == 'local'){

    // assume local

    console.log('*** Running tests LOCALLY ***');
    loginUrl = 'http://localhost:3000';

    coreUrl = loginUrl + '/develop/core/#/';
    componentsUrl = loginUrl + '/develop/components/#/';
    utilitiesUrl = loginUrl + '/develop/utilities/#/';
    iconsUrl = loginUrl + '/develop/icons/';
    designTokensUrl = loginUrl + '/develop/tokens/#/';

    driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.chrome()).
      build();
    driver.get(loginUrl).then(function() {
      done();
    });

  } else {
    console.log('Cancelling: unknown runfrom location');
    showUsage();
    process.exit(1); 
  }

});

after(function(done){
  // runs after all tests in this block
  console.log('Finished tests');
  driver.quit().then(done);
});

switch (testsToRun) {

  case "mainsite":
    describe('Testing main site ...', function() {
      it('should pass all main site tests', function() {
        require('./test-mainsite')(driver, loginUrl);
      });
    })
    break;
  case "core":
    describe('Testing core ...', function() {
      it('should pass all core tests', function() {
        require('./test-core')(driver, coreUrl);
      });
    })
    break;
  case "components":
    describe('Testing components ...', function() {
      it('should pass all components tests', function() {
        require('./test-components')(driver, componentsUrl);
      });
    })
    break;
  default:
    console.log('Cancelling: unknown test');
    showUsage();
    process.exit(1);
    break;
} 





