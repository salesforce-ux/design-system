/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

// This icon is a sprite of 20 frames laid out horizontally
// Each frame is composed of 2 circles positioned on top of each other
const frames = 20;

export const Ellie = props =>
  <span className={classNames('slds-icon-ellie', props.className)} title={props.title}>
    <svg
      viewBox={`0 0 ${frames * 14} 14`}
      aria-hidden="true">
      {/* Loop through frames 1 through 20 */}
      { _.range(1, frames + 1).map((frame) =>
        [
          <circle cx={14 * frame - 7} cy="7" r="4" key={`outer-circle-${frame}`} />,
          <circle cx={14 * frame - 7} cy="7" r="3" key={`inner-circle-${frame}`} />
        ]
      )}
    </svg>
    <span className="slds-assistive-text">{props.assistiveText}</span>
  </span>;

Ellie.propTypes = {
  title: React.PropTypes.string.isRequired,
  assistiveText: React.PropTypes.string.isRequired
};

export let states = [
  {
    id: 'animated',
    label: 'Animated',
    element: <Ellie className="slds-is-animated" title="Description of the icon" assistiveText="Text alternative" />
  },
  {
    id: 'paused',
    label: 'Paused',
    element: <Ellie className="slds-is-animated slds-is-paused" title="Description of the icon" assistiveText="Text alternative" />
  },
  {
    id: 'static',
    label: 'Static (no animation)',
    element: <Ellie title="Description of the icon" assistiveText="Text alternative" />
  }
];
