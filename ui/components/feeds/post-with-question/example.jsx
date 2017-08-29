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
            <h3 className="slds-text-heading_small">
              Barbecue Party Tips For A Truly Amazing Event?
            </h3>
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
