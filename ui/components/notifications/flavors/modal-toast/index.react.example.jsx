/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import Lorem from 'react-lorem-component';

export default (
  <div className="demo-only" style={{height: '24rem'}}>
    <Modal className="slds-modal--large">
      <ModalHeader>
        <div className="slds-notify_container">
          <div className="slds-notify slds-notify--toast slds-theme--error" role="alert">
            <span className="slds-assistive-text">Error</span>
            <ButtonIcon
              className="slds-notify__close slds-button--icon-inverse"
              iconClassName="slds-button__icon--large"
              symbol="close"
              assistiveText="Close" />
            <div className="slds-notify__content slds-grid">
              <SvgIcon className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="warning" />
              <div className="slds-col slds-align-middle">
                <h2 className="slds-text-heading--small">You've encountered some errors when trying to save edits to Samuel Smith.</h2>
              </div>
            </div>
          </div>
        </div>
        <h2 className="slds-text-heading--medium">
          Modal Header
        </h2>
      </ModalHeader>

      <ModalContent className="slds-p-around--medium">
        <Lorem count={2} paragraphLowerBound={5} />
      </ModalContent>

      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
