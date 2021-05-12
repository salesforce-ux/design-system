// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

// Code in this file taken and modified from https://github.com/dtothefp/gulp-yaml-validate/blob/master/task/index.js

import through from 'through2';
import path from 'path';
import gutil, { PluginError } from 'gulp-util';
import jsyaml from 'js-yaml';
import extend from 'extend';
import BufferStreams from 'bufferstreams';
const PLUGIN_NAME = 'validate-yaml';

const yaml2json = (buffer, options) => {
  const htmlRe = /(<([^>]+)>)/gi;
  let contents = buffer.toString('utf8');
  if (options.html && htmlRe.test(contents)) {
    throw new Error('YML cannot contain HTML');
  } else {
    let ymlDocument = options.safe
      ? jsyaml.safeLoad(contents)
      : jsyaml.load(contents);

    return Buffer.from(
      JSON.stringify(ymlDocument, options.replacer, options.space)
    );
  }
};

export default function(pluginOptions) {
  var options = extend(
    {
      safe: false,
      html: false,
      replacer: null,
      space: null
    },
    pluginOptions
  );

  return through.obj(function(file, enc, cb) {
    const self = this;
    if (file.isBuffer()) {
      if (file.contents.length === 0) {
        let msg = `File ${path.dirname(file.path)} is empty`;
        this.emit('error', new PluginError(PLUGIN_NAME, msg));
        return cb();
      }
      try {
        file.contents = yaml2json(file.contents, options);
        file.path = gutil.replaceExtension(file.path, '.json');
      } catch (error) {
        let msg = `${error.message} => ${file.path}`;
        this.emit('error', new PluginError(PLUGIN_NAME, msg));
        return cb();
      }
    } else if (file.isStream()) {
      file.contents = file.contents.pipe(
        new BufferStreams((err, buf, cb) => {
          if (err) {
            self.emit('error', new PluginError(PLUGIN_NAME, err.message));
          } else {
            if (buf.length === 0) {
              let msg = `File ${path.dirname(file.path)} is empty`;
              let error = new PluginError(PLUGIN_NAME, msg);
              self.emit('error', error);
              cb(error);
            } else {
              try {
                file.path = gutil.replaceExtension(file.path, '.json');
                cb(null, yaml2json(buf, options));
              } catch (error) {
                let msg = `${error.message} => ${file.path}`;
                self.emit('error', new PluginError(PLUGIN_NAME, msg));
                cb(error);
              }
            }
          }
        })
      );
    }
    this.push(file);
    cb();
  });
}
