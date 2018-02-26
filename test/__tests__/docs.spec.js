// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import fs from 'fs-extra';
import { sync as glob } from 'glob';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { getDoc, CodeBlock, CodeView, Example } from '../../.generated/docs';

import { beautify } from '../../shared/utils/beautify';
import { flattenElement, mapElement } from '../../shared/utils/react';

const placeInExampleFolderForLinting = example => {
  const filename = `${example.title.replace(/\W/g, '_')}.html`;
  const filepath = path.resolve(__dirname, '../../', '.generated', 'examples');
  fs.outputFileSync(
    path.join(filepath, filename),
    beautify(ReactDOM.renderToStaticMarkup(example.element))
  );
};

glob('**/docs.mdx', {
  cwd: path.resolve(__dirname, '../../ui')
}).forEach(filepath => {
  const { getElement } = getDoc(`./${filepath}`);
  const examples = flattenElement(getElement())
    .filter(e => e.type === Example)
    .map(e => {
      return {
        title: e.props.title,
        element: mapElement(e.props.children, e => {
          const fragment = React.createElement.apply(
            React,
            [React.Fragment, null].concat(
              React.Children.toArray(e.props.children)
            )
          );
          if (e.type === CodeBlock) return fragment;
          if (e.type === CodeView) return fragment;
          return e;
        })
      };
    })
    .forEach(placeInExampleFolderForLinting);
});

// jest needs a test.
it('generates mdx files and writes examples for linting', () => {});
