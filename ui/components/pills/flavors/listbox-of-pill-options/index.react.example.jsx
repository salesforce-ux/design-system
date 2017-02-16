/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICHorizAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

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
