// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Popover = props => (
  <section
    aria-label="Dialog title"
    aria-describedby="popover-body-id"
    className={`slds-popover slds-nubbin_${props.nubbinPosition}`}
    role="dialog"
  >
    <ButtonIcon
      className="slds-button_icon slds-button_icon-small slds-float_right slds-popover__close"
      symbol="close"
      assistiveText="Close dialog"
      title="Close dialog"
    />
    <div id="popover-body-id" className="slds-popover__body">
      <code>
        slds-popover
        <br />
        {`slds-nubbin_${props.nubbinPosition}`}
      </code>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat?
        Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse
        quasi!
      </p>
    </div>
  </section>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    id: 'left',
    label: 'Left',
    element: <Popover nubbinPosition="left" />
  },
  {
    id: 'left-top',
    label: 'Left (top)',
    element: <Popover nubbinPosition="left-top" />
  },
  {
    id: 'left-bottom',
    label: 'Left (bottom)',
    element: <Popover nubbinPosition="left-bottom" />
  },
  {
    id: 'top',
    label: 'Top',
    element: <Popover nubbinPosition="top" />
  },
  {
    id: 'top-left',
    label: 'Top (left)',
    element: <Popover nubbinPosition="top-left" />
  },
  {
    id: 'top-right',
    label: 'Top (right)',
    element: <Popover nubbinPosition="top-right" />
  },
  {
    id: 'right',
    label: 'Right',
    element: <Popover nubbinPosition="right" />
  },
  {
    id: 'right-top',
    label: 'Right (top)',
    element: <Popover nubbinPosition="right-top" />
  },
  {
    id: 'right-bottom',
    label: 'Right (bottom)',
    element: <Popover nubbinPosition="right-bottom" />
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element: <Popover nubbinPosition="bottom" />
  },
  {
    id: 'bottom-left',
    label: 'Bottom (left)',
    element: <Popover nubbinPosition="bottom-left" />
  },
  {
    id: 'bottom-right',
    label: 'Bottom (right)',
    element: <Popover nubbinPosition="bottom-right" />
  }
];
