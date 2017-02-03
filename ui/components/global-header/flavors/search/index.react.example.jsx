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
import { GlobalHeader } from 'ui/components/global-header/flavors/base/index.react.example';
import classNames from 'classnames';


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'global-header-search-active',
    label: 'Active',
    element:
      <div className="demo-only" style={{ height: '290px' }}>
        <GlobalHeader autocomplete>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--left">
            <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
            <input
              id="global-search-01"
              className="slds-input slds-lookup__search-input"
              type="search"
              placeholder="Search Salesforce"
              aria-owns="global-search-list-01"
              role="combobox"
              aria-activedescendant=""
              aria-expanded="true"
              aria-autocomplete="list" />
          </div>
          <div className="slds-lookup__menu" role="listbox" id="global-search-list-01">
            <ul className="slds-lookup__list" role="group" aria-label="Recent Items">
              <li role="presentation">
                <h3 role="presentation" className="slds-lookup__item--label slds-text-body--small">Recent Items</h3>
              </li>
              <li role="presentation">
                <span className="slds-lookup__item-action slds-media" id="option-01" role="option">
                  <SvgIcon className="slds-icon slds-icon-standard-opportunity slds-icon--small slds-media__figure" sprite="standard" symbol="opportunity" />
                  <span className="slds-media__body">
                    <span className="slds-lookup__result-text">Salesforce - 1,000 Licenses</span>
                    <span className="slds-lookup__result-meta slds-text-body--small">Opportunity &bull; Prospecting</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span className="slds-lookup__item-action slds-media" id="option-02" role="option">
                  <SvgIcon className="slds-icon slds-icon-standard-contact slds-icon--small slds-media__figure" sprite="standard" symbol="contact" />
                  <span className="slds-media__body">
                    <span className="slds-lookup__result-text">Art Vandelay</span>
                    <span className="slds-lookup__result-meta slds-text-body--small">Contact &bull; avandelay@vandelay.com</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span className="slds-lookup__item-action slds-media" id="option-03" role="option">
                  <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
                  <span className="slds-media__body">
                    <span className="slds-lookup__result-text">Vandelary Industries</span>
                    <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span className="slds-lookup__item-action slds-media" id="option-04" role="option">
                  <SvgIcon className="slds-icon slds-icon-custom-8 slds-icon--small slds-media__figure" sprite="custom" symbol="custom8" />
                  <span className="slds-media__body">
                    <span className="slds-lookup__result-text">Salesforce UK 2016 Events</span>
                    <span className="slds-lookup__result-meta slds-text-body--small">General Ledger &bull; $20,000</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span className="slds-lookup__item-action slds-media" id="option-05" role="option">
                  <SvgIcon className="slds-icon slds-icon-standard-lead slds-icon--small slds-media__figure" sprite="standard" symbol="lead" />
                  <span className="slds-media__body">
                    <span className="slds-lookup__result-text">H.E. Pennypacker</span>
                    <span className="slds-lookup__result-meta slds-text-body--small">Lead &bull; Nursing</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </GlobalHeader>
      </div>,
    script: `
      document.getElementById('global-search-01').focus()
    `
  },
  {
    id: 'global-header-search-typeahead',
    label: 'Typeahead',
    element:
      <div className="demo-only" style={{ height: '340px' }}>
      <GlobalHeader autocomplete>
        <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--left-right">
          <SvgIcon className="slds-input__icon slds-input__icon--left" sprite="utility" symbol="search" />
          <input
            id="global-search-01"
            className="slds-input slds-lookup__search-input"
            type="search"
            placeholder="Search Salesforce"
            aria-owns="global-search-list-01"
            role="combobox"
            aria-activedescendant="option-00"
            aria-expanded="true"
            aria-autocomplete="list"
            defaultValue="ibm" />
          <button className="slds-input__icon slds-input__icon--right slds-button slds-button--icon">
            <SvgIcon className="slds-button__icon" sprite="utility" symbol="clear" />
            <span className="slds-assistive-text">Clear the current search term</span>
          </button>
        </div>
        <div className="slds-lookup__menu" role="listbox" id="global-search-list-01">
          <ul className="slds-lookup__list" role="presentation">
            <li role="presentation">
              <span className="slds-lookup__item-action slds-lookup__item-action--label slds-text-body--small slds-has-focus" id="option-00" role="option">
                <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default" sprite="utility" symbol="search" />
                <span className="slds-truncate">"ibm" in Salesforce</span>
              </span>
            </li>
            <li role="presentation">
              <span className="slds-lookup__item-action slds-media" id="option-01" role="option">
                <SvgIcon className="slds-icon slds-icon-standard-opportunity slds-icon--small slds-media__figure" sprite="standard" symbol="opportunity" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text"><mark>IBM</mark> - 1yr/100k</span>
                  <span className="slds-lookup__result-meta slds-text-body--small">Opportunity &bull; Proposal/Quote</span>
                </span>
              </span>
            </li>
            <li role="presentation">
              <span className="slds-lookup__item-action slds-media" id="option-02" role="option">
                <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text"><mark>IBM</mark></span>
                  <span className="slds-lookup__result-meta slds-text-body--small">Account  &bull; Menlo Park</span>
                </span>
              </span>
            </li>
            <li role="presentation">
              <span className="slds-lookup__item-action slds-media" id="option-03" role="option">
                <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text"><mark>IBM</mark> Watson</span>
                  <span className="slds-lookup__result-meta slds-text-body--small">Account  &bull; Menlo Park</span>
                </span>
              </span>
            </li>
            <li role="presentation">
              <span className="slds-lookup__item-action slds-media" id="option-04" role="option">
                <SvgIcon className="slds-icon slds-icon-standard-opportunity slds-icon--small slds-media__figure" sprite="standard" symbol="opportunity" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text">200 Service Licenses - <mark>IBM</mark></span>
                  <span className="slds-lookup__result-meta slds-text-body--small">Opportunity  &bull; Close-Won</span>
                </span>
              </span>
            </li>
            <li role="presentation">
              <span className="slds-lookup__item-action slds-media" id="option-05" role="option">
                <SvgIcon className="slds-icon slds-icon-standard-contact slds-icon--small slds-media__figure" sprite="standard" symbol="contact" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text">Art Vandelay (<mark>IBM</mark>)</span>
                  <span className="slds-lookup__result-meta slds-text-body--small">User &bull; Latex Salesman</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </GlobalHeader>
      </div>,
    script: `
      document.getElementById('global-search-01').focus()
    `
  }
];
