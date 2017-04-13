// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import SvgIcon from 'app_modules/ui/svg-icon';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let TreeItem = props =>
<div className="slds-tree__item">
  <ButtonIcon
    disabled
    className="slds-button--icon slds-m-right--x-small slds-is-disabled"
    iconClassName="slds-button__icon--small"
    symbol="chevronright"
    assistiveText="Toggle"
    title="Toggle" />
  <a href="javascript:void(0);" tabIndex="-1" role="presentation" className="slds-truncate" title="Tree Item">Tree Item</a>
  {props.children}
</div>;

let TreeBranch = props =>
<div className="slds-tree__item">
  <ButtonIcon
    aria-controls={props.ariaControls}
    className="slds-button--icon slds-m-right--x-small"
    iconClassName="slds-button__icon--small"
    symbol="chevronright"
    assistiveText="Toggle"
    title="Toggle" />
  <a
    id={props.ariaControls + '__label'}
    href="javascript:void(0);" tabIndex="-1" role="presentation" className="slds-truncate" title="Tree Branch">Tree Branch</a>
</div>;

let Pill = props =>
<span className="slds-pill slds-shrink-none slds-align-middle">
  <span className="slds-pill__label">Label</span>
</span>;

let AdditionalItems = props =>
<li id="tree0-node1-1" role="treeitem" aria-level="2" aria-expanded="true">

  <TreeBranch ariaControls="tree0-node1-1" />

  <ul className="slds-is-expanded" role="group" aria-labelledby="tree0-node1-1__label">

    <li id="tree0-node1-1-0" role="treeitem" aria-level="3">
      <TreeItem />
    </li>

    <li id="tree0-node1-1-1" role="treeitem" aria-level="3">
      <TreeItem />
    </li>

    <li id="tree0-node1-1-2" role="treeitem" aria-level="3" aria-expanded="false">

      <TreeBranch ariaControls="tree0-node1-1-2" />

      <ul className="slds-is-collapsed" role="group" aria-labelledby="tree0-node1-1-2__label">

        <li id="tree0-node1-1-2-0" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-2-1" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-2-2" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

      </ul>
    </li>

    <li id="tree0-node1-1-3" role="treeitem" aria-level="3" aria-expanded="true">

      <TreeBranch ariaControls="tree0-node1-1-3" />

      <ul className="slds-is-expanded" role="group" aria-labelledby="tree0-node1-1-3__label">

        <li id="tree0-node1-1-3-1" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-3-2" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-3-3" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-3-4" role="treeitem" aria-level="4" aria-expanded="true">

          <TreeBranch ariaControls="tree0-node1-1-3-4" />

          <ul className="slds-is-expanded" role="group" aria-labelledby="tree0-node1-1-3-4__label">

            <li id="tree0-node1-1-3-4-1" role="treeitem" aria-level="5">
              <TreeItem />
            </li>

            <li id="tree0-node1-1-3-4-2" role="treeitem" aria-level="5">
              <TreeItem />
            </li>

            <li id="tree0-node1-1-3-4-3" role="treeitem" aria-level="5">
              <TreeItem />
            </li>

          </ul>
        </li>

        <li id="tree0-node1-1-3-5" role="treeitem" aria-level="4">
          <TreeItem />
        </li>
      </ul>
    </li>

    <li id="tree0-node1-1-4" role="treeitem" aria-level="3">
      <TreeItem />
    </li>
  </ul>
</li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<div className="slds-tree_container" role="application">
  <h4 className="slds-text-title--caps" id="treeheading">Tree Group Header</h4>

  <ul className="slds-tree" role="tree" aria-labelledby="treeheading" aria-activedescendant={props.isExpanded}>

    <li id="tree0-node0" role="treeitem" aria-level="1">
      <TreeItem>{props.itemContent}</TreeItem>
    </li>

    <li id="tree0-node1" role="treeitem" aria-level="1" aria-expanded={props.isExpanded ? true : false}>
      <TreeBranch ariaControls="tree0-node1" />

      <ul className={props.isExpanded ? 'slds-is-expanded' : 'slds-is-collapsed'} role="group" aria-labelledby="tree0-node1__label">

        <li id="tree0-node1-0" role="treeitem" aria-level="2">
          <TreeItem />
        </li>

        {props.additionalItems}
      </ul>
    </li>
    <li id="tree0-node2" role="treeitem" aria-level="1">
      <TreeBranch ariaControls="tree0-node2" />

      <ul className="slds-is-collapsed" role="group" aria-labelledby="tree0-node2__label">

        <li id="tree0-node2-0" role="treeitem" aria-level="2">
          <TreeItem />
        </li>
      </ul>
    </li>
    <li id="tree0-node3" role="treeitem" aria-level="1">
      <TreeItem>{props.itemContent}</TreeItem>
    </li>
  </ul>
</div>;


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Default />
);

export let states = [
  {
    id: 'expanded',
    label: 'Expanded',
    element: <Default isExpanded="tree0-node1" />
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: <Default isExpanded="tree0-node1" additionalItems={<AdditionalItems />} />
  }
];
