// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { GlobalHeaderDeprecated } from '../base/example';
import GlobalHeader from '../';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('render global header', () => {
  it('renders the deprecated global header', () => {
    matchesMarkupAndStyle(<GlobalHeaderDeprecated />);
  });
  it('render the global header', () => {
    matchesMarkupAndStyle(<GlobalHeader />);
  });
});
