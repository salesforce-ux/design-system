/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const StatefulClass = require('ui/components/lib/stateful.react');
const MediaObject = require('ui/components/media-objects/index.react');
const Input = require('ui/components/forms/flavors/input/index.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const image = (
  <div className={pf('avatar avatar--circle avatar--medium')}>
    <a href="javascript:void(0)" title="Jason Rodgers">
      <img src={`/assets/images/avatar1.jpg`} alt='Jason Rodgers'/>
    </a>
  </div>
);

module.exports = (
<div className='demo-only'>

  <MediaObject figureLeft={image} className={pf('comment hint-parent')}>
    <div className={pf('grid grid--align-spread has-flexi-truncate')}>
      <p className={pf('truncate')}>
        <a href="javascript:void(0)" title="Design Systems">Design Systems</a> - <a href="javascript:void(0)" title="Jason Rodgers">Jason Rogers</a>
      </p>
      <ButtonIcon
        className={pf('shrink-none')}
        flavor="icon-border-filled,icon-border-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </div>
    <p className={pf('comment__timestamp')}><a href="javascript:void(0)" title="Click for single-item view of this post">18hr Ago</a></p>
    <div className={pf('comment__content text-longform')}>
      <p>Here's the latest demo presentation <a href="javascript:void(0)" title="Jenna Davis">@jdavis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
    </div>
    <div className={pf('comment__tags text-body--small')}>
      <span>Topics:</span>
      <ul className={pf('comment__tags-list')}>
        <li className={pf('comment__tags-item')}>
          <a href="javascript:void(0)" title="Powerpoint">Powerpoint</a>
        </li>
        <li className={pf('comment__tags-item')}>
          <a href="javascript:void(0)" title="Sales Presentation">Sales Presentation</a>
        </li>
        <li className={pf('comment__tags-item')}>
          <a href="javascript:void(0)" title="Todo">Todo</a>
        </li>
        <li className={pf('comment__tags-item')}>
          and <a href="javascript:void(0)" title="Show the remaining topics">3 more</a>
        </li>
      </ul>
    </div>
    <ul className={pf('comment__actions text-body--small')}>
      <li className={pf('comment__actions-item')}>
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
      <li className={pf('comment__actions-item')}>
        2 tasks
      </li>
    </ul>
  </MediaObject>

</div>
);
