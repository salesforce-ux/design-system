/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
<div className={pf('demo-only')} style={{ paddingLeft: '2rem', paddingTop: '9rem' }}>
  <a href="javascript:void(0);" className={pf('button')}>
    <SvgIcon className={pf('icon icon-text-error icon--small')} sprite="utility"
    symbol="warning" />
    <span className={pf('assistive-text')}>Review the Following Errors</span>
  </a>
  <Button type="button" flavor="neutral">Cancel</Button>
  <Button type="button" flavor="brand">Save</Button>
  <div className={pf('popover nubbin--bottom-left theme--error')} role="alert" aria-live="polite" style={{position: 'absolute', top: '30px', left: '12px'}}>
    <div className={pf('popover__body text-longform')}>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</p>
    </div>
  </div>
</div>
);
