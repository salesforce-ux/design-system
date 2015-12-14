/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Dropdown from 'ui/components/menus/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';

import globals from 'app_modules/global';
const cssPrefix = globals.cssPrefix;

import {
  isCompositeComponent,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';

describe(`React`, () => {
  describe(`Dropdown (no filter)`, () => {
    let cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
        <Dropdown>
          <Dropdown.Header id="theHeader">
            <Dropdown.Title>Filterless</Dropdown.Title>
          </Dropdown.Header>
          <Dropdown.List className={'bling'}>
            <Dropdown.Item disabled={true} href="#one">One</Dropdown.Item>
            <Dropdown.Item disabled={false} href="#two">Two</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      );
    });
    it(`renders its list`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__list`);
      expect(node).length.to.be(1);
    });
    it(`sets the 'menu' accessibility role on the <ul>`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__list`)[0];
      expect(node.props.role).to.equal('menu');
    });
    it(`renders its list items`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__item`);
      expect(node).length.to.be(2);
    });
    it(`sets the 'menuitemradio' accessibility role on the <li> <a>`, () => {
      // Because by default the dropdowns are selectable
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__item`)[0].children[0];
      expect(node.tagName).to.equal('A');
      expect(node.props.role).to.equal('menuitemradio');
    });
    it(`renders its title`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}text-heading--label`);
      expect(node).length.to.be(1);
    });
    it(`does not render a filter`, () => {
      const node = scryRenderedDOMComponentsWithTag(cmp, `input`);
      expect(node).length.to.be(0);
    });
    it(`sets its className`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown--menu`);
      expect(node).length.to.be(1);
    });
    it(`mixes in the classNames`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__list`)[0];
      expect(node.props.className).to.equal(`${cssPrefix}dropdown__list bling`);
    });
    it(`mixes in the props`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__header`)[0];
      expect(node.props.id).to.equal('theHeader');
    });
  });
  describe(`Dropdown (with filter)`, () => {
    let cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
          <Dropdown>
            <Dropdown.Header>
              <Dropdown.Title>Filterless</Dropdown.Title>
              <Dropdown.Filter placeholder="tacos" />
            </Dropdown.Header>
            <Dropdown.List>
              <Dropdown.Item disabled={true} href="#one">One</Dropdown.Item>
              <Dropdown.Item disabled={false} href="#two">Two</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
      );
    });
    it(`renders its list`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__list`);
      expect(node).length.to.be(1);
    });
    it(`renders its list items`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__item`);
      expect(node).length.to.be(2);
    });
    it(`renders its title`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}text-heading--label`);
      expect(node).length.to.be(1);
    });
    it(`renders a filter`, () => {
      const node = scryRenderedDOMComponentsWithTag(cmp, `input`);
      expect(node).length.to.be(1);
    });
    it(`sets its className to be menu--default`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown--search`);
      expect(node).length.to.be(1);
    });

    describe(`filtering`, () => {
      let node, getItems;
      beforeEach(() => {
        node = scryRenderedDOMComponentsWithTag(cmp, `input`)[0];
        getItems = () => scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__item`);
      });

      it(`filters its items`, () => {
        Simulate.change(node, {target: {value: 'on'}});
        expect(getItems()).length.to.be(1);
      });

      it(`filters its items`, () => {
        Simulate.change(node, {target: {value: 'Poof!'}});
        expect(getItems()).length.to.be(0);
      });

      it(`filters its items`, () => {
        Simulate.change(node, {target: {value: 'o'}});
        expect(getItems()).length.to.be(2);
      });
    });
  });
  describe(`Dropdown (unselectable)`, () => {
    let cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
          <Dropdown>
            <Dropdown.Header id="theHeader">
              <Dropdown.Title>Filterless</Dropdown.Title>
            </Dropdown.Header>
            <Dropdown.List className={'bling'} isSelectable={false}>
              <Dropdown.Item disabled={true} href="#one">One</Dropdown.Item>
              <Dropdown.Item disabled={false} href="#two">Two</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
      );
    });
    it(`sets the 'menu' accessibility role on the <ul>`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__list`)[0];
      expect(node.props.role).to.equal('menu');
    });
    it(`sets the 'menuitem' accessibility role on the <li> <a>`, () => {
      // Because by default the dropdowns are selectable
      const node = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}dropdown__item`)[0].children[0];
      expect(node.tagName).to.equal('A');
      expect(node.props.role).to.equal('menuitem');
    });
  });
});
