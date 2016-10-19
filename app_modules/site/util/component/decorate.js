/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import yaml from 'js-yaml';
import markdown from 'markdown-it';
import { renderMarkdownAndReplaceGlobals, replaceGlobals } from 'app_modules/site/util/component/render-markdown';

import globals from 'app_modules/global';

/**
 * Check of a directory has a file of a specified type
 *
 * @param {string} dir - the directory to look in
 * @param {string} name - the extension of the file
 * @param {function} success - called if an index of the specified extension is found
 * @param {function} error - opposite of success :)
 */
const getFile = (dir, name, success, error) => {
  const file = path.resolve(__PATHS__.ui, dir, name);
  if (fs.existsSync(file) && _.isFunction(success)) {
    success(file, fs.readFileSync(file));
  }
  else if (_.isFunction(error)) {
    error();
  }
};

/**
 * Check of a directory has an index of a specified type
 *
 * @param {string} p - the directory to look in
 * @param {string} ext - the extension of the index file
 * @param {function} success - called if an index of the specified extension is found
 * @param {function} error - opposite of success :)
 */
const getIndex = (dir, ext, success, error) =>
  getFile(dir, `index.${ext}`, success, error);

/**
 * Add a parsed markdown if a component has an "index.md". Globals
 * subtituted from {{NAME}}.
 *
 * @param {object} component
 */
const addInfo = component => {
  component.info = {};

  const getMarkdown = indexPath =>
    renderMarkdownAndReplaceGlobals(fs.readFileSync(indexPath).toString());

  const getYaml = indexPath =>
    yaml.safeLoad(replaceGlobals(fs.readFileSync(indexPath).toString()));

  getIndex(component.path, 'markup.md', indexPath => {
    component.info.markup = {
      __html: getMarkdown(indexPath)
    };
  });

  getIndex(component.path, 'table.yml', indexPath => {
    component.info.tableYaml = getYaml(indexPath);
  });
};

/**
 * Create a new component definition
 *
 * @param {object} component
 * @returns {object}
 */
export default component => {
  addInfo(component);
  component.flavors.forEach(flavor => {
    _.defaults(flavor, {
      showFormFactors: [],
      dependencies: []
    });
    addInfo(flavor);
  });
  return component;
};
