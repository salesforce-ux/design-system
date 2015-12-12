/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Tooltip from 'ui/components/tooltips/index.react';
import Control from 'ui/components/lib/control/flavors/popover';
import Lorem from 'react-lorem-component';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only demo-only--left demo-only--top">
  <form className={pf('form--stacked')}>
    <div className={pf('form-element')}>
      <div className={pf('form-element__label m-bottom--x-small')}>
        <Control trigger="hover" placement="top" target="help">
          <ButtonIcon flavor="icon-bare" sprite="utility" symbol="info" className={pf('m-right--xx-small')} assistiveText="Help" />
        </Control>
        <label className={pf('align-middle')} htmlFor="form-help">Text Label</label>
      </div>
      <div className={pf('form-element__control')}>
        <input id="form-help" className={pf('input')} type="text" placeholder="Field Level Help" aria-describedby="help" />
      </div>
    </div>
  </form>

  <Tooltip id="help" visible={false} className={pf('nubbin--bottom')}>
    <Lorem count={1} />
  </Tooltip>
</div>
);
