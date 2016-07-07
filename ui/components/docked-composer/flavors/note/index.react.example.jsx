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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Lorem from 'react-lorem-component';
import { prefix as pf } from 'app_modules/ui/util/component';

const dialingIcon = (
  <span className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon-text-call icon--small')} sprite="utility" symbol="call" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);
const image = (
  <span className={pf('avatar avatar--circle avatar--medium')}>
    <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
  </span>
);
const recordIcon = (
  <span className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon-text-questions_and_answers')} sprite="utility" symbol="questions_and_answers" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);

export default (
  <div className="demo-only">
    {/*<div className={pf('docked-container')}>*/}
      <div className={pf('docked grid grid--vertical nowrap is-open')}>

        <div className={pf('docked-composer')}>
          <div className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
            <MediaObject figureLeft={dialingIcon}>
              Lei Chan - Connected
            </MediaObject>
            <div className={pf('docked-composer__actions')}>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="inverse"
                sprite="utility"
                symbol="dash"
                assistiveText="Minimize window" />
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="inverse"
                sprite="utility"
                symbol="new_window"
                assistiveText="Open in window" />
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="inverse"
                sprite="utility"
                symbol="close"
                assistiveText="Close" />
            </div>
          </div>
          <div className={pf('docked-composer__body grow grid grid--vertical nowrap')}>
            <div className={pf('docked-composer__lead grid grid--align-spread shrink-none')}>
              <MediaObject figureLeft={image}>
                <p className={pf('text-heading--medium')}>Lei Chan</p>
                <p>Connected</p>
              </MediaObject>
              <MediaObject figureLeft={recordIcon} flavor="center">
                <p className={pf('text-heading--large')}>5:37</p>
              </MediaObject>
            </div>
            <div className={pf('docked-composer__contacts grid grid--align-spread')}>
              <div className={pf('pill_container')}>
                <span className={pf('pill')}>
                  <a href="javascript:void(0);" className={pf('pill__label')}>Lei Chan</a>
                  <ButtonIcon flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
                </span>
                <span className={pf('pill')}>
                  <a href="javascript:void(0);" className={pf('pill__label')}>Tesla Motors</a>
                  <ButtonIcon flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
                </span>
              </div>
              <ButtonIcon
                className={pf('shrink-none')}
                flavor="icon-container"
                sprite="utility"
                symbol="add"
                assistiveText="Add user" />
            </div>
            <textarea className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
          </div>
          <div className={pf('docked-composer__footer shrink-none grid grid--align-spread')}>
            <div>
              <ButtonIcon
                flavor="icon-container"
                sprite="utility"
                symbol="chat"
                assistiveText="Chat" />
              <ButtonIcon
                flavor="icon-container"
                sprite="utility"
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
