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
import className from 'classnames';

export let FileSelector = props =>
<div className={className('slds-form-element', props.error ? 'slds-has-error' : null)}>
  <span className="slds-form-element__label" id="file-selector-id">Attachment</span>
  <div className="slds-form-element__control">
    <div className={className('slds-file-selector', props.className)}>
      <div className={className('slds-file-selector__dropzone', props.draggover ? 'slds-has-drag-over' : null)}>
        <input className="slds-file-selector__input slds-assistive-text" accept="image/png" type="file" id="file-upload-input-01" disabled={props.draggoverError} aria-describedby={props.error ? 'file-selector-id error-01' : 'file-selector-id'} />
        <label className="slds-file-selector__body" htmlFor="file-upload-input-01">
          <span className="slds-file-selector__button slds-button slds-button--neutral">
            <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="upload" />Upload {props.files ? 'Files' : 'Image'}
          </span>
          <span className="slds-file-selector__text slds-medium-show">or Drop {props.files ? 'Files' : 'Image'}</span>
        </label>
      </div>
    </div>
  </div>
  { props.error ? <div className="slds-form-element__help" id="error-01">File type not supported</div> : null }
</div>;

export let states = [
  {
    id: 'file-selector-files',
    label: 'Default',
    element: <FileSelector files className="slds-file-selector--files" />
  },
  {
    id: 'file-selector-files-error',
    label: 'Error',
    element: <FileSelector files className="slds-file-selector--files" error />
  },
  {
    id: 'file-selector-files-draggover',
    label: 'Dragover',
    element: <FileSelector files className="slds-file-selector--files" draggover />
  },
  {
    id: 'file-selector-files-draggover-error',
    label: 'Dragover with error',
    element: <FileSelector files className="slds-file-selector--files" draggoverError error />
  }
];
