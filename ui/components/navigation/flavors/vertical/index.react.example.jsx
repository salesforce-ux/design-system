/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Navigation = props =>
  <div className={pf('grid grid--vertical')}>
    {props.children}
  </div>;

let SectionTitle = props =>
  <h2 className={pf('text-heading--label p-around--small')} id={props.id}>
    {props.children}
  </h2>;

let List = props =>
  <ul className={pf('navigation-list--vertical has-block-links--space')} {...props}>
    {props.children}
  </ul>;

let Item = props =>
  <li className={pf(props.className)}>
    <a href="javascript:void(0);" className={pf('navigation-list--vertical__action text-link--reset')} aria-describedby={props.id}>
      {props.children}
    </a>
  </li>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

export default (
  <Demo>
    <Navigation>
      <SectionTitle id="entity-header">Reports</SectionTitle>
      <List>
        <Item id="entity-header" className={pf('is-active')}>Recent</Item>
        <Item id="entity-header">Created by Me</Item>
        <Item id="entity-header">Private Reports</Item>
        <Item id="entity-header">Public Reports</Item>
        <Item id="entity-header">All Reports</Item>
      </List>
      <SectionTitle id="folder-header">Folders</SectionTitle>
      <List>
        <Item id="folder-header">Created by Me</Item>
        <Item id="folder-header">Shared with Me</Item>
        <Item id="folder-header">All Reports</Item>
      </List>
    </Navigation>
  </Demo>
);

///////////////////////////////////////////
// Export
///////////////////////////////////////////
