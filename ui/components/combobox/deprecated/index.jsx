// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Input from '../../input/';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';
import { UtilityIcon } from '../../icons/base/example';
import { Spinner } from '../../spinners/base/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

/**
 * Object switcher is a popup menu button, its visually displayed inlined with
 * its adjacent objects. A "polymorphic" combobox example uses this.
 * @name DeprecatedObjectSwitcher
 * @prop {string}  className
 */
const DeprecatedObjectSwitcher = props => {
  const { className } = props;
  return (
    <div
      className={classNames(
        'slds-listbox_object-switcher slds-dropdown-trigger slds-dropdown-trigger_click',
        className
      )}
    >
      <button
        className="slds-button slds-button_icon"
        aria-haspopup="true"
        title="Select object to search in"
      >
        <span
          className="slds-icon_container slds-icon-standard-account"
          title="Accounts"
        >
          <SvgIcon
            className="slds-icon slds-icon_small"
            sprite="standard"
            symbol="account"
          />
          <span className="slds-assistive-text">Searching in: Accounts</span>
        </span>
        <SvgIcon
          className="slds-button__icon slds-button__icon_x-small slds-m-left_xxx-small"
          sprite="utility"
          symbol="down"
        />
      </button>
    </div>
  );
};

/**
 * Combobox input element. This is deprecated since updated a11y guidance is to
 * have select-only comboboxes replace the input with a button
 * @name DeprecatedComboboxInputElement
 * @prop {boolean} aria-activedescendant
 * @prop {string}  aria-controls
 * @prop {boolean} autocomplete
 * @prop {boolean} autofocus
 * @prop {string}  className - A CSS class for the element containing the input
 * @prop {string}  comboboxId
 * @prop {string}  id
 * @prop {boolean} isDisabled
 * @prop {boolean} isOpen
 * @prop {string}  placeholder
 * @prop {boolean} readonly
 * @prop {string}  resultsType
 * @prop {string}  tabIndex
 * @prop {function}  toggleFocus
 * @prop {string}  value
 */
export const DeprecatedComboboxInputElement = ({
  autocomplete,
  autoFocus,
  comboboxId,
  id,
  isDisabled,
  isOpen,
  hasFocus,
  placeholder,
  readonly,
  resultsType,
  tabIndex,
  toggleFocus,
  value,
  ...props
}) => {
  return (
    <Input
      className={classNames(
        'slds-combobox__input',
        hasFocus && 'slds-has-focus',
        value && 'slds-combobox__input-value'
      )}
      id={id || comboboxId}
      aria-activedescendant={props['aria-activedescendant']}
      aria-autocomplete={autocomplete ? 'list' : null}
      aria-controls={
        props.listbox
          ? props['aria-controls'] || props.listboxId
          : props['aria-controls'] || 'please-provide-listbox-id-here'
      }
      autocomplete="off"
      role="combobox"
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-haspopup={resultsType}
      type="text"
      placeholder={
        !placeholder
          ? autocomplete
            ? 'Search...'
            : 'Select an Option…'
          : placeholder
      }
      readOnly={readonly}
      defaultValue={value}
      tabIndex={tabIndex}
      onFocus={e => toggleFocus(e)}
      onBlur={e => toggleFocus(e)}
      autoFocus={autoFocus}
      disabled={isDisabled}
    />
  );
};

/**
 * Combobox container for text input, text input icons, listbox of options,
 * listbox of pill options and object switcher.
 * @name DeprecatedCombobox
 * @prop {string}  id
 * @prop {string}  className - A CSS class for the element containing the input
 * @prop {string}  containerClassName - A CSS class for the element containing the input and listbox
 * @prop {string}  formClassName - A CSS class for the form element
 * @prop {string}  formControlClassName - A CSS class for the form element control
 * @prop {boolean} isOpen
 * @prop {boolean} selectedOptionsInline - Specifies that the listbox of pill options are displayed inlined to its adjacent elements
 * @prop {boolean} objectSwitcherInline - Specifies that the object switcher is displayed inlined to its adjacent elements
 * @prop {string}  inputIcon - Specifies the position of an input icon
 * @prop {string}  inputIconLeftSprite
 * @prop {string}  inputIconLeftSymbol
 * @prop {string}  inputIconRightSymbol
 * @prop {boolean} inputButtonIcon
 * @prop {string}  value
 * @prop {boolean} autocomplete
 * @prop {boolean} readonly
 * @prop {string}  tabIndex
 * @prop {string}  aria-controls
 * @prop {boolean} hideLabel
 * @prop {string}  placeholder
 */
