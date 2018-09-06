// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  TreeContainer,
  TreeHeader,
  TreeList,
  DefaultTree,
  ExpandedTree,
  SelectedTree,
  DeeplyNestedTree,
  MetaTextTree
} from '../base/index';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <TreeContainer>
    <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
    <TreeList headerId="treeheading">
      <DefaultTree />
    </TreeList>
  </TreeContainer>
);

export let states = [
  {
    id: 'expanded',
    label: 'Expanded',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <ExpandedTree />
        </TreeList>
      </TreeContainer>
    )
  },
  {
    id: 'selected',
    label: 'Item Selected',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <SelectedTree />
        </TreeList>
      </TreeContainer>
    )
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <DeeplyNestedTree />
        </TreeList>
      </TreeContainer>
    )
  },
  {
    id: 'metatext',
    label: 'Metatext',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <MetaTextTree />
        </TreeList>
      </TreeContainer>
    )
  }
];
