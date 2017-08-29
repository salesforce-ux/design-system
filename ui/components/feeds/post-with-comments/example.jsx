// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { Publisher } from '../../publishers/comment/example';
import {
  Post,
  PostHeader,
  PostContent,
  PostFooter,
  PostFooterActions,
  PostFooterMeta,
  Comments
} from '../post/example';
import {
  Comment,
  CommentHeader,
  CommentContent,
  CommentFooter
} from '../comment/example';
import _ from '../../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const CommentList = props => (
  <ul>
    {_.times(props.comments || 1, i => (
      <li key={`comment-${i}`}>
        <Comment>
          <CommentHeader />
          <CommentContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CommentContent>
          <CommentFooter />
        </Comment>
      </li>
    ))}
  </ul>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////
export default (
  <div className="slds-feed">
    <ul className="slds-feed__list">
      <li className="slds-feed__item">
        <Post>
          <PostHeader />
          <PostContent>
            <p>
              Hey there! Here's the latest demo presentation{' '}
              <a href="javascript:void(0);" title="Jenna Davis">
                @Jenna Davis
              </a>, let me know if there are any changes. I've updated slides
              3-8 and slides 16-18 slides with new product shots.
            </p>
          </PostContent>
          <PostFooter>
            <PostFooterActions />
            <PostFooterMeta comments="2" />
          </PostFooter>
        </Post>
        <Comments>
          <CommentList comments="2" />
          <Publisher />
        </Comments>
      </li>
    </ul>
  </div>
);

export let states = [
  {
    id: 'post-with-overflow',
    label: 'Overflow Bar',
    element: (
      <div className="slds-feed">
        <ul className="slds-feed__list">
          <li className="slds-feed__item">
            <Post>
              <PostHeader />
              <PostContent>
                <p>
                  Here's the latest demo presentation{' '}
                  <a href="javascript:void(0);" title="Jenna Davis">
                    @Jenna Davis
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
                </p>
              </PostContent>
              <PostFooter>
                <PostFooterActions />
                <PostFooterMeta comments="8" />
              </PostFooter>
            </Post>
            <Comments>
              <div className="slds-p-horizontal_medium slds-p-vertical_x-small slds-grid">
                <button className="slds-button_reset slds-text-link">
                  More comments
                </button>
                <span className="slds-text-body_small slds-col_bump-left">
                  1 of 8
                </span>
              </div>
              <CommentList />
              <Publisher />
            </Comments>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'post-with-publisher-active',
    label: 'Publisher active',
    element: (
      <div className="slds-feed">
        <ul className="slds-feed__list">
          <li className="slds-feed__item">
            <Post>
              <PostHeader />
              <PostContent>
                <p>
                  Here's the latest demo presentation{' '}
                  <a href="javascript:void(0);" title="Jenna Davis">
                    @Jenna Davis
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
                </p>
              </PostContent>
              <PostFooter>
                <PostFooterActions />
                <PostFooterMeta comments="8" />
              </PostFooter>
            </Post>
            <Comments>
              <div className="slds-p-horizontal_medium slds-p-vertical_x-small slds-grid">
                <button className="slds-button_reset slds-text-link">
                  More comments
                </button>
                <span className="slds-text-body_small slds-col_bump-left">
                  1 of 8
                </span>
              </div>
              <CommentList />
              <Publisher className="slds-is-active slds-has-focus" />
            </Comments>
          </li>
        </ul>
      </div>
    )
  }
];
