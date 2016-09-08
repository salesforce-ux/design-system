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
import glob from 'glob';
import yaml from 'js-yaml';
import _ from 'lodash';

import { pathTrimStart } from 'app_modules/util/string';

const createTitle = str => _.map(_.words(str), w => _.capitalize(w)).join(' ');

export default props => {
  return _.assign({
    generate () {
      return glob.sync(path.resolve(this.path, '*/config.yml'))
        .map(this.getConfig, this)
        .map(config => {
          config = _.defaults(config, {
            components: []
          });
          return _.merge(config, {
            components: this.getComponents(config)
          });
        });
    },
    getConfig (configPath) {
      let id = path.basename(path.dirname(configPath));
      let title = createTitle(id);
      let config = yaml.safeLoad(fs.readFileSync(configPath).toString());
      let localPath = path.dirname(configPath)
        .replace(this.path, '');
      return _.merge({}, {
        id,
        title,
        path: pathTrimStart(localPath)
      }, config);
    },
    getComponents (categoryConfig) {
      return categoryConfig.components
        .map(name => path.resolve(
          this.path, categoryConfig.path, name, 'config.yml'
        ))
        .map(this.getConfig, this)
        .map(config => {
          config = _.defaults(config, {
            uid: `${categoryConfig.id}-${config.id}`,
            flavors: [],
            classBase: config.id
          });
          return _.merge(config, {
            flavors: this.getFlavors(config)
          });
        });
    },
    getFlavors (componentConfig) {
      return componentConfig.flavors
        .map(name => path.resolve(
          this.path, componentConfig.path, 'flavors', name, 'config.yml'
        ))
        .map(this.getConfig, this)
        .map(config => {
          config = _.defaults(config, {
            uid: `${componentConfig.uid}-${config.id}`,
            classBase: componentConfig.classBase
          });
          return config;
        });
    }
  }, props);
};
