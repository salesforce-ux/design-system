import React, { useState } from 'react';
import { ButtonGroupList } from '../button-groups/list/example';
import PropTypes from 'prop-types';
import ButtonIcon from '../button-icons/';
import SvgIcon from '../../shared/svg-icon';
import Combobox from '../combobox';
import {
  PlainFontOptions,
  PlainFontSizeOptions
} from '../combobox/snapshots.data';
import Listbox from '../combobox/listbox/';
import { Listbox as NewListbox } from '../combobox/listbox';
import { ComboboxGroup } from '../combobox/';
import { IconObjectSwitcher } from '../combobox/object-switcher/';
import { UtilityIcon } from '../icons/base/example';
import * as Snapshot from '../combobox/snapshots.data';
import { FormElement } from '../form-element';
import Input from '../input/';
import classNames from 'classnames';
import _ from '../../shared/helpers';

export const richTextEditorLabelId01 = 'rich-text-editor-unique-id-01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let RichTextEditor = props => (
  <FormElement
    labelId={props.labelId}
    labelContent={props.label}
    inlineMessage={props.inlineMessage}
    hasError={props.hasError}
    errorId={props.errorId}
    hasFauxLabel
  >
    <div
      className={classNames(
        'slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap',
        props.isToolbarOnly && 'slds-rich-text-editor_toolbar-only',
        props.className
      )}
    >
      {props.children}
    </div>
  </FormElement>
);

RichTextEditor.propTypes = {
  children: PropTypes.node.isRequired,
  errorId: PropTypes.string,
  hasError: PropTypes.bool,
  inlineMessage: PropTypes.string,
  labelContent: PropTypes.string,
  labelId: PropTypes.string
};

export let RteToolbar = props => (
  <div
    role="toolbar"
    aria-label={props.disabledLabel}
    className={classNames(
      'slds-rich-text-editor__toolbar slds-shrink-none',
      props.isToolbarOnly && 'slds-rich-text-editor__toolbar_detached',
      props.className
    )}
  >
    {props.children}
  </div>
);

export const RteFormula = props => {
  const [listboxId1] = useState(_.uniqueId('example-unique-id-'));
  const [listboxId2] = useState(_.uniqueId('example-unique-id-'));
  const [primaryComboboxId1] = useState(_.uniqueId('example-unique-id-'));
  const [primaryComboboxId2] = useState(_.uniqueId('example-unique-id-'));
  const [inputId] = useState(_.uniqueId('example-unique-id-'));

  return (
    <React.Fragment>
      <div className="slds-rich-text-editor__col slds-rich-text-editor__col_grow">
        <ComboboxGroup
          id={_.uniqueId('combobox-id-')}
          aria-controls={listboxId1}
          comboboxID={primaryComboboxId1}
          autocomplete
          results={
            <NewListbox
              id={listboxId1}
              snapshot={Snapshot.EntityOptions}
              type="entity"
              count={2}
              hasUniqueId
            />
          }
          resultsType="listbox"
          addon={
            <IconObjectSwitcher
              id={_.uniqueId('combobox-id-')}
              listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              value="Apex"
              label="Filter resources by:"
              filteredSymbol="apex"
              addonPosition="start"
              comboboxAriaControls={primaryComboboxId1}
            />
          }
          addonPosition="start"
          comboboxPosition="end"
          inputIconPosition="right"
          placeholder="Insert a resource"
          hideLabel
          label="Insert a Resource"
          rightInputIcon={
            <UtilityIcon
              symbol="search"
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
              assistiveText={false}
              title={false}
            />
          }
        />
      </div>
      <div className="slds-rich-text-editor__col slds-rich-text-editor__col_grow">
        <ComboboxGroup
          id={_.uniqueId('combobox-id-')}
          aria-controls={listboxId2}
          comboboxID={primaryComboboxId2}
          autocomplete
          results={
            <NewListbox
              id={listboxId2}
              snapshot={Snapshot.EntityOptions}
              type="entity"
              count={2}
              hasUniqueId
            />
          }
          resultsType="listbox"
          addon={
            <IconObjectSwitcher
              id={_.uniqueId('combobox-id-')}
              listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              value="Apex"
              label="Filter functions by:"
              filteredSymbol="apex"
              addonPosition="start"
              comboboxAriaControls={primaryComboboxId2}
            />
          }
          addonPosition="start"
          comboboxPosition="end"
          inputIconPosition="right"
          placeholder="Insert a function"
          hideLabel
          label="Insert a function"
          rightInputIcon={
            <UtilityIcon
              symbol="search"
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
              assistiveText={false}
              title={false}
            />
          }
        />
      </div>
      <div className="slds-rich-text-editor__col slds-rich-text-editor__col_grow">
        <FormElement
          hasHiddenLabel
          labelContent="Insert operator"
          inputId={inputId}
        >
          <Input id={inputId} placeholder="Insert operator" />
        </FormElement>
      </div>
      <div className="slds-rich-text-editor__col">
        <ButtonIcon
          symbol="help"
          assistiveText="Help"
          title="Help"
          size="medium"
        />
      </div>
    </React.Fragment>
  );
};

