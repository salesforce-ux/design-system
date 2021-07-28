// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { FormElement, Fieldset } from '../';
import Input from '../../input/';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { Radio } from '../../radio-group/base/example';

const storyContext = 'Base';
const inputLabel = 'Form Element Label';
const errorId = 'error-message-unique-id';

export default [
  {
    id: 'default',
    label: `${storyContext} - Default`,
    context: `${storyContext}`,
    element: (
      <FormElement labelContent={inputLabel} inputId="input-unique-id-01">
        <Input id="input-unique-id-01" />
      </FormElement>
    ),
  },
];

export let states = [
  {
    id: 'required',
    label: `${storyContext} - Required`,
    context: `${storyContext}`,
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="input-unique-id-02"
        isRequired
      >
        <Input id="input-unique-id-02" required />
      </FormElement>
    ),
  },
  {
    id: 'error',
    label: `${storyContext} - Error`,
    context: `${storyContext}`,
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="input-unique-id-03"
        errorId={errorId}
        isRequired
        hasError
        inlineMessage="This field is required"
      >
        <Input id="input-unique-id-03" required aria-describedby={errorId} />
      </FormElement>
    ),
  },
  {
    id: 'checkbox-required',
    label: `${storyContext} - Checkbox - Required`,
    context: `${storyContext}`,
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" isRequired />
      </FormElement>
    ),
  },
  {
    id: 'checkbox-required-help-text',
    label: `${storyContext} - Checkbox - Required (help text icon)`,
    context: `${storyContext}`,
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" isRequired hasTooltip />
      </FormElement>
    ),
  },
  {
    id: 'checkbox-group-required',
    label: `${storyContext} - Checkbox Group (Required)`,
    context: `${storyContext}`,
    element: (
      <Fieldset label="Form Element Legend" isRequired>
        <Checkbox label="Checkbox Label" />
        <Checkbox label="Checkbox Label" />
      </Fieldset>
    ),
  },
  {
    id: 'checkbox-group-required-help-text',
    label: `${storyContext} - Checkbox Group (Required with help text icon)`,
    context: `${storyContext}`,
    element: (
      <Fieldset
        id="fieldset-with-help-text"
        label="Form Element Legend"
        isRequired
        hasTooltip
      >
        <Checkbox label="Checkbox Label" />
        <Checkbox label="Checkbox Label" />
      </Fieldset>
    ),
  },
  {
    id: 'radio-group-required',
    label: `${storyContext} - Radio Group (Required)`,
    context: `${storyContext}`,
    element: (
      <Fieldset label="Form Element Label" isRequired>
        <Radio checked label="Radio Label One" />
        <Radio label="Radio Label Two" />
      </Fieldset>
    ),
  },
  {
    id: 'radio-group-required-help-text',
    label: `${storyContext} - Radio Group (Required with help text icon)`,
    context: `${storyContext}`,
    element: (
      <Fieldset
        id="fieldset-with-help-text"
        label="Form Element Label"
        isRequired
        hasTooltip
      >
        <Radio checked label="Radio Label One" />
        <Radio label="Radio Label Two" />
      </Fieldset>
    ),
  },
  {
    id: 'required-tooltip-help',
    label: `${storyContext} - Tooltip Help (Required)`,
    context: `${storyContext}`,
    demoStyles: `padding-top: 3rem; position: relative`,
    storybookStyles: true,
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="input-unique-id-04"
        hasTooltip
        showTooltip
        isRequired
      >
        <Input id="input-unique-id-04" required />
      </FormElement>
    ),
  },
];

export let examples = [
  {
    id: 'input',
    label: `${storyContext} - Input`,
    context: `${storyContext}`,
    element: (
      <FormElement labelContent={inputLabel} inputId="input-unique-id-05">
        <Input id="input-unique-id-05" />
      </FormElement>
    ),
  },
  {
    id: 'textarea',
    label: `${storyContext} - Textarea`,
    context: `${storyContext}`,
    element: (
      <FormElement labelContent={inputLabel} inputId="input-unique-id-06">
        <Textarea id="input-unique-id-06" />
      </FormElement>
    ),
  },
  {
    id: 'checkbox',
    label: `${storyContext} - Checkbox`,
    context: `${storyContext}`,
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" />
      </FormElement>
    ),
  },
  {
    id: 'checkbox-group',
    label: `${storyContext} - Checkbox Group`,
    context: `${storyContext}`,
    element: (
      <Fieldset label="Form Element Legend">
        <Checkbox label="Checkbox Label" />
        <Checkbox label="Checkbox Label" />
      </Fieldset>
    ),
  },
  {
    id: 'radio-group',
    label: `${storyContext} - Radio Group`,
    context: `${storyContext}`,
    element: (
      <Fieldset label="Form Element Label">
        <Radio checked label="Radio Label One" />
        <Radio label="Radio Label Two" />
      </Fieldset>
    ),
  },
  {
    id: 'inline-help',
    label: `${storyContext} - Inline Help`,
    context: `${storyContext}`,
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="input-unique-id-07"
        inlineMessage="ex: (415)111-2222"
      >
        <Input id="input-unique-id-07" />
      </FormElement>
    ),
  },
  {
    id: 'tooltip-help',
    label: `${storyContext} - Tooltip Help`,
    context: `${storyContext}`,
    demoStyles: `padding-top: 3px; position: relative`,
    storybookStyles: true,
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="input-unique-id-08"
        hasTooltip
        showTooltip
      >
        <Input id="input-unique-id-08" />
      </FormElement>
    ),
  },
];
