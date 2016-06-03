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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

export let TimelineIcon = props =>
  <div className={pf('icon_container')}>
    <SvgIcon className={className(pf('icon icon--small'), props.symbol == 'log_a_call' ? pf('icon-standard-log-a-call') : pf('icon-standard-' + props.symbol))} sprite="standard" symbol={ props.symbol } />
  </div>;

export let TimelineActions = props =>
  <div className={pf('timeline__actions')}>
    <p className={pf('timeline__date')}>{ props.date || 'Feb 24' }</p>
    <ButtonIcon flavor="icon-border-filled,icon-x-small" sprite="utility" symbol="switch" assistiveText="Switch" />
  </div>;

export default (
<div className="demo-only">
  <ul>
    <li>
      <span className={pf('assistive-text')}>Task</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className={pf('media--timeline timeline__media--task')} figureLeft={ <TimelineIcon symbol="task" /> } figureLeftClassName={pf('timeline__icon')}>
          <MediaObject title="Review proposals for EBC deck with larger team and have marketing review this" figureLeft={ <Checkbox assistiveText="mark-complete" /> }>
            <p className={pf('truncate')} title="Review proposals for EBC deck with larger team and have marketing review this">
              <a href="javascript:void(0);">Review proposals for EBC deck with larger team and have marketing review this</a>
            </p>
            <ul className={pf('list--horizontal wrap')}>
              <li className={pf('m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Contact:</span>
                <span className={pf('text-body--small')}><a href="javascript:void(0);">Lei Chan</a></span>
              </li>
              <li className={pf('m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Assigned to:</span>
                <span className={pf('text-body--small')}><a href="javascript:void(0);">Betty Mason</a></span>
              </li>
            </ul>
          </MediaObject>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className={pf('assistive-text')}>Event</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className={pf('media--timeline timeline__media--event')} figureLeft={ <TimelineIcon symbol="event" /> } figureLeftClassName={pf('timeline__icon')}>
          <p className={pf('truncate')} title="Company One — EBC Meeting">
            <a href="javascript:void(0);">Company One — EBC Meeting</a>
          </p>
          <p className={pf('truncate')}>Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.</p>
          <ul className={pf('list--horizontal wrap')}>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>Time:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">Feb 23, 2015 11:00am&ndash;12:00pm</a></span>
            </li>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>Location:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">300 Pike St, San Francisco CA</a></span>
            </li>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>Name:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">Lei Chan</a>, <a href="javascript:void(0);">Jason Dewar</a>, <a href="javascript:void(0);">Gwen Jones</a> and <a href="javascript:void(0);">Pete Schaffer</a></span>
            </li>
          </ul>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className={pf('assistive-text')}>Call</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className={pf('media--timeline timeline__media--call')} figureLeft={ <TimelineIcon symbol="log_a_call" /> } figureLeftClassName={pf('timeline__icon')}>
          <p className={pf('truncate')} title="Mobile conversation on Monday">
            <a href="javascript:void(0);">Mobile conversation on Monday</a>
          </p>
          <p className={pf('truncate')}>Lei seemed interested in closing this deal quickly! Let&rsquo;s move.</p>
          <ul className={pf('list--horizontal wrap')}>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>Name:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">Lei Chan</a></span>
            </li>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>Assigned to:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">Betty Mason</a></span>
            </li>
          </ul>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className={pf('assistive-text')}>Email</span>
      <MediaObject figureRight={ <TimelineActions /> }>
        <MediaObject className={pf('media--timeline timeline__media--email')} figureLeft={ <TimelineIcon symbol="email" /> } figureLeftClassName={pf('timeline__icon')}>
          <p className={pf('truncate')} title="Mobile conversation on Monday">
            <a href="javascript:void(0);">Mobile conversation on Monday</a>
          </p>
          <p className={pf('truncate')}>Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it&rsquo;s truncated.</p>
          <ul className={pf('list--horizontal wrap')}>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>To:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">Lei Chan</a></span>
            </li>
            <li className={pf('m-right--large')}>
              <span className={pf('tile__label text-heading--label-normal')}>From:</span>
              <span className={pf('text-body--small')}><a href="javascript:void(0);">Jason Dewar</a></span>
            </li>
          </ul>
        </MediaObject>
      </MediaObject>
    </li>
  </ul>
</div>
);
