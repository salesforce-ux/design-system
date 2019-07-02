// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { FormElementCheckboxStandalone } from './';
import { FormElement } from '../../form-element/';
import { UtilityIcon } from '../../icons/base/example';

export default <FormElementCheckboxStandalone />;

export let states = [
  {
    id: 'checked',
    label: 'Checked',
    element: <FormElementCheckboxStandalone isChecked />
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: <FormElementCheckboxStandalone isDisabled />
  },
  {
    id: 'checked-disabled',
    label: 'Checked and Disabled',
    element: <FormElementCheckboxStandalone isChecked isDisabled />
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElementCheckboxStandalone
        isRequired
        hasError
        inlineMessage="This field is required"
      />
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: <FormElementCheckboxStandalone isRequired />
  },
  {
    id: 'view-mode-unchecked',
    label: 'View mode - Unchecked',
    element: (
      <FormElement labelContent="Form Element Label" isViewMode>
        <UtilityIcon
          symbol="steps"
          size="x-small"
          useCurrentColor
          assistiveText="False"
          title="False"
        />
      </FormElement>
    )
  },
  {
    id: 'view-mode-checked',
    label: 'View mode - Checked',
    element: (
      <FormElement labelContent="Form Element Label" isViewMode>
        <UtilityIcon
          symbol="check"
          size="x-small"
          useCurrentColor
          assistiveText="True"
          title="True"
        />
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'help-text-icon',
    label: 'Help text icon',
    element: <FormElementCheckboxStandalone hasTooltip />
  },
  {
    id: 'required-help-text-icon',
    label: 'Required with Help text icon',
    element: <FormElementCheckboxStandalone isRequired hasTooltip />
  },
  {
    id: 'required-help-text-icon-tooltip',
    label: 'Required with Help text icon, showing tooltip',
    element: (
      <div style={{ paddingTop: '3rem' }}>
        <FormElementCheckboxStandalone isRequired hasTooltip showTooltip />
      </div>
    )
  }
];
