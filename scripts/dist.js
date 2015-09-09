/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

require('./paths').install();

require('babel/register')({
  ignore: __NODE_MODULES_PATTERN__
});

var argv = require('minimist')(process.argv.slice(2));
var isNpm = argv.npm === true;

var fs = require('fs');
var path = require('path');
var local = path.resolve.bind(path, __PATHS__.dist);

var _ = require('lodash');
var async = require('async');
var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var gulpinsert = require('gulp-insert');
var gulpmatch = require('gulp-match');
var gutil = require('gulp-util');
var gulpzip = require('gulp-zip');
var gulprename = require('gulp-rename');
var postcss = require('postcss');
var rimraf = require('rimraf');
var sass = require('node-sass');
var through = require('through2');

var globals = require('../app_modules/global');
var MODULE_NAME = globals.moduleName;
var DESIGN_TOKENS_MODULE_NAME = '@salesforce-ux/design-tokens';
var DESIGN_TOKENS_IMPORT_NAME = '../node_modules/' + DESIGN_TOKENS_MODULE_NAME;
var PRESERVE_COMMENTS_CONTAINING = /(normalize|http|https|license|flag)/ig;

var now = new Date();
var gitversion = process.env.GIT_VERSION;

var license = [
  commentBanner([globals.displayName + ' ' + gitversion]),
  '/*',
  'Copyright (c) 2015, salesforce.com, inc. All rights reserved.',
  'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:',
  'Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.',
  'Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.',
  'Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.', 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.',
  '*/',
  ''
].join('\n');

///////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////

function isNotVendorFile(file) {
  var match = gulpmatch(file, /vendor/);
  return (!match);
}

function commentBanner(messages) {
  messages = messages.map(function(message) {
    return ' * ' + message;
  }).join('\n');
  return [
    '/***',
    messages,
    ' */\n'
  ].join('\n');
}

function copy(src, dest, options, done) {
  gulp.src(src, options)
    .pipe(gulp.dest(dest))
    .on('error', done)
    .on('finish', done);
}

function removeCSSComments (css) {
  return postcss([function (root, result) {
    root.eachComment(function (comment) {
      if (!comment.text.match(PRESERVE_COMMENTS_CONTAINING)) {
        comment.removeSelf();
      }
    });
  }]).process(css).css;
}

function convertRemToPx (css) {
  return postcss([function (root, result) {
    root.replaceValues(/\d*\.?\d+rem/g, function (string) {
      return (16 * parseFloat(string, 10)) + 'px';
    });
  }]).process(css).css;
}

/**
 * Inject an @import statement into index.scss so that all the
 * design properties and global prefixing gets imported, as well
 * as build date to track version
 */
function injectImport(opts, done) {
  gulp.src(local('scss/' + opts.source))
    .pipe(through.obj(function(file, enc, next) {
      var newFile = file.clone();
      var template = [
        '@import "design-tokens";\n',
        newFile.contents.toString()
      ];
      newFile.contents = new Buffer(template.join('\n'));
      next(null, newFile);
    }))
    .on('error', done)
    .pipe(gulp.dest(local('scss')))
    .on('error', done)
    .on('finish', done);
}

/**
 * Compile the Sass and output to /css
 *
 * @param {object} options
 * @param {function} done
 */
function compileSass(opts, done) {
  var dest = 'assets/styles/' + MODULE_NAME + opts.target + '.css';
  var css;
  try {
    css = sass.renderSync({
      file: local('scss/' + opts.source),
      outputStyle: 'nested',
      sourceComments: false
    }).css.toString();
    // Comments
    css = removeCSSComments(css);
    // Rem => Px
    if (opts.isVF) {
      css = convertRemToPx(css);
    }
    // Autoprefixer
    css = postcss([autoprefixer]).process(css).css;
  } catch (e) {
    return done(e);
  }
  var stream = through.obj();
  var file = new gutil.File({
    path: dest,
    contents: new Buffer(css)
  });
  stream.write(file);
  stream.end();
  stream
  .pipe(gulp.dest(local()))
  .on('error', done)
  .on('finish', done);
}

