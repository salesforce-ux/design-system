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

export default (
  <RecordDetail
    direction="stacked"
    snapshot={Snapshot.ObjectFieldTypes}
    isViewMode
    hasInlineEdit
  />
);

export let states = [
  {
    id: 'edit-stacked',
    label: 'Stacked form layout - Edit Mode',
    element: (
      <RecordDetail direction="stacked" snapshot={Snapshot.ObjectFieldTypes} />
    )
  }
];

export let examples = [
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
    id: 'deprecated-view-stacked',
    label: 'Deprecated - Stacked form layout - View Mode',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.DeprecatedObjectFieldTypes}
        isViewMode
        hasInlineEdit
        isDeprecated
      />
    )
  },
  {
    id: 'deprecated-edit-stacked',
    label: 'Deprecated - Stacked form layout - Edit Mode',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.DeprecatedObjectFieldTypes}
        isDeprecated
      />
    )
  },
  {
    id: 'simple-stacked',
    label: 'Simple - Stacked form layout',
    element: (
      <div className="slds-form">
        <FormElement
          labelContent="Text Input"
          inputId="stacked-input-id-01"
          isStacked
        >
          <Input id="stacked-input-id-01" placeholder="Placeholder text…" />
        </FormElement>
        <FormElement
          labelContent="Textarea Input"
          inputId="stacked-input-id-02"
          isStacked
        >
          <Textarea id="stacked-input-id-02" placeholder="Placeholder text…" />
        </FormElement>
        <Fieldset label="Checkbox Group Label" isStacked>
          <Checkbox label="All opportunities owned by you" name="default" />
          <Checkbox
            label="All contacts in the account owned by you"
            name="default"
          />
        </Fieldset>
        <Fieldset label="Radio Group Label" isStacked>
          <Radio label="Lead generation" name="options" />
          <Radio label="Education leads" name="options" />
        </Fieldset>
      </div>
    )
  }
];
