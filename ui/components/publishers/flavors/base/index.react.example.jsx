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
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const image = (
  <a className="slds-avatar slds-avatar--circle slds-avatar--small" href="javascript:void(0);">
    <img
      alt="Jenna Davis"
      src="/assets/images/avatar2.jpg"
      title="Jenna Davis avatar"
    />
  </a>
);

let Publisher = props =>
  <div className={classNames('slds-publisher', props.className)}>
    <label htmlFor="comment-text-input2" className="slds-publisher__toggle-visibility slds-m-bottom--small"><span className="slds-assistive-text">Write a comment</span>To: My followers</label>
    <textarea id="comment-text-input2" className="slds-publisher__input slds-textarea slds-text-longform" placeholder="Write a comment&hellip;" />
    {props.children}
  </div>;

let PublisherActions = props =>
  <div className="slds-publisher__actions slds-grid slds-grid--align-spread">
    <ul className="slds-grid slds-publisher__toggle-visibility">
      <li>
        <ButtonIcon className="slds-button--icon-container" symbol="adduser" assistiveText="Add User" title="Add User" />
      </li>
      <li>
        <ButtonIcon className="slds-button--icon-container" symbol="attach" assistiveText="Attach a file" title="Attach a file" />
      </li>
    </ul>
    <button className="slds-button slds-button--brand">Share</button>
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Publisher>
    <PublisherActions />
  </Publisher>
);

export let states = [
  {
    id: 'publisher-feed-default',
    label: 'Default',
    element:
    <Publisher>
      <PublisherActions />
    </Publisher>
  },
  {
    id: 'publisher-feed-active',
    label: 'Active',
    element:
    <Publisher className="slds-is-active">
      <PublisherActions />
    </Publisher>
  }
];
