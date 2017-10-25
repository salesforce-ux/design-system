// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { Checkbox } from '../../checkbox/base/example';
import { Select } from '../../select/base/example';
import { Pill, PillContainer } from '../../pills/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props => (
  <div
    className="demo-only slds-grid"
    style={{
      height: '845px',
      maxWidth: '420px',
      background: '#f4f6f9',
      padding: '1rem'
    }}
  >
    {props.children}
  </div>
);

export let Panel = props => (
  <div
    className={classNames(
      'slds-panel slds-grid slds-grid_vertical slds-nowrap',
      props.className
    )}
  >
    {props.children}
  </div>
);

export let PanelBody = props => (
  <div
    className={classNames(
      'slds-form slds-form_stacked slds-grow slds-scrollable_y',
      props.className
    )}
  >
    {props.children}
  </div>
);

export let PanelSection = props => (
  <div className={classNames('slds-panel__section', props.className)}>
    {props.children}
  </div>
);

let PanelHeader = props => (
  <div className="slds-media">
    <div className="slds-media__figure">
      <Checkbox label="Complete Task" hideLabel />
    </div>
    <div className="slds-media__body">
      <h2
        className="slds-truncate slds-text-heading_small"
        title="Follow up on '15 contact"
      >
        <a href="javascript:void(0);">Follow up on '15 contact</a>
      </h2>
      <p className="slds-truncate slds-text-body_small" title="Jun 18">
        Jun 18
      </p>
      <div className="slds-button-group slds-m-top_small" role="group">
        <button className="slds-button slds-button_neutral slds-grow">
          Edit
        </button>
        <button className="slds-button slds-button_neutral slds-grow">
          Follow Up
        </button>
        <button className="slds-button slds-button_neutral slds-grow">
          Delete
        </button>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="down"
          aria-haspopup="true"
          assistiveText="More Actions"
          title="More Actions"
        />
      </div>
    </div>
  </div>
);

export let FormElementStatic = props => (
  <li
    className={classNames(
      'slds-form-element slds-hint-parent slds-border_bottom',
      props.inlineEdit ? 'slds-form-element_edit' : null
    )}
  >
    <span className="slds-form-element__label">{props.label}</span>
    <div className="slds-form-element__control">
      <span
        className={classNames(
          'slds-form-element__static',
          props.longform ? 'slds-text-longform' : null
        )}
      >
        {props.text}
      </span>
      {props.inlineEdit ? (
        <ButtonIcon
          className="slds-float_right slds-button_icon slds-button_icon-small"
          iconClassName="slds-button__icon_hint"
          symbol="edit"
          assistiveText="Edit this Field"
          title="Edit this Field"
        />
      ) : null}
    </div>
  </li>
);

let FormElement = props => (
  <div className="slds-form-element">
    <label className="slds-form-element__label" htmlFor={props.id}>
      {props.label}
    </label>
    <div className="slds-form-element__control">{props.children}</div>
  </div>
);

let Lookup = props => (
  <div className="slds-form-element slds-lookup slds-has-selection">
    <span className="slds-form-element__label">{props.label}</span>
    <div className="slds-form-element__control">{props.children}</div>
  </div>
);

/// ////////////////////////////////////////
// State Constructor(s)
/// ////////////////////////////////////////

let Default = props => (
  <Demo>
    <Panel containerClassName="panel_container--space">
      <PanelBody>
        <PanelSection className="slds-border_bottom">
          <PanelHeader />
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading_small slds-m-bottom_medium">
            Task Information
          </h3>
          <ul>
            <FormElementStatic
              label="Subject"
              text="Follow up on '15 Contract"
            />
            <FormElementStatic label="Due Date" text="6/18/16" />
            <FormElementStatic label="Assigned TO" text="Jason Dewar" />
            <FormElementStatic label="Name" text="Adam Choi" />
            <FormElementStatic
              label="Related To"
              text="Tesla Cloudhub + Anypoint Connectors"
            />
            <FormElementStatic
              longform
              label="Comments"
              text="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates."
            />
          </ul>
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading_small slds-m-bottom_medium">
            Additional Information
          </h3>
          <ul>
            <FormElementStatic label="Status" text="Not Started" />
            <FormElementStatic label="Priority" text="Normal" />
          </ul>
        </PanelSection>
      </PanelBody>
    </Panel>
  </Demo>
);

