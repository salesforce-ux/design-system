// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Either = require('data.either');
const {Left, Right} = Either;
const Task = require('data.task');
const I = require('immutable-ext');
const beautify = require('js-beautify');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom/server');

const designSystemPath = path.resolve.bind(path, __dirname, '../ui');

const VALID_MARKUP_EXPORTS = new Set(['preview', 'default', 'states', 'examples']);
const NOT_FOUND_ERROR = Symbol('NOT_FOUND_ERROR');

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
  const tryRequire = p =>
    fs.existsSync(p)
      ? Either.try(require)(p)
      : Left(
        Object.assign(
          new Error(`Module Not Found: ${p}`), {
            [NOT_FOUND_ERROR]: true
          })
      );

  const toMarkupItem = (id, element) =>
    Array.isArray(element) // states vs default
      ? I.List(element).map(I.Map)
      : I.List.of(I.Map({ id, element }));

  const exportsToMarkups = exports =>
    I.List(Object.keys(exports))
    .filter(title =>
      VALID_MARKUP_EXPORTS.has(title))
    .map(title =>
      I.Map({ title, items: toMarkupItem(title, exports[title]) }));

  // Needs change of type signature to know if
  // util or not. Multiple places use this so check
  // everything for now, but could lead to name conflicts
  const requireChain = (component, variant) =>
    I.List.of(
      components(component, variant, 'example.jsx'),
      components(component, 'flavors', variant, 'index.react.example.jsx'),
      utils(component, 'example.jsx'),
      utils(component, 'index.react.example.jsx')
    );

  const requireVariant = (component, variant) =>
    requireChain(component, variant)
    .reduce((acc, x) =>
      acc
      .fold(e => e[NOT_FOUND_ERROR]
                 ? tryRequire(x)
                 : Left(e),
            x => Right(x))
    , Left({[NOT_FOUND_ERROR]: true}));

  const renderMarkup = c =>
    Either
      .of(c)
      .chain(c =>
        React.isValidElement(c) ? Right(c) : Left('Invalid Component'))
      .chain(Either.try(ReactDOM.renderToStaticMarkup))
      .chain(Either.try(prettyHTML));
  const render = (component, variant) => {
    const variantModule = requireVariant(component, variant);
    // If the variant module exports a "Context" React Component, convert it to markup
    // This can be used by consumers of the example markup (such as the site)
    // to wrap the example markup in some presentation context that is not actually
    // part of the component
    const context = variantModule
      .chain(m => {
        if (m.hasOwnProperty('Context')) {
          // Create a unique identifier to render in place of {props.children}
          const children = 'children'
            .split('')
            .map(s => s.charCodeAt(0))
            .map(i => i.toString(16))
            .join('');
          // Render the markup and then split it on the identifier created above
          const markup = I.List(
              ReactDOM.renderToStaticMarkup(
                React.createElement(m.Context, null, children)
              )
              .split(children)
          );
          // If successful, we should have a list with two items:
          //   [0] string of markup that should be prepended to the actual component markup
          //   [1] string of markup that should be appended to the actual component markup
          // If there were not two items, that probably means that <Context />
          // did not use {props.children} anywhere in the render() function
          return markup.count() === 2
            ? Right(markup)
            : Left();
        }
        return Left();
      })
      .getOrElse(I.List());
    return variantModule
      .map(exportsToMarkups)
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
      )
      .map(sections =>
        I.Map({
          context,
          sections
        })
      );
  };
  return render;
})();

const getComments = () =>
  new Task((rej, res) =>
    res(glob
    .sync(designSystemPath('**/*.scss'))
    .map(scssPath =>
      fs.readFileSync(scssPath, 'utf-8'))
    .join('\n')));

module.exports = {
  NOT_FOUND_ERROR,
  getComments,
  getMarkup
};
