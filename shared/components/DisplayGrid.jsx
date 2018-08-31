// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import DisplayColumn from './DisplayColumn';

class DisplayGrid extends React.Component {
  render() {
    return (
      <div className="slds-grid slds-grid_pull-padded slds-wrap slds-gutters">
        {this.props.children}
      </div>
    );
  }
}

DisplayGrid.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props.children)
      .every(child => child.type === DisplayColumn)
      ? null
      : new Error(
          `${componentName} children should be of type ${DisplayColumn.name}.`
        )
};

export default DisplayGrid;
