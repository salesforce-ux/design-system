// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Trigger } from '../dropdown/example';
import { Menu } from '../dropdown/example';
import { MenuList } from '../dropdown/example';
import { MenuItem } from '../dropdown/example';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Length5 = props => (
  <div className="demo-only" style={{ height: '260px' }}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown_left slds-dropdown_small">
        <MenuList className="slds-dropdown_length-5">
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem>Menu Item Four</MenuItem>
          <MenuItem>Menu Item Five</MenuItem>
          <MenuItem>Menu Item Six</MenuItem>
          <MenuItem>Menu Item Seven</MenuItem>
          <MenuItem>Menu Item Eight</MenuItem>
          <MenuItem>Menu Item Nine</MenuItem>
          <MenuItem>Menu Item Ten</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);

let Length7 = props => (
  <div className="demo-only" style={{ height: '300px' }}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown_left slds-dropdown_small">
        <MenuList className="slds-dropdown_length-7">
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem>Menu Item Four</MenuItem>
          <MenuItem>Menu Item Five</MenuItem>
          <MenuItem>Menu Item Six</MenuItem>
          <MenuItem>Menu Item Seven</MenuItem>
          <MenuItem>Menu Item Eight</MenuItem>
          <MenuItem>Menu Item Nine</MenuItem>
          <MenuItem>Menu Item Ten</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);

let Length10 = props => (
  <div className="demo-only" style={{ height: '430px' }}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown_left slds-dropdown_small">
        <MenuList className="slds-dropdown_length-10">
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem>Menu Item Four</MenuItem>
          <MenuItem>Menu Item Five</MenuItem>
          <MenuItem>Menu Item Six</MenuItem>
          <MenuItem>Menu Item Seven</MenuItem>
          <MenuItem>Menu Item Eight</MenuItem>
          <MenuItem>Menu Item Nine</MenuItem>
          <MenuItem>Menu Item Ten</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);

let IconLength5 = props => (
  <div className="demo-only" style={{ height: '260px' }}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown_left slds-dropdown_small">
        <MenuList className="slds-dropdown_length-with-icon-5">
          <MenuItem tabIndex="0">
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
              sprite="standard"
              symbol="account"
            />
            Menu Item One
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
              sprite="standard"
              symbol="approval"
            />
            Menu Item Two
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
              sprite="standard"
              symbol="lead"
            />
            Menu Item Three
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small"
              sprite="standard"
              symbol="opportunity"
            />
            Menu Item Four
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small"
              sprite="standard"
              symbol="product"
            />
            Menu Item Five
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
              sprite="standard"
              symbol="account"
            />
            Menu Item Six
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
              sprite="standard"
              symbol="approval"
            />
            Menu Item Seven
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
              sprite="standard"
              symbol="lead"
            />
            Menu Item Eight
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small"
              sprite="standard"
              symbol="opportunity"
            />
            Menu Item Nine
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small"
              sprite="standard"
              symbol="product"
            />
            Menu Item Ten
          </MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);

let IconLength7 = props => (
  <div className="demo-only" style={{ height: '320px' }}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown_left slds-dropdown_small">
        <MenuList className="slds-dropdown_length-with-icon-7">
          <MenuItem tabIndex="0">
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
              sprite="standard"
              symbol="account"
            />
            Menu Item One
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
              sprite="standard"
              symbol="approval"
            />
            Menu Item Two
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
              sprite="standard"
              symbol="lead"
            />
            Menu Item Three
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small"
              sprite="standard"
              symbol="opportunity"
            />
            Menu Item Four
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small"
              sprite="standard"
              symbol="product"
            />
            Menu Item Five
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
              sprite="standard"
              symbol="account"
            />
            Menu Item Six
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
              sprite="standard"
              symbol="approval"
            />
            Menu Item Seven
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
              sprite="standard"
              symbol="lead"
            />
            Menu Item Eight
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small"
              sprite="standard"
              symbol="opportunity"
            />
            Menu Item Nine
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small"
              sprite="standard"
              symbol="product"
            />
            Menu Item Ten
          </MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);

let IconLength10 = props => (
  <div className="demo-only" style={{ height: '450px' }}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown_left slds-dropdown_small">
        <MenuList className="slds-dropdown_length-with-icon-10">
          <MenuItem tabIndex="0">
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
              sprite="standard"
              symbol="account"
            />
            Menu Item One
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
              sprite="standard"
              symbol="approval"
            />
            Menu Item Two
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
              sprite="standard"
              symbol="lead"
            />
            Menu Item Three
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small"
              sprite="standard"
              symbol="opportunity"
            />
            Menu Item Four
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small"
              sprite="standard"
              symbol="product"
            />
            Menu Item Five
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
              sprite="standard"
              symbol="account"
            />
            Menu Item Six
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
              sprite="standard"
              symbol="approval"
            />
            Menu Item Seven
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
              sprite="standard"
              symbol="lead"
            />
            Menu Item Eight
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small"
              sprite="standard"
              symbol="opportunity"
            />
            Menu Item Nine
          </MenuItem>
          <MenuItem>
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small"
              sprite="standard"
              symbol="product"
            />
            Menu Item Ten
          </MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    id: 'dropdown-menu-length-5',
    label: '5 items',
    element: <Length5 />
  },
  {
    id: 'dropdown-menu-length-7',
    label: '7 items',
    element: <Length7 />
  },
  {
    id: 'dropdown-menu-length-10',
    label: '10 items',
    element: <Length10 />
  },
  {
    id: 'dropdown-menu-length-5-icon',
    label: '5 items with icon',
    element: <IconLength5 />
  },
  {
    id: 'dropdown-menu-length-7-icon',
    label: '7 items with icon',
    element: <IconLength7 />
  },
  {
    id: 'dropdown-menu-length-10-icon',
    label: '10 items with icon',
    element: <IconLength10 />
  }
];
