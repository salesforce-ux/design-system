// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icons/';
import Input from '../input/';
import { Spinner } from '../spinners/base/example';
import { FormElement } from '../form-element/';
import _ from '../../shared/helpers';

/**
 * Combobox Container
 */
const ComboboxContainer = props => (
  <div
    className={classNames(
      'slds-combobox_container',
      props.comboboxPosition && `slds-combobox-addon_${props.comboboxPosition}`,
      props.hasSelection && 'slds-has-selection',
      props.className
    )}
  >
    {props.children}
  </div>
);

/**
 * Combobox group
 */
const ComboboxGroupContainer = props => (
  <div
    className={classNames(
      'slds-combobox-group',
      props.hasSelection && 'slds-has-selection'
    )}
  >
    {props.children}
  </div>
);

/**
 * Combobox
 */

export const ComboboxFormContext = React.createContext({
  isOpen: false
});

const ComboboxFormElement = ({
  children,
  className,
  id,
  isOpen,
  staticListbox,
  ...props
}) => (
  <ComboboxFormContext.Provider value={{ isOpen }}>
    <div
      className={classNames(
        'slds-combobox',
        !staticListbox && 'slds-dropdown-trigger slds-dropdown-trigger_click',
        isOpen && 'slds-is-open',
        className
      )}
      aria-controls={props['aria-controls']}
      id={id}
    >
      {children}
    </div>
  </ComboboxFormContext.Provider>
);

/**
 * Combobox Input
 */
const ComboboxInputFaux = ({
  aria,
  children,
  hasFocus,
  id,
  isDisabled,
  labelId,
  onBlur,
  onFocus,
  role,
  value
}) => {
  return (
    <button
      type="button"
      className={classNames(
        'slds-input_faux',
        'slds-combobox__input',
        hasFocus && 'slds-has-focus',
        isDisabled && 'slds-is-disabled',
        value && 'slds-combobox__input-value'
      )}
      disabled={isDisabled}
      {...labelId && id && { [`aria-labelledby`]: `${labelId} ${id}` }}
      {...{ id, role, onBlur, onFocus }}
      {...aria}
    >
      <span className="slds-truncate" id={_.uniqueId('combobox-value-id-')}>
        {children}
      </span>
    </button>
  );
};

ComboboxInputFaux.propTypes = {
  aria: PropTypes.object,
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  labelId: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  role: PropTypes.string,
  value: PropTypes.string
};

/**
 * Combobox Input
 */
const ComboboxInput = ({
  autocomplete,
  className,
  id,
  inputIconPosition,
  isDisabled,
  isLoading,
  labelId,
  leftInputIcon,
  listbox,
  listboxId,
  hasFocus,
  placeholder,
  selectOnly,
  resultsType,
  rightInputIcon,
  showCloseButton,
  tabIndex,
  toggleFocus,
  value,
  ...props
}) => {
  const hasInputIcon = leftInputIcon || rightInputIcon || showCloseButton;
  const { isOpen } = useContext(ComboboxFormContext);
  const placeholderValue = !placeholder && placeholder !== ""
    ? autocomplete
      ? 'Search...'
      : 'Select an Option…'
    : placeholder;

  return (
    <div
      className={classNames(
        'slds-combobox__form-element',
        hasInputIcon && 'slds-input-has-icon',
        `slds-input-has-icon_${inputIconPosition}`,
        className
      )}
      role="none"
    >
      {leftInputIcon && leftInputIcon}
      {selectOnly ? (
        <ComboboxInputFaux
          id={`${id}-selected-value`}
          {...{
            hasFocus,
            isDisabled,
            labelId,
            value,
            aria: {
              [`aria-controls`]:
                props['aria-controls'] || 'please-provide-listbox-id-here',
              [`aria-expanded`]: isOpen ? 'true' : 'false',
              [`aria-haspopup`]: resultsType,
              [`aria-activedescendant`]: props['aria-activedescendant']
            },
            onFocus: e => toggleFocus(e),
            onBlur: e => toggleFocus(e)
          }}
        >
          {value || placeholderValue}
        </ComboboxInputFaux>
      ) : (
        <Input
          className={classNames(
            'slds-combobox__input',
            hasFocus && 'slds-has-focus',
            value && 'slds-combobox__input-value'
          )}
          id={id}
          aria-activedescendant={props['aria-activedescendant']}
          aria-autocomplete={autocomplete ? 'list' : null}
          aria-controls={
            props['aria-controls'] || 'please-provide-listbox-id-here'
          }
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup={resultsType}
          autoComplete="off"
          role="combobox"
          type="text"
          placeholder={placeholderValue}
          readOnly={selectOnly}
          defaultValue={value}
          tabIndex={tabIndex}
          onFocus={e => toggleFocus(e)}
          onBlur={e => toggleFocus(e)}
          disabled={isDisabled}
        />
      )}
      {rightInputIcon && rightInputIcon}
      {showCloseButton && (
        <div className="slds-input__icon-group slds-input__icon-group_right">
          {isLoading && (
            <Spinner className="slds-spinner_brand slds-spinner_x-small slds-input__spinner" />
          )}
          <ButtonIcon
            className="slds-input__icon slds-input__icon_right"
            symbol="close"
            title="Remove selected option"
            assistiveText="Remove selected option"
          />
        </div>
      )}
    </div>
  );
};

