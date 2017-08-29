// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props => (
  <div style={{ background: '##F4F6F9', padding: '1rem' }}>
    <div
      className="slds-align_absolute-center"
      style={{
        textAlign: 'center',
        width: '8rem',
        backgroundColor: '#fff'
      }}
    >
      {props.children}
    </div>
  </div>
);

export default <div>This should have a border.</div>;

export let examples = [
  {
    id: 'top',
    label: 'Top',
    element: (
      <div className="slds-border_top">This should have a top border.</div>
    )
  },
  {
    id: 'right',
    label: 'Right',
    element: (
      <div className="slds-border_right">This should have a right border.</div>
    )
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element: (
      <div className="slds-border_bottom">
        This should have a bottom border.
      </div>
    )
  },
  {
    id: 'left',
    label: 'Left',
    element: (
      <div className="slds-border_left">This should have a left border.</div>
    )
  }
];
