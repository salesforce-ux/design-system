// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

describe('package.json', () => {
  const dependencies = require('../package.json').devDependencies;
  const trustedDependencies = [
    '@salesforce-ux/build-server-api',
    'stylelint-config-slds'
  ];

  it('should reference dependencies with strict version numbers', () => {
    Object.keys(dependencies)
      .filter(name => trustedDependencies.indexOf(name) === -1)
      .map(name => {
        const version = dependencies[name];
        expect(version).not.toEqual(expect.stringContaining('~')); // e.g. ~1.0.0 (would accept patches)
        expect(version).not.toEqual(expect.stringContaining('^')); // e.g. ^1.0.0 (would accept 1.1.0, 1.2.0…)
        expect(version).not.toEqual(expect.stringContaining('.x')); // e.g. 1.0.x, 1.x.x
      });
  });
});
