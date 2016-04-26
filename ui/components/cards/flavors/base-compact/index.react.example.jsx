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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Card = props =>
  <div className={pf('card card--compact')}>
    <div className={pf('card__header card__header--border grid')}>
      <a href="#void" className={pf('text-link--reset truncate')}>
        <span className={pf('text-heading--label-normal')}>Header</span>
      </a>
      <button className={pf('col--bump-left shrink-none button button--icon-border button--icon-x-small')}>
        <SvgIcon className={pf('button__icon')} sprite="utility" symbol="down" />
        <span className={pf('assistive-text')}>More Options</span>
      </button>
    </div>
    <div className={pf('card__body')}>
      { props.children }
    </div>
  </div>;

let Tile = props =>
  <div className={pf('tile')}>
    <p className={pf('tile__title truncate')}><a href="#void">{ props.title || 'Related Record Title' }</a></p>
    <div className={pf('tile__detail text-body--small')}>
      <dl className={pf('dl--horizontal text-body--small')}>
        <dt className={pf('dl--horizontal__label')}>
          <p className={pf('truncate')}>Type:</p>
        </dt>
        <dd className={pf('dl--horizontal__detail tile__meta')}>
          <p className={pf('truncate')}>Visit</p>
        </dd>
        <dt className={pf('dl--horizontal__label')}>
          <p className={pf('truncate')}>Date:</p>
        </dt>
        <dd className={pf('dl--horizontal__detail tile__meta')}>
          <p className={pf('truncate')}>1/31/15 3:45PM</p>
        </dd>
      </dl>
    </div>
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ width: '230px' }}>
    <Card>
      <Tile title="Related Record Title 1" />
      <Tile title="Related Record Title 2" />
      <Tile title="Related Record Title 3" />
    </Card>
  </div>
);

{/*export let states = [
  {
    id: 'card-compact',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '230px' }}>
        <Card>
          <Tile title="Related Record Title 1" />
          <Tile title="Related Record Title 2" />
          <Tile title="Related Record Title 3" />
        </Card>
      </div>
  }
];*/}
