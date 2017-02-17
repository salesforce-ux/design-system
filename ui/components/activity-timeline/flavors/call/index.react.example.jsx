// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import { TimelineIcon, TimelineActions } from 'ui/components/activity-timeline/flavors/base/index.react.example';

export let states = [
  {
    id: 'timeline-call',
    label: 'Default',
    element:
      <div className="demo-only">
        <span className="slds-assistive-text">Call</span>
        <MediaObject figureRight={ <TimelineActions title="More Options for Call, Mobile conversation" assistiveText="More Options for Call, Mobile conversation" /> }>
          <MediaObject className="slds-media--timeline slds-timeline__media--call" figureLeft={ <TimelineIcon symbol="log_a_call" /> } figureLeftClassName="slds-timeline__icon">
            <h3 className="slds-truncate" title="Mobile conversation on Monday">
              <a href="javascript:void(0);">Mobile conversation on Monday</a>
            </h3>
            <p className="slds-truncate" title="Lei seemed interested in closing this deal quickly! Let&rsquo;s move.">Lei seemed interested in closing this deal quickly! Let&rsquo;s move.</p>
            <ul className="slds-list--horizontal slds-wrap">
              <li className="slds-m-right--large">
                <span className="slds-text-title">Name:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a></span>
              </li>
              <li className="slds-m-right--large">
                <span className="slds-text-title">Assigned to:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Betty Mason</a></span>
              </li>
            </ul>
          </MediaObject>
        </MediaObject>
      </div>
  }
];
