// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Fieldset = props => (
  <fieldset className={classNames('slds-form-element', props.className)}>
    <legend className="slds-form-element__legend slds-form-element__label">
      Scheduled Day(s)
    </legend>
    <div className="slds-form-element__control">{props.children}</div>
  </fieldset>
);

export let CheckboxGroup = props => (
  <div className={classNames('slds-checkbox_button-group', props.className)}>
    {props.children}
  </div>
);

export let Checkbox = props => {
  const uniqueId = _.uniqueId(`unique-id-${props.id}-`); // "*-unique-id-*" prevents copy/paste & informs about IDs

  return (
    <span
      className={classNames(
        'slds-button slds-checkbox_button',
        props.className
      )}
    >
      <input
        aria-describedby={props.errorId}
        disabled={props.disabled}
        defaultChecked={props.checked}
        id={uniqueId}
        value={uniqueId}
        name="checkbox"
        type="checkbox"
      />
      <label className="slds-checkbox_button__label" htmlFor={uniqueId}>
        <span className="slds-checkbox_faux">{props.children}</span>
      </label>
    </span>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Fieldset>
        <CheckboxGroup>
          <Checkbox id="monday">Mon</Checkbox>
          <Checkbox id="tuesday">Tue</Checkbox>
          <Checkbox id="wednesday">Wed</Checkbox>
          <Checkbox id="thursday">Thu</Checkbox>
          <Checkbox id="friday">Fri</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    )
  }
];

export let states = [
  {
    id: 'has-error',
    label: 'Error',
    element: (
      <Fieldset className="slds-has-error">
        <CheckboxGroup>
          <Checkbox errorId="error_01" id="monday">
            Mon
          </Checkbox>
          <Checkbox errorId="error_01" id="tuesday">
            Tue
          </Checkbox>
          <Checkbox errorId="error_01" id="wednesday">
            Wed
          </Checkbox>
          <Checkbox errorId="error_01" id="thursday">
            Thu
          </Checkbox>
          <Checkbox errorId="error_01" id="friday">
            Fri
          </Checkbox>
        </CheckboxGroup>
        <div id="error_01" className="slds-form-element__help">
          This field is required
        </div>
      </Fieldset>
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <Fieldset>
        <CheckboxGroup>
          <Checkbox id="monday" disabled>
            Mon
          </Checkbox>
          <Checkbox id="tuesday" disabled>
            Tue
          </Checkbox>
          <Checkbox id="wednesday" disabled>
            Wed
          </Checkbox>
          <Checkbox id="thursday" disabled>
            Thu
          </Checkbox>
          <Checkbox id="friday" disabled>
            Fri
          </Checkbox>
        </CheckboxGroup>
      </Fieldset>
    )
  }
];
