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
import className from 'classnames';
import _ from 'lodash';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

const results = [{
  'unread': true,
  'colOne': 'Riley Shultz',
  'colTwo': '99',
  'colThree': 'Biotech, Inc.',
  'colFour': 'Nurturing'
}, {
  'unread': true,
  'colOne': 'Jason A. - VP of Sales',
  'colTwo': '92',
  'colThree': 'Case Management Solutions',
  'colFour': 'Contacted'
}, {
  'unread': true,
  'colOne': 'Josh Smith',
  'colTwo': '90',
  'colThree': 'Acme, Inc.',
  'colFour': 'Contacted'
}, {
  'unread': true,
  'colOne': 'Bobby Tree',
  'colTwo': '89',
  'colThree': 'Salesforce, Inc.',
  'colFour': 'Closing'
}, {
  'colOne': 'Riley Shultz',
  'colTwo': '74',
  'colThree': 'Tesla',
  'colFour': 'Contacted'
}, {
  'unread': true,
  'colOne': 'Andy Smith',
  'colTwo': '72',
  'colThree': 'Universal Technologies',
  'colFour': 'New'
}, {
  'colOne': 'Jim Steele',
  'colTwo': '71',
  'colThree': 'BigList, Inc.',
  'colFour': 'New'
}, {
  'colOne': 'John Gardner',
  'colTwo': '70',
  'colThree': '3C Systems',
  'colFour': 'Contacted'
}, {
  'colOne': 'Sarah Loehr',
  'colTwo': '68',
  'colThree': 'MedLife, Inc.',
  'colFour': 'New'
}];

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let SplitView = props =>
  <div className={ className('slds-split-view_container', props.hidden ? 'slds-is-closed' : 'slds-is-open') }>
    <div className={ className('slds-split-view slds-grid slds-grid--vertical slds-grow', props.className, props.hidden ? 'slds-hide' : null) }>
      <div className="slds-split-view__header" role="banner">
        <div className="slds-grid">
          <div className="slds-has-flexi-truncate">
            <div className="slds-media slds-media--center slds-m-bottom--x-small">
              <div className="slds-media__figure">
                <div className="slds-icon_container slds-icon-standard-lead">
                  <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="lead" />
                  <span className="slds-assistive-text">Leads</span>
                </div>
              </div>
              <div className="slds-media__body">
                <button className="slds-button slds-p-right--x-small slds-truncate slds-type-focus" aria-haspopup="true">
                  <div className="slds-grid slds-grid--vertical-align-center slds-has-flexi-truncate ">
                    <h1 className="slds-text-heading--small slds-truncate" title="My Leads">My Leads</h1>
                    <SvgIcon className="slds-button__icon slds-button__icon--right slds-no-flex" sprite="utility" symbol="down" assistiveText="Down" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="slds-grid slds-grid--vertical-align-center">
          <p className="slds-text-body--small slds-text-color--inverse-weak">42 items &bull; Updated just now</p>
          <div className="slds-no-flex slds-col--bump-left">
            <ButtonIcon
              hasDropdown
              className="slds-button--icon-inverse slds-button--icon-container-more"
              symbol="side_list"
              assistiveText="Change View"
            />
            <ButtonIcon
              className="slds-button--icon-inverse slds-button--icon-container"
              symbol="refresh"
              assistiveText="Refresh Results"
            />
          </div>
        </div>
      </div>
      <div className="slds-grid slds-grid--vertical" role="grid" aria-readonly="true">
        <div className="slds-split-view__list-header slds-grid slds-text-title--caps" role="row">
          <div role="columnheader">Lead Score <SvgIcon className="slds-icon slds-icon--xx-small slds-text-icon-default slds-align-top" sprite="utility" symbol="arrowdown" assistiveText="Descending" /></div>
        </div>
        <ul className="slds-scrollable--y" role="presentation">
          { props.children }
        </ul>
      </div>
    </div>
    <ButtonIcon
      className={ className('slds-button--icon-inverse slds-split-view__toggle-button', props.hidden ? 'slds-is-closed' : 'slds-is-open') }
      iconClassName="slds-button__icon--x-small"
      symbol="left"
      assistiveText={ props.hidden ? 'Open Panel' : 'Close Panel' }
    />
  </div>;

let Row = props =>
  <li className={ className('slds-split-view__list-item', props.className, props.unread ? 'slds-is-unread' : null) } role="row" key={ props.key }>
    <a href="javascript:void(0);" role="gridcell" className="slds-split-view__list-item-action slds-grow slds-has-flexi-truncate">
      <div className="slds-grid slds-wrap">
        <span role="rowheader" className="slds-truncate slds-text-body--regular slds-text-color--inverse" title={ props.name || 'Object Name' }>
          { props.colOne || 'Column 1' }
        </span>
        <span className="slds-truncate slds-col--bump-left" title={ props.colTwo || 'Column 2' }>
          { props.colTwo || 'Column 2' }
        </span>
      </div>
      <div className="slds-grid slds-wrap">
        <span className="slds-truncate" title={ props.colThree || 'Column 3' }>
          { props.colThree || 'Column 3' }
        </span>
        <span className="slds-truncate slds-col--bump-left" title={ props.colFour || 'Column 4' }>
          { props.colFour || 'Column 4' }
        </span>
      </div>
    </a>
  </li>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView>
          { _.times(5, i =>
            <Row
              key={ i }
              colOne={ results[i].colOne }
              colTwo={ results[i].colTwo }
              colThree={ results[i].colThree }
              colFour={ results[i].colFour }
            />
          )}
        </SplitView>
      </div>
  },
  {
    id: 'overflow',
    label: 'Overflow',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView>
          { _.times(results.length, i =>
            <Row
              key={ i }
              colOne={ results[i].colOne }
              colTwo={ results[i].colTwo }
              colThree={ results[i].colThree }
              colFour={ results[i].colFour }
            />
          )}
        </SplitView>
      </div>
  },
  {
    id: 'unread',
    label: 'Unread Items',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView>
          { _.times(results.length, i =>
            <Row
              key={ i }
              unread={ results[i].unread }
              colOne={ results[i].colOne }
              colTwo={ results[i].colTwo }
              colThree={ results[i].colThree }
              colFour={ results[i].colFour }
            />
          )}
        </SplitView>
      </div>
  },
  {
    id: 'panel-collapsed',
    label: 'Collapsed Panel',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView hidden>
          { _.times(results.length, i =>
            <Row
              key={ i }
              unread={ results[i].unread }
              colOne={ results[i].colOne }
              colTwo={ results[i].colTwo }
              colThree={ results[i].colThree }
              colFour={ results[i].colFour }
            />
          )}
        </SplitView>
      </div>
  }
];
