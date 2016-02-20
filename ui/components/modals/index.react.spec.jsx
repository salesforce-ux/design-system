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
import Modal from 'ui/components/modals/index.react';
import globals from 'app_modules/global';
const cssPrefix = globals.cssPrefix;

import {
  isCompositeComponent,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';

describe('React', () => {
  describe('ModalWrapper (renderInline=false)', () => {
    let cmp, $cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
        <Modal isOpen={true} />
      );
      $cmp = ReactDOM.findDOMNode(cmp);
    });
    it('is a component', () => {
      expect(isCompositeComponent(cmp)).to.be.true;
    });
    it('has a __node', () => {
      expect(cmp.__node).to.be.an.instanceof(HTMLElement);
    });
    it('has a __node in the DOM', () => {
      expect(cmp.__node.parentElement).not.to.be.null;
      expect(cmp.__node.parentElement).to.equal(document.body);
    });
    it('doesn’t have a DOMNode', () => {
      expect($cmp).to.be.null;
    });
  });
  describe('ModalWrapper (renderInline=true)', () => {
    let cmp, $cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
        <Modal isOpen={true} renderInline={true} />
      );
      $cmp = ReactDOM.findDOMNode(cmp);
    });
    it('is a component', () => {
      expect(isCompositeComponent(cmp)).to.be.true;
    });
    it('doesn’t have a __node', () => {
      expect(cmp.__node).to.be.undefined;
    });
    it('has a DOMNode', () => {
      expect($cmp).not.to.be.null;
    });
  });
  describe('Modal', () => {
    let cmp, $cmp, onRequestClose;
    beforeEach(() => {
      onRequestClose = sinon.spy();
      cmp = renderIntoDocument(
        <Modal
          isOpen={true}
          renderInline={false}
          onRequestClose={onRequestClose}>
            <Modal.Header>
              <h2>Hello!</h2>
            </Modal.Header>
            <Modal.Body>
              <p>Spiders, everywhere!</p>
            </Modal.Body>
            <Modal.Footer flavor="directional">
              <p>This is the end</p>
            </Modal.Footer>
        </Modal>
      ).__modal;
      $cmp = ReactDOM.findDOMNode(cmp);
    });
    it('is a component', () => {
      expect(isCompositeComponent(cmp)).to.be.true;
    });
    it('contains the correct className', () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal`);
      expect(nodes).to.have.length.above(0);
    });
    it('contains the correct className on the content', () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal__container`);
      expect(nodes).to.have.length.above(0);
    });
    it('handles onClick', () => {
      const spy = sinon.spy(cmp.onClick);
      Simulate.click($cmp);
      requestAnimationFrame(() => {
        expect(spy.calledOnce).to.be.true;
        spy.restore();
      });
    });
    it('calles onRequestClose()', () => {
      Simulate.click($cmp);
      requestAnimationFrame(() => {
        expect(onRequestClose.calledOnce).to.be.true;
      });
    });
    it('calls onRequestClose() if esc is clicked', () => {
      Simulate.keyUp($cmp, {keyCode: 27});
      requestAnimationFrame(() => {
        expect(onRequestClose.calledOnce).to.be.true;
      });
    });
    it('doesn’t call onRequestClose() if any other key is clicked', () => {
      Simulate.keyUp($cmp, {keyCode: 0});
      requestAnimationFrame(() => {
        expect(onRequestClose.calledOnce).to.be.false;
      });
    });
    it('stops event propagation when the content is clicked', () => {
      const spyA = sinon.spy(cmp.onClick);
      const spyB = sinon.spy(cmp.onContentClick);
      const content = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal__container`)[0];
      Simulate.click(content);
      requestAnimationFrame(() => {
        expect(spyA.called).to.be.false;
        expect(spyB.calledOnce).to.be.true;
      });
    });
    it('renders the header', () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal__header`);
      expect(nodes).length.to.be(1);
    });
    it('includes the close button', () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal__close`);
      expect(nodes).length.to.be(1);
    });
    it('renders the body', () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal__content`);
      expect(nodes).length.to.be(1);
    });
    it('renders the footer with flavor', () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, `${cssPrefix}modal__footer--directional`);
      expect(nodes).length.to.be(1);
    });
  });
});
