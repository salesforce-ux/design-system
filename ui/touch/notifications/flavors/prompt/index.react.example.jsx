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
            <span className="slds-icon_container slds-p-around--x-small slds-icon-action-share-thanks slds-m-bottom--x-small">
              <SvgIcon className="slds-icon slds-icon-action-share-thanks slds-icon--medium" sprite="action" symbol="share_thanks" />
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
