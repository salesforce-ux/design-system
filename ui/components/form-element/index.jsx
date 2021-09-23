// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icons/';
import { Tooltip } from '../tooltips/base/example';

export const SimpleFormElementWrapper = props => {
  const {
    isEditable,
    isViewMode,
    hasHint,
    hasError,
    isStacked,
    isHorizontal,
    isEditing,
    isEdited,
    column,
    role,
    className,
    children,
    ...rest
  } = props;

  let formElementClassNames = classNames(
    'slds-form-element',
    {
      'slds-form-element_edit': isEditable,
      'slds-form-element_readonly': isViewMode,
      'slds-form-element_stacked': isStacked,
      'slds-form-element_horizontal': isHorizontal,
      'slds-hint-parent': hasHint,
      'slds-has-error': hasError,
      'slds-is-editing': isEditing,
      'slds-is-edited': isEdited
    },
    column && `slds-form-element_${column}-col`,
    className
  );

  return (
    <div className={formElementClassNames} role={role} {...rest}>
      {children}
    </div>
  );
};

SimpleFormElementWrapper.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
  isEditable: PropTypes.bool,
  isEditing: PropTypes.bool,
  isEdited: PropTypes.bool,
  isViewMode: PropTypes.bool,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  hasHint: PropTypes.bool,
  hasError: PropTypes.bool,
  column: PropTypes.number
};

export const FormElementControl = props => {
  const { className, children } = props;

  return (
    <div className={classNames('slds-form-element__control', className)}>
      {children}
    </div>
  );
};

FormElementControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export const FormElementLabel = props => {
  const {
    isRequired,
    labelContent,
    hasHiddenLabel,
    labelId,
    labelClassName,
    inputId,
    showRequiredIndicator
  } = props;

  return (
    <label
      className={classNames(
        'slds-form-element__label',
        hasHiddenLabel && 'slds-assistive-text',
        labelClassName
      )}
      htmlFor={inputId}
      id={labelId}
    >
      {(isRequired && showRequiredIndicator) &&
        (
          <abbr className="slds-required" title="required">
            *{' '}
          </abbr>
        )}
      {labelContent}
    </label>
  );
};

FormElementLabel.propTypes = {
  labelId: PropTypes.string,
  inputId: PropTypes.string,
  labelContent: PropTypes.node,
  labelClassName: PropTypes.string,
  hasHiddenLabel: PropTypes.bool,
  isRequired: PropTypes.bool,
  showRequiredIndicator: PropTypes.bool
};

FormElementLabel.defaultProps = {
  showRequiredIndicator: true
};

export const FormElementSpanFauxLabel = props => {
  const { isRequired, children, labelId, showRequiredIndicator } = props;

  return (
    <span id={labelId} className="slds-form-element__label">
      {(isRequired && showRequiredIndicator) &&
        (
          <abbr className="slds-required" title="required">
            *{' '}
          </abbr>
        )}
      {children}
    </span>
  );
};

FormElementSpanFauxLabel.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  labelId: PropTypes.string
};

FormElementSpanFauxLabel.defaultProps = {
  showRequiredIndicator: true
};

export const FormElementTooltip = props => {
  const { showTooltip } = props;

  return (
    <div className="slds-form-element__icon">
      <ButtonIcon
        aria-describedby={showTooltip && 'help'}
        symbol="info"
        assistiveText="Help"
      />
      {showTooltip && (
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
          Some helpful information.
        </Tooltip>
      )}
    </div>
  );
};

FormElementTooltip.propTypes = {
  showTooltip: PropTypes.bool
};

export const FormElementHelpMessage = props => {
  const { errorId, children } = props;

  return (
    <div className="slds-form-element__help" id={errorId}>
      {children}
    </div>
  );
};

FormElementHelpMessage.propTypes = {
  errorId: PropTypes.string,
  children: PropTypes.node
};

