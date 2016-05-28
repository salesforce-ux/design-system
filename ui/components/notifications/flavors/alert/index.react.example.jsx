/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

let demoHeight = '2rem';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <div className={pf('notify_container')}>
    <div className={pf('notify notify--alert theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
        <span className={pf('assistive-text')}>Info</span>
        <h2>Base System Alert</h2>
    </div>
  </div>
</div>;

let Success = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <div className={pf('notify_container')}>
    <div className={pf('notify notify--alert theme--success theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <span className={pf('assistive-text')}>Success</span>
      <h2>
        <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="custom" symbol="custom19" />
        Scheduled Maintenance Notification: Sunday March 15, 8:00 AM&ndash;10:00 PST <a href="javascript:void(0);">More Information</a>
      </h2>
    </div>
  </div>
</div>;

let ErrorAlert = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <div className={pf('notify_container')}>
    <div className={pf('notify notify--alert theme--error theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <span className={pf('assistive-text')}>Error</span>
      <h2>
        <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="utility" symbol="ban" />
        Your browser is currently not supported. Your Salesforce may be degraded. <a href="javascript:void(0);">More Information</a>
      </h2>
    </div>
  </div>
</div>;

let Offline = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <div className={pf('notify_container')}>
    <div className={pf('notify notify--alert theme--offline theme--alert-texture')} role="alert">
      <ButtonIcon
        className={pf('notify__close')}
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <span className={pf('assistive-text')}>Offline</span>
      <h2>
        <SvgIcon className={pf('icon icon-text-email icon--small m-right--x-small')} sprite="utility" symbol="offline" />
        You are in offline mode. <a href="javascript:void(0);">More Information</a>
      </h2>
    </div>
  </div>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'success',
    label: 'Success',
    element: <Success />
  },
  {
    id: 'error',
    label: 'Error',
    element: <ErrorAlert />
  },
  {
    id: 'offline',
    label: 'Offline',
    element: <Offline />
  }
];
