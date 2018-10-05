// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _, { IsDependentOn } from '../../shared/helpers';

import ButtonIcon from '../button-icons/';
import { Popover } from '../popovers/base/example';
import { Checkbox } from '../checkbox/base/example';
import { Radio } from '../radio-group/base/example';
import { UtilityIcon } from '../icons/base/example';

export const InlineEditTableContainer = props => (
  <div className="slds-table_edit_container slds-is-relative">
    {props.children}
  </div>
);
InlineEditTableContainer.propTypes = {
  children: PropTypes.node
};

export const Table = props => {
  const computedStyles = classNames('slds-table', {
    'slds-table_cell-buffer': props.hasCellBuffer,
    'slds-table_header-hidden': props.hasHiddenHeader,
    'slds-no-row-hover': props.hasNoRowHover,
    'slds-no-cell-focus': props.hasNoCellFocus,
    'slds-table_bordered': props.isBordered,
    'slds-table_col-bordered': props.isColBordered,
    'slds-table_edit': props.isEditable,
    'slds-table_fixed-layout': props.isFixedLayout,
    'slds-max-medium-table_stacked-horizontal': props.isResponsive,
    'slds-max-medium-table_stacked': props.isResponsiveStacked,
    'slds-table_resizable-cols': props.isResizable,
    'slds-table_striped': props.isStriped,
    'slds-tree slds-table_tree': props.type === 'treegrid'
  });

  const getComputedRole = () => {
    let computedRole = null;
    switch (props.type) {
      case 'advanced':
        computedRole = 'grid';
        break;
      case 'treegrid':
        computedRole = 'treegrid';
        break;
    }
    return computedRole;
  };

  return (
    <table
      aria-multiselectable={props.selectionType === 'multiple' ? 'true' : null}
      className={computedStyles}
      role={getComputedRole()}
      style={props.style}
    >
      {props.children}
    </table>
  );
};
Table.displayName = 'Table';
Table.propTypes = {
  children: PropTypes.node,
  hasCellBuffer: PropTypes.bool,
  hasHiddenHeader: PropTypes.bool,
  hasNoCellFocus: PropTypes.bool,
  hasNoRowHover: PropTypes.bool,
  isBordered: PropTypes.bool,
  isColBordered: PropTypes.bool,
  isEditable: PropTypes.bool,
  isFixedLayout: PropTypes.bool,
  isResizable: PropTypes.bool,
  isResponsive: PropTypes.bool,
  isResponsiveStacked: PropTypes.bool,
  isStriped: PropTypes.bool,
  selectionType: PropTypes.oneOf(['multiple', 'single']),
  style: PropTypes.object,
  type: PropTypes.oneOf(['advanced', 'base', 'treegrid']).isRequired
};

export const THead = props => {
  const getComputedClasses = () =>
    props.isHidden ? 'slds-assistive-text' : null;

  return <thead className={getComputedClasses()}>{props.children}</thead>;
};
THead.displayName = 'THead';
THead.propTypes = {
  children: PropTypes.node,
  isHidden: PropTypes.bool
};

/**
 * @name THeadTr - tr element for advanced data table header
 */
export const THeadTr = props => (
  <tr className="slds-line-height_reset">{props.children}</tr>
);
THeadTr.displayName = 'THeadTr';
THeadTr.propTypes = {
  children: PropTypes.node
};

/**
 * @name ColumnTh - th element for all advanced data table column headers
 */
export const ColumnTh = props => {
  const getAriaSort = () => {
    let ariaSort = null;
    if (props.isSortable) {
      ariaSort = props.sortDirection || 'none';
    }
    return ariaSort;
  };

  const computedClasses = classNames({
    'slds-has-button-menu': props.hasMenu,
    'slds-has-focus': props.hasFocus,
    'slds-is-resizable': props.isResizable,
    'slds-text-align_right': props.isRightAligned,
    'slds-is-sortable': props.isSortable,
    'slds-is-sorted':
      props.sortDirection === 'ascending' ||
      props.sortDirection === 'descending',
    'slds-is-sorted_asc': props.sortDirection === 'ascending',
    'slds-is-sorted_desc': props.sortDirection === 'descending'
  });

  return (
    <th
      aria-label={props['aria-label']}
      aria-sort={getAriaSort()}
      className={computedClasses}
      scope="col"
      style={props.style}
    >
      {props.children}
    </th>
  );
};
ColumnTh.displayName = 'ColumnTh';
ColumnTh.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  hasMenu: PropTypes.bool,
  isResizable: PropTypes.bool,
  isRightAligned: PropTypes.bool,
  isSortable: PropTypes.bool,
  sortDirection: PropTypes.oneOf(['ascending', 'descending', 'none']),
  style: PropTypes.object // used for setting column width when columns are resizable
};

