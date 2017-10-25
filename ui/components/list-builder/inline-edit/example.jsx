// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../../modals/base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Th = props => (
  <th className={props.className} scope={props.scope} style={props.style}>
    <a
      href="javascript:void(0);"
      className="slds-th__action slds-text-link_reset"
    >
      <span className="slds-assistive-text">Sort Column</span>
      <span className="slds-truncate" title={props.title}>
        {props.children}
      </span>
      <div className="slds-icon_container" title="Sort Column">
        <SvgIcon
          className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"
          sprite="utility"
          symbol="arrowdown"
        />
      </div>
    </a>
  </th>
);

let ProductList = props => (
  <div className="slds-scrollable">
    <table
      role="grid"
      className="slds-table slds-table_fixed-layout slds-table_bordered slds-no-row-hover slds-table_cell-buffer"
    >
      <thead>
        <tr className="slds-text-title_caps">
          <Th className="slds-is-sortable" scope="col" title="Name">
            Name
          </Th>
          <Th className="slds-is-sortable" scope="col" title="List Price">
            List Price
          </Th>
          <Th className="slds-is-sortable" scope="col" title="Discount">
            Discount
          </Th>
          <Th className="slds-is-sortable" scope="col" title="Sale Price">
            Sale Price
          </Th>
          <Th className="slds-is-sortable" scope="col" title="Quantity">
            Quantity
          </Th>
          <Th className="slds-is-sortable" scope="col" title="Date">
            Date
          </Th>
          <Th className="slds-is-sortable" scope="col" title="Product Family">
            Product Family
          </Th>
          <Th className="slds-is-sortable" scope="col" title="Total Price">
            Total Price
          </Th>
          <th className="slds-cell-shrink" scope="col" />
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '640px' }}>
    <Modal className="slds-modal_large">
      <ModalHeader>
        <h2 className="slds-text-heading_medium">Edit All Products</h2>
        <p className="slds-m-top_x-small">
          Edit the details of the products associated with your opportunity
        </p>
      </ModalHeader>
      <ModalContent className="slds-grid slds-nowrap">
        <div className="slds-col slds-grid slds-grid_vertical slds-nowrap">
          <ProductList>
            <tr>
              <th scope="row" data-label="Name">
                <div className="slds-truncate" title="Beta Product">
                  Beta Product
                </div>
              </th>
              <td data-label="List Price" role="gridcell">
                <div className="slds-truncate" title="5,000.00">
                  5,000.00
                </div>
              </td>
              <td data-label="Discount" role="gridcell">
                <label htmlFor="discount-01" className="slds-assistive-text">
                  Discount
                </label>
                <input
                  className="slds-input"
                  id="discount-01"
                  defaultValue="300.00"
                />
              </td>
              <td data-label="Sale Price" role="gridcell">
                <label htmlFor="sale-price-01" className="slds-assistive-text">
                  Sale Price
                </label>
                <input
                  className="slds-input"
                  id="sale-price-01"
                  defaultValue="5000.00"
                />
              </td>
              <td data-label="Quantity" role="gridcell">
                <label htmlFor="quantity-01" className="slds-assistive-text">
                  Quantity
                </label>
                <input
                  className="slds-input"
                  id="quantity-01"
                  defaultValue="1"
                />
              </td>
              <td data-label="Date" role="gridcell">
                <label htmlFor="date-01" className="slds-assistive-text">
                  Date
                </label>
                <input
                  className="slds-input"
                  id="date-01"
                  defaultValue="8/12/16"
                />
              </td>
              <td data-label="Product Family" role="gridcell">
                <div className="slds-truncate" title="Family B">
                  Family B
                </div>
              </td>
              <td data-label="Total Price" role="gridcell">
                <div className="slds-truncate" title="$4,700.00">
                  $4,700.00
                </div>
              </td>
              <td role="gridcell">
                <ButtonIcon
                  className="slds-button_icon-border-filled slds-button_icon-x-small"
                  symbol="down"
                  assistiveText="Show More"
                  title="Show More"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" data-label="Name">
                <div className="slds-truncate" title="Service Product">
                  Service Product
                </div>
              </th>
              <td data-label="List Price" role="gridcell">
                <div className="slds-truncate" title="3,750.00">
                  3,750.00
                </div>
              </td>
              <td data-label="Discount" role="gridcell">
                <label htmlFor="discount-02" className="slds-assistive-text">
                  Discount
                </label>
                <input className="slds-input" id="discount-02" />
              </td>
              <td data-label="Sale Price" role="gridcell">
                <label htmlFor="sale-price-02" className="slds-assistive-text">
                  Sale Price
                </label>
                <input
                  className="slds-input"
                  id="sale-price-02"
                  defaultValue="3750.00"
                />
              </td>
              <td data-label="Quantity" role="gridcell">
                <label htmlFor="quantity-02" className="slds-assistive-text">
                  Quantity
                </label>
                <input
                  className="slds-input"
                  id="quantity-02"
                  defaultValue="3"
                />
              </td>
              <td data-label="Date" role="gridcell">
                <label htmlFor="date-02" className="slds-assistive-text">
                  Date
                </label>
                <input
                  className="slds-input"
                  id="date-02"
                  defaultValue="8/12/16"
                />
              </td>
              <td data-label="Product Family" role="gridcell">
                <div className="slds-truncate" title="Family B">
                  Family B
                </div>
              </td>
              <td data-label="Total Price" role="gridcell">
                <div className="slds-truncate" title="$11,250.00">
                  $11,250.00
                </div>
              </td>
              <td role="gridcell">
                <ButtonIcon
                  className="slds-button_icon-border-filled slds-button_icon-x-small"
                  symbol="down"
                  assistiveText="Show More"
                  title="Show More"
                />
              </td>
            </tr>
          </ProductList>
          <div className="slds-grid slds-grid_vertical-align-center slds-p-vertical_x-small slds-p-horizontal_large">
            <div className="slds-text-title_caps">
              <span className="slds-m-right_x-small">Total Products</span>
              <span className="slds-text-heading_small">2</span>
            </div>
            <div className="slds-col_bump-left slds-text-title_caps slds-text-align_right">
              <span className="slds-m-right_x-small">Total</span>
              <span className="slds-text-heading_small">$15,950</span>
            </div>
          </div>
        </div>
      </ModalContent>
      <ModalFooter className="slds-modal__footer_directional">
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Save</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);