function preprocessSCSS(opts, done) {
  async.series([
    function(d){ injectImport(opts, d); },
    function(d){ compileSass(opts, d); }
  ], done);
}

///////////////////////////////////////////////////////////////
// Tasks
///////////////////////////////////////////////////////////////

async.series([

  /**
   * Clean the dist folder
   */
  function(done) {
    rimraf(__PATHS__.dist, done);
  },

  /**
   * Copy necessary root files to be included in the final module
   */
  function(done) {
    var src = [
      '.npmignore',
      'package.json',
      'README-dist.txt'
    ].map(function(file) {
      return path.resolve(__PATHS__.root, file);
    });
    copy(src, __PATHS__.dist, {}, done);
  },

  /**
   * Cleanup the package.json
   */
  function(done) {
    var packageJSON = JSON.parse(fs.readFileSync(local('package.json')).toString());
    delete packageJSON.scripts;
    delete packageJSON.gitDependencies;
    packageJSON.name = '@salesforce-ux/design-system';
    packageJSON.dependencies = packageJSON.optionalDependencies;
    delete packageJSON.optionalDependencies;
    fs.writeFile(local('package.json'), JSON.stringify(packageJSON, null, 2), done);
  },


  /* **** */
  /* SCSS */
  /* **** */

  /**
   * Temporarily copy node_modules so Sass will compile
   */
  function(done) {
    var src = [
      path.resolve(__PATHS__.root, 'node_modules', '@salesforce-ux', '**/*')
    ];
    var dest = __PATHS__.dist;
    copy(src, dest, { base: __PATHS__.root }, done);
  },

  /**
   * Move all the scss files to dist/scss
   */
  function(done) {
    gulp.src([
      path.resolve(__PATHS__.ui, '**/*.scss')
    ], { base: __PATHS__.ui })
    .pipe(gulpif(isNotVendorFile, gulpinsert.prepend('/* ' + globals.displayName + ' ' + gitversion + ' */\n')))
    .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'scss')))
    .on('error', done)
    .on('finish', done);
  },

  /**
   * Copy Scss license
   */
  function(done) {
    if (isNpm) return done();
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/licenses/License-for-Sass.txt'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'scss')))
      .on('error', done)
      .on('finish', done);
  },



  /* ***** */
  /* ICONS */
  /* ***** */

  /**
   * Copy all the icons to assets/icons
   * NB: icons license is already part of icons distro
   */
  function(done) {
    if (isNpm) return done();
    gulp.src('node_modules/@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/**')
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/icons')))
      .on('error', done)
      .on('finish', done);
  },



  /* ***** */
  /* FONTS */
  /* ***** */

  /**
   * Copy all the fonts to assets/fonts if not npm
   */
  function(done) {
    if (isNpm) return done();
    gulp.src('site/assets/fonts/**/*')
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/fonts')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Copy font license
   */
  function(done) {
    if (isNpm) return done();
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/licenses/License-for-font.txt'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/fonts')))
      .on('error', done)
      .on('finish', done);
  },

  /* ****** */
  /* IMAGES */
  /* ****** */

  /**
   * Copy select images directories
   */
  function(done) {
    if (isNpm) return done();
    gulp.src(['site/assets/images/spinners/*','site/assets/images/avatar*'], {base: 'site/assets/images/'})
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/images')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Copy images license
   */
  function(done) {
    if (isNpm) return done();
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/licenses/License-for-images.txt'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'assets/images')))
      .on('error', done)
      .on('finish', done);
  },



  /* ******** */
  /* SWATCHES */
  /* ******** */

  /**
   * Copy the swatches
   */
  function(done) {
    if (isNpm) return done();
    gulp.src(path.resolve(__PATHS__.root, 'site/assets/downloads/swatches/**'))
      .pipe(gulp.dest(path.resolve(__PATHS__.dist, 'swatches')))
      .on('error', done)
      .on('finish', done);
  },



  /* ************* */
  /* DESIGN TOKENS */
  /* ************* */

  /**
   * Prefix the "design-tokens" @imports with the
   * relative node_modules path
   */
  function(done) {
    gulp.src(local('scss/design-tokens.scss'))
      .pipe(through.obj(function(file, enc, next) {
        var newFile = file.clone();
        // Add the relative node_modules paths to the @import statments
        var template = newFile.contents.toString()
          .replace(new RegExp(DESIGN_TOKENS_MODULE_NAME, 'g'), function() {
            return DESIGN_TOKENS_IMPORT_NAME;
          });
        newFile.contents = new Buffer(template);
        next(null, newFile);
      }))
      .on('error', done)
      .pipe(gulp.dest(local('scss')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * If we're not building for npm, inline the design-tokens
   */
  function(done) {
    if (isNpm) return done();
    var pattern = /\"(.*?)\"(?=[,;])/g;
    gulp.src(local('scss/design-tokens.scss'))
      .pipe(through.obj(function(file, enc, next) {
        var newFile = file.clone();
        var template = newFile.contents.toString();
        var sassImports = [];
        var match;
        // Collect the @import paths
        while ((match = pattern.exec(template)) !== null) {
          sassImports.push(match[1]);
        }
        // Convert the array of paths to an array of file contents
        sassImports = sassImports.map(function(i) {
          return path.resolve(__dirname, i + '.scss');
        }).filter(function(i) {
          return fs.existsSync(i);
        }).map(function(i) {
          return fs.readFileSync(i).toString();
        });
        // Repalce @import "..", ".."; with the inlined tokens
        template = template.replace(/\@import[\s\S]*?;/, function() {
          return sassImports.join('\n');
        });
        newFile.contents = new Buffer(template);
        next(null, newFile);
      }))
      .on('error', done)
      .pipe(gulp.dest(local('scss')))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Build design system and vf css from the scss files. The big one!
   */
  function(done) {
    async.map([
      { source: 'index.scss', target: '' },
      { source: 'index-scoped.scss', target: '-scoped' },
      { source: 'index-ltng.scss', target: '-ltng' },
      { source: 'index-vf.scss', target: '-vf', isVF: true }
    ], preprocessSCSS, done);
  },

  /**
   * Minify / License / Version
   */
  function(done) {
    gulp.src(local('assets/styles/**/*.css'), { base: local() })
      .pipe(gulpinsert.prepend(license))
      .pipe(gulp.dest(local()))
      .on('error', done)
      .pipe(through.obj(function(file, enc, next) {
        var newFile = file.clone();
        sass.render({
          data: newFile.contents.toString(),
          outputStyle: 'compressed'
        }, function (err, result) {
          if (err) return next(err);
          newFile.contents = result.css;
          next(null, newFile);
        });
      }))
      .on('error', done)
      .pipe(gulprename({suffix: '.min'}))
      .on('error', done)
      .pipe(gulpinsert.prepend(license))
      .pipe(gulp.dest(local()))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Add build date to README.txt
   */
  function(done) {
    gulp.src(local('README-dist.txt'))
      .pipe(gulprename('README'))
      .pipe(gulpinsert.prepend('# ' + globals.displayName + '\n# Version: ' + gitversion + '\n'))
      .on('error', done)
      .pipe(gulp.dest(local()))
      .on('error', done)
      .on('finish', done);
  },

  /**
   * Remove old README-dist
   */
  function(done) {
    rimraf(local('README-dist.txt'), done);
  },

  /**
   * Remove .dist node_modules directory
   */
  function(done) {
    rimraf(local('node_modules'), done);
  },

  /**
   * Remove npm related files
   */
  function(done) {
    if (isNpm) return done();
    async.parallel([
      async.apply(rimraf, local('package.json')),
      async.apply(rimraf, local('.npmignore'))
    ], done);
  },

  /**
   * Zip everything up
   */
  function(done) {
    if (isNpm) return done();
    return gulp.src(local('**'))
      .pipe(gulpzip(globals.zipName(gitversion)))
      .on('error', done)
      .pipe(gulp.dest(local()))
      .on('error', done)
      .on('finish', done);
  }

],
function(err) {
  if (err) throw err;
});
