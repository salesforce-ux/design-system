// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

let SizePreviewExample = props => (
  <div className={`slds-size_${props.size}`}>
    <div className="slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small">
      .slds-size_{props.size}
    </div>
  </div>
);

export let examples = [
  {
    id: 'two-column',
    label: '2 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-2" />
        <SizePreviewExample size="1-of-2" />
        <SizePreviewExample size="2-of-2" />
      </div>
    )
  },
  {
    id: 'three-column',
    label: '3 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-3" />
        <SizePreviewExample size="1-of-3" />
        <SizePreviewExample size="1-of-3" />
        <SizePreviewExample size="1-of-3" />
        <SizePreviewExample size="2-of-3" />
        <SizePreviewExample size="3-of-3" />
      </div>
    )
  },
  {
    id: 'four-column',
    label: '4 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-4" />
        <SizePreviewExample size="1-of-4" />
        <SizePreviewExample size="1-of-4" />
        <SizePreviewExample size="1-of-4" />
        <SizePreviewExample size="1-of-4" />
        <SizePreviewExample size="3-of-4" />
        <SizePreviewExample size="2-of-4" />
        <SizePreviewExample size="2-of-4" />
        <SizePreviewExample size="4-of-4" />
      </div>
    )
  },
  {
    id: 'five-column',
    label: '5 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-5" />
        <SizePreviewExample size="1-of-5" />
        <SizePreviewExample size="1-of-5" />
        <SizePreviewExample size="1-of-5" />
        <SizePreviewExample size="1-of-5" />
        <SizePreviewExample size="1-of-5" />
        <SizePreviewExample size="4-of-5" />
        <SizePreviewExample size="2-of-5" />
        <SizePreviewExample size="3-of-5" />
        <SizePreviewExample size="5-of-5" />
      </div>
    )
  },
  {
    id: 'six-column',
    label: '6 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-6" />
        <SizePreviewExample size="1-of-6" />
        <SizePreviewExample size="1-of-6" />
        <SizePreviewExample size="1-of-6" />
        <SizePreviewExample size="1-of-6" />
        <SizePreviewExample size="1-of-6" />
        <SizePreviewExample size="2-of-6" />
        <SizePreviewExample size="4-of-6" />
        <SizePreviewExample size="3-of-6" />
        <SizePreviewExample size="3-of-6" />
        <SizePreviewExample size="6-of-6" />
      </div>
    )
  },
  {
    id: '7-column',
    label: '7 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="1-of-7" />
        <SizePreviewExample size="2-of-7" />
        <SizePreviewExample size="5-of-7" />
        <SizePreviewExample size="3-of-7" />
        <SizePreviewExample size="4-of-7" />
        <SizePreviewExample size="7-of-7" />
      </div>
    )
  },
  {
    id: '8-column',
    label: '8 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="1-of-8" />
        <SizePreviewExample size="2-of-8" />
        <SizePreviewExample size="6-of-8" />
        <SizePreviewExample size="3-of-8" />
        <SizePreviewExample size="5-of-8" />
        <SizePreviewExample size="4-of-8" />
        <SizePreviewExample size="4-of-8" />
        <SizePreviewExample size="8-of-8" />
      </div>
    )
  },
  {
    id: '12-column',
    label: '12 Column Span',
    element: (
      <div className="demo-only demo-only--sizing slds-grid slds-wrap">
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="1-of-12" />
        <SizePreviewExample size="2-of-12" />
        <SizePreviewExample size="10-of-12" />
        <SizePreviewExample size="3-of-12" />
        <SizePreviewExample size="9-of-12" />
        <SizePreviewExample size="4-of-12" />
        <SizePreviewExample size="8-of-12" />
        <SizePreviewExample size="5-of-12" />
        <SizePreviewExample size="7-of-12" />
        <SizePreviewExample size="6-of-12" />
        <SizePreviewExample size="6-of-12" />
        <SizePreviewExample size="12-of-12" />
      </div>
    )
  }
];
