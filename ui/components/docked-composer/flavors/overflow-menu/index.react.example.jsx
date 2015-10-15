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
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
  <div className='demo-only' style={{ height: '330px', paddingTop: '290px', paddingLeft: '1rem' }}>
    <div className={pf('docked-composer docked-composer--overflow')}>
      <a href="javascript:void(0)" className={pf('docked-composer__overflow-pill theme--alt-inverse')}>
        <span className={pf('align-middle')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="standard_objects" />
          <span className={pf('assistive-text')}>View other docked windows</span>
        </span>
        <span className={pf('text-body--small align-middle')}>99 +</span>
      </a>
      <Menu className={pf('dropdown--left dropdown--bottom dropdown--nubbin-bottom dropdown--overflow')}>
        <Menu.List isSelectable={false}>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-email m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
              <span className={pf('assistive-text')}>Email Icon</span>
            </span>
            Agenda for next week
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-call m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
              <span className={pf('assistive-text')}>Call Icon</span>
            </span>
            Lei Chan
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-task m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="task" />
              <span className={pf('assistive-text')}>Task Icon</span>
            </span>
            August 14 Meeting Notes
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-email m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
              <span className={pf('assistive-text')}>Email Icon</span>
            </span>
            New Email
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-call m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
              <span className={pf('assistive-text')}>Call Icon</span>
            </span>
            Janet Fitzpatrick
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-call m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
              <span className={pf('assistive-text')}>Call Icon</span>
            </span>
            Call with Adam Fraser
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-note m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="note" />
              <span className={pf('assistive-text')}>Note Icon</span>
            </span>
            Log 5 calls with new leads
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-note m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="note" />
              <span className={pf('assistive-text')}>Note Icon</span>
            </span>
            August 26 Meeting Notes
          </Menu.Item>
          <Menu.Item>
            <span className={pf('icon__container icon-standard-email m-right--x-small')}>
              <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
              <span className={pf('assistive-text')}>Email Icon</span>
            </span>
            New Email
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  </div>
);
