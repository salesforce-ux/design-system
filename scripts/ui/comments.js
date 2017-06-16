// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require("data.task");
const glob = require("glob");
const fs = require("fs");
const path = require("path");


const designSystemPath = process.env.NODE_ENV === 'test'
? path.resolve.bind(path, __dirname, "../../__fixtures__/ui")
: path.resolve.bind(path, __dirname, "../../ui");

module.exports = () =>
  new Task((rej, res) =>
    res(
      glob
        .sync(designSystemPath("**/*.scss"))
        .map(scssPath => fs.readFileSync(scssPath, "utf-8"))
        .join("\n")
    )
  );
