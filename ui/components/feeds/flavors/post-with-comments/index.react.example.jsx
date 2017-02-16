// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import { Publisher } from 'ui/components/publishers/flavors/comment/index.react.example';
import { Post, PostHeader, PostContent, PostFooter, PostFooterActions, PostFooterMeta, Comments } from 'ui/components/feeds/flavors/post/index.react.example';
import { Comment, CommentHeader, CommentContent, CommentFooter } from 'ui/components/feeds/flavors/comment/index.react.example';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const CommentList = props =>
  <ul>
    {_.times(props.comments || 1, i =>
    <li key={`comment-${i}`}>
      <Comment>
        <CommentHeader />
        <CommentContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CommentContent>
        <CommentFooter />
      </Comment>
    </li>
    )}
  </ul>;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'post-with-comments',
    label: 'Default',
    element:
      <div className="demo-only">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
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
      </div>
  },
  {
    id: 'post-with-overflow',
    label: 'Overflow Bar',
    element:
      <div className="demo-only">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
          </PostContent>
          <PostFooter>
            <PostFooterActions />
            <PostFooterMeta comments="8" />
          </PostFooter>
        </Post>
        <Comments>
          <div className="slds-p-horizontal--medium slds-p-vertical--x-small slds-grid">
            <button className="slds-button--reset slds-text-link">More comments</button>
            <span className="slds-text-body--small slds-col--bump-left">1 of 8</span>
          </div>
          <CommentList />
          <Publisher />
        </Comments>
      </div>
  },
  {
    id: 'post-with-publisher-active',
    label: 'Publisher active',
    element:
      <div className="demo-only">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
          </PostContent>
          <PostFooter>
            <PostFooterActions />
            <PostFooterMeta comments="8" />
          </PostFooter>
        </Post>
        <Comments>
          <div className="slds-p-horizontal--medium slds-p-vertical--x-small slds-grid">
            <button className="slds-button--reset slds-text-link">More comments</button>
            <span className="slds-text-body--small slds-col--bump-left">1 of 8</span>
          </div>
          <CommentList />
          <Publisher className="slds-is-active slds-has-focus" />
        </Comments>
      </div>
  }
];
