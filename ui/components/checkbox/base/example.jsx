// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { FormElement, FormElementControl } from '../../form-element';

const checkboxLabel = 'Checkbox Label';
const errorId = 'error_01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
  </div>
);

let Fieldset = props => (
  <fieldset className={classNames('slds-form-element', props.className)}>
    {props.children}
  </fieldset>
);

let Legend = props => (
  <legend className="slds-form-element__legend slds-form-element__label">
    {props.children}
  </legend>
);

export let Checkbox = props => {
  const uniqueId = _.uniqueId('checkbox-');

  return (
    <span className={classNames('slds-checkbox', props.className)}>
      {props.children}
      <input
        type="checkbox"
        name={props.name || 'options'}
        id={props.id ? props.id : uniqueId}
        value={props.id ? props.id : uniqueId}
        disabled={props.disabled}
        defaultChecked={props.checked}
        aria-describedby={props.errorId}
        tabIndex={props.tabIndex}
        aria-labelledby={
          props.labelId && props.groupId
            ? props.labelId + ' ' + props.groupId
            : null
        }
      />
      <label
        className={classNames('slds-checkbox__label')}
        htmlFor={props.id ? props.id : uniqueId}
        id={props.labelId}
      >
        <span className="slds-checkbox_faux" />
        {props.label && (
          <span
            className={classNames(
              'slds-form-element__label',
              props.hideLabel ? 'slds-assistive-text' : null
            )}
          >
            {props.label}
          </span>
        )}
      </label>
    </span>
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Indeterminate = props => (
  <FormElement>
    <Checkbox
      id="checkbox-indeterminate-01"
      label="Indeterminate Checkbox Label"
    />
  </FormElement>
);

export let Required = props => (
  <FormElement>
    <Checkbox label={checkboxLabel}>
      <abbr className="slds-required" title="required">
        *
      </abbr>
    </Checkbox>
  </FormElement>
);

export let ErrorState = props => (
  <FormElement
    formElementClassName="slds-has-error"
    inlineMessage="This field is required"
    errorId={errorId}
  >
    <Checkbox label={checkboxLabel} errorId="error_01">
      <abbr className="slds-required" title="required">
        *
      </abbr>
    </Checkbox>
  </FormElement>
);

export let Disabled = props => (
  <FormElement>
    <Checkbox label={checkboxLabel} disabled />
  </FormElement>
);

export let Group = props => (
  <Fieldset>
    <Legend>Checkbox Group Label</Legend>
    <FormElementControl>
      <Checkbox label={checkboxLabel} checked />
      <Checkbox label={checkboxLabel} />
    </FormElementControl>
  </Fieldset>
);

export let GroupRequired = props => (
  <Fieldset>
    <Legend>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Checkbox Group Label
    </Legend>
    <FormElementControl>
      <Checkbox label={checkboxLabel} checked />
      <Checkbox label={checkboxLabel} />
    </FormElementControl>
  </Fieldset>
);

export let GroupError = props => (
  <Fieldset className="slds-has-error">
    <Legend>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Checkbox Group Label
    </Legend>
    <FormElementControl>
      <Checkbox errorId={errorId} label={checkboxLabel} checked />
      <Checkbox errorId={errorId} label={checkboxLabel} />
    </FormElementControl>
    <div id={errorId} className="slds-form-element__help">
      This field is required
    </div>
  </Fieldset>
);

export let GroupDisabled = props => (
  <Fieldset>
    <Legend>Checkbox Group Label</Legend>
    <FormElementControl>
      <Checkbox label={checkboxLabel} disabled />
      <Checkbox label={checkboxLabel} disabled />
    </FormElementControl>
  </Fieldset>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement>
    <Checkbox label={checkboxLabel} checked />
  </FormElement>
);

export let states = [
  {
    id: 'indeterminate',
    label: 'Indeterminate',
    element: <Indeterminate />,
    script: `
      var checkbox = document.getElementById('checkbox-indeterminate-01')
      checkbox.indeterminate = true
    `
  },
  {
    id: 'required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Disabled />
  }
];

export let examples = [
  {
    id: 'group',
    label: 'Group',
    element: <Group />
  },
  {
    id: 'group-required',
    label: 'Group Required',
    element: <GroupRequired />
  },
  {
    id: 'group-error',
    label: 'Group with error',
    element: <GroupError />
  },
  {
    id: 'group-disabled',
    label: 'Group Disabled',
    element: <GroupDisabled />
  },
  {
    id: 'stacked',
    label: 'Stacked',
    element: (
      <FormElement>
        <Checkbox
          className="slds-checkbox_stacked"
          label={checkboxLabel}
          checked
        />
      </FormElement>
    )
  }
];
