// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const TreeGrid = props => (
  <table
    className="slds-table slds-table_bordered slds-tree slds-table_tree"
    role="treegrid"
    aria-readonly="true"
  >
    <thead>
      <tr className="slds-text-title_caps">
        <th className="slds-cell-buffer_left" scope="col">
          <div className="slds-grid slds-grid_vertical-align-center">
            <ButtonIcon
              assistiveText="Expand all rows"
              className="slds-button_icon-border-filled slds-button_icon-x-small slds-m-right_x-small slds-shrink-none slds-table_tree__toggle"
              iconClassName="slds-button__icon_small"
              symbol="chevrondown"
              tabIndex="-1"
              title="Expand all rows"
            />
            <div className="slds-truncate" title="Account Name">
              Account Name
            </div>
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Employees">
            Employees
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Phone Number">
            Phone Number
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Account Owner">
            Account Owner
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Billing City">
            Billing City
          </div>
        </th>
        <th className="slds-cell-shrink" scope="col">
          <ButtonIcon
            aria-haspopup="true"
            assistiveText="Show More"
            className="slds-button_icon-border-filled slds-button_icon-x-small"
            iconClassName="slds-button__icon_hint slds-button__icon_small"
            symbol="down"
            tabIndex="-1"
            title="Show More"
          />
        </th>
      </tr>
    </thead>
    {props.children}
  </table>
);

const Row = props => (
  <tr
    aria-expanded={props['aria-expanded']}
    aria-level={props['aria-level']}
    aria-posinset={props['aria-posinset']}
    aria-setsize={props['aria-setsize']}
    className="slds-hint-parent"
    tabIndex={props.focusable ? '0' : null}
  >
    <th className="slds-tree__item" data-label="Account Name" scope="row">
      <ButtonIcon
        aria-hidden="true"
        assistiveText={
          props['aria-expanded']
            ? `Expand ${props.name}`
            : `Collapse ${props.name}`
        }
        className={classNames(
          'slds-button_icon slds-button_icon-x-small slds-m-right_x-small',
          props['aria-expanded'] ? null : 'slds-is-disabled'
        )}
        iconClassName="slds-button__icon_small"
        symbol="chevronright"
        tabIndex="-1"
        title={
          props['aria-expanded']
            ? `Collapse ${props.name}`
            : `Expand ${props.name}`
        }
      />
      <div className="slds-truncate" title={props.name}>
        <a href="javascript:void(0);" tabIndex="-1">
          {props.name}
        </a>
      </div>
    </th>
    <td data-label="Employees" role="gridcell">
      <div className="slds-truncate" title={props.employees}>
        {props.employees}
      </div>
    </td>
    <td data-label="Phone Number" role="gridcell">
      <div className="slds-truncate" title={props.phone}>
        {props.phone}
      </div>
    </td>
    <td data-label="Account Owner" role="gridcell">
      <div className="slds-truncate" title={props.owner}>
        <a href="javascript:void(0);" tabIndex="-1">
          {props.owner}
        </a>
      </div>
    </td>
    <td data-label="Billing City" role="gridcell">
      <div className="slds-truncate" title={props.city}>
        {props.city}
      </div>
    </td>
    <td className="slds-cell-shrink" role="gridcell">
      <ButtonIcon
        aria-haspopup="true"
        assistiveText={`More actions for ${props.name}`}
        className="slds-button_icon-border-filled slds-button_icon-x-small"
        iconClassName="slds-button__icon_hint slds-button__icon_small"
        symbol="down"
        tabIndex="-1"
        title={`More actions for ${props.name}`}
      />
    </td>
  </tr>
);

