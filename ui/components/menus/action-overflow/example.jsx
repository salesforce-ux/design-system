// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { Trigger } from '../dropdown/example';
import { Menu } from '../dropdown/example';
import { MenuList } from '../dropdown/example';
import { MenuItem } from '../dropdown/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const moreIcon = (
  <ButtonIcon
    className="slds-button_icon-border-filled slds-button_icon-x-small"
    sprite="utility"
    symbol="down"
    assistiveText="Show More"
    aria-haspopup="true"
    title="Show More"
  />
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '165px' }}>
    <Trigger className="slds-is-open" triggerIcon={moreIcon}>
      <Menu className="slds-dropdown_left slds-dropdown_actions">
        <MenuList>
          <MenuItem tabIndex="0">Action One</MenuItem>
          <MenuItem>Action Two</MenuItem>
          <MenuItem>Action Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);
