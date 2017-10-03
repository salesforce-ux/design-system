// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import path from 'path';
import { sync as glob } from 'glob';

import React from 'react';
import ReactDOM from 'react-dom/server';

import createHelpers from '../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);
const { Docs } = require('../../.generated/docs.js');

glob('ui/**/docs.mdx').forEach(filepath => {
  const component = Docs.req(filepath.replace(/^ui/, '.'));
  ReactDOM.renderToStaticMarkup(component.default());
});

const allExamples = Docs.allExamples.default.getExamples();
allExamples.forEach(example => {
  it(example.title, () => matchesMarkupAndStyle(example.component));
});
