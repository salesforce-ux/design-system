// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import CodeView from '../../../../shared/components/CodeView';
import style from './Grid.scss';
import classNames from 'classnames';

export const Column = props => {
  let count = props.count + 1;
  return (
    <div className={classNames('slds-col', props.className)}>
      {props.count >= 0 ? <span>{count}</span> : <span>{props.children}</span>}
    </div>
  );
};

class Grid extends Component {
  render() {
    const children = [];
    for (var i = 0; i < this.props.columns; i += 1) {
      children.push({ key: i, count: i });
    }
    return (
      <div
        className={classNames(
          'simple-grid',
          this.props.small && 'simple-grid_small',
          this.props.bareGrid && 'simple-grid_bare-columns'
        )}
      >
        <CodeView>
          <div
            className={classNames('slds-grid', this.props.className)}
            style={this.props.style}
          >
            {this.props.columns
              ? children.map(props => <Column key={props.key} {...props} />)
              : this.props.children}
          </div>
        </CodeView>
      </div>
    );
  }
}

export default Grid;
