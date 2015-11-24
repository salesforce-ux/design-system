/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Input from 'ui/components/forms/flavors/input/index.react';
import Menu from 'ui/components/menus/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className='demo-only' style={{height: '285px'}}>

  <div className={pf('lookup')} data-select="multi" data-scope="multi" data-typeahead="false">

    <div className={pf('form-element')}>
      <div className={pf('grid form-element__control box--border')}>
        <label className={pf('form-element__label text-align--right')} htmlFor="lookup">
          <p className={pf('truncate align-middle')}>Contacts</p>
        </label>
        <div className={pf('dropdown-trigger align-middle')}>
          <SvgIcon className={pf('icon icon-standard-user icon--small shrink-none')} sprite="standard" symbol="user" />
          <ButtonIcon className={pf('button-space-left shrink-none')} flavor="icon-bare" sprite="utility" symbol="down" assistiveText="Filter" />
        </div>
        <input id="lookup" className={pf('input--bare')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder="Search Contacts" />
      </div>
      <div className={pf('pill__container hide')}></div>
    </div>

    <div className={pf('lookup__menu')} role="listbox">
      <ul className={pf('lookup__list')} role="presentation">
        <li className={pf('lookup__item')}>
          <a id="s01" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-user icon--small')} sprite="standard" symbol="user" />
            Diana Rios
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s02" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-user icon--small')} sprite="standard" symbol="user" />
            Nicole Woods
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s03" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-user icon--small')} sprite="standard" symbol="user" />
            James Freeman
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s04" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-user icon--small')} sprite="standard" symbol="user" />
            Gloria Pearson
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s05" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-user icon--small')} sprite="standard" symbol="user" />
            Jordan Dean
          </a>
        </li>
      </ul>
      <div className={pf('lookup__item')}>
        <button className={pf('button')}>
          <SvgIcon className={pf('icon icon-text-default icon--small')} sprite="utility" symbol="add" />
          Add Account
        </button>
      </div>
    </div>
  </div>

</div>
);
