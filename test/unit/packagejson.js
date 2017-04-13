// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* global describe, it */

import { expect } from 'chai';

describe('package.json', () => {
  const dependencies = require('../../package.json').devDependencies;
  const trustedDependencies = [
    '@salesforce-ux/build-server-api',
    'stylelint-config-slds'
  ];

  it('should reference dependencies with strict version numbers', () => {
    Object.keys(dependencies)
      .filter((name) => trustedDependencies.indexOf(name) === -1)
      .map((name) => {
        const version = dependencies[name];
        const message = `Trust this dependency? Consider adding '${name}' to the list of trustedDependencies`;

        expect(version).to.not.contain('~', message); // e.g. ~1.0.0 (would accept patches)
        expect(version).to.not.contain('^', message); // e.g. ^1.0.0 (would accept 1.1.0, 1.2.0…)
        expect(version).to.not.contain('.x', message); // e.g. 1.0.x, 1.x.x
      });
  });
});
