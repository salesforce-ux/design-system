// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom/server');

const paths = require('../../helpers/paths');
const createInstance = require('../../lib.js');
const showcase = require('../../ui/showcase.js');
const { ui } = require('../');

const __paths = Object.assign({}, paths);

beforeAll(() => {
  paths.root = path.resolve(__paths.root, '__fixtures__');
  paths.ui = path.resolve(__paths.root, '__fixtures__/ui');
});

afterAll(() => {
  Object.assign(paths, __paths);
});

describe('scripts/lib.js', () => {
  let uiJson, SLDS;

  beforeAll(() => {
    ui().fork(
      e => {
        throw e;
      },
      r => {
        uiJson = r;
        SLDS = createInstance(uiJson);
      }
    );
  });

  it('returns a list of components', () => {
    const comps = SLDS.components();
    expect(comps.count()).toBeGreaterThan(1);
    expect(comps.first()).toEqual('buttons');
  });

  it('returns a component', () => {
    const comp = SLDS.component('buttons').getOrElse(null);
    expect(comp.get('id')).toEqual('buttons');
    expect(comp.get('restrictees').count()).toBeGreaterThan(0);
  });

  it('finds a variant', () => {
    const comp = SLDS.component('buttons').getOrElse(null);
    const variant = SLDS.findVariant(comp, 'stateful').getOrElse(null);
    expect(variant.get('id')).toEqual('stateful');
    expect(variant.get('restrictees').count()).toBeGreaterThan(0);
  });

  it('returns a list of modules', () => {
    const comps = SLDS.moduleComponents();
    expect(comps.count()).toBeGreaterThan(0);
    expect(comps.first()).toEqual('buttons');
  });

  it('returns a module', () => {
    const comp = SLDS.moduleComponent('buttons').getOrElse(null);
    expect(comp.get('id')).toEqual('buttons');
    expect(comp.get('restrictees').count()).toBeGreaterThan(0);
  });

  it('finds a module variant', () => {
    const comp = SLDS.moduleComponent('buttons').getOrElse(null);
    const variant = SLDS.findVariant(comp, 'stateful').getOrElse(null);
    expect(variant.get('id')).toEqual('stateful');
    expect(variant.get('restrictees').count()).toBeGreaterThan(0);
  });

  it('gets every example in the system', () => {
    // return an object of types of components, by component id, with an array of html snippets it exports
    // {
    //   "components": {
    //     "${component_id}": ["${element}", ...],
    //     ...
    //   },
    //   "modules": {
    //     "${component_id}": ["${element}", ...],
    //     ...
    //   },
    //   "utilities": {
    //     "${component_id}": ["${element}", ...],
    //     ...
    //   },
    // }
    const allMarkup = uiJson.flatMap((group, name) => {
      // for each top level type in uiJSON
      return {
        // create a key for each type
        [name]: group.map(item => {
          // for each item in each name group, grab it's variants
          return SLDS.variants(item).flatMap(variant => {
            // components|modules and utilities have showcase paths is different locations
            // components have a path on the variant and utilities have a path on the item
            // So which ever one it is, use that to get the example.jsx file for showcase
            const showcasePath =
              item.get('showcasePath') || variant.get('showcasePath');

            // for each variant, grab the showcase based on each variants showcasePath to the example.jsx
            return showcase(showcasePath, true).flatMap(section => {
              // for each item in the showcase
              return section.get('items').map(i => {
                // grab the element and check to see if it's valid according to React
                // if it is render to static markup, else return a failed string.
                return React.isValidElement(i.get('element'))
                  ? ReactDOM.renderToStaticMarkup(i.get('element'))
                  : `FAILED: ${item.get('id')}/${variant.get('id')}/${i.get(
                      'id'
                    )}`;
              });
            });
          });
        })
      };
    });
    expect(allMarkup.toJS()).toMatchSnapshot();
  });
});
