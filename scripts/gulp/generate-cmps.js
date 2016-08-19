/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpzip from 'gulp-zip';
import through from 'through2';
import path from 'path';

const wrapInTemplate = el =>
  `
  <aura:component>
  <aura:attribute name="examplesInLightning" type="Boolean" default="true"/>
    <aura:if isTrue="{!v.examplesInLightning}">

      <!-- TODO example using lightning components -->

    <aura:set attribute="else">
      <!-- HTML example -->

      ${el}

    </aura:set>
    </aura:if>
  </aura:component>
  `;

const exDir = path.resolve.bind(path, __PATHS__.generated, 'examples');

const createCmps = () => {
  let files = [];

  const transform = (oldFile, enc, next) => {
    let file = oldFile.clone();
    file.path = file.path.replace(/html$/, 'cmp');
    file.contents = new Buffer(wrapInTemplate(file.contents.toString()));
    files.push(file.relative);
    next(null, file);
  };

  const flush = function(next) {
    const json = JSON.stringify({files});
    this.push(new gutil.File({
      path: 'index.json',
      contents: new Buffer(json)
    }));
    next();
  };

  return through.obj(transform, flush);
};


gulp.task('generate:cmps', ['generate:examples'], () =>
  gulp.src(exDir('*'))
  .pipe(createCmps())
  .pipe(gulpzip('cmps.zip'))
  .pipe(gulp.dest(__PATHS__.www)));
