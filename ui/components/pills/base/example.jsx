// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Pill = props => (
  <span className={classNames('slds-pill slds-pill_link', props.className)}>
    {props.children}
    <a
      href="javascript:void(0);"
      className="slds-pill__action"
      title={props.label || 'Full pill label verbiage mirrored here'}
    >
      <span className="slds-pill__label">{props.label || 'Pill Label'}</span>
    </a>
    <ButtonIcon
      className="slds-button_icon slds-pill__remove"
      symbol="close"
      assistiveText="Remove"
      title="Remove"
    />
  </span>
);

export let PillContainer = props => (
  <div className={classNames('slds-pill_container', props.className)}>
    {props.children}
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Pill />;

export let examples = [
  {
    id: 'icon',
    label: 'With icon',
    element: (
      <Pill>
        <span className="slds-pill__icon_container">
          <span
            className="slds-icon_container slds-icon-standard-account"
            title="Account"
          >
            <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
            <span className="slds-assistive-text">Account</span>
          </span>
        </span>
      </Pill>
    )
  },
  {
    id: 'avatar',
    label: 'With avatar',
    element: (
      <Pill>
        <span className="slds-pill__icon_container">
          <span className="slds-avatar slds-avatar_circle" title="User avatar">
            <img
              alt="Person name"
              src="/assets/images/avatar2.jpg"
              title="User avatar"
            />
          </span>
        </span>
      </Pill>
    )
  },
  {
    id: 'truncated',
    label: 'Truncated',
    element: (
      <div className="demo-only" style={{ width: '220px' }}>
        <PillContainer>
          <Pill label="Pill label that is longer than the area that contains it" />
        </PillContainer>
      </div>
    )
  },
  {
    id: 'container',
    label: 'Pill with Container',
    element: (
      <PillContainer>
        <Pill />
        <Pill />
        <Pill />
      </PillContainer>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <Pill className="slds-has-error">
        <span className="slds-pill__icon_container">
          <span className="slds-icon_container" title="Error">
            <SvgIcon
              className="slds-icon slds-icon-text-error"
              sprite="utility"
              symbol="error"
            />
            <span className="slds-assistive-text">Warning</span>
          </span>
        </span>
      </Pill>
    )
  }
];
