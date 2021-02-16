import React from 'react';
import PropTypes from 'prop-types';

// Prevents React warning about javascript:void(0) usage
// https://github.com/facebook/react/pull/15047
const EmptyLink = ({ children, title }) => (
  <a href="#" onClick={e => e.preventDefault()} title={title}>
    {children}
  </a>
);

EmptyLink.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string
};

export default EmptyLink;
