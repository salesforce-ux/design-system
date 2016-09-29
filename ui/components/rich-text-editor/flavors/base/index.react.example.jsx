/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonGroupList } from 'ui/components/button-groups/flavors/list/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tooltip } from 'ui/components/tooltips/flavors/base/index.react.example';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Demo = props =>
  <div className="demo-only" style={{minHeight: '180px'}}>
    {props.children}
  </div>;

export let RichTextEditor = props =>
  <div {...props} className={className('slds-rich-text-editor slds-grid slds-grid--vertical slds-nowrap', props.className)}>
    {props.children}
  </div>;

export let RteToolbar = props =>
  <div role="toolbar" aria-label={props.disabledLabel} className="slds-rich-text-editor__toolbar slds-is-relative slds-shrink-none slds-p-around--x-small slds-grid slds-theme--shade">
    {props.children}
  </div>;

export let RteFormatFont = props =>
  <div className="slds-button-group" role="group" aria-label="Format font family & size">
    <div className="slds-button-group">
      <span className="slds-assistive-text" id="choose-font">Choose a Font</span>

      <div className="slds-button-group slds-picklist slds-picklist--fluid slds-shrink-none">
        <button aria-describedby="choose-font" tabIndex="0" aria-haspopup="true" disabled={ props.disabledButtons } className="slds-button slds-button--neutral slds-picklist__label slds-picklist__label--small">
          Font <SvgIcon className="slds-icon slds-icon--small" sprite="utility" symbol="down" />
        </button>
      </div>
    </div>

    <div className="slds-button-group">
      <span className="slds-assistive-text" id="choose-size">Choose a Font Size</span>

      <div className="slds-button-group slds-picklist slds-picklist--fluid slds-shrink-none">
        <button aria-describedby="choose-size" aria-haspopup="true" tabIndex="-1" disabled={ props.disabledButtons } className="slds-button slds-button--neutral slds-picklist__label slds-picklist__label--small">
          14 <SvgIcon className="slds-icon slds-icon--small" sprite="utility" symbol="down" />
        </button>
      </div>
    </div>
  </div>;

export let RteFormatText = props =>
  <ButtonGroupList aria-label="Format text">
    <li>
      <ButtonIcon
        className="slds-button--icon-border-filled"
        symbol="bold"
        tabIndex={ props.tabIndexSetting }
        aria-describedby="bold"
        disabled={ props.disabledButtons }
        assistiveText="Bold" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="italic"
        aria-describedby="italic"
        disabled={ props.disabledButtons }
        assistiveText="Italic" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="underline"
        aria-describedby="underline"
        disabled={ props.disabledButtons }
        assistiveText="Underline" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="strikethrough"
        aria-describedby="strikethrough"
        disabled={ props.disabledButtons }
        assistiveText="Strike Through" />
    </li>
  </ButtonGroupList>;

export let RteFormatColor = props =>
  <ButtonGroupList aria-label="Format background & text color">
    <li>
      <button aria-describedby="backgroundcolor" tabIndex="-1" disabled={ props.disabledButtons } className="slds-button slds-button--icon-more slds-button--icon-more-filled" aria-haspopup="true">
        <SvgIcon className="slds-button__icon" sprite="utility" symbol="text_background_color" />

        <SvgIcon className="slds-button__icon slds-button__icon--x-small" sprite="utility" symbol="down" />

        <span className="slds-assistive-text">Background Color</span>
      </button>
    </li>

    <li>
      <button aria-describedby="textcolor" tabIndex="-1" disabled={ props.disabledButtons } className="slds-button slds-button--icon-more slds-button--icon-more-filled" aria-haspopup="true">
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
        aria-describedby="richtextbulletedlist"
        className="slds-button--icon-border-filled"
        symbol="richtextbulletedlist"
        disabled={ props.disabledButtons }
        assistiveText="Bulleted List" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="richtextnumberedlist"
        className="slds-button--icon-border-filled"
        symbol="richtextnumberedlist"
        disabled={ props.disabledButtons }
        assistiveText="Numbered List" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="richtextindent"
        className="slds-button--icon-border-filled"
        symbol="richtextindent"
        disabled={ props.disabledButtons }
        assistiveText="Indent" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="richtextoutdent"
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
        aria-describedby="left_align_text"
        className="slds-button--icon-border-filled"
        symbol="left_align_text"
        disabled={ props.disabledButtons }
        assistiveText="Left Align Text" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="center_align_text"
        className="slds-button--icon-border-filled"
        symbol="center_align_text"
        disabled={ props.disabledButtons }
        assistiveText="Center Align Text" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="right_align_text"
        className="slds-button--icon-border-filled"
        symbol="right_align_text"
        disabled={ props.disabledButtons }
        assistiveText="Right Align Text" />
    </li>
  </ButtonGroupList>;

