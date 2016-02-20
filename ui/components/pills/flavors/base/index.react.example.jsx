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

let Pill = props =>
  <a href="#void" className={pf('pill')}>
    {props.children}
    <span className={pf('pill__label')}>{props.label || 'Pill Label'}</span>
    <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
  </a>;

let PillContainer = props =>
  <div className={pf('pill_container')}>
    {props.children}
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Pill />
  </Demo>;

let Icon = props =>
  <Demo>
    <Pill>
      <SvgIcon className={pf('icon icon-standard-account pill__icon')} sprite="standard" symbol="account" />
    </Pill>
  </Demo>;

let Portrait = props =>
  <Demo>
    <Pill>
      <span className={pf('pill__icon avatar avatar--circle')}>
        <Img src="/assets/images/avatar2.jpg" alt="" />
      </span>
    </Pill>
  </Demo>;

let Unlinked = props =>
  <Demo>
    <span className={pf('pill')}>
      <span className={pf('pill__label')}>Pill Label</span>
      <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
    </span>
  </Demo>;

let Container = props =>
  <Demo>
    <PillContainer>
      <Pill />
      <Pill />
      <Pill />
    </PillContainer>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'pill',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'pill-with-icon',
    label: 'With icon',
    element: <Icon />
  },
  {
    id: 'pill-with-portrait',
    label: 'With portrait',
    element: <Portrait />
  },
  {
    id: 'pill-unlinked',
    label: 'Unlinked',
    element: <Unlinked />
  },
  {
    id: 'pill-container',
    label: 'Pill with Container',
    element: <Container />
  }
];
