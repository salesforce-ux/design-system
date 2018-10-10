// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import RecordDetail from './';
import * as Snapshot from './snapshots.data';

export default (
  <RecordDetail
    direction="stacked"
    snapshot={Snapshot.ObjectFieldTypes}
    isViewMode
    hasInlineEdit
  />
);

export let examples = [
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
    id: 'horizontal-single-column',
    label: 'Horizontal form layout - 1 column - Read Only Mode',
    element: (
      <RecordDetail
        direction="horizontal"
        snapshot={Snapshot.ObjectFieldTypesSingleColumn}
        isViewMode
        isSingleColumn
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
