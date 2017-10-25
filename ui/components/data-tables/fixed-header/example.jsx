// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { Table, RowData } from '../inline-edit/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const columns = [
  'Name',
  'Account Name',
  'Close Date',
  'Stage',
  'Confidence',
  'Amount',
  'Contact'
];

const rows = [
  {
    recordName: 'Acme - 1,200 Widgets',
    accountName: 'Acme',
    closeDate: '4/10/15',
    stage: 'Value Proposition',
    confidence: '30%',
    amount: '$25,000,000',
    contact: 'jrogers@acme.com'
  },
  {
    recordName: 'Acme - 200 Widgets',
    accountName: 'Acme',
    closeDate: '1/31/15',
    stage: 'Prospecting',
    confidence: '60%',
    amount: '$5,000,000',
    contact: 'bob@acme.com'
  },
  {
    recordName: 'salesforce.com - 1,000 Widgets',
    accountName: 'salesforce.com',
    closeDate: '1/31/15 3:45PM',
    stage: 'Id. Decision Makers',
    confidence: '70%',
    amount: '$25,000',
    contact: 'nathan@salesforce.com'
  }
];

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Container = props => (
  <div
    className="slds-table_header-fixed_container"
    tabIndex={props.tabIndex}
    id={props.id}
  >
    <div
      className="slds-scrollable"
      style={{ height: '100px', position: 'static' }}
    >
      <div className="table--header-fixed_container--inner slds-table_edit_container">
        {props.children}
      </div>
    </div>
  </div>
);

let Th = props => {
  const { columnName, ...rest } = props;
  const uniqueId = _.uniqueId('cell-resize-handle-');
  let sortDirection;
  if (props['aria-sort']) {
    sortDirection =
      props['aria-sort'] === 'ascending'
        ? 'Sorted ascending'
        : 'Sorted descending';
  }

  return (
    <th
      {...rest}
      className={classNames(
        'slds-is-sortable slds-is-resizable slds-text-title_caps',
        props.className
      )}
      scope="col"
      style={{ width: '8.75rem' }}
    >
      <div className="slds-cell-fixed" style={{ width: '8.75rem' }}>
        <a
          href="javascript:void(0);"
          className="slds-th__action slds-text-link_reset"
          tabIndex={!props.focusable ? '-1' : '0'}
        >
          <span className="slds-assistive-text">Sort </span>
          <span className="slds-truncate" title={columnName || 'Column Name'}>
            {columnName || 'Column Name'}
          </span>
          <div className="slds-icon_container">
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"
              sprite="utility"
              symbol="arrowdown"
            />
          </div>
          <span
            className="slds-assistive-text"
            aria-live="assertive"
            aria-atomic="true"
          >
            {sortDirection}
          </span>
        </a>
        <div className="slds-resizable">
          <label htmlFor={uniqueId} className="slds-assistive-text">
            {columnName || 'Column Name'} column width
          </label>
          <input
            className="slds-resizable__input slds-assistive-text"
            type="range"
            min="20"
            max="1000"
            id={uniqueId}
            tabIndex={!props.focusable ? '-1' : '0'}
          />
          <span className="slds-resizable__handle">
            <span className="slds-resizable__divider" />
          </span>
        </div>
      </div>
    </th>
  );
};

let Checkbox = props => (
  <label className="slds-checkbox">
    <input
      type="checkbox"
      name="options"
      disabled={props.disabled}
      defaultChecked={props.checked}
      tabIndex={props.tabIndex || '-1'}
      id={props.checkID}
    />
    <span className="slds-checkbox_faux" />
    <span className="slds-assistive-text">{props.label}</span>
  </label>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Container>
    <Table className="slds-no-cell-focus slds-table_header-fixed">
      <thead>
        <tr className="slds-line-height_reset">
          <th scope="col" style={{ width: '3.75rem' }}>
            <div
              style={{ width: '3.75rem' }}
              className="slds-th__action slds-cell-fixed"
            >
              <span className="slds-assistive-text">Errors</span>
            </div>
          </th>
          <th scope="col" style={{ width: '2rem' }}>
            <div
              style={{ width: '2rem' }}
              className="slds-th__action slds-cell-fixed slds-p-around_x-small"
            >
              <Checkbox label="Select All" />
            </div>
          </th>
          {_.times(columns.length, i => (
            <Th columnName={columns[i]} key={i} style={{ width: '8.75rem' }} />
          ))}
          <th scope="col" style={{ width: '3.25rem' }}>
            <div
              style={{ width: '2.75rem' }}
              className="slds-th__action slds-cell-fixed"
            >
              <span className="slds-assistive-text">Actions</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {_.times(rows.length, i => (
          <RowData
            key={i}
            recordName={rows[i].recordName}
            accountName={rows[i].accountName}
            closeDate={rows[i].closeDate}
            stage={rows[i].stage}
            confidence={rows[i].confidence}
            amount={rows[i].amount}
            contact={rows[i].contact}
            buttonInvisible="slds-hidden"
          />
        ))}
      </tbody>
    </Table>
  </Container>
);
