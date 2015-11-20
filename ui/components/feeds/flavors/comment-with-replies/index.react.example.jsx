/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Button = require('ui/components/buttons/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const MediaObject = require('ui/components/media-objects/index.react');
const Comment = require('ui/components/feeds/flavors/comment-base/index.react.example');
const CommentMinimal = require('ui/components/feeds/flavors/comment-minimal/index.react.example');
const CommentPublisher = require('ui/components/publishers/flavors/comment/index.react.example');

import Img from 'app_modules/ui/img';
import { prefix as pf } from 'app_modules/ui/util/component';

const image = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <a href="javascript:void(0)" title="Jenna Davis">
      <Img src={`/assets/images/avatar2.jpg`} alt='Jenna Davis'/>
    </a>
  </div>
);

const icon = (
  <span className={pf('icon__container')}>
    <SvgIcon className={pf('icon icon--small')} sprite="doctype" symbol="ppt" />
    <span className={pf('assistive-text')}>Powerpoint</span>
  </span>
);

module.exports = (
<div className='demo-only'>
  {Comment}
  {/* Comment Replies */}
  <ul className={pf('comment__replies')}>
    <li>
      {CommentMinimal}
    </li>
    <li>
      <MediaObject figureLeft={image} className={pf('comment hint-parent')}>
        <div className={pf('publisher publisher--comment')}>
          <textarea className={pf('publisher__input input--bare text-longform')} placeholder="Write a comment&hellip;" />
          <div className={pf('attachments')}></div>
          <div className={pf('publisher__actions grid grid--align-spread')}>
            <ul className={pf('grid')}>
              <li>
                <ButtonIcon
                  flavor="icon-container"
                  sprite="utility"
                  symbol="adduser"
                  assistiveText="Add User" />
              </li>
              <li>
                <ButtonIcon
                  flavor="icon-container"
                  sprite="utility"
                  symbol="attach"
                  assistiveText="Attach a file" />
              </li>
            </ul>
            <Button flavor="brand">Comment</Button>
          </div>
        </div>
      </MediaObject>
    </li>
  </ul>
</div>
);
