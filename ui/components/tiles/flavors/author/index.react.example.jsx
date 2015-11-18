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
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const image = (
  <img src={`/assets/images/company1.jpg`} style={{height: '48px'}} alt="" />
);

module.exports = (
<div className={pf('demo-only')}>
  <div className={pf('tile')}>
    <p className={pf('tile__title truncate')}>
      <a href="#">Company One beats Company Two to the 200-mile affordable electric car</a>
    </p>
    <div className={pf('tile__detail text-body--small')}>
      <p>by Steve Author</p>
      <ul className={pf('list--horizontal has-dividers tile__meta')}>
        <li className={pf('list__item list__item')}>Breaking News</li>
        <li className={pf('list__item list__item')}>1 day ago</li>
      </ul>
    </div>
  </div>
  <MediaObject figureLeft={image} className={pf('tile')}>
    <p className={pf('tile__title truncate')}>
      <a href="#">Company One beats Company Two to the 200-mile affordable electric car</a>
    </p>
    <div className={pf('tile__detail text-body--small')}>
      <p>by Steve Author</p>
      <ul className={pf('list--horizontal has-dividers tile__meta')}>
        <li className={pf('list__item list__item')}>Breaking News</li>
        <li className={pf('list__item list__item')}>1 day ago</li>
      </ul>
    </div>
  </MediaObject>
</div>
);
