// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { ButtonIcon } from '../../button-icons/base/example';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

const SetupDropdown = (
  <Menu className="slds-dropdown_right slds-nubbin_top-right">
    <MenuList>
      <li className="slds-dropdown__header" role="separator">
        <span className="slds-text-title_caps">Setup</span>
      </li>
      <MenuItem tabIndex="0">Setup Home</MenuItem>
    </MenuList>
  </Menu>
);

const ActionsDropdown = (
  <Menu className="slds-dropdown_right slds-nubbin_top-right">
    <MenuList>
      <li className="slds-dropdown__header" role="separator">
        <span className="slds-text-title_caps">Create</span>
      </li>
      <MenuItem tabIndex="0">
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-standard-note slds-m-right_x-small"
          sprite="standard"
          symbol="note"
        />{' '}
        New Note
      </MenuItem>
      <MenuItem>
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-standard-log-a-call slds-m-right_x-small"
          sprite="standard"
          symbol="log_a_call"
        />{' '}
        Log a Call
      </MenuItem>
      <MenuItem>
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-standard-event slds-m-right_x-small"
          sprite="standard"
          symbol="event"
        />{' '}
        New Event
      </MenuItem>
    </MenuList>
  </Menu>
);

let GlobalSearch = props => (
  <div
    aria-expanded={props.expanded ? 'true' : 'false'}
    aria-haspopup="listbox"
    className={classNames(
      'slds-form-element slds-lookup',
      props.expanded ? 'slds-is-open' : null
    )}
    role="combobox"
  >
    <label className="slds-assistive-text" htmlFor="global-search-01">
      Search Salesforce
    </label>

    <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right">
      <SvgIcon
        className="slds-input__icon slds-input__icon_left"
        sprite="utility"
        symbol="search"
      />
      <input
        aria-activedescendant={props.value ? 'option-00' : null}
        aria-autocomplete="list"
        aria-controls="global-search-list-01"
        autoComplete="off"
        className="slds-input slds-lookup__search-input"
        id="global-search-01"
        placeholder="Search Salesforce"
        role="textbox"
        type="text"
        defaultValue={props.value}
      />
      {props.value ? (
        <button className="slds-input__icon slds-input__icon_right slds-button slds-button_icon">
          <SvgIcon
            className="slds-button__icon"
            sprite="utility"
            symbol="clear"
          />
          <span className="slds-assistive-text">
            Clear the current search term
          </span>
        </button>
      ) : null}
    </div>

    <div
      className="slds-lookup__menu"
      role="listbox"
      id="global-search-list-01"
    >
      {props.value ? <GlobalSearchSearchOptions /> : <GlobalSearchMRUs />}
    </div>
  </div>
);

let GlobalSearchMRUs = props => (
  <ul className="slds-lookup__list" role="group" aria-label="Recent Items">
    <li role="presentation">
      <h3
        role="presentation"
        className="slds-lookup__item_label slds-text-body_small"
      >
        Recent Items
      </h3>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-01"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="opportunity"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            Salesforce - 1,000 Licenses
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Opportunity &bull; Prospecting
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-02"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-contact slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="contact"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">Art Vandelay</span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Contact &bull; avandelay@vandelay.com
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-03"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-account slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="account"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">Vandelary Industries</span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Account &bull; San Francisco
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-04"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-custom-8 slds-icon_small slds-media__figure"
          sprite="custom"
          symbol="custom8"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            Salesforce UK 2016 Events
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            General Ledger &bull; $20,000
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-05"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-lead slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="lead"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">H.E. Pennypacker</span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Lead &bull; Nursing
          </span>
        </span>
      </span>
    </li>
  </ul>
);

let GlobalSearchSearchOptions = props => (
  <ul className="slds-lookup__list" role="presentation">
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-lookup__item-action_label slds-text-body_small slds-has-focus"
        id="option-00"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon_x-small slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <span className="slds-truncate" title="'ibm' in Salesforce">
          "ibm" in Salesforce
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-01"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="opportunity"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            <mark>IBM</mark> - 1yr/100k
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Opportunity &bull; Proposal/Quote
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-02"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-account slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="account"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            <mark>IBM</mark>
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Account &bull; Menlo Park
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-03"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-account slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="account"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            <mark>IBM</mark> Watson
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Account &bull; Menlo Park
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-04"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="opportunity"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            200 Service Licenses - <mark>IBM</mark>
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            Opportunity &bull; Close-Won
          </span>
        </span>
      </span>
    </li>
    <li role="presentation">
      <span
        className="slds-lookup__item-action slds-media"
        id="option-05"
        role="option"
      >
        <SvgIcon
          className="slds-icon slds-icon-standard-contact slds-icon_small slds-media__figure"
          sprite="standard"
          symbol="contact"
        />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">
            Art Vandelay (<mark>IBM</mark>)
          </span>
          <span className="slds-lookup__result-meta slds-text-body_small">
            User &bull; Latex Salesman
          </span>
        </span>
      </span>
    </li>
  </ul>
);

