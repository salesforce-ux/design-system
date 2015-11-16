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
import SvgIcon from 'app_modules/ui/svg-icon';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

export default (
<div className={pf('demo-only demo-only--dropdown')} style={{height: '250px'}}>
  <div className={pf('dropdown-trigger')}>
    <ButtonIcon flavor="icon-border-filled" iconFlavor="hint" sprite="utility" symbol="down" assistiveText="Show More" aria-haspopup="true" />
    <Menu className={pf('dropdown--left text-heading--label')}>
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
      </Menu.List>
    </Menu>
  </div>
</div>
);
