// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Backdrop
} from '../../modals/base/example';

export default (
  <div className="demo-only" style={{ height: '24rem' }}>
    <Backdrop>
      <Modal
        tabIndex="0"
        role="alertdialog"
        aria-labelledby="prompt-heading-id"
        aria-describedby="prompt-message-wrapper"
        className="slds-modal_prompt"
        closeButton={false}
      >
        <ModalHeader
          className="slds-theme_error slds-theme_alert-texture"
        >
          <h1 className="slds-text-heading_medium" id="prompt-heading-id">
            Service unavailable
          </h1>
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
          <button className="slds-button slds-button_neutral">Got It</button>
        </ModalFooter>
      </Modal>
    </Backdrop>
  </div>
);
