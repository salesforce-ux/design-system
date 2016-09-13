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
import Spinner from './index.react';
import globals from 'app_modules/global';
const cssPrefix = globals.cssPrefix;

import {
  renderIntoDocument
} from 'react-addons-test-utils';

describe('React', () => {
  describe('Spinner', () => {
    var tests = [
      { flavor: 'x-small', expectedClass: `${cssPrefix}spinner--x-small`},
      { flavor: 'small', expectedClass: `${cssPrefix}spinner--small`},
      { flavor: 'medium', expectedClass: `${cssPrefix}spinner--medium`},
      { flavor: 'large', expectedClass: `${cssPrefix}spinner--large`},
      { flavor: 'brand-small', expectedClass: `${cssPrefix}spinner--small`},
      { flavor: 'brand-x-small', expectedClass: `${cssPrefix}spinner--x-small`},
      { flavor: 'inverse-x-small', expectedClass: `${cssPrefix}spinner--x-small`}
      { flavor: 'inverse-medium', expectedClass: `${cssPrefix}spinner--medium`}
    ];

    tests.forEach( (test) => {
      let cmp, $cmp;
      const flavorName = test.flavor;

      beforeEach(() => {
        cmp = renderIntoDocument(React.createElement(Spinner, {flavor: test.flavor}));
        $cmp = ReactDOM.findDOMNode(cmp);
      });

      it(`${flavorName} has the correct container class`, () => {
        expect($cmp.className).to.equal('slds-spinner_container');
      });

      it(`${flavorName} has the correct container class`, () => {
        expect($cmp.firstChild.className).to.include(test.expectedClass);
      });

      it(`${flavorName} has the correct inner divs`, () => {
        expect($cmp.querySelector('.slds-spinner__dot-a')).to.not.be.null;
        expect($cmp.querySelector('.slds-spinner__dot-b')).to.not.be.null;
      });
    });

    describe('without a flavor', () => {
      let cmp, $cmp;

      beforeEach(() => {
        cmp = renderIntoDocument(React.createElement(Spinner, {}));
        $cmp = ReactDOM.findDOMNode(cmp);
      });

      it('should be a small size', () => {
        expect($cmp.firstChild.className).to.include(`${cssPrefix}spinner`);
      });
    });

    describe('with a custom className', () => {
      it('should be a small size', () => {
        const cmp = renderIntoDocument(React.createElement(Spinner, { className: 'foo bar' }));
        const $cmp = ReactDOM.findDOMNode(cmp);
        expect($cmp.firstChild.className).to.include(`foo bar ${cssPrefix}spinner`);
      });
    });
  });
});
