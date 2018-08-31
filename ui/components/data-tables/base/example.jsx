// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  THead,
  THeadTr,
  ColumnTh,
  ColumnHeader,
  TBody,
  TBodyTr,
  RowTh,
  Td,
  ReadOnlyCell
} from '../index';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let HeadRowData = props => (
  <THeadTr>
    <ColumnTh>
      <ColumnHeader columnName="Opportunity Name" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Account Name" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Close Date" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Stage" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Confidence" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Amount" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Contact" />
    </ColumnTh>
  </THeadTr>
);

let RowData = props => (
  <TBodyTr>
    <RowTh data-label="Opportunity Name">
      <ReadOnlyCell cellText={props.title} cellLink="javascript:void(0);" />
    </RowTh>
    <Td data-label="Account Name" type="base">
      <ReadOnlyCell cellText="Cloudhub" />
    </Td>
    <Td data-label="Close Date" type="base">
      <ReadOnlyCell cellText="4/14/2015" />
    </Td>
    <Td data-label="Prospecting" type="base">
      <ReadOnlyCell cellText="Prospecting" />
    </Td>
    <Td data-label="Confidence" type="base">
      <ReadOnlyCell cellText="20%" />
    </Td>
    <Td data-label="Amount" type="base">
      <ReadOnlyCell cellText="$25k" />
    </Td>
    <Td data-label="Contact" type="base">
      <ReadOnlyCell
        cellLink="javascript:void(0);"
        cellText="jrogers@cloudhub.com"
      />
    </Td>
  </TBodyTr>
);
RowData.propTypes = {
  title: PropTypes.string
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Table isBordered hasCellBuffer type="base">
    <THead>
      <HeadRowData />
    </THead>
    <TBody>
      <RowData title="Cloudhub" />
      <RowData title="Cloudhub + Anypoint Connectors" />
    </TBody>
  </Table>
);

export let states = [
  {
    id: 'data-table-striped-rows',
    label: 'With striped rows',
    element: (
      <Table isBordered isStriped hasCellBuffer type="base">
        <THead>
          <HeadRowData />
        </THead>
        <TBody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
          <RowData title="Cloudhub" />
        </TBody>
      </Table>
    )
  },
  {
    id: 'data-table-no-hover',
    label: 'With no row hovers',
    element: (
      <Table isBordered hasCellBuffer hasNoRowHover type="base">
        <THead>
          <HeadRowData />
        </THead>
        <TBody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </TBody>
      </Table>
    )
  },
  {
    id: 'data-table-vertical-borders',
    label: 'With vertical borders',
    element: (
      <Table isBordered isColBordered hasCellBuffer type="base">
        <THead>
          <HeadRowData />
        </THead>
        <TBody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </TBody>
      </Table>
    )
  },
  {
    id: 'single-column',
    label: 'Single Column',
    element: (
      <Table isBordered hasCellBuffer type="base">
        <THead>
          <THeadTr>
            <ColumnTh>
              <ColumnHeader columnName="Opportunity Name" />
            </ColumnTh>
          </THeadTr>
        </THead>
        <TBody>
          <TBodyTr>
            <Td data-label="Opportunity Name" type="base">
              <ReadOnlyCell
                cellLink="javascript:void(0);"
                cellText="Cloudhub"
              />
            </Td>
          </TBodyTr>
          <TBodyTr>
            <Td data-label="Opportunity Name" type="base">
              <ReadOnlyCell
                cellLink="javascript:void(0);"
                cellText="Cloudhub + Anypoint Connectors"
              />
            </Td>
          </TBodyTr>
        </TBody>
      </Table>
    )
  }
];
