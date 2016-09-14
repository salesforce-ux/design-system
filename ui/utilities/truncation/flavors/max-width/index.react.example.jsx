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

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only">
    {props.children}
  </div>;

let ListItem = props =>
  <li className={className('slds-list__item slds-m-right--large slds-grid', props.className)}>
    <span>To:</span>
    <span className="slds-m-left--xx-small slds-truncate">{props.children}</span>
    <span className="slds-m-left--xx-small slds-no-flex"> + 44 more</span>
  </li>;

const longestName = (
  <a href="javascript:void(0);">Lei Chan with Long Name that might go on for quite some distance futher than you might expect</a>
);

const longName = (
  <a href="javascript:void(0);">Lei Chan with Long Name</a>
);

const shortName = (
  <a href="javascript:void(0);">Lei Chan</a>
);


///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <ul>
      <ListItem  className="slds-truncate_container--25">
        {shortName}
      </ListItem>
      <ListItem  className="slds-truncate_container--25">
        {longName}
      </ListItem>
      <ListItem  className="slds-truncate_container--25">
        {longestName}
      </ListItem>
    </ul>
  </Demo>;

let StateB = props =>
  <Demo>
    <ul>
      <ListItem  className="slds-truncate_container--33">
        {shortName}
      </ListItem>
      <ListItem  className="slds-truncate_container--33">
        {longName}
      </ListItem>
      <ListItem  className="slds-truncate_container--33">
        {longestName}
      </ListItem>
    </ul>
  </Demo>;

let StateC = props =>
  <Demo>
    <ul>
      <ListItem  className="slds-truncate_container--50">
        {shortName}
      </ListItem>
      <ListItem  className="slds-truncate_container--50">
        {longName}
      </ListItem>
      <ListItem  className="slds-truncate_container--50">
        {longestName}
      </ListItem>
    </ul>
  </Demo>;

let StateD = props =>
  <Demo>
    <ul>
      <ListItem  className="slds-truncate_container--66">
        {shortName}
      </ListItem>
      <ListItem  className="slds-truncate_container--66">
        {longName}
      </ListItem>
      <ListItem  className="slds-truncate_container--66">
        {longestName}
      </ListItem>
    </ul>
  </Demo>;

let StateE = props =>
  <Demo>
    <ul>
      <ListItem  className="slds-truncate_container--75">
        {shortName}
      </ListItem>
      <ListItem  className="slds-truncate_container--75">
        {longName}
      </ListItem>
      <ListItem  className="slds-truncate_container--75">
        {longestName}
      </ListItem>
    </ul>
  </Demo>;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'max-width-25',
    label: '25%',
    element: <StateA />
  },
  {
    id: 'max-width-33',
    label: '33%',
    element: <StateB />
  },
  {
    id: 'max-width-50',
    label: '50%',
    element: <StateC />
  },
  {
    id: 'max-width-66',
    label: '66%',
    element: <StateD />
  },
  {
    id: 'max-width-75',
    label: '75%',
    element: <StateE />
  }
];
