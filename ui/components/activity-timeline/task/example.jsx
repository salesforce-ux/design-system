// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from '../../../utilities/media-objects/index.react';
import { Checkbox } from '../../checkbox/base/example';
import { TimelineIcon, TimelineActions } from '../base/example';

export let ActivityTimelineItem = props => (
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

export default <ActivityTimelineItem />;
