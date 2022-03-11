// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Backdrop
} from '../../modals/base/example';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ height: '640px' }}>
        <Backdrop>
          <Modal className="slds-modal_large">
            <ModalHeader>
              <h1 className="slds-text-heading_medium">Account name</h1>
            </ModalHeader>
            <ModalContent>
              <div
                className="slds-lookup"
                data-select="multi"
                data-scope="single"
                data-typeahead="true"
              >
                <div className="slds-form-element slds-p-top_medium slds-p-horizontal_medium slds-m-bottom_small">
                  <label className="slds-form-element__label" htmlFor="lookup">
                    Accounts
                  </label>
                  <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                    <SvgIcon
                      className="slds-icon slds-input__icon slds-icon-text-default"
                      sprite="utility"
                      symbol="search"
                    />
                    <input
                      id="lookup"
                      className="slds-input"
                      type="text"
                      role="combobox"
                      aria-activedescendant=""
                      aria-autocomplete="list"
                      aria-controls="lookup-grouped-table-id-1"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                    />
                  </div>
                </div>
                <table
                  className="slds-table slds-table_bordered slds-table_cell-buffer slds-no-row-hover"
                  role="listbox"
                  id="lookup-grouped-table-id-1"
                  aria-label="Example table for advanced modal lookup"
                >
                  <thead>
                    <tr>
                      <th colSpan="4" scope="col">
                        <div className="slds-float_right">
                          <ButtonIcon
                            className="slds-button_icon slds-button_icon-x-small"
                            symbol="filterList"
                            assistiveText="Filter List"
                            title="Filter List"
                          />
                          <ButtonIcon
                            className="slds-button_icon slds-button_icon-x-small"
                            symbol="sort"
                            assistiveText="Sort"
                            title="Sort"
                          />
                        </div>
                        5 Results, sorted by relevancy
                      </th>
                    </tr>
                    <tr>
                      <th scope="col">
                        <div className="slds-truncate" title="Account Name">
                          Account Name
                        </div>
                      </th>
                      <th scope="col">
                        <div className="slds-truncate" title="Location">
                          Location
                        </div>
                      </th>
                      <th scope="col">
                        <div className="slds-truncate" title="Secondary Column">
                          Secondary Column
                        </div>
                      </th>
                      <th scope="col">
                        <div className="slds-truncate" title="Tertiary Column">
                          Tertiary Column
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <a
                          id="s01"
                          href="#"
                          onClick={e => e.preventDefault()}
                          role="option"
                        >
                          <div className="slds-truncate" title="Acme Landscape">
                            <SvgIcon
                              className="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small"
                              sprite="standard"
                              symbol="account"
                            />
                            Acme Landscape
                          </div>
                        </a>
                      </th>
                      <td>
                        <div className="slds-truncate" title="Seattle, WA">
                          Seattle, WA
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Secondary Field">
                          Secondary Field
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Tertiary Field">
                          Tertiary Field
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a
                          id="s02"
                          href="#"
                          onClick={e => e.preventDefault()}
                          role="option"
                        >
                          <div className="slds-truncate" title="ACME Construction">
                            <SvgIcon
                              className="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small"
                              sprite="standard"
                              symbol="account"
                            />
                            ACME Construction
                          </div>
                        </a>
                      </th>
                      <td>
                        <div className="slds-truncate" title="San Francisco, CA">
                          San Francisco, CA
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Secondary Field">
                          Secondary Field
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Tertiary Field">
                          Tertiary Field
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a
                          id="s03"
                          href="#"
                          onClick={e => e.preventDefault()}
                          role="option"
                        >
                          <div className="slds-truncate" title="Action Sports">
                            <SvgIcon
                              className="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small"
                              sprite="standard"
                              symbol="account"
                            />
                            Action Sports
                          </div>
                        </a>
                      </th>
                      <td>
                        <div className="slds-truncate" title="Madison, WI">
                          Madison, WI
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Secondary Field">
                          Secondary Field
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Tertiary Field">
                          Tertiary Field
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a
                          id="s04"
                          href="#"
                          onClick={e => e.preventDefault()}
                          role="option"
                        >
                          <div className="slds-truncate" title="Moderno Bistro">
                            <SvgIcon
                              className="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small"
                              sprite="standard"
                              symbol="account"
                            />
                            Moderno Bistro
                          </div>
                        </a>
                      </th>
                      <td>
                        <div className="slds-truncate" title="Acton, OH">
                          Acton, OH
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Secondary Field">
                          Secondary Field
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Tertiary Field">
                          Tertiary Field
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a
                          id="s05"
                          href="#"
                          onClick={e => e.preventDefault()}
                          role="option"
                        >
                          <div className="slds-truncate" title="Cozy Kitchen">
                            <SvgIcon
                              className="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small"
                              sprite="standard"
                              symbol="account"
                            />
                            Cozy Kitchen
                          </div>
                        </a>
                      </th>
                      <td>
                        <div className="slds-truncate" title="Acton, CA">
                          Acton, CA
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Secondary Field">
                          Secondary Field
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="Tertiary Field">
                          Tertiary Field
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ModalContent>

            <ModalFooter className="slds-modal__footer_directional">
              <button className="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
              <button className="slds-button slds-button_neutral">New Account</button>
            </ModalFooter>
          </Modal>
        </Backdrop>
      </div>
    )
  }
];