export const FontFamilyDropdown = ({ listboxData, id }) => (
  <Listbox
    id={id}
    snapshot={listboxData}
    type="plain"
    count={3}
    hideIcons
    className="slds-dropdown_fluid slds-dropdown_left"
  />
);

FontFamilyDropdown.propTypes = {
  listboxData: PropTypes.object.isRequired,
  id: PropTypes.string
};

const FontSizeDropdown = ({ listboxData, id }) => {
  return (
    <Listbox
      id={id}
      snapshot={listboxData}
      type="plain"
      count={6}
      hideIcons
      className="slds-dropdown_fluid slds-dropdown_left"
    />
  );
};

FontSizeDropdown.propTypes = {
  listboxData: PropTypes.object.isRequired,
  id: PropTypes.string
};

export let RteFormatFont = props => {
  const [comboboxId] = useState(_.uniqueId('example-unique-id-'));
  const [listboxId] = useState(_.uniqueId('example-unique-id-'));
  const [comboboxId2] = useState(_.uniqueId('example-unique-id-'));
  const [listboxId2] = useState(_.uniqueId('example-unique-id-'));

  return (
    <div
      className="slds-grid slds-rich-text-editor__spacing-wrapper"
      role="group"
      aria-label="Format font family &amp; size"
    >
      <div className="slds-rich-text-editor__select">
        <Combobox
          id={comboboxId}
          aria-controls={listboxId}
          label="Choose a Font"
          hideLabel
          inputContainerClassName="slds-rich-text-editor__select_x-small"
          inputIconPosition="right"
          rightInputIcon={
            <UtilityIcon
              symbol="down"
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
              assistiveText={false}
              title={false}
            />
          }
          results={
            <FontFamilyDropdown listboxData={PlainFontOptions} id={listboxId} />
          }
          resultsType="listbox"
          hasInteractions
          selectOnly
          value="Font"
        />
      </div>

      <div className="slds-rich-text-editor__select">
        <Combobox
          id={comboboxId2}
          aria-controls={listboxId2}
          label="Choose a Font Size"
          hideLabel
          inputContainerClassName="slds-rich-text-editor__select_xx-small"
          inputIconPosition="right"
          rightInputIcon={
            <UtilityIcon
              symbol="down"
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
              assistiveText={false}
              title={false}
            />
          }
          results={
            <FontSizeDropdown
              listboxData={PlainFontSizeOptions}
              id={listboxId2}
            />
          }
          resultsType="listbox"
          hasInteractions
          selectOnly
          value="Size"
          tabIndex="-1"
        />
      </div>
    </div>
  );
};

export let RteFormatText = props => (
  <ButtonGroupList aria-label="Format text">
    <li>
      <ButtonIcon
        className="slds-button_icon-border-filled"
        symbol="bold"
        tabIndex={props.tabIndexSetting}
        aria-describedby={props.hasTooltip ? 'bold' : null}
        disabled={props.disabledButtons}
        assistiveText="Bold"
      />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="italic"
        disabled={props.disabledButtons}
        assistiveText="Italic"
      />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="underline"
        disabled={props.disabledButtons}
        assistiveText="Underline"
      />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="strikethrough"
        disabled={props.disabledButtons}
        assistiveText="Strike Through"
      />
    </li>
  </ButtonGroupList>
);

