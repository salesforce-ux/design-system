// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';

import {
  AdvancedDataTable as Table,
  Thead,
  AdvancedDataTableTr as Tr
} from '../';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const columns = ['Name', 'Account Name', 'Close Date', 'Stage', 'Confidence', 'Amount', 'Contact'];

const rows = [{
  'recordName': 'Acme - 1,200 Widgets',
  'accountName': 'Acme',
  'closeDate': '4/10/15',
  'stage': 'Value Proposition',
  'confidence': '30%',
  'amount': '$25,000,000',
  'contact': 'jrogers@acme.com'
}, {
  'recordName': 'Acme - 200 Widgets',
  'accountName': 'Acme',
  'closeDate': '1/31/15',
  'stage': 'Prospecting',
  'confidence': '60%',
  'amount': '$5,000,000',
  'contact': 'bob@acme.com'
}, {
  'recordName': 'salesforce.com - 1,000 Widgets',
  'accountName': 'salesforce.com',
  'closeDate': '1/31/15 3:45PM',
  'stage': 'Id. Decision Makers',
  'confidence': '70%',
  'amount': '$25,000',
  'contact': 'nathan@salesforce.com'
}];

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Table>
    <Thead
      columns={columns}
    />
    <tbody>
      { _.times(rows.length, i =>
        <Tr key={i}
          index={i + 1}
          recordName={rows[i].recordName}
          accountName={rows[i].accountName}
          closeDate={rows[i].closeDate}
          stage={rows[i].stage}
          confidence={rows[i].confidence}
          amount={rows[i].amount}
          contact={rows[i].contact}
        />
      )}
    </tbody>
  </Table>
);

export let states = [
  {
    id: 'cell-focused',
    label: 'Cell Focused',
    element:
      <Table>
        <Thead
          columns={columns}
        />
        <tbody>
          { _.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              hasFocus
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'actionable-mode',
    label: 'Actionable Mode',
    element:
      <Table>
        <Thead
          columns={columns}
          actionableMode
        />
        <tbody>
          { _.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              actionableMode
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'row-selected',
    label: 'Row Selected (Actionable mode)',
    element:
      <Table>
        <Thead
          columns={columns}
          actionableMode
        />
        <tbody>
          { _.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              className={(i === 1) ? 'slds-is-selected' : null}
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              rowSelected={(i === 1) ? true : null}
              actionableMode
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'all-row-selected',
    label: 'All Rows Selected (Actionable mode)',
    element:
      <Table>
        <Thead
          columns={columns}
          actionableMode
          selectAll
        />
        <tbody>
          { _.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              className="slds-is-selected"
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              rowSelected
              actionableMode
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'sorted-column-asc',
    label: 'Sorted Ascending (Actionable mode)',
    element:
      <Table>
        <Thead
          columns={columns}
          actionableMode
          sortDirection="ascending"
        />
        <tbody>
          { _.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              actionableMode
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'sorted-column-desc',
    label: 'Sorted Descending (Actionable mode)',
    element:
      <Table>
        <Thead
          columns={columns}
          actionableMode
          sortDirection="descending"
        />
        <tbody>
          { _.reverse(_.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              actionableMode
            />
          ))}
        </tbody>
      </Table>
  },
  {
    id: 'resized-column',
    label: 'Column resized (Actionable mode)',
    element:
      <Table>
        <Thead
          columns={columns}
          actionableMode
          singleColumnWidth="300px"
        />
        <tbody>
          { _.times(rows.length, i =>
            <Tr key={i}
              index={i + 1}
              recordName={rows[i].recordName}
              accountName={rows[i].accountName}
              closeDate={rows[i].closeDate}
              stage={rows[i].stage}
              confidence={rows[i].confidence}
              amount={rows[i].amount}
              contact={rows[i].contact}
              actionableMode
            />
          )}
        </tbody>
      </Table>
  }
];
