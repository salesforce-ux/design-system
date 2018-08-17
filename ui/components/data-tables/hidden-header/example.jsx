// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  Table,
  THead,
  THeadTr,
  ColumnTh,
  ColumnHeader,
  TBody,
  TBodyTr,
  Td,
  ReadOnlyCell
} from '../';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Table isBordered hasCellBuffer hasHiddenHeader type="base">
    <THead isHidden>
      <THeadTr>
        <ColumnTh>
          <ColumnHeader columnName="Opportunity Name" />
        </ColumnTh>
      </THeadTr>
    </THead>
    <TBody>
      <TBodyTr>
        <Td data-label="Opportunity Name" type="base">
          <ReadOnlyCell cellText="Cloudhub" cellLink="javascript:void(0);" />
        </Td>
      </TBodyTr>
      <TBodyTr>
        <Td data-label="Opportunity Name" type="base">
          <ReadOnlyCell
            cellText="Cloudhub + Anypoint Connectors"
            cellLink="javascript:void(0);"
          />
        </Td>
      </TBodyTr>
    </TBody>
  </Table>
);
