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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';

export let TimelineIcon = props =>
  <div className="slds-icon_container">
    <SvgIcon className={className('slds-icon slds-icon--small', props.symbol == 'log_a_call' ? 'slds-icon-standard-log-a-call' : 'slds-icon-standard-' + props.symbol)} sprite="standard" symbol={ props.symbol } />
  </div>;

export let TimelineActions = props =>
  <div className="slds-timeline__actions">
    <p className="slds-timeline__date">{ props.date || 'Feb 24' }</p>
    <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" symbol="down" assistiveText="More Options" aria-haspopup="true" />
  </div>;

export default (
<div className="demo-only">
  <ul>
    <li>
      <span className="slds-assistive-text">Task</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className="slds-media--timeline slds-timeline__media--task" figureLeft={ <TimelineIcon symbol="task" /> } figureLeftClassName="slds-timeline__icon">
          <MediaObject title="Review proposals for EBC deck with larger team and have marketing review this" figureLeft={ <Checkbox assistiveText="mark-complete" /> }>
            <h3 className="slds-truncate" title="Review proposals for EBC deck with larger team and have marketing review this">
              <a href="javascript:void(0);">Review proposals for EBC deck with larger team and have marketing review this</a>
            </h3>
            <ul className="slds-list--horizontal slds-wrap">
              <li className="slds-m-right--large">
                <span className="slds-text-title">Contact:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a></span>
              </li>
              <li className="slds-m-right--large">
                <span className="slds-text-title">Assigned to:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Betty Mason</a></span>
              </li>
            </ul>
          </MediaObject>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className="slds-assistive-text">Event</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className="slds-media--timeline slds-timeline__media--event" figureLeft={ <TimelineIcon symbol="event" /> } figureLeftClassName="slds-timeline__icon">
          <h3 className="slds-truncate" title="Company One — EBC Meeting">
            <a href="javascript:void(0);">Company One — EBC Meeting</a>
          </h3>
          <p className="slds-truncate">Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.</p>
          <ul className="slds-list--horizontal slds-wrap">
            <li className="slds-m-right--large">
              <span className="slds-text-title">Time:</span>
              <span className="slds-text-body--small"><a href="javascript:void(0);">Feb 23, 2015 11:00am&ndash;12:00pm</a></span>
            </li>
            <li className="slds-m-right--large">
              <span className="slds-text-title">Location:</span>
              <span className="slds-text-body--small"><a href="javascript:void(0);">300 Pike St, San Francisco CA</a></span>
            </li>
            <li className="slds-m-right--large">
              <span className="slds-text-title">Name:</span>
              <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a>, <a href="javascript:void(0);">Jason Dewar</a>, <a href="javascript:void(0);">Gwen Jones</a> and <a href="javascript:void(0);">Pete Schaffer</a></span>
            </li>
          </ul>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className="slds-assistive-text">Call</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className="slds-media--timeline slds-timeline__media--call" figureLeft={ <TimelineIcon symbol="log_a_call" /> } figureLeftClassName="slds-timeline__icon">
          <h3 className="slds-truncate" title="Mobile conversation on Monday">
            <a href="javascript:void(0);">Mobile conversation on Monday</a>
          </h3>
          <p className="slds-truncate">Lei seemed interested in closing this deal quickly! Let&rsquo;s move.</p>
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
    </li>
    <li>
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
    </li>
  </ul>
</div>
);
