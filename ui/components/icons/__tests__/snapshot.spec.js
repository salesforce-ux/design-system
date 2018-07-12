// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { ActionIcon } from '../action/example';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Icon Action', () => {
  it('renders an x-small action icon', () =>
    matchesMarkupAndStyle(<ActionIcon className="slds-icon_x-small" />));
  it('renders an xx-small action icon', () =>
    matchesMarkupAndStyle(<ActionIcon className="slds-icon_xx-small" />));
});
