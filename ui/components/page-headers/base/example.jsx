// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import {
  PageHeader,
  PageHeaderTitle,
  PageHeaderRow,
  PageHeaderColumn
} from '../index';

export const PageHeaderBase = props => (
  <PageHeader>
    <PageHeaderRow>
      <PageHeaderColumn type="title">
        <PageHeaderTitle
          titleText="Rohde Corp - 80,000 Widgets"
          metaText="Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15"
          symbol="opportunity"
        />
      </PageHeaderColumn>
    </PageHeaderRow>
  </PageHeader>
);

export default <PageHeaderBase />;
