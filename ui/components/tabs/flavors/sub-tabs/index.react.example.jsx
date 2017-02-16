// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import _ from 'lodash';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Subtab = props =>
  <li className={classNames('slds-tabs--default__item slds-grid slds-grid--vertical-align-center', props.hasFocus ? 'slds-has-focus' : null, props.active ? 'slds-active' : null, props.className)} role="presentation">
    <a
      href="javascript:void(0);"
      className="slds-tabs--default__link slds-p-horizontal--xx-small"
      role="tab"
      title={ props.title || 'Subtab Name'}
      aria-selected={ props.active ? 'true' : 'false' }
      tabIndex={ props.active ? '0' : '-1' }
      id={ props.tabItemId }
      aria-controls={ props.tabPanelId }>
      { props.itemUnsaved ? <abbr className="slds-indicator--unsaved" title="Tab Not Saved">*</abbr> : null }
      <div className="slds-icon_container" title={ _.startCase(props.symbol) || 'Case' }>
        <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol={ props.symbol || 'case' } />
        <span className="slds-assistive-text">{ _.startCase(props.symbol) || 'Case' }</span>
      </div>
      <span className={classNames('slds-truncate', props.pinned ? 'slds-assistive-text' : null)} title={ props.title || 'Subtab Name'}>{ props.title || 'Subtab Name'}</span>
    </a>
    { props.menuIcon ?
      <div className={classNames('slds-dropdown-trigger slds-dropdown-trigger--click slds-p-left--none slds-p-right--none', props.actionOverflow == 'true' ? 'slds-is-open' : null)}>
        <ButtonIcon
          className="slds-button--icon-container slds-button--icon-x-small"
          tabIndex={ props.active ? '0' : '-1' }
          symbol="chevrondown"
          aria-haspopup="true"
          assistiveText={ 'Actions for ' + props.title }
          title={ 'Actions for ' + props.title }
        />
      </div>
    : null }
    <div className={classNames('slds-col--bump-left slds-p-left--none slds-p-right--none', props.pinned ? 'slds-assistive-text' : null)}>
      <ButtonIcon
        className="slds-button--icon-container slds-button--icon-x-small"
        tabIndex={ props.active ? '0' : '-1' }
        symbol="close"
        assistiveText={ 'Close ' + props.title }
        title={ 'Close ' + props.title }
      />
    </div>
  </li>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab active title="Tab Item 1" tabItemId="subtab-tabitem-01" tabPanelId="subtab-tabpanel-01" />
          <Subtab title="Tab Item 2" tabItemId="subtab-tabitem-02" tabPanelId="subtab-tabpanel-02" />
        </ul>
        <div className="slds-tabs--default__content slds-show" id="subtab-tabpanel-01" role="tabpanel" aria-labelledby="subtab-tabitem-01">Item One Content</div>
        <div className="slds-tabs--default__content slds-hide" id="subtab-tabpanel-02" role="tabpanel" aria-labelledby="subtab-tabitem-02">Item Two Content</div>
      </div>
  },
  {
    id: 'subtabs-has-focus',
    label: 'Tab - Focus',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab title="Tab Item 1" id="subtab-01" active hasFocus tabItemId="subtab-tabitem-01" tabPanelId="subtab-tabpanel-01" />
          <Subtab title="Tab Item 2" tabItemId="subtab-tabitem-02" tabPanelId="subtab-tabpanel-02" />
        </ul>
        <div className="slds-tabs--default__content slds-show" id="subtab-tabpanel-01" role="tabpanel" aria-labelledby="subtab-tabitem-01">Item One Content</div>
        <div className="slds-tabs--default__content slds-hide" id="subtab-tabpanel-02" role="tabpanel" aria-labelledby="subtab-tabitem-02">Item Two Content</div>
      </div>,
    script: `
      document.getElementById('subtab-01').focus()
    `
  },
  {
    id: 'subtabs-unsaved',
    label: 'Unsaved Tab',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab title="Tab Item 1" active itemUnsaved tabItemId="subtab-tabitem-01" tabPanelId="subtab-tabpanel-01" />
          <Subtab title="Tab Item 2" tabItemId="subtab-tabitem-02" tabPanelId="subtab-tabpanel-02" />
        </ul>
        <div className="slds-tabs--default__content slds-show" id="subtab-tabpanel-01" role="tabpanel" aria-labelledby="subtab-tabitem-01">Item One Content</div>
        <div className="slds-tabs--default__content slds-hide" id="subtab-tabpanel-02" role="tabpanel" aria-labelledby="subtab-tabitem-02">Item Two Content</div>
      </div>
  },
  {
    id: 'subtabs-borders',
    label: 'With Borders',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab title="Tab Item 1" active className="slds-border--right slds-border--left" tabItemId="subtab-tabitem-01" tabPanelId="subtab-tabpanel-01" />
          <Subtab title="Tab Item 2" tabItemId="subtab-tabitem-02" tabPanelId="subtab-tabpanel-02" className="slds-border--right" />
        </ul>
        <div className="slds-tabs--default__content slds-show" id="subtab-tabpanel-01" role="tabpanel" aria-labelledby="subtab-tabitem-01">Item One Content</div>
        <div className="slds-tabs--default__content slds-hide" id="subtab-tabpanel-02" role="tabpanel" aria-labelledby="subtab-tabitem-02">Item Two Content</div>
      </div>
  },
  {
    id: 'subtabs-menu',
    label: 'Tab - Action Overflow',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab title="Tab Item 1" active menuIcon tabItemId="subtab-tabitem-01" tabPanelId="subtab-tabpanel-01" />
          <Subtab title="Tab Item 2" tabItemId="subtab-tabitem-02" tabPanelId="subtab-tabpanel-02" menuIcon />
        </ul>
        <div className="slds-tabs--default__content slds-show" id="subtab-tabpanel-01" role="tabpanel" aria-labelledby="subtab-tabitem-01">Item One Content</div>
        <div className="slds-tabs--default__content slds-hide" id="subtab-tabpanel-02" role="tabpanel" aria-labelledby="subtab-tabitem-02">Item Two Content</div>
      </div>
  }
];