/**
 * @name ColumnHeader - Plain column header for advanced data tables
 */
export const ColumnHeader = props => (
  <div
    className={classNames('slds-truncate', {
      'slds-assistive-text': props.isAssistiveText
    })}
    id={props.id}
    title={props.columnName}
  >
    {props.columnName}
  </div>
);
ColumnHeader.displayName = 'ColumnHeader';
ColumnHeader.propTypes = {
  columnName: PropTypes.string.isRequired,
  id: PropTypes.string,
  isAssistiveText: PropTypes.bool
};
ColumnHeader.defaultProps = {
  columnName: 'Column Name'
};

/**
 * @name ResizeControl - Grab handle used in the resizable column headers
 */
export const ResizeControl = props => {
  const uniqueId = _.uniqueId('cell-resize-handle-');

  return (
    <div className="slds-resizable">
      <input
        aria-label={props.label}
        className="slds-resizable__input slds-assistive-text"
        id={uniqueId}
        max="1000"
        min="20"
        tabIndex={props.tabIndex}
        type="range"
      />
      <span className="slds-resizable__handle">
        <span className="slds-resizable__divider" />
      </span>
    </div>
  );
};
ResizeControl.displayName = 'ResizeControl';
ResizeControl.propTypes = {
  label: PropTypes.string.isRequired,
  tabIndex: PropTypes.oneOf(['0', '-1'])
};

/**
 * @name InteractiveColumnHeader - Common th cell for use in advanced data grids that have sorting or interaction
 */
export let InteractiveColumnHeader = props => {
  const tabIndex = props.actionableMode ? '0' : '-1';

  const getHeaderIcon = () => {
    const matchingIcon = props.columnHeaderIcons.filter(
      icon => icon.column === props.columnName.toLowerCase()
    );
    if (matchingIcon.length) {
      return matchingIcon[0].icon;
    }
  };

  const renderHeaderText = () => (
    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
      {props.columnHeaderIcons ? getHeaderIcon() : null}
      <span className="slds-truncate" title={props.columnName}>
        {props.columnName}
      </span>
      {props.isSortable && (
        <UtilityIcon
          assistiveText={false}
          className="slds-icon-text-default slds-is-sortable__icon "
          symbol="arrowdown"
          title={false}
        />
      )}
    </div>
  );

  return (
    <React.Fragment>
      {props.isSortable ? (
        <a
          className="slds-th__action slds-text-link_reset"
          href="javascript:void(0);"
          role="button"
          tabIndex={tabIndex}
        >
          <span className="slds-assistive-text">Sort by: </span>
          {renderHeaderText()}
        </a>
      ) : (
        <div className="slds-th__action">{renderHeaderText()}</div>
      )}

      {props.sortDirection && (
        <span
          className="slds-assistive-text"
          aria-live="assertive"
          aria-atomic="true"
        >
          Sorted {props.sortDirection}
        </span>
      )}

      {props.hasMenu && (
        <ButtonIcon
          aria-haspopup="true"
          assistiveText={`Show ${props.columnName} column actions`}
          className="slds-th__action-button slds-button_icon-x-small"
          iconClassName="slds-button__icon_hint slds-button__icon_small"
          symbol="chevrondown"
          tabIndex={props.actionableMode ? '0' : '-1'}
          title={`Show ${props.columnName} column actions`}
        />
      )}

      {props.isResizable && (
        <ResizeControl
          label={
            props.columnName + ' column width' || 'Column Name column width'
          }
          tabIndex={tabIndex}
        />
      )}
    </React.Fragment>
  );
};
InteractiveColumnHeader.displayName = 'InteractiveColumnHeader';
InteractiveColumnHeader.propTypes = {
  actionableMode: PropTypes.bool,
  columnName: PropTypes.string.isRequired,
  columnHeaderIcons: PropTypes.array,
  hasMenu: PropTypes.bool,
  isResizable: PropTypes.bool,
  isSortable: PropTypes.bool,
  sortDirection: PropTypes.oneOf(['ascending', 'descending'])
};
InteractiveColumnHeader.defaultProps = {
  isResizable: true,
  isSortable: true
};

/**
 * @name SelectAllColumnHeader - Common "Select All" column header for all grids
 */
