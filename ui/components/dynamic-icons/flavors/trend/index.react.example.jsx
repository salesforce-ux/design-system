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

let Trend = props => {
  const { assistiveText, ...rest } = props;

  return (
    <span
      {...rest}
      className={classNames('slds-icon-trend', props.className)}>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path className="slds-icon-trend__arrow" d="M.75 8H11M8 4.5L11.5 8 8 11.5" />
        <circle className="slds-icon-trend__circle" cy="8" cx="8" r="7.375" transform="rotate(-28 8 8) scale(-1 1) translate(-16 0)" />
      </svg>
      <span className="slds-assistive-text">{assistiveText}</span>
    </span>
  );
};

Trend.propTypes = {
  title: React.PropTypes.string.isRequired,
  assistiveText: React.PropTypes.string.isRequired
};

export let states = [
  {
    id: 'down',
    label: 'Down',
    element: <Trend
      data-slds-trend="down"
      className="slds-is-animated"
      title="Description of the icon"
      assistiveText="Text alternative" />
  },
  {
    id: 'neutral',
    label: 'Neutral',
    element: <Trend
      data-slds-trend="neutral"
      className="slds-is-animated"
      title="Description of the icon"
      assistiveText="Text alternative" />
  },
  {
    id: 'up',
    label: 'Up',
    element: <Trend
      data-slds-trend="up"
      className="slds-is-animated"
      title="Description of the icon"
      assistiveText="Text alternative" />
  },
  {
    id: 'static',
    label: 'Static (no animation)',
    element: <Trend
      data-slds-trend="up"
      title="Description of the icon"
      assistiveText="Text alternative" />
  },
  {
    id: 'paused',
    label: 'Paused',
    element: <Trend
      data-slds-trend="up"
      className="slds-is-animated slds-is-paused"
      title="Description of the icon"
      assistiveText="Text alternative" />
  }
];
