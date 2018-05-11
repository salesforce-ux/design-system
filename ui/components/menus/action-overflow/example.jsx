// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { Trigger } from '../dropdown/example';
import { Menu } from '../dropdown/example';
import { MenuList } from '../dropdown/example';
import { MenuItem } from '../dropdown/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////
export const Context = props => (
  <div className="demo-only" style={{ height: '165px' }}>
    {props.children}
  </div>
);

const moreIcon = (
  <ButtonIcon
    className="slds-button_icon-border-filled slds-button_icon-x-small"
    symbol="down"
    assistiveText="Show More"
    aria-haspopup="true"
    title="Show More"
  />
);

export const ActionOverflow = props => {
  const position = props.position || 'left';
  return (
    <Trigger className="slds-is-open" triggerIcon={moreIcon}>
      <Menu
        className={classNames(
          'slds-dropdown_actions',
          `slds-dropdown_${position}`
        )}
      >
        <MenuList>
          <MenuItem tabIndex="0">Action One</MenuItem>
          <MenuItem>Action Two</MenuItem>
          <MenuItem>Action Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ActionOverflow />;
