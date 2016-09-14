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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props} style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
    {props.children}
  </div>;

const dialingIcon = (
  <span className="slds-icon_container slds-icon-standard-call">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
    <span className="slds-assistive-text">Call Icon</span>
  </span>
);

let DockedComposer = props =>
  <div {...props} className={className('slds-docked-composer slds-grid slds-grid--vertical slds-nowrap', props.className)}>
    {props.children}
  </div>;

let ComposerHeader = props =>
  <header className="slds-docked-composer__header slds-grid slds-grid--align-spread slds-shrink-none">
    <MediaObject figureLeft={dialingIcon} flavor="center">
      <h2 id="dialog-heading-id">Header</h2>
    </MediaObject>
    <div className="slds-docked-composer__actions">
      <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="minimize_window" assistiveText="Minimize window" />
      <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="expand_alt" assistiveText="Expand Composer" />
      <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="close" assistiveText="Close" />
    </div>
  </header>;

let ComposerBody = props =>
  <div className="slds-docked-composer__body slds-col slds-grid slds-grid--vertical slds-nowrap slds-size--1-of-1">
    {props.children}
  </div>;

let ComposerFooter = props =>
  <footer className="slds-docked-composer__footer slds-shrink-none">
    <div className="slds-float--right slds-grid slds-grid--align-end slds-size--1-of-2 slds-text-align--right">
      <Button flavor="brand">Action</Button>
    </div>
  </footer>;

let ComposerOverflowMenu = props =>
  <div className="slds-docked-composer slds-docked-composer--overflow">
    <button className="slds-docked-composer--overflow__pill slds-theme--alt-inverse" aria-haspopup="true">
      <span className="slds-align-middle">
        <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="standard_objects" />
        <span className="slds-assistive-text">View other docked windows</span>
      </span>
      <span className="slds-text-body--small slds-align-middle">99 +</span>
    </button>
    <Menu className="slds-dropdown--left slds-dropdown--bottom slds-dropdown--medium slds-nubbin--bottom-left">
      <Menu.List isSelectable={false} className="slds-dropdown--length-with-icon-7">
        <Menu.Item>
          <span className="slds-icon_container slds-icon-standard-email slds-m-right--x-small">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="email" />
            <span className="slds-assistive-text">Email Icon</span>
          </span>
          Agenda for next week
        </Menu.Item>
        <Menu.Item>
          <span className="slds-icon_container slds-icon-standard-call slds-m-right--x-small">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
            <span className="slds-assistive-text">Call Icon</span>
          </span>
          Lei Chan
        </Menu.Item>
        <Menu.Item>
          <span className="slds-icon_container slds-icon-standard-task slds-m-right--x-small">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="task" />
            <span className="slds-assistive-text">Task Icon</span>
          </span>
          August 14 Meeting Notes
        </Menu.Item>
        <Menu.Item>
          <span className="slds-icon_container slds-icon-standard-email slds-m-right--x-small">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="email" />
            <span className="slds-assistive-text">Email Icon</span>
          </span>
          New Email
        </Menu.Item>
        <Menu.Item>
          <span className="slds-icon_container slds-icon-standard-call slds-m-right--x-small">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
            <span className="slds-assistive-text">Call Icon</span>
          </span>
          Janet Fitzpatrick
        </Menu.Item>
        <Menu.Item>
          <span className="slds-icon_container slds-icon-standard-call slds-m-right--x-small">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
            <span className="slds-assistive-text">Call Icon</span>
          </span>
          Call with Adam Fraser
        </Menu.Item>
      </Menu.List>
    </Menu>
  </div>;

let Modal = props =>
  <div aria-hidden="false" role="dialog" className="slds-modal slds-fade-in-open slds-docked-composer-modal">
    <div className="slds-modal__container">
      <div className="slds-modal__content">
        {props.children}
      </div>
    </div>
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'single-composer-open',
    label: 'Open',
    element:
      <Demo>
        <div className="slds-docked_container">
          <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
            <ComposerHeader />
            <ComposerBody />
            <ComposerFooter />
          </DockedComposer>
        </div>
      </Demo>
  },
  {
    id: 'single-composer-closed',
    label: 'Closed',
    element:
      <Demo>
        <div className="slds-docked_container">
          <DockedComposer role="dialog" aria-labelledby="dialog-heading-id">
            <ComposerHeader />
            <ComposerBody />
            <ComposerFooter />
          </DockedComposer>
        </div>
      </Demo>
  },
  {
    id: 'single-composer-popout',
    label: 'Popout',
    element:
      <Demo>
        <Modal>
          <DockedComposer>
            <ComposerHeader />
            <ComposerBody />
            <ComposerFooter />
          </DockedComposer>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open"></div>
      </Demo>
  },
  {
    id: 'multiple-composer-overflow',
    label: 'Composers with Overflow Menu',
    element:
      <Demo>
        <div className="slds-docked_container">
          <ComposerOverflowMenu />
          <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
            <ComposerHeader />
            <ComposerBody />
            <ComposerFooter />
          </DockedComposer>
        </div>
      </Demo>
  }
];
