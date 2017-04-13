// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { FormElement } from '../../../components/form-layout/element/example';
import { Input } from '../../../components/input/base/example';
import { Select } from '../../../components/select/base/example';
import { Modal, ModalHeader, ModalContent } from '../../../components/modals/base/example';
import { Lookup } from '../../../components/lookups/base/example';

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
        <div className="slds-form slds-form--stacked slds-p-around--medium slds-m-bottom--x-small">
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
            <Lookup label="Lookup" placeholder=" " />
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
        <div className="slds-form slds-form--stacked slds-p-around--medium slds-m-bottom--x-small">
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
