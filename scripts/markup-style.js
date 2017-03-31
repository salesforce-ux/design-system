// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Either = require('data.either');
const Task = require('data.task');
const Immutable = require('immutable-ext');
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
      : Either.Left(
        Object.assign(
          new Error(`Module Not Found: ${p}`), {
            [NOT_FOUND_ERROR]: true
          })
      );

  const toMarkupItem = (id, element) =>
    Array.isArray(element) // states vs default
      ? Immutable.List(element).map(Immutable.Map)
      : Immutable.List.of(Immutable.Map({ id, element }));

  const exportsToMarkups = exports =>
    Immutable.List(Object.keys(exports))
    .filter(title =>
      VALID_MARKUP_EXPORTS.has(title))
    .map(title =>
      Immutable.Map({ title, items: toMarkupItem(title, exports[title]) }));

  // gets the first state right now...
  const requireVariant = (component, variant) =>
    tryRequire(`${components(component, variant, 'example.jsx')}`)
    .orElse(error =>
      error[NOT_FOUND_ERROR]
        ? tryRequire(`${components(component, 'flavors', variant, 'index.react.example.jsx')}`)
        : Either.Left(error)
    )
    .orElse(error =>
      error[NOT_FOUND_ERROR]
        ? tryRequire(`${utils(component, 'flavors', variant, 'index.react.example.jsx')}`)
        : Either.Left(error)
    );
  const renderMarkup = c =>
    Either
      .of(c)
      .chain(c =>
        React.isValidElement(c) ? Either.Right(c) : Either.Left('Invalid Component'))
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
          const markup = Immutable.List(
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
            ? Either.Right(markup)
            : Either.Left();
        }
        return Either.Left();
      })
      .getOrElse(Immutable.List());
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
        Immutable.Map({
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
