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
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Tooltip } from 'ui/components/tooltips/flavors/base/index.react.example';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

export let Progress = props =>
  <div className={ className('slds-progress', props.className) }>
    <ol className="slds-progress__list">
      { props.children }
    </ol>
    <div className="slds-progress-bar">
      <span className="slds-progress-bar__value" style={{ width: props.value + '%' }}>
        <span className="slds-assistive-text">Progress: { props.value + '%' }</span>
      </span>
    </div>
  </div>;

export let Step = props =>
  <li className={ className('slds-progress__item', props.className, props.active ? 'slds-is-active' : null, props.done ? 'slds-is-completed' : null) }>
    { props.done
      ? <ButtonIcon
          className="slds-button--icon slds-progress__marker slds-progress__marker--icon"
          symbol="success"
          aria-describedby={ props['aria-describedby'] }
          assistiveText={ props.done ? props.children + ' - Completed' : null }
        />
      : <button className="slds-button slds-progress__marker" aria-describedby={ props['aria-describedby'] }>
          <span className="slds-assistive-text">{ props.children } { props.active ? '- Active' : null }</span>
        </button>
    }
  </li>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="0">
          <Step active aria-describedby="step-1-tooltip">Step 1</Step>
          <Step aria-describedby="step-2-tooltip">Step 2</Step>
          <Step aria-describedby="step-3-tooltip">Step 3</Step>
          <Step aria-describedby="step-4-tooltip">Step 4</Step>
          <Step aria-describedby="step-5-tooltip">Step 5</Step>
        </Progress>
      </div>
  },
  {
    id: 'next-step',
    label: 'Next Step',
    element:
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="25">
          <Step done aria-describedby="step-1-tooltip">Step 1</Step>
          <Step active aria-describedby="step-2-tooltip">Step 2</Step>
          <Step aria-describedby="step-3-tooltip">Step 3</Step>
          <Step aria-describedby="step-4-tooltip">Step 4</Step>
          <Step aria-describedby="step-5-tooltip">Step 5</Step>
        </Progress>
      </div>
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element:
      <div className="demo-only" style={{ padding: '3rem 1rem 0' }}>
        <Progress value="50">
          <Step done aria-describedby="step-1-tooltip">Step 1</Step>
          <Step done aria-describedby="step-2-tooltip">Step 2</Step>
          <Step active aria-describedby="step-3-tooltip">Step 3</Step>
          <Step aria-describedby="step-4-tooltip">Step 4</Step>
          <Step aria-describedby="step-5-tooltip">Step 5</Step>
        </Progress>
        <Tooltip className="slds-nubbin--bottom" id="step-3-tooltip" style={{position: 'absolute', top: '0px', left: 'calc(50% + 7px)', transform: 'translateX(-50%)'}}>
          Verify Email
        </Tooltip>
      </div>
  }
];
