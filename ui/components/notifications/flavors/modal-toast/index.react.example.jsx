/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Modal from 'ui/components/modals/index.react';
import Button from 'ui/components/buttons/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import Lorem from 'react-lorem-component';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <div className="demo-only" style={{height: '24rem'}}>
    <Modal
      isOpen={true}
      renderInline={true}
      flavor="large"
    >

      <Modal.Header>
        <div className={pf('notify_container')}>
          <div className={pf('notify notify--toast theme--error')} role="alert">
            <span className={pf('assistive-text')}>Error</span>
            <ButtonIcon
              className={pf('notify__close button--icon-inverse')}
              iconClassName={pf('button__icon--large')}
              symbol="close"
              assistiveText="Close" />
            <div className={pf('notify__content grid')}>
              <SvgIcon className={pf('icon icon--small m-right--small col no-flex')} sprite="utility" symbol="warning" />
              <div className={pf('col align-middle')}>
                <h2 className={pf('text-heading--small')}>You've encountered some errors when trying to save edits to Samuel Smith.</h2>
              </div>
            </div>
          </div>
        </div>
        <h2 className={pf('text-heading--medium')}>
          Modal Header
        </h2>
      </Modal.Header>

      <Modal.Body className={pf('p-around--medium')}>
        <Lorem count={2} paragraphLowerBound={5} />
      </Modal.Body>

      <Modal.Footer>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Save</Button>
      </Modal.Footer>
    </Modal>
  </div>
);