export const DefaultRows = props => (
  <tbody>
    <Row
      aria-level="1"
      aria-posinset="1"
      aria-setsize="4"
      name="Rewis Inc"
      employees="3,100"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Phoenix, AZ"
      focusable
    />
    <Row
      aria-expanded={props.isExpanded ? 'true' : 'false'}
      aria-level="1"
      aria-posinset="2"
      aria-setsize="4"
      name="Acme Corporation"
      employees="10,000"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
    />
    {props.additionalItem}
    <Row
      aria-expanded="false"
      aria-level="1"
      aria-posinset="3"
      aria-setsize="4"
      name="Rohde Enterprises"
      employees="6,000"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-level="1"
      aria-posinset="4"
      aria-setsize="4"
      name="Cheese Corp"
      employees="1,234"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Paris, France"
    />
  </tbody>
);

export const ExpandedRow = props => (
  <Row
    aria-level="2"
    aria-posinset="1"
    aria-setsize="1"
    name="Acme Corporation (Oakland)"
    employees="745"
    phone="837-555-1212"
    owner="John Doe"
    city="New York, NY"
  />
);

export const DeepNestingRows = props => (
  <tbody>
    <Row
      aria-level="1"
      aria-posinset="1"
      aria-setsize="4"
      name="Rewis Inc"
      employees="3,100"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Phoenix, AZ"
      focusable
    />
    <Row
      aria-expanded="true"
      aria-level="1"
      aria-posinset="2"
      aria-setsize="4"
      name="Acme Corporation"
      employees="10,000"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
    />
    <Row
      aria-expanded="true"
      aria-level="2"
      aria-posinset="1"
      aria-setsize="2"
      name="Acme Corporation (Bay Area)"
      employees="3,000"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-level="3"
      aria-posinset="1"
      aria-setsize="2"
      name="Acme Corporation (Oakland)"
      employees="745"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-level="3"
      aria-posinset="2"
      aria-setsize="2"
      name="Acme Corporation (San Francisco)"
      employees="578"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Los Angeles, CA"
    />
    <Row
      aria-expanded="true"
      aria-level="2"
      aria-posinset="2"
      aria-setsize="2"
      name="Acme Corporation (East)"
      employees="430"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
    />
    <Row
      aria-level="3"
      aria-posinset="1"
      aria-setsize="2"
      name="Acme Corporation (NY)"
      employees="1,210"
      phone="837-555-1212"
      owner="Jane Doe"
      city="New York, NY"
    />
    <Row
      aria-expanded="true"
      aria-level="3"
      aria-posinset="2"
      aria-setsize="2"
      name="Acme Corporation (VA)"
      employees="410"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-expanded="true"
      aria-level="4"
      aria-posinset="1"
      aria-setsize="1"
      name="Allied Technologies"
      employees="390"
      phone="837-555-1212"
      owner="Jane Doe"
      city="Los Angeles, CA"
    />
    <Row
      aria-level="5"
      aria-posinset="1"
      aria-setsize="1"
      name="Allied Technologies (UV)"
      employees="270"
      phone="837-555-1212"
      owner="John Doe"
      city="San Francisco, CA"
    />
    <Row
      aria-expanded="true"
      aria-level="1"
      aria-posinset="3"
      aria-setsize="4"
      name="Rohde Enterprises"
      employees="6,000"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-level="2"
      aria-posinset="1"
      aria-setsize="1"
      name="Rohde Enterprises (UCA)"
      employees="2,540"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-expanded="true"
      aria-level="1"
      aria-posinset="4"
      aria-setsize="4"
      name="Tech Labs"
      employees="1,856"
      phone="837-555-1212"
      owner="John Doe"
      city="New York, NY"
    />
    <Row
      aria-level="2"
      aria-posinset="1"
      aria-setsize="1"
      name="Opportunity Resources Inc"
      employees="1,934"
      phone="837-555-1212"
      owner="John Doe"
      city="Los Angeles, CA"
    />
  </tbody>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <TreeGrid>
    <DefaultRows />
  </TreeGrid>
);

export let states = [
  {
    id: 'expanded',
    label: 'Expanded',
    element: (
      <TreeGrid>
        <DefaultRows isExpanded additionalItem={<ExpandedRow />} />
      </TreeGrid>
    )
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: (
      <TreeGrid>
        <DeepNestingRows />
      </TreeGrid>
    )
  }
];
