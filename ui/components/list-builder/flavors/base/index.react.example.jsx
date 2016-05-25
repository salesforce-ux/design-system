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

let Search = props =>
  <div className={pf('p-vertical--x-small p-horizontal--large shrink-none theme--shade')}>
    <label className={pf('assistive-text')} htmlFor="search-text-input-product">Search Products</label>
    <div className={pf('size--1-of-1 m-bottom--x-small input-has-icon input-has-icon--left')}>
      <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
      <input id="search-text-input-product" className={pf('input')} type="text" placeholder="Search Products" />
    </div>
    <span className={pf('text-title')} aria-live="polite">{ props.itemsSelected || '0' } Item(s) Selected</span>
  </div>;

let Th = props =>
  <th className={pf(props.className)} scope={props.scope} style={props.style} aria-sort={props.ariaSort}>
    <a href="#void" className={pf('th__action text-link--reset')}>
      <span className={pf('assistive-text')}>Sort Column</span>
      <span className={pf('truncate')} title={props.title}>{ props.children }</span>
      <div className={pf('icon_container')} title="Sort Column">
        <SvgIcon className={pf('icon icon--x-small icon-text-default is-sortable__icon')} sprite="utility" symbol="arrowdown" />
      </div>
    </a>
  </th>;

let ProductList = props =>
  <div className={pf('scrollable grow')}>
    <table className={pf('table table--fixed-layout table--bordered no-row-hover table--cell-buffer')}>
      <thead>
        <tr className={pf('text-title--caps')} >
          <th className={pf('cell-shrink')}></th>
          <Th className={pf('is-sortable')} scope="col" title="Name">Name</Th>
          <Th className={pf('is-sortable')} scope="col" title="Product Code">Product Code</Th>
          <Th className={pf('is-sortable')} scope="col" title="List Price">List Price</Th>
          <Th className={pf('is-sortable')} scope="col" title="Product Family">Product Family</Th>
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

export let states = [
  {
    id: 'list-builder',
    label: 'Default',
    element:
      <div className="demo-only" style={{height: '640px'}}>
        <Modal className={pf('modal--large')}>
          <ModalHeader>
            <h2 className={pf('text-heading--medium')}>Add Products</h2>
            <p className={pf('m-top--x-small')}>Pricebook: Salesforce Products <a href="#void">(Change)</a></p>
          </ModalHeader>
          <ModalContent className={pf('grid nowrap')}>
            <div className={pf('col grid grid--vertical nowrap')}>
              <Search />
              <ProductList>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Alpha Product">Alpha Product</th>
                  <td data-label="Product Code" title="ANLTY"><span className={pf('truncate')}>ANLTY</span></td>
                  <td data-label="List Price" title="2750.00"><span className={pf('truncate')}>2750.00</span></td>
                  <td data-label="Product Family" title="Family A"><span className={pf('truncate')}>Family A</span></td>
                </tr>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Beta Product">Beta Product</th>
                  <td data-label="Product Code" title="MRKT"><span className={pf('truncate')}>MRKT</span></td>
                  <td data-label="List Price" title="3460.00"><span className={pf('truncate')}>3460.00</span></td>
                  <td data-label="Product Family" title="Family B"><span className={pf('truncate')}>Family B</span></td>
                </tr>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Service Console">Service Console</th>
                  <td data-label="Product Code" title="SRVC"><span className={pf('truncate')}>SRVC</span></td>
                  <td data-label="List Price" title="2230.00"><span className={pf('truncate')}>2230.00</span></td>
                  <td data-label="Product Family" title="Family B"><span className={pf('truncate')}>Family B</span></td>
                </tr>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Connectors">Connectors</th>
                  <td data-label="Product Code" title="CLASS"><span className={pf('truncate')}>CLASS</span></td>
                  <td data-label="List Price" title="750.00"><span className={pf('truncate')}>750.00</span></td>
                  <td data-label="Product Family" title="Family B"><span className={pf('truncate')}>Family B</span></td>
                </tr>
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter className={pf('modal__footer--directional')}>
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="neutral,brand">Next</Button>
          </ModalFooter>
        </Modal>
        <div className={pf('backdrop backdrop--open')} />
      </div>
  },
  {
    id: 'list-builder-items-selected',
    label: 'Items selected',
    element:
      <div className="demo-only" style={{height: '640px'}}>
        <Modal className={pf('modal--large')}>
          <ModalHeader>
            <h2 className={pf('text-heading--medium')}>Add Products</h2>
            <p className={pf('m-top--x-small')}>Pricebook: Salesforce Products <a href="#void">(Change)</a></p>
          </ModalHeader>
          <ModalContent className={pf('grid nowrap')}>
            <div className={pf('col grid grid--vertical nowrap')}>
              <Search itemsSelected="2" />
              <ProductList>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Alpha Product">Alpha Product</th>
                  <td data-label="Product Code" title="ANLTY"><span className={pf('truncate')}>ANLTY</span></td>
                  <td data-label="List Price" title="2750.00"><span className={pf('truncate')}>2750.00</span></td>
                  <td data-label="Product Family" title="Family A"><span className={pf('truncate')}>Family A</span></td>
                </tr>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      className={pf('is-selected')}
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Beta Product">Beta Product</th>
                  <td data-label="Product Code" title="MRKT"><span className={pf('truncate')}>MRKT</span></td>
                  <td data-label="List Price" title="3460.00"><span className={pf('truncate')}>3460.00</span></td>
                  <td data-label="Product Family" title="Family B"><span className={pf('truncate')}>Family B</span></td>
                </tr>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      className={pf('is-selected')}
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Service Console">Service Console</th>
                  <td data-label="Product Code" title="SRVC"><span className={pf('truncate')}>SRVC</span></td>
                  <td data-label="List Price" title="2230.00"><span className={pf('truncate')}>2230.00</span></td>
                  <td data-label="Product Family" title="Family B"><span className={pf('truncate')}>Family B</span></td>
                </tr>
                <tr>
                  <td className={pf('cell-shrink')}>
                    <ButtonIcon
                      flavor="icon-border,icon-small"
                      sprite="utility"
                      symbol="add"
                      assistiveText="Add Product" />
                  </td>
                  <th className={pf('truncate')} scope="row" data-label="Name" title="Connectors">Connectors</th>
                  <td data-label="Product Code" title="CLASS"><span className={pf('truncate')}>CLASS</span></td>
                  <td data-label="List Price" title="750.00"><span className={pf('truncate')}>750.00</span></td>
                  <td data-label="Product Family" title="Family B"><span className={pf('truncate')}>Family B</span></td>
                </tr>
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter className={pf('modal__footer--directional')}>
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="neutral,brand">Next</Button>
          </ModalFooter>
        </Modal>
        <div className={pf('backdrop backdrop--open')} />
      </div>
  }
];
