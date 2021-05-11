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
    context: 'Nubbins',
    id: 'left',
    label: 'Nubbin Left',
    element: <Popover nubbinPosition="left" />
  },
  {
    context: 'Nubbins',
    id: 'left-top',
    label: 'Nubbin Left (top)',
    element: <Popover nubbinPosition="left-top" />
  },
  {
    context: 'Nubbins',
    id: 'left-top-corner',
    label: 'Nubbin Left (top corner)',
    element: <Popover nubbinPosition="left-top-corner" />
  },
  {
    context: 'Nubbins',
    id: 'left-bottom',
    label: 'Nubbin Left (bottom)',
    element: <Popover nubbinPosition="left-bottom" />
  },
  {
    context: 'Nubbins',
    id: 'left-bottom-corner',
    label: 'Nubbin Left (bottom corner)',
    element: <Popover nubbinPosition="left-bottom-corner" />
  },
  {
    context: 'Nubbins',
    id: 'top',
    label: 'Nubbin Top',
    element: <Popover nubbinPosition="top" />
  },
  {
    context: 'Nubbins',
    id: 'top-left',
    label: 'Nubbin Top (left)',
    element: <Popover nubbinPosition="top-left" />
  },
  {
    context: 'Nubbins',
    id: 'top-left-corner',
    label: 'Nubbin Top (left corner)',
    element: <Popover nubbinPosition="top-left-corner" />
  },
  {
    context: 'Nubbins',
    id: 'top-right',
    label: 'Nubbin Top (right)',
    element: <Popover nubbinPosition="top-right" />
  },
  {
    context: 'Nubbins',
    id: 'top-right-corner',
    label: 'Nubbin Top (right corner)',
    element: <Popover nubbinPosition="top-right-corner" />
  },
  {
    context: 'Nubbins',
    id: 'right',
    label: 'Nubbin Right',
    element: <Popover nubbinPosition="right" />
  },
  {
    context: 'Nubbins',
    id: 'right-top',
    label: 'Nubbin Right (top)',
    element: <Popover nubbinPosition="right-top" />
  },
  {
    context: 'Nubbins',
    id: 'right-top-corner',
    label: 'Nubbin Right (top corner)',
    element: <Popover nubbinPosition="right-top-corner" />
  },
  {
    context: 'Nubbins',
    id: 'right-bottom',
    label: 'Nubbin Right (bottom)',
    element: <Popover nubbinPosition="right-bottom" />
  },
  {
    context: 'Nubbins',
    id: 'right-bottom-corner',
    label: 'Nubbin Right (bottom corner)',
    element: <Popover nubbinPosition="right-bottom-corner" />
  },
  {
    context: 'Nubbins',
    id: 'bottom',
    label: 'Nubbin Bottom',
    element: <Popover nubbinPosition="bottom" />
  },
  {
    context: 'Nubbins',
    id: 'bottom-left',
    label: 'Nubbin Bottom (left)',
    element: <Popover nubbinPosition="bottom-left" />
  },
  {
    context: 'Nubbins',
    id: 'bottom-left-corner',
    label: 'Nubbin Bottom (left corner)',
    element: <Popover nubbinPosition="bottom-left-corner" />
  },
  {
    context: 'Nubbins',
    id: 'bottom-right',
    label: 'Nubbin Bottom (right)',
    element: <Popover nubbinPosition="bottom-right" />
  },
  {
    context: 'Nubbins',
    id: 'bottom-right-corner',
    label: 'Nubbin Bottom (right corner)',
    element: <Popover nubbinPosition="bottom-right-corner" />
  }
];
