// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from '../../../utilities/media-objects/index.react';
import { TimelineIcon, TimelineActions } from '../base/example';

export let ActivityTimelineItem = props => (
  <div className="slds-timeline__item">
    <span className="slds-assistive-text">Email</span>
    <MediaObject
      figureRight={
        <TimelineActions
          title="More Options for Email, Mobile conversation"
          assistiveText="More Options for Email, Mobile conversation"
        />
      }
    >
      <MediaObject
        className="slds-timeline__media slds-timeline__media_email"
        figureLeft={<TimelineIcon symbol="email" />}
        figureLeftClassName="slds-timeline__icon"
      >
        <h3 className="slds-truncate" title="Mobile conversation on Monday">
          <a href="javascript:void(0);">Mobile conversation on Monday</a>
        </h3>
        <p
          className="slds-truncate"
          title="Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it&rsquo;s truncated."
        >
          Hi guys, Thanks for meeting with the team today and going through the
          proposals we saw. This goes on until it&rsquo;s truncated.
        </p>
        <ul className="slds-list_horizontal slds-wrap">
          <li className="slds-truncate_container_50 slds-m-right_large slds-grid">
            <span className="slds-text-title">To:</span>
            <span
              className="slds-text-body_small slds-m-left_xx-small slds-truncate"
              title="Lei Chan with Long Name that might go on for quite some distance futher than you might expect"
            >
              <a href="javascript:void(0);">
                Lei Chan with Long Name that might go on for quite some distance
                futher than you might expect
              </a>
            </span>
            <span className="slds-no-flex slds-text-body_small">
              {' '}
              + 44 more
            </span>
          </li>
          <li className="slds-m-right_large">
            <span className="slds-text-title">From:</span>
            <span className="slds-text-body_small">
              <a href="javascript:void(0);">Jason Dewar</a>
            </span>
          </li>
        </ul>
      </MediaObject>
    </MediaObject>
  </div>
);

export default <ActivityTimelineItem />;
