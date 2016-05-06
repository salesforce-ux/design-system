/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/flavors/base/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let ListObject = props =>
  <div className={pf('media media--center')}>
    <div className={pf('media__figure')}>
      <span className={className(pf('avatar avatar--small align--absolute-center'), props.figureClass)}>
        {props.objectInitials}
      </span>
    </div>
    <div className={pf('media__body')}><span className={pf('truncate')}>{props.children}</span></div>
  </div>;

let Search = props =>
  <div className={pf('p-vertical--x-small p-horizontal--large grid grid--vertical-align-center shrink-none')}>
    <label className={pf('assistive-text')} htmlFor="search-text-input-product">Search Products</label>
    <div className={pf('size--1-of-3 input-has-icon input-has-icon--left')}>
      <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
      <input id="search-text-input-product" className={pf('input')} type="text" placeholder="Search Products" />
    </div>
    <span className={pf('col--bump-left text-heading--label-normal')}>2 Item(s) Selected</span>
  </div>;

let ProductList = props =>
  <div className={pf('scrollable grow')}>
    <table className={pf('table table--bordered no-row-hover table--cell-buffer')}>
      <thead>
        <tr className={pf('text-heading--label')} >
          <th className={pf('is-sortable')} scope="col">
            <span className={pf('truncate')}>Name</span>
            <ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="arrowdown"
              assistiveText="Sort" />
          </th>
          <th scope="col"><span className={pf('truncate')}>Product Code</span></th>
          <th scope="col"><span className={pf('truncate')}>List Price</span></th>
          <th scope="col"><span className={pf('truncate')}>Product Family</span></th>
          <th scope="col" className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-small"
              sprite="utility"
              symbol="add"
              assistiveText="Add all Products" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th data-label="name" scope="row">
            <ListObject objectInitials="AP" figureClass={pf('icon-custom-10')}>Alpha Product</ListObject>
          </th>
          <td data-label="Product Code"><span className={pf('truncate')}>ANLTY</span></td>
          <td data-label="List Price"><span className={pf('truncate')}>2750.00</span></td>
          <td data-label="Product Family"><span className={pf('truncate')}>Family A</span></td>
          <td className={pf('row-action')}>
            <ButtonIcon
              flavor="icon-border,icon-small"
              className={pf('is-selected')}
              sprite="utility"
              symbol="add"
              assistiveText="Add Product" />
          </td>
        </tr>
        <tr>
          <th data-label="name" scope="row">
            <ListObject objectInitials="BP" figureClass={pf('icon-custom-20')}>Beta Product</ListObject>
          </th>
          <td data-label="Product Code"><span className={pf('truncate')}>MRKT</span></td>
          <td data-label="List Price"><span className={pf('truncate')}>3460.00</span></td>
          <td data-label="Product Family"><span className={pf('truncate')}>Family B</span></td>
          <td className={pf('row-action')}>
            <ButtonIcon
              flavor="icon-border,icon-small"
              sprite="utility"
              symbol="add"
              assistiveText="Add Product" />
          </td>
        </tr>
        <tr>
          <th data-label="name" scope="row">
            <ListObject objectInitials="MS" figureClass={pf('icon-custom-30')}>Mobile Suite</ListObject>
          </th>
          <td data-label="Product Code"><span className={pf('truncate')}>SRVC</span></td>
          <td data-label="List Price"><span className={pf('truncate')}>2230.00</span></td>
          <td data-label="Product Family"><span className={pf('truncate')}>Family B</span></td>
          <td className={pf('row-action')}>
            <ButtonIcon
              flavor="icon-border,icon-small"
              className={pf('is-selected')}
              sprite="utility"
              symbol="add"
              assistiveText="Add Product" />
          </td>
        </tr>
        <tr>
          <th data-label="name" scope="row">
            <ListObject objectInitials="CC" figureClass={pf('icon-custom-40')}>Connectors</ListObject>
          </th>
          <td data-label="Product Code"><span className={pf('truncate')}>CLASS</span></td>
          <td data-label="List Price"><span className={pf('truncate')}>750.00</span></td>
          <td data-label="Product Family"><span className={pf('truncate')}>Family B</span></td>
          <td className={pf('row-action')}>
            <ButtonIcon
              flavor="icon-border,icon-small"
              sprite="utility"
              symbol="add"
              assistiveText="Add Product" />
          </td>
        </tr>
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
        <h2 className={pf('text-heading--medium')}>Add Products</h2>
        <p className={pf('m-top--x-small')}>Pricebook: Salesforce Products <a href="#void">(Change)</a></p>
      </ModalHeader>
      <ModalContent className={pf('grid nowrap')}>
        <div className={pf('col grid grid--vertical nowrap')}>
          <Search />
          <ProductList />
        </div>
      </ModalContent>
      <ModalFooter className={pf('modal__footer--directional')}>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Next</Button>
      </ModalFooter>
    </Modal>
    <div className={pf('backdrop backdrop--open')} />
  </div>
);