export let RteFormatColor = props => (
  <ButtonGroupList aria-label="Format background & text color">
    <li>
      <button
        tabIndex="-1"
        disabled={props.disabledButtons}
        className="slds-button slds-button_icon slds-button_icon-more slds-button_icon-more-filled"
        aria-haspopup="true"
      >
        <SvgIcon
          className="slds-button__icon"
          sprite="utility"
          symbol="text_background_color"
        />
        <SvgIcon
          className="slds-button__icon slds-button__icon_x-small"
          sprite="utility"
          symbol="down"
        />
        <span className="slds-assistive-text">Background Color</span>
      </button>
    </li>

    <li>
      <button
        tabIndex="-1"
        disabled={props.disabledButtons}
        className="slds-button slds-button_icon slds-button_icon-more slds-button_icon-more-filled"
        aria-haspopup="true"
      >
        <SvgIcon
          className="slds-button__icon"
          sprite="utility"
          symbol="text_color"
        />
        <SvgIcon
          className="slds-button__icon slds-button__icon_x-small"
          sprite="utility"
          symbol="down"
        />
        <span className="slds-assistive-text">Text Color</span>
      </button>
    </li>
  </ButtonGroupList>
);

export let RteFormatBody = props => (
  <ButtonGroupList aria-label="Format body">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="richtextbulletedlist"
        disabled={props.disabledButtons}
        assistiveText="Bulleted List"
      />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="richtextnumberedlist"
        disabled={props.disabledButtons}
        assistiveText="Numbered List"
      />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="richtextindent"
        disabled={props.disabledButtons}
        assistiveText="Indent"
      />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="richtextoutdent"
        disabled={props.disabledButtons}
        assistiveText="Outdent"
      />
    </li>
  </ButtonGroupList>
);

export let RteAlignText = props => (
  <ButtonGroupList aria-label="Align text">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="left_align_text"
        disabled={props.disabledButtons}
        assistiveText="Left Align Text"
      />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="center_align_text"
        disabled={props.disabledButtons}
        assistiveText="Center Align Text"
      />
    </li>
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="right_align_text"
        disabled={props.disabledButtons}
        assistiveText="Right Align Text"
      />
    </li>
  </ButtonGroupList>
);

export let RteInsertContent = props => (
  <ButtonGroupList
    role={props.overflow ? 'presentation' : null}
    aria-label={!props.overflow ? 'Insert content' : null}
  >
    <li role={props.overflow ? 'presentation' : null}>
      <ButtonIcon
        role={props.overflow ? 'menuitem' : null}
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="emoji"
        disabled={props.disabledButtons}
        assistiveText="Add Emoji"
      />
    </li>
    <li role={props.overflow ? 'presentation' : null}>
      <ButtonIcon
        role={props.overflow ? 'menuitem' : null}
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="image"
        disabled={props.disabledButtons}
        assistiveText="Add Image"
      />
    </li>
    <li role={props.overflow ? 'presentation' : null}>
      <ButtonIcon
        role={props.overflow ? 'menuitem' : null}
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="link"
        disabled={props.disabledButtons}
        assistiveText="Add Link"
      />
    </li>
  </ButtonGroupList>
);

export let RteInsertUser = props => (
  <ButtonGroupList aria-label="Add user">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="adduser"
        disabled={props.disabledButtons}
        assistiveText="Add User"
      />
    </li>
  </ButtonGroupList>
);

export let RteClearFormatting = props => (
  <ButtonGroupList
    role={props.overflow ? 'presentation' : null}
    aria-label={!props.overflow ? 'Remove Formatting' : null}
  >
    <li role={props.overflow ? 'presentation' : null}>
      <ButtonIcon
        role={props.overflow ? 'menuitem' : null}
        tabIndex="-1"
        className="slds-button_icon-border-filled"
        symbol="remove_formatting"
        disabled={props.disabledButtons}
        assistiveText="Remove Formatting"
      />
    </li>
  </ButtonGroupList>
);

export let RteTextarea = props => (
  <div
    className={classNames(
      props.text
        ? 'slds-rich-text-editor__output'
        : 'slds-rich-text-editor__textarea',
      'slds-grid'
    )}
  >
    {props.text ? (
      <div
        aria-describedby={props['aria-describedby']}
        aria-label={!props.labelId ? 'Compose text' : null}
        aria-labelledby={props.labelId}
        contentEditable={!props.disabled ? 'true' : null}
        suppressContentEditableWarning
        className="slds-rich-text-area__content slds-grow"
      >
        {props.text}
      </div>
    ) : (
      <div
        aria-describedby={props['aria-describedby']}
        aria-label={!props.labelId ? props.label || 'Compose text' : null}
        aria-labelledby={props.labelId}
        contentEditable={!props.disabled ? 'true' : null}
        suppressContentEditableWarning
        className="slds-rich-text-area__content slds-text-color_weak slds-grow"
      >
        {props.placeholder}
      </div>
    )}
  </div>
);
