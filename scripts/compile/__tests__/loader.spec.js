// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom/server';
import loader from '../mdx-post-loader';
import createHelper from '../mdx-helper';

describe('loader template', () => {
  it('snapshots the template', () => {
    expect(loader('export default function')).toMatchSnapshot();
  });
});

describe('mdx helper', () => {
  let helper;

  beforeEach(() => {
    helper = createHelper();
  });

  it('renders h2', () => {
    const createH2 = helper.HeadingEl('h2');
    const r = ReactDOM.renderToStaticMarkup(createH2({ id: 'hello' }, 'Hello'));
    expect(r).toEqual(
      ReactDOM.renderToStaticMarkup(
        <h2 id="hello" className="doc">
          Hello<a className="doc doc-anchor" href="#hello">
            #
          </a>
        </h2>
      )
    );
  });

  describe('after h2 rendered', () => {
    let createH2;
    beforeEach(() => {
      createH2 = helper.HeadingEl('h2');
      createH2({ id: 'accordion' }, 'Accordion');
    });

    it('added to toc', () => {
      expect(helper.toc).toEqual([
        { id: 'accordion', headingLevel: '2', title: 'Accordion', children: [] }
      ]);
    });

    it('adds subheadings as children', () => {
      const createH3 = helper.HeadingEl('h3');
      createH3({ id: 'states' }, 'States');
      const item = helper.toc[0];
      expect(item.id).toEqual('accordion');
      expect(item.children[0].id).toEqual('states');
    });

    it('adds subheadings as siblings', () => {
      const createH3 = helper.HeadingEl('h3');
      createH3({ id: 'states' }, 'States');
      createH3({ id: 'states2' }, 'States');
      const item = helper.toc[0];
      expect(item.id).toEqual('accordion');
      expect(item.children[0].id).toEqual('states');
      expect(item.children[1].id).toEqual('states2');
    });

    it('adds subheadings as childrens children', () => {
      const createH3 = helper.HeadingEl('h3');
      const createH4 = helper.HeadingEl('h4');
      createH3({ id: 'states' }, 'States');
      createH4({ id: 'states2' }, 'States');
      const item = helper.toc[0];
      expect(item.id).toEqual('accordion');
      expect(item.children[0].id).toEqual('states');
      expect(item.children[0].children[0].id).toEqual('states2');
    });

    describe('after child h3 has rendered', () => {
      beforeEach(() => {
        const createH3 = helper.HeadingEl('h3');
        createH3({ id: 'child1' }, 'child');
      });

      it('adds a new parent h2', () => {
        createH2({ id: 'chat' }, 'Chat');
        const lastItem = helper.toc[helper.toc.length - 1];
        expect(lastItem.id).toEqual('chat');
      });
    });
  });
});
