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


export const preview = (
<div className="demo-only">
  <div className={pf('box theme--default m-bottom--x-small')}>
    <p>This is a <strong>default</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--shade m-bottom--x-small')}>
    <p>This is a <strong>shade</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--inverse m-bottom--x-small')}>
    <p>This is an <strong>inverse</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--alt-inverse m-bottom--x-small')}>
    <p>This is an <strong>alt-inverse</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--info m-bottom--x-small')}>
    <p>This is an <strong>info</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--success m-bottom--x-small')}>
    <p>This is a <strong>success</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--warning m-bottom--x-small')}>
    <p>This is a <strong>warning</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--error m-bottom--x-small')}>
    <p>This is a <strong>error</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--offline m-bottom--x-small')}>
    <p>This is an <strong>offline</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--shade theme--alert-texture m-bottom--medium')}>
    <p>This theme has the <strong>alert texture</strong> added to the shade theme and has a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--default theme--alert-texture m-bottom--medium')}>
    <p>This theme has the <strong>alert texture</strong> added to the default theme and has a <a href="javascript:void(0);">link</a>.</p>
  </div>
</div>
);
export const code = (
<div className="demo-only">
  <div className={pf('box theme--default')}>
    <p>This is a <strong>default</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--shade')}>
    <p>This is a <strong>shade</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--inverse')}>
    <p>This is an <strong>inverse</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--alt-inverse')}>
    <p>This is an <strong>alt-inverse</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--info')}>
    <p>This is a <strong>info</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--success')}>
    <p>This is a <strong>success</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--warning')}>
    <p>This is a <strong>warning</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--error')}>
    <p>This is a <strong>error</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--offline')}>
    <p>This is an <strong>offline</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box box theme--shade theme--alert-texture')}>
    <p>This theme has the <strong>alert texture</strong> added to the shade theme and has a <a href="javascript:void(0);">link</a>.</p>
  </div>
  <div className={pf('box theme--default theme--alert-texture')}>
    <p>This theme has the <strong>alert texture</strong> added to the default theme and has a <a href="javascript:void(0);">link</a>.</p>
  </div>
</div>
);
