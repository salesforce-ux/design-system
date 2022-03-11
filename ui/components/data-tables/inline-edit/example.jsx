// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';

import {
  InlineEditTableContainer as Container,
  Table,
  AdvancedDataTableHead as Thead,
  TBody,
  DataTableContext
} from '../';
import { Demo, InlineEditTr } from './';

import { Popover } from '../../popovers/base-legacy/example';
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

// exported for branding docblocks page which is hidden
export const InlineEditTableFocusedCell = () => (
  <Container>
    <Table
      isBordered
      isEditable
      isFixedLayout
      isResizable
      selectionType="multiple"
      style={{ width: '66.75rem' }}
      type="advanced"
      ariaLabel="Example inline edit table"
    >
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
        <TBody>
          {rows.map((row, i) => (
            <InlineEditTr
              focusedCell={i === 0 ? 'recordName' : null}
              index={i + 1}
              isSelected={false}
              key={i}
              {...row}
            />
          ))}
        </TBody>
      </DataTableContext.Provider>
    </Table>
  </Container>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Container>
        <Table
          hasNoCellFocus
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example default inline edit table with cell focused"
        >
          <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
          <TBody>
            {rows.map((row, i) => (
              <InlineEditTr
                focusableCell="recordName"
                index={i + 1}
                isSelected={false}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </Table>
      </Container>
    )
  }
];

export let states = [
  {
    id: 'with-link',
    label: 'Cell focused - Link (Actionable mode)',
    element: <InlineEditTableFocusedCell />,
    script: `
      document.getElementById('link-01').focus()
    `
  },
  {
    id: 'checkbox',
    label: 'Cell focused - Checkbox (Actionable mode)',
    element: (
      <Container>
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with checkbox cell focused"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  focusedCell={i === 0 ? 'selectRow' : null}
                  index={i + 1}
                  isSelected={false}
                  key={i}
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
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
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in navigation mode with cell focused"
        >
          <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
          <TBody>
            {rows.map((row, i) => (
              <InlineEditTr
                focusableCell={i === 0 ? 'accountName' : null}
                focusedCell={i === 0 ? 'accountName' : null}
                index={i + 1}
                isSelected={false}
                key={i}
                {...row}
              />
            ))}
          </TBody>
        </Table>
      </Container>
    )
  },
  {
    id: 'edit',
    label: 'Cell edit (Actionable mode)',
    element: (
      <Container>
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with cell edit"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  index={i + 1}
                  isSelected={false}
                  key={i}
                  showEdit={i === 0}
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
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
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with required cell edit"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  index={i + 1}
                  isSelected={false}
                  key={i}
                  showEdit={i === 0}
                  showEditRequired
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
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
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with cell error"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  index={i + 1}
                  isSelected={false}
                  key={i}
                  showEdit={i === 0}
                  showEditError
                  showEditRequired
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
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
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with cell edited"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  index={i + 1}
                  isSelected={false}
                  key={i}
                  showEditedCell={i === 0}
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
        </Table>
      </Container>
    )
  },
  {
    id: 'row-selected-with-edited-cell',
    label: 'Row Selected with an Edited Cell',
    element: (
      <Container>
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with cell edited in selected row"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  className={i === 0 ? 'slds-is-selected' : null}
                  index={i + 1}
                  isSelected={i === 0}
                  key={i}
                  showEditedCell={i === 0}
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
        </Table>
      </Container>
    )
  },
  {
    id: 'row-error',
    label: 'Error - Row level on save (Actionable mode)',
    element: (
      <Container>
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with cell error on save"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  focusedCell={i === 0 ? 'accountName' : null}
                  index={i + 1}
                  isSelected={false}
                  key={i}
                  showCellError={i === 0}
                  showRowError={i === 0}
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
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
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in actionable mode with cell error on save in selected row"
        >
          <DataTableContext.Provider value={{ isActionableMode: true }}>
            <Thead columns={columns} hasErrorColumn mainColumnWidth="8.75rem" />
            <TBody>
              {rows.map((row, i) => (
                <InlineEditTr
                  className={i === 0 ? 'slds-is-selected' : null}
                  index={i + 1}
                  isSelected={i === 0}
                  key={i}
                  showCellError={i === 0}
                  showRowError={i === 0}
                  {...row}
                />
              ))}
            </TBody>
          </DataTableContext.Provider>
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
          <Table
            isBordered
            isEditable
            isFixedLayout
            isResizable
            selectionType="multiple"
            style={{ width: '66.75rem' }}
            type="advanced"
            ariaLabel="Example inline edit table in actionable mode with error indicator focused"
          >
            <DataTableContext.Provider value={{ isActionableMode: true }}>
              <Thead
                columns={columns}
                hasErrorColumn
                mainColumnWidth="8.75rem"
              />
              <TBody>
                {rows.map((row, i) => (
                  <InlineEditTr
                    focusedCell={i === 0 ? 'error' : null}
                    index={i + 1}
                    isSelected={false}
                    key={i}
                    showCellError={i === 0}
                    showRowError={i === 0}
                    {...row}
                  />
                ))}
              </TBody>
            </DataTableContext.Provider>
          </Table>
          <Popover
            className="slds-popover_error slds-nubbin_bottom-left"
            closeButton
            header={
              <FeedbackHeader
                headingId={headingUniqueId}
                symbol="error"
                title="Resolve error"
              />
            }
            headingId={headingUniqueId}
            inverse
            style={{
              position: 'absolute',
              top: '-56px'
            }}
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
        <Table
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in navigation mode with header cell focused"
        >
          <Thead
            columns={columns}
            hasErrorColumn
            hasFocus
            mainColumnWidth="8.75rem"
          />
          <TBody>
            {rows.map((row, i) => (
              <InlineEditTr
                accountName={rows[i].accountName}
                amount={rows[i].amount}
                closeDate={rows[i].closeDate}
                confidence={rows[i].confidence}
                contact={rows[i].contact}
                index={i + 1}
                isSelected={false}
                key={i}
                recordName={rows[i].recordName}
                stage={rows[i].stage}
              />
            ))}
          </TBody>
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
          hasNoCellFocus
          isBordered
          isEditable
          isFixedLayout
          isResizable
          selectionType="multiple"
          style={{ width: '66.75rem' }}
          type="advanced"
          ariaLabel="Example inline edit table in navigation mode with header cell marked"
        >
          <Thead
            columns={columns}
            hasErrorColumn
            hasFocus
            mainColumnWidth="8.75rem"
          />
          <TBody>
            {rows.map((row, i) => (
              <InlineEditTr
                accountName={rows[i].accountName}
                amount={rows[i].amount}
                closeDate={rows[i].closeDate}
                confidence={rows[i].confidence}
                contact={rows[i].contact}
                index={i + 1}
                isSelected={false}
                key={i}
                recordName={rows[i].recordName}
                stage={rows[i].stage}
              />
            ))}
          </TBody>
        </Table>
      </Container>
    )
  }
];
