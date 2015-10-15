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
const Button = require('ui/components/buttons/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className={pf('demo-only demo-only--dropdown')} style={{height: '205px'}}>
  <div className={pf('dropdown-trigger')}>
    <Button flavor="icon-more" aria-haspopup="true">
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="table" />
      <span className={pf('assistive-text')}>Settings</span>
      <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
    </Button>
    <div className={pf('dropdown dropdown--left dropdown--small ')}>
      <div className={pf('dropdown__header')}>
        <span className={pf('text-heading--label')}>Display As</span>
      </div>
      <ul className={pf('dropdown__list')} role="menu">
        <li className={pf('dropdown__item is-selected')} aria-selected="true">
          <a href="javascript:void(0)" className={pf('truncate')} role="menuitemradio">
            <p>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Table
            </p>
            <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="table" />
          </a>
        </li>
        <li className={pf('dropdown__item')}>
          <a href="javascript:void(0)" className={pf('truncate')} role="menuitemradio">
            <p>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Cards
            </p>
            <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="kanban" />
          </a>
        </li>
        <li className={pf('dropdown__item')}>
          <a href="javascript:void(0)" className={pf('truncate')} role="menuitemradio">
            <p>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Compact List
            </p>
            <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="side_list" />
          </a>
        </li>
      </ul>
    </div>
    {/*<Menu className={pf('dropdown--left dropdown--small')}>
      <Menu.Header>
        <Menu.Title>Display As</Menu.Title>
      </Menu.Header>
      <Menu.List>
        <Menu.Item className={pf('is-selected')} href="javascript:void(0)" aria-selected="true">
          Table
          <SvgIcon className={pf('icon icon--small icon--right')} sprite="utility" symbol="table" />
        </Menu.Item>
        <Menu.Item href="javascript:void(0)">
          Cards
          <SvgIcon className={pf('icon icon--small icon--right')} sprite="utility" symbol="kanban" />
        </Menu.Item>
        <Menu.Item href="javascript:void(0)">
          Compact List
          <SvgIcon className={pf('icon icon--small icon--right')} sprite="utility" symbol="side_list" />
        </Menu.Item>
      </Menu.List>
    </Menu>*/}
  </div>
</div>
);
