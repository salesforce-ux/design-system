// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const paths = require('../helpers/paths');

module.exports = () =>
  new Task((rej, res) =>
    res(
      glob
        .sync(path.resolve(paths.ui, '**/*.scss'))
        .map(scssPath => fs.readFileSync(scssPath, 'utf-8'))
        .join('\n')
    )
  );
