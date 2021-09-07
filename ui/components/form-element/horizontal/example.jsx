// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import RecordDetail from '../record-detail/';
import * as Snapshot from '../record-detail/snapshots.data';
import { FormElement, Fieldset } from '..';
import Input from '../../input/';
import { Textarea } from '../../textarea/base/example';
import { Radio } from '../../radio-group/base/example';
import { Checkbox } from '../../checkbox/base/example';

const horizontalContext = 'Horizontal';

export default [
  {
    id: 'form-element-horizontal-default',
    label: `${horizontalContext} - Default`,
    context: `${horizontalContext}`,
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
        isViewMode
        hasInlineEdit
      />
    ),
  },
];

export let states = [
  {
    id: 'edit-horizontal',
    label: `${horizontalContext} - Edit Mode`,
    context: `${horizontalContext}`,
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
      />
    ),
  },
  {
    id: 'form-element-horizontal-edit-error',
    label: `${horizontalContext} - (Edit Mode with Error)`,
    context: `${horizontalContext}`,
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontalWithError}
      />
    ),
  },
];

export let examples = [
  {
    id: 'horizontal-single-column',
    label: `${horizontalContext} - 1 column - Read Only Mode`,
    context: `${horizontalContext}`,
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
      />
    ),
  },
  {
    id: 'deprecated-view-horizontal',
    label: `${horizontalContext} - View Mode (Deprecated)`,
    context: 'Deprecated',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.DeprecatedObjectFieldTypes}
        isViewMode
        hasInlineEdit
        isDeprecated
      />
    ),
  },
  {
    id: 'deprecated-edit-horizontal',
    label: `${horizontalContext} - Edit Mode (Deprecated)`,
    context: 'Deprecated',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.DeprecatedObjectFieldTypes}
        isDeprecated
      />
    ),
  },
  {
    id: 'simple-horizontal',
    label: `${horizontalContext} - Simple form layout`,
    context: `${horizontalContext}`,
    element: (
      <div className="slds-form">
        <FormElement
          labelContent="Text Input"
          inputId="horizontal-input-id-01"
          isHorizontal
        >
          <Input id="horizontal-input-id-01" placeholder="Placeholder text…" />
        </FormElement>
        <FormElement
          labelContent="Textarea Input"
          inputId="horizontal-input-id-02"
          isHorizontal
        >
          <Textarea
            id="horizontal-input-id-02"
            placeholder="Placeholder text…"
          />
        </FormElement>
        <Fieldset label="Checkbox Group Label" isHorizontal>
          <Checkbox label="All opportunities owned by you" name="default" />
          <Checkbox
            label="All contacts in the account owned by you"
            name="default"
          />
        </Fieldset>
        <Fieldset label="Radio Group Label" isHorizontal>
          <Radio label="Lead generation" name="options" />
          <Radio label="Education leads" name="options" />
        </Fieldset>
      </div>
    ),
  },
  {
    id: 'horizontal',
    label: `${horizontalContext} - View Mode`,
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
        isViewMode
        hasInlineEdit
      />
    ),
  },
];
