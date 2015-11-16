/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Menu from 'ui/components/menus/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Button from 'ui/components/buttons/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

exports.preview = (
<div className={pf('demo-only demo-only--dropdown')} style={{height: '400px'}}>
  <div className={pf('grid grid--vertical grid--align-spread')} style={{height: '100%'}}>
    <div className={pf('grid grid--align-spread p-horizontal--medium')}>
      <div className={pf('dropdown-trigger')}>
        <ButtonIcon flavor="icon-container" sprite="utility" symbol="settings" assistiveText="Settings" aria-haspopup="true" />
        <Menu className={pf('dropdown--left nubbin--top-left')}>
          <Menu.List isSelectable={false}>
            <Menu.Item>Menu Item One</Menu.Item>
            <Menu.Item>Menu Item Two</Menu.Item>
            <Menu.Item>Menu Item Three</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
      <div className={pf('dropdown-trigger')}>
        <ButtonIcon flavor="icon-container" sprite="utility" symbol="settings" assistiveText="Settings" aria-haspopup="true" />
        <Menu className={pf('nubbin--top')}>
          <Menu.List isSelectable={false}>
            <Menu.Item>Menu Item One</Menu.Item>
            <Menu.Item>Menu Item Two</Menu.Item>
            <Menu.Item>Menu Item Three</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
      <div className={pf('dropdown-trigger')}>
        <ButtonIcon flavor="icon-container" sprite="utility" symbol="settings" assistiveText="Settings" aria-haspopup="true" />
        <Menu className={pf('dropdown--right nubbin--top-right')}>
          <Menu.List isSelectable={false}>
            <Menu.Item>Menu Item One</Menu.Item>
            <Menu.Item>Menu Item Two</Menu.Item>
            <Menu.Item>Menu Item Three</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
    </div>
    <hr />
    <div className={pf('grid grid--align-spread p-horizontal--medium')}>
      <div className={pf('dropdown-trigger')}>
        <ButtonIcon flavor="icon-container" sprite="utility" symbol="settings" assistiveText="Settings" aria-haspopup="true" />
        <Menu className={pf('dropdown--bottom dropdown--left nubbin--bottom-left')}>
          <Menu.List isSelectable={false}>
            <Menu.Item>Menu Item One</Menu.Item>
            <Menu.Item>Menu Item Two</Menu.Item>
            <Menu.Item>Menu Item Three</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
      <div className={pf('dropdown-trigger')}>
        <ButtonIcon flavor="icon-container" sprite="utility" symbol="settings" assistiveText="Settings" aria-haspopup="true" />
        <Menu className={pf('dropdown--bottom nubbin--bottom')}>
          <Menu.List isSelectable={false}>
            <Menu.Item>Menu Item One</Menu.Item>
            <Menu.Item>Menu Item Two</Menu.Item>
            <Menu.Item>Menu Item Three</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
      <div className={pf('dropdown-trigger')}>
        <ButtonIcon flavor="icon-container" sprite="utility" symbol="settings" assistiveText="Settings" aria-haspopup="true" />
        <Menu className={pf('dropdown--bottom dropdown--right nubbin--bottom-right')}>
          <Menu.List isSelectable={false}>
            <Menu.Item>Menu Item One</Menu.Item>
            <Menu.Item>Menu Item Two</Menu.Item>
            <Menu.Item>Menu Item Three</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
    </div>
  </div>
</div>
);

exports.code = (
<div className="demo-only">

  {/* Top Left */}
  <Menu className={pf('dropdown--left nubbin--top-left')}>
    <Menu.List isSelectable={false}>
      <Menu.Item>Menu Item One</Menu.Item>
      <Menu.Item>Menu Item Two</Menu.Item>
    </Menu.List>
  </Menu>

  {/* Top  */}
  <Menu className={pf('nubbin--top')}>
    <Menu.List isSelectable={false}>
      <Menu.Item>Menu Item One</Menu.Item>
      <Menu.Item>Menu Item Two</Menu.Item>
    </Menu.List>
  </Menu>

  {/* Top Right */}
  <Menu className={pf('dropdown--right nubbin--top-right')}>
    <Menu.List isSelectable={false}>
      <Menu.Item>Menu Item One</Menu.Item>
      <Menu.Item>Menu Item Two</Menu.Item>
    </Menu.List>
  </Menu>

  {/* Bottom Left */}
  <Menu className={pf('dropdown--left nubbin--bottom-left')}>
    <Menu.List isSelectable={false}>
      <Menu.Item>Menu Item One</Menu.Item>
      <Menu.Item>Menu Item Two</Menu.Item>
    </Menu.List>
  </Menu>

  {/* Bottom  */}
  <Menu className={pf('nubbin--top')}>
    <Menu.List isSelectable={false}>
      <Menu.Item>Menu Item One</Menu.Item>
      <Menu.Item>Menu Item Two</Menu.Item>
    </Menu.List>
  </Menu>

  {/* Bottom Right */}
  <Menu className={pf('dropdown--right nubbin--bottom-right')}>
    <Menu.List isSelectable={false}>
      <Menu.Item>Menu Item One</Menu.Item>
      <Menu.Item>Menu Item Two</Menu.Item>
    </Menu.List>
  </Menu>


</div>
);
