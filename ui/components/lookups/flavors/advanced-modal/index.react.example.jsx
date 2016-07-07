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
import Input from 'ui/components/forms/flavors/input/index.react';
import Menu from 'ui/components/menus/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Modal from 'ui/components/modals/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only" style={{height: '640px'}}>
  <Modal
    isOpen={true}
    renderInline={true}
    className={pf('modal--large')}>
    <Modal.Header>
      <h2 className={pf('text-heading--medium')}>Account Name</h2>
    </Modal.Header>

    <Modal.Body>
      <div className={pf('lookup')} data-select="multi" data-scope="single" data-typeahead="true">
        <div className={pf('form-element p-top--medium p-horizontal--medium m-bottom--small')}>
          <label className={pf('form-element__label')} htmlFor="lookup">Accounts</label>
          <div className={pf('form-element__control input-has-icon input-has-icon--right')}>
            <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
            <input id="lookup" className={pf('input')} type="text" aria-haspopup="true" aria-autocomplete="list" role="combobox" aria-activedescendant="" />
          </div>
        </div>
        <table className={pf('table table--bordered table--cell-buffer no-row-hover')} role="listbox">
          <thead>
            <tr>
              <th colSpan="4" scope="col">
                <div className={pf('float--right')}>
                  <ButtonIcon flavor="icon-bare,icon-x-small" sprite="utility" symbol="filterList" assistiveText="Filter List" />
                  <ButtonIcon flavor="icon-bare,icon-x-small" sprite="utility" symbol="sort" assistiveText="Sort" />
                </div>
                5 Results, sorted by relevancy
              </th>
            </tr>
            <tr>
              <th scope="col">Account Name</th>
              <th scope="col">Location</th>
              <th scope="col">Secondary Column</th>
              <th scope="col">Tertiary Column</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <a id="s01" href="javascript:void(0);" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small m-right--x-small')} sprite="standard" symbol="account" />
                  Acme Landscape
                </a>
              </th>
              <td>Seattle, WA</td>
              <td>Secondary Field</td>
              <td>Tertiary Field</td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s02" href="javascript:void(0);" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small m-right--x-small')} sprite="standard" symbol="account" />
                  ACME Construction
                </a>
              </th>
              <td>San Francisco, CA</td>
              <td>Secondary Field</td>
              <td>Tertiary Field</td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s03" href="javascript:void(0);" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small m-right--x-small')} sprite="standard" symbol="account" />
                  Action Sports
                </a>
              </th>
              <td>Madison, WI</td>
              <td>Secondary Field</td>
              <td>Tertiary Field</td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s04" href="javascript:void(0);" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small m-right--x-small')} sprite="standard" symbol="account" />
                  Moderno Bistro
                </a>
              </th>
              <td>Acton, OH</td>
              <td>Secondary Field</td>
              <td>Tertiary Field</td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s05" href="javascript:void(0);" role="option">
                  <SvgIcon className={pf('icon icon-standard-account icon--small m-right--x-small')} sprite="standard" symbol="account" />
                  Cozy Kitchen
                </a>
              </th>
              <td>Acton, CA</td>
              <td>Secondary Field</td>
              <td>Tertiary Field</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal.Body>

    <Modal.Footer flavor="directional">
      <Button flavor="neutral">Cancel</Button>
      <Button flavor="neutral">New Account</Button>
    </Modal.Footer>
  </Modal>
</div>
);
