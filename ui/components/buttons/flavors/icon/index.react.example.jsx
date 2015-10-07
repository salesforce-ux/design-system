/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

exports.preview = (
  <div className='demo-only'>
    <ol className={pf('list--ordered')}>
      <li>
      <ButtonIcon
        flavor="icon-bare"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
      <a className={pf('button button--icon-bare')}>
        <SvgIcon className={pf('button__icon')} sprite="utility"
        symbol="settings" />
        <span className={pf('assistive-text')}>Settings</span>
      </a>
    </li>
    <li className={pf('m-top--x-small')}>
      <ButtonIcon
        flavor="icon-container"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
      <a className={pf('button button--icon-container')}>
        <SvgIcon className={pf('button__icon')} sprite="utility"
        symbol="settings" />
        <span className={pf('assistive-text')}>Settings</span>
      </a>
      <ButtonIcon
        flavor="icon-container"
        disabled="true"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
    </li>
    <li className={pf('m-top--x-small')}>
      <ButtonIcon
        flavor="icon-border"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
      <a className={pf('button button--icon-border')}>
        <SvgIcon className={pf('button__icon')} sprite="utility"
        symbol="settings" />
        <span className={pf('assistive-text')}>Settings</span>
      </a>
      <ButtonIcon
        flavor="icon-border"
        disabled="true"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
    </li>
    <li className={pf('m-top--x-small')}>
      <ButtonIcon
        flavor="icon-border-filled"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
      <a className={pf('button button--icon-border-filled')}>
        <SvgIcon className={pf('button__icon')} sprite="utility"
        symbol="settings" />
        <span className={pf('assistive-text')}>Settings</span>
      </a>
      <ButtonIcon
        flavor="icon-border-filled"
        disabled="true"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
    </li>
    <li className={pf('m-top--x-small')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-small"
        sprite="utility"
        symbol="settings"
        assistiveText="Settings" />
        <a className={pf('button button--icon-border-filled button--icon-small')}>
        <SvgIcon className={pf('button__icon')} sprite="utility"
        symbol="settings" />
        <span className={pf('assistive-text')}>Settings</span>
      </a>
    </li>
  </ol>
</div>
);
exports.code = (
  <div className='demo-only'>
    <ButtonIcon
      flavor="icon-bare"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />
    <a className={pf('button button--icon-bare')}>
      <SvgIcon className={pf('button__icon')} sprite="utility"
      symbol="settings" />
      <span className={pf('assistive-text')}>Settings</span>
    </a>

    <ButtonIcon
      flavor="icon-container"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />
    <a className={pf('button button--icon-container')}>
      <SvgIcon className={pf('button__icon')} sprite="utility"
      symbol="settings" />
      <span className={pf('assistive-text')}>Settings</span>
    </a>
    <ButtonIcon
      flavor="icon-container"
      disabled="true"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />

    <ButtonIcon
      flavor="icon-border"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />
    <a className={pf('button button--icon-border')}>
      <SvgIcon className={pf('button__icon')} sprite="utility"
      symbol="settings" />
      <span className={pf('assistive-text')}>Settings</span>
    </a>
    <ButtonIcon
      flavor="icon-border"
      disabled="true"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />

    <ButtonIcon
      flavor="icon-border-filled"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />
    <a className={pf('button button--icon-border-filled')}>
      <SvgIcon className={pf('button__icon')} sprite="utility"
      symbol="settings" />
      <span className={pf('assistive-text')}>Settings</span>
    </a>
    <ButtonIcon
      flavor="icon-border-filled"
      disabled="true"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />

    <ButtonIcon
      flavor="icon-border-filled,icon-small"
      sprite="utility"
      symbol="settings"
      assistiveText="Settings" />
      <a className={pf('button button--icon-border-filled button--icon-small')}>
      <SvgIcon className={pf('button__icon')} sprite="utility"
      symbol="settings" />
      <span className={pf('assistive-text')}>Settings</span>
    </a>
  </div>

);
