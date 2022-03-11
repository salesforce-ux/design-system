// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import RecordDetail from './';
import * as Snapshot from './snapshots.data';

// Note: Record Detail - Default is the exact same as Stacked - Default, which is why it is not included in Storybook

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.ObjectFieldTypes}
        isViewMode
        hasInlineEdit
      />
    )
  }
];

export let examples = [
  // Note: This example is the same as the Stacked 'stacked-single-column' example, which is why it is not included in Storybook
  {
    id: 'stacked-single-column',
    label: 'Stacked form layout - 1 column - Read Only Mode',
    element: (
      <RecordDetail
        direction="stacked"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
        isSingleColumn
      />
    ),
  },
  // Note: This example is the same as the Stacked 'edit-stacked' example, which is why it is not included in Storybook
  {
    id: 'edit-stacked',
    label: 'Stacked form layout - Edit Mode',
    element: (
      <RecordDetail direction="stacked" snapshot={Snapshot.ObjectFieldTypes} />
    ),
  },
  // Note: This example is the same as the Horizontal 'form-element-horizontal-default' example, which is why it is not included in Storybook
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
    ),
  },
  // Note: This example is the same as the Horizontal 'horizontal-single-column' example, which is why it is not included in Storybook
  {
    id: 'horizontal-single-column',
    label: 'Horizontal form layout - 1 column - Read Only Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
        isSingleColumn
      />
    ),
  },
  // Note: This example is the same as the Horizontal 'edit-horizontal' example, which is why it is not included in Storybook
  {
    id: 'edit-horizontal',
    label: 'Horizontal form layout - Edit Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesHorizontal}
      />
    ),
  },
];
