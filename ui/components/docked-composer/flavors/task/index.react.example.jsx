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
import { DockedComposerPanel, DockedComposerPanelBody, DockedComposerPanelFooter } from 'ui/components/docked-composer/flavors/base/index.react.example';
import className from 'classnames';

export default (
  <div className="demo-only" style={{ height: '500px' }}>
    <DockedComposerPanel className="slds-is-open" header="New Task" headerSymbol="task">
      <DockedComposerPanelBody className="slds-docked-composer__body--form">
        <fieldset className="slds-form--compound">
          <legend className="slds-assistive-text">Log new task</legend>
          <div className="form-element__group">
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
      </DockedComposerPanelBody>
      <DockedComposerPanelFooter>
        <Button className="slds-button--brand slds-col--bump-left">Save</Button>
      </DockedComposerPanelFooter>
    </DockedComposerPanel>
  </div>
);
