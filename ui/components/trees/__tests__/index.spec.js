/* eslint-env jest */
import React from 'react';

import {
  TreeItem,
  TreeListItem,
  TreeHeader,
  TreeList,
  TreeGroup,
  TreeContainer
} from '../index';

import { MetaTextTree } from '../base/index';
import createHelpers from '../../../../jest.helpers';
/**
 * Diverging from how we define our examples in our test spec. Instead of
 * recreating the components, we pull in examples from our source of truth
 */
import * as Trees from '../base/example';
import { getDisplayElementById } from '../../../shared/helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('tree', () => {
  it('renders a base Tree with metatext', () =>
    matchesMarkup(
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
        <TreeList headerId="treeheading">
          <MetaTextTree headerId="treeheading" />
        </TreeList>
      </TreeContainer>
    ));
  it('renders a base Tree with disabled tree items', () =>
    matchesMarkup(getDisplayElementById(Trees.states, 'item-disabled')));
});

describe('Base Tree - Tree Item', () => {
  it('renders a default tree item', () => matchesMarkup(<TreeItem />));
  it('renders a tree item with a label passed in', () =>
    matchesMarkup(<TreeItem itemLabel="Tree Item Label" />));
  it('renders a tree item with children', () =>
    matchesMarkup(<TreeItem>Tree Item Children</TreeItem>));
  it('renders a tree item with metatext', () =>
    matchesMarkup(<TreeItem metaTextLabel="Tree Item Metatext" />));
  it('renders a tree item with marked term', () =>
    matchesMarkup(
      <TreeItem itemLabel="lightning button" termToMark="butto" />
    ));
  it('renders a tree item with marked term in metatext', () =>
    matchesMarkup(
      <TreeItem
        itemLabel="lightning button"
        metaTextLabel="Some other term"
        termToMark="othe"
      />
    ));
});

describe('Base Tree - Branch Item', () => {
  it('renders a tree branch item with a label passed in', () =>
    matchesMarkup(<TreeItem branchLabel="Tree Branch Label" isBranch />));
  it('renders a tree branch item with metatext', () =>
    matchesMarkup(<TreeItem isBranch metaTextLabel="Tree Item Metatext" />));
});

describe('Base Tree - List Item', () => {
  describe('for Branches', () => {
    it('renders a tree list item for a branch with the required item label', () =>
      matchesMarkup(
        <TreeListItem ariaLevel={1} isBranch itemLabel="Test Branch">
          <TreeItem isBranch itemLabel="Test Branch" />
        </TreeListItem>
      ));
    it('renders a tree list item for a branch with a custom label and metatext', () =>
      matchesMarkup(
        <TreeListItem
          ariaLevel={1}
          isBranch
          itemLabel="Test Branch"
          metaTextLabel="Some Metatext"
        >
          <TreeItem
            isBranch
            itemLabel="Test Branch"
            metaTextLabel="Some Metatext"
          />
        </TreeListItem>
      ));
    it('renders a tree list item for a branch that is selected', () =>
      matchesMarkup(
        <TreeListItem
          ariaLevel={1}
          isBranch
          isSelected
          itemLabel="Test Branch"
          tabIndex={0}
        >
          <TreeItem isBranch itemLabel="Test Branch" />
        </TreeListItem>
      ));
    it('renders a tree list item for a branch that is expanded', () =>
      matchesMarkup(
        <TreeListItem ariaLevel={1} isBranch isExpanded itemLabel="Test Branch">
          <TreeItem isBranch itemLabel="Test Branch" />
        </TreeListItem>
      ));
    it('renders a tree list item at index 0, with no tabIndex, because the branch has a selected item', () =>
      matchesMarkup(
        <TreeListItem
          ariaLevel={1}
          hasSelectedItem
          isBranch
          itemIndex={0}
          itemLabel="Test Branch"
        >
          <TreeItem isBranch itemLabel="Test Branch" />
        </TreeListItem>
      ));
  });
  describe('for individual Items', () => {
    it('renders a default tree list item', () =>
      matchesMarkup(
        <TreeListItem ariaLevel={1}>
          <TreeItem />
        </TreeListItem>
      ));
    it('renders a tree list item with tabIndex of 0', () =>
      matchesMarkup(
        <TreeListItem ariaLevel={1} tabIndex={0}>
          <TreeItem />
        </TreeListItem>
      ));
    it('renders a tree list item with a custom label', () =>
      matchesMarkup(
        <TreeListItem ariaLevel={1} itemLabel="Test Item">
          <TreeItem />
        </TreeListItem>
      ));
    it('renders a tree list item with a custom label and metatext', () =>
      matchesMarkup(
        <TreeListItem
          ariaLevel={1}
          itemLabel="Test Item"
          metaTextLabel="Some Metatext"
        >
          <TreeItem itemLabel="Test Item" metaTextLabel="Some Metatext" />
        </TreeListItem>
      ));
    it('renders a tree list item that is selected', () =>
      matchesMarkup(
        <TreeListItem ariaLevel={1} isSelected tabIndex={0}>
          <TreeItem />
        </TreeListItem>
      ));
  });
});

describe('Base Tree - Tree Header', () => {
  it('renders a default tree header', () =>
    matchesMarkup(<TreeHeader id="treeheading" />));
  it('renders a tree header with children', () =>
    matchesMarkup(<TreeHeader id="treeheading">Tree Group Header</TreeHeader>));
});

describe('Base Tree - Tree List', () => {
  it('renders a default tree list', () =>
    matchesMarkup(<TreeList headerId="treeheading" />));
  it('renders a tree list with children', () =>
    matchesMarkup(
      <TreeList headerId="treeheading">
        <TreeListItem ariaLevel={1}>
          <TreeItem />
        </TreeListItem>
      </TreeList>
    ));
});

describe('Base Tree - Tree Group', () => {
  it('renders a default tree group', () => matchesMarkup(<TreeGroup />));
  it('renders a tree group with children', () =>
    matchesMarkup(
      <TreeGroup>
        <TreeListItem ariaLevel={1}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    ));
});

describe('Base Tree - Tree Container', () => {
  it('renders a default tree container', () =>
    matchesMarkup(<TreeContainer />));
  it('renders a tree container with children', () =>
    matchesMarkup(
      <TreeContainer>
        <TreeHeader id="treeheading">Tree Group Header</TreeHeader>
      </TreeContainer>
    ));
});
