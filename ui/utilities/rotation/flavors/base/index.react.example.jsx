/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const componentUtil = require('app_modules/ui/util/component');
const globals = require('app_modules/global');
const SvgIcon = require('app_modules/ui/svg-icon');
const cssPrefix = globals.cssPrefix;
const pf = componentUtil.prefix;

module.exports = (
  <div className='demo-only'>
    <div className={pf('grid')}>
      <div className={pf('col--padded')}>
        <ul className={pf('list--vertical has-cards--space')}>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--0')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--0</span>.slds-rotate--0</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--45')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--45</span>.slds-rotate--45</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--90')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--90</span>.slds-rotate--90</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--135')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--135</span>.slds-rotate--135</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--180')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--180</span>.slds-rotate--180</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--225')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--225</span>.slds-rotate--225</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--270')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--270</span>.slds-rotate--270</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--315')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--315</span>.slds-rotate--315</li>
        </ul>
      </div>
      <div className={pf('col--padded')}>
        <ul className={pf('list--vertical has-cards--space')}>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-0')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-0</span>.slds-rotate--x-0</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-45')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-45</span>.slds-rotate--x-45</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-90')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-90</span>.slds-rotate--x-90</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-135')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-135</span>.slds-rotate--x-135</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-180')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-180</span>.slds-rotate--x-180</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-225')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-225</span>.slds-rotate--x-225</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-270')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-270</span>.slds-rotate--x-270</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--x-315')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--x-315</span>.slds-rotate--x-315</li>
        </ul>
      </div>
      <div className={pf('col--padded')}>
        <ul className={pf('list--vertical has-cards--space')}>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-0')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-0</span>.slds-rotate--y-0</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-45')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-45</span>.slds-rotate--y-45</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-90')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-90</span>.slds-rotate--y-90</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-135')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-135</span>.slds-rotate--y-135</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-180')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-180</span>.slds-rotate--y-180</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-225')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-225</span>.slds-rotate--y-225</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-270')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-270</span>.slds-rotate--y-270</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--y-315')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--y-315</span>.slds-rotate--y-315</li>
        </ul>
      </div>
      <div className={pf('col--padded')}>
        <ul className={pf('list--vertical has-cards--space')}>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-0')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-0</span>.slds-rotate--z-0</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-45')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-45</span>.slds-rotate--z-45</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-90')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-90</span>.slds-rotate--z-90</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-135')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-135</span>.slds-rotate--z-135</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-180')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-180</span>.slds-rotate--z-180</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-225')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-225</span>.slds-rotate--z-225</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-270')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-270</span>.slds-rotate--z-270</li>
            <li className={pf('list__item')}><SvgIcon className={pf('icon icon--small m-right--small icon-text-default rotate--z-315')}  sprite="utility" symbol="announcement" /><span className={pf('assistive-text')}>slds-rotate--z-315</span>.slds-rotate--z-315</li>
        </ul>
      </div>
    </div>
  </div>
);
