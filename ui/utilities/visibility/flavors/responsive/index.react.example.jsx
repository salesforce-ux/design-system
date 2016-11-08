/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';

import CodeClass from 'app_modules/site/components/code-class';

export default (
  <div className="demo-only demo-visibility">
    <div className="slds-x-small-show">Show on 320px and up</div>
    <div className="slds-x-small-show-only">Show only between 320px and 479px</div>
    <div className="slds-max-x-small-hide">Hide on 319px and down</div>

    <div className="slds-small-show">Show on 480px and up</div>
    <div className="slds-small-show-only">Show only between 480px and 767px</div>
    <div className="slds-max-small-hide">Hide on 479px and down</div>

    <div className="slds-medium-show">Show on 768px and up</div>
    <div className="slds-medium-show-only">Show only between 768px and 1023px</div>
    <div className="slds-max-medium-hide">Hide on 1023px and down</div>

    <div className="slds-large-show">Show on 1024px and up</div>
  </div>
);
