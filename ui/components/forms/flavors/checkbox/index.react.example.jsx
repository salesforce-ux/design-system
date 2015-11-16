/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

exports.preview = (
<div className={pf('demo-only form--stacked')}>

  <div className={pf('form-element')}>
    <Checkbox label="Checkbox Default" assistiveText="checkboxSample1" />
  </div>

  <div className={pf('form-element')}>
    <label className={pf('checkbox')} htmlFor="checkboxSample2">
      <input name="checkboxSample2" type="checkbox" id="checkboxSample2" defaultChecked />
      <span className={pf('checkbox--faux')}></span>
      <span className={pf('form-element__label')}>Checkbox Checked</span>
    </label>
  </div>

  <div className={pf('form-element is-required')}>
    <Checkbox label="Checkbox Required" assistiveText="checkboxSample3" />
  </div>

  <div className={pf('form-element has-error')}>
    <Checkbox label="Checkbox Error" assistiveText="checkboxSample4" />
  </div>

  <div className={pf('form-element has-error')}>
    <label className={pf('checkbox')} htmlFor="checkboxSample5">
      <input name="checkboxSample5" type="checkbox" id="checkboxSample5" defaultChecked />
      <span className={pf('checkbox--faux')}></span>
      <span className={pf('form-element__label')}>Checkbox Error Checked</span>
    </label>
  </div>

  <div className={pf('form-element is-required has-error')}>
    <Checkbox label="Checkbox Error Required" assistiveText="checkboxSample6" />
  </div>

  <fieldset className={pf('form-element')}>
    <span className={pf('form-element__label form-element__label--top')}><legend>Checkbox Group</legend></span>
    <div className={pf('form-element__control')}>
      <Checkbox name="default" label="All opportunities owned by you" assistiveText="opportunities ownership1" />
      <Checkbox name="default" label="All contacts in the account owned by you" assistiveText="contact ownership2" />
    </div>
  </fieldset>

  <fieldset className={pf('form-element is-required')}>
    <span className={pf('form-element__label form-element__label--top')}><legend>Checkbox Group Required</legend></span>
    <div className={pf('form-element__control')}>
      <Checkbox name="default" label="All opportunities owned by you" assistiveText="opportunities ownership3" />
      <Checkbox name="default" label="All contacts in the account owned by you" assistiveText="contact ownership4" />
    </div>
  </fieldset>
</div>
);

exports.code = (
<div className='demo-only'>
  <div className={pf('form-element')}>
    <Checkbox label="Checkbox Label" assistiveText="checkboxSample1" />
  </div>
</div>
);
