// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';

import { flatten, flattenElement, mapElement } from '../react';

const mdx = (
  <div>
    <h1 id="a">A</h1>
    <p>Lorem ipsum dolor sit amemt</p>
    <h2 id="aa">AA</h2>
    <p>Lorem ipsum dolor sit amemt</p>
    <h1 id="b">B</h1>
    <p>Lorem ipsum dolor sit amemt</p>
    <h2 id="bb">BB</h2>
    <p>Lorem ipsum dolor sit amemt</p>
    <h3 id="bbb">BBB</h3>
    <p>Lorem ipsum dolor sit amemt</p>
  </div>
);

it('flatten', () => {
  expect(flatten([[0]])).toEqual([0]);
});

it('flattenElement', () => {
  expect(
    flattenElement(mdx)
      .filter(e => /^h[1-6]/.test(e.type))
      .map(e => e.props.id)
  ).toEqual(['a', 'aa', 'b', 'bb', 'bbb']);
});

it('mapElement', () => {
  expect(
    flattenElement(
      mapElement(mdx, e => React.cloneElement(e, { className: 'slds' }))
    )
      .filter(React.isValidElement)
      .every(e => e.props.className === 'slds')
  ).toBe(true);
});
