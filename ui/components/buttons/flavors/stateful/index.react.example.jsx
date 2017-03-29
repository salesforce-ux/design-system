// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let StatefulButton = props =>
  <button className={classNames('slds-button slds-button--stateful', props.className)} disabled={props.disabled} aria-live="assertive">
    <span className="slds-text-not-selected">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="add" />
      Follow
    </span>
    <span className="slds-text-selected">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="check" />
      Following
    </span>
    <span className="slds-text-selected-focus">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="close" />
      Unfollow
    </span>
  </button>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <StatefulButton className="slds-button--neutral" />
);

export let states = [
  {
    id: 'button-neutral-stateful-not-selected',
    label: 'Neutral - Not Selected',
    element:
      <StatefulButton className="slds-button--neutral slds-not-selected" />
  },
  {
    id: 'button-neutral-stateful-selected',
    label: 'Neutral - Selected',
    element:
      <StatefulButton className="slds-button--neutral slds-is-selected" />
  },
  {
    id: 'button-neutral-stateful-selected-clicked',
    label: 'Neutral - Clicked - Selected',
    element:
      <StatefulButton className="slds-button--neutral slds-is-selected-clicked" />
  },
  {
    id: 'button-neutral-stateful-not-selected-disabled',
    label: 'Neutral - Not Selected - Disabled',
    element:
      <StatefulButton disabled className="slds-button--neutral slds-not-selected" />
  },
  {
    id: 'button-neutral-stateful-is-selected-disabled',
    label: 'Neutral - Selected - Disabled',
    element:
      <StatefulButton disabled className="slds-button--neutral slds-is-selected" />
  },
  {
    id: 'button-inverse-stateful-not-selected',
    label: 'Inverse - Not Selected',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <StatefulButton className="slds-button--inverse slds-not-selected" />
      </div>
  },
  {
    id: 'button-inverse-stateful-selected',
    label: 'Inverse - Selected',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <StatefulButton className="slds-button--inverse slds-is-selected" />
      </div>
  }
];
