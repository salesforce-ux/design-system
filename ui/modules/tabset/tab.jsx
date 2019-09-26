// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import Shadow from '../../shared/shadow';

class Tab extends Component {
  render() {
    return (
      <Shadow.on name="tab">
        <div
          className="lwc-tabset_content"
          aria-labelledby={this.props.labelledby}
        >
          {this.props.children}
        </div>
      </Shadow.on>
    );
  }
}

export default Tab;
