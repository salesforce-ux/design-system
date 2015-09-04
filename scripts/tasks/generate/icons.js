/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const _ = require('lodash');
const gulp = require('gulp');
const gutil = require('gulp-util');
const through = require('through2');

const _category = {
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
};

function getCategories () {

  const _categories = {

    action: _.merge({}, _category, {
      getPropName(icon) {
        // Currently, actions look like: "actionSomeAction"
        return _.camelCase('action' + _.capitalize(icon.symbol));
      },
      getClassName(sprinteName, symbolName) {
        const custom = /^new\-custom/;
        if (custom.test(symbolName)) {
          return `icon-${_.kebabCase(symbolName.replace(custom, 'custom'))}`;
        }
        return `icon-${sprinteName}-${symbolName}`;
      },
      description: `Actions can be seen throughout the interface and represent actions a user can take on any given screen.`,
      props: require('@salesforce-ux/design-tokens/dist/bg-actions.common.js')
    }),

    custom: _.merge({}, _category, {
      getClassName(sprinteName, symbolName) {
        return `icon-${_.kebabCase(symbolName)}`;
      },
      description: `Custom icons are available for the identity of user created objects.`,
      props: require('@salesforce-ux/design-tokens/dist/bg-custom.common.js')
    }),

    doctype: _.merge({}, _category, {
      getClassName(sprinteName, symbolName) {
        return `icon-${symbolName} icon__svg--no-background`;
      },
      description: `Doctype icons represent a type of file when a preview or image is unavailable`
    }),

    standard: _.merge({}, _category, {
      getClassName(sprinteName, symbolName) {
        return `icon-${sprinteName}-${symbolName}`;
      },
      description: `Standard icons represent entities and objects within Salesforce.`,
      props: require('@salesforce-ux/design-tokens/dist/bg-standard.common.js')
    }),

    utility: _.merge({}, _category, {
      getClassName(sprinteName, symbolName) {
        return `icon-utility-${symbolName}`;
      },
      description: `Utility icons are used throughout the interface and are SVG&rsquo;s for extensibility.`
    })

  };

  return fs.readdirSync(__PATHS__.icons)
    .filter(directory => directory.indexOf('-sprite') !== -1)
    .map(directory => {
      const spriteName = directory.split('-')[0];
      const category = _categories[spriteName] || _category;
      const svgPath = path.resolve(__PATHS__.icons, spriteName, '*.svg');

      const icons = glob.sync(svgPath)
        .map(filename => {
          const symbolName = path.basename(filename, '.svg');
          const className = category.getClassName(
            spriteName,
            symbolName.replace(/_/g, '-')
          );
          return {
            sprite: spriteName,
            symbol: symbolName,
            className
          };
        });

      // If a category has design props, add a class to symbols
      // that don't have a corresponding value / generated class name
      if (category.props) {
        icons.forEach(icon => {
          const name = category.getPropName(icon);
          if (!category.props[name]) {
            icon.className += ' icon__svg--default';
          }
        });
      }

      // Natural sorting for only the custom section of icons
      if (category === 'custom') {
        icons.sort((a, b) => {
          a = parseInt(a.symbol.replace(/^[^\d]*/, ''), 10);
          b = parseInt(b.symbol.replace(/^[^\d]*/, ''), 10);
          return a > b ? 1 : -1;
        });
      }

      category.name = spriteName;
      category.icons = icons;
      delete category.props;

      return category;

    });
}

module.exports = function(done) {
  let categories;
  try {
    categories = JSON.stringify(getCategories(), null, 2);
    categories = `export default ${categories}`;
  } catch(err) {
    return done(err);
  }
  const stream = through.obj();
  stream.write(new gutil.File({
    path: 'ui.icons.js',
    contents: new Buffer(categories)
  }));
  stream.end();
  stream
    .pipe(gulp.dest(__PATHS__.generated))
    .on('error', done)
    .on('finish', done);
};
