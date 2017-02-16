// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Fieldset = props =>
  <fieldset className={classNames('slds-form-element', props.className)}>
    {props.children}
  </fieldset>;

export let Legend = props =>
  <legend className="slds-form-element__legend slds-form-element__label">{props.children}</legend>;

export let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

export let Radio = props => {
  const uniqueId = _.uniqueId('radio-');

  return (
    <span className={ classNames('slds-radio', props.className) }>
      <input
        type="radio"
        id={ uniqueId }
        name={ props.name || 'options' }
        disabled={props.disabled}
        defaultChecked={props.checked}
        aria-describedby={props.errorId}
      />
      <label className="slds-radio__label" htmlFor={ uniqueId }>
        <span className="slds-radio--faux"></span>
        <span className="slds-form-element__label">{props.label}</span>
      </label>
    </span>
  );
};

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio disabled label="Radio Label One" />
          <Radio disable label="Radio Label Two" />
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'required',
    label: 'Required',
    element:
      <Fieldset>
        <Legend><abbr className="slds-required" title="required">*</abbr> Radio Group Label</Legend>
        <FormElementControl>
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Fieldset className="slds-has-error">
        <Legend><abbr className="slds-required" title="required">*</abbr> Radio Group Label</Legend>
        <FormElementControl>
          <Radio errorId="error_01" checked label="Radio Label One" />
          <Radio errorId="error_01" label="Radio Label Two" />
        </FormElementControl>
        <div id="error_01" className="slds-form-element__help">This field is required</div>
      </Fieldset>
  }
];
