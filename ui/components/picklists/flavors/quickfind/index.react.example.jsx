/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Menu = require('ui/components/dropdowns/index.react');
const PickList = require('ui/components/picklists/index.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only' style={{height: '360px'}}>
  <div className={pf('form-element')}>
    <PickList flavor="quickfind" aria-expanded="true">
      <Menu className={pf('dropdown--left dropdown--small')}>
        <Menu.Header>
          <Menu.Filter placeholder="Find in list..." />
          <Menu.Title>Lists</Menu.Title>
        </Menu.Header>
        <Menu.List>
          <Menu.Item className={pf('dropdown__item has-icon--left')} href="#">
            Opportunities Closing this Quarter
          </Menu.Item>
          <Menu.Item className={pf('dropdown__item has-icon--left')} href="#">
            All Opportunities
          </Menu.Item>
          <Menu.Item className={pf('dropdown__item has-icon--left')} href="#">
            My Opportunities
          </Menu.Item>
          <Menu.Item className={pf('dropdown__item has-icon--left')} href="#">
            United Partner Opportunities
          </Menu.Item>
          <Menu.Item className={pf('dropdown__item has-icon--left')} href="#">
            Acme Inc Opportunities
          </Menu.Item>
          <Menu.Item className={pf('dropdown__item has-icon--left')} href="#">
            My Opportunities about 80k
          </Menu.Item>
        </Menu.List>
      </Menu>
    </PickList>
  </div>
</div>
);
