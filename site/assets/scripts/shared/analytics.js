/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { globals } from '../framework/helpers';

/**
 * Normalizes pathname
 */
const normalizedLocationPathname = () =>
  (window.location.pathname || '').replace(/\/$/, '');

/**
 * Only allows production-level logging.
 */
export const logEvent = (tagEvent, type, extraValues = {}) => {
  let { analyticsHostWhitelist } = globals;
  let canLogEvent = window.location && analyticsHostWhitelist.indexOf(window.location.host) !== -1;
  extraValues.path = extraValues.path || window.location.path;
  extraValues.type = extraValues.type || '';
  if (canLogEvent) {
    if (window.ll) window.ll(tagEvent, type, extraValues);
    if (window.ga) window.ga('send', 'event', type, extraValues.type);
  }
};

/**
 * Records a page visit + screen flow.
 */
export const logPageVisit = () =>
  logEvent('tagScreen', normalizedLocationPathname());

/**
 * Records a CTA event.
 *
 * @param {string} name - Usually "CTA"
 * @param {string} type - What type of a event
 * @param {object} extraValues - Optional extra tracking parameters
 */
export const logCTAEvent = (name, type, extraValues) => {
  let values = Object.assign({
    path: normalizedLocationPathname(),
    type: type,
    usertype: process.env.INTERNAL ? 'internal' : 'external'
  }, extraValues);
  logEvent('tagEvent', name, values);
};

/**
 * Handle CTA link/button clicks
 */
const handleCTA = (event, node) => {
  let values = {};
  try {
    values = JSON.parse(node.getAttribute('data-slds-cta-event-values'));
  } catch (e) {}
  logCTAEvent(
    node.getAttribute('data-slds-cta-event-name'),
    node.getAttribute('data-slds-cta-event-type'),
    values
  );
};

export default () => ({
  hooks: {
    listen_dom: delegate => {
      // Log the current page as an event in GA/LL
      logPageVisit();
      // CTA links/buttons
      delegate('click', '[data-slds-cta-event]', handleCTA);
    }
  }
});
