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
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';


export const preview = (
<div className={pf('demo-only grid grid--align-spread')}>

  <div className={pf('dropdown dropdown--left dropdown--small')} style={{position: 'relative'}}>
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Single Icon - Left</span>
    </div>
    <ul className={pf('dropdown__list')} role="menu">
      <li className={pf('dropdown__item is-selected')} aria-selected="true">
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item One
          </p>
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Two
          </p>
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Three
          </p>
        </a>
      </li>
    </ul>
  </div>

  <div className={pf('dropdown dropdown--left dropdown--small')} style={{position: 'relative'}}>
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Double Icon</span>
    </div>
    <ul className={pf('dropdown__list')} role="menu">
      <li className={pf('dropdown__item is-selected')} aria-selected="true">
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item One
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="table" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Two
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="kanban" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Three
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="side_list" />
        </a>
      </li>
    </ul>
  </div>

  <div className={pf('dropdown dropdown--left dropdown--small')} style={{position: 'relative'}}>
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Single Icon - right</span>
    </div>
    <ul className={pf('dropdown__list')} role="menu">
      <li className={pf('dropdown__item is-selected')} aria-selected="true">
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            Menu Item One
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="table" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            Menu Item Two
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="kanban" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            Menu Item Three
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="side_list" />
        </a>
      </li>
    </ul>
  </div>

</div>
);

export const code = (
<div className={pf('demo-only')}>

  <div className={pf('dropdown dropdown--left dropdown--small')}>
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Single Icon - Left</span>
    </div>
    <ul className={pf('dropdown__list')} role="menu">
      <li className={pf('dropdown__item is-selected')} aria-selected="true">
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item One
          </p>
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Two
          </p>
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Three
          </p>
        </a>
      </li>
    </ul>
  </div>

  <div className={pf('dropdown dropdown--left dropdown--small')}>
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Double Icon</span>
    </div>
    <ul className={pf('dropdown__list')} role="menu">
      <li className={pf('dropdown__item is-selected')} aria-selected="true">
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item One
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="table" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Two
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="kanban" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
            Menu Item Three
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="side_list" />
        </a>
      </li>
    </ul>
  </div>

  <div className={pf('dropdown dropdown--left dropdown--small')}>
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Single Icon - right</span>
    </div>
    <ul className={pf('dropdown__list')} role="menu">
      <li className={pf('dropdown__item is-selected')} aria-selected="true">
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            Menu Item One
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="table" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            Menu Item Two
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="kanban" />
        </a>
      </li>
      <li className={pf('dropdown__item')}>
        <a href="javascript:void(0);" role="menuitemradio">
          <p className={pf('truncate')}>
            Menu Item Three
          </p>
          <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--small shrink-none')} sprite="utility" symbol="side_list" />
        </a>
      </li>
    </ul>
  </div>

</div>
);
