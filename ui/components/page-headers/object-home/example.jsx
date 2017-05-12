// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Truncate from '../../../shared/truncate/index.react';
import { ButtonIcon } from '../../button-icons/base/example';
import MediaObject from '../../../utilities/media-objects/index.react';
import SvgIcon from '../../../shared/svg-icon';
import Heading from '../../heading/index.react';

const icon = (
  <SvgIcon className="slds-button__icon slds-button__icon_right slds-no-flex" sprite="utility" symbol="down" />
);

const image = (
  <span className="slds-icon_container slds-icon-standard-lead">
    <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
  </span>
);

export default (
  <div className="slds-page-header slds-page-header_object-home">
    <div className="slds-grid">
      {/* Open Left Aligned Heading + Icon Grouping */}
      <div className="slds-col slds-has-flexi-truncate">
        <MediaObject figureLeft={image} className="slds-no-space slds-grow">
          <Heading className="slds-line-height_reset" flavor="label">Leads</Heading>
          <h1 className="slds-page-header__title slds-p-right_x-small">
            <button className="slds-button slds-button_reset slds-type-focus slds-truncate" aria-haspopup="true" title="">
              <span className="slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center">
                <span className="slds-truncate" title="this should match My Leads">My Leads</span>
                {icon}
              </span>
            </button>
          </h1>
        </MediaObject>
      </div>
      {/* Close Col */}
      {/* Open Right Aligned Icon Grouping */}
      <div className="slds-col slds-no-flex slds-grid slds-align-top slds-p-bottom_xx-small">
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button_neutral">
            New Lead
          </button>
          <button className="slds-button slds-button_neutral">
            Import Leads
          </button>
          <div className="slds-button_last">
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions" />
          </div>
        </div>
        {/* Close button Group */}
      </div>
      {/* Close Col */}
    </div>
    {/* Close Grid */}
    <div className="slds-grid">
      <div className="slds-col slds-align-bottom">
        <p className="slds-text-body_small">10 items &bull; Sorted by Name</p>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-bottom">
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small" aria-expanded="false">
          <ButtonIcon
            className="slds-button_icon-more"
            symbol="settings"
            hasDropdown
            assistiveText="List View Controls"
            title="List View Controls" />
        </div>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_xx-small" aria-expanded="false">
          <ButtonIcon
            className="slds-button_icon-more"
            symbol="table"
            hasDropdown
            assistiveText="Change view"
            title="Change view" />
        </div>
        <ButtonIcon
          className="slds-m-left_xx-small slds-button_icon-border"
          symbol="edit"
          assistiveText="Edit List"
          title="Edit List" />
        <ButtonIcon
          className="slds-m-left_xx-small slds-button_icon-border"
          symbol="refresh"
          assistiveText="Refresh"
          title="Refresh" />
        <div className="slds-button-group" role="group">
          <ButtonIcon
            className="slds-button_icon-border"
            symbol="chart"
            assistiveText="Charts"
            title="Charts" />
          <ButtonIcon
            className="slds-button_icon-border"
            symbol="filterList"
            assistiveText="Filters"
            title="Filters" />
        </div>
      </div>
    </div>
  </div>
);
