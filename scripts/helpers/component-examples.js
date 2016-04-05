/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import Status from 'app_modules/site/util/component/status';
import {access, requireFile} from './sync_fs';
import path from 'path';
import {paths} from './paths';
//import { generateUI } from './scripts/gulp/generate-ui';


//Helpers
const id = x => x;
const assign = (x, y) => Object.assign({}, x, y);


// Private
// ==========================
const getExamplePath = flavor =>
  path.resolve(paths.ui, `${flavor.path}/index.react.example.jsx`);

const addExamplePath = flavor =>
  access(getExamplePath(flavor))
    .map(ex_path => assign(flavor, {examplePath: ex_path}))
    .fold(() => flavor, id);

const toExample = (ex, k) =>
  [{ id: k, element: ex[k] }];

const normalizeExamples = file =>
  file.preview ? toExample(file, 'preview')
    : file.default ? toExample(file, 'default')
      : file.states;

const getExamples = flavor =>
  requireFile(flavor.examplePath)
    .map(normalizeExamples)
    .fold(() => [], id);

const addExamples = flavor =>
  assign(flavor, {examples: getExamples(flavor)});

const flattenUtilsWithComponents = scheme =>
  scheme.reduce((acc, category) =>
    acc.concat(category.components) , []);


// Public
// ==========================
export const ui = schema =>
  flattenUtilsWithComponents(schema)
    .map(c => assign(c, { flavors: c.flavors.map(addExamplePath)}))
    .map(c => assign(c, { status: Status.or(c.flavors.map(f => f.status)) }));

export const compExamples = comps =>
  comps.map(c => assign(c, { flavors: c.flavors.map(addExamples)}));
