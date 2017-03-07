// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Popover } from 'ui/components/popovers/flavors/base/index.react.example';
import classNames from 'classnames';

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
        className="slds-popover_walkthrough slds-nubbin--left"
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
        className="slds-popover_walkthrough slds-nubbin--left"
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
        className="slds-popover_walkthrough slds-nubbin--left"
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
        className="slds-popover_walkthrough slds-nubbin--left"
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
        className="slds-popover_walkthrough slds-nubbin--left"
        headerClassName="slds-p-vertical--small"
        headerTitle="Manage your channels"
        footer={ <Footer skipButton nextButton /> }
        closeButton={true}
        inverse={true}
      >
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
        className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin--top-left"
        title="Action dialog"
        closeButton={true}
        inverse={true}
      >
        <div className="slds-p-vertical--small slds-media slds-media--center">
          <div className="slds-media__figure">
            <span className="slds-icon_container" title="description of icon when needed">
              <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="touch_action" />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <p>Text that describes the action</p>
          </div>
        </div>
      </Popover>
  },
  {
    id: 'action-popover-heading',
    label: 'Action Popover - With Heading',
    element:
      <Popover
        className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin--top-left"
        title="Action dialog"
        headingId="dialog-heading-id-01"
        closeButton={true}
        inverse={true}
      >
        <div className="slds-p-vertical--small slds-media">
          <div className="slds-media__figure">
            <span className="slds-icon_container" title="description of icon when needed">
              <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="touch_action" />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id="dialog-heading-id-01" className="slds-text-heading--small">Title</h2>
            <p>Text that describes the action</p>
          </div>
        </div>
      </Popover>
  }
];
