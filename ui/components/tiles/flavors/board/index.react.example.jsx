// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';

export default (
  <div className="demo-only" style={{ width: '320px' }}>
    <ul className="slds-has-dividers--around-space">
      <li className="slds-item">
        <Tile title="Anypoint Connectors" className="slds-tile--board">
          <p className="slds-text-heading--medium">$500,000</p>
          <p className="slds-truncate" title="Company One"><a href="javascript:void(0);">Company One</a></p>
          <p className="slds-truncate" title="Closing 9/30/2015">Closing 9/30/2015</p>
        </Tile>
      </li>
      <li className="slds-item">
        <Tile title="Cloudhub" className="slds-tile--board">
          <p className="slds-text-heading--medium">$185,000</p>
          <p className="slds-truncate" title="Company Two"><a href="javascript:void(0);">Company Two</a></p>
          <p className="slds-truncate slds-has-alert" title="Closing 12/15/2015">Closing 12/15/2015</p>
          <span className="slds-icon_container slds-tile--board__icon" title="description of icon when needed">
            <SvgIcon className="slds-icon slds-icon-text-warning slds-icon--x-small" sprite="utility" symbol="warning" />
            <span className="slds-assistive-text">Warning Icon</span>
          </span>
        </Tile>
      </li>
      <li className="slds-item">
        <Tile title="600 Widgets" className="slds-tile--board">
          <p className="slds-text-heading--medium">$35,000</p>
          <p className="slds-truncate" title="Company Three"><a href="javascript:void(0);">Company Three</a></p>
          <p className="slds-truncate" title="Closing 10/12/2015">Closing 10/12/2015</p>
        </Tile>
      </li>
    </ul>
  </div>
);
