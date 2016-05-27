/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import gulp from 'gulp';
import gulpIgnore from 'gulp-ignore';
import gutil from 'gulp-util';
import path from 'path';
import through from 'through2';

const _category = () => ({
  /**
   * Return true if an icon should be included in a category
   *
   * @param {object} icon
   * @returns {boolean}
   */
  filter(icon) { return true; },
  /**
   * Return the corresponding prop name from the design properties
   *
   * @param {object} icon
   * @returns {string}
   */
  getPropName(icon) {
    return _.camelCase(icon.symbol);
  },
  /**
   * Return the className for a given icon
   *
   * @param {string} spriteName
   * @param {string} symbolName
   * @returns {string}
   */
  getClassName(spriteName, symbolName) {
    return `icon-${symbolName}`;
  },
  /**
   * Description displayed on the page
   */
  description: '',
  /**
   * An optional object mapping of design tokens / values
   */
  props: false
});

const categories = {

  action: () => _.assign(_category(), {
    filter(icon) {
      return !/custom/.test(icon.symbol);
    },
    getPropName(icon) {
      // Currently, actions look like: "actionSomeAction"
      return _.camelCase('action' + _.capitalize(icon.symbol));
    },
    getClassName(spriteName, symbolName) {
      return `icon-${spriteName}-${symbolName}`;
    },
    description: 'Actions can be seen throughout the interface and represent actions a user can take on any given screen.',
    props: require('@salesforce-ux/design-tokens/dist/bg-actions.common.js')
  }),

  custom: () => _.assign(_category(), {
    getClassName(spriteName, symbolName) {
      // The desired format is: `icon-custom-custom27`, following the icon names displayed on the page
      // below each icon, and be consistent with the class names in other sets
      return `icon-${spriteName}-${symbolName.replace(/[^a-z0-9]/g, '')}`;
    },
    description: 'Custom icons are available for the identity of user created objects.',
    props: require('@salesforce-ux/design-tokens/dist/bg-custom.common.js')
  }),

  doctype: () => _.assign(_category(), {
    getClassName(spriteName, symbolName) {
      // Doctype icons have no background, so we're not generating any class for it
      return null;
    },
    description: 'Doctype icons represent a type of file when a preview or image is unavailable'
  }),

  standard: () => _.assign(_category(), {
    getClassName(spriteName, symbolName) {
      return `icon-${spriteName}-${symbolName}`;
    },
    description: 'Standard icons represent entities and objects within Salesforce.',
    props: require('@salesforce-ux/design-tokens/dist/bg-standard.common.js')
  }),

  utility: () => _.assign(_category(), {
    getClassName(spriteName, symbolName) {
      // Utility icons have no background, so we're not generating any class for it
      return null;
    },
    description: 'Utility icons are used throughout the interface and are SVG&rsquo;s for extensibility.'
  })

};

const generate = () => {
  const sprites = _.keys(categories).map(name => ({
    name, icons: []
  }));
  function transform (file, enc, next) {
    try {
      const spriteName = path.basename(path.dirname(file.path));
      const category = categories[spriteName]
        ? categories[spriteName]()
        : _category();
      const symbolName = path.basename(file.path, '.svg');
      const className = category.getClassName(
        spriteName,
        _.kebabCase(symbolName.toLowerCase())
      );
      const icon = {
        sprite: spriteName,
        symbol: symbolName,
        className,
        description: category.description
      };
      // If a category has design props, add a class to symbols
      // that don't have a corresponding value / generated className
      if (category.props) {
        const name = category.getPropName(icon);
        if (!category.props[name]) {
          icon.className += ' icon__svg--default';
        }
      }
      if (category.filter(icon)) {
        _.find(sprites, { name: spriteName }).icons.push(icon);
      }
      next(null, null);
    } catch (err) {
      next(err);
    }
  }
  function flush (done) {
    try {
      // Natural sorting for only the custom section of icons
      _.find(sprites, { name: 'custom' }).icons.sort((a, b) => {
        a = parseInt(a.symbol.replace(/^[^\d]*/, ''), 10);
        b = parseInt(b.symbol.replace(/^[^\d]*/, ''), 10);
        return a > b ? 1 : -1;
      });
      const json = JSON.stringify(sprites, null, 2);
      const contents = `export default ${json}`;
      const file = new gutil.File({
        path: 'ui.icons.js',
        contents: new Buffer(contents)
      });
      this.push(file);
      done(null);
    } catch (err) {
      done(err);
    }
  }
  return through.obj(transform, flush);
};

gulp.task('generate:icons', () =>
  gulp
    .src(path.resolve(__PATHS__.icons, '**/*.svg'))
    .pipe(gulpIgnore.exclude(/\-sprite/))
    .pipe(generate())
    .pipe(gulp.dest(__PATHS__.generated))
);
