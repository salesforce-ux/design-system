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
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="contact" />
    <span className="slds-assistive-text">Contact</span>
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////
export default (
  <Card>
    <CardHeader actions symbol="contact">
      <span className="slds-text-heading--small">Contacts (3)</span>
    </CardHeader>
    <CardBody>
        <ul className="slds-card__body--inner slds-grid slds-wrap slds-grid--pull-padded">
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={icon}
              title="Related Record Title 1"
            />
          </li>
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={icon}
              title="Related Record Title 1"
            />
          </li>
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
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
