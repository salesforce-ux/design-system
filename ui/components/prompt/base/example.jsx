// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../../modals/base/example';

export default (
  <div className="demo-only" style={{ height: '24rem' }}>
    <Modal
      role="alertdialog"
      aria-labelledby="prompt-heading-id"
      aria-describedby="prompt-message-wrapper"
      className="slds-modal_prompt"
    >
      <ModalHeader
        className="slds-theme_error slds-theme_alert-texture"
        closeButton={false}
      >
        <h2 className="slds-text-heading_medium" id="prompt-heading-id">
          Service Unavailable
        </h2>
      </ModalHeader>

      <ModalContent
        className="slds-p-around_medium"
        id="prompt-message-wrapper"
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </ModalContent>

      <ModalFooter className="slds-theme_default">
        <button className="slds-button slds-button_neutral">Okay</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);
