/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/components/media-objects/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';


const image1 = (
  <SvgIcon className={pf('icon icon--small icon-standard-task')} sprite="standard" symbol="task" />
);

const image2 = (
  <SvgIcon className={pf('icon icon--small icon-standard-event')} sprite="standard" symbol="event" />
);

const image3 = (
  <SvgIcon className={pf('icon icon--small icon-standard-log-a-call')} sprite="standard" symbol="log_a_call" />
);

const image4 = (
  <SvgIcon className={pf('icon icon--small icon-standard-email')} sprite="standard" symbol="email" />
);

const content = (
  <div className={pf('timeline__actions')}>
    <p className={pf('timeline__date')}>Feb 24</p>
    <ButtonIcon flavor="icon-border-filled,icon-x-small" sprite="utility" symbol="switch" assistiveText="Switch" />
  </div>
);

const form = (
  <Checkbox assistiveText="mark-complete" />
);

export default (
<div className="demo-only">
  <ul className={pf('timeline')}>
    <li>
      <span className={pf('assistive-text')}>Task</span>
      <MediaObject figureRight={content} className={pf('tile')}>
        <MediaObject className={pf('media--timeline timeline__media--task')} figureLeft={image1} figureLeftClassName={pf('timeline__icon')}>
          <MediaObject figureLeft={form} className={pf('tile')}>
            <p className={pf('timeline__title truncate')}>
              <span className={pf('timeline__title-content')}>
                <a href="#void">Review proposals for EBC deck with larger team and have marketing review this</a>
              </span>
            </p>
            <ul className={pf('list--horizontal wrap')}>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Contact:</span>
                <span className={pf('text-body--small')}><a href="#void">Lei Chan</a></span>
              </li>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Assigned to:</span>
                <span className={pf('text-body--small')}><a href="#void">Betty Mason</a></span>
              </li>
            </ul>
          </MediaObject>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className={pf('assistive-text')}>Event</span>
      <MediaObject figureRight={content} className={pf('tile')}>
        <MediaObject className={pf('media--timeline timeline__media--event')} figureLeft={image2} figureLeftClassName={pf('timeline__icon')}>
          <div className={pf('tile')}>
            <p className={pf('timeline__title truncate')}>
              <span className={pf('timeline__title-content')}>
                <a href="#void">Company One — EBC Meeting</a>
              </span>
            </p>
            <p className={pf('truncate')}>Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.</p>
            <ul className={pf('list--horizontal wrap')}>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Time:</span>
                <span className={pf('text-body--small')}><a href="#void">Feb 23, 2015 11:00am&ndash;12:00pm</a></span>
              </li>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Location:</span>
                <span className={pf('text-body--small')}><a href="#void">300 Pike St, San Francisco CA</a></span>
              </li>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Name:</span>
                <span className={pf('text-body--small')}><a href="#void">Lei Chan</a>, <a href="#void">Jason Dewar</a>, <a href="#void">Gwen Jones</a> and <a href="#void">Pete Schaffer</a></span>
              </li>
            </ul>
          </div>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className={pf('assistive-text')}>Call</span>
      <MediaObject figureRight={content} className={pf('tile')}>
        <MediaObject className={pf('media--timeline timeline__media--call')} figureLeft={image3} figureLeftClassName={pf('timeline__icon')}>
          <div className={pf('tile')}>
            <p className={pf('timeline__title truncate')}>
              <span className={pf('timeline__title-content')}>
                <a href="#void">Mobile conversation on Monday</a>
              </span>
            </p>
            <p className={pf('truncate')}>Lei seemed interested in closing this deal quickly! Let&rsquo;s move.</p>
            <ul className={pf('list--horizontal wrap')}>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Name:</span>
                <span className={pf('text-body--small')}><a href="#void">Lei Chan</a></span>
              </li>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>Assigned to:</span>
                <span className={pf('text-body--small')}><a href="#void">Betty Mason</a></span>
              </li>
            </ul>
          </div>
        </MediaObject>
      </MediaObject>
    </li>
    <li>
      <span className={pf('assistive-text')}>Email</span>
      <MediaObject figureRight={content} className={pf('tile')}>
        <MediaObject className={pf('media--timeline timeline__media--email')} figureLeft={image4} figureLeftClassName={pf('timeline__icon')}>
          <div className={pf('tile')}>
            <p className={pf('timeline__title truncate')}>
              <span className={pf('timeline__title-content')}>
                <a href="#void">Updated Proposals</a>
              </span>
            </p>
            <p className={pf('truncate')}>Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it&rsquo;s truncated.</p>
            <ul className={pf('list--horizontal wrap')}>
              <li className={pf('list__item truncate_container--50 m-right--large grid')}>
                <span>To:</span>
                <span className={pf('m-left--xx-small truncate')}><a href="#void">Lei Chan with Long Name that might go on for quite some distance futher than you might expect</a></span><span className={pf('no-flex')}> + 44 more</span>
              </li>
              <li className={pf('list__item m-right--large')}>
                <span className={pf('tile__label text-heading--label-normal')}>From:</span>
                <span className={pf('text-body--small')}><a href="#void">Jason Dewar</a></span>
              </li>
            </ul>
          </div>
        </MediaObject>
      </MediaObject>
    </li>
  </ul>
</div>
);
