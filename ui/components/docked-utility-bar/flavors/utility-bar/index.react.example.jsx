// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let UtilityBarItem = props =>
  <li className={ classNames(
    'slds-utility-bar__item',
    { 'slds-has-notification': props.notification },
    props.className
  )}>
    <button
      className={classNames(
        'slds-button slds-utility-bar__action',
        { 'slds-is-active': props.active }
      )}
      aria-pressed={ props.active ? true : false }
    >
      { props.notification ?
        <abbr className="slds-indicator--unread" title="Unread Item" aria-label="Unread Item">
          <span className="slds-assistive-text">●</span>
        </abbr>
      : null }
      <SvgIcon
        className="slds-button__icon slds-button__icon--left"
        sprite="utility"
        symbol={ props.symbol }
      />
      <span className="slds-utility-bar__text">
        { props.children }
      </span>
    </button>
  </li>;

export let UtilityBar = props =>
  <footer className="slds-utility-bar_container" aria-label="Utility Bar">
    <h2 className="slds-assistive-text">Utility Bar</h2>
    <ul className="slds-utility-bar">
      { props.children }
    </ul>
    { props.panel }
  </footer>;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'utility-bar',
    label: 'Docked',
    element:
      <div className="demo-only" style={{ height: '40px' }}>
        <UtilityBar>
          <UtilityBarItem symbol="call">Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
          <UtilityBarItem symbol="omni_channel">
            <span className="slds-m-bottom--xxx-small">Online</span>
            <span>Omni-Channel</span>
          </UtilityBarItem>
        </UtilityBar>
      </div>
  },
  {
    id: 'utility-bar-item-active',
    label: 'Item Active',
    element:
      <div className="demo-only" style={{ height: '40px' }}>
        <UtilityBar>
          <UtilityBarItem symbol="call" active>Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
          <UtilityBarItem symbol="omni_channel">
            <span className="slds-m-bottom--xxx-small">Online</span>
            <span>Omni-Channel</span>
          </UtilityBarItem>
        </UtilityBar>
      </div>
  }
];
