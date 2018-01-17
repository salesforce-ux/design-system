// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

export let ListItem = props => (
  <li
    className={classNames(
      'slds-list__item slds-m-right_large slds-grid',
      props.className
    )}
  >
    <span>To:</span>
    <span className="slds-m-left_xx-small slds-truncate" title={props.title}>
      {props.children}
    </span>
    <span className="slds-m-left_xx-small slds-no-flex"> + 44 more</span>
  </li>
);

export let List = props => (
  <ul>
    <ListItem
      title="Lei Chan"
      className={'slds-truncate_container_' + props.width}
    >
      <a href="javascript:void(0);">Lei Chan</a>
    </ListItem>
    <ListItem
      title="Lei Chan with Long Name"
      className={'slds-truncate_container_' + props.width}
    >
      <a href="javascript:void(0);">Lei Chan with Long Name</a>
    </ListItem>
    <ListItem
      title="Lei Chan with Long Name that might go on for quite some distance futher than you might expect"
      className={'slds-truncate_container_' + props.width}
    >
      <a href="javascript:void(0);">
        Lei Chan with Long Name that might go on for quite some distance futher
        than you might expect
      </a>
    </ListItem>
  </ul>
);

export let examples = [
  {
    id: 'fluid',
    label: 'Single line',
    element: (
      <div className="slds-size_1-of-2">
        <p
          className="slds-truncate"
          title="Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."
        >
          Long text field with many lines and truncation will look like this.
          Even though the text might go on for ages and ages.
        </p>
      </div>
    )
  },
  {
    id: 'nested-grids',
    label: 'Single line within nested grid containers',
    element: (
      <div className="slds-grid" style={{ width: '200px' }}>
        <div className="slds-grid slds-has-flexi-truncate">
          <p
            className="slds-truncate"
            title="Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."
          >
            Long text field with many lines and truncation will look like this.
            Even though the text might go on for ages and ages.
          </p>
        </div>
      </div>
    )
  },
  {
    id: '25%',
    label: 'Max-width 25%',
    element: <List width="25" />
  },
  {
    id: '33%',
    label: 'Max-width 33%',
    element: <List width="33" />
  },
  {
    id: '50%',
    label: 'Max-width 50%',
    element: <List width="50" />
  },
  {
    id: '66%',
    label: 'Max-width 66%',
    element: <List width="66" />
  },
  {
    id: '75%',
    label: 'Max-width 75%',
    element: <List width="75" />
  }
];
