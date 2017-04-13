// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let Button = props =>
  <button className={classNames('slds-button', props.className)} disabled={props.disabled}>
    {props.children}
  </button>;

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Button>Button</Button>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Button disabled>Button</Button>
  },
  {
    id: 'icon-left',
    label: 'Neutral with left icon',
    element:
      <Button>
        <SvgIcon
          className="slds-button__icon slds-button__icon--left"
          sprite="utility"
          symbol="download"
        />
        Button Neutral
      </Button>
  },
  {
    id: 'icon-right',
    label: 'Neutral with right icon',
    element:
      <Button>
        Button Neutral
        <SvgIcon
          className="slds-button__icon slds-button__icon--right"
          sprite="utility"
          symbol="down"
        />
      </Button>
  }
];
