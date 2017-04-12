// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { UtilityBar, UtilityBarItem } from 'ui/components/docked-utility-bar/base/example';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const dialingIcon = (
  <span className="slds-icon_container">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
    <span className="slds-assistive-text">Call Icon</span>
  </span>
);

export let UtilityPanel = props =>
  <section className={classNames('slds-utility-panel slds-grid slds-grid--vertical', props.className)} role="dialog" aria-labelledby="panel-heading-01">
    <header className="slds-utility-panel__header slds-grid slds-shrink-none">
      <div className="slds-media slds-media--center slds-size--1-of-1">
        <div className="slds-media__figure slds-m-right--x-small">
          <span className="slds-icon_container">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="call" />
          </span>
        </div>
        <div className="slds-media__body">
          <h2 id="panel-heading-01">{ props.header || 'Header' }</h2>
        </div>
      </div>
      <div className="slds-col--bump-left slds-shrink-none">
        <ButtonIcon
          className="slds-button--icon"
          symbol="minimize_window"
          assistiveText="Close Panel"
          title="Close Panel"
        />
      </div>
    </header>
    <div className="slds-utility-panel__body">
      { props.children }
    </div>
  </section>;

const PanelOpen = (
  <UtilityPanel className="slds-is-open" header="Call">
    <div className="slds-align--absolute-center">Utility Panel Body</div>
  </UtilityPanel>
);

const PanelClosed = (
  <UtilityPanel header="Call">
    <div className="slds-align--absolute-center">Utility Panel Body</div>
  </UtilityPanel>
);

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'utility-panel-open',
    label: 'Open',
    element:
      <div className="demo-only" style={{ height: '540px' }}>
        <UtilityBar panel={PanelOpen}>
          <UtilityBarItem symbol="call" active>Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        </UtilityBar>
      </div>
  },
  {
    id: 'utility-panel-closed',
    label: 'Closed',
    element:
      <div className="demo-only" style={{ height: '540px' }}>
        <UtilityBar>
          <UtilityBarItem symbol="call">Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        </UtilityBar>
      </div>
  }
];
