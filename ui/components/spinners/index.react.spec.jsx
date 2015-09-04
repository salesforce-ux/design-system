/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ReactDOM = require('react-dom');
const Spinner = require('./index.react');
const globals = require('app_modules/global');
const cssPrefix = globals.cssPrefix;

import {
  renderIntoDocument
} from 'react-addons-test-utils';

describe(`React`, () => {
  describe(`Spinner`, () => {
    console.log('!!! window.location', window.location);

    var tests = [
      { flavor: 'small', expectedClass: `${cssPrefix}spinner--small`, expectedImage: 'images/spinners/slds_spinner.gif' },
      { flavor: 'medium', expectedClass: `${cssPrefix}spinner--medium`, expectedImage: 'images/spinners/slds_spinner.gif' },
      { flavor: 'large', expectedClass: `${cssPrefix}spinner--large`, expectedImage: 'images/spinners/slds_spinner.gif' },
      { flavor: 'brand-small', expectedClass: `${cssPrefix}spinner--small`, expectedImage: 'images/spinners/slds_spinner_brand.gif' },
      { flavor: 'inverse-medium', expectedClass: `${cssPrefix}spinner--medium`, expectedImage: 'images/spinners/slds_spinner_inverse.gif' }
    ];

    tests.forEach( (test) => {
      const flavorName = test.flavor;

      it(`${flavorName} has the correct class`, () => {
        const cmp = renderIntoDocument(React.createElement(Spinner, {flavor: test.flavor}));
        const $cmp = ReactDOM.findDOMNode(cmp);
        expect($cmp.className).to.equal(test.expectedClass);
      });

      it(`${flavorName} has the correct image`, () => {
        const cmp = renderIntoDocument(React.createElement(Spinner, {flavor: test.flavor}));
        const $cmp = ReactDOM.findDOMNode(cmp);
        expect($cmp.innerHTML).to.include(test.expectedImage);
      });
    });

    describe('without a flavor', () => {
      it(`should be a small size`, () => {
        const cmp = renderIntoDocument(React.createElement(Spinner));
        const $cmp = ReactDOM.findDOMNode(cmp);
        expect($cmp.className).to.equal(`${cssPrefix}spinner--small`);
      });

      it(`should default to base image`, () => {
        const cmp = renderIntoDocument(React.createElement(Spinner));
        const $cmp = ReactDOM.findDOMNode(cmp);
        expect($cmp.innerHTML).to.include('images/spinners/slds_spinner.gif');
      });
    });

    describe('with a custom className', () => {
      it(`should be a small size`, () => {
        const cmp = renderIntoDocument(React.createElement(Spinner, { className: 'foo bar' }));
        const $cmp = ReactDOM.findDOMNode(cmp);
        expect($cmp.className).to.equal(`foo bar ${cssPrefix}spinner--small`);
      });
    });
  });
});
