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
import Dialog from './index.react';
import Control from 'ui/components/lib/control/flavors/popover';
import Button from 'ui/components/buttons/index.react';

// ci server runs at different window size I think so we use this helper.
function pxToNumber(x) {
  return Number(x.replace('px', ''));
}

import {
  isCompositeComponent,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';

// currently intermittent failures are killing ci. Pending these tests until we figure out the cause
xdescribe(`Dialog`, () => {
  describe(`visible dialog without control`, () => {
    let cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(
        <Dialog>
          <Dialog.Header>
            <span>No Control</span>
          </Dialog.Header>
          <Dialog.Body>
            <p>Is outta control</p>
          </Dialog.Body>
        </Dialog>
      );
    });
    it(`renders the dialog`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'dialog');
      expect(nodes).length.to.be(1);
    });
    it(`renders the content`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'dialog__content');
      expect(nodes).length.to.be(1);
    });
    it(`renders the header`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'dialog__head');
      expect(nodes).length.to.be(1);
    });
    it(`renders the body`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'dialog__body');
      expect(nodes).length.to.be(1);
    });
  });
  describe(`with control (placement on right)`, () => {
    let cmp;
    beforeEach(() => {
      // real shared document needed for actual position calcs
      let cls = React.createClass({
        render: function() {
          return (
            <div style={{height: '200px', width: '300px', margin: '20px'}}>
              <Control trigger='click' placement='right' target='#real-dialog'>
                <Button flavor='neutral' style={{padding: '10px'}}>Backstreets back</Button>
              </Control>

              <Dialog id='other-dialog'></Dialog>

              <Dialog id='real-dialog' visible={false} style={{width: '10px', height: '20px'}}>
                <Dialog.Header>
                  <h2>Everybody</h2>
                </Dialog.Header>
                <Dialog.Body>
                  <p>Rock your body</p>
                </Dialog.Body>
              </Dialog>
            </div>
          );
        }
      });

      cmp = ReactDOM.render(React.createElement(cls), document.body);
    });
    it(`hides the popover surrounding the dialog`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, 'popover')[1];
      expect(node.props.className).to.contain('hide');
    });
    it(`renders the control`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'button');
      expect(nodes).length.to.be(1);
    });

    describe(`toggling the popup`, () => {
      let control, popover;
      beforeEach(() => {
        control = scryRenderedDOMComponentsWithTag(cmp, 'button')[0];
        Simulate.click(control, {});
        popover = document.querySelectorAll('.popover-wrapper')[0];
      });

      it(`positions the dialog to the right of the control`, () => {
        expect(popover.style.position).to.eql('absolute');
        expect(pxToNumber(popover.style.top)).to.be.closeTo(14.5, 10);
        expect(pxToNumber(popover.style.left)).to.closeTo(122, 10);
      });

      it(`hides the dialog`, () => {
        Simulate.click(control, {});
        let dialog = ReactDOM.findDOMNode(cmp).querySelectorAll('.dialog')[2]; // [other, real, popover]
        expect(dialog).to.eql(undefined);
      });
    });
  });

  xdescribe(`with control (placement on top) doesn't fit so rotates clockwise`, () => {
    let cmp;
    beforeEach(() => {
      // real shared document needed for actual position calcs
      let cls = React.createClass({
        render: function() {
          return (
            <div style={{height: '200px', width: '500px', margin: '20px'}}>
              <Control trigger='click' placement='top' target='#real-dialog'>
                <Button flavor='base' style={{padding: '10px'}}>Harold Clickerton</Button>
              </Control>

              <Dialog id='other-dialog'></Dialog>

              <Dialog id='real-dialog' visible={false} style={{width: '100px', height: '150px'}}>
                <Dialog.Body>
                  <h1>How embarassing, I'm neighbors with the backstreet boys</h1>
                </Dialog.Body>
              </Dialog>
            </div>
          );
        }
      });

      cmp = ReactDOM.render(React.createElement(cls), document.body);
    });
    describe(`toggling the popup`, () => {
      let control;
      var popover;
      beforeEach(() => {
        control = scryRenderedDOMComponentsWithTag(cmp, 'button')[0];
        Simulate.click(control, {});
        popover = ReactDOM.findDOMNode(cmp).querySelectorAll('.dialog')[2]; // [other, real, popover]
      });
      it(`has the classname of right-nubbin`, () => {
        expect(popover.className).to.contain('right-nubbin');
      });
      it(`positions the dialog to the right of the control`, () => {
        expect(popover.style.position).to.eql('absolute');
        expect(pxToNumber(popover.style.top)).to.be.closeTo(-40, 10);
        expect(pxToNumber(popover.style.left)).to.closeTo(125, 10);
      });
    });
  });
});
