// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Pill } from 'ui/components/pills/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { DockedComposerPanel } from 'ui/components/docked-composer/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';

const Footer = props =>
  <div className="slds-col--bump-left">
    <ButtonIcon
      className="slds-button--icon-container"
      symbol="link"
      assistiveText="Attach File"
      title="Attach File" />
    <ButtonIcon
      className="slds-button--icon-container"
      symbol="insert_template"
      assistiveText="Insert Template"
      title="Insert Template" />
    <ButtonIcon
      className="slds-button--icon-container"
      symbol="insert_tag_field"
      assistiveText="Insert HTML"
      title="Insert HTML" />
    <ButtonIcon
      className="slds-button--icon-container"
      symbol="preview"
      assistiveText="Preview"
      title="Preview" />
    <ButtonIcon
      className="slds-button--icon-container"
      symbol="delete"
      assistiveText="Delete"
      title="Delete" />
    <button className="slds-button slds-button--brand">Send</button>
  </div>;

export default (
  <div className="demo-only" style={{ height: '500px' }}>
    <DockedComposerPanel
      className="slds-is-open"
      bodyClassName="slds-docked-composer__body--email"
      header="New Email"
      headerSymbol="email"
      footer={ <Footer /> }
    >
      <div className="slds-grid">
        <div className="slds-grid slds-grow slds-p-horizontal--small">
          <label className="slds-email-composer__label slds-align-middle" htmlFor="emailComposerTo">To</label>
          <div className="slds-pill_container--bare">
            <Pill label="Lei Chan">
              <span className="slds-icon_container slds-icon-standard-account slds-pill__icon_container">
                <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
                <span className="slds-assistive-text">Account</span>
              </span>
            </Pill>
          </div>
          <input className="slds-input--bare slds-input--height" id="emailComposerTo" type="text" />
        </div>
        <div className="slds-grid slds-col--bump-left slds-shrink-none slds-p-horizontal--small">
          <button className="slds-button">Cc</button>
          <button className="slds-button">Bcc</button>
        </div>
      </div>
      <div className="slds-grid slds-p-horizontal--small">
        <label className="slds-email-composer__label slds-align-middle" htmlFor="emailComposerCc">Cc</label>
        <div className="slds-pill_container--bare slds-hide"></div>
        <input className="slds-input--bare slds-input--height" id="emailComposerCc" type="text" />
      </div>
      <div className="slds-grid slds-p-horizontal--small">
        <label className="slds-email-composer__label slds-align-middle" htmlFor="emailComposerBcc">Bcc</label>
        <div className="slds-pill_container--bare slds-hide"></div>
        <input className="slds-input--bare slds-input--height" id="emailComposerBcc" type="text" />
      </div>
      <label className="slds-assistive-text" htmlFor="subject-1">Enter subject</label>
      <input id="subject-1" className="slds-input" placeholder="Enter Subject" />
      <div className="slds-docked-composer__toolbar slds-shrink-none">
        <div className="slds-grid">
          <div className="slds-picklist slds-picklist--fluid slds-shrink-none slds-m-right--xx-small">
            <button className="slds-button slds-button--neutral slds-picklist__label">
              Font <SvgIcon className="slds-icon slds-icon--small" sprite="utility" symbol="down" />
            </button>
          </div>
          <div className="slds-picklist slds-picklist--fluid slds-shrink-none slds-m-right--xx-small">
            <button className="slds-button slds-button--neutral slds-picklist__label">
              14 <SvgIcon className="slds-icon slds-icon--small" sprite="utility" symbol="down" />
            </button>
          </div>
          <div className="slds-button-group" role="group">
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="bold"
              assistiveText="Bold"
              title="Bold" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="italic"
              assistiveText="Italic"
              title="Italic" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="underline"
              assistiveText="Underline"
              title="Underline" />
          </div>
          <div className="slds-button-group" role="group">
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="richtextnumberedlist"
              assistiveText="Numbered List"
              title="Numbered List" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="richtextbulletedlist"
              assistiveText="Bulleted List"
              title="Bulleted List" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="left_align_text"
              assistiveText="Left Align Text"
              title="Left Align Text" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="center_align_text"
              assistiveText="Center Align Text"
              title="Center Align Text" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="right_align_text"
              assistiveText="Right Align Text"
              title="Right Align Text" />
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="link"
              assistiveText="Link"
              title="Link" />
          </div>
        </div>
      </div>
      <label className="slds-assistive-text" htmlFor="composer-text-input-1">Compose email</label>
      <textarea id="composer-text-input-1" className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Compose email..." />
    </DockedComposerPanel>
  </div>
);
