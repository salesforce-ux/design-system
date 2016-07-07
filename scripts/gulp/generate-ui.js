/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import through from 'through2';

import Status from 'app_modules/site/util/component/status';
import Schema from 'app_modules/ui/util/schema';

export const eachComponent = (schema, callback) =>
  schema.forEach(category => {
    category.components.forEach(callback);
  });

export const addStatus = schema =>
  eachComponent(schema, component =>
    component.status = Status.or(component.flavors.map(x => x.status))
  );

export const addExamplePath = schema =>
  eachComponent(schema, component => {
    component.flavors.forEach(flavor => {
      const examplePath = `${flavor.path}/index.react.example.jsx`;
      try {
        fs.accessSync(path.resolve(__PATHS__.ui, examplePath));
        flavor.examplePath = examplePath;
      } catch(error) { // eslint-disable-line no-empty
      }
    });
  });

export const generateUI = (schema) => {
  schema = schema || Schema({ path: __PATHS__.ui }).generate();
  addStatus(schema);
  addExamplePath(schema);
  return schema;
};

gulp.task('generate:ui', () => {
  const stream = through.obj();
  const ui = JSON.stringify(generateUI(), null, 2);
  stream.write(new gutil.File({
    path: 'ui.js',
    contents: new Buffer(`export default ${ui};`)
  }));
  stream.end();
  return stream
    .pipe(gulp.dest(__PATHS__.generated));
});
