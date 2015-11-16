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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Lorem from 'react-lorem-component';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: true };
  }

  openModal() {
    this.setState({showing: true});
  }

  closeModal() {
    this.setState({showing: false});
    this.refs.opener.focus();
  }

  render() {
    return (
      <div className='demo-only' style={{height: '720px'}}>
        <Modal
          isOpen={this.state.showing}
          renderInline={true}
        >

          <Modal.Header>
            <h2 className={pf('text-heading--medium')}>
              Modal Header
            </h2>

            <p className={pf('m-top--x-small')}>
              Here&rsquo;s a tagline if you need it. It is allowed to extend
              across mulitple lines, so I&rsquo;m making up content to show that
              to you. It is allowed to <a href="#">contain links or be a link</a>.
            </p>
          </Modal.Header>

          <Modal.Body>
            <Lorem count={2} paragraphLowerBound={5} />
          </Modal.Body>

          <Modal.Footer>
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="neutral,brand">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default <ModalExample/>;
