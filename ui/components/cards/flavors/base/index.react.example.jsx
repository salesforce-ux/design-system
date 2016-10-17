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

const headerActionOverflow = (
  <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true">
    <SvgIcon className="slds-button__icon" sprite="utility" symbol="down" />
    <span className="slds-assistive-text">More Options</span>
  </button>
);

const headerAction = (
  <button className="slds-button slds-button--neutral">New</button>
);

const headerSearch = (
  <div className="slds-input-has-icon slds-input-has-icon--left slds-size--1-of-3">
    <SvgIcon className="slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
    <label htmlFor="text-input-01" className="slds-assistive-text">Find in List</label>
    <input id="text-input-01" className="slds-input" type="text" placeholder="Find in List" />
  </div>
);

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Card = props =>
  <article className={className('slds-card', props.className)}>
    { props.children }
  </article>;

export let CardHeader = props =>
  <div className={className('slds-card__header slds-grid', props.className)}>
    <header className={className('slds-media slds-media--center slds-has-flexi-truncate', props.search ? 'slds-size--1-of-3' : null)}>
      { props.symbol ?
        <div className="slds-media__figure">
          <SvgIcon className={'slds-icon slds-icon-standard-' + props.symbol + ' slds-icon--small'} sprite="standard" symbol={ props.symbol } />
        </div> : null }
      <div className="slds-media__body slds-truncate">
        <h2>
          <a href="javascript:void(0);" className="slds-card__header-link">{ props.children }</a>
        </h2>
      </div>
    </header>
    { props.search ? headerSearch : null }
    <div className={className('slds-no-flex', props.search ? 'slds-size--1-of-3' : null)}>
      { props.actions == 'overflow' ? headerActionOverflow : headerAction }
    </div>
  </div>;

export let CardBody = props =>
  <div className={className('slds-card__body', props.className)}>
    { props.children }
  </div>;

export let CardFooter = props =>
  <div className={className('slds-card__footer', props.className)}>
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
      <div className="demo-only demo-only--center-card-body">
        <Card>
          <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Card Header</span></CardHeader>
          <CardBody>Card Body (custom goes in here)</CardBody>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      </div>
  },
  {
    id: 'card-empty',
    label: 'Empty',
    element:
      <Card>
        <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Card Header</span></CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
  }
];
