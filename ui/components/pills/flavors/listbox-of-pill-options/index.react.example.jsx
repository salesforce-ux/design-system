// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import { Avatar } from 'ui/components/avatar/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let ListboxPill = props =>
  <span className={classNames('slds-pill', props.className)} role="option" tabIndex={props.tabIndex}>
    {props.children}
    <span className="slds-pill__label" title={props.label || 'Full pill label verbiage mirrored here'}>{props.label || 'Pill Label'}</span>
    <span className="slds-icon_container slds-pill__remove" title="Remove">
      <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default" sprite="utility" symbol="close" />
      <span className="slds-assistive-text">Press delete or backspace to remove</span>
    </span>
  </span>;

export let ListboxHoriz = props =>
  <ul className="slds-pill-listbox" role="listbox" aria-orientation="horizontal">
    {props.children}
  </ul>;

export let ListItemHoriz = props =>
    <li role="presentation">
      {props.children}
    </li>;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'listbox-pill',
    label: 'Default',
    element:
      <PillContainer>
        <ListboxHoriz>
          <ListItemHoriz>
            <ListboxPill tabIndex="0" />
          </ListItemHoriz>
          <ListItemHoriz>
            <ListboxPill />
          </ListItemHoriz>
        </ListboxHoriz>
      </PillContainer>
  },
  {
    id: 'listbox-pill-with-icon',
    label: 'With icon',
    element:
      <PillContainer>
        <ListboxHoriz>
          <ListItemHoriz>
            <ListboxPill tabIndex="0">
              <span className="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
                <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
                <span className="slds-assistive-text">Account</span>
              </span>
            </ListboxPill>
          </ListItemHoriz>
          <ListItemHoriz>
            <ListboxPill>
              <span className="slds-icon_container slds-icon-standard-case slds-pill__icon_container" title="Case">
                <SvgIcon className="slds-icon" sprite="standard" symbol="case" />
                <span className="slds-assistive-text">Case</span>
              </span>
            </ListboxPill>
          </ListItemHoriz>
        </ListboxHoriz>
      </PillContainer>
  },
  {
    id: 'listbox-pill-with-avatar',
    label: 'With avatar',
    element:
      <PillContainer>
        <ListboxHoriz>
          <ListItemHoriz>
            <ListboxPill tabIndex="0">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <img
                  alt="Person name"
                  src="/assets/images/avatar2.jpg"
                  title="User avatar"
                />
              </Avatar>
            </ListboxPill>
          </ListItemHoriz>
          <ListItemHoriz>
            <ListboxPill>
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <img
                  alt="Person name"
                  src="/assets/images/avatar2.jpg"
                  title="User avatar"
                />
              </Avatar>
            </ListboxPill>
          </ListItemHoriz>
        </ListboxHoriz>
      </PillContainer>
  }
];
