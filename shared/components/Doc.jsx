// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import cx from 'classnames';

import '../styles/doc.scss';

export const createAnchor = (type, id) =>
  React.createElement(
    'a',
    {
      'aria-label': 'Jump to section',
      className: 'doc doc-anchor',
      'data-level': type[1],
      href: `#${id}`
    },
    '#'
  );

export const tags = [
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
  'tbody',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
];

export const factories = tags.reduce(
  (factories, type) =>
    Object.assign({}, factories, {
      [type]: (props, children) =>
        React.createElement(
          type,
          {
            ...props,
            className: cx('doc', props.className)
          },
          ...React.Children.toArray(children),
          /h[1-6]/.test(type) ? createAnchor(type, props.id) : null
        )
    }),
  {}
);

export default class Doc extends React.Component {
  render() {
    return <div {...this.props} />;
  }
}
