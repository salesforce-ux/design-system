/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

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
