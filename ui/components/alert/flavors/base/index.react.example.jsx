/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let Alert = props => {
  const {
    className,
    type,
    children,
    ...rest
  } = props;

  return (
    <div className={ classNames('slds-notify slds-notify--alert slds-theme--alert-texture', className, type ? 'slds-theme--' + type : null) } role="alert">
      <span className="slds-assistive-text">{ type || 'info' }</span>
      { children }
      <ButtonIcon
        className="slds-notify__close slds-button--icon-inverse"
        symbol="close"
        assistiveText="Close"
        title="Close"
      />
    </div>
  );
};

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'informational',
    label: 'Informational',
    element:
      <Alert type="info">
        <SvgIcon
          className="slds-icon slds-icon--x-small slds-m-right--x-small"
          sprite="utility"
          symbol="user"
        />
        <h2>Logged in as John Smith (johnsmith@acme.com). <a href="javascript:void(0);">Log out</a></h2>
      </Alert>
  },
  {
    id: 'warning',
    label: 'Warning',
    element:
      <Alert type="warning">
        <SvgIcon
          className="slds-icon slds-icon--x-small slds-m-right--x-small"
          sprite="utility"
          symbol="warning"
        />
        <h2>Your browser is outdated. Your Salesforce experience may be degraded. <a href="javascript:void(0);">More Information</a></h2>
      </Alert>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Alert type="error">
        <SvgIcon
          className="slds-icon slds-icon--x-small slds-m-right--x-small"
          sprite="utility"
          symbol="ban"
        />
        <h2>Your browser is currently not supported. Your Salesforce may be degraded. <a href="javascript:void(0);">More Information</a></h2>
      </Alert>
  },
  {
    id: 'offline',
    label: 'Offline',
    element:
      <Alert type="offline">
        <SvgIcon
          className="slds-icon slds-icon--x-small slds-m-right--x-small"
          sprite="utility"
          symbol="offline"
        />
        <h2>You are in offline mode. <a href="javascript:void(0);">More Information</a></h2>
      </Alert>
  }
];
