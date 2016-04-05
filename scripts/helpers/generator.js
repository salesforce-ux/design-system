import './setup';
import path from 'path';
import React from 'react';
import beautify from  'js-beautify';
import Scheme from 'app_modules/ui/util/scheme';

import { renderToStaticMarkup } from 'react-dom/server';
import { ui, compExamples } from './component-examples';
import { paths } from './paths';
import { mkdir, writeFile, readFile } from './sync_fs';

const scheme = Scheme({ path: paths.ui }).generate();

const prettyHTML = html => beautify.html(html, {
  'indent_size': 2,
  'indent_char': ' ',
  'unformatted': ['a'],
  'wrap_line_length ': 78,
  'indent_inner_html': true
});

const getName = (component, flavor, example) =>
  `${component.id}_${flavor.id}_${example.id}`;

const getPath = (dir, name) =>
  path.join(dir, `${name}.html`);

const toHtml = el =>
  prettyHTML(renderToStaticMarkup(el));

const toMap = name =>
  ({[name]: `${name}.html`});

const writeExampleFiles = dir =>
  compExamples(ui(scheme)).reduce((acc, comp) =>
    comp.flavors.reduce((acc, flavor) =>
      flavor.examples.reduce((acc, ex) => {
        const name = getName(comp, flavor, ex);
        return writeFile(getPath(dir, name), toHtml(ex.element))
                .fold(() => acc,
                      () => Object.assign(acc, toMap(name)));
      }
      , acc),
      acc),
    {});

export const generate = dir =>
  mkdir(dir)
    .fold(() => writeExampleFiles(dir),
          () => writeExampleFiles(dir));
