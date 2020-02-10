import React from 'react';
import PropTypes from 'prop-types';

const elements = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

function Heading({ level, children, ...props }) {
  return React.createElement(elements[level] || elements[2], props, children);
}

Heading.propTypes = {
  level: PropTypes.oneOf(Object.keys(elements)),
  children: PropTypes.node
};

export default Heading;
