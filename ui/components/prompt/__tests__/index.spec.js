// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import Prompt from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Prompt', () => {
  it('renders a default prompt', () => matchesMarkup(Prompt));
});
