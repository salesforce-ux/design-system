/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fastdom from 'fastdom';
import { $, delegate, setClassName } from '../framework/helpers';

const TIMING_MAP_SECS = {
  instantly: 0,
  quickly: 0.1,
  promptly: 0.2,
  slowly: 0.4,
  paused: 3.2
};

const TIMING_MAP_FRAMES = {
  instantly: 0,
  quickly: 6,
  promptly: 12,
  slowly: 24,
  paused: 192
};

const ATTRIBUTE = 'data-slds-motion-toggle-example';

/**
 * Toggle classes on example elements
 */
const handleToggleExampleClick = (event, node) => {
  event.stopPropagation();
  let state = JSON.parse(node.getAttribute(ATTRIBUTE));
  const target = node.querySelector(`[${ATTRIBUTE}-target]`);
  const after = (delay, callback) => setTimeout(callback, delay);
  const setState = nextState => {
    state = Object.assign({}, state, nextState);
    fastdom.mutate(() => {
      setClassName(target, {
        [`${state.which}-example--on`]: state.isOn === true
      });
      node.setAttribute(ATTRIBUTE, JSON.stringify(state));
    });
  };
  if (state.isAnimating) return;
  if (state.toggle) {
    setState({
      isAnimating: true,
      isOn: !state.isOn
    });
    after(TIMING_MAP_SECS.promptly * 1000, () =>
      setState({ isAnimating: false })
    );
  } else {
    setState({
      isOn: true
    });
    after(TIMING_MAP_SECS.promptly * 1000, () =>
      setState({ isAnimating: true, isOn: false })
    );
    after(TIMING_MAP_SECS.promptly * 1000 * 2, () =>
      setState({ isAnimating: false })
    );
  }
};

export default () => ({
  hooks: {
    listen_dom: delegate => {
      delegate('click', `[${ATTRIBUTE}]`, handleToggleExampleClick);
    }
  }
});
