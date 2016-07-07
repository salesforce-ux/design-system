/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Tabs from 'ui/components/tabs/index.react';
import Menu from 'ui/components/menus/index.react';
import Button from 'ui/components/buttons/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Default as ScopedTabs } from 'ui/components/tabs/flavors/scoped/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<div className="demo-only">
  <Tabs selectedIndex={props.selectedIndex || 0}>
    <Tabs.Item title="Item One" id="tab-default-1">
      {props.itemOneContent || 'Item One Content'}
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
</div>;

let Overflowing = props =>
<div className="demo-only" style={{height: '30rem'}}>
  <Tabs>
    <Tabs.Item title="Item One" id="tab-default-1">
      Item One Content
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
    <Tabs.Item title="Item Four" id="tab-default-4">
      <h2>Item Four Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Five" id="tab-default-5">
      <h2>Item Five Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Six" id="tab-default-6">
      <h2>Item Six Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Seven" id="tab-default-7">
      <h2>Item Seven Content</h2>
    </Tabs.Item>
    <Tabs.ItemOverflow title="More" className={pf('dropdown-trigger dropdown-trigger--click is-open tabs--default__item')}>
      <a className={pf('tabs--default__link')} href="javascript:void(0);" aria-haspopup="true">More <span className={pf('assistive-text')}>search results</span>
        <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
      </a>
      <Menu className={pf('dropdown--medium dropdown--right')}>
        <Menu.List isSelectable={false} className={pf('dropdown--length-with-icon-10')}>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-account m-right--small')} sprite="standard" symbol="account" />
            Accounts
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-approval m-right--small')} sprite="standard" symbol="approval" />
            Approvals
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-lead m-right--small')} sprite="standard" symbol="lead" />
            Lead
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-opportunity m-right--small')} sprite="standard" symbol="opportunity" />
            Opportunities
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-product m-right--small')} sprite="standard" symbol="product" />
            Products
          </Menu.Item>
          <Menu.Item className={pf('has-divider--top-space')}>
            <SvgIcon className={pf('icon icon--small icon-standard-account m-right--small')} sprite="standard" symbol="account" />
            Accounts
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-approval m-right--small')} sprite="standard" symbol="approval" />
            Approvals
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-lead m-right--small')} sprite="standard" symbol="lead" />
            Lead
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-opportunity m-right--small')} sprite="standard" symbol="opportunity" />
            Opportunities
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-product m-right--small')} sprite="standard" symbol="product" />
            Products
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-account m-right--small')} sprite="standard" symbol="account" />
            Accounts
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-approval m-right--small')} sprite="standard" symbol="approval" />
            Approvals
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-lead m-right--small')} sprite="standard" symbol="lead" />
            Lead
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-opportunity m-right--small')} sprite="standard" symbol="opportunity" />
            Opportunities
          </Menu.Item>
          <Menu.Item>
            <SvgIcon className={pf('icon icon--small icon-standard-product m-right--small')} sprite="standard" symbol="product" />
            Products
          </Menu.Item>
        </Menu.List>
      </Menu>
    </Tabs.ItemOverflow>
  </Tabs>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Item One Selected',
    element: <Default />
  },
  {
    id: 'selected',
    label: 'Item Two Selected',
    element: <Default selectedIndex={1} />
  },
  {
    id: 'overflow',
    label: 'Overflowing items',
    element: <Overflowing />
  },
  {
    id: 'nested',
    label: 'With Nested Scoped Tabs',
    element: <Default itemOneContent={<ScopedTabs />} />
  }
];
