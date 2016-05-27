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
import Menu from 'ui/components/menus/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <div className="demo-only" style={{height: '16rem'}}>
    <div className={pf('context-bar grid')}>
      <div className={pf('context-bar__shadow')}></div>
      <div className={pf('context-bar__primary context-bar-action grid grid--vertical-align-stretch')}>
        <a href="javascript:void(0);" className={pf('context-bar-action__label grid grid--vertical-align-center text-link--reset p-horizontal--large text-heading--small')}>
          Title
        </a>
      </div>
      <nav className={pf('context-bar__secondary grid')} role="navigation">
        <div className={pf('context-bar__vertical-divider')}></div>
        <ul className={pf('grid grid--vertical-stretch')}>
          <li className={pf('context-bar-action grid')}>
            <a href="javascript:void(0);" className={pf('context-bar-action__label text-link--reset grid grid--vertical-align-center')}>Home</a>
          </li>
          <li className={pf('context-bar-action grid dropdown-trigger dropdown-trigger--click is-open')}>
            <a href="javascript:void(0);" className={pf('context-bar-action__label context-bar-action__label--expand text-link--reset grid grid--vertical-align-center')}>Menu Item 1</a>
            <button aria-haspopup="true" className={pf('context-bar-action__trigger button button--icon-bare')}>
              <SvgIcon className={pf('button__icon button__icon--small context-bar-action__trigger-icon')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>Assistive text for submenu</span>
            </button>
            <Menu className={pf('nubbin--top')}>
              <Menu.List isSelectable={false}>
                <Menu.Item>
                  <SvgIcon className={pf('icon icon--x-small icon-text-default m-right--x-small')} sprite="utility" symbol="add" />
                  Main action
                </Menu.Item>
              </Menu.List>
              <hr className={pf('m-vertical--xx-small')} role="presentation" />
              <div className={pf('dropdown__header')}>
                <span className={pf('text-heading--label')}>Menu header</span>
              </div>
              <Menu.List isSelectable={false}>
                <Menu.Item>Menu Item One</Menu.Item>
                <Menu.Item>Menu Item Two</Menu.Item>
                <Menu.Item>Menu Item Three</Menu.Item>
              </Menu.List>
            </Menu>
          </li>
          <li className={pf('context-bar-action grid')}>
            <a href="javascript:void(0);" className={pf('context-bar-action__label context-bar-action__label--expand text-link--reset grid grid--vertical-align-center')}>Menu Item 2</a>
            <button aria-haspopup="true" className={pf('context-bar-action__trigger button button--icon-bare')}>
              <SvgIcon className={pf('button__icon button__icon--small context-bar-action__trigger-icon')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>Assistive text for submenu</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
