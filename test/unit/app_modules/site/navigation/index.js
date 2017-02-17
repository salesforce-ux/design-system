// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { expect } from 'chai';

import navigation, {
  formatNavItem,
  hasNavItem,
  getActiveNavItems
} from 'app_modules/site/navigation';

describe('app_modules/site/navigation', () => {
  describe('#formatNavItem', () => {
    let getRoot = () => ({ label: 'My Root', path: '/' });
    it('throws an error if the root item is missing a "path" property', () => {
      expect(() => formatNavItem({ label: 'Root' })).to.throw(/path/);
    });
    it('throws an error if the item is missing a "label" property', () => {
      expect(() => formatNavItem({}, getRoot())).to.throw(/label/);
    });
    it('keeps the item "id" property if one is provided ', () => {
      let actual = { id: 'foo', label: 'My Item' };
      let expected = formatNavItem(actual, getRoot());
      expect(expected.id).to.equal('foo');
    });
    it('creates the item "id" property from  the "label" property', () => {
      let actual = { label: 'My Item' };
      let expected = formatNavItem(actual, getRoot());
      expect(expected.id).to.equal('my-item');
    });
    it('keeps the item "path" property if one is provided', () => {
      let actual = { label: 'My Item', path: '/foo/bar' };
      let expected = formatNavItem(actual, getRoot());
      expect(expected.path).to.equal('/foo/bar');
    });
    it('creates the item "path" property by appending the "id" to the initial path', () => {
      let actual = { label: 'My Item', };
      let expected = formatNavItem(actual, getRoot());
      expect(expected.path).to.equal('/my-item');
    });
    it('maps the item "children" property over formatNavItem()', () => {
      let actual = formatNavItem({
        label: 'Root',
        uid: '1',
        path: '/',
        children: [{
          label: 'Foo',
          uid: '2',
          children: [{
            label: 'Bar',
            uid: '3'
          }]
        }]
      });
      let expected = {
        id: 'root',
        uid: '1',
        label: 'Root',
        path: '/',
        children: [{
          id: 'foo',
          uid: '2',
          label: 'Foo',
          path: '/foo',
          children: [{
            id: 'bar',
            uid: '3',
            label: 'Bar',
            path: '/foo/bar'
          }]
        }]
      };
      expect(actual).to.eql(expected);
    });
  });
  describe('#hasNavItem', () => {
    it('returns true if a path is contained in an item', () => {
      let actual = formatNavItem({
        label: 'Root',
        path: '/',
        children: [{
          label: 'A',
          children: [{
            label: 'B',
            children: [{
              label: 'D',
              children: [{
                label: 'E'
              }]
            }]
          },{
            label: 'C'
          }]
        }]
      });
      expect(hasNavItem(actual, '/')).to.be.true;
      expect(hasNavItem(actual, '/a')).to.be.true;
      expect(hasNavItem(actual, '/a/b/d')).to.be.true;
      expect(hasNavItem(actual, '/a/b/d/e')).to.be.true;
      expect(hasNavItem(actual, '/a/c')).to.be.true;
      expect(hasNavItem(actual, '/a/b/c')).to.be.false;
    });
  });
  describe('#getActiveNavItems', () => {
    it('works', () => {
      let actual = formatNavItem({
        label: 'Root',
        path: '/',
        children: [{
          label: 'A',
          children: [{
            label: 'B',
            children: [{
              label: 'D',
              children: [{
                label: 'E'
              }]
            }]
          },{
            label: 'C'
          }]
        }]
      });
      let expected = ['Root', 'A', 'B', 'D', 'E'];
      expect(getActiveNavItems(actual, '/a/b/d/e').map(i => i.label)).to.eql(expected);
    });
  });
});
