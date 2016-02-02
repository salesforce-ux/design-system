/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { EventEmitter } from 'events';
import invariant from 'invariant';

import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

/**
 * Shared EventEmitter
 */
const emitter = new EventEmitter();

/**
 * Emit an event using an event object
 *
 * @param {object} event
 * @param {string} event.name
 * @param {any} event.data
 */
const pushEvent = event => {
  invariant(!isPlainObject(event),
    'events pushed into __eventQueue must be objects');
  invariant(!isString(event.name),
    'events pushed into __eventQueue must have a "name" property');
  emitter.emit(event.name, event.data);
};

/**
 * Pages that need to emit events before this script loads will push
 * event objects into window.__eventsQueue which will be an array.
 *
 * Once this script loads, the queue is drained, the __eventQueue is overwritten
 * with an object containing a push() method that will emit events
 *
 * @param {object} window
 */
export const drainEventQueue = window => {
  // Drain the queue
  if (isArray(window.__eventQueue)) {
    window.__eventQueue.forEach(pushEvent);
    window.__eventQueue.length = 0;
  }
  // Enable the queue to emit events
  window.__eventQueue = {
    push: pushEvent
  };
};

export default emitter;
