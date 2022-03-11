// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { FormElementControl, FormElementTooltip } from '../../form-element/';
import ButtonIcon from '../../button-icons/';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Fieldset = props => (
  <fieldset className={classNames('slds-form-element', props.className)}>
    {props.children}
  </fieldset>
);

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

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

Legend.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

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

Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  tabIndex: PropTypes.oneOf(['-1', '0']),
  errorId: PropTypes.string,
  labelId: PropTypes.string,
  groupId: PropTypes.string,
  hideLabel: PropTypes.bool,
  label: PropTypes.string
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio checked label="Radio Label One" name="default" />
          <Radio label="Radio Label Two" name="default" />
        </FormElementControl>
      </Fieldset>
    )
  }
];

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
    id: 'required-help-text-icon',
    label: 'Required with Help Text Icon',
    element: (
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Radio Group Label
        </Legend>
        <div className="slds-form-element__icon">
          <ButtonIcon
            symbol="info"
            assistiveText="Help"
          />
        </div>
        <FormElementControl>
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'required-help-text-icon-tooltip',
    label: 'Required with Help Text Icon with Tooltip',
    demoStyles: 'padding-top: 4rem',
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Radio Group Label
        </Legend>
        <FormElementTooltip showTooltip="true" />
        <FormElementControl>
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </FormElementControl>
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
  },
  {
    id: 'rtl-required-help-text-icon',
    label: 'Right to Left Required with Help Text Icon',
    element: (
      <div dir="rtl">
        <Fieldset>
          <Legend>
            <abbr className="slds-required" title="required">
              *
            </abbr>{' '}
            Radio Group Label
          </Legend>
          <div className="slds-form-element__icon">
            <ButtonIcon
              symbol="info"
              assistiveText="Help"
            />
          </div>
          <FormElementControl>
            <Radio checked label="Radio Label One" name="rtl-required" />
            <Radio label="Radio Label Two" name="rtl-required" />
          </FormElementControl>
        </Fieldset>
      </div>
    )
  }
];

export const examples = [
  {
    id: 'styling-hooks',
    label: 'Styling Hooks Test',
    demoStyles: `
      --slds-c-radio-color-border: black;
      --slds-c-radio-color-background: orange;
      --slds-c-radio-mark-color-foreground: black;
      --slds-c-radio-color-border-focus: gray;
      --slds-c-radio-shadow-focus: 0 0 3px red;
      `,
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio label="Radio Label One" name="hooks" />
          <Radio label="Radio Label Two" name="hooks" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'styling-hooks-checked',
    label: 'Styling Hooks Test - Checked',
    demoStyles: `
      --slds-c-radio-color-border: red;
      --slds-c-radio-color-background: gold;
      --slds-c-radio-mark-color-foreground: gold;
      --slds-c-radio-color-border-focus: gray;
      --slds-c-radio-shadow-focus: 0 0 3px red;
      --slds-c-radio-color-border-checked: gold;
      --slds-c-radio-color-background-checked: red;
      `,
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio checked label="Radio Label One" name="hooks-checked" />
          <Radio label="Radio Label Two" name="hooks-checked" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'styling-hooks-error',
    label: 'Styling Hooks Test - Error',
    demoStyles: `
      --slds-c-radio-color-border: black;
      --slds-c-radio-color-background: orange;
      --slds-c-radio-mark-color-foreground: black;
      --slds-c-radio-color-border-focus: gray;
      --slds-c-radio-shadow-focus: 0 0 3px red;
      `,
    storybookStyles: true,
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
            errorId="hooks-error"
            checked
            label="Radio Label One"
            name="hooks-error"
          />
          <Radio
            errorId="hooks-error"
            label="Radio Label Two"
            name="hooks-error"
          />
        </FormElementControl>
        <div id="hooks-error" className="slds-form-element__help">
          This field is required
        </div>
      </Fieldset>
    )
  },
  {
    id: 'wrapping-text',
    label: 'Radio Group with Wrapping Text',
    demoStyles: `width: 210px`,
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <Radio checked label="Early Morning (12 AM - 8 AM)" name="wrapping-text" />
          <Radio label="Morning (8 AM - 12 PM)" name="wrapping-text" />
          <Radio label="Afternoon (12 PM - 5 PM)" name="wrapping-text" />
          <Radio label="Evening (5 PM - 12 AM)" name="wrapping-text" />
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'wrapping-text-required',
    label: 'Required with Wrapping Text',
    demoStyles: `width: 210px`,
    storybookStyles: true,
    element: (
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Radio Group Label
        </Legend>
        <FormElementControl>
          <Radio checked label="Early Morning (12 AM - 8 AM)" name="wrapping-text" />
          <Radio label="Morning (8 AM - 12 PM)" name="wrapping-text" />
          <Radio label="Afternoon (12 PM - 5 PM)" name="wrapping-text" />
          <Radio label="Evening (5 PM - 12 AM)" name="wrapping-text" />
        </FormElementControl>
      </Fieldset>
    )
  }
];
