/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Checkbox } from 'ui/components/forms/flavors/checkbox/index.react.example';
import { Select } from 'ui/components/forms/flavors/select/index.react.example';
import { Pill, PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only slds-grid" style={{ height: '845px', maxWidth: '420px', background: '#f4f6f9', padding: '1rem' }}>
    {props.children}
  </div>;

export let Panel = props =>
  <div className={classNames('slds-panel slds-grid slds-grid--vertical slds-nowrap', props.className)}>
    {props.children}
  </div>;

export let PanelBody = props =>
  <div className={classNames('slds-form--stacked slds-grow slds-scrollable--y', props.className)}>
    {props.children}
  </div>;

export let PanelSection = props =>
  <div className={classNames('slds-panel__section', props.className)}>
    {props.children}
  </div>;

let PanelHeader = props =>
  <div className="slds-media">
    <div className="slds-media__figure">
      <Checkbox
        label="Complete Task"
        hideLabel
      />
    </div>
    <div className="slds-media__body">
      <h2 className="slds-truncate slds-text-heading--small" title="Follow up on '15 contact">
        <a href="javascript:void(0);">Follow up on '15 contact</a>
      </h2>
      <p className="slds-truncate slds-text-body--small" title="Jun 18">Jun 18</p>
      <div className="slds-button-group slds-m-top--small" role="group">
        <button className="slds-button slds-button--neutral slds-grow">Edit</button>
        <button className="slds-button slds-button--neutral slds-grow">Follow Up</button>
        <button className="slds-button slds-button--neutral slds-grow">Delete</button>
        <ButtonIcon
          className="slds-button--icon-border-filled"
          symbol="down"
          aria-haspopup="true"
          assistiveText="More Actions"
          title="More Actions"
        />
      </div>
    </div>
  </div>;

let FormElementStatic = props =>
  <li className={ classNames('slds-form-element slds-hint-parent slds-has-divider--bottom', props.inlineEdit ? 'slds-form-element--edit' : null) }>
    <span className="slds-form-element__label">{props.label}</span>
    <div className="slds-form-element__control">
      <span className={ classNames('slds-form-element__static', props.longform ? 'slds-text-longform' : null)}>{props.text}</span>
      { props.inlineEdit ?
        <ButtonIcon
          className="slds-float--right slds-button--icon slds-button--icon-small"
          iconClassName="slds-button__icon--hint"
          symbol="edit"
          assistiveText="Edit this Field"
          title="Edit this Field"
        />
      : null }
    </div>
  </li>;

let FormElement = props =>
  <div className="slds-form-element">
    <label className="slds-form-element__label" htmlFor={props.id}>{props.label}</label>
    <div className="slds-form-element__control">
      {props.children}
    </div>
  </div>;

let Lookup = props =>
  <div className="slds-form-element slds-lookup" data-select="single">
    <span className="slds-form-element__label" htmlFor={props.id}>{props.label}</span>
    <div className="slds-form-element__control">
      {props.children}
    </div>
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Panel containerClassName="panel_container--space">
      <PanelBody>
        <PanelSection className="slds-has-divider--bottom">
          <PanelHeader />
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading--small slds-m-bottom--medium">Task Information</h3>
          <ul>
            <FormElementStatic label="Subject" text="Follow up on '15 Contract" />
            <FormElementStatic label="Due Date" text="6/18/16" />
            <FormElementStatic label="Assigned TO" text="Jason Dewar" />
            <FormElementStatic label="Name" text="Adam Choi" />
            <FormElementStatic label="Related To" text="Tesla Cloudhub + Anypoint Connectors" />
            <FormElementStatic longform label="Comments" text="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates." />
          </ul>
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading--small slds-m-bottom--medium">Additional Information</h3>
          <ul>
            <FormElementStatic label="Status" text="Not Started" />
            <FormElementStatic label="Priority" text="Normal" />
          </ul>
        </PanelSection>
      </PanelBody>
    </Panel>
  </Demo>;

let HasEditing = props =>
  <Demo>
    <Panel containerClassName="panel_container--space">
      <PanelBody>
        <PanelSection className="slds-has-divider--bottom">
          <PanelHeader />
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading--small slds-m-bottom--medium">Task Information</h3>
          <ul>
            <FormElementStatic inlineEdit label="Subject" text="Follow up on '15 Contract" />
            <FormElementStatic inlineEdit label="Due Date" text="6/18/16" />
            <FormElementStatic inlineEdit label="Assigned TO" text="Jason Dewar" />
            <FormElementStatic inlineEdit label="Name" text="Adam Choi" />
            <FormElementStatic inlineEdit label="Related To" text="Tesla Cloudhub + Anypoint Connectors" />
            <FormElementStatic inlineEdit longform label="Comments" text="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates." />
          </ul>
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading--small slds-m-bottom--medium">Additional Information</h3>
          <ul>
            <FormElementStatic inlineEdit label="Status" text="Not Started" />
            <FormElementStatic inlineEdit label="Priority" text="Normal" />
          </ul>
        </PanelSection>
      </PanelBody>
    </Panel>
  </Demo>;

let IsEditing = props =>
  <Demo>
    <Panel containerClassName="panel_container--space" className="slds-is-editing">
      <PanelBody>
        <PanelSection className="slds-has-divider--bottom">
          <PanelHeader />
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading--small slds-m-bottom--medium">Task Information</h3>
          <ul>
            <FormElement label="Subject" id="text-input-01">
              <input className="slds-input" id="text-input-01" defaultValue="Follow up on '15 Contract" />
            </FormElement>
            <FormElement label="Due Date" id="date-input-01">
              <input className="slds-input" id="date-input-01" defaultValue="6/18/16" />
            </FormElement>
            <Lookup label="Assigned To" id="text-input-02">
              <PillContainer>
                <Pill label="Jason Dewar">
                  <span className="slds-icon_container slds-icon-standard-avatar slds-pill__icon_container">
                    <SvgIcon className="slds-icon" sprite="standard" symbol="avatar" />
                    <span className="slds-assistive-text">Person</span>
                  </span>
                </Pill>
              </PillContainer>
            </Lookup>
            <Lookup label="Name" id="text-input-03">
              <PillContainer>
                <Pill label="Adam Choi">
                  <span className="slds-icon_container slds-icon-standard-avatar slds-pill__icon_container">
                    <SvgIcon className="slds-icon" sprite="standard" symbol="avatar" />
                    <span className="slds-assistive-text">Person</span>
                  </span>
                </Pill>
              </PillContainer>
            </Lookup>
            <Lookup label="Related To" id="text-input-04">
              <PillContainer>
                <Pill label="Tesla Cloudhub + Anypoint Connectors">
                  <span className="slds-icon_container slds-icon-standard-account slds-pill__icon_container">
                    <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
                    <span className="slds-assistive-text">Account</span>
                  </span>
                </Pill>
              </PillContainer>
            </Lookup>
            <FormElement label="Comments" id="text-input-05">
              <textarea className="slds-textarea" id="text-input-05" defaultValue="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates." />
            </FormElement>
          </ul>
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading--small slds-m-bottom--medium">Additional Information</h3>
          <ul>
            <FormElement label="Status" id="non-text-input-01">
              <Select id="non-text-input-01">
                <option>Not Started</option>
                <option>Prospecting</option>
              </Select>
            </FormElement>
            <FormElement label="Priority" id="non-text-input-02">
              <Select id="non-text-input-02">
                <option>Normal</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Select>
            </FormElement>
          </ul>
        </PanelSection>
      </PanelBody>
      <div className="slds-panel__actions slds-has-divider--top">
        <div className="slds-grid slds-grid--align-center">
          <button type="button" className="slds-button slds-button--neutral">Cancel</button>
          <button type="button" className="slds-button slds-button--brand">Save</button>
        </div>
      </div>
    </Panel>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'panel-form',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'panel-form-edit-mode',
    label: 'Form with Inline Edit',
    element: <HasEditing />
  },
  {
    id: 'panel-form-edit-mode-active',
    label: 'Form with Inline Edit Active',
    element: <IsEditing />
  }
];
