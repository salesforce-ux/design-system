/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

function image() {
  return (
    <span className={pf('icon__container tile--board__icon')}>
      <SvgIcon className={pf('icon icon-text-warning icon--x-small')} sprite="utility" symbol="warning" />
      <span className={pf('assistive-text')}>Warning Icon</span>
    </span>
  );
}

exports.preview = (
<div className='demo-only' style={{width: '300px'}}>
  <ul className={pf('list--vertical has-cards')}>
    <StatefulClass>
      <li className={pf('list__item')}>
        <div className={pf('tile tile--board')}>
          <p className={pf('tile__title truncate')}>
            <a href="#">Cloudhub + Anypoint Connectors</a>
          </p>
          <div className={pf('tile__detail')}>
            <p className={pf('text-heading--medium')}>$500,000</p>
            <p className={pf('truncate')}><a href="#">Company One</a></p>
            <p className={pf('truncate')}>Closing 9/30/2015</p>
          </div>
        </div>
      </li>
    </StatefulClass>
    <StatefulClass>
      <li className={pf('list__item')}>
        <div className={pf('tile tile--board')}>
          <p className={pf('tile__title truncate')}>
            <a href="#">Cloudhub</a>
          </p>
          <div className={pf('tile__detail')}>
            <p className={pf('text-heading--medium')}>$185,000</p>
            <p className={pf('truncate')}><a href="#">Company Two</a></p>
            <p className={pf('truncate has-alert')}>Closing 12/15/2015</p>
            { image() }
          </div>
        </div>
      </li>
    </StatefulClass>
    <StatefulClass>
      <li className={pf('list__item')}>
        <div className={pf('tile tile--board')}>
          <p className={pf('tile__title truncate')}>
            <a href="#">600 Widgets</a>
          </p>
          <div className={pf('tile__detail')}>
            <p className={pf('text-heading--medium')}>$35,000</p>
            <p className={pf('truncate')}><a href="#">Company Three</a></p>
            <p className={pf('truncate')}>Closing 10/12/2015</p>
          </div>
        </div>
      </li>
    </StatefulClass>
  </ul>
</div>
);
exports.code = (
<div className='demo-only' style={{width: '300px'}}>
  <ul className={pf('list--vertical has-cards')}>
    <li className={pf('list__item')}>
      <div className={pf('tile tile--board')}>
        <p className={pf('tile__title truncate')}>
          <a href="#">Cloudhub + Anypoint Connectors</a>
        </p>
        <div className={pf('tile__detail')}>
          <p className={pf('text-heading--medium')}>$500,000</p>
          <p className={pf('truncate')}><a href="#">Company One</a></p>
          <p className={pf('truncate')}>Closing 9/30/2015</p>
        </div>
      </div>
    </li>
    <li className={pf('list__item')}>
      <div className={pf('tile tile--board')}>
        <p className={pf('tile__title truncate')}>
          <a href="#">Cloudhub</a>
        </p>
        <div className={pf('tile__detail')}>
          <p className={pf('text-heading--medium')}>$185,000</p>
          <p className={pf('truncate')}><a href="#">Company Two</a></p>
          <p className={pf('truncate has-alert')}>Closing 12/15/2015</p>
          { image() }
        </div>
      </div>
    </li>
    <li className={pf('list__item')}>
      <div className={pf('tile tile--board')}>
        <p className={pf('tile__title truncate')}>
          <a href="#">600 Widgets</a>
        </p>
        <div className={pf('tile__detail')}>
          <p className={pf('text-heading--medium')}>$35,000</p>
          <p className={pf('truncate')}><a href="#">Company Three</a></p>
          <p className={pf('truncate')}>Closing 10/12/2015</p>
        </div>
      </div>
    </li>
  </ul>
</div>
);
