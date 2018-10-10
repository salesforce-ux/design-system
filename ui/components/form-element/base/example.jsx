// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { FormElement, Fieldset } from '../';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { Radio } from '../../radio-group/base/example';
import { CompoundForm } from '../../form-layout/compound/example';
import RecordDetail from '../record-detail/';
import * as Snapshot from '../record-detail/snapshots.data';

const inputLabel = 'Form Element Label';
const defaultInputId = 'input-unique-id';
const errorId = 'error-message-unique-id';

export default (
  <FormElement labelContent={inputLabel} inputId={defaultInputId}>
    <Input id={defaultInputId} />
  </FormElement>
);

export let states = [
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={defaultInputId}
        isRequired
      >
        <Input id={defaultInputId} required />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={defaultInputId}
        errorId={errorId}
        isRequired
        hasError
        inlineMessage="This field is required"
      >
        <Input id={defaultInputId} required aria-describedby={errorId} />
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'input',
    label: 'Input',
    element: (
      <FormElement labelContent={inputLabel} inputId={defaultInputId}>
        <Input id={defaultInputId} />
      </FormElement>
    )
  },
  {
    id: 'textarea',
    label: 'Textarea',
    element: (
      <FormElement labelContent={inputLabel} inputId={defaultInputId}>
        <Textarea id={defaultInputId} />
      </FormElement>
    )
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" />
      </FormElement>
    )
  },
  {
    id: 'checkbox-required',
    label: 'Checkbox - Required',
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" isRequired />
      </FormElement>
    )
  },
  {
    id: 'checkbox-required-help-text',
    label: 'Checkbox - Required with help text icon',
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" isRequired hasTooltip />
      </FormElement>
    )
  },
  {
    id: 'checkbox-group',
    label: 'Checkbox',
    element: (
      <Fieldset label="Form Element Legend">
        <Checkbox label="Checkbox Label" />
        <Checkbox label="Checkbox Label" />
      </Fieldset>
    )
  },
  {
    id: 'checkbox-group-required',
    label: 'Checkbox',
    element: (
      <Fieldset label="Form Element Legend" isRequired>
        <Checkbox label="Checkbox Label" />
        <Checkbox label="Checkbox Label" />
      </Fieldset>
    )
  },
  {
    id: 'checkbox-group-required-help-text',
    label: 'Checkbox',
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
    )
  },
  {
    id: 'radio-group',
    label: 'Radio Group',
    element: (
      <Fieldset label="Form Element Label">
        <Radio checked label="Radio Label One" />
        <Radio label="Radio Label Two" />
      </Fieldset>
    )
  },
  {
    id: 'radio-group-required',
    label: 'Radio Group - Required',
    element: (
      <Fieldset label="Form Element Label" isRequired>
        <Radio checked label="Radio Label One" />
        <Radio label="Radio Label Two" />
      </Fieldset>
    )
  },
  {
    id: 'radio-group-required-help-text',
    label: 'Radio Group - Required with help text icon',
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
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={defaultInputId}
        inlineMessage="ex: (415)111-2222"
      >
        <Input id={defaultInputId} />
      </FormElement>
    )
  },
  {
    id: 'tooltip-help',
    label: 'Tooltip Help',
    element: (
      <div
        style={{
          paddingTop: '3rem',
          position: 'relative'
        }}
      >
        <FormElement
          labelContent={inputLabel}
          inputId={defaultInputId}
          hasTooltip
          showTooltip
        >
          <Input id={defaultInputId} />
        </FormElement>
      </div>
    )
  },
  {
    id: 'required-tooltip-help',
    label: 'Required - Tooltip Help',
    element: (
      <div
        style={{
          paddingTop: '3rem',
          position: 'relative'
        }}
      >
        <FormElement
          labelContent={inputLabel}
          inputId={defaultInputId}
          hasTooltip
          isRequired
        >
          <Input id={defaultInputId} required />
        </FormElement>
      </div>
    )
  },
  {
    id: 'compound-field',
    label: 'Compound Form Layout',
    element: <CompoundForm />
  },
  {
    id: 'compound-field-required',
    label: 'Required - Compound Form Layout',
    element: <CompoundForm />
  },
  {
    id: 'compound-field-required-tooltip-help',
    label: 'Required with Tooltip Help - Compound Form Layout',
    element: <CompoundForm />
  },
  {
    id: 'stacked',
    label: 'Stacked form layout - View Mode',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.ObjectFieldTypes}
        isViewMode
        hasInlineEdit
      />
    )
  },
  {
    id: 'stacked-single-column',
    label: 'Stacked form layout - 1 column - Read Only Mode',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
      />
    )
  },
  {
    id: 'horizontal-single-column',
    label: 'Horizontal form layout - 1 column - Read Only Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
      />
    )
  },
  {
    id: 'edit-stacked',
    label: 'Stacked form layout - Edit Mode',
    element: (
      <RecordDetail direction="stacked" snapshot={Snapshot.ObjectFieldTypes} />
    )
  },
  {
    id: 'horizontal',
    label: 'Horizontal form layout - View Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
        isViewMode
        hasInlineEdit
      />
    )
  },
  {
    id: 'edit-horizontal',
    label: 'Horizontal form layout - Edit Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
      />
    )
  }
];
