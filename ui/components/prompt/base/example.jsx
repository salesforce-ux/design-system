// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/base/example';

export default (
  <div className="demo-only" style={{height: '24rem'}}>
    <Modal
      role="alertdialog"
      aria-labelledby="prompt-heading-id"
      aria-describedby="prompt-message-wrapper"
      className="slds-modal--prompt"
    >
      <ModalHeader className="slds-theme--error slds-theme--alert-texture" closeButton={false}>
        <h2 className="slds-text-heading--medium" id="prompt-heading-id">
          Service Unavailable
        </h2>
      </ModalHeader>

      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      </ModalContent>

      <ModalFooter className="slds-theme--default">
        <button className="slds-button slds-button--neutral">Okay</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
