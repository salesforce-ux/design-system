/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

module.exports = function(driver, loginUrl) {

  describe('SLDS main site pages', function() {

    // ///////////////////////////////////////
    // HOME PAGE CHECK
    // ///////////////////////////////////////
    it('should have a home page', function() {
      return driver.get(loginUrl).then(function() {
        return driver.getTitle().then(function(title) {
          assert.equal("Salesforce Lightning Design System", title);
        });
      });
    });

    it('home page should link through to core markup page', function() {
      return driver.get(loginUrl).then(function() {
        return driver.findElement({linkText: 'Core markup'}).click().then(function() {
          driver.findElements(webdriver.By.tagName('h1')).
            then(function(headings) {
              // console.log("Found " + headings.length + " h1's");
              return headings[1].getText().then(function(value) {
                return assert.equal("Core", value);
            });
          });
        });
      });
    });

    it('home page should link through to components page', function() {
      return driver.get(loginUrl).then(function() {
        return driver.findElement({linkText: 'Components'}).click().then(function() {
          driver.findElements(webdriver.By.tagName('h1')).
            then(function(headings) {
              // console.log("Found " + headings.length + " h1's");
              return headings[1].getText().then(function(value) {
                return assert.equal("Components", value);
            });
          });
        });
      });
    });


    it('should link through to utilities page', function() {
      return driver.get(loginUrl).then(function() {

        return driver.findElement({linkText: 'Utilities'}).click().then(function() {

          driver.findElements(webdriver.By.tagName('h1')).
            then(function(headings) {
              // console.log("Found " + headings.length + " h1's");
              return headings[1].getText().then(function(value) {
                return assert.equal("Utilities", value);
            });
          });
        });
      });
    });

    it('should link through to design properties page', function() {
      return driver.get(loginUrl).then(function() {
        return driver.findElement({linkText: 'Design Tokens'}).click()
        .then(function() {
          driver.findElements(webdriver.By.tagName('h1')).
            then(function(headings) {
              // console.log("Found " + headings.length + " h1's");
              return headings[1].getText().then(function(value) {
                return assert.equal("Design Tokens", value);
            });
          });
        });
      });
    });


    it('should link through to resources page', function() {
      return driver.get(loginUrl).then(function() {
        return driver.findElement({linkText: 'Resources'}).click()
        .then(function() {
          driver.findElements(webdriver.By.tagName('h1')).
            then(function(headings) {
              // console.log("Found " + headings.length + " h1's");
              return headings[1].getText().then(function(value) {
                return assert.equal("Resources", value);
            });
          });
        });
      });
    });

    it('should link through to downloads page', function() {
      return driver.get(loginUrl).then(function() {
        return driver.findElement({linkText: 'Resources'}).click()
        .then(function() {
          return driver.findElement({linkText: 'Downloads'}).click()
          .then(function() {
            driver.findElements(webdriver.By.tagName('h1')).
              then(function(headings) {
                // console.log("Found " + headings.length + " h1's");
                return headings[1].getText().then(function(value) {
                  return assert.equal("Downloads", value);
                });
              });
          });
          });
        });
      });
  }); // end
}