let HasEditing = props => (
  <Demo>
    <Panel containerClassName="panel_container--space">
      <PanelBody>
        <PanelSection className="slds-border_bottom">
          <PanelHeader />
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading_small slds-m-bottom_medium">
            Task Information
          </h3>
          <ul>
            <FormElementStatic
              inlineEdit
              label="Subject"
              text="Follow up on '15 Contract"
            />
            <FormElementStatic inlineEdit label="Due Date" text="6/18/16" />
            <FormElementStatic
              inlineEdit
              label="Assigned TO"
              text="Jason Dewar"
            />
            <FormElementStatic inlineEdit label="Name" text="Adam Choi" />
            <FormElementStatic
              inlineEdit
              label="Related To"
              text="Tesla Cloudhub + Anypoint Connectors"
            />
            <FormElementStatic
              inlineEdit
              longform
              label="Comments"
              text="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates."
            />
          </ul>
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading_small slds-m-bottom_medium">
            Additional Information
          </h3>
          <ul>
            <FormElementStatic inlineEdit label="Status" text="Not Started" />
            <FormElementStatic inlineEdit label="Priority" text="Normal" />
          </ul>
        </PanelSection>
      </PanelBody>
    </Panel>
  </Demo>
);

let IsEditing = props => (
  <Demo>
    <Panel
      containerClassName="panel_container--space"
      className="slds-is-editing"
    >
      <PanelBody>
        <PanelSection className="slds-border_bottom">
          <PanelHeader />
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading_small slds-m-bottom_medium">
            Task Information
          </h3>
          <div>
            <FormElement label="Subject" id="text-input-01">
              <input
                className="slds-input"
                id="text-input-01"
                defaultValue="Follow up on '15 Contract"
              />
            </FormElement>
            <FormElement label="Due Date" id="date-input-01">
              <input
                className="slds-input"
                id="date-input-01"
                defaultValue="6/18/16"
              />
            </FormElement>
            <Lookup label="Assigned To" id="text-input-02">
              <PillContainer>
                <Pill label="Jason Dewar">
                  <span className="slds-icon_container slds-icon-standard-avatar slds-pill__icon_container">
                    <SvgIcon
                      className="slds-icon"
                      sprite="standard"
                      symbol="avatar"
                    />
                    <span className="slds-assistive-text">Person</span>
                  </span>
                </Pill>
              </PillContainer>
            </Lookup>
            <Lookup label="Name" id="text-input-03">
              <PillContainer>
                <Pill label="Adam Choi">
                  <span className="slds-icon_container slds-icon-standard-avatar slds-pill__icon_container">
                    <SvgIcon
                      className="slds-icon"
                      sprite="standard"
                      symbol="avatar"
                    />
                    <span className="slds-assistive-text">Person</span>
                  </span>
                </Pill>
              </PillContainer>
            </Lookup>
            <Lookup label="Related To" id="text-input-04">
              <PillContainer>
                <Pill label="Tesla Cloudhub + Anypoint Connectors">
                  <span className="slds-icon_container slds-icon-standard-account slds-pill__icon_container">
                    <SvgIcon
                      className="slds-icon"
                      sprite="standard"
                      symbol="account"
                    />
                    <span className="slds-assistive-text">Account</span>
                  </span>
                </Pill>
              </PillContainer>
            </Lookup>
            <FormElement label="Comments" id="text-input-05">
              <textarea
                className="slds-textarea"
                id="text-input-05"
                defaultValue="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates."
              />
            </FormElement>
          </div>
        </PanelSection>
        <PanelSection>
          <h3 className="slds-text-heading_small slds-m-bottom_medium">
            Additional Information
          </h3>
          <div>
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
          </div>
        </PanelSection>
      </PanelBody>
      <div className="slds-panel__actions slds-border_top">
        <div className="slds-grid slds-grid_align-center">
          <button type="button" className="slds-button slds-button_neutral">
            Cancel
          </button>
          <button type="button" className="slds-button slds-button_brand">
            Save
          </button>
        </div>
      </div>
    </Panel>
  </Demo>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Default />;

export let states = [
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
