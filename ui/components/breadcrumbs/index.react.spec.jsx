/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import BreadCrumbs from './index.react';
const {Crumb} = BreadCrumbs;
import globals from 'app_modules/global';
const cssPrefix = globals.cssPrefix;

import {
  isCompositeComponent,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';

describe('React', () => {
  describe('BreadCrumbs', () => {
    let cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
        <BreadCrumbs id="bumblebees">
          <Crumb href="javascript:void(0);">Parent Entity</Crumb>
          <Crumb href="javascript:void(0);">Parent Record Name</Crumb>
        </BreadCrumbs>
      );
    });
    it('renders its nav', () => {
      const node = scryRenderedDOMComponentsWithTag(cmp, 'nav');
      expect(node).length.to.be(1);
    });
    it('renders its items', () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}breadcrumb__item`);
      expect(node).length.to.be(2);
    });
    it('adds its aria-label', () => {
      const node = scryRenderedDOMComponentsWithTag(cmp, 'nav')[0];
      expect(node.props['aria-label']).to.equal('Breadcrumbs');
    });
    it('mixes in the props', () => {
      const node = scryRenderedDOMComponentsWithTag(cmp, 'nav')[0];
      expect(node.props.id).to.equal('bumblebees');
    });
  });
});
