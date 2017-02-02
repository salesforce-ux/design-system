/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';

const textareaId = 'textarea-id-01';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let FormElement = props =>
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>;

export let FormElementLabel = props =>
  <label
    className="slds-form-element__label"
    htmlFor={ textareaId }
  >
    {props.children}
  </label>;

export let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

export let Textarea = props =>
  <textarea
    {...props}
    id={ textareaId }
    className={classNames('slds-textarea', props.className)}
    placeholder={ props.placeholder || 'Placeholder Text' }
  />;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <FormElement>
        <FormElementLabel>Textarea Label</FormElementLabel>
        <FormElementControl>
          <Textarea />
        </FormElementControl>
      </FormElement>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <FormElement>
        <FormElementLabel>Textarea Label</FormElementLabel>
        <FormElementControl>
          <Textarea disabled />
        </FormElementControl>
      </FormElement>
  },
  {
    id: 'required',
    label: 'Required',
    element:
      <FormElement>
        <FormElementLabel>
          <abbr className="slds-required" title="required">*</abbr> Textarea Label
        </FormElementLabel>
        <FormElementControl>
          <Textarea required />
        </FormElementControl>
      </FormElement>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <FormElement className="slds-has-error">
        <FormElementLabel>
          <abbr className="slds-required" title="required">*</abbr> Textarea Label
        </FormElementLabel>
        <FormElementControl>
          <Textarea
            required
            aria-describedby="error-01"
          />
        </FormElementControl>
        <div className="slds-form-element__help" id="error-01">This field is required</div>
      </FormElement>
  },
  {
    id: 'read-only',
    label: 'Read only',
    element:
      <FormElement>
        <span className="slds-form-element__label">Textarea Label</span>
        <FormElementControl className="slds-has-divider--bottom">
          <div className="slds-form-element__static slds-text-longform"><p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</p></div>
        </FormElementControl>
      </FormElement>
  }
];
