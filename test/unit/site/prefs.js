import { expect } from 'chai';

import emitter from 'site/assets/scripts/framework/events';
import Prefs from 'site/assets/scripts/shared/preferences'

describe('Preferences', () => {
  let trigger;
  const store = {};

  const fakeDelegate = (listener, selector, fn) => {
    trigger = (val) => fn({ target: { value: val } })
  };

  const fakeStorage = {
    getItem: (key) => store[key],
    setItem: (key, val) => store[key] = val
  };

  before(() => {
    global.window = { localStorage: fakeStorage }
  });

  after(() => {
    global.window = null
  });

  beforeEach(() => {
    Prefs().hooks.listen_dom(fakeDelegate);
  });

  it('emits an event on listen_dom change', (done) => {
    emitter.once('preferences:updated', (prefs) => {
      expect(prefs.status).to.equal('dev-ready');
      done();
    })
    trigger('dev-ready');
  });

  it('updates to prototype', (done) => {
    emitter.once('preferences:updated', (prefs) => {
      expect(prefs.status).to.equal('prototype');
      done();
    })
    trigger('prototype');
  });

});
