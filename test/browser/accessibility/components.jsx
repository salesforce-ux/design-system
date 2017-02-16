// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import ui from '.generated/ui';

import React from 'react';
import ReactDOM from 'react-dom';

const requireExample = require.context(
  'ui', true, /(index\.react\.example\.jsx)$/
);

const a11yTestsToRun = [
  'A11Y_DOM_01', 'A11Y_DOM_02', 'A11Y_DOM_03', 'A11Y_DOM_04',
  'A11Y_DOM_06', 'A11Y_DOM_08', 'A11Y_DOM_09', 'A11Y_DOM_10',
  'A11Y_DOM_15'
];

const getStates = (component, flavor) => {
  try {
    const example = requireExample(`./${flavor.examplePath}`);
    let states = [];
    if (example.states) {
      states = states.concat(example.states);
    }
    if (React.isValidElement(example.default)) {
      states = states.concat({
        label: 'Default',
        element: example.default
      });
    }
    if (React.isValidElement(example.preview)) {
      states = states.concat({
        label: 'Preview',
        element: example.preview
      });
    }
    return states.map(({ label, element }) => {
      let div = document.createElement('div');
      ReactDOM.render(element, div);
      let node =  div.children[0];
      if (!node || node.nodeType != Node.ELEMENT_NODE) {
        throw new Error('An element failed to render in the document.');
      }
      return {
        label,
        node: div.children[0]
      };
    });
  } catch (e) {
    console.log(`Had trouble rendering flavor "${flavor.title}" for "${component.title}"`);
    console.log(e.message);
  }
};

describe('Accessiblity', () => {
  ui.forEach(group => {
    describe(`Section "${group.title}",`, () => {
      group.components.forEach(component => {
        describe(`Component: "${component.title}"`, () => {
          component.flavors.forEach(flavor => {
            describe(`Flavor: "${flavor.title}"`, () => {
              getStates(component, flavor).forEach(state => {
                describe(`State: "${state.label}"`, () => {
                  a11yTestsToRun.forEach(a11yTest => {
                    it(`passes accessibility test ${a11yTest}`, () => {
                      const a11yErrors = window.$A11y.checkA11y(state.node, [a11yTest], true);
                      const message = a11yErrors.reduce((msg, err) => msg
                        .concat(`Got error ${err.errorTag} (${err.errorMsg}) for the following DOM elements:`)
                        .concat(err.errorEls.map(element => element.outerHTML))
                      , []).join('\n');
                      expect(a11yErrors).length.to.be(0, message);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
