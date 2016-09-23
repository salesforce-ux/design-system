/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Pill } from 'ui/components/pills/flavors/base/index.react.example';
import Button from 'ui/components/buttons/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { DockedComposerPanel, DockedComposerPanelBody, DockedComposerPanelFooter } from 'ui/components/docked-composer/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';

export default (
  <div className="demo-only" style={{ height: '500px' }}>
    <DockedComposerPanel className="slds-is-open" header="New Email" headerSymbol="email">
      <DockedComposerPanelBody className="slds-docked-composer__body--email">
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
            <Button>Cc</Button>
            <Button>Bcc</Button>
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
                assistiveText="Bold" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="italic"
                assistiveText="Italic" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="underline"
                assistiveText="Underline" />
            </div>
            <div className="slds-button-group" role="group">
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="richtextnumberedlist"
                assistiveText="Numbered List" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="richtextbulletedlist"
                assistiveText="Bulleted List" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="left_align_text"
                assistiveText="Left Align Text" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="center_align_text"
                assistiveText="Center Align Text" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="right_align_text"
                assistiveText="Right Align Text" />
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="link"
                assistiveText="Link" />
            </div>
          </div>
        </div>
        <label className="slds-assistive-text" htmlFor="composer-text-input-1">Compose email</label>
        <textarea id="composer-text-input-1" className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Compose email..." />
      </DockedComposerPanelBody>
      <DockedComposerPanelFooter>
        <div className="slds-col--bump-left">
          <ButtonIcon
            className="slds-button--icon-container"
            symbol="link"
            assistiveText="Attach File" />
          <ButtonIcon
            className="slds-button--icon-container"
            symbol="insert_template"
            assistiveText="Insert Template" />
          <ButtonIcon
            className="slds-button--icon-container"
            symbol="insert_tag_field"
            assistiveText="Insert HTML" />
          <ButtonIcon
            className="slds-button--icon-container"
            symbol="preview"
            assistiveText="Preview" />
          <ButtonIcon
            className="slds-button--icon-container"
            symbol="delete"
            assistiveText="Delete" />
          <Button className="slds-button--brand">Send</Button>
        </div>
      </DockedComposerPanelFooter>
    </DockedComposerPanel>
  </div>
);
