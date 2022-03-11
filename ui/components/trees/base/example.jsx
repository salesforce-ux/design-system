// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  TreeContainer,
  TreeHeader,
  TreeList,
  TreeGroup,
  TreeItem,
  TreeListItem
} from '../index';

import {
  DefaultTree,
  ExpandedTree,
  SelectedTree,
  DeeplyNestedTree,
  MetaTextTree,
  TreeWithItemHovered,
  TreeWithItemDisabled
} from '../base/index';

import { FormElement } from '../../form-element/index';
import Input from '../../input/';
import { UtilityIcon } from '../../icons/base/example';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <DefaultTree />
        </TreeList>
      </TreeContainer>
    )
  }
];

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
  },
  {
    id: 'item-hovered',
    label: 'Item Hovered',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <TreeWithItemHovered />
        </TreeList>
      </TreeContainer>
    )
  },
  {
    id: 'item-disabled',
    label: 'Item Disabled',
    element: (
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <TreeWithItemDisabled />
        </TreeList>
      </TreeContainer>
    )
  }
];

export const examples = [
  {
    id: 'filterable-tree',
    label: 'Fliterable Tree',
    element: (
      <div>
        <div className="slds-m-bottom_small">
          <FormElement
            hasHiddenLabel
            hasLeftIcon
            inputId="filter-id"
            labelContent="Filter navigation items"
          >
            <UtilityIcon
              className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
              sprite="utility"
              symbol="search"
            />
            <Input
              aria-controls="tree-id"
              id="filter-id"
              placeholder="Quick Find"
              type="search"
            />
          </FormElement>
        </div>
        <TreeContainer>
          <TreeHeader id="treeheading">Components</TreeHeader>
          <TreeList headerId="treeheading" id="tree-id">
            <TreeListItem
              ariaLevel={1}
              isBranch
              itemLabel="lightning"
              tabIndex={0}
            >
              <TreeItem isBranch itemLabel="lightning" />
              <TreeGroup>
                <TreeListItem ariaLevel={2} itemLabel="lightning-button">
                  <TreeItem itemLabel="lightning-button" />
                </TreeListItem>
                <TreeListItem
                  ariaLevel={2}
                  itemLabel="lightning-checkbox-button"
                >
                  <TreeItem itemLabel="lightning-checkbox-button" />
                </TreeListItem>
                <TreeListItem ariaLevel={2} itemLabel="lightning-radio-button">
                  <TreeItem itemLabel="lightning-radio-button" />
                </TreeListItem>
                <TreeListItem
                  ariaLevel={2}
                  itemLabel="lightning-toggle"
                  metaTextLabel="vaiant a checkbox button"
                >
                  <TreeItem
                    itemLabel="lightning-toggle"
                    metaTextLabel="variant a checkbox button"
                  />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
            <TreeListItem ariaLevel={1} isBranch itemLabel="ui">
              <TreeItem isBranch itemLabel="ui" />
              <TreeGroup>
                <TreeListItem ariaLevel={2} itemLabel="ui:button">
                  <TreeItem itemLabel="ui:button" />
                </TreeListItem>
                <TreeListItem ariaLevel={2} itemLabel="ui:checkboxButton">
                  <TreeItem itemLabel="ui:checkboxButton" />
                </TreeListItem>
                <TreeListItem ariaLevel={2} itemLabel="ui:radioButton">
                  <TreeItem itemLabel="ui:radioButton" />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
            <TreeListItem
              ariaLevel={1}
              isBranch
              itemLabel="lightningcommunities"
              metaTextLabel="Community components"
            >
              <TreeItem
                isBranch
                itemLabel="lightningcommunities"
                metaTextLabel="Community components"
              />
              <TreeGroup>
                <TreeListItem ariaLevel={2}>
                  <TreeItem />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
          </TreeList>
        </TreeContainer>
      </div>
    )
  },
  {
    id: 'filterabled-tree',
    label: 'Flitered Tree',
    element: (
      <div>
        <div className="slds-m-bottom_small">
          <FormElement
            hasHiddenLabel
            hasLeftIcon
            inputId="filter-id"
            labelContent="Filter navigation items"
          >
            <UtilityIcon
              className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
              sprite="utility"
              symbol="search"
            />
            <Input
              aria-controls="tree-id"
              defaultValue="butto"
              id="filter-id"
              placeholder="Quick Find"
              type="search"
            />
          </FormElement>
        </div>
        <TreeContainer>
          <TreeHeader id="treeheading">Components</TreeHeader>
          <TreeList headerId="treeheading" id="tree-id">
            <TreeListItem
              ariaLevel={1}
              isBranch
              isExpanded
              itemLabel="lightning"
              tabIndex={0}
            >
              <TreeItem isBranch itemLabel="lightning" />
              <TreeGroup>
                <TreeListItem ariaLevel={2} itemLabel="lightning-button">
                  <TreeItem itemLabel="lightning-button" termToMark="butto" />
                </TreeListItem>
                <TreeListItem
                  ariaLevel={2}
                  itemLabel="lightning-checkbox-button"
                >
                  <TreeItem
                    itemLabel="lightning-checkbox-button"
                    termToMark="butto"
                  />
                </TreeListItem>
                <TreeListItem ariaLevel={2} itemLabel="lightning-radio-button">
                  <TreeItem
                    itemLabel="lightning-radio-button"
                    termToMark="butto"
                  />
                </TreeListItem>
                <TreeListItem
                  ariaLevel={2}
                  itemLabel="lightning-toggle"
                  metaTextLabel="variant a checkbox button"
                >
                  <TreeItem
                    itemLabel="lightning-toggle"
                    metaTextLabel="variant a checkbox button"
                    termToMark="butto"
                  />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
            <TreeListItem ariaLevel={1} isBranch isExpanded itemLabel="ui">
              <TreeItem isBranch itemLabel="ui" />
              <TreeGroup>
                <TreeListItem ariaLevel={2} itemLabel="ui:button">
                  <TreeItem itemLabel="ui:button" termToMark="butto" />
                </TreeListItem>
                <TreeListItem ariaLevel={2} itemLabel="ui:checkboxButton">
                  <TreeItem itemLabel="ui:checkboxButton" termToMark="butto" />
                </TreeListItem>
                <TreeListItem ariaLevel={2} itemLabel="ui:radioButton">
                  <TreeItem itemLabel="ui:radioButton" termToMark="butto" />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
          </TreeList>
        </TreeContainer>
      </div>
    )
  }
];
