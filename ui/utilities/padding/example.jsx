// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props => (
  <div className="demo-only-spacing demo-only-padding">{props.children}</div>
);

export let examples = [
  {
    id: 'top',
    label: 'Top',
    element: (
      <div>
        <div className="slds-p-top_none" />
        <div className="slds-p-top_xxx-small" />
        <div className="slds-p-top_xx-small" />
        <div className="slds-p-top_x-small" />
        <div className="slds-p-top_small" />
        <div className="slds-p-top_medium" />
        <div className="slds-p-top_large" />
        <div className="slds-p-top_x-large" />
        <div className="slds-p-top_xx-large" />
      </div>
    )
  },
  {
    id: 'right',
    label: 'Right',
    element: (
      <div>
        <div className="slds-p-right_none" />
        <div className="slds-p-right_xxx-small" />
        <div className="slds-p-right_xx-small" />
        <div className="slds-p-right_x-small" />
        <div className="slds-p-right_small" />
        <div className="slds-p-right_medium" />
        <div className="slds-p-right_large" />
        <div className="slds-p-right_x-large" />
        <div className="slds-p-right_xx-large" />
      </div>
    )
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element: (
      <div>
        <div className="slds-p-bottom_none" />
        <div className="slds-p-bottom_xxx-small" />
        <div className="slds-p-bottom_xx-small" />
        <div className="slds-p-bottom_x-small" />
        <div className="slds-p-bottom_small" />
        <div className="slds-p-bottom_medium" />
        <div className="slds-p-bottom_large" />
        <div className="slds-p-bottom_x-large" />
        <div className="slds-p-bottom_xx-large" />
      </div>
    )
  },
  {
    id: 'left',
    label: 'Left',
    element: (
      <div>
        <div className="slds-p-left_none" />
        <div className="slds-p-left_xxx-small" />
        <div className="slds-p-left_xx-small" />
        <div className="slds-p-left_x-small" />
        <div className="slds-p-left_small" />
        <div className="slds-p-left_medium" />
        <div className="slds-p-left_large" />
        <div className="slds-p-left_x-large" />
        <div className="slds-p-left_xx-large" />
      </div>
    )
  },
  {
    id: 'vertical',
    label: 'Vertical',
    element: (
      <div>
        <div className="slds-p-vertical_none" />
        <div className="slds-p-vertical_xxx-small" />
        <div className="slds-p-vertical_xx-small" />
        <div className="slds-p-vertical_x-small" />
        <div className="slds-p-vertical_small" />
        <div className="slds-p-vertical_medium" />
        <div className="slds-p-vertical_large" />
        <div className="slds-p-vertical_x-large" />
        <div className="slds-p-vertical_xx-large" />
      </div>
    )
  },
  {
    id: 'horizontal',
    label: 'Horizontal',
    element: (
      <div>
        <div className="slds-p-horizontal_none" />
        <div className="slds-p-horizontal_xxx-small" />
        <div className="slds-p-horizontal_xx-small" />
        <div className="slds-p-horizontal_x-small" />
        <div className="slds-p-horizontal_small" />
        <div className="slds-p-horizontal_medium" />
        <div className="slds-p-horizontal_large" />
        <div className="slds-p-horizontal_x-large" />
        <div className="slds-p-horizontal_xx-large" />
      </div>
    )
  },
  {
    id: 'around',
    label: 'Around',
    element: (
      <div>
        <div className="slds-p-around_none" />
        <div className="slds-p-around_xxx-small" />
        <div className="slds-p-around_xx-small" />
        <div className="slds-p-around_x-small" />
        <div className="slds-p-around_small" />
        <div className="slds-p-around_medium" />
        <div className="slds-p-around_large" />
        <div className="slds-p-around_x-large" />
        <div className="slds-p-around_xx-large" />
      </div>
    )
  }
];
