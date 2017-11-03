// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
const React = require('react');

const elements = [
  'p',
  'div',
  'a',
  'em',
  'strong',
  'ol',
  'ul',
  'li',
  'code',
  'blockquote',
  'pre',
  'tr',
  'td',
  'th',
  'table',
  'thead',
  'tbody'
];

const headingElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const elementFactories = elements.map(el => `${el}: El('${el}')`).join(',');
const headingFactories = headingElements
  .map(el => `${el}: HeadingEl('${el}')`)
  .join(',');

const addDocClass = className => ['doc', className].filter(x => x).join(' ');

const El = el => (props, ...kids) => {
  const className = addDocClass(props.className);
  return React.createElement(el, Object.assign(props, { className }), kids);
};

module.exports = () => {
  const toc = [];
  const getToc = () => toc;

  const last = xs => xs[xs.length - 1];

  const findChildHeadingByLevel = (level, heading = {}) =>
    heading.headingLevel < level
      ? findChildHeadingByLevel(level, last(heading.children)) || heading
      : null;

  const HeadingEl = el => (props, ...kids) => {
    const className = addDocClass(props.className);
    const [_, headingLevel] = el.split('h');

    const lastParentHeading =
      toc.length && findChildHeadingByLevel(headingLevel, last(toc));
    const item = { id: props.id, title: kids[0], headingLevel, children: [] };

    lastParentHeading ? lastParentHeading.children.push(item) : toc.push(item);

    return React.createElement(
      el,
      Object.assign(props, { className }),
      kids,
      React.createElement(
        'a',
        {
          className: 'doc doc-anchor',
          href: `#${props.id}`,
          ariaLabel: 'Jump to section'
        },
        '#'
      )
    );
  };

  return {
    HeadingEl,
    El,
    headingFactories,
    elementFactories,
    addDocClass,
    toc,
    addDocClass,
    last,
    findChildHeadingByLevel
  };
};
