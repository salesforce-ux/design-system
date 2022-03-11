// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Progress, Step } from '../base/example';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Backdrop
} from '../../modals/base/example';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ height: '640px' }}>
        <Backdrop>
          <Modal className="slds-modal_large" aria-labelledby="header43">
            <ModalHeader>
              <h1 id="header43" className="slds-text-heading_medium">
                Modal header
              </h1>
            </ModalHeader>
            <ModalContent className="slds-grow slds-p-around_medium" />
            <ModalFooter className="slds-grid slds-grid_align-spread">
              <button className="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
              <Progress className="slds-progress_shade" value="25">
                <Step done>Step 1</Step>
                <Step active>Step 2</Step>
                <Step>Step 3</Step>
                <Step>Step 4</Step>
                <Step>Step 5</Step>
              </Progress>
              <button className="slds-button slds-button_brand">Save</button>
            </ModalFooter>
          </Modal>
        </Backdrop>
      </div>
    )
  }
];
