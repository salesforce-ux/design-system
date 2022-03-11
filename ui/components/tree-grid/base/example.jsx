// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
  AdvancedDataTableHead,
  TBody,
  TBodyTr,
  RowTh,
  Td,
  ReadOnlyCell,
  RowActionsCell,
  SelectRowCell
} from '../../data-tables';
import { TreeGrid } from '../';
import ButtonIcon from '../../button-icons';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

const columns = [
  'Account Name',
  'Employees',
  'Phone Number',
  'Account Owner',
  'Billing City'
];

const headlessColumns = ['Account Name'];

let rowIndex = 0;

export const Row = props => (
  <TBodyTr
    isExpanded={props.isExpanded}
    isSelected={props.isSelected}
    level={props.level}
    positionWithinLevel={props.positionWithinLevel}
    numberOfItemsAtLevel={props.numberOfItemsAtLevel}
    tabIndex={props.isFocusable ? '0' : null}
  >
    {!props.hasSingleRowSelection && (
      <Td isRightAligned type="advanced" style={{ width: '3.25rem' }}>
        <SelectRowCell index={rowIndex++} checked={props.isSelected} />
      </Td>
    )}
    <RowTh
      data-label="Account Name"
      type="treegrid"
      isItemHovered={props.isItemHovered}
    >
      <ButtonIcon
        aria-hidden="true"
        assistiveText={
          props.isExpanded ? `Collapse ${props.name}` : `Expand ${props.name}`
        }
        className={classNames('slds-button_icon-x-small slds-m-right_x-small', {
          'slds-is-disabled':
            props.isExpanded === null || props.isExpanded === undefined
        })}
        iconClassName="slds-button__icon_small"
        symbol="chevronright"
        tabIndex="-1"
        title={
          props.isExpanded ? `Collapse ${props.name}` : `Expand ${props.name}`
        }
      />
      <ReadOnlyCell cellLink cellText={props.name} />
    </RowTh>
    <Td data-label="Employees" type="treegrid">
      <ReadOnlyCell cellText={props.employees} />
    </Td>
    <Td data-label="Phone Number" type="treegrid">
      <ReadOnlyCell cellText={props.phone} />
    </Td>
    <Td data-label="Account Owner" type="treegrid">
      <ReadOnlyCell cellLink cellText={props.owner} />
    </Td>
    <Td data-label="Billing City" type="treegrid">
      <ReadOnlyCell cellText={props.city} />
    </Td>
    <Td type="treegrid" style={{ width: '3.25rem' }}>
      <RowActionsCell rowName={props.name} />
    </Td>
  </TBodyTr>
);
Row.propTypes = {
  city: PropTypes.string.isRequired,
  employees: PropTypes.string.isRequired,
  hasSingleRowSelection: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isFocusable: PropTypes.bool,
  isSelected: PropTypes.bool,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numberOfItemsAtLevel: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  positionWithinLevel: PropTypes.string.isRequired
};

export const HeadlessRow = props => (
  <TBodyTr
    isExpanded={props.isExpanded}
    isSelected={props.isSelected}
    level={props.level}
    numberOfItemsAtLevel={props.numberOfItemsAtLevel}
    positionWithinLevel={props.positionWithinLevel}
    tabIndex={props.isFocusable ? '0' : null}
  >
    {!props.hasSingleRowSelection && (
      <Td isRightAligned type="advanced" style={{ width: '3.25rem' }}>
        <SelectRowCell index={rowIndex++} checked={props.isSelected} />
      </Td>
    )}
    <RowTh data-label="Account Name" type="treegrid">
      <ButtonIcon
        aria-hidden="true"
        assistiveText={
          props.isExpanded ? `Collapse ${props.name}` : `Expand ${props.name}`
        }
        className={classNames(
          'slds-button_icon slds-button_icon-x-small slds-m-right_x-small',
          {
            'slds-is-disabled':
              props.isExpanded === null || props.isExpanded === undefined
          }
        )}
        iconClassName="slds-button__icon_small"
        symbol="chevronright"
        tabIndex="-1"
        title={
          props.isExpanded ? `Collapse ${props.name}` : `Expand ${props.name}`
        }
      />
      <ReadOnlyCell cellLink cellText={props.name} />
    </RowTh>
    <Td type="treegrid" style={{ width: '3.25rem' }}>
      <RowActionsCell rowName={props.name} />
    </Td>
  </TBodyTr>
);
HeadlessRow.displayName = 'HeadlessRow';
HeadlessRow.propTypes = {
  hasSingleRowSelection: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isFocusable: PropTypes.bool,
  isSelected: PropTypes.bool,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numberOfItemsAtLevel: PropTypes.string.isRequired,
  positionWithinLevel: PropTypes.string.isRequired
};

