// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Comment = props => (
  <article
    className={classNames(
      'slds-comment slds-media slds-hint-parent',
      props.className
    )}
  >
    <div className="slds-media__figure">
      <a
        href="javascript:void(0);"
        className="slds-avatar slds-avatar_circle slds-avatar_medium"
      >
        <img
          alt="Jenna Davis"
          src="/assets/images/avatar2.jpg"
          title="Jenna Davis avatar"
        />
      </a>
    </div>
    <div className="slds-media__body">{props.children}</div>
  </article>
);

export let CommentHeader = props => (
  <header className="slds-media slds-media_center">
    <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
      <p className="slds-truncate" title="Jenna Davis">
        <a href="javascript:void(0);">Jenna Davis</a>
      </p>
      <ButtonIcon
        className="slds-button_icon-border slds-button_icon-x-small"
        aria-haspopup="true"
        symbol="down"
        assistiveText="More Options"
        title="More Options"
      />
    </div>
  </header>
);

export let CommentContent = props => (
  <div
    className={classNames(
      'slds-comment__content slds-text-longform',
      props.className
    )}
  >
    {props.children}
  </div>
);

export let CommentFooter = props => (
  <footer>
    <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
      <li className="slds-item">
        <button
          className="slds-button_reset slds-text-color_weak"
          title="Like this item"
          aria-pressed={!!props.liked}
        >
          {props.liked ? 'Liked' : 'Like'}
        </button>
      </li>
      {props.liked ? <li className="slds-item">1 Like</li> : null}
      <li className="slds-item">16hr Ago</li>
    </ul>
  </footer>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Comment>
    <CommentHeader />
    <CommentContent>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </CommentContent>
    <CommentFooter />
  </Comment>
);

export let states = [
  {
    id: 'comment-liked',
    label: 'Like',
    element: (
      <Comment>
        <CommentHeader />
        <CommentContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CommentContent>
        <CommentFooter liked />
      </Comment>
    )
  }
];
