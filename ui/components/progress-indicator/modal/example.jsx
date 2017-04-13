// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Progress, Step } from '../base/example';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../modals/base/example';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{height: '640px'}}>
    <Modal className="slds-modal--large" aria-labelledby="header43">
      <ModalHeader>
        <h2 id="header43" className="slds-text-heading--medium">Modal Header</h2>
      </ModalHeader>
      <ModalContent className="slds-grow slds-p-around--medium" />
      <ModalFooter className="slds-grid slds-grid--align-spread">
        <button className="slds-button slds-button--neutral">Cancel</button>
        <Progress className="slds-progress--shade" value="25">
          <Step done>Step 1</Step>
          <Step active>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
