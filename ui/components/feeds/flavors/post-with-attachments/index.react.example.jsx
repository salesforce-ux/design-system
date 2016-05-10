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
import { Default as Publisher } from 'ui/components/publishers/flavors/comment/index.react.example';
import { Post, PostHeader, PostContent, PostFooter, Comments } from 'ui/components/feeds/flavors/post/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';


let PostAttachments = props =>
  <div className={pf('post__payload')}>
    { props.type == 'link' ? <PostAttachmentLink /> : null }
    { props.type == 'files' ? <PostAttachmentFiles /> : null }
  </div>;

let PostAttachmentLink = props =>
  <a href="#void" className={pf('media box grow text-link--reset')}>
    <div className={pf('media__figure medium-show')}>
      <div className={pf('image size--small')}>
        <div className={pf('image__crop image__crop--16-by-9')}>
          <img src="/assets/images/placeholder-img@16x9.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className={pf('media__body')}>
      <h3 className={pf('text-heading--small')}>Maui By Air The Best Way Around The Island</h3>
      <span className={pf('text-body--small')}>http://www.linkurl.com</span>
      <p>Many conventional colleges and universities are now offering online DVD repair course, which are the exact...</p>
    </div>
  </a>;

let PostAttachmentFiles = props =>
  <ul className={pf('grid grid--pull-padded')}>
    <li className={pf('col--padded grow-none size--1-of-2 medium-size--1-of-3')}>
      <a href="#void" className={pf('post__attachments-item-action')}>
        <figure className={pf('image image--card')}>
          <div className={pf('image__crop image__crop--16-by-9')}>
            <img src="/assets/images/placeholder-img@16x9.jpg" alt="" />
          </div>
          <figcaption className={pf('image__title')}>Service Case Study.ppt</figcaption>
        </figure>
      </a>
    </li>
    <li className={pf('col--padded grow-none size--1-of-2 medium-size--1-of-3')}>
      <a href="#void" className={pf('post__attachments-item-action')}>
        <figure className={pf('image image--card')}>
          <div className={pf('image__crop image__crop--16-by-9')}>
            <img src="/assets/images/placeholder-img@16x9.jpg" alt="" />
          </div>
          <figcaption className={pf('image__title')}>Ride Along Accounts.xls</figcaption>
        </figure>
      </a>
    </li>
    <li className={pf('col--padded grow-none size--1-of-2 medium-size--1-of-3 medium-show')}>
      <a href="#void" className={pf('post__attachments-item-action')}>
        <div className={pf('image')}>
          <div className={pf('image__crop image__crop--16-by-9')}>
            <img src="/assets/images/placeholder-img@16x9.jpg" alt="" />
          </div>
          <div className={pf('image__title image__title--overlay align--absolute-center text-heading--large')}>22+</div>
        </div>
      </a>
    </li>
  </ul>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'post-attachment-link',
    label: 'Link',
    element:
      <div className="demo-only" style={{ maxWidth: '800px' }}>
        <div className={pf('feed__item feed__item--card')}>
          <Post className={pf('post--card')}>
            <PostHeader />
            <PostContent>
              <p>Here's the latest demo presentation <a href="#void" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            </PostContent>
            <PostAttachments type="link" />
            <PostFooter />
          </Post>
          <Comments />
        </div>
      </div>
  },
  {
    id: 'post-attachment-files',
    label: 'Files(s)',
    element:
      <div className="demo-only" style={{ maxWidth: '800px' }}>
        <div className={pf('feed__item feed__item--card')}>
          <Post className={pf('post--card')}>
            <PostHeader />
            <PostContent>
              <p>Here's the latest demo presentation <a href="#void" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            </PostContent>
            <PostAttachments type="files" />
            <PostFooter />
          </Post>
          <Comments />
        </div>
      </div>
  }
];
