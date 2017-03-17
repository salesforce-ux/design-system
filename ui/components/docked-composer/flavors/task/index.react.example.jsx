// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example';
import { DockedComposerPanel } from 'ui/components/docked-composer/flavors/base/index.react.example';
import classNames from 'classnames';

export default (
  <div className="demo-only" style={{ height: '500px' }}>
    <DockedComposerPanel
      className="slds-is-open"
      bodyClassName="slds-docked-composer__body--form"
      header="New Task"
      headerSymbol="task"
      footer={ <button className="slds-button slds-button--brand slds-col--bump-left">Save</button> }
    >
      <fieldset className="slds-form slds-form--compound">
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
    </DockedComposerPanel>
  </div>
);
