/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICHorizAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ListboxPill }
  from 'ui/components/pills/flavors/listbox-of-pill-options/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Avatar } from 'ui/components/avatar/flavors/base/index.react.example';
import { FormElement } from 'ui/components/form-layout/flavors/element/index.react.example';
import { Input } from 'ui/components/input/flavors/base/index.react.example';
import { Popover } from 'ui/components/popovers/flavors/base/index.react.example';
import { StandardIcon } from 'ui/components/icons/flavors/standard/index.react.example';
import { UtilityIcon } from 'ui/components/icons/flavors/utility/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';

// Variables
const listboxId = 'listbox-unique-id';
const listboxSelectionsId = 'listbox-selections-unique-id';
const comboboxId = 'combobox-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

{
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
}
export let Listbox = props =>
  <ul
    id={props.id || listboxId}
    className={classNames(
      'slds-listbox',
      {
        'slds-listbox--vertical': props.vertical,
        'slds-listbox--horizontal': props.horizontal,
        'slds-listbox--inline': props.inline
      },
      props.className
    )}
    role="listbox"
    aria-orientation={props.horizontal || props.inline ? 'horizontal' : null}
    aria-label={props['aria-label']}
  >
    {props.children}
  </ul>;

{
  /**
  * Generic list item within a listbox
  * @name ListboxItem
  * @prop {string}  className - A CSS class for the outer element
  */
}
export let ListboxItem = props =>
  <li
    role="presentation"
    className={classNames('slds-listbox__item', props.className)}
  >
    {props.children}
  </li>;

{
  /**
  * Generic listbox option within a listbox
  * @name ListboxItemOption
  * @prop {string}  className - A CSS class for the outer element
  */
}
export let ListboxOption = props =>
  <span
    id={props.id || 'listbox-option-unique-id'}
    className={classNames(
      'slds-media slds-listbox__option',
      {
        'slds-listbox__option--plain': props.type === 'plain',
        'slds-listbox__option--entity': props.type === 'entity'
      },
      props.className
    )}
    role="option"
  >
    {props.children}
  </span>;

