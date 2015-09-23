import { expect } from 'chai';
import sinon from 'sinon';
import { zipObject } from 'lodash';

import {
  Route,
  Router,
  getPath
} from 'app_modules/site/navigation/sitemap-utils';

describe('app_modules/site/navigation/sitemap-utils.js', () => {
  describe('Route', () => {
    describe('#constructor', () => {
      it('saves the name and options', () => {
        let route = new Route('my-route', { foo: 'bar' });
        expect(route).to.be.an.instanceOf(Route);
        expect(route).to.have.property('name', 'my-route');
        expect(route).to.have.property('foo', 'bar');
      });
      it('creates a "uid" based on the name/parent', () => {
        let parent = new Route('my-parent');
        let child = new Route('my-child', {}, parent);
        expect(parent).to.have.property('uid', 'my-parent');
        expect(child).to.have.property('uid', 'my-parent:my-child');
      });
      it('creates a "path"', () => {
        let parent = new Route('my-parent');
        let child = new Route('my-child', {}, parent);
        expect(parent).to.have.property('path', '/my-parent');
        expect(child).to.have.property('path', '/my-parent/my-child');
      });
      it('creates a "path" using options.path as an override', () => {
        let parent = new Route('my-parent', { path: '/other-parent' });
        let child = new Route('my-child', {}, parent);
        expect(parent).to.have.property('path', '/other-parent');
        expect(child).to.have.property('path', '/other-parent/my-child');
      });
      it('creates a "path" ingoring the parent if the path is prefixed with "/"', () => {
        let parent = new Route('my-parent', { path: '/other-parent' });
        let child = new Route('my-child', { path: '/top' }, parent);
        expect(parent).to.have.property('path', '/other-parent');
        expect(child).to.have.property('path', '/top');
      });
      it('creates a "modulePath"', () => {
        let parent = new Route('my-parent');
        let child = new Route('my-child', {}, parent);
        expect(parent).to.have.property('modulePath', 'my-parent/index.jsx');
        expect(child).to.have.property('modulePath', 'my-parent/my-child/index.jsx');
      });
      it('creates an empty "routes" array', () => {
        let route = new Route('my-route');
        expect(route).to.have.property('routes').that.is.an('array');
        expect(route.routes).to.have.length(0);
      });
      it(`assigns options before defaults`, () => {
        let keys = ['name', 'uid', 'path', 'modulePath', 'routes'];
        let options = zipObject(keys, keys.map(k => null));
        let route = new Route('my-route', options);
        keys.forEach(key => {
          expect(route).to.not.have.property(key, null);
        });
      });
    });
    describe('#trimSlashes', () => {
      it('trims leading/trailing slashes', () => {
        let trim = new Route().trimSlashes;
        expect(trim('/foo')).to.equal('foo');
        expect(trim('/foo/bar')).to.equal('foo/bar');
        expect(trim('bar/')).to.equal('bar');
        expect(trim('bar/baz/')).to.equal('bar/baz');
        expect(trim('/foo/bar/baz/')).to.equal('foo/bar/baz');
      });
    });
    describe('#getPath', () => {
      it('removes the trailing slash', () => {
        expect(Route.getPath('foo/')).to.equal('/foo');
      });
      it('adds a leading slash to relative routes with no parent', () => {
        expect(Route.getPath('foo/')).to.equal('/foo');
        expect(Route.getPath('foo/bar')).to.equal('/foo/bar');
      });
      it('returns the original path if it begins with a leading slash', () => {
        expect(Route.getPath('/foo/')).to.equal('/foo');
        expect(Route.getPath('/foo/bar')).to.equal('/foo/bar');
        expect(Route.getPath('/foo/bar/baz')).to.equal('/foo/bar/baz');
      });
      it('prepends the parent path if the path is relative', () => {
        let parent = new Route('my-parent');
        expect(Route.getPath('foo', parent)).to.equal('/my-parent/foo');
        expect(Route.getPath('foo/bar', parent)).to.equal('/my-parent/foo/bar');
        expect(Route.getPath('/baz', parent)).to.equal('/baz');
      });
    });
    describe('#getIndexPath', () => {
      it('trims slashes and appends "index.jsx"', () => {
        let route = new Route('name');
        expect(route.getIndexPath('foo/')).to.equal('foo/index.jsx');
        expect(route.getIndexPath('/foo')).to.equal('foo/index.jsx');
        expect(route.getIndexPath('/foo/bar/')).to.equal('foo/bar/index.jsx');
      });
    });
    describe('#getModulePath', () => {
      it('returns an index path based on the route path', () => {
        let parent = new Route('parent');
        let child = new Route('child', {}, parent);
        expect(parent.getModulePath()).to.equal('parent/index.jsx');
        expect(child.getModulePath()).to.equal('parent/child/index.jsx');
      });
    });
    describe('#resource', () => {
      it('creates a child route', () => {
        let parent = new Route('parent');
        parent.resource('child');
        expect(parent.routes).to.have.length(1);
        expect(parent.routes[0]).to.have.property('name', 'child');
      });
      it('creates a child route with options', () => {
        let parent = new Route('parent');
        parent.resource('child', { foo: 'bar' });
        expect(parent.routes).to.have.length(1);
        expect(parent.routes[0]).to.have.property('name', 'child');
        expect(parent.routes[0]).to.have.property('foo', 'bar');
      });
      it('creates a child route with a callback and no options', () => {
        let parent = new Route('parent');
        let spy = sinon.spy();
        spy.someKey = 'someValue';
        parent.resource('child', spy);
        expect(parent.routes).to.have.length(1);
        expect(parent.routes[0]).to.have.property('name', 'child');
        // Verify that the callback didn't get merged into the route
        expect(parent.routes[0]).not.to.have.property('someKey');
        expect(spy.calledOnce).to.be.true;
        expect(spy.thisValues[0]).to.equal(parent.routes[0]);
      });
      it('creates a child route with options and a callback', () => {
        let parent = new Route('parent');
        let spy = sinon.spy();
        parent.resource('child', { foo: 'bar' }, spy);
        expect(parent.routes).to.have.length(1);
        expect(parent.routes[0]).to.have.property('name', 'child');
        expect(parent.routes[0]).to.have.property('foo', 'bar');
        expect(spy.calledOnce).to.be.true;
        expect(spy.thisValues[0]).to.equal(parent.routes[0]);
      });
    });
    describe('#route', () => {
      it('creates a child route', () => {
        let parent = new Route('parent');
        parent.route('child');
        expect(parent.routes).to.have.length(1);
        expect(parent.routes[0]).to.have.property('name', 'child');
      });
      it('creates a child route with options', () => {
        let parent = new Route('parent');
        parent.route('child', { foo: 'bar' });
        expect(parent.routes).to.have.length(1);
        expect(parent.routes[0]).to.have.property('name', 'child');
        expect(parent.routes[0]).to.have.property('foo', 'bar');
      });
    });
    describe('#flattenRoutes', () => {
      it('returns an array beginning with itself', () => {
        let route = new Route('test');
        let flattenedRoutes = route.flattenRoutes();
        expect(flattenedRoutes).to.have.length(1);
        expect(flattenedRoutes[0]).to.equal(route);
      });
      it('recursivley flattens child routes in order', () => {
        let route = new Route('a');
        route.resource('b', function () {
          this.route('c');
          this.route('d');
          this.resource('e', function () {
            this.route('f');
          });
        });
        let flattenedRoutes = route.flattenRoutes();
        expect(flattenedRoutes).to.have.length(6);
        expect(flattenedRoutes.map(r => r.name)).to.eql([
          'a','b','c', 'd', 'e', 'f'
        ]);
      });
    });
  });
  describe('Router', () => {
    let mainRouter;
    before(() => {
      mainRouter = new Router();
      mainRouter.map(function () {
        this.route('foo');
        this.resource('bar', function () {
          this.route('baz');
        });
      });
    });
    describe('#constructor', () => {
      it('creates a root Route', () => {
        let router = new Router();
        expect(router.__route).to.be.an.instanceOf(Route);
        expect(router.__route).to.have.property('isRoot', true);
      });
      it('memoizes some functions', () => {
        let router = new Router();
        ['getFlattenedRoutes', 'getRoute', 'getRouteByPath'].forEach(m => {
          expect(router[m]).to.have.property('cache');
        });
      });
    });
    describe('#map', () => {
      it('creates child routes', () => {
        let router = new Router();
        router.map(function () {
          this.route('a');
          this.resource('b', function () {
            this.route('c');
          });
        });
        expect(router.__route.routes).to.have.length(2);
        expect(router.__route.routes[0]).to.have.property('name', 'a');
        expect(router.__route.routes[1]).to.have.property('name', 'b');
      });
    });
    describe('#getRoutes', () => {
      it('returns a list of the immediate child routes', () => {
        let router = new Router();
        router.map(function () {
          this.route('a');
          this.resource('b', function () {
            this.route('c');
          });
        });
        expect(router.getRoutes()).to.have.length(2);
        expect(router.getRoutes()[0]).to.have.property('name', 'a');
        expect(router.getRoutes()[1]).to.have.property('name', 'b');
      });
    });
    describe('#getFlattenedRoutes', () => {
      it('recursivley flattens child routes in order', () => {
        let flattenedRoutes = mainRouter.getFlattenedRoutes();
        expect(flattenedRoutes).to.have.length(3);
        expect(flattenedRoutes.map(r => r.name)).to.eql([
          'foo', 'bar', 'baz'
        ]);
      });
    });
    describe('#getRoute', () => {
      it('find a route by uuid', () => {
        let route = mainRouter.getRoute('bar:baz');
        expect(route).to.exist;
        expect(route).to.have.property('name', 'baz');
      });
    });
    describe('#getRouteByPath', () => {
      it('find a route by path', () => {
        let route = mainRouter.getRouteByPath('/bar/baz');
        expect(route).to.exist;
        expect(route).to.have.property('name', 'baz');
      });
    });
  });
});
