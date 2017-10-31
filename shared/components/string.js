// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

export const upperFirst = s => s.slice(0, 1).toUpperCase() + s.slice(1);

export const toBase16 = str =>
  str
    .split('')
    .map(s => s.charCodeAt(0))
    .map(i => i.toString(16))
    .join('');
