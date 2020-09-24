// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../../modals/base/example';
import { CheckboxButton } from '../../checkbox-button/';
import {
  DeprecatedCombobox,
  DeprecatedListbox,
  DeprecatedListboxItem,
  DeprecatedEntityOption
} from '../../combobox/deprecated/';
import {
  Table,
  THead,
  ColumnTh,
  THeadTr,
  InteractiveColumnHeader,
  ColumnHeader,
  TBody,
  TBodyTr,
  RowTh,
  Td,
  ReadOnlyCell
} from '../../data-tables/';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill,
  PillContainer
} from '../../pills';

/* -----------------------------------------------------------------------------
    Variables and Objects
----------------------------------------------------------------------------- */

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const columns = ['Name', 'Product Code', 'List Price', 'Product Family'];
const singleColumn = ['Product Name'];
const rows = [
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  },
  {
    name: 'Analytics',
    productCode: 'ANTLY',
    listPrice: '5000.00',
    productFamily: 'Analytics Product'
  }
];

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props => (
  <DeprecatedListbox
    listboxClassName="slds-dropdown slds-dropdown_fluid"
    vertical
  >
    <DeprecatedListboxItem>
      <DeprecatedEntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedEntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </DeprecatedListboxItem>
  </DeprecatedListbox>
);

let ProductListHeader = props => (
  <div className="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
    <DeprecatedCombobox
      autocomplete
      hideLabel
      inputIcon="right"
      inputIconRightSymbol="search"
      listbox={<ListboxDropdown />}
    />
    {props.selectedFilters ? props.selectedFilters : null}
    <div className="slds-text-title slds-m-top_x-small" aria-live="polite">
      {props.itemsSelected || '0'} Item(s) Selected
    </div>
  </div>
);

let ProductList = props => (
  <div className="slds-scrollable slds-grow">
    <div className="slds-scrollable_none">
      <Table
        hasNoRowHover
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        type="advanced"
      >
        <THead>
          <THeadTr>
            <ColumnTh style={{ width: '3.75rem' }} />
            {columns.map((column, i) => (
              <ColumnTh aria-label={column} isSortable isResizable key={i}>
                <InteractiveColumnHeader columnName={column} />
              </ColumnTh>
            ))}
          </THeadTr>
        </THead>
        <TBody>{props.children}</TBody>
      </Table>
    </div>
  </div>
);

let SingleColumnProductList = props => {
  return (
    <div className="slds-scrollable slds-grow">
      <div className="slds-scrollable_none">
        <Table
          hasHiddenHeader
          hasNoRowHover
          isBordered
          selectionType="multiple"
          type="advanced"
        >
          <THead isHidden={props.hasHiddenHeader}>
            <THeadTr>
              <ColumnTh style={{ width: '3.75rem' }} />
              {props.hasHiddenHeader ? (
                <ColumnTh aria-label={singleColumn[0]}>
                  <ColumnHeader columnName={singleColumn[0]} />
                </ColumnTh>
              ) : (
                <ColumnTh aria-label={singleColumn[0]}>
                  <InteractiveColumnHeader columnName={singleColumn[0]} />
                </ColumnTh>
              )}
            </THeadTr>
          </THead>
          <TBody>{props.children}</TBody>
        </Table>
      </div>
    </div>
  );
};

SingleColumnProductList.propTypes = {
  hasHiddenHeader: PropTypes.bool,
  children: PropTypes.node
};

let RowData = props => {
  let checkboxLabel = 'Select item ' + props.index;

  return (
    <TBodyTr isSelected={props.checked}>
      <Td
        isRightAligned
        tabIndex={props.index === 1 ? '0' : null}
        type="advanced"
      >
        <CheckboxButton
          label={checkboxLabel}
          isChecked={props.checked}
          isDisabled={props.disabled}
          tabIndex={-1}
        />
      </Td>
      <RowTh>
        <ReadOnlyCell cellText={props.name} />
      </RowTh>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.productCode} />
      </Td>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.listPrice} />
      </Td>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.productFamily} />
      </Td>
    </TBodyTr>
  );
};

