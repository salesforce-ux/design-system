// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Either = require('data.either');
const Task = require('data.task');
const {List, Map} = require('immutable-ext');
const beautify = require('js-beautify');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom/server');

const designSystemPath = path.resolve.bind(path, __dirname, '../ui');

const VALID_EXPORTS = new Set(['preview', 'default', 'states', 'examples']);

const getMarkup = (() => {
  const prettyHTML = html => beautify.html(html, {
    'brace_style': 'end-expand',
    'indent_size': 2,
    'indent_char': ' ',
    'unformatted': [],
    'wrap_line_length ': 78,
    'indent_inner_html': true
  });

  const components = path.resolve.bind(path, designSystemPath('components'));
  const utils = path.resolve.bind(path, designSystemPath('utilities'));

  // path -> Either Error Module
  const tryRequire = p => Either.try(require)(p);

  const toMarkupItem = (id, element) =>
    Array.isArray(element) // states vs default
      ? List(element).map(Map)
      : List.of(Map({ id, element }));

  const exportsToMarkups = exports =>
    Object
    .keys(exports)
    .filter(title => VALID_EXPORTS.has(title))
    .map(title =>
      Map({ title, items: toMarkupItem(title, exports[title]) }));

  // gets the first state right now...
  const requireVariant = (component, variant) =>
    tryRequire(`${components(component, variant, 'example.jsx')}`)
    .orElse(() =>
      tryRequire(`${components(component, 'flavors', variant, 'index.react.example.jsx')}`)
    )
    .orElse(() =>
      tryRequire(`${utils(component, 'flavors', variant, 'index.react.example.jsx')}`)
    )
    .map(exportsToMarkups)
    .map(x => List(x));
  const renderMarkup = c =>
    Either
      .of(c)
      .chain(c =>
        React.isValidElement(c) ? Either.Right(c) : Either.Left('Invalid Component'))
      .chain(Either.try(ReactDOM.renderToStaticMarkup))
      .chain(Either.try(prettyHTML));
  const render = (component, variant) =>
    requireVariant(component, variant)
    .map(sections =>
      sections.map(section =>
        section.update('items', items =>
          items.map(item =>
            item
              .set('markup', renderMarkup(item.get('element'))
                .fold(e => `<div>Error: ${e}</div>`, x => x)
              )
              .delete('element')
          )
        )
      )
    );
  return render;
})();

const getComments = () =>
  new Task((rej, res) =>
    res(glob
    .sync(designSystemPath('**/*.scss'))
    .map(scssPath =>
      fs.readFileSync(scssPath, 'utf-8'))
    .join('\n')));

module.exports = {getComments, getMarkup};
