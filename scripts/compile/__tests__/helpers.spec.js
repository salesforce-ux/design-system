// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import path from 'path';

import paths from '../../helpers/paths';
import { chunkedEntry, manifest } from '../helpers';

const __paths = Object.assign({}, paths);

beforeAll(() => {
  paths.root = path.resolve(__paths.root, '__fixtures__');
  paths.ui = path.resolve(__paths.root, '__fixtures__/ui');
});

afterAll(() => {
  Object.assign(paths, __paths);
});

it('creates an entry', () => {
  expect.assertions(1);
  chunkedEntry.fork(
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
