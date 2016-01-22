/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
<div className='demo-only'>
  <div className={pf('path__row grid')}>
    <div className={pf('tabs--path')} role="application tablist">
      <ul className={pf('tabs--path__nav')} role="presentation">
        <li className={pf('tabs--path__item is-complete')} role="presentation">
          <a className={pf('tabs--path__link')} aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              <span className={pf('assistive-text')}>Stage Complete</span>
            </span>
            <span className={pf('tabs--path__title')}>Contacted</span>
          </a>
        </li>
        <li className={pf('tabs--path__item is-complete')} role="presentation">
          <a className={pf('tabs--path__link')} aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              <span className={pf('assistive-text')}>Stage Complete</span>
            </span>
            <span className={pf('tabs--path__title')}>Open</span>
          </a>
        </li>
        <li className={pf('tabs--path__item is-current')} role="presentation">
          <a className={pf('tabs--path__link')} aria-selected="true" tabIndex="0" role="tab" href="#void" aria-live="assertive">
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Unqualified</span>
          </a>
        </li>
        <li className={pf('tabs--path__item is-incomplete')} role="presentation">
          <a className={pf('tabs--path__link')} aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Nurturing</span>
          </a>
        </li>
        <li className={pf('tabs--path__item is-incomplete')} role="presentation">
          <a className={pf('tabs--path__link')} aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Closed</span>
          </a>
        </li>
      </ul>
    </div>
    <Button flavor="brand" className={pf('path__complete button--small no-flex m-left--small')}>
      <SvgIcon className={pf('button__icon button__icon--left')} sprite="utility" symbol="check" />
      Mark Status as Complete
    </Button>
  </div>
</div>
);
