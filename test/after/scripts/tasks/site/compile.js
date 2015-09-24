import path from 'path';
import { expect } from 'chai';
import sinon from 'sinon';
import through from 'through2';
import temp from 'temp';

import sitemap from 'app_modules/site/navigation/sitemap';

import {
  spy,
  getSitePath,
  getSitePathTmp,
  getPrefixedProps,
  tryRequire,
  createPages
} from 'scripts/tasks/site/compile';

temp.track();

describe('scripts/tasks/site/compile.js', () => {
  describe('#getSitePath', () => {
    it('gets the correct path', () => {
      let actual = getSitePath();
      let expected = __PATHS__.site;
      expect(actual).to.equal(expected);
    });
    it('appends additonal path components', () => {
      let actual = getSitePath('foo', 'bar');
      let expected = path.resolve(__PATHS__.site, 'foo', 'bar');
      expect(actual).to.equal(expected);
    });
  });
  describe('#getSitePathTmp', () => {
    it('gets the correct path', () => {
      let actual = getSitePathTmp();
      let expected = path.resolve(__PATHS__.tmp, 'site');
      expect(actual).to.equal(expected);
    });
    it('appends additonal path components', () => {
      let actual = getSitePathTmp('foo', 'bar');
      let expected = path.resolve(__PATHS__.tmp, 'site', 'foo', 'bar');
      expect(actual).to.equal(expected);
    });
  });
  describe('#getPrefixedProps', () => {
    let a, b;
    beforeEach(() => {
      a = {
        pageTitle: 'foo',
        pageScriptTag: {},
        testKey: 'test'
      };
      b = getPrefixedProps(a, 'page');
    });
    it('returns a new object', () => {
      expect(a).not.to.equal(b);
    });
    it('exludes keys that did not contain the prefix', () => {
      expect(b).not.to.have.property('testKey');
    });
    it('removes the prefix and camelcases the reusult', () => {
      expect(b).not.to.have.any.keys(['pageTitle', 'pageScriptTag']);
      expect(b).to.have.all.keys(['title', 'scriptTag']);
    });
    it('throws errors for bad arguments', () => {
      expect(() => { getPrefixedProps() }).to.throw();
      expect(() => { getPrefixedProps(null) }).to.throw();
      expect(() => { tryRequire({}, null) }).to.throw();
    });
  });
  describe('#tryRequire', () => {
    it('returns a try/catch wrapped require statement', () => {
      let actual = tryRequire('myObject', 'myKey', 'my/module');
      let expected = `try { myObject['myKey'] = require('my/module'); } catch(e) {}`;
      expect(actual).to.equal(expected);
    });
    it('throws errors for bad arguments', () => {
      expect(() => { tryRequire() }).to.throw();
      expect(() => { tryRequire(null) }).to.throw();
      expect(() => { tryRequire('foo', null) }).to.throw();
      expect(() => { tryRequire('foo', 'bar', null) }).to.throw();
    });
  });
  describe.only('#createPages', () => {

  });
});
