import React from 'react';
import PropTypes from 'prop-types';

// Prevents React warning about javascript:void(0) usage
// https://github.com/facebook/react/pull/15047
const EmptyLink = props => (
  <a href="#" onClick={e => e.preventDefault()}>
    {props.children}
  </a>
);

EmptyLink.propTypes = {
  children: PropTypes.string
};

export default EmptyLink;
