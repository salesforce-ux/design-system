/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Input from 'ui/components/forms/flavors/input/index.react';
import Textarea from 'ui/components/forms/flavors/textarea/index.react';
import Radio from 'ui/components/forms/flavors/radio/index.react';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only">
  <div className={pf('form--stacked')}>
    <Input label="Text Input" placeholder="Placeholder Text" assistiveText="inputSample2" />
    <Textarea label="Textarea Label" assistiveText="textareaSample2"></Textarea>
    <fieldset className={pf('form-element')}>
      <legend className={pf('form-element__legend')}>
        <span className={pf('form-element__label form-element__label--top')}>Checkbox Group label</span>
      </legend>
      <div className={pf('form-element__control')}>
        <Checkbox name="default" label="All opportunities owned by you" assistiveText="opportunities ownership" />
        <Checkbox name="default" label="All contacts in the account owned by you" assistiveText="contact ownership" />
      </div>
    </fieldset>
    <fieldset className={pf('form-element')}>
      <legend className={pf('form-element__legend')}>
        <span className={pf('form-element__label form-element__label--top')}>Checkbox Group label</span>
      </legend>
      <div className={pf('form-element__control')}>
        <Radio name="options" label="Lead Generation" assistiveText="lead" />
        <Radio name="options" label="Education Leads" assistiveText="education" />
      </div>
    </fieldset>
    <div className={pf('form-element')}>
      <div className={pf('form-element__control')}>
        <Checkbox name="default" label="I agree to the Terms & Service" assistiveText="agree" />
      </div>
    </div>
  </div>
</div>
);
