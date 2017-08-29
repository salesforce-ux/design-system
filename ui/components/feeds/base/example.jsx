// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
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
            <PostFooterMeta />
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
          <ul>
            <li>
              <Comment>
                <CommentHeader />
                <CommentContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CommentContent>
                <CommentFooter />
              </Comment>
            </li>
          </ul>
        </Comments>
      </li>
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
            <PostFooterMeta />
          </PostFooter>
        </Post>
      </li>
    </ul>
  </div>
);
