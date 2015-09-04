/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { cloneDeep, defaults } from 'lodash';
import globals from 'app_modules/global';
import jsYaml from 'js-yaml';

import markdown from 'markdown-it';
const md = markdown({
  html: true,
  linkify: true
});

/**
 * Parse a scss file for $variables
 * This method is very basic and doesn't actually know if the
 * variable is a design property
 *
 * @param {string} scss
 * @return {array}
 */
function getDesignTokens(scss) {
  return [];
}

/**
 * Check of a directory has a file of a specified type
 *
 * @param {string} dir - the directory to look in
 * @param {string} name - the extension of the file
 * @param {function} success - called if an index of the specified extension is found
 * @param {function} error - opposite of success :)
 */
function getFile(dir, name, success, error) {
  const file = path.resolve(__PATHS__.ui, dir, name);
  if (fs.existsSync(file) && _.isFunction(success)) {
    success(file, fs.readFileSync(file));
  }
  else if (_.isFunction(error)) {
    error();
  }
}

/**
 * Check of a directory has an index of a specified type
 *
 * @param {string} p - the directory to look in
 * @param {string} ext - the extension of the index file
 * @param {function} success - called if an index of the specified extension is found
 * @param {function} error - opposite of success :)
 */
function getIndex(dir, ext, success, error) {
  getFile(dir, `index.${ext}`, success, error);
}

/**
 * Add a parsed markdown if a component has an "index.md". Globals
 * subtituted from {{NAME}}.
 *
 * @param {object} component
 */
function addInfo(component) {
  component.info = {};

  function replaceGlobals(string) {
    return string.replace(/\{\{(\w+)\}\}/g, (match, p1) => {
      return globals[p1] || p1;
    });
  }
  function getMarkdown(indexPath) {
    const contents = fs.readFileSync(indexPath).toString();
    return md.render(replaceGlobals(contents));
  }
  function getYaml(indexPath) {
    const contents = fs.readFileSync(indexPath).toString();
    return jsYaml.safeLoad(replaceGlobals(contents));
  }

  getIndex(component.path, 'markup.md', indexPath => {
    component.info.markup = {
      __html: getMarkdown(indexPath)
    };
  });
  getIndex(component.path, 'table.md', indexPath => {
    component.info.table = {
      __html: getMarkdown(indexPath)
    };
  });
  getIndex(component.path, 'table.yml', indexPath => {
    component.info.tableYaml = getYaml(indexPath);
  });
}

/**
 * Add the scss/aura if a component has an "index.scss"
 *
 * @param {object} component
 */
function addStyles(component) {
  component.styles = {};
  getIndex(component.path, 'scss', indexPath => {
    component.styles.scss = _.trim(fs.readFileSync(indexPath).toString()
      // Remove Salesforce license comments
      .replace(/\/\*[\s\S]+?salesforce[\s\S]+?\*\//m, '')
      // Replace #{$css-prefix} with global prefix
      .replace(/#\{\$css-prefix\}/g, globals.cssPrefix)
      // Remove single line comments
      .replace(/\/\/[\s\S]*?(?=\n)/g, ''));
  });
  let cssPath = path.resolve(
    __PATHS__.generated, 'aura/css', component.path, 'index.css'
  );
  if (fs.existsSync(cssPath)) {
    component.styles.aura = _.trim(fs.readFileSync(cssPath).toString());
  }
}

/**
 * Create a new component definition
 *
 * @param {object} component
 * @returns {object}
 */
export default function(component) {
  component = cloneDeep(component);
  addInfo(component);
  component.flavors.forEach(flavor => {
    defaults(flavor, {
      showFormFactors: [],
      dependencies: []
    });
    addInfo(flavor);
    addStyles(flavor);
  });
  return component;
}