export const FormElementStatic = props => {
  const { isLongform, children } = props;

  return (
    <div
      className={classNames(
        'slds-form-element__static',
        isLongform && 'slds-text-longform'
      )}
    >
      {children}
    </div>
  );
};

FormElementStatic.propTypes = {
  isLongform: PropTypes.bool,
  children: PropTypes.node
};

export const FieldsetWrapper = props => {
  const {
    id,
    hasCompoundFields,
    hasError,
    isRequired,
    isEditing,
    isEdited,
    isStacked,
    isHorizontal,
    isAddress,
    isDeprecated,
    column,
    children
  } = props;

  return (
    <fieldset
      id={id}
      className={classNames(
        'slds-form-element',
        {
          'slds-form-element_compound': hasCompoundFields && !isDeprecated,
          'slds-form_compound': hasCompoundFields && isDeprecated,
          'slds-form-element_address': isAddress,
          'slds-has-error': hasError,
          'slds-is-required': isRequired,
          'slds-is-editing': isEditing,
          'slds-is-edited': isEdited,
          'slds-form-element_stacked': isStacked,
          'slds-form-element_horizontal': isHorizontal
        },
        column && `slds-form-element_${column}-col`
      )}
    >
      {children}
    </fieldset>
  );
};

FieldsetWrapper.propTypes = {
  id: PropTypes.string,
  hasCompoundFields: PropTypes.bool,
  children: PropTypes.node,
  hasError: PropTypes.bool,
  isRequired: PropTypes.bool,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isEditing: PropTypes.bool,
  isEdited: PropTypes.bool,
  isAddress: PropTypes.bool,
  isDeprecated: PropTypes.bool,
  column: PropTypes.number
};

export const Legend = props => {
  const { isRequired, hasTooltip, hasHiddenLabel, children } = props;

  return (
    <React.Fragment>
      <legend
        className={classNames(
          'slds-form-element__legend slds-form-element__label',
          hasHiddenLabel && 'slds-assistive-text'
        )}
      >
        {isRequired && (
          <abbr className="slds-required" title="required">
            *{' '}
          </abbr>
        )}
        {children}
      </legend>
      {hasTooltip && (
        <div className="slds-form-element__icon">
          <ButtonIcon symbol="info" assistiveText="Help" />
        </div>
      )}
    </React.Fragment>
  );
};

Legend.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  hasHiddenLabel: PropTypes.bool,
  hasTooltip: PropTypes.bool
};

/**
 * Generic Form Element
 * @name FormElement
 * @prop {string}  formElementClassName - Classnames to be added to the overall Form Element wrapper
 * @prop {string}  formControlClassName - Classnames to be added to the Form Element Control
 * @prop {boolean} isRequired - If true, required asterisk is added to element
 * @prop {boolean} isDisabled - If true, element receives disabled attributes
 * @prop {string}  labelId - ID of the label
 * @prop {string}  labelClassName - Classnames to be added to the Form Element Label
 * @prop {object}  labelContent - Content of the label, can be a simple string or full object
 * @prop {boolean} hasHiddenLabel - If true, label is hidden using slds-assistive-text class
 * @prop {string}  inputId - ID of the input, used for the label's htmlFor
 * @prop {boolean} hasLeftIcon - Adds icon placement specific classes
 * @prop {boolean} hasRightIcon - Adds icon placement specific classes
 * @prop {boolean} hasRightIconGroup - Adds icon placement specific class when input has two icons on the right
 * @prop {string}  errorId - ID of the error message
 * @prop {boolean} hasTooltip - If true, displays tooltip
 * @prop {string}  inlineMessage - Message placed under the input, either inline help or error message
 * @prop {string}  role - Role of the Form Element Wrapper
 * @prop {object}  dropdown - Content shown as a dropdown of the Form Element
 */
