// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Button } from '../../buttons/base/example';
import ButtonIcon from '../../button-icons/';
import {
  Menu,
  MenuList,
  MenuItem,
  Trigger
} from '../../menus/dropdown/example';
import classNames from 'classnames';

export let ButtonGroupList = props => (
  <ul
    {...props}
    className={classNames('slds-button-group-list', props.className)}
  >
    {props.children}
  </ul>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <ButtonGroupList>
    <li>
      <Button isNeutral>Refresh</Button>
    </li>
    <li>
      <Button isNeutral>Edit</Button>
    </li>
    <li>
      <Button isNeutral>Save</Button>
    </li>
  </ButtonGroupList>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <ButtonGroupList>
        <li>
          <Button isNeutral>Refresh</Button>
        </li>
        <li>
          <Button isNeutral>Edit</Button>
        </li>
        <li>
          <Button isNeutral disabled>
            Save
          </Button>
        </li>
      </ButtonGroupList>
    )
  },
  {
    id: 'with-overflow',
    label: 'With Overflow Menu',
    element: (
      <ButtonGroupList>
        <li>
          <Button isNeutral>Refresh</Button>
        </li>
        <li>
          <Button isNeutral>Edit</Button>
        </li>
        <li>
          <Button isNeutral>Save</Button>
        </li>
        <li>
          <Trigger className="slds-button_last" ariaExpanded="false" />
        </li>
      </ButtonGroupList>
    )
  },
  {
    id: 'with-overflow-open',
    label: 'With Overflow Menu - Open',
    element: (
      <div className="demo-only" style={{ height: '8.75rem' }}>
        <ButtonGroupList>
          <li>
            <Button isNeutral>Refresh</Button>
          </li>
          <li>
            <Button isNeutral>Edit</Button>
          </li>
          <li>
            <Button isNeutral>Save</Button>
          </li>
          <li>
            <Trigger className="slds-button_last slds-is-open">
              <Menu className="slds-dropdown_right">
                <MenuList>
                  <MenuItem tabIndex="0">Overflow Item One</MenuItem>
                  <MenuItem>Overflow Item Two</MenuItem>
                  <MenuItem>Overflow Item Three</MenuItem>
                </MenuList>
              </Menu>
            </Trigger>
          </li>
        </ButtonGroupList>
      </div>
    )
  },
  {
    id: 'with-overflow-disabled',
    label: 'With Overflow Menu - Disabled',
    element: (
      <ButtonGroupList>
        <li>
          <Button isNeutral>Refresh</Button>
        </li>
        <li>
          <Button isNeutral>Edit</Button>
        </li>
        <li>
          <Button isNeutral>Save</Button>
        </li>
        <li>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              className="slds-button_icon-border"
              assistiveText="More Actions"
              disabled
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </li>
      </ButtonGroupList>
    )
  }
];

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroupList>
          <li>
            <Button isInverse>Refresh</Button>
          </li>
          <li>
            <Button isInverse>Edit</Button>
          </li>
          <li>
            <Button isInverse>Save</Button>
          </li>
          <li>
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
              <ButtonIcon
                className="slds-button_icon-border-inverse"
                assistiveText="More Actions"
                aria-haspopup="true"
                symbol="down"
                title="More Actions"
              />
            </div>
          </li>
        </ButtonGroupList>
      </div>
    )
  },
  {
    id: 'inverse-disabled',
    label: 'Inverse - Disabled',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroupList>
          <li>
            <Button isInverse>Refresh</Button>
          </li>
          <li>
            <Button isInverse disabled>
              Edit
            </Button>
          </li>
          <li>
            <Button isInverse>Save</Button>
          </li>
          <li>
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
              <ButtonIcon
                className="slds-button_icon-border-inverse"
                assistiveText="More Actions"
                aria-haspopup="true"
                symbol="down"
                title="More Actions"
              />
            </div>
          </li>
        </ButtonGroupList>
      </div>
    )
  },
  {
    id: 'inverse-overflow',
    label: 'Inverse - With Overflow Menu',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroupList>
          <li>
            <Button isInverse>Refresh</Button>
          </li>
          <li>
            <Button isInverse>Edit</Button>
          </li>
          <li>
            <Button isInverse>Save</Button>
          </li>
          <li>
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
              <ButtonIcon
                className="slds-button_icon-border-inverse"
                assistiveText="More Actions"
                aria-haspopup="true"
                symbol="down"
                title="More Actions"
              />
            </div>
          </li>
        </ButtonGroupList>
      </div>
    )
  },
  {
    id: 'inverse-overflow-disabled',
    label: 'Inverse - With Overflow Menu - Disabled',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroupList>
          <li>
            <Button isInverse>Refresh</Button>
          </li>
          <li>
            <Button isInverse>Edit</Button>
          </li>
          <li>
            <Button isInverse>Save</Button>
          </li>
          <li>
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
              <ButtonIcon
                className="slds-button_icon-border-inverse"
                assistiveText="More Actions"
                disabled
                aria-haspopup="true"
                symbol="down"
                title="More Actions"
              />
            </div>
          </li>
        </ButtonGroupList>
      </div>
    )
  },
  {
    id: 'button-group-icon',
    label: 'Button Icon Group',
    element: (
      <ButtonGroupList>
        <li>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="chart"
            assistiveText="Charts"
            title="Charts"
            aria-pressed="false"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="filterList"
            assistiveText="Filter List"
            title="Filter List"
            aria-pressed="false"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-more"
            hasDropdown
            assistiveText="More Actions"
            title="More Actions"
          />
        </li>
      </ButtonGroupList>
    )
  },
  {
    id: 'button-group-icon-disabled',
    label: 'Button Icon Group - Disabled',
    element: (
      <ButtonGroupList>
        <li>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="chart"
            assistiveText="Charts"
            title="Charts"
            aria-pressed="false"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            disabled
            symbol="filterList"
            assistiveText="Filter List"
            title="Filter List"
            aria-pressed="false"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-more"
            hasDropdown
            assistiveText="More Actions"
            title="More Actions"
          />
        </li>
      </ButtonGroupList>
    )
  },
  {
    id: 'button-group-icon-selected',
    label: 'Button Icon Group - Selected',
    element: (
      <ButtonGroupList>
        <li>
          <ButtonIcon
            className="slds-button_icon-border-filled slds-is-selected"
            symbol="chart"
            assistiveText="Charts"
            title="Charts"
            aria-pressed="false"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="filterList"
            assistiveText="Filter List"
            title="Filter List"
            aria-pressed="false"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-more"
            hasDropdown
            assistiveText="More Actions"
            title="More Actions"
          />
        </li>
      </ButtonGroupList>
    )
  },
  {
    id: 'brand-with-overflow',
    label: 'Brand Button With Overflow Menu',
    element: (
      <ButtonGroupList>
        <li>
          <Button isBrand>Save</Button>
        </li>
        <li>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              aria-haspopup="true"
              assistiveText="More Actions"
              className="slds-button_icon-brand"
              symbol="down"
              title="More Actions"
            />
          </div>
        </li>
      </ButtonGroupList>
    )
  }
];