export const SelectAllColumnHeader = props => (
  <React.Fragment>
    <span id="column-group-header" className="slds-assistive-text">
      Choose a row
    </span>
    <div className="slds-th__action slds-th__action_form">
      <Checkbox
        tabIndex={props.actionableMode ? '0' : '-1'}
        labelId="check-select-all-label"
        label="Select All"
        hideLabel
        checked={props.checked ? true : null}
        groupId="column-group-header"
      />
    </div>
  </React.Fragment>
);
SelectAllColumnHeader.displayName = 'SelectAllColumnHeader';
SelectAllColumnHeader.propTypes = {
  actionableMode: PropTypes.bool,
  checked: PropTypes.bool
};

/**
 * @name AdvancedDataTableHead - Entire data driven Advanced data table head, thead, tr and all headers
 */
export const AdvancedDataTableHead = props => {
  const selectAllColumnWidth = props.hasErrorColumn ? '2rem' : '3.25rem';
  const mainColumnWidth = props.mainColumnWidth || null;

  return (
    <THead isHidden={props.isHidden}>
      <THeadTr>
        {props.hasErrorColumn ? (
          <ColumnTh style={{ width: '3.75rem' }}>
            <ColumnHeader columnName="Errors" isAssistiveText />
          </ColumnTh>
        ) : null}

        {!props.hasNoRowSelection && (
          <ColumnTh
            isRightAligned={!props.hasErrorColumn || null}
            style={{ width: selectAllColumnWidth }}
          >
            {props.hasSingleRowSelect || props.isHidden ? (
              <ColumnHeader
                columnName="Choose a row to select"
                id="column-group-header"
                isAssistiveText
              />
            ) : (
              <SelectAllColumnHeader
                actionableMode={props.actionableMode}
                checked={props.selectAll}
              />
            )}
          </ColumnTh>
        )}

        {props.columns.map((column, index) => (
          <ColumnTh
            key={index}
            aria-label={column}
            hasFocus={index === 0 ? props.hasFocus : null}
            hasMenu={props.hasMenus}
            isResizable={props.isResizable && !props.isHidden}
            isSortable={props.isSortable && !props.isHidden}
            sortDirection={index === 0 ? props.sortDirection : null}
            style={{
              width:
                index === 0 && props.singleColumnWidth
                  ? props.singleColumnWidth
                  : mainColumnWidth
            }}
          >
            <InteractiveColumnHeader
              actionableMode={props.actionableMode}
              columnName={column}
              columnHeaderIcons={props.columnHeaderIcons}
              hasMenu={props.hasMenus}
              isResizable={props.isResizable && !props.isHidden}
              isSortable={props.isSortable && !props.isHidden}
              sortDirection={index === 0 ? props.sortDirection : null}
            />
          </ColumnTh>
        ))}

        {props.hasRowLevelActions && (
          <ColumnTh style={{ width: '3.25rem' }}>
            <ColumnHeader columnName="Actions" isAssistiveText />
          </ColumnTh>
        )}
      </THeadTr>
    </THead>
  );
};
AdvancedDataTableHead.displayName = 'AdvancedDataTableHead';
AdvancedDataTableHead.propTypes = {
  actionableMode: PropTypes.bool,
  columnHeaderIcons: PropTypes.array,
  columns: PropTypes.array.isRequired,
  hasErrorColumn: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasMenus: PropTypes.bool,
  hasNoRowSelection: PropTypes.bool,
  hasRowLevelActions: PropTypes.bool,
  hasSingleRowSelect: PropTypes.bool,
  isHidden: PropTypes.bool,
  isResizable: PropTypes.bool,
  isSortable: PropTypes.bool,
  mainColumnWidth: PropTypes.string,
  selectAll: PropTypes.bool,
  singleColumnWidth: PropTypes.string,
  sortDirection: PropTypes.oneOf(['ascending', 'descending', 'none'])
};
AdvancedDataTableHead.defaultProps = {
  hasRowLevelActions: true,
  isResizable: true,
  isSortable: true
};

/**
 * @name TBody - tbody element to wrap all table content
 */
export const TBody = props => <tbody>{props.children}</tbody>;
TBody.displayName = 'TBody';
TBody.propTypes = {
  children: PropTypes.node
};

/**
 * @name TBodyTr - A common row container for advanced data table types: base, inline-edit, and product
 */
export const TBodyTr = props => (
  <tr
    aria-expanded={props.isExpanded}
    aria-level={props.level}
    aria-posinset={props.positionWithinLevel}
    aria-selected={props.isSelected}
    aria-setsize={props.numberOfItemsAtLevel}
    className={classNames('slds-hint-parent', {
      'slds-align-top': props.isTopAligned,
      'slds-is-selected': props.isSelected
    })}
    tabIndex={props.tabIndex}
  >
    {props.children}
  </tr>
);
TBodyTr.displayName = 'TBodyTr';
TBodyTr.propTypes = {
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
  isSelected: PropTypes.bool,
  isTopAligned: PropTypes.bool,
  level: PropTypes.string,
  positionWithinLevel: PropTypes.string,
  numberOfItemsAtLevel: PropTypes.string,
  tabIndex: PropTypes.oneOf(['0', '-1'])
};

