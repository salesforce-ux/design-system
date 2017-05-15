// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Truncate from '../../../shared/truncate/index.react';
import Heading from '../../heading/index.react';
import { ButtonIcon } from '../../button-icons/base/example';
import MediaObject from '../../../utilities/media-objects/index.react';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';

export default (
  <div className="slds-page-header">
    <div className="slds-grid">
      <div className="slds-col slds-has-flexi-truncate">
        <MediaObject figureLeft={<StandardIcon symbol="user" assistiveText={false} />} className="slds-no-space slds-grow">
          <Heading className="slds-line-height_reset" flavor="label">Record Type</Heading>
          <h1 className="slds-page-header__title slds-m-right_small slds-align-middle slds-truncate" title="this should match the Record Title">Record Title</h1>
        </MediaObject>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-top">
        <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected" aria-live="assertive">
          <span className="slds-text-not-selected"><SvgIcon className="slds-button__icon_stateful slds-button__icon_left" sprite="utility" symbol="add" />Follow</span>
          <span className="slds-text-selected"><SvgIcon className="slds-button__icon_stateful slds-button__icon_left" sprite="utility" symbol="check" />Following</span>
          <span className="slds-text-selected-focus"><SvgIcon className="slds-button__icon_stateful slds-button__icon_left" sprite="utility" symbol="close" />Unfollow</span>
        </button>
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button_neutral">
            Edit
          </button>
          <button className="slds-button slds-button_neutral">
            Delete
          </button>
          <button className="slds-button slds-button_neutral">
            Clone
          </button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last" aria-expanded="false">
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions" />
          </div>
        </div>
      </div>
    </div>
    <ul className="slds-grid slds-page-header__detail-row">
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field 1">Field 1</p>
        <p className="slds-text-body_regular slds-truncate" title="Description that demonstrates truncation with a long text field">
          Description that demonstrates truncation with a long text field.
        </p>
      </li>
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field2 (3)">
          Field 2 (3)
          <ButtonIcon
            className="slds-button_icon"
            iconClassName="slds-button__icon_small"
            symbol="down"
            aria-haspopup="true"
            assistiveText="More Actions"
            title="More Actions" />
        </p>
        <p className="slds-text-body_regular">Multiple Values</p>
      </li>
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field 3">Field 3</p>
        <a href="javascript:void(0);">Hyperlink</a>
      </li>
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field 4">Field 4</p>
        <p>
          <Truncate amount={50}>
            Description (2-line truncation—must use JS to truncate).
          </Truncate>
        </p>
      </li>
    </ul>
  </div>
);
