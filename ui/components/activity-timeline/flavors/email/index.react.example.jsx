/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import { TimelineIcon, TimelineActions } from 'ui/components/activity-timeline/flavors/base/index.react.example';

export let states = [
  {
    id: 'timeline-email',
    label: 'Default',
    element:
      <div className="demo-only">
        <span className="slds-assistive-text">Email</span>
        <MediaObject figureRight={ <TimelineActions /> }>
          <MediaObject className="slds-media--timeline slds-timeline__media--email" figureLeft={ <TimelineIcon symbol="email" /> } figureLeftClassName="slds-timeline__icon">
            <h3 className="slds-truncate" title="Mobile conversation on Monday">
              <a href="javascript:void(0);">Mobile conversation on Monday</a>
            </h3>
            <p className="slds-truncate">Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it&rsquo;s truncated.</p>
            <ul className="slds-list--horizontal slds-wrap">
              <li className="slds-truncate_container--50 slds-m-right--large slds-grid">
                <span className="slds-text-title">To:</span>
                <span className="slds-text-body--small slds-m-left--xx-small slds-truncate"><a href="javascript:void(0);">Lei Chan with Long Name that might go on for quite some distance futher than you might expect</a></span><span className="slds-no-flex slds-text-body--small"> + 44 more</span>
              </li>
              <li className="slds-m-right--large">
                <span className="slds-text-title">From:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Jason Dewar</a></span>
              </li>
            </ul>
          </MediaObject>
        </MediaObject>
      </div>
  }
];
