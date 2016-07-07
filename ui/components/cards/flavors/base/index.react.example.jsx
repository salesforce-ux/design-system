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
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

const headerActionOverflow = (
  <button className={pf('button button--icon-border-filled button--icon-x-small')}>
    <SvgIcon className={pf('button__icon')} sprite="utility" symbol="down" />
    <span className={pf('assistive-text')}>More Options</span>
  </button>
);

const headerAction = (
  <button className={pf('button button--neutral col--bump-left')}>New</button>
);

const headerSearch = (
  <div className={pf('input-has-icon input-has-icon--left size--1-of-3')}>
    <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
    <label htmlFor="text-input-01" className={pf('assistive-text')}>Find in List</label>
    <input id="text-input-01" className={pf('input')} type="text" placeholder="Find in List" />
  </div>
);

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Card = props =>
  <div className={className(pf('card'), props.className)}>
    { props.children }
  </div>;

export let CardHeader = props =>
  <div className={className(pf('card__header grid'), props.className)}>
    <div className={className(pf('media media--center has-flexi-truncate'), props.search ? pf('size--1-of-3') : null)}>
      { props.symbol ?
        <div className={pf('media__figure')}>
          <SvgIcon className={pf('icon icon-standard-' + props.symbol + ' icon--small')} sprite="standard" symbol={ props.symbol } />
        </div> : null }
      <div className={pf('media__body truncate')}>
        <a href="javascript:void(0);" className={pf('text-link--reset')}>{ props.children }</a>
      </div>
    </div>
    { props.search ? headerSearch : null }
    <div className={className(pf('no-flex'), props.search ? pf('size--1-of-3') : null)}>
      { props.actions == 'overflow' ? headerActionOverflow : headerAction }
    </div>
  </div>;

export let CardBody = props =>
  <div className={className(pf('card__body'), props.className)}>
    { props.children }
  </div>;

export let CardFooter = props =>
  <div className={className(pf('card__footer'), props.className)}>
    { props.children }
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'card',
    label: 'Default',
    element:
      <Card>
        <CardHeader symbol="contact" actions><span className={pf('text-heading--small')}>Card Header</span></CardHeader>
        <CardBody className={pf('text-align--center')}>Card Body (custom goes in here)</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
  },
  {
    id: 'card-empty',
    label: 'Empty',
    element:
      <Card>
        <CardHeader symbol="contact" actions><span className={pf('text-heading--small')}>Card Header</span></CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
  }
];
