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
    label: 'Nubbin Left',
    element: <Popover nubbinPosition="left" />
  },
  {
    id: 'left-top',
    label: 'Nubbin Left (top)',
    element: <Popover nubbinPosition="left-top" />
  },
  {
    id: 'left-top-corner',
    label: 'Nubbin Left (top corner)',
    element: <Popover nubbinPosition="left-top-corner" />
  },
  {
    id: 'left-bottom',
    label: 'Nubbin Left (bottom)',
    element: <Popover nubbinPosition="left-bottom" />
  },
  {
    id: 'left-bottom-corner',
    label: 'Nubbin Left (bottom corner)',
    element: <Popover nubbinPosition="left-bottom-corner" />
  },
  {
    id: 'top',
    label: 'Nubbin Top',
    element: <Popover nubbinPosition="top" />
  },
  {
    id: 'top-left',
    label: 'Nubbin Top (left)',
    element: <Popover nubbinPosition="top-left" />
  },
  {
    id: 'top-left-corner',
    label: 'Nubbin Top (left corner)',
    element: <Popover nubbinPosition="top-left-corner" />
  },
  {
    id: 'top-right',
    label: 'Nubbin Top (right)',
    element: <Popover nubbinPosition="top-right" />
  },
  {
    id: 'top-right-corner',
    label: 'Nubbin Top (right corner)',
    element: <Popover nubbinPosition="top-right-corner" />
  },
  {
    id: 'right',
    label: 'Nubbin Right',
    element: <Popover nubbinPosition="right" />
  },
  {
    id: 'right-top',
    label: 'Nubbin Right (top)',
    element: <Popover nubbinPosition="right-top" />
  },
  {
    id: 'right-top-corner',
    label: 'Nubbin Right (top corner)',
    element: <Popover nubbinPosition="right-top-corner" />
  },
  {
    id: 'right-bottom',
    label: 'Nubbin Right (bottom)',
    element: <Popover nubbinPosition="right-bottom" />
  },
  {
    id: 'right-bottom-corner',
    label: 'Nubbin Right (bottom corner)',
    element: <Popover nubbinPosition="right-bottom-corner" />
  },
  {
    id: 'bottom',
    label: 'Nubbin Bottom',
    element: <Popover nubbinPosition="bottom" />
  },
  {
    id: 'bottom-left',
    label: 'Nubbin Bottom (left)',
    element: <Popover nubbinPosition="bottom-left" />
  },
  {
    id: 'bottom-left-corner',
    label: 'Nubbin Bottom (left corner)',
    element: <Popover nubbinPosition="bottom-left-corner" />
  },
  {
    id: 'bottom-right',
    label: 'Nubbin Bottom (right)',
    element: <Popover nubbinPosition="bottom-right" />
  },
  {
    id: 'bottom-right-corner',
    label: 'Nubbin Bottom (right corner)',
    element: <Popover nubbinPosition="bottom-right-corner" />
  }
];
