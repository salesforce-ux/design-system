/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import { SpinnerContainer } from 'ui/components/spinners/flavors/containers/index.react.example';
import { Spinner } from 'ui/components/spinners/flavors/containers/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={className('demo-only', props.className)} style={{height: '5rem'}}>
    {props.children}
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner--medium" />
        </SpinnerContainer>
      </Demo>
  },
  {
    id: 'brand',
    label: 'Brand',
    element:
    <Demo>
      <SpinnerContainer>
        <Spinner className="slds-spinner--medium slds-spinner--brand" />
      </SpinnerContainer>
    </Demo>
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element:
    <Demo className="demo--inverse">
      <SpinnerContainer>
        <Spinner className="slds-spinner--medium slds-spinner--inverse" />
      </SpinnerContainer>
    </Demo>
  }
];

export default (
<div className="demo-only" style={{height: '6.25rem'}}>
  <Spinner flavor="brand-large" className="slds-spinner--brand" />
</div>
);
