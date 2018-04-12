// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Truncate from '../../../shared/truncate/index.react';
import Heading from '../../heading/index.react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';
import { StatefulButton } from '../../buttons/stateful/example';

export let RecordHome = props => (
  <div className="slds-page-header">
    <div className="slds-grid">
      <div className="slds-col slds-has-flexi-truncate">
        <div className="slds-media slds-no-space slds-grow">
          <div className="slds-media__figure">
            <StandardIcon symbol="opportunity" assistiveText={false} />
          </div>
          <div className="slds-media__body">
            <nav>
              <ol className="slds-breadcrumb slds-line-height_reset">
                <li className="slds-breadcrumb__item">
                  <span>Opportunities</span>
                </li>
              </ol>
            </nav>
            <h1
              className="slds-page-header__title slds-m-right_small slds-align-middle slds-truncate"
              title="Acme - 1,200 Widgets"
            >
              Acme - 1,200 Widgets
            </h1>
          </div>
        </div>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-top">
        <StatefulButton isNotSelected isNeutral />
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button_neutral">Edit</button>
          <button className="slds-button slds-button_neutral">Delete</button>
          <button className="slds-button slds-button_neutral">Clone</button>
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
    <ul className="slds-grid slds-page-header__detail-row">
      <li className="slds-page-header__detail-block">
        <p
          className="slds-text-title slds-truncate slds-m-bottom_xx-small"
          title="Field 1"
        >
          Field 1
        </p>
        <p
          className="slds-text-body_regular slds-truncate"
          title="Description that demonstrates truncation with a long text field"
        >
          Description that demonstrates truncation with a long text field.
        </p>
      </li>
      <li className="slds-page-header__detail-block">
        <p
          className="slds-text-title slds-truncate slds-m-bottom_xx-small"
          title="Field2 (3)"
        >
          Field 2 (3)
          <ButtonIcon
            className="slds-button_icon"
            iconClassName="slds-button__icon_small"
            symbol="down"
            aria-haspopup="true"
            assistiveText="More Actions"
            title="More Actions"
          />
        </p>
        <p className="slds-text-body_regular">Multiple Values</p>
      </li>
      <li className="slds-page-header__detail-block">
        <p
          className="slds-text-title slds-truncate slds-m-bottom_xx-small"
          title="Field 3"
        >
          Field 3
        </p>
        <a href="javascript:void(0);">Hyperlink</a>
      </li>
      <li className="slds-page-header__detail-block">
        <p
          className="slds-text-title slds-truncate slds-m-bottom_xx-small"
          title="Field 4"
        >
          Field 4
        </p>
        <p title="Description (2-line truncation—must use JS to truncate).">
          Description (2-line truncati...
        </p>
      </li>
    </ul>
  </div>
);

export default <RecordHome />;