export const DeprecatedCombobox = props => {
  const comboboxId = _.uniqueId('combobox-unique-id-');
  return (
    <div className={classNames('slds-form-element', props.formClassName)}>
      <label
        className={classNames('slds-form-element__label', {
          'slds-assistive-text': props.hideLabel
        })}
        htmlFor={props.id || comboboxId}
      >
        {props.label || 'Search'}
      </label>
      {/* Form Element Control */}
      <div
        className={classNames(
          'slds-form-element__control',
          props.formControlClassName
        )}
      >
        {/* Combobox container */}
        <div
          className={classNames(
            'slds-combobox_container',
            {
              'slds-has-inline-listbox': props.selectedOptionsInline,
              'slds-has-object-switcher': props.objectSwitcherInline
            },
            props.containerClassName
          )}
        >
          {/* Search icon before the listbox of selected items */}
          {props.inputIcon === 'left' && props.selectedOptionsInline ? (
            <UtilityIcon
              assistiveText={false}
              className="slds-icon slds-icon_x-small slds-combobox_container__icon"
              sprite="utility"
              symbol="search"
              title={false}
            />
          ) : null}
          {/* Show object switcher here */}
          {props.objectSwitcher ? <DeprecatedObjectSwitcher /> : null}
          {/* If inline listbox - Show selected options here */}
          {props.selectedOptionsInline ? props.children : null}
          {/* Combobox - role=combobox */}
          <div
            className={classNames(
              'slds-combobox',
              {
                'slds-dropdown-trigger slds-dropdown-trigger_click': !props.staticListbox,
                'slds-is-open': props.isOpen
              },
              props.className
            )}
          >
            <div
              className={classNames(
                'slds-combobox__form-element',
                {
                  'slds-input-has-icon slds-input-has-icon_left':
                    props.inputIcon === 'left',
                  'slds-input-has-icon slds-input-has-icon_right':
                    props.inputIcon === 'right',
                  'slds-input-has-icon slds-input-has-icon_left-right':
                    props.inputIcon === 'both'
                },
                props.inputContainerClassName
              )}
              role="none"
            >
              {/*
                If inputIcon is on both sides of input AND a standard sprite,
                Makes autocomplete single selection look like a pill
              */}
              {props.inputIcon === 'both' &&
              props.inputIconLeftSprite === 'standard' ? (
                <StandardIcon
                  containerClassName="slds-combobox__input-entity-icon"
                  className="slds-icon_small"
                  symbol={props.inputIconLeftSymbol || 'account'}
                  title={props.inputIconLeftSymbol || 'account'}
                  assistiveText={
                    props.inputIconLeftSymbol + ' ' + props.value ||
                    'account ' + props.value
                  }
                />
              ) : props.inputIcon === 'left' || props.inputIcon === 'both' ? (
                <UtilityIcon
                  assistiveText={
                    props.inputIconLeftSymbol === 'search'
                      ? false
                      : props.inputIconLeftAssistiveText
                  }
                  containerClassName="slds-input__icon slds-input__icon_left"
                  className="slds-icon slds-icon_x-small slds-icon-text-default"
                  symbol={props.inputIconLeftSymbol || 'search'}
                  title={
                    props.inputIconLeftSymbol === 'search'
                      ? false
                      : props.inputIconLeftAssistiveText
                  }
                />
              ) : null}
              {/* Input */}
              <DeprecatedComboboxInputElement
                {...props}
                {...{ comboboxId }}
                {...props.listbox && { resultsType: 'listbox' }}
              />
              {/* If inputIcon is right, show icon here  */}
              {props.inputIcon === 'right' && props.inputButtonIcon !== true ? (
                <UtilityIcon
                  title={
                    props.inputIconRightSymbol === 'search'
                      ? false
                      : props.inputIconRightAssistiveText
                  }
                  containerClassName="slds-input__icon slds-input__icon_right"
                  className="slds-icon slds-icon_x-small slds-icon-text-default"
                  symbol={props.inputIconRightSymbol || 'search'}
                  assistiveText={
                    props.inputIconRightSymbol === 'search'
                      ? false
                      : props.inputIconRightAssistiveText
                  }
                />
              ) : null}
              {/* If loading, show buttonIcon and spinner here */}
              {props.loading ? (
                <div className="slds-input__icon-group slds-input__icon-group_right">
                  <Spinner className="slds-spinner_brand slds-spinner_x-small slds-input__spinner" />
                  <ButtonIcon
                    className="slds-input__icon slds-input__icon_right"
                    symbol={props.inputIconRightSymbol || 'close'}
                    title="Remove selected option"
                    assistiveText="Remove selected option"
                  />
                </div>
              ) : null}
              {/* If close button, show buttonIcon here */}
              {props.inputButtonIcon &&
              props.inputIconRightSymbol === 'close' ? (
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="close"
                  title="Remove selected option"
                  assistiveText="Remove selected option"
                />
              ) : null}
            </div>
            {/* Pass listbox into combobox here */}
            {props.listbox}
          </div>
        </div>
        {/* If NOT inline listbox - Show selected options here */}
        {!props.selectedOptionsInline ? props.children : null}
      </div>
    </div>
  );
};

