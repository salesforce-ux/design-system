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
const Button = require('ui/components/buttons/index.react');
const globals = require('app_modules/global');
const cssPrefix = globals.cssPrefix;

import {
  isCompositeComponent,
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

describe(`React`, () => {
  describe(`Button`, () => {
    let cmp, $cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
        <Button flavor="brand" />
      );
      $cmp = ReactDOM.findDOMNode(cmp);
    });
    it(`is a component`, () => {
      expect(isCompositeComponent(cmp)).to.be.true;
    });
    it(`includes the flavor`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}button--brand`);
      expect(nodes).length.to.be(1);
    });
    it(`contains the correct className`, () => {
      const classNames = $cmp.className.split(' ').filter(name => {
        return new RegExp(`^${cssPrefix}button(--)?`).test(name);
      });
      expect(classNames).to.have.length.above(0);
    });
  });
});
