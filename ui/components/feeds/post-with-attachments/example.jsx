// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import {
  Post,
  PostHeader,
  PostContent,
  PostFooter,
  PostFooterActions,
  PostFooterMeta,
  Comments
} from '../post/example';
import { File } from '../../files/base/example';
import { AttachmentLink } from '../../files/base/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export let states = [
  {
    id: 'post-attachment-link',
    label: 'Link',
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
    label: 'Files(s)',
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
  }
];
