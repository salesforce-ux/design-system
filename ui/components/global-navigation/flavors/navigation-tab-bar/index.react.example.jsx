// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { WaffleIcon } from 'ui/components/dynamic-icons/flavors/waffle/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';
import _ from 'lodash';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let ShortCutKey = props =>
  <span className="slds-text-body--small slds-text-color--weak slds-p-left--large">
    <span className="slds-assistive-text">:</span>
    { props.children }
  </span>;

// Context Tab
let ContextTab = props =>
  <li className={classNames('slds-context-bar__item slds-context-bar__item--tab', props.className, props.itemActive ? 'slds-is-active' : null, props.itemUnsaved ? 'slds-is-unsaved' : null, props.pinned ? 'slds-is-pinned' : null)} role="presentation">
    <a href="javascript:void(0);" className="slds-context-bar__label-action" role="tab" title={ props.title || 'tab name'}  aria-selected={ props.itemActive ? 'true' : 'false' } tabIndex={ props.itemActive ? '0' : '-1' }>
      { props.itemUnsaved ? <abbr className="slds-indicator--unsaved" title="Tab Not Saved">*</abbr> : null }
      <div className="slds-icon_container" title={ _.startCase(props.symbol) || 'Case' }>
        <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol={ props.symbol || 'case' } />
        <span className="slds-assistive-text">{ _.startCase(props.symbol) || 'Case' }</span>
      </div>
      <span className={classNames('slds-truncate', props.pinned ? 'slds-assistive-text' : null)} title={ props.title || 'tab name'}>{ props.title || 'tab name'}</span>
    </a>
    <div className={classNames('slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-p-left--none slds-p-right--none', props.actionOverflow == 'true' ? 'slds-is-open' : null)}>
      <ButtonIcon
        className="slds-button--icon-container slds-button--icon-x-small"
        tabIndex={ props.itemActive ? '0' : '-1' }
        symbol="chevrondown"
        aria-haspopup="true"
        assistiveText={ 'Actions for ' + props.title }
        title={ 'Actions for ' + props.title }
      />
      <Menu className="slds-dropdown--right">
        <MenuList>
          <MenuItem iconRight={<ShortCutKey>r</ShortCutKey>}>Refresh Tab</MenuItem>
          <MenuItem iconRight={<ShortCutKey>⇧ + n</ShortCutKey>}>Open in a new window</MenuItem>
          <MenuItem iconRight={<ShortCutKey>p</ShortCutKey>}>Pin Tab</MenuItem>
          <MenuItem iconRight={<ShortCutKey>w</ShortCutKey>}>Close Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
    { !props.pinned ?
      <div className="slds-context-bar__icon-action slds-col--bump-left slds-p-left--none">
        <ButtonIcon
          className="slds-button--icon-container slds-button--icon-x-small"
          tabIndex={ props.itemActive ? '0' : '-1' }
          symbol="close"
          assistiveText={ 'Close ' + props.title }
          title={ 'Close ' + props.title }
        />
      </div>
    : null }
  </li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let ContextTabBar = props =>

  <div className={classNames('slds-context-bar slds-context-bar--tabs', props.className)}>

    <div className="slds-context-bar__primary">
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          <WaffleIcon className="slds-context-bar__button" />
        </div>
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate" title={ props.appName || 'App Name' }>{ props.appName || 'App Name' }</span>
        </span>
      </div>

      <div className={classNames('slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click', props.objectSwitchClassName)}>
        <a href="javascript:void(0);" className="slds-context-bar__label-action">
          <span className="slds-truncate" title="Object">Object</span>
        </a>
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className="slds-button--icon-container slds-button--icon-x-small"
            symbol="chevrondown"
            aria-haspopup="true"
            assistiveText="Open object switcher menu"
            title="Open object switcher menu"
          />
        </div>
        <Menu className="slds-dropdown--right">
          <MenuList>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
              Accounts
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-case slds-m-right--small" sprite="standard" symbol="case" />
              Cases
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-work-order slds-m-right--small" sprite="standard" symbol="work_order" />
              Insights
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className={classNames('slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger--click', props.addTabClassName)}>
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className={ classNames('slds-button--icon-container slds-button--icon-small', props.splitViewActive ? 'slds-is-selected' : null)}
            symbol="side_list"
            assistiveText="Toggle split view"
            title="Toggle split view"
            aria-expanded={ props.splitViewActive ? 'true' : 'false' }
            aria-controls="id_of_split_view_container"
          />
        </div>
      </div>
      <div className="slds-context-bar__vertical-divider"></div>
      <div className={classNames('slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger--click', props.addTabActive ? 'slds-is-open' : null, props.addTabClassName)}>
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className="slds-button--icon-container slds-button--icon-small"
            symbol="add"
            assistiveText="Open a New Tab"
            title="Open a New Tab"
          />
        </div>
        { props.addTabActive ?
          <section className="slds-popover slds-nubbin--top" role="dialog" style={{ position: 'absolute', left: '1.125rem', top: '2.75rem', marginLeft: '-10rem' }}>
            <div className="slds-popover__body">
              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="text-input-01">Add Page by URL or ID</label>
                <div className="slds-form-element__control slds-grid">
                  <input id="text-input-01" className="slds-input" type="text" placeholder="Placeholder Text" />
                  <button className="slds-button slds-button--brand slds-shrink-none slds-m-left--small">Add Tab</button>
                </div>
              </div>
            </div>
          </section>
        : null }
      </div>
    </div>

    <div className="slds-context-bar__secondary">
      <div className="slds-context-bar__vertical-divider"></div>
      <ul className="slds-grid" role="tablist">
        { props.children }
      </ul>
    </div>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'split-view',
    label: 'Split View - Active',
    element:
      <ContextTabBar splitViewActive>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'tab-active',
    label: 'Tab - Active',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'tab-active-focus',
    label: 'Tab - Active Focus',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" />
        <ContextTab title="Tab Item 1" className="slds-has-focus" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'tab-item-action-menu-open',
    label: 'Tab - Action Overflow',
    element:
      <div className="demo-only" style={{height: '12rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" symbol="home" />
          <ContextTab title="Tab Item 1" itemActive actionOverflow="true" />
          <ContextTab title="Tab Item 2" />
        </ContextTabBar>
      </div>
  },
  {
    id: 'pinned-tab',
    label: 'Pinned Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" pinned />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'pinned-tab-active',
    label: 'Pinned Tab - Active',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" pinned itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'pinned-tab-active-focus',
    label: 'Pinned Tab - Active Focus',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" className="slds-has-focus" pinned itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'unsaved-pinned-tab',
    label: 'Unsaved Pinned Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" pinned itemUnsaved />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'unsaved-tab',
    label: 'Unsaved Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" itemUnsaved />
      </ContextTabBar>
  },
  {
    id: 'overflow-tabs',
    label: 'Overflow Tabs',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click">
          <button className="slds-button slds-context-bar__label-action" aria-haspopup="true">
            <span className="slds-p-left--xx-small slds-truncate" title="More Tab Items">More <span className="slds-assistive-text">Tabs</span></span>
            <SvgIcon className="slds-button__icon slds-button__icon--small slds-button__icon--right" sprite="utility" symbol="chevrondown" />
          </button>
        </li>
      </ContextTabBar>
  },
  {
    id: 'overflow-tabs-open',
    label: 'Overflow Tabs - Open',
    element:
      <div className="demo-only" style={{height: '8rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" symbol="home" itemActive />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2" />
          <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
            <button className="slds-button slds-context-bar__label-action" aria-haspopup="true">
              <span className="slds-p-left--xx-small slds-truncate" title="More Tab Items">More <span className="slds-assistive-text">Tabs</span></span>
              <SvgIcon className="slds-button__icon slds-button__icon--small slds-button__icon--right" sprite="utility" symbol="chevrondown" />
            </button>
            <Menu className="slds-dropdown--right">
              <MenuList>
                <MenuItem>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
                <MenuItem>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ContextTabBar>
      </div>
  },
  {
    id: 'unsaved-overflow-tabs',
    label: 'Unsaved Overflow Tabs',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-is-unsaved">
          <button className="slds-button slds-context-bar__label-action" title="More Tab Items" aria-haspopup="true">
            <abbr className="slds-indicator--unsaved" title="Tab(s) within menu not saved">*</abbr>
            <span className="slds-p-left--xx-small slds-truncate" title="More Tabs">More <span className="slds-assistive-text">Tabs</span></span>
            <SvgIcon className="slds-button__icon slds-button__icon--small slds-button__icon--right" sprite="utility" symbol="chevrondown" />
          </button>
        </li>
      </ContextTabBar>
  },
  {
    id: 'unsaved-overflow-tabs-open',
    label: 'Unsaved Overflow Tabs - Open',
    element:
      <div className="demo-only" style={{height: '8rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" symbol="home" itemActive />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2" />
          <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open slds-is-unsaved">
            <button className="slds-button slds-context-bar__label-action" title="More Tab Items" aria-haspopup="true">
              <abbr className="slds-indicator--unsaved" title="Tab(s) within menu not saved">*</abbr>
              <span className="slds-p-left--xx-small slds-truncate" title="More Tabs">More <span className="slds-assistive-text">Tabs</span></span>
              <SvgIcon className="slds-button__icon slds-button__icon--small slds-button__icon--right" sprite="utility" symbol="chevrondown" />
            </button>
            <Menu className="slds-dropdown--right">
              <MenuList>
                <MenuItem className="slds-is-unsaved">
                  <abbr className="slds-unsaved-indicator" title="Tab(s) within menu not saved">*</abbr>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
                <MenuItem>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ContextTabBar>
      </div>
  },
  {
    id: 'object-switcher-active',
    label: 'Object Switcher - Active',
    element:
      <ContextTabBar objectSwitchClassName="slds-is-active">
        <ContextTab title="Home" symbol="home" />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'object-switcher-menu-open',
    label: 'Object Switcher - Open',
    element:
      <div className="demo-only" style={{height: '11rem'}}>
        <ContextTabBar objectSwitchClassName="slds-is-open">
          <ContextTab title="Home" symbol="home" />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2"  />
        </ContextTabBar>
      </div>
  },
  {
    id: 'add-tab-dialog-open',
    label: 'Add Tab Dialog - Open',
    element:
      <div className="demo-only" style={{height: '8rem'}}>
        <ContextTabBar addTabActive>
          <ContextTab title="Home" symbol="home" />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2"  />
        </ContextTabBar>
      </div>
  }
];
