// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';

import {
  TreeGrid as DeprecatedTreeGrid,
  ExpandedRow as DeprecatedExpandedRow,
  DefaultRows as DeprecatedDefaultRows,
  DeepNestingRows as DeprecatedNestingRows
} from '../__deprecated__/grid_2_6_0';

import { TreeGrid } from '../';
import { Row, HeadlessRow, DefaultRows, HeadlessRows } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('treegrid', () => {
  describe('treegrid component', () => {
    it('should render', () =>
      matchesMarkup(
        <TreeGrid>
          <tr />
        </TreeGrid>
      ));

    it('should remove header', () =>
      matchesMarkup(
        <TreeGrid hasHiddenHeader>
          <tr />
        </TreeGrid>
      ));

    it('should add borders', () =>
      matchesMarkup(
        <TreeGrid isBordered>
          <tr />
        </TreeGrid>
      ));

    it('should fix the table layout', () =>
      matchesMarkup(
        <TreeGrid isFixedLayout>
          <tr />
        </TreeGrid>
      ));

    it('should set resizable', () =>
      matchesMarkup(
        <TreeGrid isResizable>
          <tr />
        </TreeGrid>
      ));

    it('should set aria-multiselectable to true', () =>
      matchesMarkup(
        <TreeGrid selectionType="multiple">
          <tr />
        </TreeGrid>
      ));

    it('should render a caption with aria-label', () =>
      matchesMarkup(
        <TreeGrid ariaLabel="Example caption">
          <tr />
        </TreeGrid>
      ));

    it('should render a caption with aria-labelledby', () =>
      matchesMarkup(
        <>
          <h2 id="element-with-table-label">Example tree grid</h2>
          <h3 id="other-element-with-table-label">
            Using <code>aria-labelledby</code>, instead of aria-label
          </h3>
          <TreeGrid ariaLabelledBy="element-with-table-label other-element-with-table-label">
            <tr />
          </TreeGrid>
        </>
      ));
  });

  describe('row', () => {
    it('should render', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));

    it('should set aria-expanded on row ', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          isExpanded
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));

    it('should set aria-expanded to false on row ', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          isExpanded={false}
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));

    it('should remove the selection column', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          hasSingleRowSelection
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));

    it('should set tabindex on the row', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          isFocusable
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));

    it('should select the row and check the box', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          isSelected
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));

    it('should set selection of the row to false', () =>
      matchesMarkup(
        <Row
          city="Phoenix, AZ"
          employees="3,100"
          isSelected={false}
          level="1"
          name="Rewis Inc"
          numberOfItemsAtLevel="1"
          owner="Jane Doe"
          phone="837-555-1212"
          positionWithinLevel="1"
        />
      ));
  });

  describe('headless row', () => {
    it('should render', () =>
      matchesMarkup(
        <HeadlessRow
          level="1"
          name="foo"
          numberOfItemsAtLevel="1"
          positionWithinLevel="1"
        />
      ));

    it('should hide the selection column', () =>
      matchesMarkup(
        <HeadlessRow
          hasSingleRowSelection
          level="1"
          name="foo"
          numberOfItemsAtLevel="1"
          positionWithinLevel="1"
        />
      ));

    it('should set expanded to true', () =>
      matchesMarkup(
        <HeadlessRow
          isExpanded
          level="1"
          name="foo"
          numberOfItemsAtLevel="1"
          positionWithinLevel="1"
        />
      ));

    it('should set expanded to false', () =>
      matchesMarkup(
        <HeadlessRow
          isExpanded={false}
          level="1"
          name="foo"
          numberOfItemsAtLevel="1"
          positionWithinLevel="1"
        />
      ));

    it('should set selected to true and check the box', () =>
      matchesMarkup(
        <HeadlessRow
          isSelected
          level="1"
          name="foo"
          numberOfItemsAtLevel="1"
          positionWithinLevel="1"
        />
      ));

    it('should set selected to false', () =>
      matchesMarkup(
        <HeadlessRow
          isSelected={false}
          level="1"
          name="foo"
          numberOfItemsAtLevel="1"
          positionWithinLevel="1"
        />
      ));
  });

  describe('default rows', () => {
    it('should render with children', () =>
      matchesMarkup(<DefaultRows additionalItem={<tr />} />));

    it('should show a selected row', () =>
      matchesMarkup(<DefaultRows additionalItem={<tr />} hasSelectedRow />));

    it('should remove the selection column', () =>
      matchesMarkup(
        <DefaultRows additionalItem={<tr />} hasSingleRowSelection />
      ));

    it('should show expanded row', () =>
      matchesMarkup(<DefaultRows additionalItem={<tr />} isExpanded />));
  });

  describe('headless rows', () => {
    it('should render', () => matchesMarkup(<HeadlessRows />));

    it('should show a selected row', () =>
      matchesMarkup(<HeadlessRows hasSelectedRow />));

    it('should remove the selection column', () =>
      matchesMarkup(<HeadlessRows hasSingleRowSelection />));

    it('should show expanded row', () =>
      matchesMarkup(<HeadlessRows isExpanded />));
  });
});

describe('deprecated treegrid', () => {
  it('renders a default DeprecatedTreeGrid', () =>
    matchesMarkup(
      <DeprecatedTreeGrid>
        <DeprecatedDefaultRows />
      </DeprecatedTreeGrid>
    ));

  it('renders an expanded DeprecatedTreeGrid', () =>
    matchesMarkup(
      <DeprecatedTreeGrid>
        <DeprecatedDefaultRows
          isExpanded
          additionalItem={<DeprecatedExpandedRow />}
        />
      </DeprecatedTreeGrid>
    ));

  it('renders a deeply nested DeprecatedTreeGrid', () =>
    matchesMarkup(
      <DeprecatedTreeGrid>
        <DeprecatedNestingRows />
      </DeprecatedTreeGrid>
    ));
});
