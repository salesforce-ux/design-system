/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/flavors/base/index.react.example';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Th = props =>
  <th className={props.className} scope={props.scope} style={props.style}>
    <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset">
      <span className="slds-assistive-text">Sort Column</span>
      <span className="slds-truncate" title={props.title}>{props.children}</span>
      <div className="slds-icon_container" title="Sort Column">
        <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" sprite="utility" symbol="arrowdown" />
      </div>
    </a>
  </th>;

let ProductList = props =>
  <div className="slds-scrollable">
    <table role="grid" className="slds-table slds-table--fixed-layout slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
      <thead>
        <tr className="slds-text-title--caps" >
          <Th className="slds-is-sortable" scope="col" title="Name">Name</Th>
          <Th className="slds-is-sortable" scope="col" title="List Price">List Price</Th>
          <Th className="slds-is-sortable" scope="col" title="Discount">Discount</Th>
          <Th className="slds-is-sortable" scope="col" title="Sale Price">Sale Price</Th>
          <Th className="slds-is-sortable" scope="col" title="Quantity">Quantity</Th>
          <Th className="slds-is-sortable" scope="col" title="Date">Date</Th>
          <Th className="slds-is-sortable" scope="col" title="Product Family">Product Family</Th>
          <Th className="slds-is-sortable" scope="col" title="Total Price">Total Price</Th>
          <th className="slds-cell-shrink" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        { props.children }
      </tbody>
    </table>
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{height: '640px'}}>
    <Modal className="slds-modal--large">
      <ModalHeader>
        <h2 className="slds-text-heading--medium">Edit All Products</h2>
        <p className="slds-m-top--x-small">Edit the details of the products associated with your opportunity</p>
      </ModalHeader>
      <ModalContent className="slds-grid slds-nowrap">
        <div className="slds-col slds-grid slds-grid--vertical slds-nowrap">
          <ProductList>
            <tr>
              <th scope="row" data-label="Name"><div className="slds-truncate" title="Beta Product">Beta Product</div></th>
              <td data-label="List Price" role="gridcell"><div className="slds-truncate" title="5,000.00">5,000.00</div></td>
              <td data-label="Discount" role="gridcell">
                <label htmlFor="discount-01" className="slds-assistive-text">Discount</label>
                <input className="slds-input" id="discount-01" defaultValue="300.00" />
              </td>
              <td data-label="Sale Price" role="gridcell">
                <label htmlFor="sale-price-01" className="slds-assistive-text">Sale Price</label>
                <input className="slds-input" id="sale-price-01" defaultValue="5000.00" />
              </td>
              <td data-label="Quantity" role="gridcell">
                <label htmlFor="quantity-01" className="slds-assistive-text">Quantity</label>
                <input className="slds-input" id="quantity-01" defaultValue="1" />
              </td>
              <td data-label="Date" role="gridcell">
                <label htmlFor="date-01" className="slds-assistive-text">Date</label>
                <input className="slds-input" id="date-01" defaultValue="8/12/16" />
              </td>
              <td data-label="Product Family" role="gridcell"><div className="slds-truncate" title="Family B">Family B</div></td>
              <td data-label="Total Price" role="gridcell"><div className="slds-truncate" title="$4,700.00">$4,700.00</div></td>
              <td role="gridcell">
                <ButtonIcon
                  className="slds-button--icon-border-filled slds-button--icon-x-small"
                  symbol="down"
                  assistiveText="Show More" />
              </td>
            </tr>
            <tr>
              <th scope="row" data-label="Name"><div className="slds-truncate" title="Service Product">Service Product</div></th>
              <td data-label="List Price" role="gridcell"><div className="slds-truncate" title="3,750.00">3,750.00</div></td>
              <td data-label="Discount" role="gridcell">
                <label htmlFor="discount-02" className="slds-assistive-text">Discount</label>
                <input className="slds-input" id="discount-02" />
              </td>
              <td data-label="Sale Price" role="gridcell">
                <label htmlFor="sale-price-02" className="slds-assistive-text">Sale Price</label>
                <input className="slds-input" id="sale-price-02" defaultValue="3750.00" />
              </td>
              <td data-label="Quantity" role="gridcell">
                <label htmlFor="quantity-02" className="slds-assistive-text">Quantity</label>
                <input className="slds-input" id="quantity-02" defaultValue="3" />
              </td>
              <td data-label="Date" role="gridcell">
                <label htmlFor="date-02" className="slds-assistive-text">Date</label>
                <input className="slds-input" id="date-02" defaultValue="8/12/16" />
              </td>
              <td data-label="Product Family" role="gridcell"><div className="slds-truncate" title="Family B">Family B</div></td>
              <td data-label="Total Price" role="gridcell"><div className="slds-truncate" title="$11,250.00">$11,250.00</div></td>
              <td role="gridcell">
                <ButtonIcon
                  className="slds-button--icon-border-filled slds-button--icon-x-small"
                  symbol="down"
                  assistiveText="Show More" />
              </td>
            </tr>
          </ProductList>
          <div className="slds-grid slds-grid--vertical-align-center slds-p-vertical--x-small slds-p-horizontal--large">
            <div className="slds-text-title--caps">
              <span className="slds-m-right--x-small">Total Products</span>
              <span className="slds-text-heading--small">2</span>
            </div>
            <div className="slds-col--bump-left slds-text-title--caps slds-text-align--right">
              <span className="slds-m-right--x-small">Total</span>
              <span className="slds-text-heading--small">$15,950</span>
            </div>
          </div>
        </div>
      </ModalContent>
      <ModalFooter className="slds-modal__footer--directional">
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