export const FormElement = props => {
  const {
    formElementClassName,
    formControlClassName,
    isRequired,
    isDisabled,
    isEditable,
    isViewMode,
    isStacked,
    isHorizontal,
    isEditing,
    isEdited,
    hasHint,
    hasError,
    hasFauxLabel,
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
    showTooltip,
    inlineMessage,
    column,
    role,
    dropdown,
    showRequiredIndicator,
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
      className={classNames(formElementClassName)}
      hasError={hasError}
      hasHint={hasHint}
      isViewMode={isViewMode}
      isEditable={isEditable}
      isStacked={isStacked}
      isHorizontal={isHorizontal}
      isEditing={isEditing}
      isEdited={isEdited}
      role={role}
      column={column}
    >
      {labelContent &&
        (isViewMode || hasFauxLabel ? (
          <FormElementSpanFauxLabel
            isRequired={isRequired}
            hasTooltip={hasTooltip}
            labelId={labelId}
          >
            {labelContent}
          </FormElementSpanFauxLabel>
        ) : (
          <FormElementLabel
            isRequired={isRequired}
            labelContent={labelContent}
            hasHiddenLabel={hasHiddenLabel}
            labelId={labelId}
            labelClassName={labelClassName}
            inputId={inputId}
            showRequiredIndicator={showRequiredIndicator}
          />
        ))}
      {hasTooltip && <FormElementTooltip showTooltip={showTooltip} />}
      <FormElementControl
        className={classNames(inputIconPositionClasses, formControlClassName)}
      >
        {isEdited && (
          <div className="slds-form-element__undo">
            <ButtonIcon symbol="undo" assistiveText={`Undo ${labelContent}`} />
          </div>
        )}
        {children}
      </FormElementControl>
      {inlineMessage && (
        <FormElementHelpMessage errorId={errorId}>
          {inlineMessage}
        </FormElementHelpMessage>
      )}
      {dropdown}
    </SimpleFormElementWrapper>
  );
};

FormElement.propTypes = {
  children: PropTypes.node,
  labelId: PropTypes.string,
  inputId: PropTypes.string,
  errorId: PropTypes.string,
  labelContent: PropTypes.node,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  isEditing: PropTypes.bool,
  isEdited: PropTypes.bool,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  hasHiddenLabel: PropTypes.bool,
  hasLeftIcon: PropTypes.bool,
  hasRightIcon: PropTypes.bool,
  hasRightIconGroup: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  hasError: PropTypes.bool,
  hasFauxLabel: PropTypes.bool,
  showTooltip: PropTypes.bool,
  dropdown: PropTypes.node,
  inlineMessage: PropTypes.string,
  formElementClassName: PropTypes.string,
  formControlClassName: PropTypes.string,
  column: PropTypes.number
};

export const Fieldset = props => {
  const {
    id,
    label,
    isRequired,
    isEditing,
    isStacked,
    isHorizontal,
    isAddress,
    isDeprecated,
    column,
    hasError,
    hasCompoundFields,
    hasTooltip,
    hasHiddenLabel,
    errorId,
    inlineMessage,
    children
  } = props;

  return (
    <FieldsetWrapper
      id={id}
      isRequired={isRequired}
      isEditing={isEditing}
      isStacked={isStacked}
      isHorizontal={isHorizontal}
      isAddress={isAddress}
      hasError={hasError}
      hasCompoundFields={hasCompoundFields}
      column={column}
      isDeprecated={isDeprecated}
    >
      <Legend
        isRequired={isRequired}
        hasTooltip={hasTooltip}
        hasHiddenLabel={hasHiddenLabel}
      >
        {label}
      </Legend>
      <FormElementControl>{children}</FormElementControl>
      {inlineMessage && (
        <FormElementHelpMessage errorId={errorId}>
          {inlineMessage}
        </FormElementHelpMessage>
      )}
    </FieldsetWrapper>
  );
};

Fieldset.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  isEditing: PropTypes.bool,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isAddress: PropTypes.bool,
  isDeprecated: PropTypes.bool,
  hasHiddenLabel: PropTypes.bool,
  hasCompoundFields: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  hasError: PropTypes.bool,
  errorId: PropTypes.string,
  inlineMessage: PropTypes.string,
  column: PropTypes.number
};
