// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Expression, ExpressionGroup, ExpressionRow } from '../';

export default <Expression />;

export let examples = [
  {
    id: 'initial-state',
    label: 'Initial State',
    element: <Expression inputIsDisabled buttonIsDisabled />
  },
  {
    id: 'with-expression-group',
    label: 'With Expression Group',
    element: (
      <Expression optionSelected="all" resourceIsSelected>
        <ExpressionGroup legendText="AND" assistiveText="Condition Group 1">
          <ExpressionRow
            conditionName="Condition 1"
            isGroup
            groupName="Condition Group 1"
          />
          <ExpressionRow
            conditionName="Condition 2"
            legendText="AND"
            isGroup
            groupName="Condition Group 1"
          />
        </ExpressionGroup>
      </Expression>
    )
  },
  {
    id: 'with-multiple-conditions',
    label: 'With Multiple Conditions',
    element: (
      <Expression>
        <ExpressionRow legendText="AND" conditionName="Condition 2" />
      </Expression>
    )
  },
  {
    id: 'with-disabled-inputs',
    label: 'With Disabled Inputs',
    element: (
      <Expression>
        <ExpressionRow
          legendText="AND"
          conditionName="Condition 2"
          inputIsDisabled
        />
      </Expression>
    )
  },
  {
    id: 'with-error',
    label: 'With an Error',
    element: (
      <Expression>
        <ExpressionRow
          legendText="AND"
          conditionName="Condition 2"
          errorMessage="Enter a value"
          hasError
        />
      </Expression>
    )
  }
];
