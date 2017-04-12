// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import { Post, PostHeader, PostContent, PostFooter, PostFooterActions, PostFooterMeta, Comments } from 'ui/components/feeds/flavors/post/index.react.example';
import { File } from 'ui/components/files/flavors/base/index.react.example';
import { AttachmentLink } from 'ui/components/files/flavors/link-attachment/index.react.example';


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'post-attachment-link',
    label: 'Link',
    element:
    <div className="slds-feed">
      <ul className="slds-feed__list">
        <li className="slds-feed__item">
          <Post>
            <PostHeader />
            <PostContent>
              <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            </PostContent>
            <div className="slds-post__payload">
              <AttachmentLink
                articleTitle="Maui By Air The Best Way Around The Island"
                articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
            </div>
            <PostFooter>
              <PostFooterActions />
              <PostFooterMeta />
            </PostFooter>
          </Post>
        </li>
      </ul>
    </div>
  },
  {
    id: 'post-attachment-files',
    label: 'Files(s)',
    element:
    <div className="slds-feed">
      <ul className="slds-feed__list">
        <li className="slds-feed__item">
          <Post>
            <PostHeader />
            <PostContent>
              <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            </PostContent>
            <div className="slds-post__payload">
              <ul className="slds-grid slds-grid--pull-padded">
              <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3">
                  <File
                    className="slds-file--card"
                    cropClass="slds-file__crop--16-by-9"
                    titleClass="slds-file__title--card"
                    symbol="image"
                    image />
              </li>
              <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3 slds-medium-show">
                  <File
                    className="slds-file--card"
                    cropClass="slds-file__crop--16-by-9"
                    titleClass="slds-file__title--card"
                    symbol="pdf" />
                </li>
                <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3">
                  <File
                    className="slds-file--card"
                    cropClass="slds-file__crop--16-by-9"
                    titleClass="slds-file__title--overlay slds-align--absolute-center slds-text-heading--large"
                    title="22+"
                    image
                    overlay />
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
  }
];
