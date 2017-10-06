// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import path from 'path';
import fs from 'fs';
import { sync as glob } from 'glob';

import React from 'react';
import ReactDOM from 'react-dom/server';

import createHelpers from '../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);
const { Docs } = require('../../.generated/docs.js');
const { beautify } = require('../../shared/utils/beautify.js');
const mkdirp = require('../../shared/utils/mkdirp.js');

glob('ui/**/docs.mdx').forEach(filepath => {
  const component = Docs.req(filepath.replace(/^ui/, '.'));
  ReactDOM.renderToStaticMarkup(component.default());
});

const createVrt = example =>
  it(example.title, () => matchesMarkupAndStyle(example.component));

const placeInExampleFolderForLinting = example => {
  const filename = `${example.title.replace(/\W/g, '_')}.html`;
  const filepath = path.resolve(__dirname, '../../', '.generated', 'examples');
  mkdirp(filepath);
  fs.writeFileSync(
    path.join(filepath, filename),
    beautify(ReactDOM.renderToStaticMarkup(example.component))
  );
};

const allExamples = Docs.allExamples.default.getExamples();
allExamples.forEach(createVrt);
allExamples.forEach(placeInExampleFolderForLinting);
