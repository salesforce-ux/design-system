// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.setup';
import { Submenu } from '../submenu/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a closed submenu', () => matchesMarkupAndStyle(<Submenu />));

it('renders an open submenu', () =>
  matchesMarkupAndStyle(<Submenu ariaExpanded />));
