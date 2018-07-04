// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Card, { CardBody, CardFooter } from '../';
import { EinsteinHeader } from '../../einstein-header/base/';

export const EinsteinCard = props => (
  <Card>
    <EinsteinHeader
      className="slds-card__header"
      headerTitle="Einstein (10+)"
      hasLink
      actions={props.hasActions}
      symbol={props.hasIcon && 'salesforce1'}
    />
    <CardBody hasPadding>Card Body</CardBody>
    <CardFooter>
      View All{' '}
      <span className="slds-assistive-text">Einstein Recommendations</span>
    </CardFooter>
  </Card>
);

export default <EinsteinCard />;

export let states = [
  {
    id: 'einstein-with-icon',
    label: 'Einstein card - with icon',
    element: <EinsteinCard hasIcon />
  },
  {
    id: 'einstein-with-icon-and-actions',
    label: 'Einstein card - with icon and actions',
    element: <EinsteinCard hasIcon hasActions />
  }
];
