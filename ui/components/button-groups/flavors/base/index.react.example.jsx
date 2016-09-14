/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Button } from 'ui/components/buttons/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Menu, MenuList, MenuItem, Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import className from 'classnames';


///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let ButtonGroup = props =>
  <div className={className('slds-button-group', props.className)} role="group">
    {props.children}
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-group',
    label: 'Default',
    element:
      <ButtonGroup>
        <Button className="slds-button--neutral">Refresh</Button>
        <Button className="slds-button--neutral">Edit</Button>
        <Button className="slds-button--neutral">Save</Button>
      </ButtonGroup>
  },
  {
    id: 'button-group-disabled',
    label: 'Default Disabled',
    element:
      <ButtonGroup>
        <Button className="slds-button--neutral">Refresh</Button>
        <Button className="slds-button--neutral">Edit</Button>
        <Button className="slds-button--neutral" disabled>Save</Button>
      </ButtonGroup>
  },
  {
    id: 'button-group-more',
    label: 'More Icon',
    element:
      <ButtonGroup>
        <Button className="slds-button--neutral">Refresh</Button>
        <Button className="slds-button--neutral">Edit</Button>
        <Button className="slds-button--neutral">Save</Button>
        <Trigger className="slds-button--last" ariaExpanded="false" />
      </ButtonGroup>
  },
  {
    id: 'button-group-more-open',
    label: 'More Icon Open',
    element:
      <div className="demo-only" style={{ height: '8.75rem' }}>
        <ButtonGroup>
          <Button className="slds-button--neutral">Refresh</Button>
          <Button className="slds-button--neutral">Edit</Button>
          <Button className="slds-button--neutral">Save</Button>
          <Trigger className="slds-button--last slds-is-open">
            <Menu className="slds-dropdown--right">
              <MenuList>
                <MenuItem tabIndex="0">Overflow Item One</MenuItem>
                <MenuItem>Overflow Item Two</MenuItem>
                <MenuItem>Overflow Item Three</MenuItem>
              </MenuList>
            </Menu>
          </Trigger>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-icon-disabled',
    label: 'More Icon Disabled',
    element:
      <ButtonGroup>
        <Button className="slds-button--neutral">Refresh</Button>
        <Button className="slds-button--neutral">Edit</Button>
        <Button className="slds-button--neutral">Save</Button>
        <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
          <ButtonIcon className="slds-button--icon-border" assistiveText="More Actions" disabled aria-haspopup="true" symbol="down" />
        </div>
      </ButtonGroup>
  },
  {
    id: 'button-group-inverse',
    label: 'Inverse',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonGroup>
          <Button className="slds-button--inverse">Refresh</Button>
          <Button className="slds-button--inverse">Edit</Button>
          <Button className="slds-button--inverse">Save</Button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
            <ButtonIcon className="slds-button--icon-border-inverse" assistiveText="More Actions" aria-haspopup="true" symbol="down" />
          </div>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-inverse-disabled',
    label: 'Inverse Disabled',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonGroup>
          <Button className="slds-button--inverse">Refresh</Button>
          <Button className="slds-button--inverse" disabled>Edit</Button>
          <Button className="slds-button--inverse" >Save</Button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
            <ButtonIcon className="slds-button--icon-border-inverse" assistiveText="More Actions" aria-haspopup="true" symbol="down" />
          </div>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-icon-inverse-disabled',
    label: 'Inverse More Icon Disabled',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonGroup>
          <Button className="slds-button--inverse">Refresh</Button>
          <Button className="slds-button--inverse">Edit</Button>
          <Button className="slds-button--inverse">Save</Button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
            <ButtonIcon className="slds-button--icon-border-inverse" assistiveText="More Actions" disabled aria-haspopup="true" symbol="down" />
          </div>
        </ButtonGroup>
      </div>
  }
];
