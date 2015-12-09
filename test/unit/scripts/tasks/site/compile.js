import path from 'path';
import { expect } from 'chai';
import sinon from 'sinon';
import through from 'through2';
import temp from 'temp';
import glob from 'glob';

import ui from '.generated/ui';
import sitemap from 'app_modules/site/navigation/sitemap';
import { Route } from 'app_modules/site/navigation/sitemap-utils';
import createComponent from 'app_modules/site/util/component/create';

import compilePages, {
  getPrefixedProps,
  tryRequire,
  createPageCompiler
} from 'scripts/tasks/site/compile';

temp.track();

const compiler = createPageCompiler();

describe('scripts/tasks/site/compile.js', () => {
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
  describe('#getSitePath', () => {
    it('gets the correct path', () => {
      let actual = compiler.getSitePath();
      let expected = __PATHS__.site;
      expect(actual).to.equal(expected);
    });
    it('appends additonal path components', () => {
      let actual = compiler.getSitePath('foo', 'bar');
      let expected = path.resolve(__PATHS__.site, 'foo', 'bar');
      expect(actual).to.equal(expected);
    });
  });
  describe('#getSitePathTmp', () => {
    it('gets the correct path', () => {
      let actual = compiler.getSitePathTmp();
      let expected = path.resolve(__PATHS__.tmp, 'site');
      expect(actual).to.equal(expected);
    });
    it('appends additonal path components', () => {
      let actual = compiler.getSitePathTmp('foo', 'bar');
      let expected = path.resolve(__PATHS__.tmp, 'site', 'foo', 'bar');
      expect(actual).to.equal(expected);
    });
  });
  describe('#createPages', function () {
    let routes, tempPath, getSitePathTmp, createPage;
    this.timeout(1000);
    before(done => {
      routes = sitemap.getFlattenedRoutes().filter(route => !route.component);
      tempPath = temp.mkdirSync();
      getSitePathTmp = sinon.stub(compiler, 'getSitePathTmp', function () {
        return path.resolve(tempPath, ...arguments);
      });
      createPage = sinon.spy(compiler, 'createPage');
      compiler.createPages(done);
    });
    after(() => {
      getSitePathTmp.restore();
      createPage.restore();
    });
    it('calls createPage() for each non-component route', () => {
      expect(createPage.callCount).to.equal(routes.length);
    });
    it('calls createPage() with a Route object', () => {
      createPage.args.forEach(args => {
        expect(args[0]).to.be.instanceof(Route);
      });
    });
    it('creates a temporary page for each non-component route', () => {
      let files = glob.sync(`${tempPath}/**/*.jsx`);
      expect(files).to.have.length(routes.length);
    });
  });
  describe('#createPage', () => {
    let route, resultFile, result;
    beforeEach((done) => {
      route = new Route('my-route');
      let stream = through.obj();
      stream.write(route);
      stream.end();
      stream
        .pipe(through.obj(compiler.createPage))
        .pipe(through.obj((file, enc, next) => {
          resultFile = file;
          result = file.contents.toString();
          next(null, file);
        }))
        .on('error', function(err) { throw err })
        .on('finish', done);
    });
    it('imports React', () => {
      expect(result).to.have.string(`import React from 'react';`)
    });
    it('imports pageBody using the route module path', () => {
      expect(result).to.have.string(`import pageBody from 'site/${route.modulePath}';`)
    });
    it('adds page specific props', () => {
      expect(result).to.have.string(`"url":"${route.path}"`);
    });
    it('exports a copy of the pageBody', () => {
      expect(result).to.have.string('export default React.cloneElement(');
    });
  });
  describe('#createComponentPages', function () {
    let routes, tempPath, getSitePathTmp, createComponentPage;
    this.timeout(1000);
    before(done => {
      routes = sitemap.getFlattenedRoutes().filter(route => route.component);
      tempPath = temp.mkdirSync();
      getSitePathTmp = sinon.stub(compiler, 'getSitePathTmp', function () {
        return path.resolve(tempPath, ...arguments);
      });
      createComponentPage = sinon.spy(compiler, 'createComponentPage');
      compiler.createComponentPages(done);
    });
    after(() => {
      getSitePathTmp.restore();
      createComponentPage.restore();
    });
    it('calls createComponentPage() for each component route', () => {
      expect(createComponentPage.callCount).to.equal(routes.length);
    });
    it('calls createComponentPage() with a Route object that contains a component', () => {
      createComponentPage.args.forEach(args => {
        expect(args[0]).to.be.an.instanceof(Route);
        expect(args[0].component).to.contain.all.keys(['id', 'title', 'classBase']);
        expect(args[0].component).to.not.contain.any.keys(['styles', 'info']);
      });
    });
    it('creates a temporary page for each component route', () => {
      let files = glob.sync(`${tempPath}/**/*.jsx`);
      expect(files).to.have.length(routes.length);
    });
  });
  describe('#createComponentPage', () => {
    let route, resultFile, result;
    beforeEach((done) => {
      route = new Route('my-route');
      route.component = createComponent(ui[0].components[0]);
      let stream = through.obj();
      stream.write(route);
      stream.end();
      stream
        .pipe(through.obj(compiler.createComponentPage))
        .pipe(through.obj((file, enc, next) => {
          resultFile = file;
          result = file.contents.toString();
          next(null, file);
        }))
        .on('error', function(err) { throw err })
        .on('finish', done);
    });
    it('imports React', () => {
      expect(result).to.have.string(`import React from 'react';`)
    });
    it('imports PageBody', () => {
      expect(result).to.have.string(`import PageBody from 'app_modules/site/components/page/body';`)
    });
    it('imports ComponentBody', () => {
      expect(result).to.have.string(`import ComponentBody from 'app_modules/site/components/page/component';`)
    });
    it('adds page specific props', () => {
      expect(result).to.have.string(`const bodyProps = `);
      expect(result).to.have.string(`"url":"${route.path}"`);
    });
    it('adds the component', () => {
      expect(result).to.have.string(`const component = ${JSON.stringify(route.component)};`);
    });
    it('adds the docs', () => {
      expect(result).to.have.string(`elements['docs']`);
      expect(result).to.have.string(`ui/${route.component.path}/index.docs.jsx`);
    });
    it('adds the examples', () => {
      route.component.flavors.forEach(flavor => {
        expect(result).to.have.string(`ui/${flavor.path}/index.react.example.jsx`)
      });
    });
    it('exports a PageBody', () => {
      expect(result).to.have.string('export default <PageBody');
    });
  });
});
