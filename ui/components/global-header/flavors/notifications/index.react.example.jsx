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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { GlobalHeader } from 'ui/components/global-header/flavors/base/index.react.example';
import className from 'classnames';

//////////////////////////////////////////////
// Partials
/////////////////////////////////////////////

const MoreIcon = (
  <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" sprite="utility" symbol="down" assistiveText="Show More" aria-haspopup="true" />
);


let TriggerButton = props =>
  <Trigger className="slds-is-open" triggerIcon={MoreIcon}>
    {props.children}
  </Trigger>;

let UnreadIcon = props =>
  <div className="slds-align-middle">
    <abbr className="slds-required slds-text-link" title="unread">●</abbr>
  </div>;


let NotificationItem = props =>
  <li className={className('slds-global-header__notification slds-p-around--xx-small', props.className)}>
    <div className="slds-media slds-has-flexi-truncate slds-p-around--x-small">
      <div className="slds-media__figure">
        <img src="/assets/images/avatar3.jpg" className="slds-avatar--small slds-avatar--circle" alt="Placeholder" />
      </div>
      <div className="slds-media__body">
        <div className="slds-grid slds-grid--align-spread">
          <a href="javascript:void(0);" className="slds-text-link--reset slds-has-flexi-truncate">
            <h3 className="slds-truncate"><strong>{props.messageTitle}</strong></h3>
            <p className="slds-truncate">{props.message}</p>
            <p className="slds-m-top--x-small slds-text-color--weak">{props.messageTime}</p>
          </a>
          <div className="slds-no-flex slds-grid slds-grid--vertical">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </li>;

let PopoverMenu = props =>
  <div className="slds-popover slds-popover--large slds-nubbin--top-right" role="dialog" style={{ position: 'absolute', right: '3.125rem' }}>
    <div className="slds-popover__body slds-p-around--none">
      <ul>
        {props.children}
      </ul>
    </div>
  </div>;

//////////////////////////////////////////////
// Export
/////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '28.571rem' }}>
    <GlobalHeader popoverMenu>
      <PopoverMenu>
        <NotificationItem
          className="slds-global-header__notification--unread"
          messageTitle="Kelly Chan mentioned you in a comment:"
          message="I need you to review this for me @Paulina"
          messageTime="10m ago"
        >
          <TriggerButton />
          <UnreadIcon />
        </NotificationItem>
        <NotificationItem
          messageTitle="Kelly Chan mentioned you in a comment:"
          message="I need you to review this for me @Paulina"
          messageTime="10m ago"
        >
          <TriggerButton />
        </NotificationItem>
        <NotificationItem
          messageTitle="Kelly Chan mentioned you in a comment:"
          message="I need you to review this for me @Paulina"
          messageTime="10m ago"
        >
          <TriggerButton />
        </NotificationItem>
      </PopoverMenu>
    </GlobalHeader>
  </div>
);
