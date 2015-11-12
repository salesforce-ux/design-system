/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('ui/components/modals/index.react');
const Input = require('ui/components/forms/flavors/input/index.react');
const Textarea = require('ui/components/forms/flavors/textarea/index.react');
const Button = require('ui/components/buttons/index.react');
const Radio = require('ui/components/forms/flavors/radio/index.react');
const Checkbox = require('ui/components/forms/flavors/checkbox/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const Menu = require('ui/components/menus/index.react');
const PickList = require('ui/components/picklists/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const Lorem = require('react-lorem-component');
const componentUtil = require('app_modules/ui/util/component');
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
    ReactDOM.findDOMNode(this.refs.opener).focus();
  }

  render() {
    return (
      <div className='demo-only' style={{height: '800px'}}>
        <Modal
          isOpen={this.state.showing}
          renderInline={true}
          className={pf('modal--form')}
        >

          <Modal.Header
            closeButton={false}
          >
            <Button flavor="neutral,small">Cancel</Button>
            <Button flavor="neutral,small,brand">Save</Button>
            <h2 className={pf('text-heading--medium')}>
              New Contact
            </h2>
          </Modal.Header>

          <Modal.Body>
            <h3 className={pf('text-heading--label')}>Section Information</h3>
            <div className={pf('form--stacked m-bottom--large')}>
              <Input label="Name Suffix" placeholder="Ms." assistiveText="inputNameSample1" />
              <Input label="First Name" placeholder="Esther" assistiveText="inputNameSample2" />
              <Input label="Last Name" placeholder="Lewis" assistiveText="inputNameSample3" />

              <div className={pf('m-top--medium large')} data-select="multi" data-scope="single" data-typeahead="true">
                <div className={pf('form-element')}>
                  <label className={pf('form-element__label')} htmlFor="lookup">Lookup</label>
                  <div className={pf('form-element__control input-has-icon input-has-icon--right')}>
                    <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
                    <input id="lookup" className={pf('input')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" />
                  </div>
                </div>
              </div>

              <div className={pf('form-element m-top--medium large')}>
                <span className={pf('form-element__label')}>Picklist</span>
                <PickList aria-expanded="false" className={pf('max-small-buttons--stretch')} />
              </div>

              <Input label="Text Input" assistiveText="inputSample2" />
            </div>
            <h3 className={pf('text-heading--label')}>Section Information</h3>
            <div className={pf('form--stacked m-bottom--large')}>
              <Input label="Text Input" assistiveText="inputSample3" />
              <Input label="Text Input" assistiveText="inputSample4" />
              <Input label="Text Input" assistiveText="inputSample5" />
              <Input label="Text Input" assistiveText="inputSample6" />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

module.exports = <ModalExample/>;
