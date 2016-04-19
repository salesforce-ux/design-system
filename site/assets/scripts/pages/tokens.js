/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fastdom from 'fastdom';

import camelCase from 'lodash/camelCase';
import kebabCase from 'lodash/kebabCase';

import emitter from '../framework/events';
import { $, setClassName, hide } from '../framework/dom';
import { search } from '../framework/helpers';
import { set as setPreference, get as getPreference } from '../shared/preferences';

const nameFormats = [
  {
    label: 'Sass',
    value: 'sass',
    formatter: token => `$${kebabCase(token.name)}`
  },
  {
    label: 'Aura',
    value: 'aura',
    formatter: token => `t(${camelCase(token.name)})`
  }
];

const handleInputChange = (sections, event, node) => {
  const { value } = node;
  // No value, show all sections/tokens
  if (!value) {
    sections.forEach(section => {
      hide(section.refs.section, false);
      section.refs.tokens.forEach(node => hide(node, false));
    });
    return;
  };
  const isMatch = search(value);
  sections.forEach(section => {
    // Filter the tokens that match the query
    const matches = section.tokens.filter(token => {
      const node = section.lookups.tokens.get(token);
      // Hide/show matches
      if (isMatch(token.name)) {
        hide(node, false);
        return true;
      } else {
        hide(node, true);
        return false;
      }
    });
    // Don't show sections without matches
    hide(section.refs.section, !matches.length);
  });
};

const handleNameSelectChange = (sections, event, node) => {
  const format = nameFormats.filter(f => f.value === node.value)[0];
  setPreference('tokens:nameFormat', format.value);
  sections.forEach(section => {
    fastdom.mutate(() => {
      section.tokens.forEach(token => {
        const name = format.formatter(token);
        section.lookups.names.get(token).innerHTML = name;
      });
    });
  });
};

const setupSelect = (node, options) => {
  options.forEach(option => {
    const o = document.createElement('option');
    o.setAttribute('value', option.value);
    o.innerHTML = option.label;
    fastdom.mutate(() => {
      node.appendChild(o);
    });
  });
};

export default () => ({
  hooks: {
    listen_dom: delegate => {
      const sections = $('[data-slds-tokens-section]').map(node => {
        const refs = {
          section: node,
          tokens: $('[data-slds-token]', node)
        };
        const lookups = {
          tokens: new Map(),
          values: new Map(),
          names: new Map()
        };
        const tokens = refs.tokens.map(node => {
          const token = JSON.parse(node.dataset.sldsToken);
          lookups.tokens.set(token, node);
          lookups.names.set(token, node.querySelector('[data-slds-token-name]'));
          return token;
        });
        return {
          refs, lookups, tokens
        };
      });
      // Search
      delegate(
        'input', '#find-token-input',
        handleInputChange.bind(null, sections)
      );
      // Name formats
      $('[data-slds-tokens-name-format]').forEach(node => {
        const key = getPreference('tokens:nameFormat');
        const format = nameFormats.filter(f => f.value === key)[0];
        setupSelect(node, nameFormats);
        if (format) {
          fastdom.mutate(() => {
            node.selectedIndex = nameFormats.indexOf(format);
            handleNameSelectChange(sections, {}, node);
          });
        }
      });
      delegate(
        'change', '[data-slds-tokens-name-format]',
        handleNameSelectChange.bind(null, sections)
      );
    }
  }
});