export const DefaultRows = props => (
  <TBody>
    <Row
      hasSingleRowSelection={props.hasSingleRowSelection}
      city="Phoenix, AZ"
      employees="3,100"
      isFocusable
      isSelected={!props.hasSingleRowSelection ? false : null}
      level="1"
      name="Rewis Inc"
      numberOfItemsAtLevel="4"
      owner="Jane Doe"
      phone="837-555-1212"
      positionWithinLevel="1"
    />
    <Row
      hasSingleRowSelection={props.hasSingleRowSelection}
      city="San Francisco, CA"
      employees="10,000"
      isExpanded={props.isExpanded}
      isSelected={
        !props.hasSingleRowSelection
          ? props.hasSelectedRow || false
          : props.hasSelectedRow || null
      }
      level="1"
      name="Acme Corporation"
      numberOfItemsAtLevel="4"
      owner="John Doe"
      phone="837-555-1212"
      positionWithinLevel="2"
    />
    {props.additionalItem}
    <Row
      hasSingleRowSelection={props.hasSingleRowSelection}
      city="New York, NY"
      employees="6,000"
      isExpanded={false}
      isSelected={!props.hasSingleRowSelection ? false : null}
      level="1"
      name="Rohde Enterprises"
      numberOfItemsAtLevel="4"
      owner="John Doe"
      phone="837-555-1212"
      positionWithinLevel="3"
    />
    <Row
      hasSingleRowSelection={props.hasSingleRowSelection}
      city="Paris, France"
      employees="1,234"
      isSelected={!props.hasSingleRowSelection ? false : null}
      level="1"
      name="Cheese Corp"
      numberOfItemsAtLevel="4"
      owner="Jane Doe"
      phone="837-555-1212"
      positionWithinLevel="4"
    />
  </TBody>
);
DefaultRows.displayName = 'DefaultRows';
DefaultRows.propTypes = {
  additionalItem: PropTypes.node,
  hasSelectedRow: PropTypes.bool,
  hasSingleRowSelection: PropTypes.bool,
  isExpanded: PropTypes.bool
};

export const ExpandedRow = props => (
  <Row
    city="New York, NY"
    employees="745"
    isSelected={false}
    level="2"
    name="Acme Corporation (Oakland)"
    numberOfItemsAtLevel="1"
    owner="John Doe"
    phone="837-555-1212"
    positionWithinLevel="1"
  />
);

export const DeepNestingRows = props => (
  <TBody>
    <Row
      level="1"
      positionWithinLevel="1"
      numberOfItemsAtLevel="4"
      name="Rewis Inc"
      employees="3,100"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Phoenix, AZ"
      isFocusable
      isSelected={false}
    />
    <Row
      isExpanded
      level="1"
      positionWithinLevel="2"
      numberOfItemsAtLevel="4"
      name="Acme Corporation"
      employees="10,000"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
      isSelected={false}
    />
    <Row
      isExpanded
      level="2"
      positionWithinLevel="1"
      numberOfItemsAtLevel="2"
      name="Acme Corporation (Bay Area)"
      employees="3,000"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      level="3"
      positionWithinLevel="1"
      numberOfItemsAtLevel="2"
      name="Acme Corporation (Oakland)"
      employees="745"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      level="3"
      positionWithinLevel="2"
      numberOfItemsAtLevel="2"
      name="Acme Corporation (San Francisco)"
      employees="578"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Los Angeles, CA"
      isSelected={false}
    />
    <Row
      isExpanded
      level="2"
      positionWithinLevel="2"
      numberOfItemsAtLevel="2"
      name="Acme Corporation (East)"
      employees="430"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
      isSelected={false}
    />
    <Row
      level="3"
      positionWithinLevel="1"
      numberOfItemsAtLevel="2"
      name="Acme Corporation (NY)"
      employees="1,210"
      phone="837-555-1212"
      owner="Jane Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      isExpanded
      level="3"
      positionWithinLevel="2"
      numberOfItemsAtLevel="2"
      name="Acme Corporation (VA)"
      employees="410"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      isExpanded
      level="4"
      positionWithinLevel="1"
      numberOfItemsAtLevel="1"
      name="Allied Technologies"
      employees="390"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Los Angeles, CA"
      isSelected={false}
    />
    <Row
      level="5"
      positionWithinLevel="1"
      numberOfItemsAtLevel="1"
      name="Allied Technologies (UV)"
      employees="270"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
      isSelected={false}
    />
    <Row
      isExpanded
      level="1"
      positionWithinLevel="3"
      numberOfItemsAtLevel="4"
      name="Rohde Enterprises"
      employees="6,000"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      level="2"
      positionWithinLevel="1"
      numberOfItemsAtLevel="1"
      name="Rohde Enterprises (UCA)"
      employees="2,540"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      isExpanded
      level="1"
      positionWithinLevel="4"
      numberOfItemsAtLevel="4"
      name="Tech Labs"
      employees="1,856"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
      isSelected={false}
    />
    <Row
      level="2"
      positionWithinLevel="1"
      numberOfItemsAtLevel="1"
      name="Opportunity Resources Inc"
      employees="1,934"
      phone="837-555-1212"
      owner="John Doe"
      city="Los Angeles, CA"
      isSelected={false}
    />
  </TBody>
);

