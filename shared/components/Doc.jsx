// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import TableOfContents from './TableOfContents';
import '../styles/doc.scss';

// This is a stub. We felt it was important to have a common parent around the magic mdx component.
// it also brings in doc style...
export default class extends React.Component {
  render() {
    return (
      <div className="slds-grid slds-wrap">
        <div
          className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_9-of-12"
          {...this.props}
        />
        <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_3-of-12">
          <TableOfContents data={this.props.tableOfContentsData} />
        </div>
      </div>
    );
  }
}
