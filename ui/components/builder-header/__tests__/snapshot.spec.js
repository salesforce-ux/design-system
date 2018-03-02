// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import BuilderHeader from '../';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('render builder header', () => {
  it('render base builder header', () =>
    matchesMarkupAndStyle(<BuilderHeader />));
  it('render base builder header with toolbar', () =>
    matchesMarkupAndStyle(<BuilderHeader showToolbar />));
});
