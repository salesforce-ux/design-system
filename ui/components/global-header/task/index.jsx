// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { StandardIcon } from '../../icons/standard/example';

class GlobalTaskMenu extends Component {
  render() {
    return (
      <Menu
        className="slds-dropdown_right slds-nubbin_top-right"
        style={{ right: '-1rem' }}
      >
        <MenuList>
          <MenuItem
            iconLeft={
              <StandardIcon
                containerClassName="slds-m-right_x-small"
                className="slds-icon_small"
                symbol="event"
              />
            }
            tabIndex="0"
          >
            New Event
          </MenuItem>
          <MenuItem
            iconLeft={
              <StandardIcon
                containerClassName="slds-m-right_x-small"
                className="slds-icon_small"
                symbol="note"
              />
            }
            tabIndex="0"
          >
            New Note
          </MenuItem>
          <MenuItem
            iconLeft={
              <StandardIcon
                containerClassName="slds-m-right_x-small"
                className="slds-icon_small"
                symbol="email"
              />
            }
            tabIndex="0"
          >
            New Email
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}

export default GlobalTaskMenu;
