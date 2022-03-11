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

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let ButtonGroup = props => (
  <div
    className={classNames('slds-button-group', props.className)}
    role="group"
  >
    {props.children}
  </div>
);

export let ButtonGroupList = props => (
  <ul className={classNames('slds-button-group-list', props.className)}>
    {props.children}
  </ul>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <ButtonGroup>
        <Button isNeutral>Refresh</Button>
        <Button isNeutral>Edit</Button>
        <Button isNeutral>Save</Button>
      </ButtonGroup>
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <ButtonGroup>
        <Button isNeutral>Refresh</Button>
        <Button isNeutral disabled>
          Edit
        </Button>
        <Button isNeutral>Save</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'with-overflow',
    label: 'With Overflow Menu',
    element: (
      <ButtonGroup>
        <Button isNeutral>Refresh</Button>
        <Button isNeutral>Edit</Button>
        <Button isNeutral>Save</Button>
        <Trigger className="slds-button_last" />
      </ButtonGroup>
    )
  },
  {
    id: 'with-overflow-open',
    label: 'With Overflow Menu - Open',
    element: (
      <div className="demo-only" style={{ height: '8.75rem' }}>
        <ButtonGroup>
          <Button isNeutral>Refresh</Button>
          <Button isNeutral>Edit</Button>
          <Button isNeutral>Save</Button>
          <Trigger className="slds-button_last" isOpen>
            <Menu className="slds-dropdown_right slds-dropdown_actions">
              <MenuList>
                <MenuItem tabIndex="0">Overflow Item One</MenuItem>
                <MenuItem>Overflow Item Two</MenuItem>
                <MenuItem>Overflow Item Three</MenuItem>
              </MenuList>
            </Menu>
          </Trigger>
        </ButtonGroup>
      </div>
    )
  },
  {
    id: 'with-overflow-disabled',
    label: 'With Overflow Menu - Disabled',
    element: (
      <ButtonGroup>
        <Button isNeutral>Refresh</Button>
        <Button isNeutral>Edit</Button>
        <Button isNeutral>Save</Button>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
          <ButtonIcon
            aria-haspopup="true"
            assistiveText="More Actions"
            className="slds-button_icon-border-filled"
            disabled
            symbol="down"
            title="More Actions"
          />
        </div>
      </ButtonGroup>
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
        <ButtonGroup>
          <Button isInverse>Refresh</Button>
          <Button isInverse>Edit</Button>
          <Button isInverse>Save</Button>
        </ButtonGroup>
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
        <ButtonGroup>
          <Button isInverse>Refresh</Button>
          <Button isInverse disabled>
            Edit
          </Button>
          <Button isInverse>Save</Button>
        </ButtonGroup>
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
        <ButtonGroup>
          <Button isInverse>Refresh</Button>
          <Button isInverse>Edit</Button>
          <Button isInverse>Save</Button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              className="slds-button_icon-border-inverse"
              assistiveText="More Actions"
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </ButtonGroup>
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
        <ButtonGroup>
          <Button isInverse>Refresh</Button>
          <Button isInverse>Edit</Button>
          <Button isInverse>Save</Button>
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
        </ButtonGroup>
      </div>
    )
  },
  {
    id: 'button-group-icon',
    label: 'Button Icon Group',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  },
  {
    id: 'button-group-icon-disabled',
    label: 'Button Icon Group - Disabled',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-border-filled"
          disabled
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  },
  {
    id: 'button-group-icon-selected',
    label: 'Button Icon Group - Selected',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border-filled slds-is-selected"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="true"
        />
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  },
  {
    id: 'brand-with-overflow',
    label: 'Brand Button With Overflow Menu',
    element: (
      <ButtonGroup>
        <Button isBrand>Save</Button>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
          <ButtonIcon
            aria-haspopup="true"
            assistiveText="More Actions"
            className="slds-button_icon-brand"
            symbol="down"
            title="More Actions"
          />
        </div>
      </ButtonGroup>
    )
  },
  {
    id: 'style-encapsulated-button-group',
    label: 'Button Group with Style Encapsulation',
    element: (
      <ButtonGroup>
        <div>
          <Button isNeutral isFirst>
            First
          </Button>
        </div>
        <div>
          <Button isNeutral isMiddle>
            Middle
          </Button>
        </div>
        <div>
          <Button isNeutral isMiddle>
            Middle
          </Button>
        </div>
        <div>
          <Button isNeutral isLast>
            Last
          </Button>
        </div>
      </ButtonGroup>
    )
  },
  {
    id: 'style-encapsulated-button-group-2-button',
    label: 'Button Group with Style Encapsulation - First/Last',
    element: (
      <ButtonGroup>
        <div>
          <Button isNeutral isFirst>
            First
          </Button>
        </div>
        <div>
          <Button isNeutral isLast>
            Last
          </Button>
        </div>
      </ButtonGroup>
    )
  },
  {
    id: 'style-encapsulated-button-icon-group',
    label: 'Button Icon Group with Style Encapsulation',
    element: (
      <ButtonGroup>
        <div>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="chart"
            assistiveText="Charts"
            title="Charts"
            aria-pressed="false"
            isFirst
          />
        </div>
        <div>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="filterList"
            assistiveText="Filter List"
            title="Filter List"
            aria-pressed="false"
            isMiddle
          />
        </div>
        <div>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="comments"
            assistiveText="Collaborate"
            title="Collaborate"
            aria-pressed="false"
            isMiddle
          />
        </div>
        <div>
          <ButtonIcon
            className="slds-button_icon-more"
            hasDropdown
            assistiveText="More Actions"
            title="More Actions"
            isLast
          />
        </div>
      </ButtonGroup>
    )
  },
  {
    id: 'style-encapsulated-button-icon-group-2-button',
    label: 'Button Icon Group with Style Encapsulation - First/Last',
    element: (
      <ButtonGroup>
        <div>
          <ButtonIcon
            className="slds-button_icon-border-filled"
            symbol="chart"
            assistiveText="Charts"
            title="Charts"
            aria-pressed="false"
            isFirst
          />
        </div>
        <div>
          <ButtonIcon
            className="slds-button_icon-more"
            hasDropdown
            assistiveText="More Actions"
            title="More Actions"
            isLast
          />
        </div>
      </ButtonGroup>
    )
  }
];
