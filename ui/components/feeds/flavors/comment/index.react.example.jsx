/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import MediaObject from 'ui/utilities/media-objects/index.react';
import className from 'classnames';
import { Button } from 'ui/components/buttons/flavors/base/index.react.example';
import { Default as Publisher } from 'ui/components/publishers/flavors/comment/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

// Export used in discussion feeds
export let Comment = props =>
  <article className={pf('media comment hint-parent')}>
    <div className={pf('media__figure')}>
      {MediumAvatar}
    </div>
    <div className={pf('media__body')}>
      <div className={pf('grid grid--align-spread has-flexi-truncate')}>
        <p className={pf('truncate')}>
          <a href="javascript:void(0);" title="Design Systems">Design Systems</a> - <a href="javascript:void(0);" title="Jason Rodgers">Jason Rogers</a>
        </p>
        <ButtonIcon
          className={pf('shrink-none')}
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </div>
      <p className={pf('text-body--small')}>
        <a href="javascript:void(0);" title="Click for single-item view of this post">18hr Ago</a>
      </p>
      {props.children}
    </div>
  </article>;

let CommentMinimal = props =>
  <article className={pf('media comment hint-parent')}>
    <div className={pf('media__figure')}>
      {SmallAvatar}
    </div>
    <div className={pf('media__body')}>
      <div className={pf('grid grid--align-spread has-flexi-truncate')}>
        <p className={pf('truncate')}>
          <a href="javascript:void(0);" title="Jenna Davis">Jenna Davis</a> - <span className={pf('text-body--small')}>16hr Ago</span>
        </p>
        <ButtonIcon
          className={pf('shrink-none')}
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </div>
      {props.children}
    </div>
  </article>;

// Export used in discussion feeds
export let CommentLongform = props =>
  <div className={pf('comment__content text-longform')}>
    {props.children}
  </div>;

let CommentEntityTags = props =>
  <div className={pf('tags text-body--small p-bottom--x-small')}>
    <span>Topics:</span>
    <ul className={pf('tags__list')}>
      <li className={pf('tags__item')}><a href="javascript:void(0);" title="Powerpoint">Powerpoint</a></li>
      <li className={pf('tags__item')}><a href="javascript:void(0);" title="Sales Presentation">Sales Presentation</a></li>
      <li className={pf('tags__item')}><a href="javascript:void(0);" title="Todo">Todo</a></li>
      <li className={pf('tags__item')}>and <a href="javascript:void(0);" title="Show the remaining topics">3 more</a></li>
    </ul>
  </div>;

// Export used in discussion feeds
export let CommentFooter = props =>
  <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
    <li className={pf('item')}>
      <a href="javascript:void(0);" title="Like this item">
        { props.showLikeButton ? LikeButton : null }Like
      </a>
    </li>
    <li className={pf('item')}>{props.likes} Likes</li>
  </ul>;

// Export used within publisher
export let Attachments = props =>
  <div className={pf('attachments')}>
    <div className={pf('attachments__item box box--x-small theme--shade')}>
      <div className={pf('grid grid--align-spread')}>
        <MediaObject figureLeft={SmallIcon}>
          <a href="javascript:void(0);" title="filename.ppt">filename.ppt</a>
        </MediaObject>
        <ButtonIcon
          flavor="icon-bare"
          sprite="utility"
          symbol="close"
          assistiveText="Remove this attachment" />
      </div>
    </div>
  </div>;

const MediumAvatar = (
  <div className={pf('avatar avatar--circle avatar--medium')}>
    <a href="javascript:void(0);" title="Jason Rodgers">
      <img src="/assets/images/avatar1.jpg" alt="Jason Rodgers" />
    </a>
  </div>
);

const SmallAvatar = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <a href="javascript:void(0);" title="Jenna Davis">
      <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
    </a>
  </div>
);

const SmallIcon = (
  <span className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon--small')} sprite="doctype" symbol="ppt" />
    <span className={pf('assistive-text')}>Powerpoint</span>
  </span>
);

const LikeButton = (
  <ButtonIcon
    flavor="icon-border,icon-small"
    className="m-right--small"
    sprite="utility"
    symbol="like"
    assistiveText="Like" />
);

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Comment>
    <CommentLongform>
      <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
    </CommentLongform>
    <CommentEntityTags />
    <CommentFooter showLikeButton likes="21" />
  </Comment>;

let Minimal = props =>
  <CommentMinimal>
    <CommentLongform>
      <p><a href="javascript:void(0);" title="Jason Rodgers">@Jason Rodgers</a> I left you some feedback!</p>
    </CommentLongform>
    <CommentFooter likes="21" />
  </CommentMinimal>;

let WithAttachment = props =>
  <Comment>
    <CommentLongform>
      <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
    </CommentLongform>
    <Attachments />
    <CommentEntityTags />
    <CommentFooter showLikeButton likes="21" />
  </Comment>;

let WithPublisher = props =>
  <Demo>
    <Comment>
      <CommentLongform>
        <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
      </CommentLongform>
      <CommentEntityTags />
      <CommentFooter showLikeButton likes="21" />
    </Comment>
    <ul className={pf('comment__replies')}>
      <li>
        <Publisher />
      </li>
    </ul>
  </Demo>;

let WithReplies = props =>
  <Demo>
    <Comment>
      <CommentLongform>
        <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
      </CommentLongform>
      <CommentEntityTags />
      <CommentFooter showLikeButton likes="21" />
    </Comment>
    <ul className={pf('comment__replies')}>
      <li>
        <CommentMinimal>
          <CommentLongform>
            <p><a href="javascript:void(0);" title="Jason Rodgers">@Jason Rodgers</a> I left you some feedback!</p>
          </CommentLongform>
          <CommentFooter likes="13" />
        </CommentMinimal>
      </li>
      <li>
        <Publisher />
      </li>
    </ul>
  </Demo>;

let WithOverflow = props =>
  <Demo>
    <Comment>
      <CommentLongform>
        <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
      </CommentLongform>
      <CommentEntityTags />
      <CommentFooter showLikeButton likes="21" />
    </Comment>
    <ul className={pf('comment__replies')}>
      <li className={pf('comment__overflow')}>
        <Button className={pf('button--neutral')}>3 more comments</Button>
      </li>
      <li>
        <CommentMinimal>
          <CommentLongform>
            <p><a href="javascript:void(0);" title="Jason Rodgers">@Jason Rodgers</a> I left you some feedback!</p>
          </CommentLongform>
          <CommentFooter likes="13" />
        </CommentMinimal>
      </li>
      <li>
        <Publisher />
      </li>
    </ul>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'comment',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'comment-minimal',
    label: 'Minimal',
    element: <Minimal />
  },
  {
    id: 'comment-with-attachment',
    label: 'With attachment',
    element: <WithAttachment />
  },
  {
    id: 'comment-with-publisher',
    label: 'With publisher',
    element: <WithPublisher />
  },
  {
    id: 'comment-with-replies',
    label: 'With replies',
    element: <WithReplies />
  },
  {
    id: 'comment-with-overflow',
    label: 'With overflow',
    element: <WithOverflow />
  }
];
