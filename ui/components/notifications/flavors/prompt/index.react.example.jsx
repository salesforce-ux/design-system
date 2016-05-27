/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'ui/components/modals/index.react';
import Button from 'ui/components/buttons/index.react';
import Lorem from 'react-lorem-component';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <div className="demo-only" style={{height: '24rem'}}>
    <Modal
      isOpen={true}
      renderInline={true}
      role="alertdialog"
      aria-labelledby="prompt-heading-id"
      aria-describedby="prompt-message-wrapper"
      className={pf('modal--prompt')}
    >

      <Modal.Header className={pf('theme--error theme--alert-texture')} closeButton={false}>
        <h2 className={pf('text-heading--medium')} id="prompt-heading-id">
          Service Unavailable
        </h2>
      </Modal.Header>

      <Modal.Body className={pf('p-around--medium')}>
        <Lorem count={1} paragraphLowerBound={2} />
      </Modal.Body>

      <Modal.Footer className={pf('theme--default')}>
        <Button flavor="neutral">Okay</Button>
      </Modal.Footer>
    </Modal>
  </div>
);
