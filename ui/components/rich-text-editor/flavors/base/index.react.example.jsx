// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonGroupList } from 'ui/components/button-groups/flavors/list/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tooltip } from 'ui/components/tooltips/flavors/base/index.react.example';
import { ComboboxContainer, Listbox, ListboxItem, Option } from 'ui/components/combobox/flavors/base/index.react.example';
import classNames from 'classnames';
import _ from 'lodash';

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const listboxOptionId03 = 'listbox-option-unique-id-03';
const listboxOptionId04 = 'listbox-option-unique-id-04';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Demo = props =>
  <div className="demo-only" style={{minHeight: '180px'}}>
    {props.children}
  </div>;

export let RichTextEditor = props =>
  <div {...props} className={classNames('slds-rich-text-editor slds-grid slds-grid--vertical slds-nowrap', props.className)}>
    {props.children}
  </div>;

export let RteToolbar = props =>
  <div role="toolbar" aria-label={props.disabledLabel} className={classNames('slds-rich-text-editor__toolbar slds-shrink-none', props.className)}>
    {props.children}
  </div>;

const FontFamilyDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical={ true } listboxId="family-listbox">
    <ListboxItem>
      <Option
        id={ listboxOptionId01 }
        title="Times New Roman"
        focused={ props.focused }
        selected={ props.selected }
        hideIcon={true}
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={ listboxOptionId02 } title="Arial" hideIcon={true} />
    </ListboxItem>
  </Listbox>;

const FontSizeDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical={ true } id="family-listbox">
    <ListboxItem>
      <Option
        id={ listboxOptionId03 }
        title="12px"
        focused={ props.focused }
        selected={ props.selected }
        hideIcon={true}
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={ listboxOptionId04 } title="14px" hideIcon={true} />
    </ListboxItem>
  </Listbox>;

export let RteFormatFont = props =>
  <div className="slds-grid" role="group" aria-label="Format font family &amp; size">
    <div className="slds-rich-text-editor__select">
      <ComboboxContainer
        className="slds-size--x-small"
        id="font-family"
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Font"
        label="Choose a Font"
        aria-controls="family-listbox"
        listbox={ <FontFamilyDropdown /> }
      />
    </div>

    <div className="slds-rich-text-editor__select">
      <ComboboxContainer
        className="slds-size--xx-small"
        id="font-size"
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Size"
        label="Choose a Font Size"
        aria-controls="size-listbox"
        tabIndex="-1"
        listbox={ <FontSizeDropdown /> }
      />
    </div>
  </div>;

export let RteFormatText = props =>
  <ButtonGroupList aria-label="Format text">
    <li>
      <ButtonIcon
        className="slds-button--icon-border-filled"
        symbol="bold"
        tabIndex={ props.tabIndexSetting }
        aria-describedby={ props.hasTooltip ? 'bold' : null }
        disabled={ props.disabledButtons }
        assistiveText="Bold" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="italic"
        disabled={ props.disabledButtons }
        assistiveText="Italic" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="underline"
        disabled={ props.disabledButtons }
        assistiveText="Underline" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="strikethrough"
        disabled={ props.disabledButtons }
        assistiveText="Strike Through" />
    </li>
  </ButtonGroupList>;

export let RteFormatColor = props =>
  <ButtonGroupList aria-label="Format background & text color">
    <li>
      <button tabIndex="-1" disabled={ props.disabledButtons } className="slds-button slds-button--icon-more slds-button--icon-more-filled" aria-haspopup="true">
        <SvgIcon className="slds-button__icon" sprite="utility" symbol="text_background_color" />
        <SvgIcon className="slds-button__icon slds-button__icon--x-small" sprite="utility" symbol="down" />
        <span className="slds-assistive-text">Background Color</span>
      </button>
    </li>

    <li>
      <button tabIndex="-1" disabled={ props.disabledButtons } className="slds-button slds-button--icon-more slds-button--icon-more-filled" aria-haspopup="true">
        <SvgIcon className="slds-button__icon" sprite="utility" symbol="text_color" />
        <SvgIcon className="slds-button__icon slds-button__icon--x-small" sprite="utility" symbol="down" />
        <span className="slds-assistive-text">Text Color</span>
      </button>
    </li>
  </ButtonGroupList>;

