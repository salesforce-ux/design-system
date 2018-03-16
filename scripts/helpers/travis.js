// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { execSync, spawn } from 'child_process';

import paths from './paths';
import publish from './publish';

export const createSnapshots = done => {
  const command = paths.rootPath('node_modules/.bin/create-snap');
  const inputPath = `${paths.generated}/examples/`;
  const outputPath = paths.generated;
  const stylesPath = paths.rootPath('assets/styles/index.css');
  return spawn(command, [inputPath, outputPath, stylesPath], {
    cwd: paths.root,
    stdio: 'inherit'
  });
};

export const lintExamples = done => {
  // pass snapshot path to vrt and the output of that as components to lint
  execSync(
    `
      echo Running VRT.... &&
      R=$(node scripts/vrt.js --path ${paths.generated}/snapshot.json) &&
      echo 'VRT RESULTS:' &&
      echo $R;
      if [ -z $R ]; then
          npm run gulp -- travis:lint:examples --components NONE_CHANGED
      else
          npm run gulp -- travis:lint:examples --components $(echo $R)
      fi
    `,
    {
      cwd: paths.root,
      stdio: 'inherit',
      env: Object.assign({}, process.env)
    }
  );
  done();
};

export const jest = () =>
  spawn(
    'node',
    [
      '-r',
      '@std/esm',
      './node_modules/.bin/jest',
      '--color',
      '--bail',
      '--ci',
      '--silent',
      '--maxWorkers=2'
    ],
    {
      cwd: paths.root,
      stdio: 'inherit'
    }
  );

export const publishBuild = done => {
  if (!process.env.BUILD_SERVER_HOST_NEW) return done();
  publish((err, res) => {
    if (err) return done(err);
    console.log('Successfully published build', res);
    done();
  });
};

// PR's have this message as well as the "after merge button" commit
export const isMerge = () =>
  process.env.TRAVIS_COMMIT_MESSAGE.match(/^Merge|\(\#\d+\)/g);
export const isTag = () => !!process.env.TRAVIS_TAG;
export const shouldPushToBuildServer = () =>
  (isMerge() || isTag()) && process.env.BUILD_SERVER_HOST_NEW;
