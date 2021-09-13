// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';

import { mount } from 'enzyme';

import {
  Table,
  AdvancedDataTableHead as Thead,
  TBody,
  DataTableContext
} from '..';

import {
  AdvancedDataTableTr,
  ProductImage,
  ProductDataTableTr,
  ProductQuantityCell,
  ProductPriceCell,
  ProductItemDetailsCell
} from '../advanced/';

import { columns, productRows, rows } from '../advanced/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

const product = productRows[0];

describe('Advanced data table row', () => {
  it('should render a table header row', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <Thead columns={columns} />
      </DataTableContext.Provider>
    ));

  it('should render a table header row with ascending sort', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <Thead columns={columns} sortDirection="ascending" />
      </DataTableContext.Provider>
    ));

  it('should render a table row', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        index={1}
        recordName="Acme"
        stage="closed"
      />
    ));

  it('should make every focusable element focusable when in actionableMode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <AdvancedDataTableTr
          accountName="salesforce"
          amount="10000"
          closeDate="8/20/2018"
          confidence="low"
          contact="Art V"
          index={1}
          recordName="Acme"
          stage="closed"
        />
      </DataTableContext.Provider>
    ));

  it('should show amount scores', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        amountScore="negative"
        amountScoreLabel="Low"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        hasScores
        index={1}
        recordName="Acme"
        stage="closed"
      />
    ));

  it('should show record name cell in first row as focusable', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        hasFocus
        index={1}
        recordName="Acme"
        stage="closed"
      />
    ));

  it('should remove the row actions column', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        hasRowActions={false}
        index={1}
        recordName="Acme"
        stage="closed"
      />
    ));

  it('should swap row selection to a radio button', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        hasSingleRowSelect
        index={1}
        recordName="Acme"
        stage="closed"
      />
    ));

  it('should select the row', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        index={1}
        isSelected
        recordName="Acme"
        stage="closed"
      />
    ));

  it('should select the row with a radio button', () =>
    matchesMarkup(
      <AdvancedDataTableTr
        accountName="salesforce"
        amount="10000"
        closeDate="8/20/2018"
        confidence="low"
        contact="Art V"
        hasSingleRowSelect
        index={1}
        isSelected
        recordName="Acme"
        stage="closed"
      />
    ));

  it('renders a table header hover state', () => {
    const wrapper = mount(
      <Table isBordered isResizable isFixedLayout type="advanced">
        <Thead columns={columns} hasMenus />
        <TBody>
          {rows.map((row, i) => (
            <AdvancedDataTableTr key={i} index={i + 1} {...row} />
          ))}
        </TBody>
      </Table>
    );

    return matchesMarkup(
      wrapper
        .find('th a.slds-th__action')
        .at(1)
        .simulate('mouseEnter')
        .html()
    );
  });
});

describe('Product data table', () => {
  describe('product image', () => {
    it('should render', () =>
      matchesMarkup(
        <ProductImage
          productImgSrc={product.productImgSrc}
          productName={product.productName}
        />
      ));
  });

  describe('price cell', () => {
    it('should render', () =>
      matchesMarkup(
        <ProductPriceCell
          priceDiscount={product.priceDiscount}
          priceOriginal={product.priceOriginal}
        />
      ));
  });

  describe('product items details cell', () => {
    it('should render', () =>
      matchesMarkup(<ProductItemDetailsCell {...product} />));

    it('should make focusable elements focusable in actionableMode', () =>
      matchesMarkup(
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <ProductItemDetailsCell {...product} />
        </DataTableContext.Provider>
      ));
  });

  describe('product quantity cell', () => {
    it('should render', () =>
      matchesMarkup(
        <ProductQuantityCell
          inputId="product-quantity-text-input-id-0"
          labelText={`${product.productName} quantity`}
        />
      ));

    it('should set a quantity', () =>
      matchesMarkup(
        <ProductQuantityCell
          inputId="product-quantity-text-input-id-0"
          labelText={`${product.productName} quantity`}
          quantity={product.quantity}
        />
      ));

    it('should set the input focusable in actionableMode', () =>
      matchesMarkup(
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <ProductQuantityCell
            inputId="product-quantity-text-input-id-0"
            labelText={`${product.productName} quantity`}
          />
        </DataTableContext.Provider>
      ));
  });

  describe('row', () => {
    it('should render', () =>
      matchesMarkup(<ProductDataTableTr key={0} index={1} {...product} />));

    it('should make focusable elements focusable in actionableMode', () =>
      matchesMarkup(
        <DataTableContext.Provider value={{ isActionableMode: true }}>
          <ProductDataTableTr key={0} index={1} {...product} />
        </DataTableContext.Provider>
      ));
  });
});
