/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Button = require('ui/components/buttons/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const MediaObject = require('ui/components/media-objects/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const Lorem = require('react-lorem-component');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const dialingIcon = (
  <span className={pf('icon__container icon-standard-call')}>
    <SvgIcon className={pf('icon icon--x-small')} sprite="standard" symbol="call" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);
const recordIcon = (
  <span className={pf('icon__container')}>
    <SvgIcon className={pf('icon icon-text-questions_and_answers')} sprite="utility" symbol="questions_and_answers" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);

module.exports = (
  <div className='demo-only'>
    {/*<div className={pf('docked-container')}>*/}

      <div className={pf('docked-composer grid grid--vertical nowrap is-open')}>

        {/* Composer Header */}
        <div className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
          <MediaObject figureLeft={dialingIcon} flavor="center">
            Header
          </MediaObject>
          <div className={pf('docked-composer__actions')}>
            <ButtonIcon
              flavor="icon-bare,icon-inverse"
              sprite="utility"
              symbol="minimize_window"
              assistiveText="Minimize window" />
            <ButtonIcon
              flavor="icon-bare,icon-inverse"
              sprite="utility"
              symbol="expand_alt"
              assistiveText="Expand Composer" />
            <ButtonIcon
              flavor="icon-bare,icon-inverse"
              sprite="utility"
              symbol="close"
              assistiveText="Close" />
          </div>
        </div>

        {/* Composer Body */}
        <div className={pf('docked-composer__body col grid grid--vertical nowrap size--1-of-1')}>

        </div>

        {/* Composer Footer */}
        <div className={pf('docked-composer__footer shrink-none')}>

          <div className={pf('float--right grid grid--align-end size--1-of-2 text-align--right')}>
            <ButtonIcon
              flavor="icon-container"
              sprite="utility"
              symbol="delete"
              assistiveText="Delete" />
            <Button flavor="brand">Action</Button>
          </div>

          <div className={pf('float--left size--1-of-2')}>
            <ButtonIcon
              flavor="icon-container"
              sprite="utility"
              symbol="unmuted"
              assistiveText="Mute Yourself" />
            <ButtonIcon
              flavor="icon-container"
              sprite="utility"
              symbol="volume_high"
              assistiveText="Volume" />
            <ButtonIcon
              flavor="icon-container"
              sprite="utility"
              symbol="apps"
              assistiveText="Volume" />
          </div>

        </div>
      </div>

    {/*</div>*/}
  </div>
);
