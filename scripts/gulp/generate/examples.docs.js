// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import fs from 'fs-extra';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import webpack from 'webpack';

import { beautify } from '../../../shared/utils/beautify';
import { flattenElement, mapElement } from '../../../shared/utils/react';

import paths from '../../helpers/paths';

const placeInExampleFolderForLinting = example => {
  const filename = `${example.title.replace(/\W/g, '_')}.html`;
  const filepath = path.resolve(paths.generated, 'examples');
  fs.outputFileSync(
    path.join(filepath, filename),
    beautify(ReactDOM.renderToStaticMarkup(example.element))
  );
};

export default async () => {
  await new Promise((resolve, reject) => {
    const compilePath = path.resolve.bind(path, paths.root, 'scripts/compile');
    const config = require(compilePath('webpack.config'))
      .set('entry', compilePath('entry.docs'))
      .setIn(['output', 'libraryTarget'], 'commonjs')
      .setIn(['output', 'path'], paths.generated)
      .setIn(['output', 'filename'], 'docs.js')
      .updateIn(['module', 'rules'], rules =>
        rules.map(rule =>
          rule.update('use', use =>
            use.filter(u => u.get('loader') !== 'style-loader')
          )
        )
      )
      .toJS();
    webpack(config, (err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) {
        return reject(new Error(stats.toJson().errors));
      }
      return resolve(stats);
    });
  });
  const { getDoc, CodeBlock, CodeView, Example } = require(path.resolve(
    paths.generated,
    'docs'
  ));
  getDoc.keys().forEach(key => {
    const { getElement } = getDoc(key);
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
};
