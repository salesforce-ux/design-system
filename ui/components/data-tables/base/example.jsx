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

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Table
        isBordered
        hasCellBuffer
        type="base"
        ariaLabel="Example default base table of Opportunities"
      >
        <THead>
          <HeadRowData />
        </THead>
        <TBody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </TBody>
      </Table>
    )
  }
];

export let examples = [
  {
    id: 'data-table-striped-rows',
    label: 'With striped rows',
    element: (
      <Table
        isBordered
        isStriped
        hasCellBuffer
        type="base"
        ariaLabel="Example table of Opportunities with striped rows"
      >
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
      <Table
        isBordered
        hasCellBuffer
        hasNoRowHover
        type="base"
        ariaLabel="Example table of Opportunities with no row hovers"
      >
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
      <Table
        isBordered
        isColBordered
        hasCellBuffer
        type="base"
        ariaLabel="Example table of Opportunities with vertical borders"
      >
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
      <Table
        isBordered
        hasCellBuffer
        type="base"
        ariaLabel="Example table of Opportunities with a single column"
      >
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
      <Table
        isStriped
        hasCellBuffer
        type="base"
        ariaLabel="Example table of Opportunities with no borders"
      >
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
      <Table
        hasHiddenHeader
        isBordered
        hasCellBuffer
        type="base"
        ariaLabel="Example headless table of Opportunities"
      >
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
      <Table
        hasHiddenHeader
        hasCellBuffer
        type="base"
        ariaLabel="
          Example headless table of Opportunities with no borders
        "
      >
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
    storybookStyles: true,
    element: (
      <Table
        isBordered
        isStriped
        hasCellBuffer
        isFixedLayout
        type="base"
        ariaLabel="
          Example headless table of Opportunities with cell content truncated
        "
      >
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
    storybookStyles: true,
    element: (
      <Table
        isBordered
        isStriped
        hasCellBuffer
        isFixedLayout
        type="base"
        ariaLabel="
          Example headless table of Opportunities with cell content wrapped
        "
      >
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
  },
  {
    id: 'data-table-aria-labelledby',
    label: 'Using aria-labelledby instead of aria-label',
    element: (
      <>
        <h2
          id="element-with-table-label"
          className="slds-text-heading_medium slds-m-bottom_xx-small"
        >
          Example data table of Opportunities
        </h2>
        <h3
          id="other-element-with-table-label"
          className="slds-text-title slds-m-bottom_small"
        >
          Using <code>aria-labelledby</code>, instead of aria-label
        </h3>
        <Table
          isBordered
          hasCellBuffer
          type="base"
          ariaLabelledBy="element-with-table-label other-element-with-table-label"
        >
          <THead>
            <HeadRowData />
          </THead>
          <TBody>
            <RowData title="Cloudhub" />
            <RowData title="Cloudhub + Anypoint Connectors" />
          </TBody>
        </Table>
      </>
    )
  }
];
