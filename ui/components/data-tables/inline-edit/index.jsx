// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  TBodyTr,
  Td,
  RowTh,
  ErrorCell,
  SelectRowCell,
  EditableCell,
  RowActionsCell,
  DataTableContext,
} from '../';
import { IsDependentOn } from '../../../shared/helpers';

export const Demo = (props) => (
  <div className="demo-only" {...props}>
    {props.children}
  </div>
);
Demo.propTypes = {
  children: PropTypes.node,
};

/**
 * @name InlineEditTr - Common table row for inline edit data grids
 */
export const InlineEditTr = (props) => {
  const { isActionableMode } = useContext(DataTableContext);

  return (
    <TBodyTr isSelected={props.isSelected}>
      <Td
        hasFocus={props.focusedCell === 'error'}
        isEditable
        isErrorCell
        type="advanced"
      >
        <ErrorCell hasError={props.showRowError} index={props.index} />
      </Td>
      <Td
        hasFocus={props.focusedCell === 'selectRow'}
        isEditable
        tabIndex={
          !isActionableMode && props.focusableCell === 'selectRow' ? '0' : null
        }
        type="advanced"
      >
        <SelectRowCell
          checked={props.isSelected}
          index={props.index}
          inputTabIndex={isActionableMode ? '0' : '-1'}
        />
      </Td>
      <RowTh
        hasFocus={props.focusedCell === 'recordName'}
        isEditable
        tabIndex={
          !isActionableMode && props.focusableCell === 'recordName' ? '0' : null
        }
      >
        <EditableCell
          buttonText={'Edit Name of ' + props.recordName}
          cellLink
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
          !isActionableMode && props.focusableCell === 'accountName'
            ? '0'
            : null
        }
        type="advanced"
      >
        <EditableCell
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
          buttonText={'Edit Close Date of ' + props.recordName}
          cellText={props.closeDate}
          index={props.index}
        />
      </Td>
      <Td isEditable type="advanced">
        <EditableCell
          buttonText={'Edit Stage of ' + props.recordName}
          cellText={props.stage}
          index={props.index}
        />
      </Td>
      <Td isEditable isLocked type="advanced">
        <EditableCell
          buttonText={'Edit Confidence of ' + props.recordName}
          cellText={props.confidence}
          index={props.index}
          isLocked
        />
      </Td>
      <Td isEditable type="advanced">
        <EditableCell
          buttonText={'Edit Amount of ' + props.recordName}
          cellText={props.amount}
          index={props.index}
        />
      </Td>
      <Td isEditable type="advanced">
        <EditableCell
          buttonText={'Edit Contact of ' + props.recordName}
          cellText={props.contact}
          index={props.index}
        />
      </Td>
      <Td isEditable type="advanced">
        <RowActionsCell isEditable rowName={props.recordName} />
      </Td>
    </TBodyTr>
  );
};
InlineEditTr.displayName = 'InlineEditTr';
InlineEditTr.propTypes = {
  accountName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  closeDate: PropTypes.string.isRequired,
  confidence: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  focusableCell: PropTypes.string,
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
  stage: PropTypes.string.isRequired,
};
