/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import emitter from '../framework/events';
import { $, setClassName } from '../framework/helpers';

const hide = (node, hide) =>
  setClassName(node, { 'slds-hide': hide });

const handleInputChange = (sections, event, node) => {
  const { value } = node;
  // No value, show all sections/tokens
  if (!value) {
    sections.forEach(section => {
      hide(section.node, false);
      section.tokens.forEach(node => hide(node, false));
    });
    return;
  };
  // Split the query into words
  const querySegments = value.split(/\W/);
  sections.forEach(section => {
    // Filter the tokens that match the query
    const matches = section.tokens.filter(tokenNode => {
      const tokenSegments = tokenNode.dataset.sldsToken.split(/\W/);
      let matches = 0;
      for (let q of querySegments) {
        for (let t of tokenSegments) {
          if (new RegExp(q, 'i').test(t)) {
            matches++;
            break;
          }
        }
      }
      // Hide/show matches
      if (matches === querySegments.length) {
        hide(tokenNode, false);
        return true;
      } else {
        hide(tokenNode, true);
        return false;
      }
    });
    // Don't show sections without matches
    hide(section.node, !matches.length);
  });
};

export default () => ({
  hooks: {
    listen_dom: delegate => {
      const sections = $('[data-slds-tokens-section]').map(node => ({
        node,
        tokens: $(['[data-slds-token]'], node)
      }));
      delegate('input', '#find-token-input',
        handleInputChange.bind(null, sections));
    }
  }
});
