// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

// import { expect } from 'chai';
// import { isValidElement } from 'react';
// import { getComponents, addExamples } from 'scripts/gulp/generate-examples';

// // example schema (slimmed down from actual)
// const schema = [
//   { id: 'components',
//     path: 'components',
//     components: [
//       { id: 'button',
//         path: 'components/buttons',
//         status: 'prototype',
//         flavors: [{ id: 'base', path: 'components/buttons/flavors/base', status: 'prototype' }]
//       }
//     ]
//   },
//   { id: 'utilities',
//     path: 'utilities',
//     components: [
//       { id: 'floats',
//         path: 'utilities/floats',
//         status: 'prototype',
//         flavors: [
//           { id: 'float-left', path: 'utilities/floats/flavors/float-left', status: 'dev-ready' },
//           { id: 'float-right', path: 'BOOOOGGGGUUUSSSSS', classBase: 'floats'}
//         ]
//       }
//     ]
//   }
// ];


// describe('scripts/helpers/component-examples.js', () => {
//   describe('getComponents', () => {
//     let comps;

//     before(() => {
//       console.log('------Starting getComponents()----');
//       comps = getComponents(schema);
//       console.log('---COMPS--', comps);
//     });

//     it('returns an array of components and utils mixed together', () =>
//       expect(comps.length).to.equal(2));

//     it('adds example paths to the components', () =>
//       expect(comps[0].flavors[0].examplePath).to.include('components/buttons/flavors/base/index.react.example.jsx'));

//     it('updates the status when prototype', () =>
//       expect(comps[0].status).to.equal('prototype'));

//     it('updates the status to dev-ready if any flavors are dev-ready', () =>
//       expect(comps[1].status).to.equal('dev-ready'));

//     describe('all html examples', () => {
//       let button, floats;

//       before(() => {
//         [button, floats] = addExamples(getComponents(schema));
//       });

//       it('adds example objects to the flavors with state', () =>
//         expect(button.flavors[0].examples[0].id).to.equal('button'));

//       it('adds example objects to the flavors w/o state', () =>
//         expect(floats.flavors[0].examples[0].id).to.equal('default'));

//       it('includes the element in the example object', () =>
//         expect(isValidElement(button.flavors[0].examples[0].element)).to.be.ok);

//       it('returns an empty array if no examples', () =>
//         expect(floats.flavors.length).to.equal(1));
//     });
//   });
// });


