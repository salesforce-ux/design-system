import { expect } from 'chai';

import {
  getPrefixedProps,
} from 'scripts/gulp/pages';

describe('scripts/gulp/pages.js', () => {
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
});
