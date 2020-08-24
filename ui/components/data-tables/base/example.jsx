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
  RowTh,
  Td,
  ReadOnlyCell,
  cellContentTextLong,
  HeadRowData,
  RowData
} from '../index';

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

export let examples = [
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
              <ReadOnlyCell cellLink cellText="Cloudhub" />
            </Td>
          </TBodyTr>
          <TBodyTr>
            <Td data-label="Opportunity Name" type="base">
              <ReadOnlyCell
                cellLink
                cellText="Cloudhub + Anypoint Connectors"
              />
            </Td>
          </TBodyTr>
        </TBody>
      </Table>
    )
  },
  {
    id: 'no-borders',
    label: 'No borders',
    element: (
      <Table isStriped hasCellBuffer type="base">
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
    id: 'headless',
    label: 'Headless',
    element: (
      <Table hasHiddenHeader isBordered hasCellBuffer type="base">
        <THead isHidden>
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
    id: 'headless-no-borders',
    label: 'Headless with no borders',
    element: (
      <Table hasHiddenHeader hasCellBuffer type="base">
        <THead isHidden>
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
    id: 'cell-content-truncated',
    label: 'Cell content truncated',
    demoStyles: 'max-width: 600px;',
    element: (
      <Table isBordered isStriped hasCellBuffer isFixedLayout type="base">
        <THead>
          <THeadTr>
            <ColumnTh>
              <ColumnHeader columnName="Typical Column Header" />
            </ColumnTh>
            <ColumnTh>
              <ColumnHeader columnName="Truncated, no wrap" />
            </ColumnTh>
            <ColumnTh>
              <ColumnHeader columnName="Typical Column Header" />
            </ColumnTh>
          </THeadTr>
        </THead>
        <TBody>
          <TBodyTr>
            <RowTh data-label="Typical Column Header">
              <ReadOnlyCell cellText="Typical cell content" />
            </RowTh>
            <Td data-label="Truncated, no wrap" type="base" hasWrap>
              <ReadOnlyCell cellText={cellContentTextLong} />
            </Td>
            <Td data-label="Typical Column Header" type="base">
              <ReadOnlyCell cellText="Typical cell content" />
            </Td>
          </TBodyTr>
        </TBody>
      </Table>
    )
  },
  {
    id: 'cell-content-wrapped',
    label: 'Cell content wrapped',
    demoStyles: 'max-width: 600px;',
    element: (
      <Table isBordered isStriped hasCellBuffer isFixedLayout type="base">
        <THead>
          <THeadTr>
            <ColumnTh>
              <ColumnHeader columnName="Typical Column Header" />
            </ColumnTh>
            <ColumnTh>
              <ColumnHeader columnName="Wrapped, line clamped" />
            </ColumnTh>
            <ColumnTh>
              <ColumnHeader columnName="Typical Column Header" />
            </ColumnTh>
          </THeadTr>
        </THead>
        <TBody>
          <TBodyTr>
            <RowTh data-label="Typical Column Header">
              <ReadOnlyCell cellText="Typical cell content" />
            </RowTh>
            <Td data-label="Wrapped, line clamped" type="base" hasWrap>
              <ReadOnlyCell cellText={cellContentTextLong} hasWrap />
            </Td>
            <Td data-label="Typical Column Header" type="base">
              <ReadOnlyCell cellText="Typical cell content" />
            </Td>
          </TBodyTr>
        </TBody>
      </Table>
    )
  }
];
