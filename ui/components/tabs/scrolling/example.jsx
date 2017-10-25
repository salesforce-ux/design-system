// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabs from '../index.react';
import ButtonIcon from '../../button-icons/';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Scroller = props => (
  <div className="slds-tabs__nav-scroller slds-has-overflow">
    <div className="slds-tabs__nav-scroller_inner">{props.children}</div>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="slds-tabs_default">
        <Scroller>
          <ul className="slds-tabs_default__nav" role="tablist">
            <li
              className="slds-tabs_default__item slds-text-title_caps slds-active"
              title="Item One"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="0"
                aria-selected="true"
                aria-controls="tab-default-1"
                id="tab-default-1__item"
              >
                Item One
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Two"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-2"
                id="tab-default-2__item"
              >
                Item Two
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Three"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-3"
                id="tab-default-3__item"
              >
                Item Three
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Four"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-4"
                id="tab-default-4__item"
              >
                Item Four
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Five"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-5"
                id="tab-default-5__item"
              >
                Item Five
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Six"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-6"
                id="tab-default-6__item"
              >
                Item Six
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Seven"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-7"
                id="tab-default-7__item"
              >
                Item Seven
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Eight"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-8"
                id="tab-default-8__item"
              >
                Item Eight
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Nine"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-9"
                id="tab-default-9__item"
              >
                Item Nine
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Ten"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-10"
                id="tab-default-10__item"
              >
                Item Ten
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Eleven"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-11"
                id="tab-default-11__item"
              >
                Item Eleven
              </a>
            </li>
            <li
              className="slds-tabs_default__item slds-text-title_caps"
              title="Item Twelve"
              role="presentation"
            >
              <a
                className="slds-tabs_default__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-default-12"
                id="tab-default-12__item"
              >
                Item Twelve
              </a>
            </li>
          </ul>
          <div className="slds-tab__scroll-controls">
            <ButtonIcon
              className="slds-button_icon-border"
              symbol="chevronleft"
              aria-hidden="true"
              tabIndex="-1"
              assistiveText="Scroll tabs left"
              title="Scroll tabs left"
            />
            <ButtonIcon
              className="slds-button_icon-border"
              symbol="chevronright"
              aria-hidden="true"
              tabIndex="-1"
              assistiveText="Scroll tabs right"
              title="Scroll tabs right"
            />
          </div>
        </Scroller>
        <div
          id="tab-default-1"
          className="slds-tabs_default__content slds-show"
          role="tabpanel"
          aria-labelledby="tab-default-1__item"
        >
          Item One Content
        </div>
        <div
          id="tab-default-2"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-2__item"
        >
          Item Two Content
        </div>
        <div
          id="tab-default-3"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-3__item"
        >
          Item Three Content
        </div>
        <div
          id="tab-default-4"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-4__item"
        >
          Item Four Content
        </div>
        <div
          id="tab-default-5"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-5__item"
        >
          Item Five Content
        </div>
        <div
          id="tab-default-6"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-6__item"
        >
          Item Six Content
        </div>
        <div
          id="tab-default-7"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-7__item"
        >
          Item Seven Content
        </div>
        <div
          id="tab-default-8"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-8__item"
        >
          Item Eight Content
        </div>
        <div
          id="tab-default-9"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-9__item"
        >
          Item Nine Content
        </div>
        <div
          id="tab-default-10"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-10__item"
        >
          Item Ten Content
        </div>
        <div
          id="tab-default-11"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-11__item"
        >
          Item Eleven Content
        </div>
        <div
          id="tab-default-12"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-12__item"
        >
          Item Twelve Content
        </div>
      </div>
    )
  },
  {
    id: 'scoped',
    label: 'Scoped',
    element: (
      <div className="slds-tabs_scoped">
        <Scroller>
          <ul className="slds-tabs_scoped__nav" role="tablist">
            <li
              className="slds-tabs_scoped__item slds-text-title_caps slds-active"
              title="Item One"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="0"
                aria-selected="true"
                aria-controls="tab-scoped-1"
                id="tab-scoped-1__item"
              >
                Item One
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Two"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-2"
                id="tab-scoped-2__item"
              >
                Item Two
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Three"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-3"
                id="tab-scoped-3__item"
              >
                Item Three
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Four"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-4"
                id="tab-scoped-4__item"
              >
                Item Four
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Five"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-5"
                id="tab-scoped-5__item"
              >
                Item Five
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Six"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-6"
                id="tab-scoped-6__item"
              >
                Item Six
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Seven"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-7"
                id="tab-scoped-7__item"
              >
                Item Seven
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Eight"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-8"
                id="tab-scoped-8__item"
              >
                Item Eight
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Nine"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-9"
                id="tab-scoped-9__item"
              >
                Item Nine
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Ten"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-10"
                id="tab-scoped-10__item"
              >
                Item Ten
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Eleven"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-11"
                id="tab-scoped-11__item"
              >
                Item Eleven
              </a>
            </li>
            <li
              className="slds-tabs_scoped__item slds-text-title_caps"
              title="Item Twelve"
              role="presentation"
            >
              <a
                className="slds-tabs_scoped__link"
                href="javascript:void(0);"
                role="tab"
                tabIndex="-1"
                aria-selected="false"
                aria-controls="tab-scoped-12"
                id="tab-scoped-12__item"
              >
                Item Twelve
              </a>
            </li>
          </ul>
          <div className="slds-tab__scroll-controls">
            <ButtonIcon
              className="slds-button_icon-border"
              symbol="chevronleft"
              aria-hidden="true"
              tabIndex="-1"
              assistiveText="Scroll tabs left"
              title="Scroll tabs left"
            />
            <ButtonIcon
              className="slds-button_icon-border"
              symbol="chevronright"
              aria-hidden="true"
              tabIndex="-1"
              assistiveText="Scroll tabs right"
              title="Scroll tabs right"
            />
          </div>
        </Scroller>
        <div
          id="tab-scoped-1"
          className="slds-tabs_scoped__content slds-show"
          role="tabpanel"
          aria-labelledby="tab-scoped-1__item"
        >
          Item One Content
        </div>
        <div
          id="tab-scoped-2"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-2__item"
        >
          Item Two Content
        </div>
        <div
          id="tab-scoped-3"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-3__item"
        >
          Item Three Content
        </div>
        <div
          id="tab-scoped-4"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-4__item"
        >
          Item Four Content
        </div>
        <div
          id="tab-scoped-5"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-5__item"
        >
          Item Five Content
        </div>
        <div
          id="tab-scoped-6"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-6__item"
        >
          Item Six Content
        </div>
        <div
          id="tab-scoped-7"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-7__item"
        >
          Item Seven Content
        </div>
        <div
          id="tab-scoped-8"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-8__item"
        >
          Item Eight Content
        </div>
        <div
          id="tab-scoped-9"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-9__item"
        >
          Item Nine Content
        </div>
        <div
          id="tab-scoped-10"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-10__item"
        >
          Item Ten Content
        </div>
        <div
          id="tab-scoped-11"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-11__item"
        >
          Item Eleven Content
        </div>
        <div
          id="tab-scoped-12"
          className="slds-tabs_scoped__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-scoped-12__item"
        >
          Item Twelve Content
        </div>
      </div>
    )
  }
];
