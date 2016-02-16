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


export default (
<div className="demo-only" style={{width: '440px'}}>
  <fieldset className={pf('form--compound')}>
    <legend className={pf('form-element__label')}>Location</legend>
    <div className={pf('form-element__group')}>
      <div className={pf('form-element__row')}>
        <div className={pf('form-element size--1-of-2')}>
          <label className={pf('form-element__label')} htmlFor="input-01">Latitude</label>
          <input id="input-01" className={pf('input')} type="text" />
        </div>
        <div className={pf('form-element size--1-of-2')}>
          <label className={pf('form-element__label')} htmlFor="input-02">Longitude</label>
          <input id="input-02" className={pf('input')} type="text" />
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset className={pf('form--compound')}>
    <legend className={pf('form-element__div')}>Address</legend>
    <div className={pf('form-element__group')}>
      <div className={pf('form-element__row')}>
        <div className={pf('form-element size--1-of-1')}>
          <label className={pf('form-element__label')} htmlFor="input-03">Street</label>
          <input id="input-03" className={pf('input')} type="text" />
        </div>
      </div>
      <div className={pf('form-element__row')}>
        <div className={pf('form-element size--1-of-2')}>
          <label className={pf('form-element__label')} htmlFor="input-04">City</label>
          <input id="input-04" className={pf('input')} type="text" />
        </div>
        <div className={pf('form-element size--1-of-2')}>
          <label className={pf('form-element__label')} htmlFor="input-05">State</label>
          <input id="input-05" className={pf('input')} type="text" />
        </div>
      </div>
      <div className={pf('form-element__row')}>
        <div className={pf('form-element size--1-of-2')}>
          <label className={pf('form-element__label')} htmlFor="input-06">ZIP Code</label>
          <input id="input-06" className={pf('input')} type="text" />
        </div>
      </div>
    </div>
  </fieldset>
</div>
);
