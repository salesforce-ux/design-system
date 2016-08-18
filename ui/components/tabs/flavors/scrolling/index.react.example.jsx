/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Tabs from 'ui/components/tabs/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let Scroller = props =>
  <div className={pf('tabs__nav-scroller has-overflow')}>
    <div className={pf('tabs__nav-scroller--inner')}>
      {props.children}
    </div>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Item One Selected',
    element:
    <div className="slds-tabs--scoped">
      <Scroller>
        <ul className="slds-tabs--scoped__nav" role="tablist">
          <li className="slds-tabs--scoped__item slds-text-title--caps slds-active" title="Item One" role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-scoped-1" id="tab-scoped-1__item">Item One</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Two"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-2" id="tab-scoped-2__item">Item Two</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Three"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-3" id="tab-scoped-3__item">Item Three</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Four"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-4" id="tab-scoped-4__item">Item Four</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Five"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-5" id="tab-scoped-5__item">Item Five</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Six"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-6" id="tab-scoped-6__item">Item Six</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Seven"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-7" id="tab-scoped-7__item">Item Seven</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Eight"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-8" id="tab-scoped-8__item">Item Eight</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Nine"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-9" id="tab-scoped-9__item">Item Nine</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Ten"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-10" id="tab-scoped-10__item">Item Ten</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Eleven"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-11" id="tab-scoped-11__item">Item Eleven</a></li>
          <li className="slds-tabs--scoped__item slds-text-title--caps" title="Item Twelve"
            role="presentation"><a className="slds-tabs--scoped__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-12" id="tab-scoped-12__item">Item Twelve</a></li>
        </ul>
        <div className="slds-tab__scroll-controls">
          <ButtonIcon className={pf('button--icon-border')} symbol="chevronleft" aria-hidden="true" tabIndex="-1" assistiveText="foo" />
          <ButtonIcon className={pf('button--icon-border')} symbol="chevronright" aria-hidden="true" tabIndex="-1" assistiveText="foo" />
        </div>
      </Scroller>
      <div id="tab-scoped-1" className="slds-tabs--scoped__content slds-show" role="tabpanel" aria-labelledby="tab-scoped-1__item">Item One Content</div>
      <div id="tab-scoped-2" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-2__item">Item Two Content</div>
      <div id="tab-scoped-3" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-3__item">Item Three Content</div>
      <div id="tab-scoped-4" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-4__item">Item Four Content</div>
      <div id="tab-scoped-5" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-5__item">Item Five Content</div>
      <div id="tab-scoped-6" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-6__item">Item Six Content</div>
      <div id="tab-scoped-7" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-7__item">Item Seven Content</div>
      <div id="tab-scoped-8" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-8__item">Item Eight Content</div>
      <div id="tab-scoped-9" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-9__item">Item Nine Content</div>
      <div id="tab-scoped-10" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-10__item">Item Ten Content</div>
      <div id="tab-scoped-11" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-11__item">Item Eleven Content</div>
      <div id="tab-scoped-12" className="slds-tabs--scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-12__item">Item Twelve Content</div>
    </div>
  }
];
