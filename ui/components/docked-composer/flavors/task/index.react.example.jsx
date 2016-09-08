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
import Input from 'ui/components/forms/flavors/input/index.react';
import Lorem from 'react-lorem-component';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';


const dialingIcon = (
  <span className={pf('icon_container icon-standard-task')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="task" />
    <span className={pf('assistive-text')}>Task Icon</span>
  </span>
);

let LookupMulti = props =>
  <div className={className(pf('form-element lookup'), props.className)} data-select="multi" data-scope="multi">
    <label className={pf('form-element__label')} htmlFor={props.id}>{props.label}</label>
    <div className={pf('form-element__control lookup__search-control grid box--border')}>
      <div className={pf('dropdown-trigger dropdown-trigger--click align-middle m-left--x-small shrink-none')}>
        <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
        <ButtonIcon className={pf('button-space-left shrink-none')} flavor="icon-bare" sprite="utility" symbol="down" assistiveText="Filter" />
      </div>
      <div className={pf('grid grow')}>
        <input id={props.id} className={pf('lookup__search-input input--bare grow')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder={props.placeholder} defaultValue={props.value} />
      </div>
    </div>
    {props.children}
  </div>;

export default (
  <div className="demo-only">
    {/*<div className={pf('docked-container')}>*/}

      <div role="dialog" aria-labelledby="dialog-heading-id" className={pf('docked-composer grid grid--vertical nowrap is-open')}>

        {/* Composer Header */}
        <header className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
          <MediaObject figureLeft={dialingIcon} flavor="center">
            <h2 id="dialog-heading-id">New Task</h2>
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
        </header>

        {/* Composer Body */}
        <div className={pf('docked-composer__body docked-composer__body--form col grid grid--vertical nowrap')}>

          <fieldset className={pf('form--compound')}>
            <legend className={pf('assistive-text')}>Log new task</legend>
            <div className={pf('form-element__group')}>
              <div className={pf('form-element__row')}>
                <div className={pf('form-element')}>
                  <label className={pf('form-element__label')} htmlFor="text-input-01">Subject</label>
                  <div className={pf('form-element__control')}>
                    <input className={pf('input')} type="text" id="text-input-01" />
                  </div>
                </div>
              </div>

              <div className={pf('form-element__row')}>
                <div className={pf('form-element size--1-of-2')}>
                  <label className={pf('form-element__label')} htmlFor="text-input-02">Assigned To</label>
                  <div className={pf('form-element__control')}>
                    <input className={pf('input')} type="text" id="text-input-02" />
                  </div>
                </div>
                <div className={pf('form-element size--1-of-2')}>
                  <label className={pf('form-element__label')} htmlFor="text-input-03">Due Dates</label>
                  <div className={pf('form-element__control')}>
                    <input className={pf('input')} type="text" id="text-input-03" />
                  </div>
                </div>
              </div>

              <div className={pf('form-element__row')}>
                <LookupMulti label="Name" placeholder="Search Leads" id="lookup-01" className={pf('size--1-of-2')} />
                <LookupMulti label="Related To" placeholder="Search Accounts" id="lookup-02" className={pf('size--1-of-2')} />
              </div>

            </div>
          </fieldset>

        </div>

        {/* Composer Footer */}
        <footer className={pf('docked-composer__footer shrink-none')}>

          <div className={pf('float--right grid grid--align-end size--1-of-2 text-align--right')}>
            <Button flavor="brand">Save</Button>
          </div>

        </footer>
      </div>

    {/*</div>*/}
  </div>
);
