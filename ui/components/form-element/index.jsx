// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../shared/svg-icon';
import { Tooltip } from '../tooltips/base/example';

export const SimpleFormElementWrapper = props => {
  const { className, role, children, ...rest } = props;

  return (
    <div
      className={classNames('slds-form-element', className)}
      role={role}
      {...rest}
    >
      {children}
    </div>
  );
};

export const FormElementControl = props => {
  const { className, children } = props;
  return (
    <div className={classNames('slds-form-element__control', className)}>
      {children}
    </div>
  );
};

export const FormElementLabel = props => {
  const {
    isRequired,
    labelContent,
    hasHiddenLabel,
    labelId,
    labelClassName,
    inputId
  } = props;

  return (
    <label
      className={classNames(
        'slds-form-element__label',
        {
          'slds-assistive-text': hasHiddenLabel
        },
        labelClassName
      )}
      htmlFor={inputId}
      id={labelId}
    >
      {isRequired ? (
        <abbr className="slds-required" title="required">
          * {' '}
        </abbr>
      ) : null}
      {labelContent}
    </label>
  );
};

export const FormElementTooltip = props => (
  <div className="slds-form-element__icon">
    <button aria-describedby="help" className="slds-button slds-button_icon">
      <SvgIcon
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        sprite="utility"
        symbol="info"
      />
      <span className="slds-assistive-text">Help</span>
    </button>
    <Tooltip
      className="slds-nubbin_bottom-left"
      id="help"
      style={{
        position: 'absolute',
        top: '-45px',
        left: '-15px',
        width: '170px'
      }}
    >
      Some helpful information
    </Tooltip>
  </div>
);

export const FormElementHelpMessage = props => (
  <div
    className={classNames('slds-form-element__help', props.className)}
    id={props.errorId}
  >
    {props.children}
  </div>
);

/**
* Generic Form Element
* @name FormElement
* @prop {string}  formElementClassName - Classnames to be added to the overall Form Element wrapper
* @prop {string}  formControlClassName - Classnames to be added to the Form Element Control
* @prop {boolean} isRequired - If true, required asterisk is added to element
* @prop {string}  labelId - ID of the label
* @prop {string}  labelClassName - Classnames to be added to the Form Element Label
* @prop {object}  labelContent - Content of the label, can be a simple string or full object
* @prop {boolean} hasHiddenLabel - If true, label is hidden using slds-assistive-text class
* @prop {string}  inputId - ID of the input, used for the label's htmlFor
* @prop {boolean} hasLeftIcon - Adds icon placement specific classes
* @prop {boolean} hasRightIcon - Adds icon placement specific classes
* @prop {boolean} hasRightIconGroup - Adds icon placement specific class when input has two icons on the right
* @prop {string}  errorId - ID of the error message
* @prop {boolean} hasTooltip - If true, displays tooltop
* @prop {string}  inlineMessage - Message placed under the input, either inline help or error message
* @prop {string}  role - Role of the Form Element Wrapper
* @prop {object}  dropdown - Content shown as a dropdown of the Form Element
* @prop {object}  children - Contents of the Form Element
*/
export const FormElement = props => {
  const {
    formElementClassName,
    formControlClassName,
    isRequired,
    labelId,
    labelClassName,
    labelContent,
    hasHiddenLabel,
    inputId,
    hasLeftIcon,
    hasRightIcon,
    hasRightIconGroup,
    errorId,
    hasTooltip,
    inlineMessage,
    role,
    dropdown,
    children,
    ...rest
  } = props;

  let inputIconPositionClasses;

  if (hasRightIconGroup) {
    inputIconPositionClasses =
      'slds-input-has-icon slds-input-has-icon_left-right slds-input-has-icon_group-right';
  } else if (hasLeftIcon && hasRightIcon) {
    inputIconPositionClasses =
      'slds-input-has-icon slds-input-has-icon_left-right';
  } else if (hasLeftIcon) {
    inputIconPositionClasses = 'slds-input-has-icon slds-input-has-icon_left';
  } else if (hasRightIcon) {
    inputIconPositionClasses = 'slds-input-has-icon slds-input-has-icon_right';
  }

  return (
    <SimpleFormElementWrapper
      {...rest}
      className={formElementClassName}
      role={role}
    >
      {labelContent && (
        <FormElementLabel
          isRequired={isRequired}
          labelContent={labelContent}
          hasHiddenLabel={hasHiddenLabel}
          labelId={labelId}
          labelClassName={labelClassName}
          inputId={inputId}
        />
      )}
      {hasTooltip && <FormElementTooltip />}
      <FormElementControl
        className={classNames(inputIconPositionClasses, formControlClassName)}
      >
        {children}
      </FormElementControl>
      {inlineMessage && (
        <FormElementHelpMessage errorId={errorId}>
          {inlineMessage}
        </FormElementHelpMessage>
      )}
      {dropdown || null}
    </SimpleFormElementWrapper>
  );
};
