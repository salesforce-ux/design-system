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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only">
  <div className={pf('picklist--draggable grid')}>
    <div className={pf('form-element')}>
      <span className={pf('form-element__label')} aria-label="select-1">First Category</span>
      <div className={pf('picklist picklist--multi')}>
        <ul className={pf('picklist__options picklist__options--multi')}>
          <li draggable="true" id="po-8-0" className={pf('picklist__item')} aria-selected="false" tabIndex="0" role="option">
            <span className={pf('truncate')}>Option One</span>
          </li>
        </ul>
      </div>
    </div>
    <div className={pf('grid grid--vertical')}>
      <button className={pf('button button--icon-container')}>
        <SvgIcon className={pf('button__icon')} sprite="utility" symbol="left" />
        <span className={pf('assistive-text')}>Arrow left</span>
      </button>
      <button className={pf('button button--icon-container')}>
        <SvgIcon className={pf('button__icon')} sprite="utility" symbol="right" />
        <span className={pf('assistive-text')}>Arrow right</span>
      </button>
    </div>
    <div className={pf('form-element')}>
      <span className={pf('form-element__label')} aria-label="select-1">First Category</span>
      <div className={pf('picklist picklist--multi')}>
        <ul className={pf('picklist__options picklist__options--multi')}></ul>
      </div>
    </div>
    <div className={pf('grid grid--vertical')}>
      <button className={pf('button button--icon-container')}>
        <SvgIcon className={pf('button__icon')} sprite="utility" symbol="up" />
        <span className={pf('assistive-text')}>Arrow up</span>
      </button>
      <button className={pf('button button--icon-container')}>
        <SvgIcon className={pf('button__icon')} sprite="utility" symbol="down" />
        <span className={pf('assistive-text')}>Arrow down</span>
      </button>
    </div>
  </div>
</div>
);
