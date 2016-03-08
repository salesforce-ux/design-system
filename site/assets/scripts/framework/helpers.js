/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import Prism from 'app_modules/site/vendor/prism';

import escapeRegExp from 'lodash/escapeRegExp';
import method from 'lodash/method';

import globals from 'app_modules/global';
import whitelistUtilities from '.generated/whitelist-utilities.js';

/**
 * Custom Prism addition to the markup syntax that adds a "utility-class" class
 * to any attribute value tokens that are contained in whitelistUtilities
 */
Prism.languages.markup.tag.inside['attr-value'].inside['utility-class'] = whitelistUtilities
  .map(c => c.replace(/^\./, ''))
  .map(c => `${globals.cssPrefix}${c}`)
  .map(c => new RegExp(escapeRegExp(c)));

/**
 * Re-export gloabals
 */
export { default as globals } from 'app_modules/global';

/**
 * @param {array|NodeList}
 * @param {function}
 */
export const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

/**
 * @param {array|NodeList}
 * @param {function}
 */
export const map = (array, callback) => {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }
  return result;
};


/**
 * A function that can be used to filter an array down to unique values
 */
export const filterUniq = (a, b, c) => c.indexOf(a) === b;

/**
 * Returns function that invokes a and then b
 *
 * @param {function} a
 * @param {function} b
 * @returns {function}
 */
export const sequence = (a = a => a, b = b => b) => function () {
  return [a(...arguments), b(...arguments)];
};

/**
 * Call a method on a object with the provided arguments
 *
 * @param {object} obj
 * @param {string} name
 * @param {...} args
 */
export const hook = (obj, name, ...args) => ['before_', '', 'after_']
  .map(prefix => `${prefix}${name}`)
  .map(name => method(`hooks.${name}`, ...args)(obj));

/**
 * Return a function that will return true if all term segments matche all
 * query segments
 *
 * @param {string} query
 * @returns {function}
 */
export const search = query => {
  const querySegments = query.split(/\W|(?=[A-Z])/);
  return term => {
    const termSegments = term.split(/\W/);
    let matches = 0;
    for (let q of querySegments) {
      for (let t of termSegments) {
        if (new RegExp(q, 'i').test(t)) {
          matches++;
          break;
        }
      }
    }
    return matches === querySegments.length;
  };
};
