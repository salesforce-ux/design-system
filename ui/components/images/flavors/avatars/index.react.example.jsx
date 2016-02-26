/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Img from 'app_modules/ui/img';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Avatar = props =>
  <span className={className(pf('avatar'), props.className)}>
    <Img src="/assets/images/avatar2.jpg" alt="person name" />
  </span>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let XSmall = props =>
  <Demo>
    <Avatar className={pf('avatar--x-small')} />
  </Demo>;

let Small = props =>
  <Demo>
    <Avatar className={pf('avatar--small')} />
  </Demo>;

let Medium = props =>
  <Demo>
    <Avatar className={pf('avatar--medium')} />
  </Demo>;

let Large = props =>
  <Demo>
    <Avatar className={pf('avatar--large')} />
  </Demo>;

let XSmallCircle = props =>
  <Demo>
    <Avatar className={pf('avatar--x-small avatar--circle')} />
  </Demo>;

let SmallCircle = props =>
  <Demo>
    <Avatar className={pf('avatar--small avatar--circle')} />
  </Demo>;

let MediumCircle = props =>
  <Demo>
    <Avatar className={pf('avatar--medium avatar--circle')} />
  </Demo>;

let LargeCircle = props =>
  <Demo>
    <Avatar className={pf('avatar--large avatar--circle')} />
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'avatar-default-x-small',
    label: 'Default - X Small',
    element: <XSmall />
  },
  {
    id: 'avatar-default-small',
    label: 'Default - Small',
    element: <Small />
  },
  {
    id: 'avatar-default-medium',
    label: 'Default - Medium',
    element: <Medium />
  },
  {
    id: 'avatar-default-large',
    label: 'Default - Large',
    element: <Large />
  },
  {
    id: 'avatar-circle-x-small',
    label: 'Circle - X Small',
    element: <XSmallCircle />
  },
  {
    id: 'avatar-circle-small',
    label: 'Circle - Small',
    element: <SmallCircle />
  },
  {
    id: 'avatar-circle-medium',
    label: 'Circle - Medium',
    element: <MediumCircle />
  },
  {
    id: 'avatar-circle-large',
    label: 'Circle - Large',
    element: <LargeCircle />
  }
];
