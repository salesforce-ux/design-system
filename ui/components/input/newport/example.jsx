// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { SpinnerContainer, Spinner } from '../../spinners/base/example';

let inputId = 'newport-text-input-id-1';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

// Might need to move this to its own component example
export let FormElement = props => (
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>
);

export let FormElementLabel = props => (
  <label
    className={classNames('slds-form-element__label', props.className)}
    htmlFor={inputId}
  >
    {props.children}
  </label>
);

export let FormElementControl = props => (
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>
);

export let NewportInput = props => {
  return (
    <input
      {...props}
      id={props.id || inputId}
      className={classNames(
        'slds-input vlocity-newport-input',
        props.className
      )}
      type={props.type || 'text'}
      placeholder={props.placeholder || 'Placeholder Text'}
      readOnly={props['readOnly']}
      defaultValue={props.defaultValue}
    />
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let NewportDefault = props => (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <NewportInput />
    </FormElementControl>
  </FormElement>
);

let NewportRequired = props => (
  <FormElement>
    <FormElementLabel>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Input Label
    </FormElementLabel>
    <FormElementControl>
      <NewportInput required />
    </FormElementControl>
  </FormElement>
);

let NewportErrorState = props => (
  <FormElement className="slds-has-error">
    <FormElementLabel>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Input Label
    </FormElementLabel>
    <FormElementControl>
      <NewportInput required aria-describedby={props.errorId} />
    </FormElementControl>
    <div id={props.errorId} className="slds-form-element__help">
      This field is required
    </div>
  </FormElement>
);

let NewportErrorIcon = props => (
  <FormElement className="slds-has-error">
    <FormElementLabel>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Input Label
    </FormElementLabel>
    <FormElementControl className="slds-input-has-icon slds-input-has-icon_left">
      <SvgIcon className="slds-input__icon" sprite="utility" symbol="warning" />
      <NewportInput required aria-describedby={props.errorId} />
    </FormElementControl>
    <div id={props.errorId} className="slds-form-element__help">
      This field is required
    </div>
  </FormElement>
);

let NewportDisabled = props => (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <NewportInput disabled />
    </FormElementControl>
  </FormElement>
);

let NewportReadonly = props => (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <NewportInput readOnly defaultValue="Read Only" placeholder="" />
    </FormElementControl>
  </FormElement>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <NewportInput />
    </FormElementControl>
  </FormElement>
);

export let states = [
  {
    id: 'newport-input-required',
    label: 'Required',
    element: <NewportRequired />
  },
  {
    id: 'newport-input-disabled',
    label: 'Disabled',
    element: <NewportDisabled />
  },
  {
    id: 'newport-input-error',
    label: 'Error',
    element: <NewportErrorState errorId="error-message" />
  },
  {
    id: 'newport-input-error-icon',
    label: 'Error with icon',
    element: <NewportErrorIcon errorId="error-message" />
  },
  {
    id: 'newport-read-only',
    label: 'Readonly',
    element: <NewportReadonly />
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <FormElement>
        <span className="slds-form-element__label">Input Label</span>
        <FormElementControl>
          <span className="slds-form-element__static">Read Only</span>
        </FormElementControl>
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'newport-left-icon',
    label: 'Left Icon',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <NewportInput />
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'newport-right-icon',
    label: 'Right Icon',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <NewportInput />
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'newport-double-icon',
    label: 'Left & Right Icon',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left-right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <NewportInput />
          <button className="slds-input__icon slds-input__icon_right slds-button slds-button_icon">
            <SvgIcon
              className="slds-button__icon slds-icon-text-light"
              sprite="utility"
              symbol="clear"
            />
            <span className="slds-assistive-text">Clear</span>
          </button>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'newport-double-icon-spinner',
    label: 'Icons with Spinner',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left-right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <NewportInput />
          <div className="slds-input__icon-group slds-input__icon-group_right">
            <Spinner className="slds-spinner_brand slds-spinner_x-small slds-input__spinner" />
            <button className="slds-input__icon slds-input__icon_right slds-button slds-button_icon">
              <SvgIcon
                className="slds-button__icon slds-icon-text-light"
                sprite="utility"
                symbol="clear"
              />
              <span className="slds-assistive-text">Clear</span>
            </button>
          </div>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'newport-fixed-text',
    label: 'Fixed text',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-fixed-addon">
          <span className="slds-form-element__addon">$</span>
          <NewportInput />
          <span className="slds-form-element__addon">euro</span>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'newport-field-level-help',
    label: 'Field level help',
    element: (
      <div className="demo-only" style={{ paddingTop: '5rem' }}>
        <div className="slds-form-element">
          <label
            className="slds-form-element__label slds-align-middle"
            htmlFor="form-help"
          >
            Text Label
          </label>
          <div className="slds-form-element__icon">
            <button
              aria-describedby="help"
              className="slds-button slds-button_icon"
            >
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-icon-text-default"
                sprite="utility"
                symbol="info"
              />
              <span className="slds-assistive-text">Help</span>
            </button>
          </div>
          <div className="slds-form-element__control">
            <input
              className="slds-input vlocity-newport-input"
              id="form-help"
              placeholder="Field Level Help"
              type="text"
            />
          </div>
        </div>
        <div
          className="slds-popover slds-popover_tooltip slds-nubbin_bottom-left"
          id="help"
          role="tooltip"
          style={{
            position: 'absolute',
            top: '15px',
            left: '72px',
            marginLeft: '-1rem',
            width: '20rem'
          }}
        >
          <div className="slds-popover__body slds-text-longform">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              facere eligendi reiciendis obcaecati.
            </p>
          </div>
        </div>
      </div>
    )
  }
];
