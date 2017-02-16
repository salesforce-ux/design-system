// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Modal, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';

const dialogHeadingId = 'modal-heading-id-1';
const dialogBodyId = 'modal-content-id-1';

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

let Demo = props =>
  <div className="demo-only" {...props} style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
    {props.children}
  </div>;

const Footer = props =>
  <div className="slds-col--bump-left slds-text-align--right">
    <button className="slds-button slds-button--brand">Action</button>
  </div>;

export let DockedComposerPanel = props =>
  <section
    className={classNames('slds-docked-composer slds-grid slds-grid--vertical', props.className, props.dialogClosed ? 'slds-is-closed' : null)}
    role={ !props.nestedDialog ? 'dialog' : null}
    aria-labelledby={ !props.nestedDialog ? dialogHeadingId : null }
    aria-describedby={ !props.nestedDialog ? dialogBodyId : null }
  >
    <header className="slds-docked-composer__header slds-grid slds-shrink-none">
      <div className="slds-media slds-media--center slds-size--1-of-1">
        <div className="slds-media__figure slds-m-right--x-small">
          <span className="slds-icon_container">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol={ props.headerSymbol || 'call' } />
          </span>
        </div>
        <div className="slds-media__body">
          { props.dialogClosed ?
            <span className="slds-assistive-text">Minimized</span>
          : null }
          <h2 id={ dialogHeadingId }>{ props.header || 'Header' }</h2>
        </div>
      </div>
      <div className="slds-col--bump-left slds-shrink-none">
        <ButtonIcon
          className="slds-button--icon"
          symbol="minimize_window"
          assistiveText="Minimize Composer Panel"
          title="Minimize window"
        />
        <ButtonIcon
          className="slds-button--icon"
          symbol="expand_alt"
          assistiveText="Expand Composer Panel"
          title="Expand Composer"
        />
        <ButtonIcon
          className="slds-button--icon"
          symbol="close"
          assistiveText="Close Composer Panel"
          title="Close"
        />
      </div>
    </header>
    <div className={classNames('slds-docked-composer__body', props.bodyClassName)} id={ dialogBodyId }>
      { props.children }
    </div>
    { props.footer ?
      <footer className={classNames('slds-docked-composer__footer slds-shrink-none', props.footerClassName)}>
        { props.footer }
      </footer>
    : null }
  </section>;

let ComposerOverflowMenu = props =>
  <div className="slds-docked-composer slds-docked-composer--overflow">
    <button className="slds-button slds-button--icon slds-docked-composer--overflow__button" aria-haspopup="true">
      <SvgIcon className="slds-button__icon" sprite="utility" symbol="standard_objects" />
      <span className="slds-text-body--small slds-m-left--xx-small">3 <span className="slds-assistive-text">other docked composer panels</span></span>
    </button>

    <Menu className="slds-dropdown--left slds-dropdown--bottom slds-dropdown--medium slds-nubbin--bottom-left">
      <MenuList className="slds-dropdown--length-with-icon-7">
        { _.times(composers.length, i =>
          <MenuItem key={ i }>
            <span className={'slds-icon_container slds-icon-standard-' + composers[i].entity + ' slds-m-right--x-small'}>
              <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol={ composers[i].entity } />
              <span className="slds-assistive-text">{ composers[i].entity }</span>
            </span>
            { composers[i].title }
          </MenuItem>
        )}
      </MenuList>
    </Menu>
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
        <DockedComposerPanel
          className="slds-is-open"
          footer={ <Footer /> }
        >
          <div className="slds-align--absolute-center">Docked Composer Panel Body <br /> This area consumes the feature</div>
        </DockedComposerPanel>
      </div>
    </Demo>
  },
  {
    id: 'single-composer-closed',
    label: 'Closed',
    element:
    <Demo>
      <div className="slds-docked_container">
        <DockedComposerPanel
          dialogClosed
          footer={ <Footer /> }
        >
          <div className="slds-align--absolute-center">Docked Composer Panel Body <br /> This area consumes the feature</div>
        </DockedComposerPanel>
      </div>
    </Demo>
  },
  {
    id: 'single-composer-popout',
    label: 'Popout',
    element:
    <Demo>
      <Modal className="slds-docked-composer-modal" aria-labelledby={dialogHeadingId} aria-describedby={dialogBodyId}>
        <ModalContent>
          <DockedComposerPanel footer={ <Footer /> } nestedDialog>
            <div className="slds-align--absolute-center">Docked Composer Panel Body <br /> This area consumes the feature</div>
          </DockedComposerPanel>
        </ModalContent>
      </Modal>
      <div className="slds-backdrop slds-backdrop--open"></div>
    </Demo>
  },
  {
    id: 'multiple-composer-overflow',
    label: 'With Overflow Menu',
    element:
    <Demo>
      <div className="slds-docked_container">
        <ComposerOverflowMenu />
        <DockedComposerPanel
          className="slds-is-open"
          footer={ <Footer /> }
        >
          <div className="slds-align--absolute-center">Docked Composer Panel Body <br /> This area consumes the feature</div>
        </DockedComposerPanel>
      </div>
    </Demo>
  }
];
