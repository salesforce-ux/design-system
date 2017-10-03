// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import allExamples from './all-examples';

class Example extends React.Component {
  componentWillMount() {
    allExamples.addExample({
      title: this.props.title,
      component: this.props.children
    });
  }

  render() {
    return this.props.children;
  }
}

export default Example;
