/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import emitter from '../framework/events';

const EVENT_KEY = 'preferences:updated';

const defaults = {
  userType: process.env.DEFAULT_USER_TYPE
};

const PrefsDefaults = {
  internal: Object.assign({}, defaults, { status: 'dev-ready'}),
  external: Object.assign({}, defaults, { status: 'prototype' })
};

/**
 * Default set of preferences before the browser loads
 */
let prefs = process.env.DEFAULT_USER_TYPE === 'internal'
  ? PrefsDefaults.internal
  : PrefsDefaults.external;

export const DefaultsStrategy = props => {
  return Object.assign({
    getInitialPrefs(currentPrefs) {
      return currentPrefs;
    },
    load () {},
    update (prefs) {}
  }, props);
};

export const LocalStorageStrategy = props => {
  return Object.assign({
    getInitialPrefs(currentPrefs) {
      return this.load() || currentPrefs;
    },
    load () {
      if (!window.localStorage) { return {}; }
      const prefs = localStorage.getItem('prefs');
      try {
        return JSON.parse(prefs);
      } catch (e) {
        return {};
      }
    },
    update (prefs) {
      if (!window.localStorage) { return; }
      try {
        localStorage.setItem('prefs', JSON.stringify(prefs));
      } catch (e) {}
    }
  }, props);
};

/**
 * Default strategy before the browser loads
 */
let strategies = [];

/**
 * Update the storage strategy
 *
 * @param {PrefsStrategy} newStrategy
 */
const setStrategies = newStrategies => {
  strategies = newStrategies;
  setAll(strategies.reduce((ps, s) =>
    Object.assign(ps, s.getInitialPrefs(ps)), prefs));
};

/**
 * Force the strategy to update and emit an event
 */
const sync = (emit = true) => {
  const newPrefs = all();
  strategies.forEach(s => s.update(newPrefs));
  if (emit) {
    emitter.emit(EVENT_KEY, newPrefs);
  }
};

/**
 * Return a copy of the current prefs
 *
 * @returns {object}
 */
const all = () => Object.assign({}, prefs);

/**
 * Overwrite the prefs and sync
 *
 * @param {object} newPrefs
 */
const setAll = (newPrefs, emit = true) => {
  prefs = newPrefs;
  sync(emit);
};

/**
 * Update a single key/value in the prefs and sync
 *
 * @param {string} key
 * @param {any} value
 */
const set = (key, value) => {
  prefs[key] = value;
  sync();
};

/**
 * Return a single value from the prefs
 *
 * @param {string} key
 */
const get = key => prefs[key];

const handleStatusChange = event => set('status', event.target.value);

/**
 * Preferences
 * Sets up a listener and emitts events for when the dropdown changes.
 */
export default () => {
  return {
    hooks: {
      after_listen_dom: delegate =>  {
        setStrategies([DefaultsStrategy(), LocalStorageStrategy()]);
      },
      listen_dom: delegate =>  {
        delegate('change', '#status-dropdown', handleStatusChange);
      }
    }
  };
};
