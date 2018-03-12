// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

let Header = props => (
  <div className="slds-trial-header slds-grid">
    <div className="slds-grid">
      <button className="slds-button slds-m-right_small">
        Take the salesforce tour
      </button>
      <div
        className={classNames(
          'slds-grid slds-dropdown-trigger slds-dropdown-trigger_click',
          props.tourMenuOpen ? 'slds-is-open' : null
        )}
      >
        <button className="slds-button" aria-haspopup="true">
          <SvgIcon
            className="slds-button__icon slds-button__icon_left"
            sprite="utility"
            symbol="right"
          />
          Choose your tour
        </button>
        <Menu className="slds-dropdown_inverse slds-dropdown_left">
          <MenuList>
            <MenuItem
              tabIndex="0"
              className="slds-is-selected"
              title="Completed: Conquer Your Cases"
            >
              <SvgIcon
                className="slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Completed:</span> Conquer
              Your Cases
            </MenuItem>
            <MenuItem title="Automate For Speed">
              <SvgIcon
                className="slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small"
                sprite="utility"
                symbol="check"
              />
              Automate For Speed
            </MenuItem>
            <MenuItem title="Share Your Knowledge">
              <SvgIcon
                className="slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small"
                sprite="utility"
                symbol="check"
              />
              Share Your Knowledge
            </MenuItem>
            <MenuItem title="Finish it up in a Flash">
              <SvgIcon
                className="slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small"
                sprite="utility"
                symbol="check"
              />
              Finish it up in a Flash
            </MenuItem>
            <li className="slds-has-divider_top-space" role="separator" />
            <MenuItem title="Import Contacts and Accounts">
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-m-right_x-small"
                sprite="utility"
                symbol="upload"
              />
              Import Contacts and Accounts
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
    <div className="slds-grid slds-grid_vertical-align-center slds-col_bump-left">
      <span className="slds-box slds-box_xx-small slds-theme_default">30</span>
      <span className="slds-m-horizontal_x-small">Days left in trial</span>
      <a href="javascript:void(0);" className="slds-button slds-button_success">
        Subscribe Now
      </a>
    </div>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Header />;

export let states = [
  {
    id: 'menu-open',
    label: 'Tour Menu Open',
    element: (
      <div className="demo-only" style={{ height: '240px' }}>
        <Header tourMenuOpen />
      </div>
    )
  }
];
