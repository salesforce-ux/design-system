/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import MediaObject from 'ui/components/media-objects/index.react';
import Img from 'app_modules/ui/img';
import { prefix as pf } from 'app_modules/ui/util/component';

const image = (
  <div className={pf('avatar avatar--circle avatar--medium')}>
    <a href="javascript:void(0)" title="Jason Rodgers">
      <Img src={`/assets/images/avatar1.jpg`} alt='Jason Rodgers'/>
    </a>
  </div>
);
const icon = (
  <span className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon--small')} sprite="doctype" symbol="ppt" />
    <span className={pf('assistive-text')}>Powerpoint</span>
  </span>
);

export default (
  <MediaObject figureLeft={image} className={pf('comment hint-parent')}>
    <div className={pf('grid grid--align-spread has-flexi-truncate')}>
      <p className={pf('truncate')}>
        <a href="javascript:void(0)" title="Design Systems">Design Systems</a> - <a href="javascript:void(0)" title="Jason Rodgers">Jason Rogers</a>
      </p>
      <ButtonIcon
        className={pf('shrink-none')}
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </div>
    <p className={pf('text-body--small')}><a href="javascript:void(0)" title="Click for single-item view of this post">18hr Ago</a></p>
    <div className={pf('comment__content text-longform')}>
      <p><a href="javascript:void(0)" title="Garrett Lee">@Garrett Lee</a>, can you review and let me know what's missing? FYI <a href="javascript:void(0)" title="All Sales Group">@All Sales Group</a></p>
    </div>
    <div className={pf('attachments')}>
      <figure className={pf('attachments__item')}>
        <a href="javascript:void(0)" title="Marketing Plan - Rollout Q1 2016">
          <Img src={`/assets/images/feed/feed-image-example.png`} alt='Marketing Plan - Rollout Q1 2016'/>
        </a>
      </figure>
    </div>
    <ul className={pf('list--horizontal has-dividers text-body--small')}>
      <li className={pf('list__item')}>
        <a href="javascript:void(0)" title="Like this item">
          <StatefulClass>
            <ButtonIcon
              flavor="icon-border,icon-small"
              className="m-right--small"
              sprite="utility"
              symbol="like"
              assistiveText="Like" />
          </StatefulClass>
          <span>21 Likes</span>
        </a>
      </li>
      <li className={pf('list__item')}>
        2 tasks
      </li>
    </ul>
  </MediaObject>
);
