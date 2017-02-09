/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { FormElement } from 'ui/components/form-layout/flavors/element/index.react.example';
import { Input } from 'ui/components/input/flavors/base/index.react.example';
import { Select } from 'ui/components/select/flavors/base/index.react.example';
import { Modal, ModalHeader, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';

const inputId01 = 'input-id-01';
const inputId02 = 'input-id-02';
const inputId03 = 'input-id-03';
const inputId04 = 'input-id-04';
const inputId05 = 'input-id-05';
const inputId06 = 'input-id-06';
const inputId07 = 'input-id-07';
const inputId08 = 'input-id-08';

export default (
  <div className="demo-only" style={{height: '640px'}}>
    <Modal className="slds-modal--form">
      <ModalHeader closeButton="false">
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--neutral">Save</button>
        <h2 className="slds-text-heading--medium slds-truncate" title="New Contact">New Contact</h2>
      </ModalHeader>
      <ModalContent>
        <h3 className="slds-section-title--divider">Section Information</h3>
        <div className="slds-form--stacked slds-p-around--medium slds-m-bottom--x-small">
          <FormElement label="Name Suffix" inputId={ inputId01 }>
            <Input id={ inputId01 } placeholder="Ms." />
          </FormElement>
          <FormElement label="First Name" inputId={ inputId02 }>
            <Input id={ inputId02 } placeholder="Esther" />
          </FormElement>
          <FormElement label="Last Name" inputId={ inputId03 }>
            <Input id={ inputId03 } placeholder="Lewis" />
          </FormElement>
          <div className="slds-m-top--medium" data-select="multi" data-scope="single" data-typeahead="true">
            <div className="slds-form-element">
              <label className="slds-form-element__label" htmlFor="lookup">Lookup</label>
              <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
                <SvgIcon className="slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
                <input id="lookup" className="slds-input" type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" />
              </div>
            </div>
          </div>

          <div className="slds-form-element slds-m-top--medium">
            <label className="slds-form-element__label" htmlFor="select-01">Select</label>
            <Select id="select-01">
              <option>Select an Option</option>
            </Select>
          </div>

          <FormElement label="Text Input" inputId={ inputId04 }>
            <Input id={ inputId04 } placeholder="" />
          </FormElement>
        </div>
        <h3 className="slds-section-title--divider">Section Information</h3>
        <div className="slds-form--stacked slds-p-around--medium slds-m-bottom--x-small">
          <FormElement label="Text Input" inputId={ inputId05 }>
            <Input id={ inputId05 } placeholder="" />
          </FormElement>
          <FormElement label="Text Input" inputId={ inputId06 }>
            <Input id={ inputId06 } placeholder="" />
          </FormElement>
          <FormElement label="Text Input" inputId={ inputId07 }>
            <Input id={ inputId07 } placeholder="" />
          </FormElement>
          <FormElement label="Text Input" inputId={ inputId08 }>
            <Input id={ inputId08 } />
          </FormElement>
        </div>
      </ModalContent>
    </Modal>
  </div>
);
