// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import { render } from 'enzyme';
import TableOfContents from '../TableOfContents';

describe('TableOfContents', () => {
  let tableOfContentsData = [];
  let toc = '';

  beforeAll(() => {
    tableOfContentsData = [
      {
        el: 'h1',
        id: 'Test-id',
        title: 'Test id'
      }
    ];
    toc = render(<TableOfContents data={tableOfContentsData} />);
  });

  it('renders a table of contents', () => {
    expect(toc.find('.doc-toc').length).toEqual(1);
  });

  it('renders a list item in the TOC', () => {
    expect(toc.find('.doc-toc li').length).toEqual(1);
  });

  it('renders a link in the TOC', () => {
    expect(toc.find('.doc-toc li a').length).toEqual(1);
    expect(toc.find('.doc-toc li a').attr('href')).toEqual('#Test-id');
  });

  it('link text matches data', () => {
    expect(toc.find('.doc-toc li a').text()).toEqual('Test id');
  });
});
