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
import { prefix as pf } from 'app_modules/ui/util/component';

export let states = [
  {
    id: 'timeline-call',
    label: 'Default',
    element:
      <div className="demo-only">
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
      </div>
  }
];
