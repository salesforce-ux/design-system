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
import Tooltip from './index.react';
import Control from '../lib/control/flavors/popover';
import Button from 'ui/components/buttons/index.react';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';

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
xdescribe(`Tooltip`, () => {
  describe(`with control (placement on top)`, () => {
    let cmp;
    beforeEach(() => {
      // real shared document needed for actual position calcs
      let cls = React.createClass({
        render: function() {
          return (
            <div style={{height: '80px', width: '200px', margin: '20px'}}>
              <Control trigger='click' placement='top' target='#tip1'>
                <Button className={pf('clicky-mcduck')}>Click me</Button>
              </Control>
              <Tooltip id='tip1' visible={false} style={{width: '10px', height: '20px'}}>
                <h1>Tip the Toolman Taylor</h1>
              </Tooltip>
            </div>
          );
        }
      });

      cmp = ReactDOM.render(React.createElement(cls), document.body);
    });
    it(`hides the tooltip via the popover`, () => {
      const node = scryRenderedDOMComponentsWithClass(cmp, 'popover')[0];
      expect(node.props.className).to.contain('hide');
    });
    it(`renders the control`, () => {
      const nodes = scryRenderedDOMComponentsWithClass(cmp, 'clicky-mcduck');
      expect(nodes).length.to.be(1);
    });
    describe(`toggling the tooltip`, () => {
      let control, popover, wrapper;
      beforeEach(() => {
        control = scryRenderedDOMComponentsWithClass(cmp, 'clicky-mcduck')[0];
        Simulate.click(control, {});
        popover = document.querySelectorAll('.popover')[1] // it clones the original;
        wrapper = document.querySelectorAll('.popover-wrapper')[0];
      });
      it(`has the appropriate nubbin classname`, () => {
        expect(popover.className).to.contain('nubbin--bottom');
      });
      it(`positions the tooltip to the top of the control`, () => {
        expect(wrapper.style.position).to.eql('absolute');
        expect(pxToNumber(wrapper.style.top)).to.be.closeTo(-20, 10);
        expect(pxToNumber(wrapper.style.left)).to.closeTo(50, 10);
      });
    });
  });
});
