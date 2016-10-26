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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Popover } from 'ui/components/popovers/flavors/base/index.react.example';
import className from 'classnames';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let Footer = props =>
  <div className="slds-grid slds-grid--vertical-align-center slds-p-vertical--x-small">
    <span className="slds-text-title">Step 2 of 4</span>
    { props.skipButton ?
      <button className="slds-button slds-button--brand slds-col--bump-left">Skip</button>
    : null }
    { props.setupButton ?
      <button className="slds-button slds-button--success slds-col--bump-left">Setup Email</button>
    : null }
    { props.nextButton ?
      <button className="slds-button slds-button--brand slds-col--bump-left">Next</button>
    : null }
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Popover
        className="slds-popover--walkthrough slds-nubbin--left"
        headerClassName="slds-p-vertical--small"
        headerTitle="Manage your channels"
        footer={ <Footer nextButton /> }
        closeButton
        inverse>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  },
  {
    id: 'micro-setup',
    label: 'Micro Setup',
    element:
      <Popover
        className="slds-popover--walkthrough slds-nubbin--left"
        headerClassName="slds-p-vertical--small"
        headerTitle="Manage your channels"
        footer={ <Footer setupButton nextButton /> }
        closeButton
        inverse>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  },
  {
    id: 'micro-setup-alternate',
    label: 'Micro Setup - Alternate',
    element:
      <Popover
        className="slds-popover--walkthrough slds-nubbin--left"
        headerClassName="slds-p-vertical--small"
        headerTitle="Manage your channels"
        footer={ <Footer skipButton setupButton /> }
        closeButton
        inverse>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  },
  {
    id: 'micro-setup-in-page',
    label: 'Micro Setup - In Page',
    element:
      <Popover
        className="slds-popover--walkthrough slds-nubbin--left"
        headerClassName="slds-p-vertical--small"
        headerTitle="Manage your channels"
        footer={ <Footer skipButton /> }
        closeButton
        inverse>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  },
  {
    id: 'micro-setup-inline-form',
    label: 'Micro Setup - Inline Form',
    element:
      <Popover
        className="slds-popover--walkthrough slds-nubbin--left"
        headerClassName="slds-p-vertical--small"
        headerTitle="Manage your channels"
        footer={ <Footer skipButton nextButton /> }
        closeButton
        inverse>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="slds-form-element slds-p-top--small">
          <label className="slds-form-element__label slds-assistive-text" htmlFor="email-text-input-01">Email Address</label>
          <div className="slds-form-element__control">
            <input id="email-text-input-01" className="slds-input" type="text" placeholder="Email Address" />
          </div>
        </div>
      </Popover>
  },
  {
    id: 'action-popover',
    label: 'Action Popover',
    element:
      <Popover
        className="slds-popover--walkthrough slds-nubbin--top-left"
        title="Action dialog"
        closeButton
        inverse>
        <div className="slds-p-vertical--small slds-grid slds-grid--vertical-align-center">
          <span className="slds-icon_container slds-m-right--small" title="description of icon when needed">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="touch_action" />
            <span className="slds-assistive-text">Description of icon</span>
          </span>
          Click to open a sample case
        </div>
      </Popover>
  }
];
