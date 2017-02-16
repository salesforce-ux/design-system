// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal>
          <ModalContent className="slds-modal__menu">
            <button className="slds-button slds-button--neutral">Upload from Device</button>
            <button className="slds-button slds-button--neutral">Select a Salesforce File</button>
            <button className="slds-button slds-button--neutral">Cancel</button>
          </ModalContent>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  },
  {
    id: 'with-header',
    label: 'With Header',
    element:
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal>
          <ModalHeader closeButton="false">
            <h2 className="slds-text-heading--medium">Select a New Record Type</h2>
          </ModalHeader>
          <ModalContent className="slds-modal__menu">
            <button className="slds-button slds-button--neutral">Simple</button>
            <button className="slds-button slds-button--neutral">Advanced</button>
            <button className="slds-button slds-button--neutral">Partner</button>
            <button className="slds-button slds-button--neutral">Person Accounts</button>
            <button className="slds-button slds-button--neutral">Cancel</button>
          </ModalContent>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  },
  {
    id: 'with-header-and-tagline',
    label: 'With Header and Tagline',
    element:
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal>
          <ModalHeader closeButton="false">
            <h2 className="slds-text-heading--medium">Delete Account</h2>
            <p className="slds-m-top--x-small">Are you sure you want to delete this account?</p>
          </ModalHeader>
          <ModalContent className="slds-modal__menu">
            <button className="slds-button slds-button--destructive">Delete</button>
            <button className="slds-button slds-button--neutral">Cancel</button>
          </ModalContent>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  },
  {
    id: 'with-header-and-tagline-plus-image',
    label: 'With Header and Tagline + image',
    element:
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal>
          <ModalHeader closeButton="false">
            <span className="slds-icon_container slds-icon-action-share-thanks slds-m-bottom--x-small">
              <SvgIcon className="slds-icon slds-icon--medium" sprite="action" symbol="share_thanks" />
              <span className="slds-assistive-text">Share Thanks</span>
            </span>
            <h2 className="slds-text-heading--medium">Your Feedback is Valuable</h2>
            <p className="slds-m-top--x-small">We&rsquo;re glad to hear you&rsquo;re enjoying the app! Your input helps drive our products. Would you mind taking a moment to give us feedback through the App Store? We really appreciate your support.</p>
          </ModalHeader>
          <ModalContent className="slds-modal__menu">
            <button className="slds-button slds-button--neutral">Upload from Device</button>
            <button className="slds-button slds-button--neutral">Select a Salesforce File</button>
            <button className="slds-button slds-button--neutral">Cancel</button>
          </ModalContent>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  }
];
