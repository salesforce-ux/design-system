// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { FormElementControl } from '../../form-element/';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Fieldset = props => (
  <fieldset className={classNames('slds-form-element', props.className)}>
    {props.children}
  </fieldset>
);

export let Legend = props => (
  <legend
    className={classNames(
      'slds-form-element__legend slds-form-element__label',
      props.className
    )}
  >
    {props.children}
  </legend>
);

export let Radio = props => {
  const uniqueId = _.uniqueId('radio-');

  return (
    <span className={classNames('slds-radio', props.className)}>
      <input
        type="radio"
        id={props.id || uniqueId}
        value={props.id || uniqueId}
        // Since there are no more iframes with doc blocks, a unique name must
        // be given to each radio group to properly display the checked status within each group
        name={props.name || 'options'}
        disabled={props.disabled}
        defaultChecked={props.checked}
        tabIndex={props.tabIndex}
        aria-describedby={props.errorId}
        aria-labelledby={
          props.labelId && props.groupId
            ? props.labelId + ' ' + props.groupId
            : null
        }
      />
      <label
        className="slds-radio__label"
        htmlFor={props.id ? props.id : uniqueId}
        id={props.labelId}
      >
        <span className="slds-radio_faux" />
        <span
          className={classNames(
            'slds-form-element__label',
            props.hideLabel ? 'slds-assistive-text' : null
          )}
        >
          {props.label}
        </span>
      </label>
    </span>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Fieldset>
    <Legend>Radio Group Label</Legend>
    <FormElementControl>
      <Radio checked label="Radio Label One" name="default" />
      <Radio label="Radio Label Two" name="default" />
    </FormElementControl>
  </Fieldset>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio disabled label="Radio Label One" name="disabled" />
          <Radio disabled label="Radio Label Two" name="disabled" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'checked-and-disabled',
    label: 'Checked and Disabled',
    element: (
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio
            checked
            disabled
            label="Radio Label One"
            name="checked-and-disabled"
          />
          <Radio disabled label="Radio Label Two" name="checked-and-disabled" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: (
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Radio Group Label
        </Legend>
        <FormElementControl>
          <Radio checked label="Radio Label One" name="required" />
          <Radio label="Radio Label Two" name="required" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <Fieldset className="slds-has-error">
        <Legend>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Radio Group Label
        </Legend>
        <FormElementControl>
          <Radio
            errorId="error_01"
            checked
            label="Radio Label One"
            name="error"
          />
          <Radio errorId="error_01" label="Radio Label Two" name="error" />
        </FormElementControl>
        <div id="error_01" className="slds-form-element__help">
          This field is required
        </div>
      </Fieldset>
    )
  },
  {
    id: 'rtl',
    label: 'Right to Left',
    element: (
      <div dir="rtl">
        <Fieldset>
          <Legend>Radio Group Label</Legend>
          <FormElementControl>
            <Radio checked label="Radio Label One" name="rtl" />
            <Radio label="Radio Label Two" name="rtl" />
          </FormElementControl>
        </Fieldset>
      </div>
    )
  }
];
