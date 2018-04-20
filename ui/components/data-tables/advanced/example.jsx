// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';
import {
  AdvancedDataTable as Table,
  Thead,
  Th,
  ActionsTh,
  AdvancedDataTableTr,
  ProductDataTableTr
} from '../';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const radioGroupCommonId = 'radio-group-header';

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
    quantity: 1,
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
    quantity: 1,
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

const columnHeaderIcons = [['Confidence', 'Ellie']];

export const AdvancedTable = () => (
  <Table>
    <Thead columns={columns} />
    <tbody>
      {_.times(rows.length, i => (
        <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} />
      ))}
    </tbody>
  </Table>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Table>
    <Thead columns={columns} />
    <tbody>
      {_.times(rows.length, i => (
        <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} />
      ))}
    </tbody>
  </Table>
);

export let states = [
  {
    id: 'cell-focused',
    label: 'Cell Focused',
    element: (
      <Table>
        <Thead columns={columns} />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} hasFocus />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'actionable-mode',
    label: 'Actionable Mode',
    element: (
      <Table>
        <Thead columns={columns} actionableMode />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr
              key={i}
              index={i + 1}
              {...rows[i]}
              actionableMode
            />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'row-selected',
    label: 'Row Selected (Actionable mode)',
    element: (
      <Table>
        <Thead columns={columns} actionableMode />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr
              key={i}
              index={i + 1}
              className={i === 1 ? 'slds-is-selected' : null}
              {...rows[i]}
              rowSelected={i === 1 ? true : null}
              actionableMode
            />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'all-row-selected',
    label: 'All Rows Selected (Actionable mode)',
    element: (
      <Table>
        <Thead columns={columns} actionableMode selectAll />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr
              key={i}
              index={i + 1}
              className="slds-is-selected"
              {...rows[i]}
              actionableMode
              rowSelected
            />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'sorted-column-asc',
    label: 'Sorted Ascending (Actionable mode)',
    element: (
      <Table>
        <Thead columns={columns} actionableMode sortDirection="ascending" />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr
              key={i}
              index={i + 1}
              {...rows[i]}
              actionableMode
            />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'sorted-column-desc',
    label: 'Sorted Descending (Actionable mode)',
    element: (
      <Table>
        <Thead columns={columns} actionableMode sortDirection="descending" />
        <tbody>
          {_.reverse(
            _.times(rows.length, i => (
              <AdvancedDataTableTr
                key={i}
                index={i + 1}
                {...rows[i]}
                actionableMode
              />
            ))
          )}
        </tbody>
      </Table>
    )
  },
  {
    id: 'resized-column',
    label: 'Column Resized (Actionable mode)',
    element: (
      <Table>
        <Thead columns={columns} actionableMode singleColumnWidth="300px" />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr
              key={i}
              index={i + 1}
              {...rows[i]}
              actionableMode
            />
          ))}
        </tbody>
      </Table>
    )
  }
];

export let examples = [
  {
    id: 'header-icon-menu-button',
    label: 'Header Icon and Menu Button',
    element: (
      <Table>
        <Thead
          columns={columns}
          columnHeaderIcons={columnHeaderIcons}
          hasMenus
        />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'header-menu-button',
    label: 'Header Menu Button',
    element: (
      <Table>
        <Thead columns={columns} hasMenus />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'cell-icon',
    label: 'Cell Icon',
    element: (
      <Table>
        <Thead className="slds-has-button-menu" columns={columns} />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} hasScores />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'product-listing',
    label: 'Product Listing',
    element: (
      <Table>
        <Thead columns={productColumns} actionableMode hasNoSelectability />
        <tbody>
          {_.times(productRows.length, i => (
            <ProductDataTableTr
              key={i}
              index={i + 1}
              {...productRows[i]}
              actionableMode
            />
          ))}
        </tbody>
      </Table>
    )
  },
  {
    id: 'radio-group',
    label: 'Radio Group',
    element: (
      <Table>
        <Thead columns={columns} isSingleSelect />
        <tbody>
          {_.times(rows.length, i => (
            <AdvancedDataTableTr
              key={i}
              index={i + 1}
              {...rows[i]}
              isSingleSelect
            />
          ))}
        </tbody>
      </Table>
    )
  }
];
