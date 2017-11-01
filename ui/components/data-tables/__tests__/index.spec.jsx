/* eslint-env jest */
import React from 'react';

import _ from '../../../shared/helpers';
import { render, mount } from 'enzyme';

import {
  AdvancedDataTable,
  AdvancedDataTableTr,
  ProductDataTableTr,
  ProductQuantityTd,
  ProductPriceTd,
  ProductItemDetailsTd,
  Table,
  Thead
} from '../';

import {
  columnHeaderIcons,
  columns,
  productColumns,
  productRows,
  rows
} from '../advanced/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const product = productRows[0];

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

it('renders an advanced data table with radio group', () =>
  matchesMarkupAndStyle(
    <AdvancedDataTable>
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
    </AdvancedDataTable>
  ));

it('renders a table header hover state', () => {
  const wrapper = mount(
    <AdvancedDataTable>
      <Thead columns={columns} columnHeaderIcons={columnHeaderIcons} hasMenus />
      <tbody>
        {_.times(rows.length, i => (
          <AdvancedDataTableTr key={i} index={i + 1} {...rows[i]} />
        ))}
      </tbody>
    </AdvancedDataTable>
  );

  return matchesMarkupAndStyle(
    wrapper
      .find('th a.slds-th__action')
      .at(1)
      .simulate('mouseEnter')
      .html()
  );
});
