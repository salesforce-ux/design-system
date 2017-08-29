// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { TileMedia } from '../base/example';

const icon = (
  <span className="slds-icon_container" title="description of icon when needed">
    <SvgIcon className="slds-icon" sprite="doctype" symbol="zip" />
  </span>
);

export default (
  <ul className="slds-has-dividers_bottom-space">
    <li className="slds-item">
      <TileMedia title="SLDS_038.zip" media={icon}>
        <ul className="slds-list_horizontal slds-has-dividers_right">
          <li className="slds-item">May 9th, 2015</li>
          <li className="slds-item">3.6mb</li>
        </ul>
      </TileMedia>
    </li>
    <li className="slds-item">
      <TileMedia title="SLDS_038.zip" media={icon}>
        <ul className="slds-list_horizontal slds-has-dividers_right">
          <li className="slds-item">May 9th, 2015</li>
          <li className="slds-item">3.6mb</li>
        </ul>
      </TileMedia>
    </li>
    <li className="slds-item">
      <TileMedia title="SLDS_038.zip" media={icon}>
        <ul className="slds-list_horizontal slds-has-dividers_right">
          <li className="slds-item">May 9th, 2015</li>
          <li className="slds-item">3.6mb</li>
        </ul>
      </TileMedia>
    </li>
  </ul>
);
