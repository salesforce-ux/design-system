/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import globals from 'app_modules/global';

const cssPrefix = globals.cssPrefix;

let SizePreviewExample = props =>
<div className={`slds-size--${props.size}`}>
  <div className="slds-box slds-box--x-small slds-text-align--center slds-m-around--x-small">.{cssPrefix}size--{props.size}</div>
</div>;

export let states = [
  {
    id: 'two-column',
    label: '2 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-2" />
      <SizePreviewExample size="1-of-2" />
      <SizePreviewExample size="2-of-2" />
    </div>
  },
  {
    id: 'three-column',
    label: '3 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-3" />
      <SizePreviewExample size="1-of-3" />
      <SizePreviewExample size="1-of-3" />
      <SizePreviewExample size="1-of-3" />
      <SizePreviewExample size="2-of-3" />
      <SizePreviewExample size="3-of-3" />
    </div>
  },
  {
    id: 'four-column',
    label: '4 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-4" />
      <SizePreviewExample size="1-of-4" />
      <SizePreviewExample size="1-of-4" />
      <SizePreviewExample size="1-of-4" />
      <SizePreviewExample size="1-of-4" />
      <SizePreviewExample size="3-of-4" />
      <SizePreviewExample size="2-of-4" />
      <SizePreviewExample size="2-of-4" />
      <SizePreviewExample size="4-of-4" />
    </div>
  },
  {
    id: 'five-column',
    label: '5 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-5" />
      <SizePreviewExample size="1-of-5" />
      <SizePreviewExample size="1-of-5" />
      <SizePreviewExample size="1-of-5" />
      <SizePreviewExample size="1-of-5" />
      <SizePreviewExample size="1-of-5" />
      <SizePreviewExample size="4-of-5" />
      <SizePreviewExample size="2-of-5" />
      <SizePreviewExample size="3-of-5" />
      <SizePreviewExample size="5-of-5" />
    </div>
  },
  {
    id: 'six-column',
    label: '6 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-6" />
      <SizePreviewExample size="1-of-6" />
      <SizePreviewExample size="1-of-6" />
      <SizePreviewExample size="1-of-6" />
      <SizePreviewExample size="1-of-6" />
      <SizePreviewExample size="1-of-6" />
      <SizePreviewExample size="2-of-6" />
      <SizePreviewExample size="4-of-6" />
      <SizePreviewExample size="3-of-6" />
      <SizePreviewExample size="3-of-6" />
      <SizePreviewExample size="6-of-6" />
    </div>
  },
  {
    id: '7-column',
    label: '7 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="1-of-7" />
      <SizePreviewExample size="2-of-7" />
      <SizePreviewExample size="5-of-7" />
      <SizePreviewExample size="3-of-7" />
      <SizePreviewExample size="4-of-7" />
      <SizePreviewExample size="7-of-7" />
    </div>
  },
  {
    id: '8-column',
    label: '8 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="1-of-8" />
      <SizePreviewExample size="2-of-8" />
      <SizePreviewExample size="6-of-8" />
      <SizePreviewExample size="3-of-8" />
      <SizePreviewExample size="5-of-8" />
      <SizePreviewExample size="4-of-8" />
      <SizePreviewExample size="4-of-8" />
      <SizePreviewExample size="8-of-8" />
    </div>
  },
  {
    id: '12-column',
    label: '12 Column Span',
    element:
    <div className="demo-only demo-only--sizing slds-grid slds-wrap">
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="1-of-12" />
      <SizePreviewExample size="2-of-12" />
      <SizePreviewExample size="10-of-12" />
      <SizePreviewExample size="3-of-12" />
      <SizePreviewExample size="9-of-12" />
      <SizePreviewExample size="4-of-12" />
      <SizePreviewExample size="8-of-12" />
      <SizePreviewExample size="5-of-12" />
      <SizePreviewExample size="7-of-12" />
      <SizePreviewExample size="6-of-12" />
      <SizePreviewExample size="6-of-12" />
      <SizePreviewExample size="12-of-12" />
    </div>
  }
];
