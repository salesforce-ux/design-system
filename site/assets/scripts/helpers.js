/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import classNames from 'classnames/dedupe';
import fastdom from 'fastdom';
import Gator from 'gator';
import Prism from 'app_modules/site/vendor/prism';

import escapeRegExp from 'lodash/escapeRegExp';

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
 * Event delegation helper
 *
 * @param {string} event
 * @param {string} selector
 * @param {function} listener
 */
export const delegate = (event, selector, listener) =>
  Gator(document).on(event, selector, function (event) {
    listener(event, this);
  });

/**
 * Set the className using "classnames" inside a fastdom.mutate
 *
 * @param {Node} node
 * @param {...string|object}
 */
export const setClassName = (node, ...args) =>
  fastdom.mutate(() =>
    node.className = classNames(node.className, ...args));

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
 * Alias for document.querySelectorAll
 */
export const $ = selector =>
  map(document.querySelectorAll(selector), node => node);
