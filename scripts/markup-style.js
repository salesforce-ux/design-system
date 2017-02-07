/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const Either = require('data.either');
const {List, Map} = require('immutable');
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
    'indent_inner_html': true
  });

  const components = path.resolve.bind(path, designSystemPath('components'));

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

const getComments = res =>
  res(glob
  .sync(designSystemPath('**/*.scss'))
  .map(scssPath =>
    fs.readFileSync(scssPath, 'utf-8'))
  .join('\n'));

module.exports = {getComments, getMarkup};
