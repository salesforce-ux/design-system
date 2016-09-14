/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Lorem from 'react-lorem-component';

const dialingIcon = (
  <span className="slds-icon_container">
    <SvgIcon className="slds-icon icon-text-call slds-icon--small" sprite="utility" symbol="call" />
    <span className="slds-assistive-text">Call Icon</span>
  </span>
);
const image = (
  <span className="slds-avatar slds-avatar--circle slds-avatar--medium">
    <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
  </span>
);
const recordIcon = (
  <span className="slds-icon_container">
    <SvgIcon className="slds-icon icon-text-questions_and_answers" sprite="utility" symbol="questions_and_answers" />
    <span className="slds-assistive-text">Call Icon</span>
  </span>
);

export default (
  <div className="demo-only">
    {/*<div className="docked-container">*/}
      <div className="docked slds-grid slds-grid--vertical slds-nowrap slds-is-open">

        <div className="slds-docked-composer">
          <div className="slds-docked-composer__header slds-grid slds-grid--align-spread slds-shrink-none">
            <MediaObject figureLeft={dialingIcon}>
              Lei Chan - Connected
            </MediaObject>
            <div className="slds-docked-composer__actions">
              <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="minimize_window" assistiveText="Minimize window" />
              <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="expand_alt" assistiveText="Expand Composer" />
              <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="close" assistiveText="Close" />
            </div>
          </div>
          <div className="slds-docked-composer__body slds-grow slds-grid slds-grid--vertical slds-nowrap">
            <div className="slds-docked-composer__lead slds-grid slds-grid--align-spread slds-shrink-none">
              <MediaObject figureLeft={image}>
                <p className="slds-text-heading--medium">Lei Chan</p>
                <p>Connected</p>
              </MediaObject>
              <MediaObject figureLeft={recordIcon} flavor="center">
                <p className="slds-text-heading--large">5:37</p>
              </MediaObject>
            </div>
            <div className="docked-composer__contacts slds-grid slds-grid--align-spread">
              <div className="slds-pill_container">
                <span className="slds-pill">
                  <a href="javascript:void(0);" className="slds-pill__label">Lei Chan</a>
                  <ButtonIcon flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
                </span>
                <span className="slds-pill">
                  <a href="javascript:void(0);" className="slds-pill__label">Tesla Motors</a>
                  <ButtonIcon flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
                </span>
              </div>
              <ButtonIcon
                className="slds-button--icon-container slds-shrink-none"
                symbol="add"
                assistiveText="Add user" />
            </div>
            <textarea className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Jot down notes here..." />
          </div>
          <div className="slds-docked-composer__footer slds-shrink-none slds-grid slds-grid--align-spread">
            <div>
              <ButtonIcon
                className="slds-button--icon-container"
                symbol="chat"
                assistiveText="Chat" />
              <ButtonIcon
                className="slds-button--icon-container"
                symbol="settings"
                assistiveText="Settings" />
            </div>
            <Button flavor="brand">Call</Button>
          </div>
        </div>

      </div>
    {/*</div>*/}
  </div>
);