/**
 * Generic Listbox container
 * @name Listbox
 * @prop {string}  id - Unique ID of listbox, targetted by the combobox container
 * @prop {string}  className - A CSS class for the outer element
 * @prop {boolean} vertical - Vertical Orientation
 * @prop {boolean} horizontal - Horizontal Orientation
 * @prop {boolean} inline - Horizontal Orientation but inlined with adjacent elements
 * @prop {string}  aria-label -
 */
export let DeprecatedListbox = props => (
  <div
    id={props.id || 'listbox-unique-id'}
    role="listbox"
    aria-orientation={props.horizontal || props.inline ? 'horizontal' : null}
    className={props.listboxClassName}
  >
    <ul
      className={classNames(
        'slds-listbox',
        {
          'slds-listbox_vertical': props.vertical,
          'slds-listbox_horizontal': props.horizontal,
          'slds-listbox_inline': props.inline
        },
        props.className
      )}
      role={props['aria-label'] ? 'group' : 'presentation'}
      aria-label={props['aria-label']}
    >
      {props.children}
    </ul>
  </div>
);

/**
 * Generic list item within a listbox
 * @name ListboxItem
 * @prop {string}  className - A CSS class for the outer element
 */
export let DeprecatedListboxItem = props => (
  <li
    role="presentation"
    className={classNames('slds-listbox__item', props.className)}
  >
    {props.children}
  </li>
);

/**
 * Generic listbox option within a listbox
 * @name ListboxItemOption
 * @prop {string}  className - A CSS class for the outer element
 */
export let DeprecatedListboxOption = props => {
  const uniqueId = _.uniqueId('listbox-option-unique-id-');

  return (
    <div
      id={props.id || uniqueId}
      className={classNames(
        'slds-media slds-listbox__option',
        {
          'slds-listbox__option_plain': props.type === 'plain',
          'slds-listbox__option_entity': props.type === 'entity'
        },
        props.className
      )}
      role="option"
      tabIndex={props.tabIndex}
    >
      {props.children}
    </div>
  );
};

/**
 * An entity option is a type of listbox option, it contains a standard icon,
 * a result name and an optional second line of text that sits below the result name
 * @name EntityOption
 * @prop {string}  id
 * @prop {string}  className
 * @prop {boolean} selected
 * @prop {boolean} focused
 * @prop {boolean} entityMeta - A secondary line of additional information below the result name
 * @prop {string}  entityType - Type of entity, such as account or lead
 * @prop {string}  entityTitle - Name of result
 * @prop {string}  entityLocation - Physical location of entity, such as 'San Francisco'
 */
export let DeprecatedEntityOption = props => (
  <DeprecatedListboxOption
    type="entity"
    id={props.id}
    tabIndex={props.tabIndex}
    className={classNames(
      {
        'slds-media_center': !props.entityMeta,
        'slds-listbox__option_has-meta': props.entityMeta,
        'slds-is-selected': props.selected,
        'slds-has-focus': props.focused
      },
      props.className
    )}
  >
    <span className="slds-media__figure">
      <StandardIcon
        className="slds-icon_small"
        symbol={props.entityType || 'account'}
        title={false}
        assistiveText={false}
      />
    </span>
    <span className="slds-media__body">
      <span className="slds-listbox__option-text slds-listbox__option-text_entity">
        {props.typeahead
          ? props.children
          : props.entityTitle || 'Salesforce.com, Inc.'}
      </span>
      {props.entityMeta ? (
        <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
          {_.upperFirst(props.entityType) || 'Account'} &bull;{' '}
          {_.upperFirst(props.entityLocation) || ' San Francisco'}
        </span>
      ) : null}
    </span>
  </DeprecatedListboxOption>
);

/**
 * A plain option is a type of listbox option, it contains a string of text and
 * a tick mark to show an option has been selected
 * @name Option
 * @prop {string}  id
 * @prop {string}  className
 * @prop {boolean} selected
 * @prop {boolean} focused
 * @prop {string}  title
 */
export let DeprecatedOption = props => (
  <DeprecatedListboxOption
    type="plain"
    id={props.id}
    className={classNames(
      'slds-media_small slds-media_center',
      {
        'slds-is-selected': props.selected,
        'slds-has-focus': props.focused
      },
      props.className
    )}
  >
    {!props.hideIcon ? (
      <span className="slds-media__figure">
        <SvgIcon
          className="slds-icon slds-icon_x-small slds-listbox__icon-selected"
          sprite="utility"
          symbol="check"
        />
      </span>
    ) : null}
    <span className="slds-media__body">
      <span className="slds-truncate" title={props.title}>
        {props.selected ? (
          <span className="slds-assistive-text">Current Selection:</span>
        ) : null}{' '}
        {props.title}
      </span>
    </span>
  </DeprecatedListboxOption>
);
