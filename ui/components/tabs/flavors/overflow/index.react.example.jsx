/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Tabs = require('../../index.react');
const Menu = require('ui/components/menus/index.react');
const Button = require('ui/components/buttons/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only demo-only--dropdown' style={{height: '30rem'}}>
  <Tabs flavor="default">
    <Tabs.Item title="Item One" id="tab-default-1">
      <h2>Item One Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      <h2>Item Two Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      <h2>Item Three Content</h2>
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
    <Tabs.ItemOverflow title="More" className={pf('dropdown-trigger tabs__item')}>
      <a href="#" aria-haspopup="true">More
        <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
      </a>
      <Menu className={pf('dropdown--medium dropdown--right dropdown--overflow')}>
        <Menu.List isSelectable={false}>
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
</div>
);
