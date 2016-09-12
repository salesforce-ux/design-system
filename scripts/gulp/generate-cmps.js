/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fs from 'fs';
import _ from 'lodash';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpzip from 'gulp-zip';
import through from 'through2';
import path from 'path';
import { toHtml, getExamples } from './generate-examples';

const stateTitle = state =>
  state.label || state.id;

const stateTemplate = (state, html) =>
  `
    <aura:component extends="c:baseState">
      <aura:set attribute="title">
        ${stateTitle(state)}
      </aura:set>
      <aura:set attribute="lightningExample">
      </aura:set>
      <aura:set attribute="htmlExample">
        <![CDATA[
          ${html}
        ]]>
      </aura:set>
      <aura:set attribute="example">
        ${html}
      </aura:set>

    </aura:component>
  `;

const componentTemplate = comp =>
  `
    <aura:component extends="c:baseComponent">
      <aura:set attribute="title">
        ${comp.title}
      </aura:set>
      <aura:set attribute="overview">
        ${docs(comp)}
      </aura:set>
    </aura:component>
  `;

const tryRequire = p => {
  const resolvedPath = path.resolve(__PATHS__.root, p);
  try { fs.accessSync(resolvedPath); } catch (e) { return null; }
  delete require.cache[resolvedPath];
  return require(resolvedPath);
};

const docs = component => {
  const element = tryRequire(`ui/${component.path}/index.docs.jsx`);
  return element && toHtml(element.default);
};

const stateJSON = state =>
  ({[state.label || state.id]: state.uid });

const flavorJSON = flavor =>
  ({
    [flavor.title]: {
      variant: flavor.id,
      states: flavor.examples.map(stateJSON)
    }
  });

const compJSON = component =>
  ({
    [component.title]: {
      component: component.id,
      variants: component.flavors.map(flavorJSON)
    }
  });

const groupName = component =>
  component.path.split('/')[0];

const genJSON = all =>
  _.mapValues(_.groupBy(all, groupName), group =>
    group.reduce((acc, x) => Object.assign(acc, compJSON(x)), {}));

const packageWithIndex = () => {
  const transform = (file, enc, next) =>
    next(null, file);

  const flush = function(next) {
    const json = JSON.stringify(genJSON(getExamples()));
    this.push(new gutil.File({
      path: 'index.json',
      contents: new Buffer(json)
    }));
    next();
  };

  return through.obj(transform, flush);
};

const componentFile = (stream, component) =>
  stream.write(new gutil.File({
    path: `${component.id}.cmp`,
    contents: new Buffer(componentTemplate(component))
  }));

const stateFile = (stream, state) =>
  stream.write(new gutil.File({
    path: `${state.uid}.cmp`,
    contents: new Buffer(stateTemplate(state, toHtml(state.element)))
  }));

const createExamples = components => {
  const stream = through.obj();
  components.forEach(comp => {
    componentFile(stream, comp);
    comp.flavors.forEach(flavor =>
      flavor.examples.forEach(state =>
        stateFile(stream, state)));
  });
  stream.end();
  return stream;
};

//  console.log(JSON.stringify(genJSON(getExamples()), null, 2)));
gulp.task('generate:cmps', ['generate:examples'], () =>
  createExamples(getExamples())
  .pipe(packageWithIndex())
  .pipe(gulpzip('cmps.zip'))
  .pipe(gulp.dest(__PATHS__.www)));
