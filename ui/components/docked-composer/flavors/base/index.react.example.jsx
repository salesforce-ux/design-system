/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Menu from 'ui/components/menus/index.react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props} style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
    {props.children}
  </div>;

const dialingIcon = (
  <span className={pf('icon_container icon-standard-call')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);

let DockedComposer = props =>
  <div {...props} className={className(pf('docked-composer grid grid--vertical nowrap'), props.className)}>
    {props.children}
  </div>;

let ComposerHeader = props =>
  <header className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
    <MediaObject figureLeft={dialingIcon} flavor="center">
      <h2 id="dialog-heading-id">Header</h2>
    </MediaObject>
    <div className={pf('docked-composer__actions')}>
      <ButtonIcon
        flavor="icon-bare,icon-inverse"
        sprite="utility"
        symbol="minimize_window"
        assistiveText="Minimize window" />
      <ButtonIcon
        flavor="icon-bare,icon-inverse"
        sprite="utility"
        symbol="expand_alt"
        assistiveText="Expand Composer" />
      <ButtonIcon
        flavor="icon-bare,icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
    </div>
  </header>;

let ComposerBody = props =>
  <div className={pf('docked-composer__body col grid grid--vertical nowrap size--1-of-1')}>
    {props.children}
  </div>;

let ComposerFooter = props =>
  <footer className={pf('docked-composer__footer shrink-none')}>
    <div className={pf('float--right grid grid--align-end size--1-of-2 text-align--right')}>
      <Button flavor="brand">Action</Button>
    </div>
  </footer>;

let ComposerOverflowMenu = props =>
  <div className={pf('docked-composer docked-composer--overflow')}>
    <a href="javascript:void(0);" className={pf('docked-composer--overflow__pill theme--alt-inverse')}>
      <span className={pf('align-middle')}>
        <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="standard_objects" />
        <span className={pf('assistive-text')}>View other docked windows</span>
      </span>
      <span className={pf('text-body--small align-middle')}>99 +</span>
    </a>
    <Menu className={pf('dropdown--left dropdown--bottom dropdown--medium nubbin--bottom-left')}>
      <Menu.List isSelectable={false} className={pf('dropdown--length-with-icon-7')}>
        <Menu.Item>
          <span className={pf('icon_container icon-standard-email m-right--x-small')}>
            <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
            <span className={pf('assistive-text')}>Email Icon</span>
          </span>
          Agenda for next week
        </Menu.Item>
        <Menu.Item>
          <span className={pf('icon_container icon-standard-call m-right--x-small')}>
            <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
            <span className={pf('assistive-text')}>Call Icon</span>
          </span>
          Lei Chan
        </Menu.Item>
        <Menu.Item>
          <span className={pf('icon_container icon-standard-task m-right--x-small')}>
            <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="task" />
            <span className={pf('assistive-text')}>Task Icon</span>
          </span>
          August 14 Meeting Notes
        </Menu.Item>
        <Menu.Item>
          <span className={pf('icon_container icon-standard-email m-right--x-small')}>
            <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
            <span className={pf('assistive-text')}>Email Icon</span>
          </span>
          New Email
        </Menu.Item>
        <Menu.Item>
          <span className={pf('icon_container icon-standard-call m-right--x-small')}>
            <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
            <span className={pf('assistive-text')}>Call Icon</span>
          </span>
          Janet Fitzpatrick
        </Menu.Item>
        <Menu.Item>
          <span className={pf('icon_container icon-standard-call m-right--x-small')}>
            <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
            <span className={pf('assistive-text')}>Call Icon</span>
          </span>
          Call with Adam Fraser
        </Menu.Item>
      </Menu.List>
    </Menu>
  </div>;

let Modal = props =>
  <div aria-hidden="false" role="dialog" className={pf('modal fade-in-open docked-composer-modal')}>
    <div className={pf('modal__container')}>
      <div className={pf('modal__content')}>
        {props.children}
      </div>
    </div>
  </div>;


///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <div className={pf('docked_container')}>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
        <ComposerHeader />
        <ComposerBody />
        <ComposerFooter />
      </DockedComposer>
    </div>
  </Demo>;

let StateB = props =>
  <Demo>
    <div className={pf('docked_container')}>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id">
        <ComposerHeader />
        <ComposerBody />
        <ComposerFooter />
      </DockedComposer>
    </div>
  </Demo>;

let StateC = props =>
  <Demo>
    <Modal>
      <DockedComposer>
        <ComposerHeader />
        <ComposerBody />
        <ComposerFooter />
      </DockedComposer>
    </Modal>
    <div className={pf('backdrop backdrop--open')}></div>
  </Demo>;

let StateD = props =>
  <Demo>
    <div className={pf('docked_container')}>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
        <ComposerHeader />
        <ComposerBody />
        <ComposerFooter />
      </DockedComposer>
    </div>
  </Demo>;

let StateE = props =>
  <Demo>
    <div className={pf('docked_container')}>
      <ComposerOverflowMenu />
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
        <ComposerHeader />
        <ComposerBody />
        <ComposerFooter />
      </DockedComposer>
    </div>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'single-composer-open',
    label: 'Open',
    element: <StateA />
  },
  {
    id: 'single-composer-closed',
    label: 'Closed',
    element: <StateB />
  },
  {
    id: 'single-composer-popout',
    label: 'Popout',
    element: <StateC />
  },
  {
    id: 'multiple-composer-overflow',
    label: 'Composers with Overflow Menu',
    element: <StateE />
  }
];
