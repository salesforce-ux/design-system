import { expect } from 'chai';

import {
  getClasses,
} from 'scripts/gulp/generate-whitelist';

describe('scripts/gulp/generate-whitelist.js', () => {
  describe('#getClasses', () => {
    it('throws an error if the first argument isn’t a string', () => {
      expect(() => {
        getClasses();
      }).to.throw();
    });
    it('returns an array', () => {
      expect(getClasses('')).to.be.an.instanceof(Array);
    });
    it('returns only classes', () => {
      expect(getClasses(`
        .a {}
        #b {}
        html {}
      `)).to.eql(['.a']);
    });
    it('returns classes inside multi-selector rules ', () => {
      expect(getClasses(`
        .a, .b {}
      `)).to.eql(['.a', '.b']);
    });
    it('returns classes inside multi-class selectors', () => {
      expect(getClasses(`
        .a .b, .c {}
      `)).to.eql(['.a', '.b', '.c']);
    });
    it('returns classes inside functional notation', () => {
      expect(getClasses(`
        .a .b, .c:not(.d,.e) {}
      `)).to.eql(['.a', '.b', '.c', '.d', '.e']);
    });
    it('returns classes with duplicates removed', () => {
      expect(getClasses(`
        .a {}
        .b {}
        .a {}
      `)).to.eql(['.a', '.b']);
    });
    it('returns classes sorted', () => {
      expect(getClasses(`
        .c {}
        .a {}
        .b {}
      `)).to.eql(['.a', '.b', '.c']);
    });
    it('returns classes sorted with a prefix removed', () => {
      expect(getClasses(`
        .a {}
        .b {}
        .prefix-c {}
        .prefix-d {}
      `, { removePrefix: 'prefix-' })).to.eql(['.a', '.b', '.c', '.d']);
    });
  });
});
