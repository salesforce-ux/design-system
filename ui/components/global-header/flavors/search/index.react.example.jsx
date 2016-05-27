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
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let ButtonIcon = props =>
  <button className={className(pf('button'), props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    <SvgIcon className={className(pf('button__icon'), props.iconClassName)} sprite="utility" symbol={ props.symbol } />
    <span className={pf('assistive-text')}>{ props.assistiveText }</span>
  </button>;

let GlobalHeader = props =>
  <header className={pf('global-header_container')}>
    <a href="#void" className={pf('assistive-text')}>Skip to Navigation</a>
    <a href="#void" className={pf('assistive-text')}>Skip to Main Content</a>
    <div className={pf('global-header grid grid--align-spread')}>
      <div className={pf('global-header__item')}>
        <div className={pf('global-header__logo')}>
          <img src="/assets/images/logo.svg" alt="Salesforce.com" />
        </div>
      </div>
      <div className={pf('global-header__item global-header__item--search')}>
        { props.children }
      </div>
      <ul className={pf('global-header__item grid grid--vertical-align-center grid--reverse')}>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click m-left--x-small'), props.setup ? pf('is-open'): null)}>
          <a href="#void" title="View Title">
            <span className={pf('avatar avatar--circle avatar--x-small')}>
              <img src="/assets/images/avatar2.jpg" alt="person name" />
            </span>
          </a>
        </li>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click'), props.setup ? pf('is-open'): null)}>
          <ButtonIcon className={pf('button--icon-container')} hasPopup symbol="settings" assistiveText="Setup" />
        </li>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click'), props.help ? pf('is-open'): null)}>
          <ButtonIcon className={pf('button--icon-container')} hasPopup symbol="question" assistiveText="Help and Training" />
        </li>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click'), props.actions ? pf('is-open'): null)}>
          <ButtonIcon className={pf('button--icon-container')} hasPopup symbol="add" assistiveText="Global Actions" />
        </li>
      </ul>
    </div>
  </header>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'global-header-search-active',
    label: 'Active',
    element:
      <div className="demo-only" style={{ height: '260px' }}>
        <GlobalHeader>
          <div className={pf('form-element lookup is-open')}>
            <label className={pf('assistive-text')} htmlFor="global-search">Search Salesforce</label>
            <div className={pf('form-element__control lookup__search-control input-has-icon input-has-icon--left')}>
              <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
              <input id="global-search" className={pf('input lookup__search-input')} type="search" placeholder="Search Salesforce" />
            </div>
            <div className={pf('lookup__menu')} role="listbox">
              <div className={pf('lookup__item--label text-body--small')}>Recent Items</div>
              <ul className={pf('lookup__list')} role="presentation">
                <li>
                  <a className={pf('lookup__item-action media media--center')} id="option-01" href="#void" role="option">
                    <SvgIcon className={pf('icon icon-standard-opportunity icon--small media__figure')} sprite="standard" symbol="opportunity" />
                    <div className={pf('media__body')}>
                      <div className={pf('lookup__result-text')}>Salesforce - 1,000 Licenses</div>
                      <span className={pf('lookup__result-meta text-body--small')}>Opportunity &bull; Prospecting</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={pf('lookup__item-action media media--center')} id="option-02" href="#void" role="option">
                    <SvgIcon className={pf('icon icon-standard-contact icon--small media__figure')} sprite="standard" symbol="contact" />
                    <div className={pf('media__body')}>
                      <div className={pf('lookup__result-text')}>Art Vandelay</div>
                      <span className={pf('lookup__result-meta text-body--small')}>Contact &bull; avandelay@vandelay.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={pf('lookup__item-action media media--center')} id="option-03" href="#void" role="option">
                    <SvgIcon className={pf('icon icon-standard-account icon--small media__figure')} sprite="standard" symbol="account" />
                    <div className={pf('media__body')}>
                      <div className={pf('lookup__result-text')}>Vandelary Industries</div>
                      <span className={pf('lookup__result-meta text-body--small')}>Account &bull; San Francisco</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={pf('lookup__item-action media media--center')} id="option-04" href="#void" role="option">
                    <SvgIcon className={pf('icon icon-custom-8 icon--small media__figure')} sprite="custom" symbol="custom8" />
                    <div className={pf('media__body')}>
                      <div className={pf('lookup__result-text')}>Salesforce UK 2016 Events</div>
                      <span className={pf('lookup__result-meta text-body--small')}>General Ledger &bull; $20,000</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={pf('lookup__item-action media media--center')} id="option-04" href="#void" role="option">
                    <SvgIcon className={pf('icon icon-standard-lead icon--small media__figure')} sprite="standard" symbol="lead" />
                    <div className={pf('media__body')}>
                      <div className={pf('lookup__result-text')}>H.E. Pennypacker</div>
                      <span className={pf('lookup__result-meta text-body--small')}>Lead &bull; Nursing</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </GlobalHeader>
      </div>
  },
  {
    id: 'global-header-search-typeahead',
    label: 'Typeahead',
    element:
      <div className="demo-only" style={{ height: '310px' }}>
      <GlobalHeader>
        <div className={pf('form-element lookup is-open')}>
          <label className={pf('assistive-text')} htmlFor="global-search">Search Salesforce</label>
          <div className={pf('form-element__control lookup__search-control input-has-icon input-has-icon--left-right')}>
            <button className={pf('input__icon input__icon--right button button--icon')}>
              <SvgIcon className={pf('button__icon')} sprite="utility" symbol="clear" />
              <span className={pf('assistive-text')}>Clear</span>
            </button>
            <SvgIcon className={pf('input__icon input__icon--left')} sprite="utility" symbol="search" />
            <input id="global-search" className={pf('input lookup__search-input')} type="search" defaultValue="ibm" />
          </div>
          <div className={pf('lookup__menu')} role="listbox">
            <a href="#void" className={pf('lookup__item-action lookup__item-action--label text-body--small')}>
              <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="search" />
              <span className={pf('truncate')}>"ibm" in Salesforce</span>
              <span className={pf('col--bump-left shrink-none')}>Click "enter" to search</span>
            </a>
            <ul className={pf('lookup__list')} role="presentation">
              <li>
                <a className={pf('lookup__item-action media media--center')} id="option-01" href="#void" role="option">
                  <SvgIcon className={pf('icon icon-standard-opportunity icon--small media__figure')} sprite="standard" symbol="opportunity" />
                  <div className={pf('media__body')}>
                    <div className={pf('lookup__result-text')}><mark>IBM</mark> - 1yr/100k</div>
                    <span className={pf('lookup__result-meta text-body--small')}>Opportunity &bull; Proposal/Quote</span>
                  </div>
                </a>
              </li>
              <li>
                <a className={pf('lookup__item-action media media--center')} id="option-02" href="#void" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small media__figure')} sprite="standard" symbol="account" />
                  <div className={pf('media__body')}>
                    <div className={pf('lookup__result-text')}><mark>IBM</mark></div>
                    <span className={pf('lookup__result-meta text-body--small')}>Account  &bull; Menlo Park</span>
                  </div>
                </a>
              </li>
              <li>
                <a className={pf('lookup__item-action media media--center')} id="option-03" href="#void" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small media__figure')} sprite="standard" symbol="account" />
                  <div className={pf('media__body')}>
                    <div className={pf('lookup__result-text')}><mark>IBM</mark> Watson</div>
                    <span className={pf('lookup__result-meta text-body--small')}>Account  &bull; Menlo Park</span>
                  </div>
                </a>
              </li>
              <li>
                <a className={pf('lookup__item-action media media--center')} id="option-04" href="#void" role="option">
                  <SvgIcon className={pf('icon icon-standard-opportunity icon--small media__figure')} sprite="standard" symbol="opportunity" />
                  <div className={pf('media__body')}>
                    <div className={pf('lookup__result-text')}>200 Service Licenses - <mark>IBM</mark></div>
                    <span className={pf('lookup__result-meta text-body--small')}>Opportunity  &bull; Close-Won</span>
                  </div>
                </a>
              </li>
              <li>
                <a className={pf('lookup__item-action media media--center')} id="option-04" href="#void" role="option">
                  <SvgIcon className={pf('icon icon-standard-contact icon--small media__figure')} sprite="standard" symbol="contact" />
                  <div className={pf('media__body')}>
                    <div className={pf('lookup__result-text')}>Art Vandelay (<mark>IBM</mark>)</div>
                    <span className={pf('lookup__result-meta text-body--small')}>User &bull; Latex Salesman</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#void" className={pf('lookup__item-action lookup__item-action--label')}>
              <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="forward" />
              <span className={pf('truncate')}>Go to <mark>Groups</mark> home</span>
            </a>
          </div>
        </div>
      </GlobalHeader>
      </div>
  }
];
