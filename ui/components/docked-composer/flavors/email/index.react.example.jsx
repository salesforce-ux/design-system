/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Button = require('ui/components/buttons/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const MediaObject = require('ui/components/media-objects/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const Lorem = require('react-lorem-component');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const headerIcon = (
  <span className={pf('icon__container icon-standard-email')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
    <span className={pf('assistive-text')}>Email Icon</span>
  </span>
);

module.exports = (
  <div className='demo-only'>
    {/*<div className={pf('docked-container')}>*/}

      <div className={pf('docked-composer grid grid--vertical nowrap is-open')}>

        {/* Composer Header */}
        <div className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
          <MediaObject figureLeft={headerIcon} flavor="center">
            New Email
          </MediaObject>
          <div className={pf('docked-composer__actions')}>
            <ButtonIcon
              flavor="icon-bare"
              iconFlavor="inverse"
              sprite="utility"
              symbol="minimize_window"
              assistiveText="Minimize window" />
            <ButtonIcon
              flavor="icon-bare"
              iconFlavor="inverse"
              sprite="utility"
              symbol="expand_alt"
              assistiveText="Expand Composer" />
            <ButtonIcon
              flavor="icon-bare"
              iconFlavor="inverse"
              sprite="utility"
              symbol="close"
              assistiveText="Close" />
          </div>
        </div>

        {/* Composer Body */}
        <div className={pf('docked-composer__body docked-composer__body--email col grid grid--vertical nowrap size--1-of-1')}>
          <div className={pf('grid grid--align-spread')}>
            <div className={pf('grid grow p-horizontal--small')}>
              <label className={pf('size--1-of-12 align-middle')} htmlFor="emailComposerTo">To</label>
              <input className={pf('input--bare input--height hide')} id="emailComposerTo" type="text" />
              <div className={pf('pill-container show')}>
                <span className={pf('pill')}>
                  <a href="#" className={pf('pill__label')}>
                    <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
                    Lei Chan
                  </a>
                  <ButtonIcon flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
                </span>
              </div>
            </div>
            <div className={pf('grid shrink-none p-horizontal--small')}>
              <Button>Cc</Button>
              <Button>Bcc</Button>
            </div>
          </div>
          <div className={pf('grid p-horizontal--small hide')}>
            <label className={pf('size--1-of-12 align-middle')} htmlFor="emailComposerCc">Cc</label>
            <input className={pf('input--bare input--height show')} id="emailComposerCc" type="text" />
            <div className={pf('pill-container hide')}></div>
          </div>
          <div className={pf('grid p-horizontal--small hide')}>
            <label className={pf('size--1-of-12 align-middle')} htmlFor="emailComposerBcc">Bcc</label>
            <input className={pf('input--bare input--height show')} id="emailComposerBcc" type="text" />
            <div className={pf('pill-container hide')}></div>
          </div>

          {/* Subject Line */}
          <input className={pf('input')} placeholder="Enter Subject" />

          {/* Toolbar */}
          <div className={pf('docked-composer__toolbar shrink-none grid grid--align-spread')}>
            <div className={pf('grid')}>
              <div className={pf('button-group picklist shrink-none')}>
                <button className={pf('button button--neutral picklist__label picklist__label--small')}>
                  Font <SvgIcon className={pf('icon icon--small')} sprite="utility" symbol="down" />
                </button>
              </div>
              <div className={pf('button-group picklist shrink-none')}>
                <button className={pf('button button--neutral picklist__label picklist__label--small')}>
                  14 <SvgIcon className={pf('icon icon--small')} sprite="utility" symbol="down" />
                </button>
              </div>
              <div className={pf('button-group')} role="group">
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="bold"
                  assistiveText="Bold" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="italic"
                  assistiveText="Italic" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="underline"
                  assistiveText="Underline" />
              </div>
              <div className={pf('button-group')} role="group">
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="richtextnumberedlist"
                  assistiveText="Numbered List" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="richtextbulletedlist"
                  assistiveText="Bulleted List" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="left_align_text"
                  assistiveText="Left Align Text" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="center_align_text"
                  assistiveText="Center Align Text" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="right_align_text"
                  assistiveText="Right Align Text" />
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="link"
                  assistiveText="Link" />
              </div>
            </div>
          </div>
          <textarea className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
        </div>

        {/* Composer Footer */}
        <div className={pf('docked-composer__footer shrink-none')}>

          <div className={pf('float--right grid grid--align-end size--1-of-2 text-align--right')}>
            <ButtonIcon
                flavor="icon-small"
                sprite="utility"
                symbol="link"
                assistiveText="Attach File" />
            <ButtonIcon
                flavor="icon-small"
                sprite="utility"
                symbol="insert_template"
                assistiveText="Insert Template" />
            <ButtonIcon
                flavor="icon-small"
                sprite="utility"
                symbol="insert_tag_field"
                assistiveText="Insert HTML" />
            <ButtonIcon
                flavor="icon-small"
                sprite="utility"
                symbol="preview"
                assistiveText="Preview" />
            <ButtonIcon
                flavor="icon-small"
                sprite="utility"
                symbol="delete"
                assistiveText="Delete" />
            <Button flavor="brand">Send</Button>
          </div>

          <div className={pf('float--left size--1-of-2')}>
            <div className={pf('lookup')} data-select="multi" data-scope="multi" data-typeahead="true">
              <div className={pf('form-element')}>
                <div className={pf('grid form-element__control')}>
                  {/*<label className={pf('form-element__label text-align--right')} htmlFor="lookup">
                    <p className={pf('truncate align-middle')}>Related Item</p>
                  </label>*/}
                  <div className={pf('dropdown-trigger align-middle')}>
                    <SvgIcon className={pf('icon icon-standard-user icon--small shrink-none')} sprite="standard" symbol="user" />
                    <ButtonIcon className={pf('button-space-left shrink-none')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="down" assistiveText="Filter" />
                  </div>
                  <input id="lookup" className={pf('input--bare')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder="Add Related Object" />
                </div>
                <div className={pf('pill-container hide')}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    {/*</div>*/}
  </div>
);
