// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';
import { SpinnerContainer, Spinner } from '../../spinners/base/example';

let inputId = 'text-input-id-1';

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
    htmlFor={props.id || inputId}
    id={props.labelID}
  >
    {props.children}
  </label>
);

export let FormElementControl = props => (
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>
);

export let Input = props => {
  return (
    <input
      {...props}
      id={props.id || inputId}
      className={classNames('slds-input', props.className)}
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

let Default = props => (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <Input />
    </FormElementControl>
  </FormElement>
);

let Required = props => (
  <FormElement>
    <FormElementLabel>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Input Label
    </FormElementLabel>
    <FormElementControl>
      <Input required />
    </FormElementControl>
  </FormElement>
);

let ErrorState = props => (
  <FormElement className="slds-has-error">
    <FormElementLabel>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Input Label
    </FormElementLabel>
    <FormElementControl>
      <Input required aria-describedby={props.errorId} />
    </FormElementControl>
    <div id={props.errorId} className="slds-form-element__help">
      This field is required
    </div>
  </FormElement>
);

let ErrorIcon = props => (
  <FormElement className="slds-has-error">
    <FormElementLabel>
      <abbr className="slds-required" title="required">
        *
      </abbr>{' '}
      Input Label
    </FormElementLabel>
    <FormElementControl className="slds-input-has-icon slds-input-has-icon_left">
      <SvgIcon className="slds-input__icon" sprite="utility" symbol="error" />
      <Input required aria-describedby={props.errorId} />
    </FormElementControl>
    <div id={props.errorId} className="slds-form-element__help">
      This field is required
    </div>
  </FormElement>
);

let Disabled = props => (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <Input disabled />
    </FormElementControl>
  </FormElement>
);

let Readonly = props => (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <Input readOnly defaultValue="Read Only" placeholder="" />
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
      <Input />
    </FormElementControl>
  </FormElement>
);

export let states = [
  {
    id: 'input-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'input-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'input-error',
    label: 'Error',
    element: <ErrorState errorId="error-message" />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon errorId="error-message" />
  },
  {
    id: 'read-only',
    label: 'Readonly',
    element: <Readonly />
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
  },
  {
    id: 'static-tightened',
    label: 'Static - Tightened',
    element: (
      <div>
        <FormElement className="slds-form-element_small slds-form-element_edit">
          <span className="slds-form-element__label">Input Label</span>
          <FormElementControl>
            <span className="slds-form-element__static slds-border_bottom">
              Read Only
            </span>
          </FormElementControl>
        </FormElement>
        <FormElement className="slds-form-element_small slds-form-element_edit">
          <span className="slds-form-element__label">Input Label</span>
          <FormElementControl>
            <span className="slds-form-element__static slds-border_bottom">
              Read Only
            </span>
          </FormElementControl>
        </FormElement>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'left-icon',
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
          <Input />
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'right-icon',
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
          <Input />
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'double-icon',
    label: 'Left Icon & Clear Button',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left-right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <Input />
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
    id: 'double-icon-spinner',
    label: 'Clear Button with Spinner',
    element: (
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left-right slds-input-has-icon_group-right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <Input />
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
    id: 'fixed-text',
    label: 'Fixed text',
    element: (
      <FormElement>
        <FormElementLabel labelID="fixed-text-label">
          Input Label
        </FormElementLabel>
        <FormElementControl className="slds-input-has-fixed-addon">
          <span className="slds-form-element__addon" id="fixed-text-addon-pre">
            $
          </span>
          <Input aria-labelledby="fixed-text-label fixed-text-addon-pre fixed-text-addon-post" />
          <span className="slds-form-element__addon" id="fixed-text-addon-post">
            euro
          </span>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <FormElement>
        <FormElementLabel labelID="inline-text-label">
          Input Label
        </FormElementLabel>
        <FormElementControl>
          <Input aria-labelledby="inline-text-label" />
          <div className="slds-form-element__help">ex: (415)111-2222</div>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'field-level-help',
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
              className="slds-input"
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
  },
  {
    id: 'counter',
    label: 'Counter',
    element: (
      <FormElement className="slds-text-align_center">
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText={'Decrement counter'}
          title={'Decrement counter'}
        />
        <FormElementLabel id="user-count-01" className="slds-m-right_none">
          Input Label
        </FormElementLabel>
        <FormElementControl>
          <Input
            className="slds-input_counter"
            id="user-count-01"
            type="number"
            placeholder={1}
          />
        </FormElementControl>
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText={'Increment counter'}
          title={'Increment counter'}
        />
      </FormElement>
    )
  }
];
