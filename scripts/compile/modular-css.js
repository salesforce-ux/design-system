// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const fs = require('fs-extra');
const glob = require('fast-glob');
const sass = require('sass');

const compileModularCSS = (props = {}) => {
  const { suppressStdout, callback } = props;

  if (!suppressStdout) {
    console.log('=> Clearing out .generated/css');
  }
  fs.emptyDirSync('.generated/css');

  const moduleFiles = glob.sync('./ui/(components|utilities)/**/*_index.scss', {
    ignore: ['ui/components/_index.scss', 'ui/utilities/_index.scss'],
    sourceComments: false
  });
  const moduleFileCount = moduleFiles.length;

  moduleFiles.forEach((filename, i) => {
    const pathBase = filename
      .replace(/\.\/ui\//, '')
      .replace('/_index.scss', '');
    const outFile = `.generated/css/${pathBase}/index.css`;

    // console output
    if (!suppressStdout) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(
        `=> Processing ${i + 1}/${moduleFileCount} - ${filename}`
      );
    }

    const css = sass
      .renderSync({
        data: `
        @import 'ui/_init.scss';
        @import '${filename}';
      `
      })
      .css.toString();

    fs.ensureFileSync(outFile);
    fs.writeFileSync(outFile, css, 'utf8');
  });

  if (!suppressStdout) {
    process.stdout.write(`\n=> Generation Complete\n`);
  }

  if (callback) callback();
};

module.exports = {
  compileModularCSS
};
