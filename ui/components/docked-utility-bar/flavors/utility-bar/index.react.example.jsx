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
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let UtilityBarItem = props =>
  <li className="slds-utility-bar__item">
    <button className={className('slds-button slds-utility-bar__action', props.className)}>
      <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol={ props.symbol } />
      { props.children }
    </button>
  </li>;

export let UtilityBar = props =>
  <footer className="slds-utility-bar_container" role="footer" aria-label="Utility Bar">
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
        </UtilityBar>
      </div>
  },
  {
    id: 'utility-bar-item-active',
    label: 'Item Active',
    element:
      <div className="demo-only" style={{ height: '40px' }}>
        <UtilityBar>
          <UtilityBarItem symbol="call" className="slds-is-active">Call</UtilityBarItem>
          <UtilityBarItem symbol="clock">History</UtilityBarItem>
          <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        </UtilityBar>
      </div>
  }
];
