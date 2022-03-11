// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Expression, ExpressionRow } from '../';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Expression hasCustomLogic customLogicValue="1 OR 2" legendText="1">
        <ExpressionRow legendText="2" conditionName="Condition 2" />
      </Expression>
    )
  }
];
