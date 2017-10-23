// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from '../../../utilities/media-objects/index.react';
import { TimelineIcon, TimelineActions } from '../base/example';
import { Checkbox } from '../../checkbox/base/example';

export let ActivityTimelineItemCall = props => (
  <div className="slds-timeline__item">
    <span className="slds-assistive-text">Call</span>
    <MediaObject
      figureRight={
        <TimelineActions
          title="More Options for Call, Mobile conversation"
          assistiveText="More Options for Call, Mobile conversation"
        />
      }
    >
      <MediaObject
        className="slds-timeline__media slds-timeline__media_call"
        figureLeft={<TimelineIcon symbol="log_a_call" />}
        figureLeftClassName="slds-timeline__icon"
      >
        <h3 className="slds-truncate" title="Mobile conversation on Monday">
          <a href="javascript:void(0);">Mobile conversation on Monday</a>
        </h3>
        <p
          className="slds-truncate"
          title="Lei seemed interested in closing this deal quickly! Let&rsquo;s move."
        >
          Lei seemed interested in closing this deal quickly! Let&rsquo;s move.
        </p>
        <ul className="slds-list_horizontal slds-wrap">
          <li className="slds-m-right_large">
            <span className="slds-text-title">Name:</span>
            <span className="slds-text-body_small">
              <a href="javascript:void(0);">Lei Chan</a>
            </span>
          </li>
          <li className="slds-m-right_large">
            <span className="slds-text-title">Assigned to:</span>
            <span className="slds-text-body_small">
              <a href="javascript:void(0);">Betty Mason</a>
            </span>
          </li>
        </ul>
      </MediaObject>
    </MediaObject>
  </div>
);

export let ActivityTimelineItemEmail = props => (
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

export let ActivityTimelineItemEvent = props => (
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
        className="slds-timeline__media slds-timeline__media_event"
        figureLeft={<TimelineIcon symbol="event" />}
        figureLeftClassName="slds-timeline__icon"
      >
        <h3 className="slds-truncate" title="Company One — EBC Meeting">
          <a href="javascript:void(0);">Company One — EBC Meeting</a>
        </h3>
        <p
          className="slds-truncate"
          title="Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width."
        >
          Let&rsquo;s get together to review the theater&rsquo;s layout and
          facilities. We&rsquo;ll also discuss potential things that truncate at
          a certain width.
        </p>
        <ul className="slds-list_horizontal slds-wrap">
          <li className="slds-m-right_large">
            <span className="slds-text-title">Time:</span>
            <span className="slds-text-body_small">
              <a href="javascript:void(0);">
                Feb 23, 2015 11:00am&ndash;12:00pm
              </a>
            </span>
          </li>
          <li className="slds-m-right_large">
            <span className="slds-text-title">Location:</span>
            <span className="slds-text-body_small">
              <a href="javascript:void(0);">300 Pike St, San Francisco CA</a>
            </span>
          </li>
          <li className="slds-m-right_large">
            <span className="slds-text-title">Name:</span>
            <span className="slds-text-body_small">
              <a href="javascript:void(0);">Lei Chan</a>,
              <a href="javascript:void(0);">Jason Dewar</a>,
              <a href="javascript:void(0);">Gwen Jones</a> and{' '}
              <a href="javascript:void(0);">Pete Schaffer</a>
            </span>
          </li>
        </ul>
      </MediaObject>
    </MediaObject>
  </div>
);

export let ActivityTimelineItemTask = props => (
  <div className="slds-timeline__item">
    <span className="slds-assistive-text">Task</span>
    <MediaObject
      figureRight={
        <TimelineActions
          title="More Options for Task, Review proposals"
          assistiveText="More Options for Task, Review proposals"
        />
      }
    >
      <MediaObject
        className="slds-timeline__media slds-timeline__media_task"
        figureLeft={<TimelineIcon symbol="task" />}
        figureLeftClassName="slds-timeline__icon"
      >
        <MediaObject
          title="Review proposals for EBC deck with larger team and have marketing review this"
          figureLeft={<Checkbox hideLabel label="mark-complete" />}
        >
          <h3
            className="slds-truncate"
            title="Review proposals for EBC deck with larger team and have marketing review this"
          >
            <a href="javascript:void(0);">
              Review proposals for EBC deck with larger team and have marketing
              review this
            </a>
          </h3>
          <ul className="slds-list_horizontal slds-wrap">
            <li className="slds-m-right_large">
              <span className="slds-text-title">Contact:</span>
              <span className="slds-text-body_small">
                <a href="javascript:void(0);">Lei Chan</a>
              </span>
            </li>
            <li className="slds-m-right_large">
              <span className="slds-text-title">Assigned to:</span>
              <span className="slds-text-body_small">
                <a href="javascript:void(0);">Betty Mason</a>
              </span>
            </li>
          </ul>
        </MediaObject>
      </MediaObject>
    </MediaObject>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let BaseExample = props => (
  <ul className="slds-timeline">
    <li>
      <ActivityTimelineItemTask />
    </li>
    <li>
      <ActivityTimelineItemEvent />
    </li>
    <li>
      <ActivityTimelineItemCall />
    </li>
    <li>
      <ActivityTimelineItemEmail />
    </li>
  </ul>
);

export default <BaseExample />;
