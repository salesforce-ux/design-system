/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// This is the main webpack entry point

import invariant from 'invariant';

import emitter, { drainEventQueue } from './framework/events';
import { delegate, sequence, filterUniq, hook } from './framework/helpers';

import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';

/**
 * Require everything in ./pages and ./shares
 */
const requireScript = require.context('./', true, /\/(pages|shared).*\.js$/);

/**
 * A function that returns an empty script
 */
const Script = () => ({
  hooks: {}
});

/**
 * @param {object} a
 * @param {object} b
 * @returns {object} b
 */
const combineHooks = (a, b) => Object.keys(a).concat(Object.keys(b))
  .filter(filterUniq)
  .reduce((hooks, key) => Object.assign(hooks, {
    [key]: sequence(a[key], b[key])
  }), {});

/**
 * @param {object} a
 * @param {object} b
 * @returns {object} b
 */
const combineScripts = (a, b) => {
  a = Object.assign(Script(), a);
  b = Object.assign(Script(), b);
  return {
    hooks: combineHooks(a.hooks, b.hooks)
  };
};

/**
 * The final application script
 */
const app = requireScript.keys().reduce((app, path) => {
  const assertMessage = `
    Script "${path}" must export a function that returns an object:

    export default () => ({
      hooks: {}
    });
  `;
  const loader = requireScript(path).default;
  invariant(isFunction(loader), assertMessage);
  const script = loader();
  invariant(isPlainObject(script), assertMessage);
  return combineScripts(app, script);
}, Script());

// Call
hook(app, 'listen_event', emitter);
hook(app, 'listen_dom', delegate);

// After all hooks have been called, emit any queued events
drainEventQueue(window);