let TwoColumnRowData = props => {
  let checkboxLabel = 'Select item ' + props.index;

  return (
    <TBodyTr isSelected={props.checked}>
      <Td
        isRightAligned
        tabIndex={props.index === 1 ? '0' : '-1'}
        type="advanced"
        style={{ width: '3.75rem' }}
      >
        <CheckboxButton
          label={checkboxLabel}
          isChecked={props.checked}
          isDisabled={props.disabled}
          tabIndex={-1}
        />
      </Td>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.name} />
      </Td>
    </TBodyTr>
  );
};

TwoColumnRowData.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string
};

let FilteredItem = props => (
  <PillContainer variant="container-bare">
    <ListboxPills>
      <ListboxPillsItem>
        <ListboxPill label="Analytics" tabIndex="0" />
      </ListboxPillsItem>
    </ListboxPills>
  </PillContainer>
);

let FilteredItems = props => (
  <PillContainer variant="container-bare">
    <ListboxPills>
      <ListboxPillsItem>
        <ListboxPill label="Option A" tabIndex="0" />
      </ListboxPillsItem>
      <ListboxPillsItem>
        <ListboxPill label="Option B" />
      </ListboxPillsItem>
    </ListboxPills>
  </PillContainer>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default (
  <div className="demo-only demo-only_viewport" style={{ height: '640px' }}>
    <Modal
      className="slds-modal_large slds-list-builder"
      aria-labelledby="id-of-modalheader-h2"
    >
      <ModalHeader>
        <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
          Add products
        </h2>
        <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </ModalHeader>
      <ModalContent className="slds-grid slds-grow">
        <div className="slds-grid slds-grid_vertical">
          <ProductListHeader />
          <ProductList>
            {rows.map((row, i) => (
              <RowData
                checked={false}
                key={i}
                index={i + 1}
                name={row.name}
                productCode={row.productCode}
                listPrice={row.listPrice}
                productFamily={row.productFamily}
              />
            ))}
          </ProductList>
        </div>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Next</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

export let states = [
  {
    id: 'items-selected',
    label: 'Items Selected',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader
                selectedFilters={<FilteredItem />}
                itemsSelected="1"
              />
              <ProductList>
                {rows.map((row, i) => (
                  <RowData
                    key={i}
                    index={i + 1}
                    checked={i === 0}
                    name={row.name}
                    productCode={row.productCode}
                    listPrice={row.listPrice}
                    productFamily={row.productFamily}
                  />
                ))}
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'items-disabled',
    label: 'Items Disabled',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader itemsSelected="0" />
              <ProductList>
                {rows.map((row, i) => (
                  <RowData
                    checked={false}
                    key={i}
                    index={i + 1}
                    disabled={i % 2 === 0 ? true : null}
                    name={row.name}
                    productCode={row.productCode}
                    listPrice={row.listPrice}
                    productFamily={row.productFamily}
                  />
                ))}
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'items-default-selected',
    label: 'Items Default Selected',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader itemsSelected="0" />
              <ProductList>
                {rows.map((row, i) => (
                  <RowData
                    key={i}
                    index={i + 1}
                    checked={i % 2 === 1}
                    disabled={i % 2 === 1 ? true : null}
                    name={row.name}
                    productCode={row.productCode}
                    listPrice={row.listPrice}
                    productFamily={row.productFamily}
                  />
                ))}
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  }
];
export let examples = [
  {
    id: 'two-column-with-hidden-header',
    label: 'Two Column with Hidden Header',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader itemsSelected="0" />
              <SingleColumnProductList hasHiddenHeader>
                {rows.map((row, i) => (
                  <TwoColumnRowData
                    checked={false}
                    key={i}
                    index={i + 1}
                    name={row.name}
                  />
                ))}
              </SingleColumnProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'filtered',
    label: 'Filtered Results',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-grow">
            <div className="slds-grid slds-grid_vertical">
              <ProductListHeader
                selectedFilters={<FilteredItems />}
                itemsSelected="2"
              />
              <ProductList>
                <RowData
                  checked={false}
                  index={1}
                  name={rows[0].name}
                  productCode={rows[0].productCode}
                  listPrice={rows[0].listPrice}
                  productFamily={rows[0].productFamily}
                />
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  }
];
