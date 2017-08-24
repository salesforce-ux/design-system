// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const _ = require("lodash");
const paths = require("./helpers/paths");
const path = require("path");
const gulp = require("gulp");
const Task = require("data.task");
const I = require("immutable");
const { writeToDist } = require("./ui");

const createPreviewer = process.env.SLDS_PREVIEWER === "development"
  ? require("../../design-system-previewer")
  : require("@salesforce-ux/design-system-previewer");

const { watchPaths } = require("./watch");

const Bundle = require("./compile/bundle");

require("./gulp/styles");

const previewer = createPreviewer({
  // where are your static assets
  publicPath: {
    "/assets": [path.resolve(__dirname, "../assets")],
    "/dist": [path.resolve(__dirname, "../.dist/")],
    "/assets/icons": [paths.icons]
  },
  // where is your css?
  cssUrl: "/assets/styles/index.css", // ignored by git
  // get me the js bundle
  scriptUrl: `/dist/__internal/slds.umd.js`
});

const listen = () =>
  previewer.listen(3003, ({ server, emit }) => {
    // Sass
    const sassWatcher = gulp.watch(
      watchPaths.sass,
      ["styles:sass"] // This will trigger watchPaths.css
    );

    gulp.watch(watchPaths.tokens, ["styles:framework"]);

    // CSS
    gulp.watch(watchPaths.css, event => {
      emit("styles");
      setTimeout(() => writeToDist().fork(console.error, console.log), 200);
    });

    gulp.start("styles:framework");

    const emitReady = _.once(() => {
      emit("ready");
    });

    // JS
    Bundle.watch().fork(
      e => {
        throw e;
      },
      stats => {
        emit("bundle");
        emitReady();
      }
    );
  });

console.log("Start compiling JS library for Previewer...");

listen();