export const HeadlessRows = props => (
  <TBody>
    <HeadlessRow
      hasSingleRowSelection={props.hasSingleRowSelection}
      isFocusable
      isSelected={!props.hasSingleRowSelection ? false : null}
      level="1"
      name="Rewis Inc"
      numberOfItemsAtLevel="4"
      positionWithinLevel="1"
    />
    <HeadlessRow
      hasSingleRowSelection={props.hasSingleRowSelection}
      isExpanded={props.isExpanded}
      isSelected={
        !props.hasSingleRowSelection
          ? props.hasSelectedRow || false
          : props.hasSelectedRow || null
      }
      level="1"
      name="Acme Corporation"
      numberOfItemsAtLevel="4"
      positionWithinLevel="2"
    />
    <HeadlessRow
      hasSingleRowSelection={props.hasSingleRowSelection}
      isExpanded={false}
      isSelected={!props.hasSingleRowSelection ? false : null}
      level="1"
      name="Rohde Enterprises"
      numberOfItemsAtLevel="4"
      positionWithinLevel="3"
    />
    <HeadlessRow
      hasSingleRowSelection={props.hasSingleRowSelection}
      isSelected={!props.hasSingleRowSelection ? false : null}
      level="1"
      name="Cheese Corp"
      numberOfItemsAtLevel="4"
      positionWithinLevel="4"
    />
  </TBody>
);
HeadlessRows.displayName = 'HeadlessRows';
HeadlessRows.propTypes = {
  isExpanded: PropTypes.any,
  hasSelectedRow: PropTypes.bool,
  hasSingleRowSelection: PropTypes.bool
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        ariaLabel="Example default tree grid"
      >
        <AdvancedDataTableHead columns={columns} hasMenus />
        <DefaultRows isExpanded={false} />
      </TreeGrid>
    )
  }
];

export let states = [
  {
    id: 'expanded',
    label: 'Expanded',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        ariaLabel="Example expanded tree grid"
      >
        <AdvancedDataTableHead columns={columns} hasMenus />
        <DefaultRows isExpanded additionalItem={<ExpandedRow />} />
      </TreeGrid>
    )
  },
  {
    id: 'selected-row',
    label: 'Selected row',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        ariaLabel="Example tree grid with selected row"
      >
        <AdvancedDataTableHead columns={columns} hasMenus />
        <DefaultRows
          isExpanded
          hasSelectedRow
          additionalItem={<ExpandedRow />}
        />
      </TreeGrid>
    )
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        ariaLabel="Example tree grid with deep nesting"
      >
        <AdvancedDataTableHead columns={columns} hasMenus />
        <DeepNestingRows />
      </TreeGrid>
    )
  }
];

