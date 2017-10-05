/* eslint-env jest */
import React from 'react';

import _ from '../../../shared/helpers';

import {
  AdvancedDataTable,
  AdvancedDataTableTr,
  ProductDataTableTr,
  ProductQuantityTd,
  ProductPriceTd,
  ProductItemDetailsTd,
  Thead
} from '../';

import {
  rows,
  columns,
  productColumns,
  productRows
} from '../advanced/example';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const product = productRows[0];

it('renders a table with menu button', () =>
  matchesMarkupAndStyle(
    <AdvancedDataTable>
      <Thead columns={columns} hasMenus />
      <tbody>
        {_.times(rows.length, i => (
          <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} />
        ))}
      </tbody>
    </AdvancedDataTable>
  ));

it('renders a table with icons in cells', () =>
  matchesMarkupAndStyle(
    <AdvancedDataTable>
      <Thead
        actionableMode
        className="slds-has-button-menu"
        columns={columns}
      />
      <tbody>
        {_.times(rows.length, i => (
          <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} hasScores />
        ))}
      </tbody>
    </AdvancedDataTable>
  ));

it('renders a product details cell', () =>
  matchesMarkupAndStyle(<ProductItemDetailsTd {...product} actionableMode />));

it('renders a product quantity cell', () =>
  matchesMarkupAndStyle(
    <ProductQuantityTd quantity={productRows[0].quantity} />
  ));

it('renders a product price cell', () =>
  matchesMarkupAndStyle(
    <ProductPriceTd
      priceOriginal={product.priceOriginal}
      priceDiscount={product.priceDiscount}
    />
  ));

it('renders a product table header', () =>
  matchesMarkupAndStyle(
    <Thead columns={productColumns} actionableMode hasNoSelectability />
  ));

it('renders a product table row', () =>
  matchesMarkupAndStyle(
    <ProductDataTableTr
      key={0}
      index={1}
      className="slds-test"
      {...product}
      actionableMode
      rowSelected
    />
  ));

it('renders a product table', () =>
  matchesMarkupAndStyle(
    <AdvancedDataTable>
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
    </AdvancedDataTable>
  ));
