// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { CheckboxStandalone } from '..';
import { FormElement } from '../../form-element/';
import { UtilityIcon } from '../../icons/base/example';

export default (
  <FormElement labelContent="Form Element Label" inputId="checkbox-id-01">
    <CheckboxStandalone id="checkbox-id-01" />
  </FormElement>
);

export let states = [
  {
    id: 'checked',
    label: 'Checked',
    element: (
      <FormElement labelContent="Form Element Label" inputId="checkbox-id-01">
        <CheckboxStandalone id="checkbox-id-01" isChecked />
      </FormElement>
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <FormElement labelContent="Form Element Label" inputId="checkbox-id-01">
        <CheckboxStandalone id="checkbox-id-01" isDisabled />
      </FormElement>
    )
  },
  {
    id: 'checked-disabled',
    label: 'Checked and Disabled',
    element: (
      <FormElement labelContent="Form Element Label" inputId="checkbox-id-01">
        <CheckboxStandalone id="checkbox-id-01" isChecked isDisabled />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        labelContent="Form Element Label"
        inputId="checkbox-id-01"
        isRequired
        hasError
        errorId="checkbox-error-01"
        inlineMessage="This field is required"
      >
        <CheckboxStandalone
          id="checkbox-id-01"
          errorId="checkbox-error-01"
          isRequired
        />
      </FormElement>
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement
        labelContent="Form Element Label"
        inputId="checkbox-id-01"
        isRequired
      >
        <CheckboxStandalone id="checkbox-id-01" isRequired />
      </FormElement>
    )
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
    element: (
      <FormElement
        labelContent="Form Element Label"
        inputId="checkbox-id-01"
        hasTooltip
      >
        <CheckboxStandalone id="checkbox-id-01" />
      </FormElement>
    )
  },
  {
    id: 'required-help-text-icon',
    label: 'Required with Help text icon',
    element: (
      <FormElement
        labelContent="Form Element Label"
        inputId="checkbox-id-01"
        isRequired
        hasTooltip
      >
        <CheckboxStandalone id="checkbox-id-01" isRequired />
      </FormElement>
    )
  },
  {
    id: 'required-help-text-icon-tooltip',
    label: 'Required with Help text icon, showing tooltip',
    element: (
      <div style={{ paddingTop: '3rem' }}>
        <FormElement
          labelContent="Form Element Label"
          inputId="checkbox-id-01"
          isRequired
          hasTooltip
          showTooltip
        >
          <CheckboxStandalone id="checkbox-id-01" isRequired />
        </FormElement>
      </div>
    )
  }
];
