/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { UtilityBar, UtilityBarItem } from 'ui/components/docked-utility-bar/flavors/utility-bar/index.react.example';
import className from 'classnames';

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
  <div className={className('slds-utility-panel slds-grid slds-grid--vertical', props.className)} role="dialog" aria-labelledby="panel-heading-01">
    <div className="slds-utility-panel__header slds-grid slds-shrink-none">
      <div className="slds-utility-panel__header-label">
        <div className="slds-media slds-media--center">
          <div className="slds-media__figure">
            <span className="slds-icon_container">
              <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
              <span className="slds-assistive-text">Call Icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id="panel-heading-01">{ props.header || 'Header' }</h2>
          </div>
        </div>
      </div>
      <div className="slds-utility-panel__header-icon-action slds-col--bump-left">
        <button className="slds-button slds-button--icon slds-button--icon-inverse">
          <SvgIcon className="slds-button__icon" sprite="utility" symbol="minimize_window" />
          <span className="slds-assistive-text">Minimize</span>
        </button>
      </div>
    </div>
    <div className="slds-utility-panel__body">
      { props.children }
    </div>
  </div>;

const PanelOpen = (
  <UtilityPanel className="slds-is-open">
    <div className="slds-text-align--center slds-align-middle">Utility Panel Body</div>
  </UtilityPanel>
);

const PanelClosed = (
  <UtilityPanel>
    <div className="slds-text-align--center slds-align-middle">Utility Panel Body</div>
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
          <UtilityBarItem symbol="call" className="slds-is-active">Call</UtilityBarItem>
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
        <UtilityBar panel={PanelClosed}>
          <UtilityBarItem symbol="call">Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        </UtilityBar>
      </div>
  }
];
