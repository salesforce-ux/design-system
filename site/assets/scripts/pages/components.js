/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fastdom from 'fastdom';
import Status from 'app_modules/site/util/component/status';
import Prism from 'app_modules/site/vendor/prism';
import svg4everybody from 'app_modules/site/vendor/svg4everybody';
import { set as setPreference } from '../shared/preferences';

import { $, setClassName } from '../framework/dom';
import { updateScrollSpy } from '../shared/nav';

/**
 * Return a string of highlighed HTML
 */
const highlight = (() => {
  // Remove wrapping tag if it has the ".demo-only" class in it
  // Note: this will also remove other classes too on that tag! :)
  const demoPattern = /^\<([a-z]*?)[\s\S]*?class\=\"[^"]*demo-only[^"]*\"[\s\S]*?\>([\s\S]*?)\<\/\1\>$/;
  const cache = {};
  return code => {
    code = code.trim().replace(demoPattern, (match, tag, content) => content);
    // Remove uncessary leading whitespace so code is flush left
    const lines = code.split('\n');
    const firstLine = lines[0].length === 0 ? lines[1] : '';
    const offsetMatch = firstLine.match(/^\s*/);
    const offset = offsetMatch ? offsetMatch[0].length : 0;
    const codeTrimmed = lines.map(line => line.slice(offset)).join('\n').trim();
    // Cache
    let cached = cache[codeTrimmed];
    if (cached) return cached;
    cached = cache[codeTrimmed] = Prism.highlight(
      codeTrimmed,
      Prism.languages.markup
    );
    return cached;
  };
})();

/**
 * Update a flavor's description
 *
 * @param {string} flavor
 * @param {string} desc
 */
const updateComponentPreviewDescription = ({ flavor, desc }) => {
  fastdom.mutate(() => {
    document.getElementById(`desc-${flavor}`).innerHTML = desc;
    updateScrollSpy();
  });
};

/**
 * Update a flavor's markup
 *
 * @param {string} flavor
 * @param {string} code
 */
const updateComponentPreviewMarkup = ({ flavor, html }) => {
  fastdom.mutate(() => {
    document.getElementById(`code-${flavor}`).innerHTML = highlight(html);
    updateScrollSpy();
  });
};

/**
 * Update a flavor's markup
 *
 * @param {string} flavor
 * @param {number} height
 */
const updateComponentPreviewHeight = ({ flavor, height }) => {
  fastdom.mutate(() => {
    document.getElementById(`iframe-${flavor}`).height = height;
    updateScrollSpy();
  });
};

/**
 * Check if a hash is a flavor
 * @param  {string} hash A location hash, e.g. #flavor-name
 * @return {boolean} #flavor-name: true / #anything-else: false
 */
const isFlavor = (hash) =>
  hash.match(/^\#flavor-/ig);

/**
 * Location hash change handler
 */
const onHashChange = () => {
  const hash = window.location.hash;

  if (!isFlavor(hash)) return;

  const element = $(`.site-states [href="${hash}"]`)[0];

  if (element) {
    const iframeId = element.getAttribute('data-slds-target');
    const iframeSrc = element.getAttribute('data-slds-state-href');

    fastdom.mutate(() => {
      // Remove all "is-active" classes from the states
      $('.site-states a').forEach(node => {
        setClassName(node.parentElement, { 'slds-is-active': false });
      });
      // Add "is-active" to the selected state
      setClassName(element.parentElement, { 'slds-is-active': true });
      // Update the iframe src
      document.getElementById(iframeId).setAttribute('src', iframeSrc);
    });
  }
};

/**
 * Fix SVG elements in a flavor's preview
 *
 * @param {object} document
 */
const updateComponentPreviewSVG = document => svg4everybody(document);

// always show when developing local or a pr app
const alwaysShowPrototypeForHref = href =>
  href.match('localhost') || href.match(/pr-(\d+)/);

const handleFlavorStatusChange = () => {

  if (alwaysShowPrototypeForHref(window.location.href)) {
    return setPreference('status', 'prototype');
  }

  // show if someone has a link
  if (window.location.hash) {
    const askedFlavorOrState = window.location.hash;
    const section = $(`[data-slds-status="prototype"] ${askedFlavorOrState}`);

    if (section.length > 0) {
      setPreference('status', 'prototype');
    }
  }
};

/**
 * Called when a form factor tab is selected
 */
const updateFormFactor = ({tab, panel}) => {
  if (tab.dataset.formFactor) {
    panel.forEach(p => {
      const iframe = p.firstChild;
      fastdom.mutate(() => {
        p.dataset.formFactor = tab.dataset.formFactor;
        iframe.dataset.formFactor = tab.dataset.formFactor;
      });
    });
  }
};

export default () => ({
  hooks: {
    listen_event: emitter => {
      emitter.on('component:iframe:updatePreviewMarkup',
        updateComponentPreviewMarkup);
      emitter.on('component:iframe:updatePreviewDescription',
        updateComponentPreviewDescription);
      emitter.on('component:iframe:updatePreviewHeight',
        updateComponentPreviewHeight);
      emitter.on('component:iframe:updatePreviewSVG',
        updateComponentPreviewSVG);
      emitter.on('tab:select',
        updateFormFactor);
      emitter.on('preferences:updated', () => {
        fastdom.mutate(updateScrollSpy);
      });
    },
    listen_dom: delegate => {
      window.addEventListener('hashchange', onHashChange, false);
      onHashChange();
    },
    after_listen_dom: () => {
      handleFlavorStatusChange();
    }
  }
});
