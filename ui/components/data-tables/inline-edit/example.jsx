// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';

import {
  InlineEditTableContainer as Container,
  AdvancedDataTable as Table,
  Thead,
  InlineEditTr
} from '../';

import { Popover } from '../../popovers/base/example';
import { FeedbackHeader } from '../../popovers/error/example';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

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

let Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
  </div>
);

export const InlineEditTable = () => (
  <Container>
    <Table isEditable style={{ width: '66.75rem' }}>
      <Thead
        columns={columns}
        hasErrorColumn
        mainColumnWidth="8.75rem"
        actionableMode
      />
      <tbody>
        {_.times(rows.length, i => (
          <InlineEditTr
            key={i}
            index={i + 1}
            {...rows[i]}
            focusableCell="recordName"
            focusedCell="recordName"
            actionableMode
          />
        ))}
      </tbody>
    </Table>
  </Container>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Container>
    <Table
      className="slds-no-cell-focus"
      isEditable
      style={{ width: '66.75rem' }}
    >
      <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
      <tbody>
        {_.times(rows.length, i => (
          <InlineEditTr
            key={i}
            index={i + 1}
            {...rows[i]}
            focusableCell="recordName"
          />
        ))}
      </tbody>
    </Table>
  </Container>
);

export let states = [
  {
    id: 'with-link',
    label: 'Cell focused - Link (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
            actionableMode
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                focusableCell="recordName"
                focusedCell="recordName"
                actionableMode
              />
            ))}
          </tbody>
        </Table>
      </Container>
    ),
    script: `
      document.getElementById('link-01').focus()
    `
  },
  {
    id: 'checkbox',
    label: 'Cell focused - Checkbox (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
            actionableMode
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                focusableCell="selectRow"
                focusedCell="selectRow"
                actionableMode
              />
            ))}
          </tbody>
        </Table>
      </Container>
    ),
    script: `
      document.getElementById('checkbox-01').focus()
    `
  },
  {
    id: 'focused',
    label: 'Cell focused (Navigation mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                focusableCell="accountName"
                focusedCell="accountName"
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  },
  {
    id: 'edit',
    label: 'Cell edit (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
            actionableMode
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                actionableMode
                showEdit
              />
            ))}
          </tbody>
        </Table>
      </Container>
    ),
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'required',
    label: 'Cell edit — Required (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            actionableMode
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                actionableMode
                showEdit
                showEditRequired
              />
            ))}
          </tbody>
        </Table>
      </Container>
    ),
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'error',
    label: 'Cell edit — Error (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            actionableMode
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                actionableMode
                showEdit
                showEditRequired
                showEditError
              />
            ))}
          </tbody>
        </Table>
      </Container>
    ),
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'edited',
    label: 'Cell edited (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            actionableMode
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                actionableMode
                showEditedCell
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  },
  {
    id: 'row-selected-with-edited-cell',
    label: 'Row Selected with an Edited Cell',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            actionableMode
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                className={i === 0 ? 'slds-is-selected' : null}
                {...rows[i]}
                rowSelected={i === 0 ? true : null}
                actionableMode
                showEditedCell
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  },
  {
    id: 'row-error',
    label: 'Error - Row level on save (Actionable mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            actionableMode
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                {...rows[i]}
                actionableMode
                focusableCell="accountName"
                focusedCell="accountName"
                showCellError
                showRowError
              />
            ))}
          </tbody>
        </Table>
      </Container>
    ),
    script: `
      document.getElementById('button-01').focus()
    `
  },
  {
    id: 'row-error-and-selected',
    label:
      'Error - Row level on save (Actionable mode) with entire row selected',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            actionableMode
            columns={columns}
            hasErrorColumn
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                className={i === 0 ? 'slds-is-selected' : null}
                {...rows[i]}
                rowSelected={i === 0 ? true : null}
                actionableMode
                showCellError
                showRowError
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  },
  {
    id: 'row-error-focused',
    label: 'Error indicator - Focused (Actionable mode)',
    element: (
      <Demo style={{ marginTop: '100px', marginLeft: '10px' }}>
        <Container>
          <Table isEditable style={{ width: '66.75rem' }}>
            <Thead
              actionableMode
              columns={columns}
              hasErrorColumn
              mainColumnWidth="8.75rem"
            />
            <tbody>
              {_.times(rows.length, i => (
                <InlineEditTr
                  key={i}
                  index={i + 1}
                  {...rows[i]}
                  actionableMode
                  focusableCell="error"
                  focusedCell="error"
                  showCellError
                  showRowError
                />
              ))}
            </tbody>
          </Table>
          <Popover
            className="slds-popover_error slds-nubbin_bottom-left"
            headingId={headingUniqueId}
            popoverId="error-tooltip-01"
            header={
              <FeedbackHeader
                headingId={headingUniqueId}
                title="Resolve error"
                symbol="error"
              />
            }
            style={{
              position: 'absolute',
              top: '-56px'
            }}
            closeButton
            inverse
          >
            <p>Company encountered an error</p>
          </Popover>
        </Container>
      </Demo>
    ),
    script: `
      document.getElementById('error-01').focus()
    `
  },
  {
    id: 'header-cell-focused',
    label: 'Header cell focused (Navigation mode)',
    element: (
      <Container>
        <Table isEditable style={{ width: '66.75rem' }}>
          <Thead
            columns={columns}
            hasErrorColumn
            hasFocus
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                recordName={rows[i].recordName}
                accountName={rows[i].accountName}
                closeDate={rows[i].closeDate}
                stage={rows[i].stage}
                confidence={rows[i].confidence}
                amount={rows[i].amount}
                contact={rows[i].contact}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  },
  {
    id: 'header-cell-marked',
    label: 'Header cell marked (Navigation mode)',
    element: (
      <Container>
        <Table
          className="slds-no-cell-focus"
          isEditable
          style={{ width: '66.75rem' }}
        >
          <Thead
            columns={columns}
            hasErrorColumn
            hasFocus
            mainColumnWidth="8.75rem"
          />
          <tbody>
            {_.times(rows.length, i => (
              <InlineEditTr
                key={i}
                index={i + 1}
                recordName={rows[i].recordName}
                accountName={rows[i].accountName}
                closeDate={rows[i].closeDate}
                stage={rows[i].stage}
                confidence={rows[i].confidence}
                amount={rows[i].amount}
                contact={rows[i].contact}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  }
];
