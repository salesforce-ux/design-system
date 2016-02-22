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
import MediaObject from 'ui/components/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Input from 'ui/components/forms/flavors/input/index.react';
import Lorem from 'react-lorem-component';
import { prefix as pf } from 'app_modules/ui/util/component';


const dialingIcon = (
  <span className={pf('icon_container icon-standard-log-a-call')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="log_a_call" />
    <span className={pf('assistive-text')}>Log a Call Icon</span>
  </span>
);

export default (
  <div className="demo-only">
    {/*<div className={pf('docked-container')}>*/}

      <div className={pf('docked-composer grid grid--vertical nowrap is-open')}>

        {/* Composer Header */}
        <div className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
          <MediaObject figureLeft={dialingIcon} flavor="center">
            Log a Call
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
        <div className={pf('docked-composer__body docked-composer__body--form col grid grid--vertical nowrap size--1-of-1')}>

          <fieldset className={pf('form--compound')}>
            <legend className={pf('assistive-text')}>Log a call</legend>
            <div className={pf('form-element__group')}>
              <div className={pf('form-element__row')}>
                <label className={pf('form-element__control size--1-of-1')}>
                  <span className={pf('form-element__helper')}>Subject</span>
                  <input className={pf('input')} type="text" />
                </label>
              </div>
              <div className={pf('form-element__row')}>
                <label className={pf('form-element__control size--1-of-1')}>
                  <span className={pf('form-element__helper')}>Comments</span>
                  <textarea className={pf('textarea')} type="text" />
                </label>
              </div>
              <div className={pf('form-element__row')}>
                <label className={pf('form-element__control size--1-of-2')}>
                  <span className={pf('form-element__helper')}>Name</span>
                  <div className={pf('lookup')} data-select="multi" data-scope="multi" data-typeahead="false">
                    <div className={pf('grid form-element__control box--border')}>
                      <div className={pf('dropdown-trigger dropdown-trigger--click align-middle')}>
                        <SvgIcon className={pf('icon icon-standard-contact icon--small shrink-none')} sprite="standard" symbol="contact" />
                        <ButtonIcon className={pf('button-space-left shrink-none')} flavor="icon-bare" sprite="utility" symbol="down" assistiveText="Search Related" />
                      </div>
                      <input id="lookupRelated" className={pf('input--bare')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder="Select or Search" />
                    </div>
                    <div className={pf('pill_container hide')}></div>
                  </div>
                </label>
                <label className={pf('form-element__control size--1-of-2')}>
                  <span className={pf('form-element__helper')}>Related To</span>
                  <div className={pf('lookup')} data-select="multi" data-scope="multi" data-typeahead="false">
                    <div className={pf('grid form-element__control box--border')}>
                      <div className={pf('dropdown-trigger dropdown-trigger--click is-open align-middle')}>
                        <SvgIcon className={pf('icon icon-standard-account icon--small shrink-none')} sprite="standard" symbol="account" />
                        <ButtonIcon className={pf('button-space-left shrink-none')} flavor="icon-bare" sprite="utility" symbol="down" assistiveText="Search Related" />
                      </div>
                      <input id="lookupRelated" className={pf('input--bare')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder="Select or Search" />
                    </div>
                    <div className={pf('pill_container hide')}></div>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>

        </div>

        {/* Composer Footer */}
        <div className={pf('docked-composer__footer shrink-none')}>

          <div className={pf('float--right grid grid--align-end size--1-of-2 text-align--right')}>
            <Button flavor="brand">Save</Button>
          </div>

        </div>
      </div>

    {/*</div>*/}
  </div>
);
