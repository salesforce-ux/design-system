// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import cx from 'classnames';
import get from 'lodash.get';
import React from 'react';

import '../styles/doc.scss';
import { flattenElement, mapElement } from '../utils/react';

import Example from './Example';

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
      [type]: (props, ...children) => {
        if (/h[1-6]/.test(type)) {
          children.push(createAnchor(type, props.id));
        }
        return React.createElement(
          type,
          {
            ...props,
            className: cx('doc', props.className)
          },
          ...children
        );
      }
    }),
  {}
);

export const createTableOfContents = (() => {
  const createNode = (level, element) => {
    const { children, id } = element.props;
    return {
      children: [],
      id,
      level,
      title:
        typeof children === 'string'
          ? children
          : Array.isArray(children) ? children[0] : children
    };
  };
  return element => {
    let keyPath = [];
    let tree = {
      level: 0,
      children: []
    };
    flattenElement(mapElement(element, e => (e.type === Example ? null : e)))
      .filter(e => /^h[1-6]/.test(e.type) && e.props.id)
      .forEach(element => {
        let level = parseInt(element.type[1], 10);
        let levelLast = get(tree, keyPath.concat(['level']));
        if (level <= levelLast) {
          while (keyPath.length) {
            const heading = get(tree, keyPath);
            keyPath = keyPath.slice(0, -2);
            if (heading.level === level) break;
          }
        }
        const children = get(tree, keyPath.concat(['children']));
        children.push(createNode(level, element));
        keyPath.push('children', children.length - 1);
      });
    return tree;
  };
})();

export default class Doc extends React.Component {
  render() {
    return <div {...this.props} />;
  }
}
