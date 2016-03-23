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

let UnorderedList = props =>
  <ul className={pf('list--horizontal wrap')}>
    {props.children}
  </ul>;

let ListItem = props =>
  <li className={className(pf('list__item m-right--large grid'), props.className)}>
    <span>To:</span>
    <span className={pf('m-left--xx-small truncate')}>{props.children}</span><span className={pf('no-flex')}> + 44 more</span>
  </li>;

const longestName = (
  <a href="#void">Lei Chan with Long Name that might go on for quite some distance futher than you might expect</a>
  );


///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
      <UnorderedList>
        <ListItem  className={pf('truncate_container--25')}>
          {longestName}
        </ListItem>
      </UnorderedList>
  </Demo>;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'max-width-25',
    label: '25%',
    element: <StateA />
  }
];
