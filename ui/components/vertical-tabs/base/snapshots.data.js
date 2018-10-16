// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { StandardIcon } from '../../icons/standard/example';
import { UtilityIcon } from '../../icons/base/example';
import { Badge } from '../../badges/';

export const exampleTabs = [
  {
    label: 'Tab 1',
    content: (
      <div className="slds-text-longform">
        <h3 className="slds-text-heading_medium">Tab Title</h3>
        <p>Content for Tab 1</p>
        <p>Lorem ipsum dolor...</p>
        <p>Lorem ipsum dolor...</p>
      </div>
    )
  },
  {
    label: 'Tab 2',
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 2</p>
      </div>
    )
  },
  {
    label: 'Tab 3 has a really long label and can wrap or truncate',
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 3</p>
      </div>
    )
  }
];

export const exampleTabsWithIcons = [
  {
    label: 'Opportunities',
    leftIcon: (
      <StandardIcon
        symbol="opportunity"
        assistiveText={false}
        className="slds-icon_small"
      />
    ),
    content: (
      <div className="slds-text-longform">
        <h3 className="slds-text-heading_medium">Tab Title</h3>
        <p>Content for Tab 1</p>
        <p>Lorem ipsum dolor...</p>
        <p>Lorem ipsum dolor...</p>
      </div>
    )
  },
  {
    label: 'Cases',
    leftIcon: (
      <StandardIcon
        symbol="case"
        assistiveText={false}
        className="slds-icon_small"
      />
    ),
    rightIcon: (
      <UtilityIcon
        symbol="error"
        title="This tab has an error"
        assistiveText="This tab has an error"
        className="slds-icon_x-small slds-icon-text-error"
      />
    ),
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 2</p>
      </div>
    )
  },
  {
    label: 'Accounts',
    leftIcon: (
      <StandardIcon
        symbol="account"
        assistiveText={false}
        className="slds-icon_small"
      />
    ),
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 3</p>
      </div>
    )
  }
];

export const exampleTabsWithBadges = [
  {
    label: 'Opportunities',
    leftIcon: (
      <StandardIcon
        symbol="opportunity"
        assistiveText={false}
        className="slds-icon_small"
      />
    ),
    rightIcon: <Badge isInverse>New</Badge>,
    content: (
      <div className="slds-text-longform">
        <h3 className="slds-text-heading_medium">Tab Title</h3>
        <p>Content for Tab 1</p>
        <p>Lorem ipsum dolor...</p>
        <p>Lorem ipsum dolor...</p>
      </div>
    )
  },
  {
    label: 'Cases',
    leftIcon: (
      <StandardIcon
        symbol="case"
        assistiveText={false}
        className="slds-icon_small"
      />
    ),
    rightIcon: <Badge isInverse>New</Badge>,
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 2</p>
      </div>
    )
  },
  {
    label: 'Accounts',
    leftIcon: (
      <StandardIcon
        symbol="account"
        assistiveText={false}
        className="slds-icon_small"
      />
    ),
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 3</p>
      </div>
    )
  }
];
