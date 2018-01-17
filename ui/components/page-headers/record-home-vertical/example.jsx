// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Truncate from '../../../shared/truncate/index.react';
import Heading from '../../heading/index.react';
import ButtonIcon from '../../button-icons/';
import MediaObject from '../../../utilities/media-objects/index.react';
import SvgIcon from '../../../shared/svg-icon';

const image = (
  <div className="slds-icon_container slds-icon-standard-lead">
    <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
    <span className="slds-assistive-text">Lead</span>
  </div>
);

export const RecordHomeVertical = props => (
  <div className="demo-only" style={{ width: '300px' }}>
    <div className="slds-page-header slds-page-header_vertical">
      <div className="slds-grid slds-grid_vertical">
        <div>
          <MediaObject
            flavor="center"
            figureLeft={image}
            className="slds-no-space slds-has-divider_bottom-space"
          >
            <h1 className="slds-page-header__title slds-align-middle">
              Record Title
            </h1>
          </MediaObject>
        </div>
        <div className="slds-has-divider_bottom-space">
          <button
            className="slds-button slds-button_stateful slds-button_neutral slds-not-selected"
            aria-live="assertive"
          >
            <span className="slds-text-not-selected">
              <SvgIcon
                className="slds-button__icon_stateful slds-button__icon_left"
                sprite="utility"
                symbol="add"
              />Follow
            </span>
            <span className="slds-text-selected">
              <SvgIcon
                className="slds-button__icon_stateful slds-button__icon_left"
                sprite="utility"
                symbol="check"
              />Following
            </span>
            <span className="slds-text-selected-focus">
              <SvgIcon
                className="slds-button__icon_stateful slds-button__icon_left"
                sprite="utility"
                symbol="close"
              />Unfollow
            </span>
          </button>
          <div
            className="slds-button-group slds-m-left_none slds-m-top_x-small"
            role="group"
          >
            <button className="slds-button slds-button_neutral">Convert</button>
            <button className="slds-button slds-button_neutral">Clone</button>
            <button className="slds-button slds-button_neutral">Edit</button>
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
      <ul className="slds-list_vertical-space-medium slds-m-left_xx-small">
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom_xx-small">Field 1</div>
          <div
            className="slds-text-body_regular"
            title="Description that demonstrates truncation with a long text field"
          >
            Description that demonstrates a long text field and will eventually
            wrap.
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom_xx-small">Field 2</div>
          <div className="slds-text-body_regular" title="Hyperlink">
            <a href="javascript:void(0);">Hyperlink</a>
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom_xx-small">Field 3</div>
          <div className="slds-truncate" title="Description">
            Description
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom_xx-small">
            <button
              className="slds-button slds-text-link_reset"
              aria-haspopup="true"
            >
              Field 4 (3)
              <SvgIcon
                className="slds-button__icon slds-button__icon_small"
                sprite="utility"
                symbol="down"
              />
            </button>
          </div>
          <div className="slds-text-body_regular">
            <div>1 Market St</div>
            <div>San Francisco, CA 94105</div>
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom_xx-small">Field 5</div>
          <div className="slds-text-body_regular" title="Description">
            Description
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom_xx-small">Field 6</div>
          <div className="slds-text-body_regular" title="Description">
            Description
          </div>
        </li>
        <li className="slds-item">
          <div
            className="slds-text-title slds-truncate slds-m-bottom_xx-small"
            title="Field 7"
          >
            Field 7
          </div>
          <div className="slds-text-body_regular" title="Description">
            Description
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default <RecordHomeVertical />;
