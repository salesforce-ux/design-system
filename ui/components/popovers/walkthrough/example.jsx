// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base-legacy/example';
import _ from '../../../shared/helpers';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

export let Header = props => (
  <header className="slds-popover__header slds-p-vertical_medium">
    <h2 id={headingUniqueId} className="slds-text-heading_medium">
      {props.title}
    </h2>
  </header>
);

export let Footer = props => (
  <div className="slds-grid slds-grid_vertical-align-center">
    {props.steps ? <span className="slds-text-title">Step 2 of 4</span> : null}
    {props.skipButton ? (
      <button className="slds-button slds-button_inverse slds-col_bump-left">
        Skip
      </button>
    ) : null}
    {props.setupButton ? (
      <button className="slds-button slds-button_success slds-col_bump-left">
        Setup Email
      </button>
    ) : null}
    {props.nextButton ? (
      <button className="slds-button slds-button_brand slds-col_bump-left">
        Next
      </button>
    ) : null}
    {props.learnMoreButton ? (
      <button className="slds-button slds-button_neutral slds-col_bump-left">
        Learn More
      </button>
    ) : null}
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'walkthrough-default',
    label: 'Deprecated – Walkthrough default',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-nubbin_left"
        headingId={headingUniqueId}
        header={<Header title="Walkthrough title" />}
        footer={<Footer steps nextButton />}
        closeButton
        inverse
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  }
];

export let examples = [
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'micro-setup',
    label: 'Deprecated – Micro Setup',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-nubbin_left"
        headingId={headingUniqueId}
        header={<Header title="Walkthrough title" />}
        footer={<Footer steps setupButton nextButton />}
        closeButton
        inverse
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'micro-setup-alternate',
    label: 'Deprecated – Micro Setup - Alternate',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-nubbin_left"
        headingId={headingUniqueId}
        header={<Header title="Walkthrough title" />}
        footer={<Footer steps skipButton setupButton />}
        closeButton
        inverse
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'micro-setup-in-page',
    label: 'Deprecated – Micro Setup - In Page',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-nubbin_bottom"
        headingId={headingUniqueId}
        header={<Header title="Walkthrough title" />}
        footer={<Footer steps skipButton />}
        closeButton
        inverse
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'micro-setup-inline-form',
    label: 'Deprecated – Micro Setup - Inline Form',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-nubbin_left"
        headingId={headingUniqueId}
        header={<Header title="Walkthrough title" />}
        footer={<Footer steps skipButton nextButton />}
        closeButton
        inverse
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="slds-form-element slds-p-top_small">
          <label
            className="slds-form-element__label slds-assistive-text"
            htmlFor="email-text-input-01"
          >
            Email Address
          </label>
          <div className="slds-form-element__control">
            <input
              id="email-text-input-01"
              className="slds-input"
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'action-popover',
    label: 'Deprecated – Action Popover',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left"
        title="Dialog Title"
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="touch_action"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <p className="slds-text-heading_small">
              Text that describes the action
            </p>
            <p className="slds-m-top_medium slds-text-title">Step 3 of 4</p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'action-popover-heading',
    label: 'Deprecated – Action Popover - With Heading',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left"
        headingId={headingUniqueId}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="touch_action"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Action title
            </h2>
            <p>Text that describes the action</p>
            <p className="slds-m-top_medium slds-text-title">Step 3 of 4</p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Walkthrough',
    deprecated: true,
    id: 'action-popover-with-link',
    label: 'Deprecated – Action Popover - With Link',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left"
        headingId={headingUniqueId}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="touch_action"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Action title
            </h2>
            <p>Text that describes the action</p>
            <a href="#" onClick={e => e.preventDefault()}>
              Take Action
            </a>
            <p className="slds-m-top_medium slds-text-title">Step 3 of 4</p>
          </div>
        </div>
      </Popover>
    )
  }
];
