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
import { Button } from 'ui/components/buttons/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/buttons/flavors/icon/index.react.example';
import { Menu, MenuList, MenuItem, Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';


///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

export let ButtonGroup = props =>
  <div className={pf('button-group')} role="group">
    {props.children}
  </div>;


///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <ButtonGroup>
    <Button className={pf('button--neutral')}>Refresh</Button>
    <Button className={pf('button--neutral')}>Edit</Button>
    <Button className={pf('button--neutral')}>Save</Button>
  </ButtonGroup>;

let DefaultDisabled = props =>
  <ButtonGroup>
    <Button className={pf('button--neutral')}>Refresh</Button>
    <Button className={pf('button--neutral')}>Edit</Button>
    <Button className={pf('button--neutral')} disabled>Save</Button>
  </ButtonGroup>;

let More = props =>
  <ButtonGroup>
    <Button className={pf('button--neutral')}>Refresh</Button>
    <Button className={pf('button--neutral')}>Edit</Button>
    <Button className={pf('button--neutral')}>Save</Button>
    <Trigger className={pf('button--last')} ariaExpanded="false" />
  </ButtonGroup>;

let MoreOpen = props =>
  <Demo style={{height: '140px'}}>
    <ButtonGroup>
      <Button className={pf('button--neutral')}>Refresh</Button>
      <Button className={pf('button--neutral')}>Edit</Button>
      <Button className={pf('button--neutral')}>Save</Button>
      <Trigger className={pf('button--last is-open')}>
        <Menu className={pf('dropdown--right')}>
          <MenuList>
            <MenuItem>Overflow Item One</MenuItem>
            <MenuItem>Overflow Item Two</MenuItem>
            <MenuItem>Overflow Item Three</MenuItem>
          </MenuList>
        </Menu>
      </Trigger>
    </ButtonGroup>
  </Demo>;

let IconDisabled = props =>
  <ButtonGroup>
    <Button className={pf('button--neutral')}>Refresh</Button>
    <Button className={pf('button--neutral')}>Edit</Button>
    <Button className={pf('button--neutral')}>Save</Button>
    <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
      <ButtonIcon className={pf('button--icon-border')} assistiveText="More Actions" disabled hasPopup symbol="down" />
    </div>
  </ButtonGroup>;

let Inverse = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <ButtonGroup>
      <Button className={pf('button--inverse')}>Refresh</Button>
      <Button className={pf('button--inverse')}>Edit</Button>
      <Button className={pf('button--inverse')}>Save</Button>
      <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
        <ButtonIcon className={pf('button--icon-border-inverse')} assistiveText="More Actions" hasPopup symbol="down" />
      </div>
    </ButtonGroup>
  </Demo>;

let InverseDisabled = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <ButtonGroup>
      <Button className={pf('button--inverse')}>Refresh</Button>
      <Button className={pf('button--inverse')} disabled>Edit</Button>
      <Button className={pf('button--inverse')} >Save</Button>
      <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
        <ButtonIcon className={pf('button--icon-border-inverse')} assistiveText="More Actions" hasPopup symbol="down" />
      </div>
    </ButtonGroup>
  </Demo>;

let InverseIconDisabled = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <ButtonGroup>
      <Button className={pf('button--inverse')}>Refresh</Button>
      <Button className={pf('button--inverse')}>Edit</Button>
      <Button className={pf('button--inverse')}>Save</Button>
      <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
        <ButtonIcon className={pf('button--icon-border-inverse')} assistiveText="More Actions" disabled hasPopup symbol="down" />
      </div>
    </ButtonGroup>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-group',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'button-group-disabled',
    label: 'Default Disabled',
    element: <DefaultDisabled />
  },
  {
    id: 'button-group-more',
    label: 'More Icon',
    element: <More />
  },
  {
    id: 'button-group-more-open',
    label: 'More Icon Open',
    element: <MoreOpen />
  },
  {
    id: 'button-group-icon-disabled',
    label: 'More Icon Disabled',
    element: <IconDisabled />
  },
  {
    id: 'button-group-inverse',
    label: 'Inverse',
    element: <Inverse />
  },
  {
    id: 'button-group-inverse-disabled',
    label: 'Inverse Disabled',
    element: <InverseDisabled />
  },
  {
    id: 'button-group-icon-inverse-disabled',
    label: 'Inverse More Icon Disabled',
    element: <InverseIconDisabled />
  }
];
