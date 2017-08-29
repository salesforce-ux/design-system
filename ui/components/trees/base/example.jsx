// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import SvgIcon from '../../../shared/svg-icon';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

let TreeItem = props => (
  <div className="slds-tree__item">
    <ButtonIcon
      aria-hidden="true"
      assistiveText="Expand Tree Item"
      className="slds-button_icon slds-m-right_x-small slds-is-disabled"
      iconClassName="slds-button__icon_small"
      symbol="chevronright"
      tabIndex="-1"
      title="Expand Tree Item"
    />
    <span className="slds-truncate" title="Tree Item">
      Tree Item
    </span>
    {props.children}
  </div>
);

let TreeBranch = props => (
  <div className="slds-tree__item">
    <ButtonIcon
      aria-hidden="true"
      assistiveText="Expand Tree Branch"
      className="slds-button_icon slds-m-right_x-small"
      iconClassName="slds-button__icon_small"
      symbol="chevronright"
      tabIndex="-1"
      title="Expand Tree Branch"
    />
    <span className="slds-truncate" title="Tree Branch">
      Tree Branch
    </span>
  </div>
);

let Pill = props => (
  <span className="slds-pill slds-shrink-none slds-align-middle">
    <span className="slds-pill__label">Label</span>
  </span>
);

let AdditionalItems = props => (
  <li
    aria-expanded="true"
    aria-label="Tree Branch"
    aria-level="2"
    id="tree0-node1-1"
    role="treeitem"
  >
    <TreeBranch />
    <ul role="group">
      <li role="treeitem" aria-level="3">
        <TreeItem />
      </li>
      <li role="treeitem" aria-level="3">
        <TreeItem />
      </li>
      <li
        role="treeitem"
        aria-level="3"
        aria-expanded="false"
        aria-label="Tree Branch"
      >
        <TreeBranch />
        <ul role="group">
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
        </ul>
      </li>
      <li
        role="treeitem"
        aria-level="3"
        aria-expanded="true"
        aria-label="Tree Branch"
      >
        <TreeBranch />
        <ul role="group">
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
          <li
            role="treeitem"
            aria-level="4"
            aria-expanded="true"
            aria-label="Tree Branch"
          >
            <TreeBranch />
            <ul role="group">
              <li role="treeitem" aria-level="5">
                <TreeItem />
              </li>
              <li role="treeitem" aria-level="5">
                <TreeItem />
              </li>
              <li role="treeitem" aria-level="5">
                <TreeItem />
              </li>
            </ul>
          </li>
          <li role="treeitem" aria-level="4">
            <TreeItem />
          </li>
        </ul>
      </li>
      <li role="treeitem" aria-level="3">
        <TreeItem />
      </li>
    </ul>
  </li>
);

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Default = props => (
  <div className="slds-tree_container" role="application">
    <h4 className="slds-text-title_caps" id="treeheading">
      Tree Group Header
    </h4>

    <ul className="slds-tree" role="tree" aria-labelledby="treeheading">
      <li
        role="treeitem"
        aria-level="1"
        tabIndex={!props.isSelected ? '0' : null}
      >
        <TreeItem>{props.itemContent}</TreeItem>
      </li>
      <li
        role="treeitem"
        aria-level="1"
        aria-expanded={!!props.isExpanded}
        aria-label="Tree Branch"
      >
        <TreeBranch />
        <ul role="group">
          <li
            role="treeitem"
            aria-level="2"
            aria-selected={!!props.isSelected}
            tabIndex={props.isSelected ? '0' : null}
          >
            <TreeItem />
          </li>
          {props.additionalItems}
        </ul>
      </li>
      <li
        role="treeitem"
        aria-level="1"
        aria-expanded="false"
        aria-label="Tree Branch"
      >
        <TreeBranch />
        <ul role="group">
          <li role="treeitem" aria-level="2">
            <TreeItem />
          </li>
        </ul>
      </li>
      <li role="treeitem" aria-level="1">
        <TreeItem>{props.itemContent}</TreeItem>
      </li>
    </ul>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Default />;

export let states = [
  {
    id: 'expanded',
    label: 'Expanded',
    element: <Default isExpanded />
  },
  {
    id: 'selected',
    label: 'Item Selected',
    element: <Default isExpanded isSelected />
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: <Default isExpanded additionalItems={<AdditionalItems />} />
  }
];