/**
 * @name Td
 */
export const Td = props => {
  const computedClasses = classNames({
    'slds-has-focus': props.hasFocus,
    'slds-cell-edit': props.isEditable,
    'slds-is-edited': props.isEdited,
    'slds-cell-error': props.isErrorCell,
    'slds-text-align_right': props.isRightAligned,
    'slds-cell-shrink': props.isShrunken,
    'slds-has-error': props.hasError
  });

  const getComputedRole = () => {
    let computedRole = null;
    switch (props.type) {
      case 'advanced':
      case 'treegrid':
        computedRole = 'gridcell';
        break;
    }
    return computedRole;
  };

  return (
    <td
      aria-readonly={props.isLocked}
      aria-selected={props.isEditing}
      className={computedClasses || null}
      data-label={props['data-label']}
      role={getComputedRole()}
      style={props.style}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </td>
  );
};
Td.displayName = 'Td';
Td.propTypes = {
  children: PropTypes.node,
  'data-label': PropTypes.string,
  hasError: PropTypes.bool,
  hasFocus: PropTypes.bool,
  isEditable: PropTypes.bool,
  isEdited: PropTypes.bool,
  isEditing: PropTypes.bool,
  isErrorCell: PropTypes.bool,
  isLocked: PropTypes.bool,
  isRightAligned: PropTypes.bool,
  isShrunken: PropTypes.bool,
  style: PropTypes.object,
  tabIndex: PropTypes.oneOf(['0', '-1']),
  type: PropTypes.oneOf(['advanced', 'base', 'treegrid']).isRequired
};

/**
 * @name RowTh
 */
export const RowTh = props => {
  const computedClasses = classNames({
    'slds-cell-edit': props.isEditable,
    'slds-has-focus': props.hasFocus,
    'slds-tree__item': props.type === 'treegrid'
  });

  return (
    <th
      className={computedClasses || null}
      data-label={props['data-label']}
      scope="row"
      tabIndex={props.tabIndex}
    >
      {props.children}
    </th>
  );
};
RowTh.displayName = 'RowTh';
RowTh.propTypes = {
  children: PropTypes.node,
  'data-label': PropTypes.string,
  hasFocus: PropTypes.bool,
  isEditable: PropTypes.bool,
  tabIndex: PropTypes.oneOf(['0', '-1']),
  type: PropTypes.oneOf(['base', 'advanced', 'treegrid'])
};

/**
 * @name SelectRowCell - Common table cell for selecting a row in a grid
 */
export const SelectRowCell = props => (
  <React.Fragment>
    {props.hasSingleRowSelect ? (
      <Radio
        checked={props.checked}
        groupId="column-group-header"
        hideLabel
        id={`radio-0${props.index}`}
        label={`Select item ${props.index}`}
        labelId={`radio-button-label-0${props.index}`}
        tabIndex={props.inputTabIndex}
      />
    ) : (
      <Checkbox
        checked={props.checked}
        groupId="column-group-header"
        hideLabel
        id={`checkbox-0${props.index}`}
        label={`Select item ${props.index}`}
        labelId={`check-button-label-0${props.index}`}
        tabIndex={props.inputTabIndex}
      />
    )}
  </React.Fragment>
);
SelectRowCell.displayName = 'SelectRowCell';
SelectRowCell.propTypes = {
  checked: PropTypes.bool,
  hasSingleRowSelect: PropTypes.bool,
  index: PropTypes.number.isRequired,
  inputTabIndex: PropTypes.oneOf(['0', '-1'])
};

/**
 * @name RowActionsCell - Common cell for holding Row Level Actions in a Grid
 */
export const RowActionsCell = props => (
  <ButtonIcon
    assistiveText={`More actions for ${props.rowName}`}
    aria-haspopup="true"
    className="slds-button_icon-border-filled slds-button_icon-x-small"
    iconClassName="slds-button__icon_hint slds-button__icon_small"
    symbol="down"
    tabIndex={props.actionableMode ? '0' : '-1'}
    title={`More actions for ${props.rowName}`}
  />
);
RowActionsCell.displayName = 'RowActionsCell';
RowActionsCell.propTypes = {
  actionableMode: PropTypes.bool,
  rowName: PropTypes.string.isRequired
};

/**
 * @name ErrorCell - Common table cell to be used for a row errors
 */
