/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';

import _ from 'lodash';
import gulp from 'gulp';
import gutil from 'gulp-util';
import through from 'through2';
import css from 'css';
import globals from 'app_modules/global';

const { cssPrefix } = globals;

export const allowPrefixedClasses = x => x.match(`.${cssPrefix}`);
export const fixParenthesized = x => x.replace(/[\(\)]/g, ' ');
export const onlyClasses = x => x.match(/^\.[a-zA-Z0-9_\-]+$/);
export const removeAttrs = x => x.replace(/\[[^\]]*\]/g, '');
export const removeNonWordSuffix = x => x.replace(/\W*$/, '');
export const removePrefix = x => x.replace(new RegExp(`\.${cssPrefix}`, 'g'), '.');
export const removePseudo = x => x.replace(/:+[a-zA-Z_\-]+/g, '');
export const splitParts = x => x.replace(/[>+*]/g, ' ').replace(/\./g, ' .').split(/\s+/);

function getSelectors(r) {
  if (r.rules) {
    return r.rules.map(getSelectors);
  }
  return (r.selectors || [])
    .filter(allowPrefixedClasses)
    .map(removePrefix)
    .map(removePseudo)
    .map(removeAttrs)
    .map(fixParenthesized)
    .map(splitParts);
}

export default function(done) {
  console.log('Generating master whitelist');
  gulp.src(path.resolve(__PATHS__.www, 'assets/styles/slds.css'))
  .pipe(through.obj(function(file, enc, next) {
    const parsedCSS = css.parse(file.contents.toString());
    const rs = parsedCSS.stylesheet.rules.map(getSelectors);
    const rules = _.sortBy(_.uniq(
      _.compact(_.flattenDeep(rs))
      .map(removeNonWordSuffix)
      .filter(onlyClasses)
      ));
    try {
      const file = new gutil.File({
        path: 'whitelist.js',
        contents: new Buffer(`export default ${JSON.stringify(rules)}`)
      });
      next(null, file);
    } catch(e) { next(e); }
  }))
  .on('error', done)
  .pipe(gulp.dest(__PATHS__.generated))
  .on('error', done)
  .on('finish', done);
}
