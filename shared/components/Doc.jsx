// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import '../styles/doc.scss';

// This is a stub. We felt it was important to have a common parent around the magic mdx component.
// it also brings in doc style...
export default class extends React.Component {
  render() {
    return <div {...this.props} className="🎉" />;
  }
}
