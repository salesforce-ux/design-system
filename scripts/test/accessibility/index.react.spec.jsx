/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';

import {
  isCompositeComponent,
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

import ui from '.generated/ui';

const requireExample = require.context(
  'ui', true, /(index\.react\.example\.jsx)$/
);

const a11yTestsToRun = [
  'A11Y_DOM_01', 'A11Y_DOM_02', 'A11Y_DOM_03', 'A11Y_DOM_04',
  'A11Y_DOM_06', 'A11Y_DOM_08', 'A11Y_DOM_09', 'A11Y_DOM_10',
  'A11Y_DOM_15'
];

function getExample (p) {
  return requireExample(`./${p}`);
}

describe(`Accessiblity`, () => {
  // iterate through all sections
  ui.map((group, index) => {
    describe(`section ${group.title},`, () => {
      // iterate through all components
      group.components.map((component, index) => {
        describe(`${component.title}`, () => {
          // iterate through flavors
          component.flavors.map((flavor, index) => {
            describe(`${flavor.title}`, () => {
              let previewCmp = null;
              let cmp = null;
              let $cmp = null;
              let a11yErrors = null;
              beforeEach(() => {
                try {
                  // get the right component
                  previewCmp = getExample(flavor.examplePath);
                  /* TODO: should we be using .preview?? */
                  if (previewCmp.preview) {
                    previewCmp = previewCmp.preview;
                  }

                  let cls = React.createClass({
                    render: function() {
                      return <div><previewCmp/></div>
                    }
                  });

                  // render it and get its DOM node
                  cmp = renderIntoDocument(React.createElement(cls));
                  $cmp = ReactDOM.findDOMNode(cmp);
                } catch (e) {
                  console.log(`Had trouble rendering flavor "${flavor.title}" for "${component.title}"`);
                  console.log(e.message);
                }
              });
              // run each accessibility test on this flavor
              a11yTestsToRun.map((a11yTest, index) => {
                it(`passes accessibility test ${a11yTest} (${window.$A11y.errorMessages[a11yTest]})`, () => {
                  let a11yErrors = window.$A11y.checkA11y($cmp, [a11yTest], true);
                  for(var i = 0; i < a11yErrors.length; i++) {
                    var error = a11yErrors[i];
                    console.log(`Got error ${error.errorTag} (${error.errorMsg}) for the following DOM elements:`);
                    for(var j = 0; j < error.errorEls.length; j++) {
                      console.log(error.errorEls[j].outerHTML);
                    }
                  }
                  expect(a11yErrors).length.to.be(0);
                });
              });
            });
          });
        });
      });
    });
  });
});
