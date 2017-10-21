// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.setup';
import { GlobalHeader } from '../base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname, 5555);

it('renders a global header', () => matchesMarkupAndStyle(<GlobalHeader />));
