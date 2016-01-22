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
  <div className={pf('path-coach')}>
    <div className={pf('path__row grid')}>
      <ButtonIcon
        flavor="icon-small"
        className="path__trigger no-flex"
        sprite="utility"
        symbol="chevrondown"
        assistiveText="Open" />
      <div className={pf('tabs--path m-left--small')} role="application">
        <ul className={pf('tabs--path__nav')}  role="tablist">
          <li className={pf('tabs--path__item is-complete')} role="presentation">
            <a className={pf('tabs--path__link')} id="tabs-path-1" aria-controls="content-path-1" aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
              <span className={pf('tabs--path__stage')}>
                <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
                <span className={pf('assistive-text')}>Stage Complete</span>
              </span>
              <span className={pf('tabs--path__title')}>Contacted</span>
            </a>
          </li>
          <li className={pf('tabs--path__item is-complete')} role="presentation">
            <a className={pf('tabs--path__link')} id="tabs-path-2" aria-controls="content-path-2" aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
              <span className={pf('tabs--path__stage')}>
                <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
                <span className={pf('assistive-text')}>Stage Complete</span>
              </span>
              <span className={pf('tabs--path__title')}>Open</span>
            </a>
          </li>
          <li className={pf('tabs--path__item is-current')} role="presentation">
            <a className={pf('tabs--path__link')} id="tabs-path-3" aria-controls="content-path-3" aria-selected="true" tabIndex="0" role="tab" href="#void" aria-live="assertive">
              <span className={pf('tabs--path__stage')}>
                <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              </span>
              <span className={pf('tabs--path__title')}>Unqualified</span>
            </a>
          </li>
          <li className={pf('tabs--path__item is-incomplete')} role="presentation">
            <a className={pf('tabs--path__link')} id="tabs-path-4" aria-controls="content-path-4" aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
              <span className={pf('tabs--path__stage')}>
                <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              </span>
              <span className={pf('tabs--path__title')}>Nurturing</span>
            </a>
          </li>
          <li className={pf('tabs--path__item is-incomplete')} role="presentation">
            <a className={pf('tabs--path__link')} id="tabs-path-5" aria-controls="content-path-5" aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
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
    <div id="content-path-1" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-1">
      <h2>Item One Content</h2>
    </div>
    <div id="content-path-2" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-2">
      <h2>Item Two Content</h2>
    </div>
    <div id="content-path-3" className={pf('tabs--path__content slds-show')} role="tabpanel" aria-labelledby="tab-path-3">
      <div className={pf('grid grid--align-spread')}>
        <div className={pf('coach__keys size--1-of-2 m--left-x-large')}>
          <div className={pf('grid grid--align-spread')}>
            <h2 className={pf('text-heading--label p-bottom--small')}>Key Fields This Stage</h2>
            <span className={pf('text-body--small')}><a href="#void">Edit</a></span>
          </div>
          <dl className={pf('coach__list dl--horizontal')}>
            <dt className={pf('coach__item dl--horizontal__label')}>Expected Budget</dt>
            <dd className={pf('coach__value dl--horizontal__detail')}>$10,000</dd>
            <dt className={pf('coach__item dl--horizontal__label')}>Lead Source</dt>
            <dd className={pf('coach__value dl--horizontal__detail')}>Marketing and Web Referral</dd>
            <dt className={pf('coach__item dl--horizontal__label')}>Support Engineer</dt>
            <dd className={pf('coach__value dl--horizontal__detail')}><a href="#void">Jack Arthur</a></dd>
          </dl>
        </div>
        <div className={pf('coach__guidance size--1-of-2 m-left--x-large')}>
          <h2 className={pf('text-heading--label p-bottom--small has-divider--bottom')}>Guidance for Success</h2>
          <div className={pf('text-longform p-top--medium')}>
            <p>Regularly cross-sell related products using <a href="#void">cross-sell tactics and principles</a>.</p>
            <p>Prepare demo deck using the <a href="#void">latest template</a> and review with Marketing and Sales teams. Review demo copy with Legal and Doc team.</p>
            <p>Look up <a href="#void">needs analysis principles</a> and review selling plan with Sales Engineer.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="content-path-4" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-4">
      <h2>Item Four Content</h2>
    </div>
    <div id="content-path-5" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-5">
      <h2>Item Five Content</h2>
    </div>
  </div>
</div>
);
