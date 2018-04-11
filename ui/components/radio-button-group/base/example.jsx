// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { FormElementControl } from '../../radio-group/base/example';
import { Fieldset, Legend } from '../../radio-group/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let RadioButtonGroup = props => (
  <div className="slds-radio_button-group">{props.children}</div>
);

export let RadioButton = props => (
  <span
    className={classNames('slds-button slds-radio_button', props.className)}
  >
    <input
      name="radio"
      type="radio"
      id={props.id}
      value={props.id}
      disabled={props.disabled}
      aria-describedby={props.errorId}
      defaultChecked={props.checked}
    />
    <label className="slds-radio_button__label" htmlFor={props.id}>
      <span className="slds-radio_faux">{props.children}</span>
    </label>
  </span>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Fieldset>
    <Legend>Radio Group Label</Legend>
    <FormElementControl>
      <RadioButtonGroup>
        <RadioButton id="monday">Mon</RadioButton>
        <RadioButton id="tuesday">Tue</RadioButton>
        <RadioButton id="wednesday">Wed</RadioButton>
        <RadioButton id="thursday">Thu</RadioButton>
        <RadioButton id="friday">Fri</RadioButton>
      </RadioButtonGroup>
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
          <RadioButtonGroup>
            <RadioButton id="monday" disabled="true">
              Mon
            </RadioButton>
            <RadioButton id="tuesday" disabled="true">
              Tue
            </RadioButton>
            <RadioButton id="wednesday" disabled="true">
              Wed
            </RadioButton>
            <RadioButton id="thursday" disabled="true">
              Thu
            </RadioButton>
            <RadioButton id="friday" disabled="true">
              Fri
            </RadioButton>
          </RadioButtonGroup>
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
          </abbr>Radio Group Label
        </Legend>
        <FormElementControl>
          <RadioButtonGroup>
            <RadioButton id="monday">Mon</RadioButton>
            <RadioButton id="tuesday">Tue</RadioButton>
            <RadioButton id="wednesday">Wed</RadioButton>
            <RadioButton id="thursday">Thu</RadioButton>
            <RadioButton id="friday">Fri</RadioButton>
          </RadioButtonGroup>
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'error',
    label: 'Has error',
    element: (
      <Fieldset className="slds-has-error">
        <Legend>
          <abbr className="slds-required" title="required">
            *
          </abbr>Radio Group Label
        </Legend>
        <FormElementControl>
          <RadioButtonGroup>
            <RadioButton errorId="error_01" id="monday">
              Mon
            </RadioButton>
            <RadioButton errorId="error_01" id="tuesday">
              Tue
            </RadioButton>
            <RadioButton errorId="error_01" id="wednesday">
              Wed
            </RadioButton>
            <RadioButton errorId="error_01" id="thursday">
              Thu
            </RadioButton>
            <RadioButton errorId="error_01" id="friday">
              Fri
            </RadioButton>
          </RadioButtonGroup>
          <div id="error_01" className="slds-form-element__help">
            This field is required
          </div>
        </FormElementControl>
      </Fieldset>
    )
  }
];
