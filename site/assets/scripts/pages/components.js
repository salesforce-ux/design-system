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

import { $, setClassName } from '../framework/dom';
import { updateScrollSpy } from '../shared/nav';

/**
 * Return a string of highlighed HTML
 */
const highlight = (() => {
  // Remove wrapping tag if it has the ".demo-only" class in it
  // Note: this will also remove other classes too on that tag! :)
  const pattern = /^\<([a-z]*?)[\s\S]*?class\=\"[^"]*demo-only[^"]*\"[\s\S]*?\>([\S\s]*?)\<\/\1\>$/;
  const cache = {};
  return html => {
    html = html.trim();
    let cached = cache[html];
    if (cached) return cached;
    cached = cache[html] = Prism.highlight(
      html.replace(pattern, (match, tag, content) => content),
      Prism.languages['markup']
    );
    return cached;
  };
})();

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
 * Fix SVG elements in a flavor's preview
 *
 * @param {object} document
 */
const updateComponentPreviewSVG = document => svg4everybody(document);

/**
 * Listen for flavor state buttons to be clicked
 * and then update the src of the <iframe>
 */
const handleFlavorStateNavClick = (event, element) => {
  event.preventDefault();
  const [ flavor, src ] = ['', '-src'].map(key =>
    element.getAttribute(`data-slds-flavor-states${key}`));
  fastdom.mutate(() => {
    // Remove all "is-active" classes from the states
    $(`[data-slds-flavor-states="${flavor}"]`).forEach(node => {
      setClassName(node.parentElement, { 'slds-is-active': false });
    });
    // Add "is-active" to the selected state
    setClassName(element.parentElement, { 'slds-is-active': true });
    // Update the iframe src
    // The code will be updated by the <iframe> using the delegate
    document.getElementById(`iframe-${flavor}`).setAttribute('src', src);
  });
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
      // States
      delegate('click', '[data-slds-flavor-states]', handleFlavorStateNavClick);
    }
  }
});
