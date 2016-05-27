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
import PickList from 'ui/components/picklists/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only" style={{height: '240px'}}>
  <PickList label="Select an Option" aria-expanded="true">
    <Menu className={pf('dropdown--left')}>
      <Menu.List>
        <Menu.Item href="javascript:void(0);">Option A</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option B</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option C</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option D</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option E</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option F</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option G</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option H</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option I</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option J</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option K</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option L</Menu.Item>
        <Menu.Item href="javascript:void(0);">Option MNOPQRSTUVWXYZ 123456</Menu.Item>
      </Menu.List>
    </Menu>
  </PickList>
</div>
);
