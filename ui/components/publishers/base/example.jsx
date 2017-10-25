// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const image = (
  <a
    className="slds-avatar slds-avatar_circle slds-avatar_small"
    href="javascript:void(0);"
  >
    <img
      alt="Jenna Davis"
      src="/assets/images/avatar2.jpg"
      title="Jenna Davis avatar"
    />
  </a>
);

let Publisher = props => (
  <div className={classNames('slds-publisher', props.className)}>
    <label
      htmlFor="comment-text-input2"
      className="slds-publisher__toggle-visibility slds-m-bottom_small"
    >
      <span className="slds-assistive-text">Write a comment</span>To: My
      followers
    </label>
    <textarea
      id="comment-text-input2"
      className="slds-publisher__input slds-textarea slds-text-longform"
      placeholder="Write a comment&hellip;"
    />
    {props.children}
  </div>
);

let PublisherActions = props => (
  <div className="slds-publisher__actions slds-grid slds-grid_align-spread">
    <ul className="slds-grid slds-publisher__toggle-visibility">
      <li>
        <ButtonIcon
          className="slds-button_icon-container"
          symbol="adduser"
          assistiveText="Add User"
          title="Add User"
        />
      </li>
      <li>
        <ButtonIcon
          className="slds-button_icon-container"
          symbol="attach"
          assistiveText="Attach a file"
          title="Attach a file"
        />
      </li>
    </ul>
    <button className="slds-button slds-button_brand">Share</button>
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Publisher>
    <PublisherActions />
  </Publisher>
);
