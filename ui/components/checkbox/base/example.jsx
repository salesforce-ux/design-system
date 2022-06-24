// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import {
  FormElement,
  FormElementControl,
  FormElementTooltip
} from '../../form-element';
const checkboxLabel = 'Checkbox Label';
const errorId = 'error_01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Fieldset = props => (
  <fieldset
    className={classNames(
      'slds-form-element',
      { 'slds-is-required': props.required },
      props.className
    )}
  >
    {props.children}
  </fieldset>
);

let Legend = props => (
  <legend className="slds-form-element__legend slds-form-element__label">
    {props.children}
  </legend>
);

export let Checkbox = props => {
  const uniqueId = _.uniqueId('checkbox-unique-id-'); // "*-unique-id-*" prevents copy/paste & informs about IDs

  return (
    <div className={classNames('slds-checkbox', props.className)}>
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
        ref={el => el && (el.indeterminate = props.isIndeterminate)}
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
            {props.isRequired && (
              <abbr className="slds-required" title="required">
                *{' '}
              </abbr>
            )}
            {props.label}
          </span>
        )}
      </label>
      {props.hasTooltip && (
        <FormElementTooltip showTooltip={props.showTooltip} />
      )}
    </div>
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Indeterminate = props => {
  const uniqueId = _.uniqueId('checkbox-unique-id-');

  return (
    <FormElement>
      <Checkbox
        id={uniqueId}
        label="Indeterminate Checkbox Label"
        isIndeterminate
      />
    </FormElement>
  );
};

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
    hasError
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

export let CheckedDisabled = props => (
  <FormElement>
    <Checkbox label={checkboxLabel} checked disabled />
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
  <Fieldset required>
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
  <Fieldset required className="slds-has-error">
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

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <FormElement>
        <Checkbox label={checkboxLabel} checked />
      </FormElement>
    )
  }
];

export let states = [
  {
    id: 'required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'required-with-long-label',
    label: 'Required with long label',
    demoStyles: 'width: 200px',
    storybookStyles: true,
    element: (
      <FormElement>
        <Checkbox label="When you wake up in the morning, it's a quarter to one, And you want to have a little fun. You brush your teeth, ch ch ch ch, ch ch ch ch. You brush your teeth, ch ch ch ch, ch ch ch ch">
          <abbr className="slds-required" title="required">
            *
          </abbr>
        </Checkbox>
      </FormElement>
    )
  },
  {
    id: 'required-not-form-element-long-label',
    label: 'Required (Not Form Element) with long label',
    demoStyles: 'width: 200px',
    storybookStyles: true,
    element: (
      <Checkbox label="When you wake up in the morning, it's a quarter to one, And you want to have a little fun. You brush your teeth, ch ch ch ch, ch ch ch ch. You brush your teeth, ch ch ch ch, ch ch ch ch">
        <abbr className="slds-required" title="required">
          *
        </abbr>
      </Checkbox>
    )
  },
  {
    id: 'required-optional-mix',
    label: 'Required/Optional Combination',
    element: (
      <FormElement>
        <Checkbox label={checkboxLabel}>
          <abbr className="slds-required" title="required">
            *
          </abbr>
        </Checkbox>
        <Checkbox label={checkboxLabel} />
      </FormElement>
    )
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
  },
  {
    id: 'checked-and-disabled',
    label: 'Checked and Disabled',
    element: <CheckedDisabled />
  },
  {
    id: 'indeterminate',
    label: 'Indeterminate',
    element: <Indeterminate />
  }
];

export let examples = [
  {
    id: 'wrapping-text',
    label: 'Checkboxes with Wrapping Text',
    demoStyles: `width: 210px`,
    storybookStyles: true,
    element: (
      <FormElement>
        <Checkbox label="Early Morning (12 AM - 8 AM)" checked />
        <Checkbox label="Morning (8 AM - 12 PM)" />
        <Checkbox label="Afternoon (12 PM - 5 PM)" />
        <Checkbox label="Evening (5 PM - 12 AM)" />
      </FormElement>
    )
  },
  {
    id: 'wrapping-text-required-group',
    label: 'Required Checkboxes with Wrapping Text',
    demoStyles: `width: 210px`,
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">
            *{' '}
          </abbr>
          Checkbox Group Label
        </Legend>
        <FormElementControl>
          <Checkbox label="Early Morning (12 AM - 8 AM)" />
          <Checkbox label="Morning (8 AM - 12 PM)" />
          <Checkbox label="Afternoon (12 PM - 5 PM)" />
          <Checkbox label="Evening (5 PM - 12 AM)" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'long-wrapping-text-required-group',
    label: 'Required Checkboxes with Abnormally-long Wrapping Text',
    demoStyles: `width: 210px`,
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">
            *{' '}
          </abbr>
          Checkbox Group Label
        </Legend>
        <FormElementControl>
          <Checkbox label="When you wake up in the morning, it's a quarter to one, And you want to have a little fun. You brush your teeth, ch ch ch ch, ch ch ch ch. You brush your teeth, ch ch ch ch, ch ch ch ch" />
          <Checkbox label="When you wake up in the morning, it's a quarter to two, And you want to find, something to do. You brush your teeth, ch ch ch ch, ch ch ch ch. You brush your teeth, ch ch ch ch, ch ch ch ch" />
          <Checkbox label="And when you wake up in the morning, it's a quarter to three, And your mind starts hummin', twiddle dee dee. You brush your teeth, ch ch ch ch, ch ch ch ch. You brush your teeth, ch ch ch ch, ch ch ch ch" />
          <Checkbox label="When you wake up in the morning, it's a quarter to four, And you think you hear a knock on the door. You brush your teeth, ch ch ch ch, ch ch ch ch. You brush your teeth, ch ch ch ch, ch ch ch ch" />
        </FormElementControl>
      </Fieldset>
    )
  },
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
  },
  {
    id: 'rtl',
    label: 'Right to Left',
    element: (
      <div dir="rtl">
        <FormElement>
          <Checkbox label={checkboxLabel} checked />
        </FormElement>
      </div>
    )
  },
  {
    id: 'rtl-with-legend',
    label: 'Right to Left with legend',
    element: (
      <div dir="rtl">
        <Group />
      </div>
    )
  }
];
