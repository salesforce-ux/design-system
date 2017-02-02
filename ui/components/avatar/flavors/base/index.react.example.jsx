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
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Avatar = props =>
  <span className={classNames('slds-avatar', props.className)}>
    { props.children }
  </span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Avatar>
    <img
      alt="Person name"
      src="/assets/images/avatar2.jpg"
      title="User avatar"
    />
  </Avatar>
);

export let states = [
  {
    id: 'avatar-square',
    label: 'Square',
    element:
      <Avatar className="slds-avatar--medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'avatar-circle',
    label: 'Circle',
    element:
      <Avatar className="slds-avatar--circle slds-avatar--medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'avatar-square-initials',
    label: 'Square Initials',
    element:
      <Avatar className="slds-avatar--medium">
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  },
  {
    id: 'avatar-circle-initials',
    label: 'Circle Initials',
    element:
      <Avatar className="slds-avatar--circle slds-avatar--medium">
        <abbr className="slds-avatar__initials slds-icon-standard-contact" title="person name">AB</abbr>
      </Avatar>
  },
  {
    id: 'size-x-small',
    label: 'Size - X Small',
    element:
      <Avatar className="slds-avatar--x-small">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element:
      <Avatar className="slds-avatar--small">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element:
      <Avatar className="slds-avatar--medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element:
      <Avatar className="slds-avatar--large">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  }
];
