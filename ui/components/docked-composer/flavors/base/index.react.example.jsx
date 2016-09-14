/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Button } from 'ui/components/buttons/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import _ from 'lodash';

const composers = [{
  'entity': 'email',
  'title': 'Agenda for next week'
}, {
  'entity': 'call',
  'title': 'Lei Chan'
}, {
  'entity': 'task',
  'title': 'August 14 Meeting Notes'
}];

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let DockedComposerPanel = props =>
  <div className={className('slds-docked-composer slds-grid slds-grid--vertical', props.className)} role="dialog" aria-labelledby="panel-heading-01">
    <div className="slds-docked-composer__header slds-grid slds-shrink-none">
      <div className="slds-media slds-media--center">
        <div className="slds-media__figure slds-m-right--x-small">
          <span className="slds-icon_container">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol={ props.headerSymbol || 'call' } />
          </span>
        </div>
        <div className="slds-media__body">
          <h2 id="panel-heading-01">{ props.header || 'Header' }</h2>
        </div>
      </div>
      <div className="slds-col--bump-left">
        <ButtonIcon
          className="slds-button--icon"
          symbol="minimize_window"
          assistiveText="Minimize Composer Panel" />
        <ButtonIcon
          className="slds-button--icon"
          symbol="expand_alt"
          assistiveText="Expand Composer Panel" />
        <ButtonIcon
          className="slds-button--icon"
          symbol="close"
          assistiveText="Close Composer Panel" />
      </div>
    </div>
    { props.children }
  </div>;

export let DockedComposerPanelBody = props =>
  <div className={className('slds-docked-composer__body', props.className)}>
    { !props.children ? <div className="slds-align--absolute-center">Docked Composer Panel Body</div> : props.children }
  </div>;

export let DockedComposerPanelFooter = props =>
  <footer className={className('slds-docked-composer__footer slds-shrink-none', props.className)}>
    { !props.children
    ? <div className="slds-col--bump-left slds-text-align--right">
        <Button className="slds-button--brand">Action</Button>
      </div>
    : props.children }
  </footer>;

let ComposerOverflowMenu = props =>
  <div className="slds-docked-composer slds-docked-composer--overflow">
    <button className="slds-button slds-button--icon docked-composer--overflow__button" aria-haspopup="true">
      <SvgIcon className="slds-button__icon" sprite="utility" symbol="standard_objects" />
      <span className="slds-text-body--small slds-m-left--xx-small">3 <span className="slds-assistive-text">other docked composer panels</span></span>
    </button>

    <Menu className="slds-dropdown--left slds-dropdown--bottom slds-dropdown--medium slds-nubbin--bottom-left">
      <MenuList className="slds-dropdown--length-with-icon-7">
        { _.times(composers.length, i =>
          <MenuItem key={ i }>
            <span className={'slds-icon_container slds-icon-standard-' + composers[i].entity + ' slds-m-right--x-small'}>
              <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol={ composers[i].entity } />
              <span className="slds-assistive-text">{ composers[i].entity } Icon</span>
            </span>
            { composers[i].title }
          </MenuItem>
        )}
      </MenuList>
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
    <div className="demo-only" style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
      <div className="slds-docked_container">
        <DockedComposerPanel className="slds-is-open">
          <DockedComposerPanelBody />
          <DockedComposerPanelFooter />
        </DockedComposerPanel>
      </div>
    </div>
  },
  {
    id: 'single-composer-closed',
    label: 'Closed',
    element:
    <div className="demo-only" style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
      <div className="slds-docked_container">
        <DockedComposerPanel>
          <DockedComposerPanelBody />
          <DockedComposerPanelFooter />
        </DockedComposerPanel>
      </div>
    </div>
  },
  {
    id: 'single-composer-popput',
    label: 'Popout',
    element:
    <div className="demo-only" style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
      <Modal>
        <DockedComposerPanel>
          <DockedComposerPanelBody />
          <DockedComposerPanelFooter />
        </DockedComposerPanel>
      </Modal>
      <div className="slds-backdrop slds-backdrop--open"></div>
    </div>
  },
  {
    id: 'multiple-composer-overflow',
    label: 'With Overflow Menu',
    element:
    <div className="demo-only" style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
      <div className="slds-docked_container">
        <ComposerOverflowMenu />
        <DockedComposerPanel className="slds-is-open">
          <DockedComposerPanelBody />
          <DockedComposerPanelFooter />
        </DockedComposerPanel>
      </div>
    </div>
  }
];
