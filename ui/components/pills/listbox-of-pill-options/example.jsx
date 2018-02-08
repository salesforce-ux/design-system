// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { PillContainer } from '../base/example';
import { Avatar } from '../../avatar/base/example';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let ListboxPill = props => (
  <span
    className={classNames('slds-pill', props.className)}
    role="option"
    tabIndex={props.tabIndex}
    aria-selected="true"
  >
    {props.children}
    <span
      className="slds-pill__label"
      title={props.label || 'Full pill label verbiage mirrored here'}
    >
      {props.label || 'Pill Label'}
    </span>
    <span className="slds-icon_container slds-pill__remove" title="Remove">
      <SvgIcon
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        sprite="utility"
        symbol="close"
      />
      <span className="slds-assistive-text">
        Press delete or backspace to remove
      </span>
    </span>
  </span>
);

export let ListboxPills = props => (
  <ul
    className={classNames(
      'slds-listbox slds-listbox_horizontal',
      props.className
    )}
    role="listbox"
    aria-label="Selected Options:"
    aria-orientation="horizontal"
  >
    {props.children}
  </ul>
);

export let ListboxPillsItem = props => (
  <li
    className={classNames('slds-listbox-item', props.className)}
    role="presentation"
    aria-hidden={props['aria-hidden']}
  >
    {props.children}
  </li>
);

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

export let states = [
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
  }
];
