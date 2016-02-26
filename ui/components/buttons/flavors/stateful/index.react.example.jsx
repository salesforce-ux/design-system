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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let StatefulButton = props =>
  <button className={className(pf('button'), props.className)} disabled={props.disabled} aria-live="assertive">
    <span className={pf('text-not-selected')}>
      <SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="add" />
      Follow
    </span>
    <span className={pf('text-selected')}>
      <SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="check" />
      Following
    </span>
    <span className={pf('text-selected-focus')}>
      <SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="close" />
      Unfollow
    </span>
  </button>;

let StatefulIcon = props =>
  <button className={className(pf('button button--icon button--icon-border'), props.className)} disabled={props.disabled}>
    <SvgIcon className={pf('button__icon')} sprite="utility" symbol="like" />
  </button>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let NotSelected = props =>
  <Demo>
    <StatefulButton className={pf('button--neutral not-selected')} />
  </Demo>;

let Selected = props =>
  <Demo>
    <StatefulButton className={pf('button--neutral is-selected')} />
  </Demo>;

let InverseNotSelected = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <StatefulButton className={pf('button--inverse not-selected')} />
  </Demo>;

let InverseSelected = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <StatefulButton className={pf('button--inverse is-selected')} />
  </Demo>;

let IconNotSelected = props =>
  <Demo>
    <StatefulIcon className={pf('not-selected')} />
  </Demo>;

let IconSelected = props =>
  <Demo>
    <StatefulIcon className={pf('is-selected')} />
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-neutral-stateful-not-selected',
    label: 'Neutral - Not Selected',
    element: <NotSelected />
  },
  {
    id: 'button-neutral-stateful-selected',
    label: 'Neutral - Selected',
    element: <Selected />
  },
  {
    id: 'button-inverse-stateful-not-selected',
    label: 'Inverse - Not Selected',
    element: <InverseNotSelected />
  },
  {
    id: 'button-inverse-stateful-selected',
    label: 'Inverse - Selected',
    element: <InverseSelected />
  },
  {
    id: 'button-icon-stateful-not-selected',
    label: 'Icon - Not Selected',
    element: <IconNotSelected />
  },
  {
    id: 'button-icon-stateful-selected',
    label: 'Icon - Selected',
    element: <IconSelected />
  }
];
