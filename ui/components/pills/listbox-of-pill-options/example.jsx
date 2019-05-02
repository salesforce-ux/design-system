// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  PillContainer,
  ListboxPill,
  ListboxPills,
  ListboxPillsItem
} from '../';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <PillContainer>
    <ListboxPills>
      <ListboxPillsItem>
        <ListboxPill tabIndex="0" />
      </ListboxPillsItem>
      <ListboxPillsItem>
        <ListboxPill />
      </ListboxPillsItem>
    </ListboxPills>
  </PillContainer>
);

export let examples = [
  {
    id: 'listbox-pill-with-icon',
    label: 'With icon',
    element: (
      <PillContainer>
        <ListboxPills>
          <ListboxPillsItem>
            <ListboxPill tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill>
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                symbol="case"
                title="Case"
                assistiveText="Case"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </PillContainer>
    )
  },
  {
    id: 'listbox-pill-with-avatar',
    label: 'With avatar',
    element: (
      <PillContainer>
        <ListboxPills>
          <ListboxPillsItem>
            <ListboxPill tabIndex="0">
              <Avatar className="slds-avatar_x-small slds-pill__icon_container">
                <img
                  alt="Person name"
                  src="/assets/images/avatar2.jpg"
                  title="User avatar"
                />
              </Avatar>
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill>
              <Avatar className="slds-avatar_x-small slds-pill__icon_container">
                <img
                  alt="Person name"
                  src="/assets/images/avatar2.jpg"
                  title="User avatar"
                />
              </Avatar>
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </PillContainer>
    )
  },
  {
    id: 'listbox-pill-bare',
    label: 'Bare',
    element: (
      <PillContainer>
        <ListboxPills>
          <ListboxPillsItem>
            <ListboxPill className="slds-pill_bare" tabIndex="0" />
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill className="slds-pill_bare" />
          </ListboxPillsItem>
        </ListboxPills>
      </PillContainer>
    )
  }
];
