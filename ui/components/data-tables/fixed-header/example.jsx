// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TBody,
  TBodyTr,
  RowTh,
  Td,
  ReadOnlyCell,
  THead,
  THeadTr,
  ColumnTh,
  ColumnHeader
} from '../index';

const columns = [
  'Opportunity Name',
  'Account Name',
  'Close Date',
  'Stage',
  'Confidence',
  'Amount',
  'Contact'
];

const rows = [
  {
    recordName: 'Acme - 1,200 Widgets',
    accountName: 'Acme',
    closeDate: '4/10/15',
    stage: 'Value Proposition',
    confidence: '30%',
    amount: '$25,000,000',
    contact: 'jrogers@acme.com'
  },
  {
    recordName: 'Acme - 200 Widgets',
    accountName: 'Acme',
    closeDate: '1/31/15',
    stage: 'Prospecting',
    confidence: '60%',
    amount: '$5,000,000',
    contact: 'bob@acme.com'
  },
  {
    recordName: 'salesforce.com - 1,000 Widgets',
    accountName: 'salesforce.com',
    closeDate: '1/31/15 3:45PM',
    stage: 'Id. Decision Makers',
    confidence: '70%',
    amount: '$25,000',
    contact: 'nathan@salesforce.com'
  },
  {
    recordName: 'Acme - 1,200 Widgets',
    accountName: 'Acme',
    closeDate: '4/10/15',
    stage: 'Value Proposition',
    confidence: '30%',
    amount: '$25,000,000',
    contact: 'jrogers@acme.com'
  },
  {
    recordName: 'Acme - 200 Widgets',
    accountName: 'Acme',
    closeDate: '1/31/15',
    stage: 'Prospecting',
    confidence: '60%',
    amount: '$5,000,000',
    contact: 'bob@acme.com'
  },
  {
    recordName: 'salesforce.com - 1,000 Widgets',
    accountName: 'salesforce.com',
    closeDate: '1/31/15 3:45PM',
    stage: 'Id. Decision Makers',
    confidence: '70%',
    amount: '$25,000',
    contact: 'nathan@salesforce.com'
  },
  {
    recordName: 'Acme - 1,200 Widgets',
    accountName: 'Acme',
    closeDate: '4/10/15',
    stage: 'Value Proposition',
    confidence: '30%',
    amount: '$25,000,000',
    contact: 'jrogers@acme.com'
  },
  {
    recordName: 'Acme - 200 Widgets',
    accountName: 'Acme',
    closeDate: '1/31/15',
    stage: 'Prospecting',
    confidence: '60%',
    amount: '$5,000,000',
    contact: 'bob@acme.com'
  },
  {
    recordName: 'salesforce.com - 1,000 Widgets',
    accountName: 'salesforce.com',
    closeDate: '1/31/15 3:45PM',
    stage: 'Id. Decision Makers',
    confidence: '70%',
    amount: '$25,000',
    contact: 'nathan@salesforce.com'
  }
];

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Container = props => (
  <div
    className="slds-table_header-fixed_container"
    tabIndex={props.tabIndex}
    id={props.id}
  >
    <div
      className="slds-scrollable"
      style={{ height: '100px', position: 'static' }}
    >
      <div className="table--header-fixed_container--inner slds-table_edit_container">
        {props.children}
      </div>
    </div>
  </div>
);

Container.propTypes = {
  tabIndex: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node
};

let HeadRowData = props => (
  <THeadTr>
    {columns.map((label, i) => {
      return (
        <ColumnTh key={i}>
          <ColumnHeader columnName={label} isFixedCell />
        </ColumnTh>
      );
    })}
  </THeadTr>
);

let RowData = props => (
  <TBodyTr>
    <RowTh data-label={columns[0]}>
      <ReadOnlyCell cellText={props.recordName} cellLink />
    </RowTh>
    <Td data-label={columns[1]} type="base">
      <ReadOnlyCell cellText={props.accountName} />
    </Td>
    <Td data-label={columns[2]} type="base">
      <ReadOnlyCell cellText={props.closeDate} />
    </Td>
    <Td data-label={columns[3]} type="base">
      <ReadOnlyCell cellText={props.stage} />
    </Td>
    <Td data-label={columns[4]} type="base">
      <ReadOnlyCell cellText={props.confidence} />
    </Td>
    <Td data-label={columns[5]} type="base">
      <ReadOnlyCell cellText={props.amount} />
    </Td>
    <Td data-label={columns[6]} type="base">
      <ReadOnlyCell cellLink cellText={props.contact} />
    </Td>
  </TBodyTr>
);
RowData.propTypes = {
  title: PropTypes.string,
  recordName: PropTypes.string,
  accountName: PropTypes.string,
  closeDate: PropTypes.string,
  stage: PropTypes.string,
  confidence: PropTypes.string,
  amount: PropTypes.string,
  contact: PropTypes.string
};

let TableFixedHeader = props => (
  <Container>
    <Table hasFixedHeader {...props}>
      <THead>
        <HeadRowData />
      </THead>
      <TBody>
        {rows.map((row, i) => {
          return (
            <RowData
              key={i}
              recordName={row.recordName}
              accountName={row.accountName}
              closeDate={row.closeDate}
              stage={row.stage}
              confidence={row.confidence}
              amount={row.amount}
              contact={row.contact}
              buttonInvisible="slds-hidden"
            />
          );
        })}
      </TBody>
    </Table>
  </Container>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let examples = [
  {
    id: 'data-table-fixed-header',
    label: 'With fixed header',
    element: (
      <TableFixedHeader type="base" ariaLabel="Example fixed header table" />
    )
  },
  {
    id: 'data-table-fixed-header_with-vertical-borders',
    label: 'With fixed header and vertical borders',
    element: (
      <TableFixedHeader
        isColBordered
        type="base"
        ariaLabel="Example fixed header table with vertical borders"
      />
    )
  },
  {
    id: 'data-table-fixed-header-bordered',
    label: 'With fixed header (bordered)',
    element: (
      <TableFixedHeader
        isBordered
        type="base"
        ariaLabel="Example fixed header bordered table"
      />
    )
  },
  {
    id: 'data-table-fixed-header-bordered_with-vertical-borders',
    label: 'With fixed header and vertical borders (bordered)',
    element: (
      <TableFixedHeader
        isColBordered
        isBordered
        type="base"
        ariaLabel="Example fixed header bordered table with vertical borders"
      />
    )
  }
];
