/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import stampit from 'stampit';
import _ from 'lodash';

export const DefaultsStrategy = stampit().methods({
  getInitialPrefs(currentPrefs) {
    return currentPrefs;
  },

  load () {
  },

  update (prefs) {
  }
});


export const LocalStorageStrategy = stampit().methods({
  getInitialPrefs(currentPrefs) {
    return this.load() || currentPrefs;
  },

  load () {
    if (!window.localStorage) { return {}; }
    const prefs = localStorage.getItem('prefs');
    return prefs && JSON.parse(prefs);
  },

  update (prefs) {
    if (!window.localStorage) { return; }
    localStorage.setItem('prefs', JSON.stringify(prefs));
  }
});

export const UrlPrefsStrategy = stampit().methods({
  /**
   * Called from Prefs.setStrategy()
   *
   * @param {object} currentPrefs
   * @returns {object}
   */
  getInitialPrefs (currentPrefs) {
    return this.load() || currentPrefs;
  },
  /**
   * Get preferences from window.location.hash
   *
   * @private
   * @returns {object}
   */
  load () {
    let hash = window.location.hash.slice(1);
    if (hash === '') return false;
    return hash.split('&').reduce((acc, xs) => {
      let [key, val] = xs.split('=');
      if (!val) return acc;
      return _.extend(acc, {
        [decodeURIComponent(key)]: decodeURIComponent(val)
      });
    }, {});
  },
  /**
   * Called whenever preferences are updated
   *
   * @param {object} prefs - the updated prefs
   */
  update (prefs) {
    const hash = window.location.hash.replace(/(&)?\w+=\S+/ig, '').replace('#', '');
    // unshift current hash onto the full preferences url: e.g. #button&status=dev-ready
    const prefHash = _.compact([hash].concat(Object.keys(prefs).filter(x => prefs[x]).map(x => `${x}=${encodeURIComponent(prefs[x])}` ))).join('&');
    window.history.replaceState({}, '', `#${prefHash}`);
    window.location.hash = prefHash;
  }
});
