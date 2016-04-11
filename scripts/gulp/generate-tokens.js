/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import async from 'async';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import theo from 'theo';
import through from 'through2';

import {
  addContrastRatios,
  addPxValue
} from 'app_modules/util/tokens';

gulp.task('generate:tokens', done => {

  const groups = [{
    name: 'lightning-design-system',
    label: 'Lightning Design System',
    sets: [
      'force-base',
      'force-mq-commons',
      's1-base',
      's1-base-large'
    ]
  }];

  /**
   * This currently only supports the current release of tokens
   *
   * To support multiple releases, we will need to create a temp directory
   * with sub-directories containing a package.json for each additional
   * version that is needed
   */
  const releases = ['spring-16'].map(name => ({
    name,
    groups: groups.map(_.cloneDeep)
  }));

  /**
   * Convert a transformed design tokens file into a set object
   */
  function createSet () {
    return through.obj(function (file, enc, next) {
      try {
        const set = {
          name: path.basename(file.path, '.json'),
          contents: JSON.parse(file.contents.toString())
        };
        // Accessibility
        addContrastRatios(set.contents);
        // Add px values as well as rem
        _.forEach(set.contents.props, prop => {
          if (/rem$/.test(prop.value)) {
            addPxValue(prop);
          }
        });
        next(null, set);
      } catch(err) {
        next(err);
      }
    });
  }

  /**
   * Transform the release group sets
   */
  function mapGroup (group, done) {
    group = _.cloneDeep(group);
    const sets = [];
    const src = group.sets.map(set =>
        require.resolve(`@salesforce-ux/design-tokens/tokens/${set}.json`));
    gulp.src(src)
      .pipe(theo.plugins.transform('web', {
        includeMeta: true,
        includeRawValue: true
      }))
      .on('error', done)
      .pipe(createSet())
      .on('error', done)
      .pipe(through.obj(
        function(set, enc, next) {
          sets.push(set);
          next();
        },
        function(next) {
          group.sets = sets;
          next();
        }
      ))
      .on('error', done)
      .on('finish', () => {
        done(null, group);
      });
  }

  /**
   * Transform the release groups
   */
  function mapRelease (release, done) {
    release = _.cloneDeep(release);
    async.map(release.groups, mapGroup, (err, groups) => {
      if (err) return done(err);
      release.groups = groups;
      // HACK: s1-base-large overrides
      const slds = _.find(groups, { name: 'lightning-design-system' });
      if (slds) {
        const s1BaseLarge = _.find(slds.sets, { name: 's1-base-large' });
        if (s1BaseLarge) {
          _.forEach(slds.sets, (set) => {
            _.forEach(['aliases', 'props'], (contentKey) => {
              set.contents[contentKey] = _.mapValues(set.contents[contentKey], (value, key) => {
                if (_.has(s1BaseLarge.contents[contentKey], key)) {
                  return s1BaseLarge.contents[contentKey][key];
                }
                return value;
              });
            });
          });
          _.pull(slds.sets, s1BaseLarge);
        }
      }
      done(null, release);
    });
  }

  async.map(releases, mapRelease, (err, releases) => {
    if (err) throw err;
    try {
      const stream = through.obj();
      const module = `export default ${JSON.stringify(releases, null, 2)};`;
      stream.write(new gutil.File({
        path: 'ui.tokens.js',
        contents: new Buffer(module)
      }));
      stream.end();
      stream
        .pipe(gulp.dest(__PATHS__.generated))
        .on('error', done)
        .on('finish', done);
    } catch (err) {
      done(err);
    }
  });

});
