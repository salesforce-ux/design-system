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
import className from 'classnames';
import { Publisher } from 'ui/components/publishers/flavors/comment/index.react.example';
import { Post, PostHeader, PostContent, PostFooter, PostFooterActions, PostFooterMeta, Comments } from 'ui/components/feeds/flavors/post/index.react.example';
import { Comment, CommentHeader, CommentContent, CommentFooter } from 'ui/components/feeds/flavors/comment/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';
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
            <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
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
          <div className={pf('p-horizontal--medium p-vertical--x-small grid')}>
            <a href="javascript:void(0);">More comments</a>
            <span className={pf('text-body--small col--bump-left')}>1 of 8</span>
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
          <div className={pf('p-horizontal--medium p-vertical--x-small grid')}>
            <a href="javascript:void(0);">More comments</a>
            <span className={pf('text-body--small col--bump-left')}>1 of 8</span>
          </div>
          <CommentList />
          <Publisher className={pf('is-active has-focus')} />
        </Comments>
      </div>
  }
];
