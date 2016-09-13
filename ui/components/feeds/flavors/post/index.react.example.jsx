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

let ButtonIcon = props =>
  <button className={className('slds-button', props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    <SvgIcon className="slds-button__icon" sprite="utility" symbol={props.symbol} />
    <span className="slds-assistive-text">{props.assistiveText}</span>
  </button>;

export let PostFooterActions = props =>
  <ul className="slds-post__footer-actions-list slds-list--horizontal">
    <li className="slds-col slds-item slds-m-right--medium">
      <a href="javascript:void(0);" title="Like this item" className={className('slds-post__footer-action', props.liked ? 'slds-is-active' : null)}>
        <SvgIcon className="slds-icon slds-icon-text-default slds-icon--x-small slds-align-middle" sprite="utility" symbol="like" />
        { props.liked ? 'Liked' : 'Like' }
      </a>
    </li>
    <li className="slds-col slds-item slds-m-right--medium">
      <a href="javascript:void(0);" title="Comment on this item" className="slds-post__footer-action">
        <SvgIcon className="slds-icon slds-icon-text-default slds-icon--x-small slds-align-middle" sprite="utility" symbol="share_post" /> Comment
      </a>
    </li>
    <li className="slds-col slds-item slds-m-right--medium">
      <a href="javascript:void(0);" title="Share this item" className="slds-post__footer-action">
        <SvgIcon className="slds-icon slds-icon-text-default slds-icon--x-small slds-align-middle" sprite="utility" symbol="share" /> Share
      </a>
    </li>
  </ul>;

export let PostFooterMeta = props =>
  <ul className="slds-post__footer-meta-list slds-list--horizontal slds-has-dividers--right slds-text-title">
    { props.liked ? <li className="slds-item">1 likes</li> : null }
    { props.comments ? <li className="slds-item">{ props.comments || '0' } comments</li> : null }
    <li className="slds-item">20 shares</li>
    <li className="slds-item">259 views</li>
  </ul>;

export let PostHeader = props =>
  <header className="slds-post__header slds-media slds-media--center">
    <div className="slds-media__figure">
      <a href="javascript:void(0);" title="Jason Rodgers" className="slds-avatar slds-avatar--circle slds-avatar--large">
        <img src="/assets/images/avatar1.jpg" alt="Jason Rodgers" />
      </a>
    </div>
    <div className="slds-media__body">
      <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
        <p>
          <a href="javascript:void(0);" title="Jason Rodgers">Jason Rogers</a> — <a href="javascript:void(0);" title="Design Systems">Design Systems</a>
        </p>
        <ButtonIcon className="slds-button--icon-border slds-button--icon-x-small" hasPopup="true" symbol="down" assistiveText="More Options" />
      </div>
      <p className="slds-text-body--small">
        <a href="javascript:void(0);" title="Click for single-item view of this post" className="slds-text-link--reset">5 days Ago</a>
      </p>
    </div>
  </header>;

export let PostContent = props =>
  <div className={className('slds-post__content slds-text-longform', props.className)}>
    { props.children }
  </div>;

export let PostFooter = props =>
  <footer className={className('slds-post__footer', props.className)}>
    { props.children }
  </footer>;

export let Post = props =>
  <article className={className('slds-post', props.className)}>
    { props.children }
  </article>;

export let Comments = props =>
  <div className="slds-feed__item-comments">
    { props.children }
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'post',
    label: 'Default',
    element:
      <Post>
        <PostHeader />
        <PostContent>
          <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
        </PostContent>
        <PostFooter>
          <PostFooterActions />
          <PostFooterMeta />
        </PostFooter>
      </Post>
  },
  {
    id: 'post-with-liker-bar',
    label: 'Like',
    element:
      <div className="demo-only">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
          </PostContent>
          <PostFooter>
            <PostFooterActions liked />
            <PostFooterMeta liked />
          </PostFooter>
        </Post>
        <Comments>
          <div className="slds-p-horizontal--medium slds-p-vertical--x-small">
            <a href="javascript:void(0);">You</a> liked this post
          </div>
        </Comments>
      </div>
  }
];
