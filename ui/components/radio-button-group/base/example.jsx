// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { FormElementControl } from '../../form-element/';
import { Fieldset, Legend } from '../../radio-group/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let RadioButtonGroup = props => (
  <div className={classNames('slds-radio_button-group', props.className)}>
    {props.children}
  </div>
);

export let RadioButton = props => {
  const exampleId = uniqueId('example-unique-id-');

  return (
    <span
      className={classNames('slds-button slds-radio_button', props.className)}
    >
      <input
        name={props.name}
        type="radio"
        id={exampleId}
        value={props.id}
        disabled={props.disabled}
        aria-describedby={props.errorId}
        defaultChecked={props.checked}
      />
      <label className="slds-radio_button__label" htmlFor={exampleId}>
        <span className="slds-radio_faux">{props.children}</span>
      </label>
    </span>
  );
};

const ExampleRadioButtonGroup = ({
  legend,
  modifier,
  disabled,
  required,
  hasError
}) => {
  const exampleName = uniqueId('example-unique-name-');
  const exampleErrorId = uniqueId('example-unique-id');

  return (
    <Fieldset className={hasError && 'slds-has-error'}>
      <Legend>
        {required && (
          <abbr className="slds-required" title="required">
            *
          </abbr>
        )}
        {!legend && 'Radio Group Label'}
      </Legend>
      <FormElementControl>
        <RadioButtonGroup className={modifier}>
          <RadioButton id="monday" name={exampleName} disabled={disabled}>
            Mon
          </RadioButton>
          <RadioButton id="tuesday" name={exampleName} disabled={disabled}>
            Tue
          </RadioButton>
          <RadioButton id="wednesday" name={exampleName} disabled={disabled}>
            Wed
          </RadioButton>
          <RadioButton id="thursday" name={exampleName} disabled={disabled}>
            Thu
          </RadioButton>
          <RadioButton id="friday" name={exampleName} disabled={disabled}>
            Fri
          </RadioButton>
        </RadioButtonGroup>
        {hasError && (
          <div id={exampleErrorId} className="slds-form-element__help">
            This field is required
          </div>
        )}
      </FormElementControl>
    </Fieldset>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <ExampleRadioButtonGroup />;

export const examples = [
  {
    id: 'touch-stacked',
    label: 'Stacked (Touch Only)',
    element: (
      <ExampleRadioButtonGroup modifier="slds-radio_button-group_stacked" />
    )
  },
  {
    id: 'touch-stacked-disabled',
    label: 'Stacked - Disabled (Touch Only)',
    element: (
      <ExampleRadioButtonGroup
        modifier="slds-radio_button-group_stacked"
        disabled
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <ExampleRadioButtonGroup disabled />
  },
  {
    id: 'required',
    label: 'Required',
    element: <ExampleRadioButtonGroup required />
  },
  {
    id: 'error',
    label: 'Has error',
    element: <ExampleRadioButtonGroup required hasError />
  }
];
