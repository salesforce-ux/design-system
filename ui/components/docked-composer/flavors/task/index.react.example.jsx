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
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Input from 'ui/components/forms/flavors/input/index.react';
import Lorem from 'react-lorem-component';
import className from 'classnames';


const dialingIcon = (
  <span className="slds-icon_container slds-icon-standard-task">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="task" />
    <span className="slds-assistive-text">Task Icon</span>
  </span>
);

let LookupMulti = props =>
  <div className={className('slds-form-element slds-lookup', props.className)} data-select="multi" data-scope="multi">
    <label className="slds-form-element__label" htmlFor={props.id}>{props.label}</label>
    <div className="slds-form-element__control slds-grid slds-box--border">
      <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-align-middle slds-m-left--x-small slds-shrink-none">
        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small" sprite="standard" symbol="account" />
        <ButtonIcon className="slds-button-space-left slds-shrink-none" sprite="utility" symbol="down" assistiveText="Filter" />
      </div>
      <div className="slds-grid slds-grow">
        <input id={props.id} className="slds-lookup__search-input slds-input--bare slds-grow" type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder={props.placeholder} defaultValue={props.value} />
      </div>
    </div>
    {props.children}
  </div>;

export default (
  <div className="demo-only">
    {/*<div className="docked-container">*/}

      <div role="dialog" aria-labelledby="dialog-heading-id" className="slds-docked-composer slds-grid slds-grid--vertical slds-nowrap slds-is-open">

        {/* Composer Header */}
        <header className="slds-docked-composer__header slds-grid slds-grid--align-spread slds-shrink-none">
          <MediaObject figureLeft={dialingIcon} flavor="center">
            <h2 id="dialog-heading-id">New Task</h2>
          </MediaObject>
          <div className="slds-docked-composer__actions">
            <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="minimize_window" assistiveText="Minimize window" />
            <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="expand_alt" assistiveText="Expand Composer" />
            <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="close" assistiveText="Close" />
          </div>
        </header>

        {/* Composer Body */}
        <div className="slds-docked-composer__body slds-docked-composer__body--form slds-col slds-grid slds-grid--vertical slds-nowrap">

          <fieldset className="slds-form--compound">
            <legend className="slds-assistive-text">Log new task</legend>
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <div className="slds-form-element">
                  <label className="slds-form-element__label" htmlFor="text-input-01">Subject</label>
                  <div className="slds-form-element__control">
                    <input className="slds-input" type="text" id="text-input-01" />
                  </div>
                </div>
              </div>

              <div className="slds-form-element__row">
                <div className="slds-form-element slds-size--1-of-2">
                  <label className="slds-form-element__label" htmlFor="text-input-02">Assigned To</label>
                  <div className="slds-form-element__control">
                    <input className="slds-input" type="text" id="text-input-02" />
                  </div>
                </div>
                <div className="slds-form-element slds-size--1-of-2">
                  <label className="slds-form-element__label" htmlFor="text-input-03">Due Dates</label>
                  <div className="slds-form-element__control">
                    <input className="slds-input" type="text" id="text-input-03" />
                  </div>
                </div>
              </div>

              <div className="slds-form-element__row">
                <Lookup className="slds-size--1-of-2" polymorphic label="Name" placeholder="Search Leads" />
                <Lookup className="slds-size--1-of-2" polymorphic label="Name" placeholder="Search Accounts" />
              </div>

            </div>
          </fieldset>

        </div>

        {/* Composer Footer */}
        <footer className="slds-docked-composer__footer slds-shrink-none">

          <div className="slds-float--right slds-grid slds-grid--align-end slds-size--1-of-2 slds-text-align--right">
            <Button className="slds-button slds-button--brand">Save</Button>
          </div>

        </footer>
      </div>

    {/*</div>*/}
  </div>
);
