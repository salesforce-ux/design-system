// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BreadCrumbs, { Crumb } from '../../breadcrumbs/index.react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';

export const RelatedList = props => (
  <div className="slds-page-header">
    <div className="slds-grid">
      <div className="slds-col slds-has-flexi-truncate">
        <BreadCrumbs className="slds-m-bottom_xx-small">
          <Crumb href="javascript:void(0);">Accounts</Crumb>
          <Crumb href="javascript:void(0);">Company One</Crumb>
        </BreadCrumbs>
        <h1
          className="slds-page-header__title slds-truncate"
          title="Contacts (will truncate)"
        >
          Contacts (will truncate)
        </h1>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-top">
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button_neutral">
            Add Contact
          </button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="slds-grid">
      <div className="slds-col slds-align-bottom">
        <p className="slds-text-body_small">10 items &bull; sorted by name</p>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-bottom">
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
          <ButtonIcon
            className="slds-button_icon-more"
            symbol="table"
            hasDropdown
            assistiveText="Change view"
            title="Change view"
          />
        </div>
        <div className="slds-button-group slds-m-left_xx-small" role="group">
          <ButtonIcon
            className="slds-button_icon-border"
            symbol="chart"
            assistiveText="Chart"
            title="Chart"
          />
          <ButtonIcon
            className="slds-button_icon-border"
            symbol="filterList"
            assistiveText="Filter List"
            title="Filter List"
          />
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              className="slds-button_icon-more"
              symbol="sort"
              hasDropdown
              assistiveText="Sort"
              title="Sort"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default <RelatedList />;
