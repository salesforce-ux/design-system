// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Card, CardHeader, CardBody, CardFooter } from '../base/example';
import classNames from 'classnames';
import { TileMedia } from '../../tiles/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const icon = (
  <div className="slds-icon_container slds-icon-standard-contact" title="if needed">
    <SvgIcon className="slds-icon slds-icon_small" sprite="standard" symbol="contact" />
    <span className="slds-assistive-text">Contact</span>
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////
export default (
  <Card>
    <CardHeader actions symbol="contact">
      <span className="slds-text-heading_small">Contacts (3)</span>
    </CardHeader>
    <CardBody>
        <ul className="slds-card__body_inner slds-grid slds-wrap slds-grid_pull-padded">
          <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={icon}
              title="Related Record Title 1"
            />
          </li>
          <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={icon}
              title="Related Record Title 1"
            />
          </li>
          <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={icon}
              title="Related Record Title 1"
            />
          </li>
        </ul>
    </CardBody>
    <CardFooter>
      <a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a>
    </CardFooter>
  </Card>
);
