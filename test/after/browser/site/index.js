/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactServer from 'react-dom/server';
import page from 'site';

import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

describe('site/', () => {

  var renderedPage = renderIntoDocument(page);

  it('should have a download button', () => {
    expect(scryRenderedDOMComponentsWithClass(renderedPage, 'site-cta-download')).to.have.length(1);
  });

  it('should have 2 "Learn More" buttons', () => {
    const buttons = scryRenderedDOMComponentsWithClass(renderedPage, 'slds-button');
    expect(buttons.filter(b => {
      if (b.innerHTML === 'Learn More') {
        return true;
      } else {
        return false;
      }
    })).to.have.length(2);
  });

  it('should have a navigation area', () => {
    expect(scryRenderedDOMComponentsWithClass(renderedPage, 'site-navigation')).to.have.length(1);
  });

  it('should have a numeric release number of form X.Y.Z', () => {
    const releaseNumberMarkup = scryRenderedDOMComponentsWithClass(renderedPage, 'site-releasenumber');
    const releaseNumberRaw = releaseNumberMarkup[0].lastChild.innerHTML;
    expect(releaseNumberMarkup).to.have.length(1);
    expect(releaseNumberRaw).to.match(/\d+\.\d+\.\d+/);
  });


});

// 
