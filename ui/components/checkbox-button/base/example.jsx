// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { CheckboxButton, CheckboxAddButtonDeprecated } from '../';

export default <CheckboxButton />;

export const states = [
  {
    id: 'checkbox-button-checked',
    label: 'Checked',
    element: <CheckboxButton isChecked />
  },
  {
    id: 'checkbox-button-disabled',
    label: 'Disabled',
    element: <CheckboxButton isDisabled />
  },
  {
    id: 'checkbox-button-checked-disabled',
    label: 'Checked and Disabled',
    element: <CheckboxButton isChecked isDisabled />
  },
  {
    id: 'checkbox-add-button-checked',
    label: 'Deprecated - Checked',
    element: <CheckboxAddButtonDeprecated checked />
  },
  {
    id: 'checkbox-add-button-disabled',
    label: 'Deprecated - Disabled',
    element: <CheckboxAddButtonDeprecated disabled />
  },
  {
    id: 'checkbox-add-button-checked-and-disabled',
    label: 'Deprecated - Checked and Disabled',
    element: <CheckboxAddButtonDeprecated checked disabled />
  }
];

export const examples = [
  {
    id: 'checkbox-button-icon-symbol',
    label: 'Different Icon',
    element: (
      <CheckboxButton
        iconUnchecked="recycle_bin_empty"
        iconChecked="recycle_bin_full"
      />
    )
  },
  {
    id: 'checkbox-button-checked-icon-symbol',
    label: 'Different Icon - Checked',
    element: (
      <CheckboxButton
        iconUnchecked="recycle_bin_empty"
        iconChecked="recycle_bin_full"
        isChecked
      />
    )
  },
  {
    id: 'checkbox-button-disabled-icon-symbol',
    label: 'Different Icon - Disabled',
    element: <CheckboxButton iconUnchecked="recycle_bin_empty" isDisabled />
  },
  {
    id: 'checkbox-button-checked-disabled-icon-symbol',
    label: 'Different Icon - Checked and Disabled',
    element: (
      <CheckboxButton iconChecked="recycle_bin_full" isChecked isDisabled />
    )
  }
];
