/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Menu } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuList } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Length5 = props =>
  <div className="demo-only" style={{height: '260px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList className="slds-dropdown--length-5">
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
  </div>;

let Length7 = props =>
  <div className="demo-only" style={{height: '300px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList className="slds-dropdown--length-7">
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
  </div>;

let Length10 = props =>
  <div className="demo-only" style={{height: '430px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList className="slds-dropdown--length-10">
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
  </div>;

let IconLength5 = props =>
  <div className="demo-only" style={{height: '260px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList className="slds-dropdown--length-with-icon-5">
          <MenuItem tabIndex="0">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Menu Item One
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Menu Item Two
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Menu Item Three
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Menu Item Four
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Menu Item Five
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Menu Item Six
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Menu Item Seven
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Menu Item Eight
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Menu Item Nine
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Menu Item Ten
          </MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let IconLength7 = props =>
  <div className="demo-only" style={{height: '320px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList className="slds-dropdown--length-with-icon-7">
          <MenuItem tabIndex="0">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Menu Item One
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Menu Item Two
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Menu Item Three
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Menu Item Four
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Menu Item Five
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Menu Item Six
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Menu Item Seven
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Menu Item Eight
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Menu Item Nine
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Menu Item Ten
          </MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

let IconLength10 = props =>
  <div className="demo-only" style={{height: '450px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList className="slds-dropdown--length-with-icon-10">
          <MenuItem tabIndex="0">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Menu Item One
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Menu Item Two
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Menu Item Three
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Menu Item Four
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Menu Item Five
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Menu Item Six
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Menu Item Seven
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Menu Item Eight
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Menu Item Nine
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Menu Item Ten
          </MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

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