export let RteInsertContent = props =>
  <ButtonGroupList aria-label="Insert content" {...props}>
    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="emoji"
        className="slds-button--icon-border-filled"
        symbol="emoji"
        disabled={ props.disabledButtons }
        assistiveText="Add Emoji" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="image"
        className="slds-button--icon-border-filled"
        symbol="image"
        disabled={ props.disabledButtons }
        assistiveText="Add Image" />
    </li>

    <li>
      <ButtonIcon
        tabIndex="-1"
        aria-describedby="link"
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
        aria-describedby="adduser"
        className="slds-button--icon-border-filled"
        symbol="adduser"
        disabled={ props.disabledButtons }
        assistiveText="Add User" />
    </li>
  </ButtonGroupList>;

export let RteClearFormatting = props =>
  <ButtonGroupList aria-label="Remove Formatting">
    <li>
      <ButtonIcon
        tabIndex="-1"
        className="slds-button--icon-border-filled"
        symbol="remove_formatting"
        disabled={ props.disabledButtons }
        assistiveText="Remove Formatting" />
    </li>
  </ButtonGroupList>;

export let RteOverflow = props =>
  <div className="slds-m-left--xx-small slds-is-relative">
    <ButtonGroupList>
      <li>
        <ButtonIcon
          aria-haspopup="true"
          tabIndex="-1"
          className="slds-button--icon-border-filled"
          symbol="down"
          disabled={ props.disabledButtons }
          assistiveText="More Actions" />
      </li>
    </ButtonGroupList>

    <div role="menu" className="slds-button-group-list slds-box slds-box--x-small slds-theme--shade" style={{position: 'absolute', top: '36', right: '0'}}>
      <RteInsertContent role="presentation" />

      <RteClearFormatting role="presentation" />
    </div>
  </div>;

export let RteTextarea = props =>
  <div className="slds-form-element">
    <label className="slds-assistive-text" htmlFor="composer-text-input-1">Compose text</label>

    <div className="slds-form-element__control">
      <textarea {...props} id="composer-text-input-1" className="slds-assistive-text" />

      <div tabIndex="0" {...props} className="slds-textarea slds-p-around--medium slds-text-longform slds-grow">
        { props.text ?
          <div contentEditable>{props.text}</div> :

          <div contentEditable className="slds-text-color--weak">
            {props.placeholder}
          </div>
        }
      </div>
    </div>
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

          <RteTextarea placeholder="Compose text..." />
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
            <RteFormatText tabIndexSetting="0" />

            <RteFormatBody />

            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose text..." />

          <Tooltip className="slds-nubbin--top-left" id="bold" style={{position: 'absolute', top: '48px', left: '2px'}}>
            Bold <kbd>cmd+b</kbd>
          </Tooltip>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'overflow',
    label: 'Overflow',
    element:
      <Demo>
      <RichTextEditor>
        <RteToolbar>
          <RteFormatText tabIndexSetting="0" />

          <RteFormatBody />

          <RteOverflow />
        </RteToolbar>

        <RteTextarea placeholder="Compose text..." />
      </RichTextEditor>
    </Demo>
  }
];
