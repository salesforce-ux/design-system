/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { expect } from 'chai';
import _ from 'lodash';

const shrinkwrap = require('../../npm-shrinkwrap.json');

describe('shrinkwrapped dependencies', () => {
  after((done) => {
    console.log('⚠️  Run "clingwrap npmbegone" if the tests fail. Clingwrap installation instructions available at https://github.com/goodeggs/clingwrap');
    console.log('️ ️  More information on dependency management at https://github.com/salesforce-ux/design-system-internal/wiki/How-to-install-or-remove-npm-dependencies');
    done();
  });

  _.forEach(shrinkwrap.dependencies, (dependency, dependencyName) => {
    it('should not contain any key pointing to registry.npmjs.org, only to GitHub', (done) => {
      expect(dependency, 'Dependency: ' + dependencyName).to.satisfy(function(dependency) {
        if (dependency.hasOwnProperty('resolved')) {
          return /github/.test(dependency.resolved);
        } else {
          return true;
        }
      });
      done();
    });
    it('should not contain "from"', (done) => {
      expect(dependency, 'Dependency: ' + dependencyName).to.not.have.property('from');
      done();
    });
    it('should have a "version" key with whatever value it has', (done) => {
      expect(dependency, 'Dependency: ' + dependencyName).to.have.property('version');
      done();
    });
  });
});
