/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import { EventEmitter } from 'events';
import { DefaultsStrategy } from './strategies';
import PrefsDefaults from './defaults';

const emitter = new EventEmitter();
emitter.setMaxListeners(20);

const roles = ['aura', 'regular'];
roles.aura = roles[0];
roles.regular = roles[1];

// little weird, but we only want to allow devReady or all in prefs vs all the possible status states (e.g. prototype)
const statuses = [
  {
    id: 'all',
    name: 'All',
    desc: 'All components, including those in progress'
  },
  {
    id: 'dev-ready',
    name: 'Dev ready',
    desc: 'Stable, complete components only'
  }
];

/**
 * Default set of preferences before the browser loads
 */
let prefs = PrefsDefaults.internal;

/**
 * Default strategy before the browser loads
 */
let strategies = [DefaultsStrategy()];

/**
 * Update the storage strategy
 *
 * @param {PrefsStrategy} newStrategy
 */
function setStrategies (newStrategies) {
  strategies = newStrategies;
  setAll(strategies.reduce((ps, s) => _.extend(ps, s.getInitialPrefs(ps)) , prefs));
}

/**
 * Force the strategy to update and emit an event
 */
function sync (emit=true) {
  const newPrefs = all();
  strategies.forEach(s => s.update(newPrefs));
  if(emit) {
    emitter.emit('preferences.updated', newPrefs);
  }
}

/**
 * Return a copy of the current prefs
 *
 * @returns {object}
 */
function all () {
  return _.clone(prefs);
}

/**
 * Overwrite the prefs and sync
 *
 * @param {object} newPrefs
 */
function setAll (newPrefs, emit=true) {
  prefs = newPrefs;
  sync(emit);
}

/**
 * Update a single key/value in the prefs and sync
 *
 * @param {string} key
 * @param {any} value
 */
function set (key, value) {
  prefs[key] = value;
  sync();
}

/**
 * Return a single value from the prefs
 *
 * @param {string} key
 */
function get (key) {
  return prefs[key];
}

/**
 * Listen
 *
 * @param {function} listener
 */
function listen (listener) {
  emitter.on('preferences.updated', listener);
}

/**
 * Unlisten
 *
 * @param {function} listener
 */
function unlisten (listener) {
  emitter.removeListener('preferences.updated', listener);
}

/**
 *
 */
function storeViewed () {
  window.localStorage.setItem('hasBeenViewed', 'true');
}

/**
 *
 */
function hasBeenViewed () {
  return window.localStorage.getItem('hasBeenViewed');
}

export default {

  setStrategies,
  sync,
  all,
  setAll,
  get,
  set,
  listen,
  unlisten,
  storeViewed,
  hasBeenViewed,

  getDefaults() {
    return _.clone(PrefsDefaults);
  },

  roles,
  statuses

};
