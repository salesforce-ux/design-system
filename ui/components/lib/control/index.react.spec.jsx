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
import Control from './index.react';
import Button from 'ui/components/buttons/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


import {
  isCompositeComponent,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
  Simulate,
  SimulateNative
} from 'react-addons-test-utils';

describe(`Control`, () => {
  xdescribe(`click and hover controls same target`, () => {
    let cmp, testVariable;
    before(() => {
      // real shared document needed for querySelector
      let cls = React.createClass({
        setTestVariable: function() {
          testVariable = 'success!';
        },
        render: function() {
          return (
            <div>
              <Control target='#myDiv' trigger='click'>
                <Button onClick={this.setTestVariable} className={pf('clique')} href='#'>Clickable</Button>
              </Control>

              <Control target='#myDiv' trigger='hover'>
                <p>Hoverable</p>
              </Control>

              <div className={pf('party-time hide')} id='myDiv'><h1>You found me</h1></div>
            </div>
          );
        }
      });
      cmp = ReactDOM.render(React.createElement(cls), document.body);
    });
    it(`renders the children`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'clique');
      expect(nodes).length.to.be(1);
    });
    it(`maintains the hidden className`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, 'party-time')[0];
      expect(node.props.className).to.contain('hide');
    });

    describe(`click the clickable control`, () => {
      let control;
      beforeEach(() => {
        control = scryRenderedDOMComponentsWithClass(cmp, 'clique')[0];
      });

      it(`shows the div`, () => {
        let toggleable = document.querySelector('#myDiv');
        expect(toggleable.className).to.contain('hide');
        expect(testVariable).to.be.undefined;
        Simulate.click(control, {});
        expect(testVariable).to.equal('success!');
        expect(toggleable.className).to.contain('show');
      });

      it(`hides the div`, () => {
        let toggleable = document.querySelector('#myDiv');
        expect(toggleable.className).to.contain('show');
        Simulate.click(control, {});
        expect(toggleable.className).to.contain('hide');
      });
    });

    describe(`hover the hoverable control`, () => {
      let control;
      beforeEach(() => {
        control = scryRenderedDOMComponentsWithTag(cmp, 'p')[0];
      });

      // mouseOver stopgap: https://github.com/facebook/react/issues/1297
      it(`shows the div`, () => {
        let toggleable = document.querySelector('#myDiv');
        expect(toggleable.className).to.contain('hide');
        SimulateNative.mouseOver(ReactDOM.findDOMNode(control));
        expect(toggleable.className).to.contain('show');
      });

      it(`hides the div`, () => {
        let toggleable = document.querySelector('#myDiv');
        expect(toggleable.className).to.contain('show');
        SimulateNative.mouseOut(ReactDOM.findDOMNode(control), {relatedTarget: toggleable});
        expect(toggleable.className).to.contain('hide');
      });
    });
  });
});