{
  /**
  * Combobox container for text input, text input icons, listbox of options,
  * listbox of pill options and object switcher.
  * @name ComboboxContainer
  * @prop {string}  id
  * @prop {string}  className - A CSS class for the combobox element
  * @prop {string}  containerClassName - A CSS class for the parent element containing the combobox
  * @prop {string}  comboboxClassName
  * @prop {string}  formControlClassName
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
  * @prop {string}  tabIndex
  * @prop {string}  aria-controls
  */
}
export let ComboboxContainer = props =>
  <div className={classNames(
    'slds-combobox_container',
    {
      'slds-dropdown-trigger slds-dropdown-trigger_click': !props.staticListbox,
      'slds-is-open': props.isOpen
    },
    props.containerClassName
  )}>
    <div className={classNames(
      'slds-combobox',
      {
        'slds-has-inline-listbox': props.selectedOptionsInline,
        'slds-has-object-switcher': props.objectSwitcherInline
      },
      props.className
    )}>
      { props.inputIcon === 'left' && props.selectedOptionsInline ?
        <SvgIcon
          className="slds-icon slds-icon--x-small slds-combobox_container__icon"
          sprite="utility"
          symbol="search"
        />
      : null }
      { props.objectSwitcher ? <ObjectSwitcher /> : null }
      { props.selectedOptionsInline ? props.children : null }
      <FormElement
        className={ classNames('slds-combobox__form-element', props.comboboxClassName) }
        formControlClassName={ props.formControlClassName }
        label={ props.label || 'Search' }
        inputId={ props.id || comboboxId }
        inputIcon={ props.inputIcon }
        hideLabel={ true }
        aria-expanded={ props.isOpen ? 'true' : 'false' }
        aria-haspopup="listbox"
        role="combobox"
        listbox={ props.listbox }
      >
        { props.inputIcon === 'left' || props.inputIcon ==='both' && props.inputIconLeftSprite === 'standard' ?
          <StandardIcon
            containerClassName="slds-combobox__input-entity-icon"
            className="slds-icon--small"
            symbol={ props.inputIconLeftSymbol || 'account' }
            title={ props.inputIconLeftSymbol || 'account' }
            assistiveText={ props.inputIconLeftSymbol + ' ' + props.value || 'account ' + props.value }
          />
        : (props.inputIcon ==='left' || props.inputIcon === 'both' ?
          <SvgIcon
            className="slds-icon slds-icon--x-small slds-input__icon slds-input__icon--left"
            sprite="utility"
            symbol={props.inputIconLeftSymbol || 'search'}
          />
        : null)}
        <Input
          className="slds-combobox__input"
          id={ props.id || comboboxId }
          aria-activedescendant={ props['aria-activedescendant'] }
          aria-autocomplete={ props.autocomplete ? 'list' : null }
          aria-controls={ props['aria-controls'] || listboxId }
          autoComplete="off"
          role="textbox"
          type="text"
          placeholder={ props.autocomplete ? 'Search Salesforce' : 'Select an Option' }
          readOnly={ !props.autocomplete || props.value }
          value={ props.value }
          tabIndex={ props.tabIndex }
        />
        { props.inputIcon === 'right' ?
          <SvgIcon
            className="slds-icon slds-icon--x-small slds-input__icon slds-input__icon--right"
            sprite="utility"
            symbol={ props.inputIconRightSymbol || 'search' }
          />
        : null }
        { props.inputButtonIcon && props.inputIconRightSymbol ==='close' ?
          <ButtonIcon
            className="slds-button--icon slds-input__icon slds-input__icon--right"
            symbol="close"
            title="Remove selected option"
            assistiveText="Remove selected option"
          />
        : null }
      </FormElement>
    </div>
    { !props.selectedOptionsInline ? props.children : null }
  </div>;
{
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
}
export let EntityOption = props =>
  <ListboxOption
    type="entity"
    id={ props.id }
    className={classNames(
      {
        'slds-media--center': !props.entityMeta,
        'slds-listbox__option--has-meta': props.entityMeta,
        'slds-is-selected': props.selected,
        'slds-has-focus': props.focused
      },
      props.className
    )}
  >
    <span className="slds-media__figure">
      <StandardIcon
        className="slds-icon--small"
        symbol={ props.entityType || 'account' }
      />
    </span>
    <span className="slds-media__body">
      <span className="slds-listbox__option-text slds-listbox__option-text--entity">
        { props.typeahead ? props.children : props.entityTitle || 'Salesforce.com, Inc.' }
      </span>
      { props.entityMeta ?
        <span className="slds-listbox__option-meta slds-listbox__option-meta--entity">
        { _.upperFirst(props.entityType) || 'Account' } &bull; { _.upperFirst(props.entityLocation) || ' San Francisco' }
        </span>
      : null }
    </span>
  </ListboxOption>;

{
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
}
export let Option = props =>
  <ListboxOption
    type="plain"
    id={ props.id }
    className={ classNames(
      'slds-media--center',
      {
        'slds-is-selected': props.selected,
        'slds-has-focus': props.focused
      },
      props.className
    )}
  >
    { !props.hideIcon ?
      <span className="slds-media__figure">
        <SvgIcon
          className="slds-icon slds-icon--x-small slds-listbox__icon-selected"
          sprite="utility"
          symbol="check"
        />
      </span>
    : null }
    <span className="slds-media__body">
      <span className="slds-truncate" title={ props.title }>
        { props.selected ? <span className="slds-assistive-text">Current Selection:</span> : null } { props.title }
      </span>
    </span>
  </ListboxOption>;

{
  /**
  * Object switcher is a popup menu button, its visually displayed inlined with
  * its adjacent objects. A "polymorphic" combobox example uses this.
  * @name ObjectSwitcher
  * @prop {string}  className
  */
}
let ObjectSwitcher = props =>
  <div className={classNames(
    'slds-listbox--object-switcher slds-dropdown-trigger slds-dropdown-trigger--click',
    props.className
  )}>
    <button
      className="slds-button slds-button--icon"
      aria-haspopup="true"
      title="Select object to search in"
    >
      <span className="slds-icon_container slds-icon-standard-account" title="Accounts">
        <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="account" />
        <span className="slds-assistive-text">Searching in: Accounts</span>
      </span>
      <SvgIcon
        className="slds-button__icon"
        sprite="utility"
        symbol="down"
      />
    </button>
  </div>;
