// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';

import { createTableOfContents } from '../Doc';

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

it('createTableOfContents', () => {
  expect(createTableOfContents(mdx)).toMatchSnapshot();
});
