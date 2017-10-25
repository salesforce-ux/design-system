// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { File } from '../../files/base/example';
import { AttachmentLink } from '../../files/base/example';
import { Publisher } from '../../publishers/comment/example';
import {
  Comment,
  CommentHeader,
  CommentContent,
  CommentFooter
} from '../comment/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

export let PostFooterActions = props => (
  <ul className="slds-post__footer-actions-list slds-list_horizontal">
    <li className="slds-col slds-item slds-m-right_medium">
      <button
        title="Like this item"
        className={classNames(
          'slds-button_reset slds-post__footer-action',
          props.liked ? 'slds-is-active' : null
        )}
        aria-pressed={!!props.liked}
      >
        <SvgIcon
          className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
          sprite="utility"
          symbol="like"
        />
        {props.liked ? 'Liked' : 'Like'}
      </button>
    </li>
    <li className="slds-col slds-item slds-m-right_medium">
      <button
        title="Comment on this item"
        className="slds-button_reset slds-post__footer-action"
      >
        <SvgIcon
          className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
          sprite="utility"
          symbol="share_post"
        />{' '}
        Comment
      </button>
    </li>
    <li className="slds-col slds-item slds-m-right_medium">
      <button
        title="Share this item"
        className="slds-button_reset slds-post__footer-action"
      >
        <SvgIcon
          className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
          sprite="utility"
          symbol="share"
        />{' '}
        Share
      </button>
    </li>
  </ul>
);

export let PostFooterMeta = props => (
  <ul className="slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title">
    {props.comments ? (
      <li className="slds-item">{props.comments || '0'} comments</li>
    ) : null}
    <li className="slds-item">20 shares</li>
    <li className="slds-item">259 views</li>
  </ul>
);

export let PostHeader = props => (
  <header className="slds-post__header slds-media">
    <div className="slds-media__figure">
      <a
        href="javascript:void(0);"
        className="slds-avatar slds-avatar_circle slds-avatar_large"
      >
        <img
          alt="Jason Rodgers"
          src="/assets/images/avatar1.jpg"
          title="Jason Rodgers avatar"
        />
      </a>
    </div>
    <div className="slds-media__body">
      <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
        <p>
          <a href="javascript:void(0);" title="Jason Rodgers">
            Jason Rogers
          </a>{' '}
          —{' '}
          <a href="javascript:void(0);" title="Design Systems">
            Design Systems
          </a>
        </p>
        <ButtonIcon
          className="slds-button_icon-border slds-button_icon-x-small"
          aria-haspopup="true"
          symbol="down"
          assistiveText="More Options"
          title="More Options"
        />
      </div>
      <p className="slds-text-body_small">
        <a
          href="javascript:void(0);"
          title="Click for single-item view of this post"
          className="slds-text-link_reset"
        >
          5 days Ago
        </a>
      </p>
    </div>
  </header>
);

export let PostContent = props => (
  <div
    className={classNames(
      'slds-post__content slds-text-longform',
      props.className
    )}
  >
    {props.children}
  </div>
);

export let PostFooter = props => (
  <footer className={classNames('slds-post__footer', props.className)}>
    {props.children}
  </footer>
);

export let Post = props => (
  <article className={classNames('slds-post', props.className)}>
    {props.children}
  </article>
);

export let Comments = props => (
  <div className="slds-feed__item-comments">{props.children}</div>
);

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
            <PostFooterMeta />
          </PostFooter>
        </Post>
      </li>
    </ul>
  </div>
);

export let states = [
  {
    id: 'post-with-liker-bar',
    label: 'Like',
    element: (
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
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
                </p>
              </PostContent>
              <PostFooter>
                <PostFooterActions liked />
                <PostFooterMeta liked />
              </PostFooter>
            </Post>
            <Comments>
              <div className="slds-p-horizontal_medium slds-p-vertical_x-small">
                <a href="javascript:void(0);">You</a> liked this post
              </div>
            </Comments>
          </li>
        </ul>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'post-attachment-link',
    label: 'Link attachment',
    element: (
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
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
                </p>
              </PostContent>
              <div className="slds-post__payload">
                <AttachmentLink
                  articleTitle="Maui By Air The Best Way Around The Island"
                  articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                />
              </div>
              <PostFooter>
                <PostFooterActions />
                <PostFooterMeta />
              </PostFooter>
            </Post>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'post-attachment-files',
    label: 'Files(s) attachment',
    element: (
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
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
                </p>
              </PostContent>
              <div className="slds-post__payload">
                <ul className="slds-grid slds-grid_pull-padded">
                  <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
                    <File
                      className="slds-file_card"
                      cropClass="slds-file__crop_16-by-9"
                      titleClass="slds-file__title_card"
                      symbol="image"
                      image
                    />
                  </li>
                  <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3 slds-medium-show">
                    <File
                      className="slds-file_card"
                      cropClass="slds-file__crop_16-by-9"
                      titleClass="slds-file__title_card"
                      symbol="pdf"
                    />
                  </li>
                  <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
                    <File
                      className="slds-file_card"
                      cropClass="slds-file__crop_16-by-9"
                      titleClass="slds-file__title_overlay slds-align_absolute-center slds-text-heading_large"
                      title="22+"
                      image
                      overlay
                    />
                  </li>
                </ul>
              </div>
              <PostFooter>
                <PostFooterActions />
                <PostFooterMeta />
              </PostFooter>
            </Post>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'post-with-comments',
    label: 'With replies',
    element: (
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
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
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
    )
  },
  {
    id: 'post-with-overflow',
    label: 'Replies - Overflow Bar',
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
    label: 'Replies - Publisher active',
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
  },
  {
    id: 'questions',
    label: 'Question',
    element: (
      <div className="slds-feed">
        <ul className="slds-feed__list">
          <li className="slds-feed__item">
            <Post>
              <PostHeader />
              <PostContent>
                <h3 className="slds-text-heading_small">
                  Barbecue Party Tips For A Truly Amazing Event?
                </h3>
                <p>
                  Hey there! Here's the latest demo presentation{' '}
                  <a href="javascript:void(0);" title="Jenna Davis">
                    @Jenna Davis
                  </a>, let me know if there are any changes. I've updated
                  slides 3-8 and slides 16-18 slides with new product shots.
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
    )
  }
];
