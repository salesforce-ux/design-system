// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const { entry, manifest } = require('../entry');

it('creates an entry', () => {
  expect.assertions(1);
  entry.fork(
    e => {
      throw e;
    },
    generatedEntry => {
      expect(generatedEntry.toJS()).toMatchSnapshot();
    }
  );
});

it('creates a manifest', () => {
  expect.assertions(1);
  manifest.fork(
    e => {
      throw e;
    },
    result => {
      expect(result.toJS()).toMatchSnapshot();
    }
  );
});
