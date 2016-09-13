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

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={className('demo-only', props.className)} style={{height: '6rem'}}>
    {props.children}
  </div>;

export let SpinnerContainer = props =>
  <div className={className('slds-spinner_container', props.className)}>
    {props.children}
  </div>;


export let Spinner = props =>
  <div role="alert" className={className('slds-spinner', props.className)}>
    <span className="slds-assistive-text">Loading</span>
    <div className="slds-spinner__dot-a"></div>
    <div className="slds-spinner__dot-b"></div>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'without-container',
    label: 'Without Container',
    description: 'A container is not required to use the spinner. Here, it is placed on a dark background to illustrate there is nothing there. The spinner will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element:
    <Demo className="demo--inverse">
        <Spinner className="slds-spinner--medium" />
    </Demo>
  },
  {
    id: 'with-container',
    label: 'With Container',
    description: 'Here, the regular spinner container is used making the dark background look lighter. The spinner container will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element:
      <Demo className="demo--inverse">
        <SpinnerContainer>
          <Spinner className="slds-spinner--medium" />
        </SpinnerContainer>
      </Demo>
  },
  {
    id: 'fixed-container',
    label: 'Fixed Container',
    description: 'The spinner container may be used with a container with fixed positioning by adding the <code>.slds-is-fixed</code> class to the container. This may be needed if you are dynamically loading portions of a component after the spinner is showing.',
    element:
    <Demo className="demo--inverse">
      <SpinnerContainer className="slds-is-fixed">
        <Spinner className="slds-spinner--medium" />
      </SpinnerContainer>
    </Demo>
  }
];
