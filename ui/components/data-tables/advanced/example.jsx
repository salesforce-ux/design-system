// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import Ellie from '../../dynamic-icons/ellie';
import { StandardIcon } from '../../icons/standard/example';
import {
  Table,
  TBody,
  DataTableContext,
  AdvancedDataTableHead as Thead
} from '../';
import { AdvancedDataTableTr, ProductDataTableTr } from '../advanced/';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export const columns = [
  'Name',
  'Account Name',
  'Close Date',
  'Stage',
  'Confidence',
  'Amount',
  'Contact'
];

export const rows = [
  {
    recordName: 'Acme - 1,200 Widgets',
    accountName: 'Acme',
    closeDate: '4/10/15',
    stage: 'Value Proposition',
    confidence: '30%',
    amount: '$25,000,000',
    contact: 'jrogers@acme.com',
    amountScore: 'positive',
    amountScoreLabel: 'High'
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
    contact: 'nathan@salesforce.com',
    amountScore: 'negative',
    amountScoreLabel: 'Low'
  }
];

const reversedRows = [...rows].reverse();

export const productColumns = ['Product', 'Quantity', 'Date Added', 'Price'];

export const productRows = [
  {
    productImgSrc: '/assets/images/product1.jpg',
    productName: 'Baseball Cap',
    productProperties: [
      { label: 'Size', value: '7 3/4' },
      { label: 'Color', value: 'Blue' },
      { label: 'Item No.', value: '1007100' }
    ],
    labelInventory: 'In Stock',
    quantity: '1',
    dateAdded: '4/10/17',
    priceOriginal: '$23.00',
    priceDiscount: '$20.00'
  },
  {
    productImgSrc: '/assets/images/product2.jpg',
    productName: 'Construction Hat',
    productProperties: [
      { label: 'Size', value: 'One size fits most' },
      { label: 'Color', value: 'Yellow' },
      { label: 'Item No.', value: '2800100' }
    ],
    labelInventory: 'In Stock',
    quantity: '1',
    dateAdded: '4/10/17',
    priceOriginal: '$52.00',
    priceDiscount: '$40.00'
  },
  {
    productImgSrc: '/assets/images/product3.jpg',
    productName: 'Campaign Hat',
    productProperties: [
      { label: 'Size', value: 'Small' },
      { label: 'Color', value: 'Tan' },
      { label: 'Item No.', value: '2000100' }
    ],
    labelInventory: 'In Stock',
    quantity: '1',
    dateAdded: '4/10/17',
    priceOriginal: '$79.00',
    priceDiscount: '$59.00'
  }
];

const AccountNameColumnIcon = (
  <StandardIcon
    assistiveText="Account"
    className="slds-icon_x-small"
    containerClassName="slds-m-right_xx-small"
    symbol="account"
    title="Account"
  />
);
const ConfidenceColumnIcon = (
  <div className="slds-icon_container slds-m-right_xx-small">
    <Ellie
      assistiveText="Einstein calculated"
      className="slds-is-paused"
      title="Einstein calculated"
    />
  </div>
);

const columnHeaderIcons = [
  {
    column: 'account name',
    icon: AccountNameColumnIcon
  },
  {
    column: 'confidence',
    icon: ConfidenceColumnIcon
  }
];

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
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example default advanced table of Opportunities"
      >
        <Thead columns={columns} />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  }
];

export let states = [
  {
    id: 'cell-focused',
    label: 'Cell Focused',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities with cell focused"
      >
        <Thead columns={columns} />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
              hasFocus
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'actionable-mode',
    label: 'Actionable Mode',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities in actionable mode"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={columns} />
          <TBody>
            {rows.map((row, i) => (
              <AdvancedDataTableTr
                index={i + 1}
                isSelected={false}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  },
  {
    id: 'row-selected',
    label: 'Row Selected (Actionable mode)',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities in actionable mode with row selected"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={columns} />
          <TBody>
            {rows.map((row, i) => (
              <AdvancedDataTableTr
                index={i + 1}
                isSelected={i === 1}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  },
  {
    id: 'all-row-selected',
    label: 'All Rows Selected (Actionable mode)',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities in actionable mode with all rows selected"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={columns} selectAll />
          <TBody>
            {rows.map((row, i) => (
              <AdvancedDataTableTr index={i + 1} isSelected key={i} {...row} />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  },
  {
    id: 'sorted-column-asc',
    label: 'Sorted Ascending (Actionable mode)',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities in actionable mode with ascending column sorting"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={columns} sortDirection="ascending" />
          <TBody>
            {rows.map((row, i) => (
              <AdvancedDataTableTr
                index={i + 1}
                isSelected={false}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  },
  {
    id: 'sorted-column-desc',
    label: 'Sorted Descending (Actionable mode)',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities in actionable mode with descending column sorting"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={columns} sortDirection="descending" />
          <TBody>
            {reversedRows.map((row, i) => (
              <AdvancedDataTableTr
                index={i + 1}
                isSelected={false}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  },
  {
    id: 'resized-column',
    label: 'Column Resized (Actionable mode)',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities in actionable mode with resized column"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={columns} singleColumnWidth="300px" />
          <TBody>
            {rows.map((row, i) => (
              <AdvancedDataTableTr
                index={i + 1}
                isSelected={false}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  }
];

export let examples = [
  {
    id: 'header-icon-menu-button',
    label: 'Header Icon and Menu Button',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities with header icon and menu button"
      >
        <Thead
          columnHeaderIcons={columnHeaderIcons}
          columns={columns}
          hasMenus
        />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'header-menu-button',
    label: 'Header Menu Button',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities with header menu button"
      >
        <Thead columns={columns} hasMenus />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'cell-icon',
    label: 'Cell Icon',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table of Opportunities with cell icon"
      >
        <Thead columns={columns} />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
              hasScores
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'product-listing',
    label: 'Product Listing',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table as product listing"
      >
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <Thead columns={productColumns} hasNoRowSelection />
          <TBody>
            {productRows.map((row, i) => (
              <ProductDataTableTr
                isSelected={false}
                key={i}
                index={i + 1}
                {...row}
              />
            ))}
          </TBody>
        </DataTableContext.Provider>
      </Table>
    )
  },
  {
    id: 'radio-group',
    label: 'Radio Group',
    element: (
      <Table
        isBordered
        isFixedLayout
        isResizable
        type="advanced"
        ariaLabel="Example advanced table as radio group"
      >
        <Thead columns={columns} hasSingleRowSelect />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              hasSingleRowSelect
              index={i + 1}
              key={i}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'data-table-no-borders',
    label: 'No borders',
    element: (
      <Table
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced table with no borders"
      >
        <Thead columns={columns} />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'data-table-headless',
    label: 'Headless',
    element: (
      <Table
        hasHiddenHeader
        isBordered
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced headless table"
      >
        <Thead isHidden columns={columns} />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  },
  {
    id: 'data-table-headless-no-borders',
    label: 'Headless with no borders',
    element: (
      <Table
        hasHiddenHeader
        selectionType="multiple"
        type="advanced"
        ariaLabel="Example advanced headless border-less table"
      >
        <Thead isHidden columns={columns} />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr
              isSelected={false}
              key={i}
              index={i + 1}
              {...row}
            />
          ))}
        </TBody>
      </Table>
    )
  }
];
