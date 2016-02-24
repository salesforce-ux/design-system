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

let Button = props =>
  <button className={className(pf('button button--icon'), props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    {props.children}
    <span className={pf('assistive-text')}>{props.assistiveText}</span>
  </button>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Button assistiveText="Settings">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
    </Button>
  </Demo>;

let Disabled = props =>
  <Demo>
    <Button assistiveText="Settings" disabled>
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
    </Button>
  </Demo>;

let Container = props =>
  <Demo style={{ padding: '0.5rem', background: '#F4F6F9' }}>
    <Button className={pf('button--icon-container')} assistiveText="Settings">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
    </Button>
  </Demo>;

let ContainerBorder = props =>
  <Demo style={{ padding: '0.5rem', background: '#F4F6F9' }}>
    <Button className={pf('button--icon-border')} assistiveText="Settings">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
    </Button>
  </Demo>;

let FilledContainerBorder = props =>
  <Demo style={{ padding: '0.5rem', background: '#F4F6F9' }}>
    <Button className={pf('button--icon-border-filled')} assistiveText="Settings">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
    </Button>
  </Demo>;

let ContainerBorderSmall = props =>
  <Demo style={{ padding: '0.5rem', background: '#F4F6F9' }}>
    <Button className={pf('button--icon-border button--icon-small')} assistiveText="Settings">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
    </Button>
  </Demo>;

let ContainerBorderXSmall = props =>
  <Demo style={{ padding: '0.5rem', background: '#F4F6F9' }}>
    <Button className={pf('button--icon-border button--icon-x-small')} assistiveText="More Options">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="down" />
    </Button>
  </Demo>;

let IconXSmall = props =>
  <Demo>
    <Button assistiveText="More Options">
      <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
    </Button>
  </Demo>;

let IconSmall = props =>
  <Demo>
    <Button assistiveText="More Options">
      <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
    </Button>
  </Demo>;

let IconDefault = props =>
  <Demo>
    <Button assistiveText="Close">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="close" />
    </Button>
  </Demo>;

let IconLarge = props =>
  <Demo>
    <Button assistiveText="Close">
      <SvgIcon className={pf('button__icon button__icon--large')} sprite="utility" symbol="close" />
    </Button>
  </Demo>;

let IconMore = props =>
  <Demo>
    <Button className={pf('button--icon-more')} assistiveText="Settings" hasPopup="true">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
      <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
    </Button>
  </Demo>;

let Inverse = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <Button className={pf('button--icon-inverse')} assistiveText="Close">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="close" />
    </Button>
  </Demo>;

let InverseDisabled = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <Button className={pf('button--icon-inverse')} assistiveText="Close" disabled>
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="close" />
    </Button>
  </Demo>;

let IconHint = props =>
  <Demo style={{ padding: '0.5rem', background: '#F4F6F9' }}>
    <div className={pf('hint-parent')}>
      <Button className={pf('button--icon-border button--icon-x-small')} assistiveText="More Options">
        <SvgIcon className={pf('button__icon button__icon--hint')} sprite="utility" symbol="down" />
      </Button>
    </div>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-icon',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'button-icon-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'button-icon-inverse',
    label: 'Icon inversed',
    element: <Inverse />
  },
  {
    id: 'button-icon-inverse-disabled',
    label: 'Icon inversed disabled',
    element: <InverseDisabled />
  },
  {
    id: 'button-icon-container',
    label: 'Container with no border',
    element: <Container />
  },
  {
    id: 'button-icon-border-filled',
    label: 'Container filled',
    element: <FilledContainerBorder />
  },
  {
    id: 'button-icon-border',
    label: 'Container transparent',
    element: <ContainerBorder />
  },
  {
    id: 'button-icon-border-small',
    label: 'Container small',
    element: <ContainerBorderSmall />
  },
  {
    id: 'button-icon-border-x-small',
    label: 'Container x-small',
    element: <ContainerBorderXSmall />
  },
  {
    id: 'button-icon-size-large',
    label: 'Icon size large',
    element: <IconLarge />
  },
  {
    id: 'button-icon-size-default',
    label: 'Icon size default',
    element: <IconDefault />
  },
  {
    id: 'button-icon-size-small',
    label: 'Icon size small',
    element: <IconSmall />
  },
  {
    id: 'button-icon-size-x-small',
    label: 'Icon size x-small',
    element: <IconXSmall />
  },
  {
    id: 'button-icon-more',
    label: 'Icon with dropdown',
    element: <IconMore />
  },
  {
    id: 'button-icon-hint',
    label: 'Icon with hint hover',
    element: <IconHint />
  }
];
