// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import _ from 'lodash';
import path from 'path';

export const pathToURL = (p) =>
  p.replace(new RegExp(_.escapeRegExp(path.sep), 'g'), '/');

export const pathTrimStart = (p) =>
  _.trimStart(p, path.sep);
