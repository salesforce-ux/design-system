// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Either = require("data.either");
const { Left, Right } = Either;
const I = require("immutable-ext");
const fs = require("fs");
const path = require("path");
const paths = require("../helpers/paths");

const designSystemPath = path.resolve.bind(path, paths.ui);

const VALID_MARKUP_EXPORTS = new Set([
  "preview",
  "default",
  "states",
  "examples"
]);
const NOT_FOUND_ERROR = Symbol("NOT_FOUND_ERROR");

const components = path.resolve.bind(path, designSystemPath("components"));
const utilities = path.resolve.bind(path, designSystemPath("utilities"));

// path -> Either Error Module
const tryRequire = p =>
  fs.existsSync(p)
    ? Either.try(require)(p)
    : Left(
        Object.assign(new Error(`Module Not Found: ${p}`), {
          [NOT_FOUND_ERROR]: true
        })
      );

const toShowcaseItem = (id, element, Context) =>
  Array.isArray(element) // states vs default
    ? I.List(element).map(I.Map).map(i => i.update('Context', c => c || Context))
    : I.List.of(I.Map({ id, element, Context }));

const normalizeExports = exports =>
  I.List(Object.keys(exports))
    .filter(title => VALID_MARKUP_EXPORTS.has(title))
    .map(title =>
      I.Map({ title, items: toShowcaseItem(title, exports[title], exports.Context) })
    );

const requireVariant = (component, variant, isUtil) =>
  (isUtil
  ? tryRequire(utilities(component, "example.jsx"))
  : tryRequire(components(component, variant, "example.jsx")))
  .orElse(() => Right(I.List()));

const removeExamples = sections =>
  sections.map(section =>
    section.update("items", items =>
      items.map(item => item.delete("element").delete("Context"))
    )
  );

module.exports = (component, variant, isUtil, keepExamples = false) => {
  return requireVariant(component, variant, isUtil)
    .map(normalizeExports)
    .map(sections => keepExamples ? sections : removeExamples(sections));
};
