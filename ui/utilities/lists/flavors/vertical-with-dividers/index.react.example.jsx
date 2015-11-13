/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const StatefulClass = require('ui/components/lib/stateful.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

exports.preview = (
<div className='demo-only'>
  <ul className={pf('list--vertical has-dividers--top')}>
    <li className={pf('list__item')}>List item with top divider</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--top-space')} style={{ marginTop: '2rem' }}>
    <li className={pf('list__item')}>List item with top divider with space</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom')} style={{ marginTop: '2rem' }}>
    <li className={pf('list__item')}>List item with bottom divider</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom-space')} style={{ marginTop: '2rem' }}>
    <li className={pf('list__item')}>List item with bottom divider with space</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom has-block-links')} style={{ marginTop: '2rem' }}>
    <li className={pf('list__item')}><a href="#void">List item block level link with bottom divider</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom-space has-block-links-space')} style={{ marginTop: '2rem' }}>
    <li className={pf('list__item')}><a href="#void">List item block level link with bottom divider with space</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom has-block-links-space has-list-interactions')} style={{ marginTop: '2rem' }}>
    <StatefulClass>
    <li className={pf('list__item')}><a href="#void">List item block level link with bottom divider with space with list item interactions</a></li>
    </StatefulClass>
    <StatefulClass>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    </StatefulClass>
    <StatefulClass>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    </StatefulClass>
  </ul>
</div>
);


exports.code = (
<div className='demo-only'>
  <ul className={pf('list--vertical has-dividers--top')}>
    <li className={pf('list__item')}>List item with top divider</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--top-space')}>
    <li className={pf('list__item')}>List item with top divider with space</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom')}>
    <li className={pf('list__item')}>List item with bottom divider</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom-space')}>
    <li className={pf('list__item')}>List item with bottom divider with space</li>
    <li className={pf('list__item')}>List Item</li>
    <li className={pf('list__item')}>List Item</li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom has-block-links')}>
    <li className={pf('list__item')}><a href="#void">List item block level link with bottom divider</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom-space has-block-links-space')}>
    <li className={pf('list__item')}><a href="#void">List item block level link with bottom divider with space</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
  </ul>
  <ul className={pf('list--vertical has-dividers--bottom has-block-links-space has-list-interactions')}>
    <li className={pf('list__item')}><a href="#void">List item block level link with bottom divider with space with list item interactions</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
    <li className={pf('list__item')}><a href="#void">List Item</a></li>
  </ul>
</div>
);
