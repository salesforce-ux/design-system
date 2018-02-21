// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import fs from 'fs-extra';
import { sync as glob } from 'glob';
import mkdirp from 'mkdirp';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { getDoc, CodeBlock, CodeView, Example } from '../../.generated/docs';

import { beautify } from '../../shared/utils/beautify';
import { flattenElement, mapElement } from '../../shared/utils/react';

import createHelpers from '../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname, 6868);

const placeInExampleFolderForLinting = example => {
  const filename = `${example.title.replace(/\W/g, '_')}.html`;
  const filepath = path.resolve(__dirname, '../../', '.generated', 'examples');
  fs.outputFileSync(
    path.join(filepath, filename),
    beautify(ReactDOM.renderToStaticMarkup(example.element))
  );
};

// Render each to fill allexample cache in the example component
glob('ui/**/docs.mdx')
  .slice(0, 1)
  .forEach(filepath => {
    const { getElement } = getDoc(filepath.replace(/^ui/, '.'));
    const examples = flattenElement(getElement())
      .filter(e => e.type === Example)
      .map(e => ({
        title: e.props.title,
        element: mapElement(e.props.children, e => {
          if (e.type === CodeBlock) return null;
          if (e.type === CodeView) {
            return React.cloneElement(e, {
              hideCodeBlock: true
            });
          }
          return e;
        })
      }))
      .forEach(placeInExampleFolderForLinting);
  });

// jest needs a test.
it('generates mdx files and writes examples for linting', () => {});
