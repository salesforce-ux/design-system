// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Form } from '../base/example';
import { CompoundForm } from '../compound/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Form Layout', () => {
  it('renders a base form layout', () => matchesMarkup(<Form />));

  it('renders a base form layout stacked', () =>
    matchesMarkup(<Form isStacked />));

  it('renders a base form layout horizontally', () =>
    matchesMarkup(<Form isHorizontal />));

  it('renders a compound form layout', () => matchesMarkup(<CompoundForm />));

  it('renders a compound form layout with a tooltip', () =>
    matchesMarkup(<CompoundForm tooltip />));
});
