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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import Input from 'ui/components/forms/flavors/input/index.react';
import Menu from 'ui/components/menus/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Modal from 'ui/components/modals/index.react';


export default (
<div className="demo-only" style={{height: '640px'}}>
  <Modal
    isOpen={true}
    renderInline={true}
    className="slds-modal--large">
    <Modal.Header>
      <h2 className="slds-text-heading--medium">Account Name</h2>
    </Modal.Header>

    <Modal.Body>
      <div className="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true">
        <div className="slds-form-element slds-p-top--medium slds-p-horizontal--medium slds-m-bottom--small">
          <label className="slds-form-element__label" htmlFor="lookup">Accounts</label>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
            <SvgIcon className="slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
            <input id="lookup" className="slds-input" type="text" aria-haspopup="true" aria-autocomplete="list" role="combobox" aria-activedescendant="" />
          </div>
        </div>
        <table className="slds-table slds-table--bordered slds-table--cell-buffer slds-no-row-hover" role="listbox">
          <thead>
            <tr>
              <th colSpan="4" scope="col">
                <div className="slds-float--right">
                  <ButtonIcon className="slds-button--icon slds-button--icon-x-small" symbol="filterList" assistiveText="Filter List" />
                  <ButtonIcon className="slds-button--icon slds-button--icon-x-small" symbol="sort" assistiveText="Sort" />
                </div>
                5 Results, sorted by relevancy
              </th>
            </tr>
            <tr>
              <th scope="col"><div className="slds-truncate" title="Account Name">Account Name</div></th>
              <th scope="col"><div className="slds-truncate" title="Location">Location</div></th>
              <th scope="col"><div className="slds-truncate" title="Secondary Column">Secondary Column</div></th>
              <th scope="col"><div className="slds-truncate" title="Tertiary Column">Tertiary Column</div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <a id="s01" href="javascript:void(0);" role="option">
                  <div className="slds-truncate" title="Acme Landscape">
                    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                    Acme Landscape
                  </div>
                </a>
              </th>
              <td><div className="slds-truncate" title="Seattle, WA">Seattle, WA</div></td>
              <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
              <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s02" href="javascript:void(0);" role="option">
                  <div className="slds-truncate" title="ACME Construction">
                    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                    ACME Construction
                  </div>
                </a>
              </th>
              <td><div className="slds-truncate" title="San Francisco, CA">San Francisco, CA</div></td>
              <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
              <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s03" href="javascript:void(0);" role="option">
                  <div className="slds-truncate" title="Action Sports">
                    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                    Action Sports
                  </div>
                </a>
              </th>
              <td><div className="slds-truncate" title="Madison, WI">Madison, WI</div></td>
              <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
              <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s04" href="javascript:void(0);" role="option">
                  <div className="slds-truncate" title="Moderno Bistro">
                    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                    Moderno Bistro
                  </div>
                </a>
              </th>
              <td><div className="slds-truncate" title="Acton, OH">Acton, OH</div></td>
              <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
              <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
            </tr>
            <tr>
              <th scope="row">
                <a id="s05" href="javascript:void(0);" role="option">
                  <div className="slds-truncate" title="Cozy Kitchen">
                    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                    Cozy Kitchen
                  </div>
                </a>
              </th>
              <td><div className="slds-truncate" title="Acton, CA">Acton, CA</div></td>
              <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
              <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
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
