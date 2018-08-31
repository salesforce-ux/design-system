// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
export default class Example extends React.Component {
  render() {
    return this.props.children;
  }
}

// Added custom prop type check for title prop to help explain why it's necessary
Example.propTypes = {
  title: function(props, propName) {
    if (props[propName] === undefined || typeof props[propName] !== 'string') {
      return new Error(
        'Please provide a string for the title of this Example. Required for creating html files used for testing.'
      );
    }
  },
  children: PropTypes.node.isRequired
};