export let GlobalHeader = props => (
  <header
    className={classNames('slds-global-header_container', props.className)}
  >
    <a
      href="javascript:void(0);"
      className="slds-assistive-text slds-assistive-text_focus"
    >
      Skip to Navigation
    </a>
    <a
      href="javascript:void(0);"
      className="slds-assistive-text slds-assistive-text_focus"
    >
      Skip to Main Content
    </a>
    <div className="slds-global-header slds-grid slds-grid_align-spread">
      <div className="slds-global-header__item">
        <div className="slds-global-header__logo" />
      </div>
      <div className="slds-global-header__item slds-global-header__item_search">
        <GlobalSearch expanded={props.expanded} value={props.searchingFor} />
      </div>
      <ul className="slds-global-header__item slds-grid slds-grid_vertical-align-center">
        <li className="slds-grid">
          <ButtonIcon
            className={classNames(
              'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon-favorites',
              {
                'slds-is-selected': props.favoritesSelected,
                'slds-is-disabled': props.favoritesDisabled
              }
            )}
            disabled={props.favoritesDisabled}
            aria-pressed={props.favoritesSelected ? 'true' : 'false'}
            iconClassName="slds-global-header__icon"
            symbol="favorite"
            title="Toggle Favorites"
            assistiveText="Toggle Favorite"
          />
          <span
            className={classNames(
              'slds-dropdown-trigger slds-dropdown-trigger_click',
              props.actions ? 'slds-is-open' : null
            )}
          >
            <ButtonIcon
              className={classNames(
                'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon slds-m-left_none'
              )}
              hasPopup
              disabled={props.favoritesDisabled}
              symbol="chevrondown"
              title="View Favorites"
              assistiveText="View Favorites"
            />
          </span>
        </li>
        <li
          className={classNames(
            'slds-dropdown-trigger slds-dropdown-trigger_click slds-p-horizontal_xxx-small',
            props.actions ? 'slds-is-open' : null
          )}
        >
          <ButtonIcon
            className="slds-button_icon slds-button_icon-small slds-button_icon-container slds-button_icon-x-small slds-global-header__button_icon-actions slds-m-horizontal_xx-small"
            hasPopup
            symbol="add"
            title="Global Actions"
            assistiveText="Global Actions"
          />
          {props.actions ? ActionsDropdown : null}
        </li>
        <li
          className={classNames(
            'slds-dropdown-trigger slds-dropdown-trigger_click',
            props.help ? 'slds-is-open' : null
          )}
        >
          <ButtonIcon
            className="slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon"
            iconClassName="slds-global-header__icon"
            hasPopup
            symbol="question"
            title="Help and Training"
            assistiveText="Help and Training"
          />
        </li>
        <li
          className={classNames(
            'slds-dropdown-trigger slds-dropdown-trigger_click',
            props.setup ? 'slds-is-open' : null
          )}
        >
          <ButtonIcon
            className="slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon"
            iconClassName="slds-global-header__icon"
            hasPopup
            symbol="setup"
            title="Setup"
            assistiveText="Setup"
          />
          {props.setup ? SetupDropdown : null}
        </li>
        <li
          className={classNames(
            'slds-dropdown-trigger slds-dropdown-trigger_click',
            props.setup ? 'slds-is-open' : null
          )}
        >
          <ButtonIcon
            className="slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon"
            iconClassName="slds-global-header__icon"
            hasPopup
            symbol="notification"
            title="Notifications"
            assistiveText="Notifications"
          />
        </li>
        <li
          className={classNames(
            'slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small',
            props.setup ? 'slds-is-open' : null
          )}
        >
          <button
            className="slds-button"
            title="person name"
            aria-haspopup="true"
          >
            <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
              <img
                alt="Person name"
                src="/assets/images/avatar2.jpg"
                title="User avatar"
              />
            </span>
          </button>
        </li>
      </ul>
    </div>
    {props.popoverMenu ? props.children : null}
  </header>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export const Context = props => (
  <div className="demo-only" style={{ height: '340px' }}>
    {props.children}
  </div>
);

export default <GlobalHeader />;

export let states = [
  {
    id: 'favorites-selected',
    label: 'Favorites selected',
    element: <GlobalHeader favoritesSelected />
  },
  {
    id: 'favorites-disabled',
    label: 'Favorites disabled',
    element: <GlobalHeader favoritesDisabled />
  },
  {
    id: 'actions-active',
    label: 'Global actions active',
    element: <GlobalHeader actions />
  },
  {
    id: 'global-header-setup-active',
    label: 'Setup active',
    element: <GlobalHeader setup />
  },
  {
    id: 'global-header-search-active',
    label: 'Active',
    element: <GlobalHeader expanded />,
    script: `
      document.getElementById('global-search-01').focus()
    `
  },
  {
    id: 'global-header-search-typeahead',
    label: 'Typeahead',
    element: <GlobalHeader expanded searchingFor="ibm" />,
    script: `
      document.getElementById('global-search-01').focus()
    `
  }
];
