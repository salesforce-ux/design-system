/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const MediaObject = require('ui/components/media-objects/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const StatefulClass = require('ui/components/lib/stateful.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const image = (
  <SvgIcon className={pf('icon icon-doctype-zip')} sprite="doctype" symbol="zip" />
);

exports.preview = (
<div className='demo-only'>
  <ul className={pf('list--vertical has-dividers')}>
    <StatefulClass>
      <li className={pf('list__item')}>
        <MediaObject figureLeft={image} className={pf('tile')}>
          <p className={pf('tile__title truncate')}>
            <a href="#">SLDS_038.zip</a>
          </p>
          <ul className={pf('tile__detail list--horizontal has-dividers text-body--small')}>
            <li className={pf('truncate list__item')}>May 9th, 2015</li>
            <li className={pf('truncate list__item')}>3.6mb</li>
          </ul>
        </MediaObject>
      </li>
    </StatefulClass>
    <StatefulClass>
      <li className={pf('list__item')}>
        <MediaObject figureLeft={image} className={pf('tile')}>
          <p className={pf('tile__title truncate')}>
            <a href="#">SLDS_037.zip</a>
          </p>
          <ul className={pf('tile__detail list--horizontal has-dividers text-body--small')}>
            <li className={pf('truncate list__item')}>May 8th, 2015</li>
            <li className={pf('truncate list__item')}>3.7mb</li>
          </ul>
        </MediaObject>
      </li>
    </StatefulClass>
    <StatefulClass>
      <li className={pf('list__item')}>
        <MediaObject figureLeft={image} className={pf('tile')}>
          <p className={pf('tile__title truncate')}>
            <a href="#">SLDS_036.zip</a>
          </p>
          <ul className={pf('tile__detail list--horizontal has-dividers text-body--small')}>
            <li className={pf('truncate list__item')}>May 7th, 2015</li>
            <li className={pf('truncate list__item')}>3.9mb</li>
          </ul>
        </MediaObject>
      </li>
    </StatefulClass>
  </ul>
</div>
);

exports.code = (
  <ul className={pf('list--vertical has-dividers')}>
    <li className={pf('list__item')}>
      <MediaObject figureLeft={image} className={pf('tile')}>
        <p className={pf('tile__title truncate')}>
          <a href="#">SLDS_038.zip</a>
        </p>
        <ul className={pf('tile__detail list--horizontal has-dividers text-body--small')}>
          <li className={pf('truncate list__item')}>May 9th, 2015</li>
          <li className={pf('truncate list__item')}>3.6mb</li>
        </ul>
      </MediaObject>
    </li>
    <li className={pf('list__item')}>
      <MediaObject figureLeft={image} className={pf('tile')}>
        <p className={pf('tile__title truncate')}>
          <a href="#">SLDS_037.zip</a>
        </p> has-dividers
        <ul className={pf('tile__detail list--horizontal has-dividers text-body--small')}>
          <li className={pf('truncate list__item')}>May 8th, 2015</li>
          <li className={pf('truncate list__item')}>3.7mb</li>
        </ul>
      </MediaObject>
    </li>
    <li className={pf('list__item')}>
      <MediaObject figureLeft={image} className={pf('tile')}>
        <p className={pf('tile__title truncate')}>
          <a href="#">SLDS_036.zip</a>
        </p>
        <ul className={pf('tile__detail list--horizontal has-dividers text-body--small')}>
          <li className={pf('truncate list__item')}>May 7th, 2015</li>
          <li className={pf('truncate list__item')}>3.9mb</li>
        </ul>
      </MediaObject>
    </li>
  </ul>
);
