/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/flavors/base/index.react.example';
import { CheckboxAddButton } from 'ui/components/forms/flavors/checkbox-add-button/index.react.example';
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example';
import { Th } from 'ui/components/data-tables/flavors/advanced/index.react.example';
import { Pill, PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import classNames from 'classnames';
import _ from 'lodash';

const columns = ['Name', 'Product Code', 'List Price', 'Product Family'];

const rows = [{
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}];

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let ProductListHeader = props =>
  <div className="slds-p-vertical--x-small slds-p-horizontal--large slds-shrink-none slds-theme--shade">
    <Lookup hideLabel showLookupDropdown={ props.showLookupDropdown } />
    { props.selectedFilters ? props.selectedFilters : null }
    <div className="slds-text-title slds-m-top--x-small" aria-live="polite">{ props.itemsSelected || '0' } Item(s) Selected</div>
  </div>;

let ProductList = props =>
  <div className="slds-scrollable slds-grow">
    <table role="grid" className="slds-table slds-table--fixed-layout slds-table--bordered slds-no-row-hover slds-scrollable--none">
      <thead>
        <tr className="slds-line-height--reset">
          <th scope="col" style={{ width: '3.75rem' }}></th>
          { _.times(columns.length, i =>
            <Th key={ i }
              columnName={ columns[i] }
              aria-label={columns[i]}
            />
          )}
        </tr>
      </thead>
      <tbody>
        { props.children }
      </tbody>
    </table>
  </div>;

let RowData = props => {
  let checkboxLabel = 'Select item ' + props.index;

  return(
    <tr className={classNames('slds-hint-parent', props.className)} aria-selected={ props.checked }>
      <td role="gridcell" tabIndex={ (props.index === 1) ? '0': '-1' } className="slds-text-align--right" style={{ width: '3.75rem' }}>
        <CheckboxAddButton label={ checkboxLabel } checked={ props.checked } tabIndex="-1" />
      </td>
      <th scope="row">
        <div className="slds-truncate" title={ props.name }>{ props.name }</div>
      </th>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.productCode }>{ props.productCode }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.listPrice }>{ props.listPrice }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.productFamily }>{ props.productFamily }</div>
      </td>
    </tr>
  );
};

let FilteredItems = props =>
  <PillContainer className="slds-pill_container--bare">
    <Pill label="Option A" unlinked />
    <Pill label="Option B" unlinked />
  </PillContainer>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{height: '640px'}}>
        <Modal className="slds-modal--large" aria-labelledby="id-of-modalheader-h2">
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
            <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-grow">
            <div className="slds-grid slds-grid--vertical">
              <ProductListHeader />
              <ProductList>
                { _.times(rows.length, i =>
                  <RowData
                    key={ i }
                    index={ i+1 }
                    name={ rows[i].name }
                    productCode={ rows[i].productCode }
                    listPrice={ rows[i].listPrice }
                    productFamily={ rows[i].productFamily }
                  />
                )}
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button--neutral">Cancel</button>
            <button className="slds-button slds-button--brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  },
  {
    id: 'items-selected',
    label: 'Items selected',
    element:
    <div className="demo-only" style={{height: '640px'}}>
      <Modal className="slds-modal--large" aria-labelledby="id-of-modalheader-h2">
        <ModalHeader>
          <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
          <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
        </ModalHeader>
        <ModalContent className="slds-grid slds-nowrap">
          <div className="slds-col slds-grid slds-grid--vertical slds-nowrap">
            <ProductListHeader itemsSelected="1" />
            <ProductList>
              { _.times(rows.length, i =>
                <RowData
                  key={ i }
                  index={ i+1 }
                  checked={ (i===0) ? true : null }
                  name={ rows[i].name }
                  productCode={ rows[i].productCode }
                  listPrice={ rows[i].listPrice }
                  productFamily={ rows[i].productFamily }
                />
              )}
            </ProductList>
          </div>
        </ModalContent>
        <ModalFooter>
          <button className="slds-button slds-button--neutral">Cancel</button>
          <button className="slds-button slds-button--brand">Next</button>
        </ModalFooter>
      </Modal>
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  },
  {
    id: 'searching',
    label: 'Searching',
    element:
      <div className="demo-only" style={{height: '640px'}}>
        <Modal className="slds-modal--large" aria-labelledby="id-of-modalheader-h2">
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
            <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-grow">
            <div className="slds-grid slds-grid--vertical">
              <ProductListHeader
                showLookupDropdown
              />
              <ProductList>
                { _.times(rows.length, i =>
                  <RowData
                    key={ i }
                    index={ i+1 }
                    name={ rows[i].name }
                    productCode={ rows[i].productCode }
                    listPrice={ rows[i].listPrice }
                    productFamily={ rows[i].productFamily }
                  />
                )}
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button--neutral">Cancel</button>
            <button className="slds-button slds-button--brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  },
  {
    id: 'filtered',
    label: 'Filtered Results',
    element:
      <div className="demo-only" style={{height: '640px'}}>
        <Modal className="slds-modal--large" aria-labelledby="id-of-modalheader-h2">
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
            <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-grow">
            <div className="slds-grid slds-grid--vertical">
              <ProductListHeader selectedFilters={ <FilteredItems /> } itemsSelected="2" />
              <ProductList>
                <RowData
                  index={ 1 }
                  name={ rows[0].name }
                  productCode={ rows[0].productCode }
                  listPrice={ rows[0].listPrice }
                  productFamily={ rows[0].productFamily }
                />
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button--neutral">Cancel</button>
            <button className="slds-button slds-button--brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  }
];
