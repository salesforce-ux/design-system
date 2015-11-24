/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Lorem from 'react-lorem-component';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';


exports.preview = (
<div className={pf('demo-only demo-only--nubbin-example')}>
  <div className={pf('grid grid--align-spread')}>
    {/* Nubbin Left Top */}
    <div className={pf('popover nubbin--top-left')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--top-left')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left */}
    <div className={pf('popover nubbin--top')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--top')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left Bottom */}
    <div className={pf('popover nubbin--top-right')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--top-right')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>
  </div>
  <hr />
  <div className={pf('grid grid--align-spread')}>
    {/* Nubbin Left Top */}
    <div className={pf('popover nubbin--left-top')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--left-top')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left Bottom */}
    <div className={pf('popover nubbin--right-top')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--right-top')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>
  </div>
  <hr />
  <div className={pf('grid grid--align-spread')}>
    {/* Nubbin Left Top */}
    <div className={pf('popover nubbin--left')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--left')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left Bottom */}
    <div className={pf('popover nubbin--right')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--right')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>
  </div>
  <hr />
  <div className={pf('grid grid--align-spread')}>
    {/* Nubbin Left Top */}
    <div className={pf('popover nubbin--left-bottom')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--left-bottom')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left Bottom */}
    <div className={pf('popover nubbin--right-bottom')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--right-bottom')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>
  </div>
  <hr />
  <div className={pf('grid grid--align-spread')}>
    {/* Nubbin Left Top */}
    <div className={pf('popover nubbin--bottom-left')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--bottom-left')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left */}
    <div className={pf('popover nubbin--bottom')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--bottom')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>

    {/* Nubbin Left Bottom */}
    <div className={pf('popover nubbin--bottom-right')} role="dialog">
      <div className={pf('popover__body')}>
        <code>.{pf('nubbin--bottom-right')}</code>
        <Lorem count={1} paragraphLowerBound={2} />
      </div>
    </div>
  </div>
</div>
);

exports.code = (
<div className={pf('demo-only')}>

  <div className={pf('popover nubbin--top-left')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--top')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--top-right')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--left-top')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--right-top')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--left')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--right')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--left-bottom')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--right-bottom')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--bottom-left')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--bottom')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

  <div className={pf('popover nubbin--bottom-right')} role="dialog">
    <div className={pf('popover__body')}></div>
  </div>

</div>
);
