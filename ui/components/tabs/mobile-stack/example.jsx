// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const MobileTabSet = props => (
  <ul className={classNames('slds-tabs_mobile', props.className)}>
    {props.children}
  </ul>
);

export const MobileTab = props => (
  <li className={classNames('slds-tabs_mobile__item', props.className)}>
    {props.children}
  </li>
);

export const MobileTabTitle = props => (
  <div className={classNames('slds-tabs_mobile__title', props.className)}>
    {props.children}
  </div>
);

export const MobileTabTitleAction = props => (
  <button className="slds-tabs_mobile__title-action slds-button slds-button_reset">
    <span className="slds-truncate" title={props.summary}>
      {props.summary}
    </span>
    <SvgIcon
      className="slds-icon slds-icon_x-small slds-icon-text-default"
      sprite="utility"
      symbol="chevronright"
    />
  </button>
);

export const MobileStacked = props => (
  <MobileTabSet>
    <MobileTab>
      <MobileTabTitle>
        <MobileTabTitleAction summary="Item One" />
      </MobileTabTitle>
    </MobileTab>
    <MobileTab>
      <MobileTabTitle>
        <MobileTabTitleAction summary="Item Two" />
      </MobileTabTitle>
    </MobileTab>
    <MobileTab>
      <MobileTabTitle>
        <MobileTabTitleAction summary="Item Three" />
      </MobileTabTitle>
    </MobileTab>
  </MobileTabSet>
);

export const AdjacentMobileStacked = props => (
  <div>
    <MobileTabSet>
      <MobileTab>
        <MobileTabTitle>
          <MobileTabTitleAction summary="List 1 Item One" />
        </MobileTabTitle>
      </MobileTab>
      <MobileTab>
        <MobileTabTitle>
          <MobileTabTitleAction summary="List 1 Item Two" />
        </MobileTabTitle>
      </MobileTab>
    </MobileTabSet>
    <MobileTabSet>
      <MobileTab>
        <MobileTabTitle>
          <MobileTabTitleAction summary="List 2 Item One" />
        </MobileTabTitle>
      </MobileTab>
      <MobileTab>
        <MobileTabTitle>
          <MobileTabTitleAction summary="List 2 Item Two with A Really Long Name" />
        </MobileTabTitle>
      </MobileTab>
      <MobileTab>
        <MobileTabTitle>
          <MobileTabTitleAction summary="List 2 Item Three" />
        </MobileTabTitle>
      </MobileTab>
    </MobileTabSet>
  </div>
);
