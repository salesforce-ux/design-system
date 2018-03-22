// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Form } from '../base/example';
import { CompoundForm } from '../compound/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Form Layout', () => {
  xit('renders a base form layout', () => matchesMarkupAndStyle(<Form />));

  it('renders a base form layout horizontally', () =>
    matchesMarkupAndStyle(<Form className="slds-form_horizontal" />));

  it('renders a compound form layout', () =>
    matchesMarkupAndStyle(<CompoundForm />));

  it('renders a compound form layout with a tooltip', () =>
    matchesMarkupAndStyle(<CompoundForm tooltip />));
});
