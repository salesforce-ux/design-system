// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const image = (
  <a className="slds-avatar slds-avatar--circle slds-avatar--medium" href="javascript:void(0);">
    <img
      alt="Person name"
      src="/assets/images/avatar2.jpg"
      title="User avatar"
    />
  </a>
);

export let Publisher = props =>
  <MediaObject figureLeft={image} className="slds-comment slds-hint-parent">
    <div className={classNames('slds-publisher slds-publisher--comment', props.className)}>
      <label htmlFor="comment-text-input-01" className="slds-assistive-text">Write a comment</label>
      <textarea id="comment-text-input-01" className="slds-publisher__input slds-input--bare slds-text-longform" placeholder="Write a comment&hellip;" />
      <div className="slds-publisher__actions slds-grid slds-grid--align-spread">
        <ul className="slds-grid">
          <li>
            <ButtonIcon className="slds-button--icon-container" symbol="adduser" assistiveText="Add User" title="Add User" />
          </li>
          <li>
            <ButtonIcon className="slds-button--icon-container" symbol="attach" assistiveText="Attach a file" title="Attach a file" />
          </li>
        </ul>
        <button className="slds-button slds-button--brand">Comment</button>
      </div>
    </div>
  </MediaObject>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

// @todo - Need to find imports and delete this part

export let Default = props =>
  <Publisher />;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Publisher />
);

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
