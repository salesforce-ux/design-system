// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import {
  TBodyTr,
  Td,
  RowTh,
  ErrorCell,
  SelectRowCell,
  EditableCell,
  RowActionsCell
} from '../';
import { CannotBeSetWith, IsDependentOn } from '../../../shared/helpers';

export const Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
  </div>
);
Demo.propTypes = {
  children: PropTypes.node
};

/**
 * @name InlineEditTr - Common table row for inline edit data grids
 */
export const InlineEditTr = props => (
  <TBodyTr isSelected={props.isSelected}>
    <Td
      hasFocus={props.focusedCell === 'error'}
      isEditable
      isErrorCell
      type="advanced"
    >
      <ErrorCell
        actionableMode={props.actionableMode}
        hasError={props.showRowError}
        index={props.index}
      />
    </Td>
    <Td
      hasFocus={props.focusedCell === 'selectRow'}
      isEditable
      tabIndex={
        !props.actionableMode && props.focusableCell === 'selectRow'
          ? '0'
          : null
      }
      type="advanced"
    >
      <SelectRowCell
        checked={props.isSelected}
        index={props.index}
        inputTabIndex={props.actionableMode ? '0' : '-1'}
      />
    </Td>
    <RowTh
      hasFocus={props.focusedCell === 'recordName'}
      isEditable
      tabIndex={
        !props.actionableMode && props.focusableCell === 'recordName'
          ? '0'
          : null
      }
    >
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Name of ' + props.recordName}
        cellLink="javascript:void(0);"
        cellText={props.recordName}
        index={props.index}
      />
    </RowTh>
    <Td
      hasError={props.showCellError}
      hasFocus={props.focusedCell === 'accountName'}
      isEditable
      isEdited={props.showEditedCell}
      isEditing={props.showEdit}
      isLocked={props.isLocked}
      tabIndex={
        !props.actionableMode && props.focusableCell === 'accountName'
          ? '0'
          : null
      }
      type="advanced"
    >
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Account Name of ' + props.recordName}
        cellText={props.accountName}
        hasError={props.showEditError}
        index={props.index}
        isLocked={props.isLocked}
        isRequired={props.showEditRequired}
        showEdit={props.showEdit}
      />
    </Td>
    <Td isEditable type="advanced">
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Close Date of ' + props.recordName}
        cellText={props.closeDate}
        index={props.index}
      />
    </Td>
    <Td isEditable type="advanced">
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Stage of ' + props.recordName}
        cellText={props.stage}
        index={props.index}
      />
    </Td>
    <Td isEditable isLocked type="advanced">
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Confidence of ' + props.recordName}
        cellText={props.confidence}
        index={props.index}
        isLocked
      />
    </Td>
    <Td isEditable type="advanced">
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Amount of ' + props.recordName}
        cellText={props.amount}
        index={props.index}
      />
    </Td>
    <Td isEditable type="advanced">
      <EditableCell
        actionableMode={props.actionableMode}
        buttonText={'Edit Contact of ' + props.recordName}
        cellText={props.contact}
        index={props.index}
      />
    </Td>
    <Td isEditable type="advanced">
      <RowActionsCell
        actionableMode={props.actionableMode}
        isEditable
        rowName={props.recordName}
      />
    </Td>
  </TBodyTr>
);
InlineEditTr.displayName = 'InlineEditTr';
InlineEditTr.propTypes = {
  accountName: PropTypes.string.isRequired,
  actionableMode: PropTypes.bool,
  amount: PropTypes.string.isRequired,
  closeDate: PropTypes.string.isRequired,
  confidence: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  focusableCell: CannotBeSetWith('actionableMode', PropTypes.string),
  focusedCell: PropTypes.string,
  index: PropTypes.number.isRequired,
  isLocked: PropTypes.bool,
  recordName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  showCellError: IsDependentOn('showRowError', PropTypes.bool),
  showEdit: PropTypes.bool,
  showEditError: PropTypes.bool,
  showEditRequired: PropTypes.bool,
  showEditedCell: PropTypes.bool,
  showRowError: PropTypes.bool,
  stage: PropTypes.string.isRequired
};
