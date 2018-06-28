// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Table } from '../base/example';
import { SingleRowData, SingleHeadRowData } from '../index';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Table hasHiddenHeader>
    <thead className="slds-assistive-text">
      <SingleHeadRowData />
    </thead>
    <tbody>
      <SingleRowData title="Cloudhub" />
      <SingleRowData title="Cloudhub + Anypoint Connectors" />
    </tbody>
  </Table>
);