export let examples = [
  {
    id: 'treegrid-headless',
    label: 'Headless',
    element: (
      <TreeGrid
        isBordered
        selectionType="multiple"
        hasHiddenHeader
        ariaLabel="Example headless tree grid"
      >
        <AdvancedDataTableHead
          columns={headlessColumns}
          hasSingleRowSelect
          isHidden
        />
        <HeadlessRows isExpanded={false} />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-headless-selected-row',
    label: 'Headless with selected row',
    element: (
      <TreeGrid
        isBordered
        selectionType="multiple"
        hasHiddenHeader
        ariaLabel="Example headless tree grid with selected row"
      >
        <AdvancedDataTableHead
          columns={headlessColumns}
          hasSingleRowSelect
          isHidden
        />
        <HeadlessRows isExpanded={false} hasSelectedRow />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-headless-no-borders',
    label: 'Headless with no borders',
    element: (
      <TreeGrid
        selectionType="multiple"
        hasHiddenHeader
        ariaLabel="Example headless border-less tree grid"
      >
        <AdvancedDataTableHead
          hasSingleRowSelect
          columns={headlessColumns}
          isHidden
        />
        <HeadlessRows isExpanded={false} />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-headless-no-borders-selected-row',
    label: 'Headless with no borders and a selected row',
    element: (
      <TreeGrid
        selectionType="multiple"
        hasHiddenHeader
        ariaLabel="Example headless border-less tree grid with selected row"
      >
        <AdvancedDataTableHead
          hasSingleRowSelect
          columns={headlessColumns}
          isHidden
        />
        <HeadlessRows isExpanded={false} hasSelectedRow />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-single-select',
    label: 'Single select',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        ariaLabel="Example single select tree grid"
      >
        <AdvancedDataTableHead hasNoRowSelection columns={columns} hasMenus />
        <DefaultRows isExpanded={false} hasSingleRowSelection />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-single-select-selected-row',
    label: 'Single select with a selected row',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        ariaLabel="Example single select tree grid with selected row"
      >
        <AdvancedDataTableHead hasNoRowSelection columns={columns} hasMenus />
        <DefaultRows isExpanded={false} hasSelectedRow hasSingleRowSelection />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-single-select-headless',
    label: 'Single select headless',
    element: (
      <TreeGrid
        isBordered
        hasHiddenHeader
        ariaLabel="Example headless single select tree grid"
      >
        <AdvancedDataTableHead
          hasNoRowSelection
          columns={headlessColumns}
          isHidden
        />
        <HeadlessRows isExpanded={false} hasSingleRowSelection />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-single-select-headless-selected',
    label: 'Single select headless with selected row',
    element: (
      <TreeGrid
        isBordered
        hasHiddenHeader
        ariaLabel="Example single select tree grid with selected row"
      >
        <AdvancedDataTableHead
          hasNoRowSelection
          columns={headlessColumns}
          isHidden
        />
        <HeadlessRows isExpanded={false} hasSelectedRow hasSingleRowSelection />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-single-select-headless-no-borders',
    label: 'Single select headless with no borders',
    element: (
      <TreeGrid
        hasHiddenHeader
        ariaLabel="Example headless border-less single select tree grid"
      >
        <AdvancedDataTableHead
          hasNoRowSelection
          columns={headlessColumns}
          isHidden
        />
        <HeadlessRows isExpanded={false} hasSingleRowSelection />
      </TreeGrid>
    )
  },
  {
    id: 'treegrid-single-select-headless-no-borders-with-selected',
    label: 'Single select headless with no borders and a selected row',
    element: (
      <TreeGrid
        hasHiddenHeader
        ariaLabel="Example headless border-less single select tree grid with selected row"
      >
        <AdvancedDataTableHead
          hasNoRowSelection
          columns={headlessColumns}
          isHidden
        />
        <HeadlessRows isExpanded={false} hasSelectedRow hasSingleRowSelection />
      </TreeGrid>
    )
  },
  {
    id: 'item-disabled',
    label: 'Item Disabled',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        ariaLabel="Example tree grid with disabled item"
      >
        <AdvancedDataTableHead columns={columns} hasMenus />
        <DefaultRows isExpanded={false} />
      </TreeGrid>
    )
  },
  {
    id: 'item-hovered',
    label: 'Item Hovered',
    element: (
      <TreeGrid
        isBordered
        isFixedLayout
        isResizable
        selectionType="multiple"
        ariaLabel="Example tree grid with hovered item"
      >
        <AdvancedDataTableHead columns={columns} hasMenus />
        <TBody>
          <Row
            city="Phoenix, AZ"
            employees="3,100"
            isItemHovered
            isFocusable
            isExpanded={false}
            level="1"
            name="Rewis Inc"
            numberOfItemsAtLevel="4"
            owner="Jane Doe"
            phone="837-555-1212"
            positionWithinLevel="1"
          />
          <Row
            city="San Francisco, CA"
            employees="10,000"
            isExpanded={false}
            level="1"
            name="Acme Corporation"
            numberOfItemsAtLevel="4"
            owner="John Doe"
            phone="837-555-1212"
            positionWithinLevel="2"
          />
          <Row
            city="New York, NY"
            employees="6,000"
            isExpanded={false}
            level="1"
            name="Rohde Enterprises"
            numberOfItemsAtLevel="4"
            owner="John Doe"
            phone="837-555-1212"
            positionWithinLevel="3"
          />
        </TBody>
      </TreeGrid>
    )
  }
];
