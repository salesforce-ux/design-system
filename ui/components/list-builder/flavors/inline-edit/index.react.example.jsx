/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/flavors/base/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Th = props =>
  <th className={pf(props.className)} scope={props.scope} style={props.style}>
    <a href="javascript:void(0);" className={pf('th__action text-link--reset')}>
      <span className={pf('assistive-text')}>Sort Column</span>
      <span className={pf('truncate')} title={props.title}>{props.children}</span>
      <div className={pf('icon_container')} title="Sort Column">
        <SvgIcon className={pf('icon icon--x-small icon-text-default is-sortable__icon')} sprite="utility" symbol="arrowdown" />
      </div>
    </a>
  </th>;

let ProductList = props =>
  <div className={pf('scrollable')}>
    <table className={pf('table table--fixed-layout table--bordered no-row-hover table--cell-buffer')}>
      <thead>
        <tr className={pf('text-title--caps')} >
          <Th className={pf('is-sortable')} scope="col" title="Name">Name</Th>
          <Th className={pf('is-sortable')} scope="col" title="List Price">List Price</Th>
          <Th className={pf('is-sortable')} scope="col" title="Discount">Discount</Th>
          <Th className={pf('is-sortable')} scope="col" title="Sale Price">Sale Price</Th>
          <Th className={pf('is-sortable')} scope="col" title="Quantity">Quantity</Th>
          <Th className={pf('is-sortable')} scope="col" title="Date">Date</Th>
          <Th className={pf('is-sortable')} scope="col" title="Product Family">Product Family</Th>
          <Th className={pf('is-sortable')} scope="col" title="Total Price">Total Price</Th>
          <th className={pf('cell-shrink')} scope="col"></th>
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
    <Modal className={pf('modal--large')}>
      <ModalHeader>
        <h2 className={pf('text-heading--medium')}>Edit All Products</h2>
        <p className={pf('m-top--x-small')}>Edit the details of the products associated with your opportunity</p>
      </ModalHeader>
      <ModalContent className={pf('grid nowrap')}>
        <div className={pf('col grid grid--vertical nowrap')}>
          <ProductList>
            <tr>
              <th scope="row" data-label="Name"><div className={pf('truncate')} title="Beta Product">Beta Product</div></th>
              <td data-label="List Price"><div className={pf('truncate')} title="5,000.00">5,000.00</div></td>
              <td data-label="Discount">
                <label htmlFor="discount-01" className={pf('assistive-text')}>Discount</label>
                <input className={pf('input')} id="discount-01" defaultValue="300.00" />
              </td>
              <td data-label="Sale Price">
                <label htmlFor="sale-price-01" className={pf('assistive-text')}>Sale Price</label>
                <input className={pf('input')} id="sale-price-01" defaultValue="5000.00" />
              </td>
              <td data-label="Quantity">
                <label htmlFor="quantity-01" className={pf('assistive-text')}>Quantity</label>
                <input className={pf('input')} id="quantity-01" defaultValue="1" />
              </td>
              <td data-label="Date">
                <label htmlFor="date-01" className={pf('assistive-text')}>Date</label>
                <input className={pf('input')} id="date-01" defaultValue="8/12/16" />
              </td>
              <td data-label="Product Family"><div className={pf('truncate')} title="Family B">Family B</div></td>
              <td data-label="Total Price"><div className={pf('truncate')} title="$4,700.00">$4,700.00</div></td>
              <td>
                <ButtonIcon
                  flavor="icon-border-filled,icon-x-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </td>
            </tr>
            <tr>
              <th scope="row" data-label="Name"><div className={pf('truncate')} title="Service Product">Service Product</div></th>
              <td data-label="List Price"><div className={pf('truncate')} title="3,750.00">3,750.00</div></td>
              <td data-label="Discount">
                <label htmlFor="discount-02" className={pf('assistive-text')}>Discount</label>
                <input className={pf('input')} id="discount-02" />
              </td>
              <td data-label="Sale Price">
                <label htmlFor="sale-price-02" className={pf('assistive-text')}>Sale Price</label>
                <input className={pf('input')} id="sale-price-02" defaultValue="3750.00" />
              </td>
              <td data-label="Quantity">
                <label htmlFor="quantity-02" className={pf('assistive-text')}>Quantity</label>
                <input className={pf('input')} id="quantity-02" defaultValue="3" />
              </td>
              <td data-label="Date">
                <label htmlFor="date-02" className={pf('assistive-text')}>Date</label>
                <input className={pf('input')} id="date-02" defaultValue="8/12/16" />
              </td>
              <td data-label="Product Family"><div className={pf('truncate')} title="Family B">Family B</div></td>
              <td data-label="Total Price"><div className={pf('truncate')} title="$11,250.00">$11,250.00</div></td>
              <td>
                <ButtonIcon
                  flavor="icon-border-filled,icon-x-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </td>
            </tr>
          </ProductList>
          <div className={pf('grid grid--vertical-align-center p-vertical--x-small p-horizontal--large')}>
            <div className={pf('text-title--caps')}>
              <span className={pf('m-right--x-small')}>Total Products</span>
              <span className={pf('text-heading--small')}>2</span>
            </div>
            <div className={pf('col--bump-left text-title--caps text-align--right')}>
              <span className={pf('m-right--x-small')}>Total</span>
              <span className={pf('text-heading--small')}>$15,950</span>
            </div>
          </div>
        </div>
      </ModalContent>
      <ModalFooter className={pf('modal__footer--directional')}>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Save</Button>
      </ModalFooter>
    </Modal>
    <div className={pf('backdrop backdrop--open')} />
  </div>
);
