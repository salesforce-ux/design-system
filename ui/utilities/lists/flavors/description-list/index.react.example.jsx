/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { prefix as pf } from 'app_modules/ui/util/component';

export let states = [
  {
    id: 'description-list',
    label: 'Default',
    element:
      <dl>
        <dt>First Label:</dt>
        <dd>Description for first label</dd>
        <dt>Second Label:</dt>
        <dd>Description for second label</dd>
      </dl>
  },
  {
    id: 'description-list-inline',
    label: 'Inline',
    element:
      <dl className={pf('dl--inline')}>
        <dt className={pf('dl--inline__label')}>First Label:</dt>
        <dd className={pf('dl--inline__detail')}>Description for first label</dd>
        <dt className={pf('dl--inline__label')}>Second Label:</dt>
        <dd className={pf('dl--inline__detail')}>Description for second label</dd>
      </dl>
  },
  {
    id: 'description-list-horizontal',
    label: 'Horizontal',
    element:
      <dl className={pf('dl--horizontal')}>
        <dt className={pf('dl--horizontal__label')}>First Label:</dt>
        <dd className={pf('dl--horizontal__detail')}>Description for first label</dd>
        <dt className={pf('dl--horizontal__label')}>Second Label:</dt>
        <dd className={pf('dl--horizontal__detail')}>Second description</dd>
      </dl>
  }
];
