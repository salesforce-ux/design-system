// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MultiSelect, DefaultSnapShot } from '../../dueling-picklist';
import { FormElement } from '../../form-element';

const selectLabel = 'Select Label';
const defaultSelectId = 'select-01';
const errorId = 'error-01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Select = props => {
  const renderSelect = () => (
    <select
      aria-describedby={props['aria-describedby']}
      className={classNames('slds-select', props.className)}
      disabled={props.disabled}
      id={props.id || defaultSelectId}
      required={props.required}
      multiple={props.multiple}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  );

  const renderWithContainter = () => (
    <div className="slds-select_container">{renderSelect()}</div>
  );

  return props.hasNoContainer ? renderSelect() : renderWithContainter();
};
Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasNoContainer: PropTypes.bool,
  id: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Required = props => (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId} isRequired>
    <Select id={defaultSelectId} required>
      <option value="">Select…</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

let ErrorState = props => (
  <FormElement
    hasError
    labelContent={selectLabel}
    inputId={defaultSelectId}
    errorId={errorId}
    isRequired
    inlineMessage="Select an option."
  >
    <Select id={defaultSelectId} aria-describedby={errorId} required>
      <option value="">Select…</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

let Disabled = props => (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId}>
    <Select id={defaultSelectId} disabled>
      <option value="">Select…</option>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

let MultipleNarrow = props => (
  <FormElement labelContent={selectLabel} inputId={defaultSelectId}>
    <Select id={defaultSelectId} hasNoContainer multiple>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </FormElement>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <FormElement labelContent={selectLabel} inputId={defaultSelectId}>
        <Select id={defaultSelectId}>
          <option value="">Select…</option>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </Select>
      </FormElement>
    )
  }
];

export let states = [
  {
    id: 'select-error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'select-disabled',
    label: 'Disabled',
    element: <Disabled />
  }
];

export let examples = [
  {
    id: 'select-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'select-multiple',
    label: 'Multiple Selection',
    element: <MultiSelect dataSet={DefaultSnapShot} noReorder />
  },
  {
    id: 'select-multiple-narrow',
    label: 'Multiple Selection Narrow',
    element: <MultipleNarrow />
  }
];
