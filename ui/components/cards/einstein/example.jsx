// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { EinsteinHeader } from '../../einstein-header/base';
import { Card, CardBody, CardFooter } from '../base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Card>
    <EinsteinHeader
      className="slds-card__header"
      headerTitle="Einstein (10+)"
      hasLink
    />
    <CardBody className="slds-card__body_inner">Card Body Text</CardBody>
    <CardFooter className="slds-m-top_none">Card Footer</CardFooter>
  </Card>
);

export let states = [
  {
    id: 'with-icon',
    label: 'Einstein card - with icon',
    element: (
      <Card>
        <EinsteinHeader
          className="slds-card__header"
          symbol="salesforce1"
          hasLink
        />
        <CardBody className="slds-card__body_inner">Card Body Text</CardBody>
        <CardFooter className="slds-m-top_none">Card Footer</CardFooter>
      </Card>
    )
  },
  {
    id: 'with-icon-and-actions',
    label: 'Einstein card - with icon and actions',
    element: (
      <Card>
        <EinsteinHeader
          className="slds-card__header"
          symbol="salesforce1"
          actions
          hasLink
        />
        <CardBody className="slds-card__body_inner">Card Body Text</CardBody>
        <CardFooter className="slds-m-top_none">Card Footer</CardFooter>
      </Card>
    )
  }
];
