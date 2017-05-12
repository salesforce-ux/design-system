// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Card, CardHeader, CardBody, CardFooter } from '../base/example';
import classNames from 'classnames';
import { Tile, TileMedia } from '../../tiles/base/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{ minWidth: '230px', maxWidth: '320px' }}>
    <Card className="slds-card_narrow">
      <CardHeader actions="overflow" symbol="contact">
        <span className="slds-text-heading_small">Contacts (3)</span>
      </CardHeader>
      <CardBody>
        <ul className="slds-card__body_inner">
          <li>
            <Tile title="Related Record Title 1" />
          </li>
          <li className="slds-m-top_x-small">
            <Tile title="Related Record Title 2" />
          </li>
          <li className="slds-m-top_x-small">
            <Tile title="Related Record Title 3" />
          </li>
        </ul>
      </CardBody>
      <CardFooter>
        <a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a>
      </CardFooter>
    </Card>
  </div>
);
