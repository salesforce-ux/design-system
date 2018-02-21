// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const MDXC = require('mdxc');

const importPattern = /import\s+.*?\s+from\s+['"].*?['"];?/g;

const getMatches = (pattern, string) => {
  const matches = [];
  let match;
  while ((match = pattern.exec(string)) !== null) matches.push(match);
  return matches;
};

module.exports = code => {
  const md = new MDXC({
    linkify: true,
    unwrapped: true
  });
  const imports = getMatches(importPattern, code);
  const elements = md.render(code);
  const tags = Array.from(md.renderer.tags.values()).sort();
  return `
    import React, { createElement } from 'react';
    import Doc, { factories, createTableOfContents } from '../../../shared/components/Doc';
    ${imports.join('\n')}
    const { ${tags.join(',')} } = factories;
    export const getElement = () => createElement(Doc, {}, ${elements});
    export const getContents = () => createTableOfContents(getElement());
  `;
};
