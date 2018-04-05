// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonGroupList } from '../../button-groups/list/example';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import { Tooltip } from '../../tooltips/base/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  Option
} from '../../combobox/base/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const listboxOptionId03 = 'listbox-option-unique-id-03';
const listboxOptionId04 = 'listbox-option-unique-id-04';
const richTextEditorLabelId01 = 'rich-text-editor-unique-id-01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Demo = props => (
  <div
    className={classNames('demo-only', props.className)}
    style={{ minHeight: '180px' }}
    {...props}
  >
    {props.children}
  </div>
);

export let RichTextEditor = props => (
  <div className="slds-form-element">
    {props.label && (
      <span id={props.labelId} className="slds-form-element__label">
        {props.label}
      </span>
    )}
    <div
      className={classNames(
        'slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap',
        props.className
      )}
    >
      {props.children}
    </div>
  </div>
);

export let RteToolbar = props => (
  <div
    role="toolbar"
    aria-label={props.disabledLabel}
    className={classNames(
      'slds-rich-text-editor__toolbar slds-shrink-none',
      props.className
    )}
  >
    {props.children}
  </div>
);

const FontFamilyDropdown = props => (
  <Listbox
    className="slds-dropdown slds-dropdown_fluid"
    vertical
    id="family-listbox"
  >
    <ListboxItem>
      <Option
        id={listboxOptionId01}
        title="Times New Roman"
        focused={props.focused}
        selected={props.selected}
        hideIcon
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId02} title="Arial" hideIcon />
    </ListboxItem>
  </Listbox>
);

const FontSizeDropdown = props => (
  <Listbox
    className="slds-dropdown slds-dropdown_fluid"
    vertical
    id="size-listbox"
  >
    <ListboxItem>
      <Option
        id={listboxOptionId03}
        title="12px"
        focused={props.focused}
        selected={props.selected}
        hideIcon
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId04} title="14px" hideIcon />
    </ListboxItem>
  </Listbox>
);

export let RteFormatFont = props => (
  <div
    className="slds-grid slds-rich-text-editor__spacing-wrapper"
    role="group"
    aria-label="Format font family &amp; size"
  >
    <div className="slds-rich-text-editor__select">
      <ComboboxContainer
        className="slds-size_x-small"
        id="font-family"
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Font"
        label="Choose a Font"
        hideLabel
        readonly
        aria-controls="family-listbox"
        listbox={<FontFamilyDropdown />}
      />
    </div>

    <div className="slds-rich-text-editor__select">
      <ComboboxContainer
        className="slds-size_xx-small"
        id="font-size"
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Size"
        label="Choose a Font Size"
        hideLabel
        readonly
        aria-controls="size-listbox"
        tabIndex="-1"
        listbox={<FontSizeDropdown />}
      />
    </div>
  </div>
);

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
        aria-label={!props.labelId ? 'Compose text' : null}
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

let TextInputExample = props => (
  <div>
    <h1>Heading - h1</h1>
    <p>
      Lorem ipsum dolor sit amet, <strong>strong</strong> adipisicing elit, sed
      do <em>emphasis</em> tempor incididunt ut <u>underlined</u> et dolore{' '}
      <s>strikethrough</s> aliqua. Ut <sub>subscript</sub> ad{' '}
      <sup>superscript</sup> veniam, <abbr>quis</abbr> nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in <a href="#">link</a> in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <h2>Heading - h2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod{' '}
      <a href="#">veryVeryLongWordWithHyperlinkExample</a> tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <ul>
      <li>
        Unordered list item
        <ul>
          <li>
            Nested Unordered list item
            <ol>
              <li>Nested Ordered list item</li>
              <li>Nested Ordered list item</li>
            </ol>
          </li>
          <li>
            Nested Unordered list item
            <ul>
              <li>Nested Unordered list item</li>
              <li>Nested Unordered list item</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Unordered list item
        <ol>
          <li>Nested Ordered list item</li>
          <li>Nested Ordered list item</li>
        </ol>
      </li>
      <li>Unordered list item</li>
    </ul>
    <h3>Heading - h3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <ol>
      <li>
        Ordered list item
        <ul>
          <li>
            Nested Unordered list item
            <ol>
              <li>Nested Ordered list item</li>
              <li>Nested Ordered list item</li>
            </ol>
          </li>
          <li>
            Nested Unordered list item
            <ul>
              <li>Nested Unordered list item</li>
              <li>Nested Unordered list item</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Ordered list item
        <ol>
          <li>
            Nested Ordered list item
            <ol>
              <li>
                Nested Ordered list item
                <ol>
                  <li>Nested Ordered list item</li>
                  <li>Nested Ordered list item</li>
                </ol>
              </li>
              <li>Nested Ordered list item</li>
            </ol>
          </li>
          <li>Nested Ordered list item</li>
        </ol>
      </li>
      <li>Ordered list item</li>
    </ol>
    <ul>
      <li>
        <div>List Item with div</div>
      </li>
      <li>
        <div>List Item with div</div>
      </li>
    </ul>
    <ol>
      <li>
        <div>List Item with div</div>
      </li>
      <li>
        <div>List Item with div</div>
      </li>
    </ol>
    <h4>Heading - h4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <dl>
      <dt>Description List - Term</dt>
      <dd>Description List - Description</dd>
      <dt>Description List - Term</dt>
      <dd>Description List - Description</dd>
    </dl>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <table>
      <thead>
        <tr>
          <th>Column</th>
          <th>Column</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row</td>
          <td>Row</td>
        </tr>
        <tr>
          <td>Row</td>
          <td>Row</td>
        </tr>
      </tbody>
    </table>
    <h5>Heading - h5</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <blockquote>
      Blockquote - incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation
    </blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <h6>Heading - h6</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,{' '}
      <a href="#">
        https://url.com/document/d/1dSOGKlCQtSG73NcSJB7qCJVyjE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/ed
      </a>{' '}
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
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
);

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
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
    )
  },
  {
    id: 'filled-out',
    label: 'Filled Out',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea text={<TextInputExample />} />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <Demo>
        <RichTextEditor className="slds-has-error">
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea
            placeholder="Compose text..."
            aria-describedby="rte-error-01"
          />
          <div
            id="rte-error-01"
            className="slds-form-element__help slds-p-around_small"
          >
            This field is required
          </div>
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
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
    )
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" hasTooltip />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
          <Tooltip
            className="slds-nubbin_top-left"
            id="bold"
            style={{ position: 'absolute', top: '48px', left: '2px' }}
          >
            Bold <kbd>cmd+b</kbd>
          </Tooltip>
        </RichTextEditor>
      </Demo>
    )
  }
];

export let examples = [
  {
    id: 'bottom-toolbar',
    label: 'Bottom toolbar',
    element: (
      <Demo>
        <RichTextEditor>
          <RteTextarea placeholder="Compose text..." />

          <RteToolbar className="slds-rich-text-editor__toolbar_bottom">
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'with-label',
    label: 'With a Label',
    element: (
      <Demo>
        <RichTextEditor
          label="Details and Steps to Reproduce"
          labelId={richTextEditorLabelId01}
        >
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea
            placeholder="Compose text..."
            labelId={richTextEditorLabelId01}
          />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'email',
    label: 'Email',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'toolbar-narrow',
    label: 'Toolbar Narrow',
    element: (
      <Demo style={{ width: '294px' }} className="slds-region_narrow">
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'feed',
    label: 'Feed',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteInsertUser />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Post to feed..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'note',
    label: 'Notes',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose Note..." />
        </RichTextEditor>
      </Demo>
    )
  }
];
