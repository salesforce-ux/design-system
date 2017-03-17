// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import { TimelineIcon, TimelineActions } from 'ui/components/activity-timeline/flavors/base/index.react.example';

export let ActivityTimelineItem = props =>
  <div className="slds-timeline__item">
    <span className="slds-assistive-text">Event</span>
    <MediaObject
      figureRight={
        <TimelineActions
          title="More Options for Event, Company One"
          assistiveText="More Options for Event, Company One"
        />
      }
    >
      <MediaObject
        className="slds-timeline__media slds-timeline__media--event"
        figureLeft={ <TimelineIcon symbol="event" /> }
        figureLeftClassName="slds-timeline__icon"
      >
        <h3 className="slds-truncate" title="Company One — EBC Meeting">
          <a href="javascript:void(0);">Company One — EBC Meeting</a>
        </h3>
        <p className="slds-truncate" title="Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.">Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.</p>
        <ul className="slds-list--horizontal slds-wrap">
          <li className="slds-m-right--large">
            <span className="slds-text-title">Time:</span>
            <span className="slds-text-body--small">
              <a href="javascript:void(0);">Feb 23, 2015 11:00am&ndash;12:00pm</a>
            </span>
          </li>
          <li className="slds-m-right--large">
            <span className="slds-text-title">Location:</span>
            <span className="slds-text-body--small">
              <a href="javascript:void(0);">300 Pike St, San Francisco CA</a>
            </span>
          </li>
          <li className="slds-m-right--large">
            <span className="slds-text-title">Name:</span>
            <span className="slds-text-body--small">
              <a href="javascript:void(0);">Lei Chan</a>,
              <a href="javascript:void(0);">Jason Dewar</a>,
              <a href="javascript:void(0);">Gwen Jones</a> and <a href="javascript:void(0);">Pete Schaffer</a>
            </span>
          </li>
        </ul>
      </MediaObject>
    </MediaObject>
  </div>;

export default (
  <ActivityTimelineItem />
);