export let RteFormatBody = props =>
  <ButtonGroupList aria-label="Format body">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="richtextbulletedlist"
        disabled={ props.disabledButtons }
        assistiveText="Bulleted List" />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="richtextnumberedlist"
        disabled={ props.disabledButtons }
        assistiveText="Numbered List" />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="richtextindent"
        disabled={ props.disabledButtons }
        assistiveText="Indent" />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="richtextoutdent"
        disabled={ props.disabledButtons }
        assistiveText="Outdent" />
    </li>
  </ButtonGroupList>;

export let RteAlignText = props =>
  <ButtonGroupList aria-label="Align text">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="left_align_text"
        disabled={ props.disabledButtons }
        assistiveText="Left Align Text" />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="center_align_text"
        disabled={ props.disabledButtons }
        assistiveText="Center Align Text" />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="right_align_text"
        disabled={ props.disabledButtons }
        assistiveText="Right Align Text" />
    </li>
  </ButtonGroupList>;

export let RteInsertContent = props =>
  <ButtonGroupList
    role={ props.overflow ? 'presentation' : null }
    aria-label={ !props.overflow ? 'Insert content' : null}>
    <li role={ props.overflow ? 'presentation' : null }>
      <ButtonIcon
        role={ props.overflow ? 'menuitem' : null }
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="emoji"
        disabled={ props.disabledButtons }
        assistiveText="Add Emoji" />
    </li>
    <li role={ props.overflow ? 'presentation' : null }>
      <ButtonIcon
        role={ props.overflow ? 'menuitem' : null }
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="image"
        disabled={ props.disabledButtons }
        assistiveText="Add Image" />
    </li>
    <li role={ props.overflow ? 'presentation' : null }>
      <ButtonIcon
        role={ props.overflow ? 'menuitem' : null }
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="link"
        disabled={ props.disabledButtons }
        assistiveText="Add Link" />
    </li>
  </ButtonGroupList>;

export let RteInsertUser = props =>
  <ButtonGroupList aria-label="Add user">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="adduser"
        disabled={ props.disabledButtons }
        assistiveText="Add User" />
    </li>
  </ButtonGroupList>;

export let RteClearFormatting = props =>
  <ButtonGroupList
    role={ props.overflow ? 'presentation' : null }
    aria-label={ !props.overflow ? 'Remove Formatting' : null}>
    <li role={ props.overflow ? 'presentation' : null }>
      <ButtonIcon
        role={ props.overflow ? 'menuitem' : null }
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="remove_formatting"
        disabled={ props.disabledButtons }
        assistiveText="Remove Formatting" />
    </li>
  </ButtonGroupList>;

export let RteTextarea = props =>
  <div className="slds-rich-text-editor__textarea slds-text-longform slds-grid">
      { props.text ?
        <div aria-describedby={props['aria-describedby']} aria-label="Compose text" contentEditable={ !props.disabled ? 'true' : null } suppressContentEditableWarning className="slds-rich-text-area__content slds-grow">{props.text}</div> :
        <div aria-describedby={props['aria-describedby']} aria-label="Compose text" contentEditable={ !props.disabled ? 'true' : null } suppressContentEditableWarning className="slds-rich-text-area__content slds-text-color--weak slds-grow">
          {props.placeholder}
        </div>
      }
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'focused',
    label: 'Focused',
    element:
      <Demo>
        <RichTextEditor className="slds-has-focus">
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'filled-out',
    label: 'Filled Out',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Demo>
        <RichTextEditor className="slds-has-error">
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." aria-describedby="rte-error-01" />
          <div id="rte-error-01" className="slds-form-element__help slds-p-around--small">This field is required</div>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar disabledButtons disabledLabel="disabled">
            <RteFormatText tabIndexSetting="0" disabledButtons />
            <RteFormatBody disabledButtons />
            <RteClearFormatting disabledButtons />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." disabled />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" hasTooltip />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
          <Tooltip className="slds-nubbin--top-left" id="bold" style={{position: 'absolute', top: '48px', left: '2px'}}>
            Bold <kbd>cmd+b</kbd>
          </Tooltip>
        </RichTextEditor>
      </Demo>
  }
];