export const ErrorCell = props => (
  <React.Fragment>
    <ButtonIcon
      aria-hidden={props.hasError ? null : 'true'}
      assistiveText={`Item ${props.index} has errors`}
      className={classNames(
        'slds-button_icon-error slds-m-horizontal_xxx-small',
        {
          'slds-hidden': !props.hasError
        }
      )}
      id={'error-0' + props.index}
      symbol="error"
      tabIndex={props.actionableMode ? '0' : '-1'}
      title={`Item ${props.index} has errors`}
    />
    <span className="slds-row-number slds-text-body_small slds-text-color_weak" />
  </React.Fragment>
);
ErrorCell.displayName = 'ErrorCell';
ErrorCell.propTypes = {
  actionableMode: PropTypes.bool,
  hasError: PropTypes.bool,
  index: PropTypes.number.isRequired
};

/**
 * @name ReadOnlyCell - Cell content common to all readonly data grid cell
 */
export const ReadOnlyCell = props => (
  <div className="slds-truncate" title={props.cellText}>
    {props.cellLink ? (
      <a href={props.cellLink} tabIndex={props.actionableMode ? '0' : '-1'}>
        {props.cellText}
      </a>
    ) : (
      props.cellText
    )}
  </div>
);
ReadOnlyCell.displayName = 'ReadOnlyCell';
ReadOnlyCell.propTypes = {
  actionableMode: IsDependentOn('cellLink', PropTypes.bool),
  cellLink: PropTypes.string,
  cellText: PropTypes.string.isRequired
};

/**
 * @name EditableCell - Common cell content for inline edit grids
 */
export const EditableCell = props => (
  <React.Fragment>
    <span className="slds-grid slds-grid_align-spread">
      {props.cellLink ? (
        <a
          className="slds-truncate"
          href={props.cellLink}
          id={`link-0${props.index}`}
          tabIndex={props.actionableMode ? '0' : '-1'}
          title={props.cellText}
        >
          {props.cellText}
        </a>
      ) : (
        <span className="slds-truncate" title={props.cellText}>
          {props.cellText}
        </span>
      )}
      <ButtonIcon
        assistiveText={props.buttonText}
        className="slds-cell-edit__button slds-m-left_x-small"
        disabled={props.isLocked}
        iconClassName={classNames('slds-button__icon_hint', {
          'slds-button__icon_edit': !props.isLocked,
          'slds-button__icon_lock slds-button__icon_small': props.isLocked
        })}
        symbol={props.isLocked ? 'lock' : 'edit'}
        tabIndex={props.actionableMode ? '0' : '-1'}
        title={props.buttonText}
      />
    </span>
    {props.showEdit && (
      <EditPopover isRequired={props.isRequired} hasError={props.hasError} />
    )}
  </React.Fragment>
);
EditableCell.displayName = 'EditableCell';
EditableCell.propTypes = {
  actionableMode: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  cellLink: PropTypes.string,
  cellText: PropTypes.string.isRequired,
  hasError: IsDependentOn('showEdit', PropTypes.bool),
  index: PropTypes.number,
  isLocked: PropTypes.bool,
  isRequired: IsDependentOn('showEdit', PropTypes.bool),
  showEdit: PropTypes.bool
};

/**
 * @name EditPopover - Popover used to edit a cell in inline edit grids
 * @todo Replace form elements with react components and update those to show required but hidden label
 */
export const EditPopover = props => (
  <Popover
    className="slds-popover slds-popover_edit"
    style={{ position: 'absolute', top: '0', left: '0.0625rem' }}
  >
    <div
      className={classNames('slds-form-element slds-grid slds-wrap', {
        'slds-has-error': props.hasError
      })}
    >
      <label
        className="slds-form-element__label slds-form-element__label_edit slds-no-flex"
        htmlFor="company-01"
      >
        {props.isRequired ? (
          <abbr className="slds-required" title="required">
            *
          </abbr>
        ) : null}
        <span className="slds-assistive-text">Company</span>
      </label>
      <div className="slds-form-element__control slds-grow">
        <input
          aria-describedby={props.hasError ? 'error-message-01' : null}
          className="slds-input"
          defaultValue="Acme Enterprises"
          id="company-01"
          required={props.isRequired}
          type="text"
        />
      </div>
      {props.hasError ? (
        <div id="error-message-01" className="slds-form-element__help">
          This field is required
        </div>
      ) : null}
    </div>
  </Popover>
);
EditPopover.displayName = 'EditPopover';
EditPopover.propTypes = {
  hasError: PropTypes.bool,
  isRequired: PropTypes.bool
};
