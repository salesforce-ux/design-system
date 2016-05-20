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
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
<div className={pf('demo-only')} style={{ height: '240px' }}>

  <div className={pf('picklist dropdown-trigger dropdown-trigger--click is-open')} aria-expanded="true" >
    <button className={pf('button button--neutral picklist__label')} aria-haspopup="true" aria-activedescendant="">
      <span className={pf('truncate')}>Select an Option</span> <SvgIcon className={pf('icon')} sprite="utility" symbol="down" />
    </button>
    <div className={pf('dropdown dropdown--left')}>
      <ul className={pf('dropdown__list dropdown--length-5')} role="menu">
        <li className={pf('dropdown__item')}>
          <a href="javascript:void(0)" role="menuitemradio">
            <p className={pf('truncate')}>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              All
            </p>
          </a>
        </li>
        <li className={pf('dropdown__item')}>
          <a href="javascript:void(0)" role="menuitemradio">
            <p className={pf('truncate')}>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Option A
            </p>
          </a>
        </li>
        <li className={pf('dropdown__item is-selected')} aria-selected="true">
          <a href="javascript:void(0)" role="menuitemradio">
            <p className={pf('truncate')}>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Option B
            </p>
          </a>
        </li>
        <li className={pf('dropdown__item is-selected')} aria-selected="true">
          <a href="javascript:void(0)" role="menuitemradio">
            <p className={pf('truncate')}>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Option C
            </p>
          </a>
        </li>
        <li className={pf('dropdown__item')}>
          <a href="javascript:void(0)" role="menuitemradio">
            <p className={pf('truncate')}>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Option D
            </p>
          </a>
        </li>
        <li className={pf('dropdown__item')}>
          <a href="javascript:void(0)" role="menuitemradio">
            <p className={pf('truncate')}>
              <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
              Option E
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className={pf('pill_container--bare')}>
    <span className={pf('pill')}>
      <span className={pf('pill__label')}>Option B</span>
      <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove Option B" />
    </span>
    <span className={pf('pill')}>
      <span className={pf('pill__label')}>Option C</span>
      <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove Option C" />
    </span>
  </div>
</div>
);
