/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const image = (
  <a className="slds-avatar slds-avatar--circle slds-avatar--medium" href="javascript:void(0);" title="Jenna Davis">
    <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
  </a>
);

export let Publisher = props =>
  <MediaObject figureLeft={image} className="slds-comment slds-hint-parent">
    <div className={className('slds-publisher slds-publisher--comment', props.className)}>
      <label htmlFor="comment-text-input-01" className="slds-assistive-text">Write a comment</label>
      <textarea id="comment-text-input-01" className="slds-publisher__input slds-input--bare slds-text-longform" placeholder="Write a comment&hellip;" />
      <div className="slds-publisher__actions slds-grid slds-grid--align-spread">
        <ul className="slds-grid">
          <li>
            <ButtonIcon className="slds-button--icon-container" symbol="adduser" assistiveText="Add User" />
          </li>
          <li>
            <ButtonIcon className="slds-button--icon-container" symbol="attach" assistiveText="Attach a file" />
          </li>
        </ul>
        <Button className="slds-button slds-button--brand">Comment</Button>
      </div>
    </div>
  </MediaObject>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

// @todo - Need to find imports and delete this part

export let Default = props =>
  <Publisher />;

let Active = props =>
  <Publisher className="slds-is-active" />;

let ActiveFocus = props =>
  <Publisher className="slds-is-active slds-has-focus" />;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'publisher-comment-default',
    label: 'Default',
    element: <Publisher />
  },
  {
    id: 'publisher-comment-active',
    label: 'Active',
    element: <Publisher className="slds-is-active" />
  },
  {
    id: 'publisher-comment-active-focus',
    label: 'Focused',
    element: <Publisher className="slds-is-active slds-has-focus" />
  }
];
