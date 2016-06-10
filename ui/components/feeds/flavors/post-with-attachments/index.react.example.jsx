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
import { Post, PostHeader, PostContent, PostFooter, PostFooterActions, PostFooterMeta, Comments } from 'ui/components/feeds/flavors/post/index.react.example';
import { Image } from 'ui/components/images/flavors/figure/index.react.example';
import { AttachmentLink } from 'ui/components/files/flavors/attachment/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'post-attachment-link',
    label: 'Link',
    element:
      <Post>
        <PostHeader />
        <PostContent>
          <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
        </PostContent>
        <div className={pf('post__payload')}>
          <AttachmentLink
            articleTitle="Maui By Air The Best Way Around The Island"
            articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
        </div>
        <PostFooter>
          <PostFooterActions />
          <PostFooterMeta />
        </PostFooter>
      </Post>
  },
  {
    id: 'post-attachment-files',
    label: 'Files(s)',
    element:
      <Post>
        <PostHeader />
        <PostContent>
          <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
        </PostContent>
        <div className={pf('post__payload')}>
          <ul className={pf('grid grid--pull-padded')}>
            <li className={pf('col--padded grow-none size--1-of-2 medium-size--1-of-3')}>
              <a href="javascript:void(0);" className={pf('text-link--reset')}>
                <Image
                  className={pf('image--card')}
                  cropClass={pf('image__crop--16-by-9')}
                  titleClass={pf('image__title--card')}
                  symbol="image"
                  image />
              </a>
            </li>
            <li className={pf('col--padded grow-none size--1-of-2 medium-size--1-of-3')}>
              <a href="javascript:void(0);" className={pf('text-link--reset')}>
                <Image
                  className={pf('image--card')}
                  cropClass={pf('image__crop--16-by-9')}
                  titleClass={pf('image__title--card')}
                  symbol="pdf" />
              </a>
            </li>
            <li className={pf('col--padded grow-none size--1-of-2 medium-size--1-of-3 medium-show')}>
              <a href="javascript:void(0);" className={pf('text-link--reset')}>
                <Image
                  className={pf('image--card')}
                  cropClass={pf('image__crop--16-by-9')}
                  titleClass={pf('image__title--overlay align--absolute-center text-heading--large')}
                  title="22+"
                  image />
              </a>
            </li>
          </ul>
        </div>
        <PostFooter>
          <PostFooterActions />
          <PostFooterMeta />
        </PostFooter>
      </Post>
  }
];
