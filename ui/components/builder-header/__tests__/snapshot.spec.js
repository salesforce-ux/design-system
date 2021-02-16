// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import BuilderHeader from '../';
const { matchesMarkup } = createHelpers(__dirname);

describe('render builder header', () => {
  it('render base builder header', () => matchesMarkup(<BuilderHeader />));
  it('render base builder header with truncated name', () =>
    matchesMarkup(
      <BuilderHeader docName="Page Type with a very very long name that will truncate when the container is not wide enough to contain this content completely" />
    ));
  it('render base builder header with toolbar', () =>
    matchesMarkup(<BuilderHeader showToolbar />));
  it('render base builder header with toolbar and status with alert', () =>
    matchesMarkup(<BuilderHeader hasStatus hasWarning hasError showToolbar />));
});
