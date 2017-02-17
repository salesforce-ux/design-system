// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Input } from 'ui/components/input/flavors/base/index.react.example';
import { Textarea } from 'ui/components/textarea/flavors/base/index.react.example';
import { Checkbox } from 'ui/components/checkbox/flavors/base/index.react.example';
import { Radio } from 'ui/components/radio-group/flavors/base/index.react.example';


const inputLabel = 'Form Element Label';
const inputId = 'input-unique-id';
const errorId = 'error-message-unique-id';


export let FormElement = props => {
  let formControlClassName;
  if ( props.inputIcon === 'left' ) {
    formControlClassName = 'slds-input-has-icon slds-input-has-icon--left';
  } else if ( props.inputIcon === 'right' ) {
    formControlClassName = 'slds-input-has-icon slds-input-has-icon--right';
  }
  return (
    <div className={ classNames('slds-form-element', props.className) }>
      { props.label ?
        <label
          className={ classNames('slds-form-element__label', props.hideLabel ? 'slds-assistive-text' : null) }
          htmlFor={ props.inputId }
        >
          { props.required ?
            <abbr className="slds-required" title="required">*</abbr>
          : null }
          { props.label }
        </label>
      : null }
      { props.tooltip ?
        <div className="slds-form-element__icon">
          <button aria-describedby="help" className="slds-button slds-button--icon">
            <SvgIcon
              className="slds-icon slds-icon--x-small slds-icon-text-default"
              sprite="utility"
              symbol="info"
            />
            <span className="slds-assistive-text">Help</span>
          </button>
        </div>
      : null }
      <div className={ classNames('slds-form-element__control', formControlClassName, props.formControlClassName) }>
        { props.children }
      </div>
      { props.message ?
        <div className="slds-form-element__help" id={ props.errorId }>
          { props.message }
        </div>
      : null }
    </div>
  );
};



export let states = [
  {
    id: 'input',
    label: 'Input',
    element:
      <FormElement label={ inputLabel } inputId={ inputId }>
        <Input id={ inputId } />
      </FormElement>
  },
  {
    id: 'textarea',
    label: 'Textarea',
    element:
      <FormElement label={ inputLabel } inputId={ inputId }>
        <Textarea id={ inputId } />
      </FormElement>
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    element:
      <FormElement>
        <Checkbox label="Checkbox Label" />
      </FormElement>
  },
  {
    id: 'radio-group',
    label: 'Radio Group',
    element:
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">Form Element Label</legend>
        <div className="slds-form-element__control">
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </div>
      </fieldset>
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element:
      <FormElement label={ inputLabel } inputId={ inputId } message="ex: (415)111-2222">
        <Input id={ inputId } />
      </FormElement>
  },
  {
    id: 'tooltip-help',
    label: 'Tooltip Help',
    element:
      <FormElement label={ inputLabel } inputId={ inputId } tooltip={ true }>
        <Input id={ inputId } />
      </FormElement>
  },
  {
    id: 'required',
    label: 'Required',
    element:
      <FormElement
        label={ inputLabel }
        inputId={ inputId }
        required={ true }
      >
        <Input id={ inputId } required={ true } />
      </FormElement>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <FormElement
        className="slds-has-error"
        label={ inputLabel }
        inputId={ inputId }
        errorId={ errorId }
        required={ true }
        message="This field is required"
      >
        <Input
          id={ inputId }
          required={ true }
          aria-describedby={ errorId }
        />
      </FormElement>
  }
];
