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
import { CheckboxAddButton } from '../../checkbox-button/base/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../../combobox/base/example';
import { Th, HiddenHeaderTh } from '../../data-tables/';
import { PillContainer } from '../../pills/base/example';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { Table } from '../../data-tables/base/example';

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
  <Listbox className="slds-dropdown slds-dropdown_fluid" vertical>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </ListboxItem>
  </Listbox>
);

let ProductListHeader = props => (
  <div className="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
    <ComboboxContainer
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
    <Table
      role="grid"
      className="slds-table_fixed-layout slds-table_resizable-cols slds-no-row-hover slds-scrollable_none"
      hasCellBuffer={false}
    >
      <thead>
        <tr className="slds-line-height_reset">
          <th scope="col" style={{ width: '3.75rem' }} />
          {_.times(columns.length, i => (
            <Th key={i} columnName={columns[i]} aria-label={columns[i]} />
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </Table>
  </div>
);

let SingleColumnProductList = props => {
  return (
    <div className="slds-scrollable slds-grow">
      <Table
        role="grid"
        className="slds-no-row-hover slds-scrollable_none"
        hasHiddenHeader
        hasCellBuffer={false}
      >
        <thead
          className={classNames({
            'slds-assistive-text': props.hasHiddenHeader
          })}
        >
          <tr className="slds-line-height_reset">
            <th scope="col" style={{ width: '3.75rem' }} />
            {props.hasHiddenHeader ? (
              <HiddenHeaderTh
                key={0}
                columnName={singleColumn[0]}
                aria-label={singleColumn[0]}
              />
            ) : (
              <Th
                key={0}
                columnName={singleColumn[0]}
                aria-label={singleColumn[0]}
              />
            )}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
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
    <tr
      className={classNames('slds-hint-parent', props.className)}
      aria-selected={props.checked}
    >
      <td
        role="gridcell"
        tabIndex={props.index === 1 ? '0' : '-1'}
        className="slds-text-align_right"
        style={{ width: '3.75rem' }}
      >
        <CheckboxAddButton
          label={checkboxLabel}
          checked={props.checked}
          disabled={props.disabled}
          tabIndex="-1"
        />
      </td>
      <th scope="row">
        <div className="slds-truncate" title={props.name}>
          {props.name}
        </div>
      </th>
      <td role="gridcell">
        <div className="slds-truncate" title={props.productCode}>
          {props.productCode}
        </div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={props.listPrice}>
          {props.listPrice}
        </div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={props.productFamily}>
          {props.productFamily}
        </div>
      </td>
    </tr>
  );
};

let TwoColumnRowData = props => {
  let checkboxLabel = 'Select item ' + props.index;

  return (
    <tr
      className={classNames('slds-hint-parent', props.className)}
      aria-selected={props.checked}
    >
      <td
        role="gridcell"
        tabIndex={props.index === 1 ? '0' : '-1'}
        className="slds-text-align_right"
        style={{ width: '3.75rem' }}
      >
        <CheckboxAddButton
          label={checkboxLabel}
          checked={props.checked}
          disabled={props.disabled}
          tabIndex="-1"
        />
      </td>
      <td>
        <div className="slds-truncate" title={props.name}>
          {props.name}
        </div>
      </td>
    </tr>
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
  <PillContainer className="slds-pill_container_bare">
    <ListboxPills>
      <ListboxPillsItem>
        <ListboxPill label="Analytics" tabIndex="0" />
      </ListboxPillsItem>
    </ListboxPills>
  </PillContainer>
);

let FilteredItems = props => (
  <PillContainer className="slds-pill_container_bare">
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
  <div className="demo-only" style={{ height: '640px' }}>
    <Modal
      className="slds-modal_large slds-list-builder"
      aria-labelledby="id-of-modalheader-h2"
    >
      <ModalHeader>
        <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
          Add Products
        </h2>
        <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </ModalHeader>
      <ModalContent className="slds-grid slds-grow">
        <div className="slds-grid slds-grid_vertical">
          <ProductListHeader />
          <ProductList>
            {_.times(rows.length, i => (
              <RowData
                key={i}
                index={i + 1}
                name={rows[i].name}
                productCode={rows[i].productCode}
                listPrice={rows[i].listPrice}
                productFamily={rows[i].productFamily}
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
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add Products
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
                {_.times(rows.length, i => (
                  <RowData
                    key={i}
                    index={i + 1}
                    checked={i === 0 ? true : null}
                    name={rows[i].name}
                    productCode={rows[i].productCode}
                    listPrice={rows[i].listPrice}
                    productFamily={rows[i].productFamily}
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
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add Products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader itemsSelected="0" />
              <ProductList>
                {_.times(rows.length, i => (
                  <RowData
                    key={i}
                    index={i + 1}
                    disabled={i % 2 === 0 ? true : null}
                    name={rows[i].name}
                    productCode={rows[i].productCode}
                    listPrice={rows[i].listPrice}
                    productFamily={rows[i].productFamily}
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
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add Products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader itemsSelected="0" />
              <ProductList>
                {_.times(rows.length, i => (
                  <RowData
                    key={i}
                    index={i + 1}
                    checked={i % 2 === 1 ? true : null}
                    disabled={i % 2 === 1 ? true : null}
                    name={rows[i].name}
                    productCode={rows[i].productCode}
                    listPrice={rows[i].listPrice}
                    productFamily={rows[i].productFamily}
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
    id: 'two-column-with-hidden-header',
    label: 'Two Column with Hidden Header',
    element: (
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add Products
            </h2>
            <p className="slds-m-top_x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-nowrap">
            <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
              <ProductListHeader itemsSelected="0" />
              <SingleColumnProductList hasHiddenHeader>
                {_.times(rows.length, i => (
                  <TwoColumnRowData key={i} index={i + 1} name={rows[i].name} />
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
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal
          className="slds-modal_large"
          aria-labelledby="id-of-modalheader-h2"
        >
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading_medium">
              Add Products
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
