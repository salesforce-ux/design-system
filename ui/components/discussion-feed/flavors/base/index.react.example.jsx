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

const imagePrimaryLarge = (
  <div className={pf('avatar avatar--circle avatar--medium')}>
    <img src={`/assets/images/avatar1.jpg`} alt='Placeholder'/>
  </div>
);
const imagePrimary = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <img src={`/assets/images/avatar1.jpg`} alt='Placeholder'/>
  </div>
);
const imageSecondary = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <img src={`/assets/images/avatar2.jpg`} alt='Placeholder'/>
  </div>
);
const imageTertiary = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <img src={`/assets/images/avatar3.jpg`} alt='Placeholder'/>
  </div>
);

module.exports = (
<div className='demo-only'>

  <div className={pf('feed')}>
    {/* Filter? */}

    <ul className={pf('feed__list')}>

      <li className={pf('feed__item')}>
        {/* Primary Comment */}
        <MediaObject figureLeft={imagePrimaryLarge} className={pf('feed__media hint-parent')}>
          <div className={pf('grid grid--align-spread has-flexi-truncate')}>
            <p className={pf('truncate')}><a href="#">Design Systems</a> - <a href="#">Jason Rogers</a></p>
            <ButtonIcon
              className={pf('shrink-none')}
              flavor="icon-border-filled,icon-border-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </div>
          <p className={pf('feed__timestamp')}><a href="#">18hr Ago</a></p>
          <div className={pf('text-longform')}>
            <p>Here's the latest demo presentation <a href="">@jdavis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
            <p>I think we may need to revisit the ... <a href="#">Show More</a></p>
          </div>
          <div className={pf('feed__actions')}>
            <a href="javascript:void(0)">
              <StatefulClass>
                <ButtonIcon
                  flavor="icon-border,icon-border-small"
                  iconFlavor="small"
                  className="m-right--xx-small"
                  sprite="utility"
                  symbol="like"
                  assistiveText="Like" />
              </StatefulClass>
              <span className={pf('text-body--small')}>Like</span>
            </a>
          </div>
        </MediaObject>

        {/* Comment Reply - Child Feed List */}
        <ul className={pf('feed__list--children')}>
          <li>
            <MediaObject figureLeft={imageSecondary} className={pf('feed__media hint-parent')}>
              <div className={pf('grid grid--align-spread has-flexi-truncate')}>
                <p className={pf('truncate')}><a href="#">Jenna Davis</a> - <span className={pf('feed__timestamp')}>16hr Ago</span></p>
                <ButtonIcon
                  className={pf('shrink-none')}
                  flavor="icon-border-filled,icon-border-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </div>
              <div className={pf('feed__media-content text-longform')}>
                <p>Thanks for this, I'll have a look and provide some feedback!</p>
              </div>
              <div className={pf('feed__media-actions')}>
                <a href="javascript:void(0)">
                  <span className={pf('text-body--small')}>Like</span>
                </a>
              </div>
            </MediaObject>
          </li>
          <li>
            <MediaObject figureLeft={imageTertiary} className={pf('feed__media hint-parent')}>
              <div className={pf('grid grid--align-spread has-flexi-truncate')}>
                <p className={pf('truncate')}><a href="#">Lexee L. Jackson</a> - <span className={pf('feed__timestamp')}>8hr Ago</span></p>
                <ButtonIcon
                  className={pf('shrink-none')}
                  flavor="icon-border-filled,icon-border-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </div>
              <div className={pf('text-longform')}>
                <p><a href="#">@jrodgers</a> I left you some feedback.</p>
              </div>
            </MediaObject>
          </li>
          <li>
            <MediaObject figureLeft={imagePrimary} className={pf('feed__media hint-parent')}>
              <input className={pf('input')} type="text" placeholder="Write a comment..." />
              <span className={pf('assistive-text')}>Write a comment</span>
            </MediaObject>
          </li>
        </ul>

      </li>
    </ul>
  </div>
</div>
);
