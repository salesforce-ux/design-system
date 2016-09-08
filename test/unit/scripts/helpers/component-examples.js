/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { expect } from 'chai';
import { isValidElement } from 'react';
import { getComponents, addExamples } from 'scripts/gulp/generate-examples';

// example schema (slimmed down from actual)
const schema = [
  { id: 'components',
    path: 'components',
    components: [
      { id: 'button',
        path: 'components/buttons',
        status: 'prototype',
        flavors: [{ id: 'base', path: 'components/buttons/flavors/base', status: 'prototype' }]
      }
    ]
  },
  { id: 'utilities',
    path: 'utilities',
    components: [
      { id: 'floats',
        path: 'utilities/floats',
        status: 'prototype',
        flavors: [
          { id: 'float-left', path: 'utilities/floats/flavors/float-left', status: 'dev-ready' },
          { id: 'float-right', path: 'BOOOOGGGGUUUSSSSS', classBase: 'floats'}
        ]
      }
    ]
  }
];


describe('scripts/helpers/component-examples.js', () => {
  describe('getComponents', () => {
    let comps;

    before(() => {
      comps = getComponents(schema);
    });

    it('returns an array of components and utils mixed together', () =>
      expect(comps.length).to.equal(2));

    it('adds example paths to the components', () =>
      expect(comps[0].flavors[0].examplePath).to.include('components/buttons/flavors/base/index.react.example.jsx'));

    it('updates the status when prototype', () =>
      expect(comps[0].status).to.equal('prototype'));

    it('updates the status to dev-ready if any flavors are dev-ready', () =>
      expect(comps[1].status).to.equal('dev-ready'));

    describe('all html examples', () => {
      let button, floats;

      before(() => {
        [button, floats] = addExamples(getComponents(schema));
      });

      it('adds example objects to the flavors with state', () =>
        expect(button.flavors[0].examples[0].id).to.equal('button'));

      it('adds example objects to the flavors w/o state', () =>
        expect(floats.flavors[0].examples[0].id).to.equal('default'));

      it('includes the element in the example object', () =>
        expect(isValidElement(button.flavors[0].examples[0].element)).to.be.ok);

      it('returns an empty array if no examples', () =>
        expect(floats.flavors.length).to.equal(1));
    });
  });
});