ComboboxInput.propTypes = {
  autocomplete: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  inputIconPosition: PropTypes.oneOf([
    'left',
    'right',
    'left-right',
    'group-right'
  ]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  labelId: PropTypes.string,
  leftInputIcon: PropTypes.element,
  listbox: PropTypes.element,
  listboxId: PropTypes.string,
  hasFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  selectOnly: PropTypes.bool,
  resultsType: PropTypes.oneOf(['listbox', 'dialog']).isRequired,
  rightInputIcon: PropTypes.element,
  showCloseButton: PropTypes.bool,
  toggleFocus: PropTypes.func,
  value: PropTypes.string
};

export default class Combobox extends Component {
  constructor() {
    super();
    this.toggleFocus = this.toggleFocus.bind(this);
    this.state = {
      focused: false
    };
    this.labelId = _.uniqueId('combobox-label-id-');
  }

  toggleFocus(event) {
    const hasInteractions = this.props.hasInteractions;
    if (hasInteractions) {
      event.preventDefault();
      this.setState({
        focused: !this.state.focused
      });
    }
  }

  render() {
    const {
      autocomplete,
      autoFocus,
      className,
      comboboxAriaControls,
      containerClassName,
      results,
      resultsType,
      formClassName,
      hasFocus,
      hasSelection,
      hideLabel,
      id,
      inputContainerClassName,
      inputIconPosition,
      isDisabled,
      isLoading,
      isOpen,
      label,
      leftInputIcon,
      listboxOfSelections,
      placeholder,
      rightInputIcon,
      showCloseButton,
      staticListbox,
      isStacked,
      isHorizontal,
      isRequired,
      isEditing,
      column,
      tabIndex,
      value
    } = this.props;

    return (
      <FormElement
        inputId={id}
        labelContent={label}
        labelId={this.labelId}
        hasHiddenLabel={hideLabel}
        isRequired={isRequired}
        isEditing={isEditing}
        className={formClassName}
        isHorizontal={isHorizontal}
        isStacked={isStacked}
        column={column}
      >
        <ComboboxContainer
          className={containerClassName}
          hasSelection={hasSelection}
        >
          <ComboboxFormElement
            aria-controls={comboboxAriaControls}
            staticListbox={staticListbox}
            isOpen={isOpen || this.state.focused}
            className={className}
          >
            <ComboboxInput
              id={id}
              labelId={this.labelId}
              className={inputContainerClassName}
              toggleFocus={this.toggleFocus}
              placeholder={placeholder}
              hasFocus={hasFocus}
              value={value}
              autocomplete={autocomplete}
              showCloseButton={showCloseButton}
              isLoading={isLoading}
              inputIconPosition={inputIconPosition}
              leftInputIcon={leftInputIcon}
              rightInputIcon={rightInputIcon}
              tabIndex={tabIndex}
              selectOnly={this.props.selectOnly}
              autoFocus={autoFocus}
              aria-controls={this.props['aria-controls']}
              aria-activedescendant={this.props['aria-activedescendant']}
              isDisabled={isDisabled}
              resultsType={resultsType}
            />
            {results}
          </ComboboxFormElement>
        </ComboboxContainer>
        {listboxOfSelections}
      </FormElement>
    );
  }
}

Combobox.defaultProps = {
  label: 'Relate To'
};

Combobox.propTypes = {
  autocomplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  results: PropTypes.element.isRequired,
  resultsType: PropTypes.oneOf(['listbox', 'dialog']).isRequired,
  formClassName: PropTypes.string,
  hasFocus: PropTypes.bool,
  hasSelection: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputIconPosition: PropTypes.oneOf([
    'left',
    'right',
    'left-right',
    'group-right'
  ]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  leftInputIcon: PropTypes.element,
  listboxOfSelections: PropTypes.element,
  placeholder: PropTypes.string,
  rightInputIcon: PropTypes.element,
  showCloseButton: PropTypes.bool,
  staticListbox: PropTypes.bool,
  listbox: PropTypes.element,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isRequired: PropTypes.bool,
  isEditing: PropTypes.bool,
  column: PropTypes.number,
  tabIndex: PropTypes.string,
  value: PropTypes.string
};

export class ComboboxGroup extends Component {
  constructor() {
    super();
    this.toggleFocus = this.toggleFocus.bind(this);
    this.state = {
      focused: false
    };
  }

  toggleFocus(event) {
    const hasInteractions = this.props.hasInteractions;
    if (hasInteractions) {
      event.preventDefault();
      this.setState({
        focused: !this.state.focused
      });
    }
  }

  render() {
    const {
      addon,
      addonPosition,
      autocomplete,
      autoFocus,
      comboboxID,
      comboboxPosition,
      results,
      resultsType,
      formClassName,
      hasFocus,
      hasSelection,
      hideLabel,
      id,
      inputContainerClassName,
      inputIconPosition,
      isDisabled,
      isLoading,
      isOpen,
      label,
      leftInputIcon,
      listboxOfSelections,
      isStacked,
      isHorizontal,
      isRequired,
      isEditing,
      column,
      placeholder,
      rightInputIcon,
      showCloseButton,
      tabIndex,
      value
    } = this.props;

    return (
      <FormElement
        inputId={id}
        labelContent={label}
        hasHiddenLabel={hideLabel}
        isRequired={isRequired}
        isEditing={isEditing}
        className={formClassName}
        isHorizontal={isHorizontal}
        isStacked={isStacked}
        column={column}
      >
        <ComboboxGroupContainer hasSelection={hasSelection}>
          {addonPosition === 'start' && addon}
          <ComboboxContainer comboboxPosition={comboboxPosition}>
            <ComboboxFormElement
              isOpen={isOpen || this.state.focused}
              id={comboboxID}
            >
              <ComboboxInput
                id={id}
                className={inputContainerClassName}
                toggleFocus={this.toggleFocus}
                hasFocus={hasFocus}
                placeholder={placeholder}
                value={value}
                autocomplete={autocomplete}
                showCloseButton={showCloseButton}
                isLoading={isLoading}
                inputIconPosition={inputIconPosition}
                leftInputIcon={leftInputIcon}
                rightInputIcon={rightInputIcon}
                tabIndex={tabIndex}
                selectOnly={this.props.selectOnly}
                aria-controls={this.props['aria-controls']}
                aria-activedescendant={this.props['aria-activedescendant']}
                autoFocus={autoFocus}
                resultsType={resultsType}
                isDisabled={isDisabled}
              />
              {results}
            </ComboboxFormElement>
          </ComboboxContainer>
          {addonPosition === 'end' && addon}
        </ComboboxGroupContainer>
        {hasSelection && listboxOfSelections}
      </FormElement>
    );
  }
}

ComboboxGroup.defaultProps = {
  label: 'Relate To'
};

ComboboxGroup.propTypes = {
  addon: PropTypes.element.isRequired,
  addonPosition: PropTypes.oneOf(['start', 'end']).isRequired,
  autocomplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  comboboxPosition: PropTypes.oneOf(['start', 'end']).isRequired,
  results: PropTypes.element.isRequired,
  resultsType: PropTypes.oneOf(['listbox', 'dialog']).isRequired,
  formClassName: PropTypes.string,
  hasFocus: PropTypes.bool,
  hasSelection: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputIconPosition: PropTypes.oneOf([
    'left',
    'right',
    'left-right',
    'group-right'
  ]),
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  leftInputIcon: PropTypes.element,
  listboxOfSelections: PropTypes.element,
  placeholder: PropTypes.string,
  rightInputIcon: PropTypes.element,
  showCloseButton: PropTypes.bool,
  staticListbox: PropTypes.bool,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isRequired: PropTypes.bool,
  isEditing: PropTypes.bool,
  column: PropTypes.number,
  tabIndex: PropTypes.string,
  value: PropTypes.string
};
