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
import _ from 'lodash';
import Prefs from 'app_modules/site/preferences';
import PrefsMixin from 'app_modules/site/preferences/mixin';
import Status from 'app_modules/site/util/component/status';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Radio from 'ui/components/forms/flavors/radio/index.react';
import Modal from 'ui/components/modals/index.react';
import classNames from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

const Settings = React.createClass({
  mixins: [PrefsMixin],

  componentDidMount: function() {
    this.originalPrefs = Prefs.getDefaults()[process.env.DEFAULT_USER_TYPE];
  },

  roleChanged: function(e) {
    const val = e.currentTarget.value;
    Prefs.set('role', val);
  },

  statusChanged: function(e) {
    const val = e.currentTarget.value;
    Prefs.set('status', val);
  },

  revertChangesAndClose: function() {
    Prefs.setAll(this.originalPrefs);
    this.props.onClose();
  },

  shouldCheckStatus(status) {
    return this.hasPreference('status', status.id);
  },

  renderStatusRadio: function(status) {
    return (
      <div key={status.id}>
        <Radio
          name="type"
          label={status.desc}
          assistiveText={status.name} value={status.id}
          checked={this.shouldCheckStatus(status)}
          onChange={this.statusChanged} />
      </div>
    );
  },

  render: function() {
    return (
      <Modal isOpen={this.props.isOpen}
        onRequestClose={this.props.onClose}
        className="site-settings">
        <Modal.Header>
          <h2 className="site-text-heading--large">Settings</h2>
        </Modal.Header>
        <Modal.Body>
          <div className={pf('p-horizontal--small p-vertical--medium')}>
            <fieldset className={pf('p-horizontal--large form-element')}>
              <legend className={pf('form-element__label site-text-heading--medium')}>Are you an Aura developer?</legend>
                <div className={pf('form-element__control')}>
                  <Radio
                    tabIndex="0"
                    label="Yes"
                    name="aura"
                    assistiveText="aura"
                    value="aura"
                    checked={this.state.role === 'aura'}
                    onChange={this.roleChanged}
                  />
                  <Radio
                    label="No"
                    name="aura"
                    assistiveText="regular"
                    value="regular"
                    checked={this.state.role === 'regular'}
                    onChange={this.roleChanged}
                  />
                </div>
            </fieldset>
            <hr />
            <fieldset className={pf('p-horizontal--large form-element')}>
              <legend className={pf('form-element__label site-text-heading--medium')}>Which components would you like to see?</legend>
              <div className={pf('form-element__control')}>
                { Prefs.statuses.map(s => this.renderStatusRadio(s) ) }
              </div>
            </fieldset>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button flavor="neutral" onClick={this.revertChangesAndClose} >Cancel</Button>
          <Button flavor="neutral,brand" onClick={this.props.onClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default Settings;
