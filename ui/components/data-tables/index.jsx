import React from 'react';
import classNames from 'classnames';
import _ from '../../shared/helpers';

import ButtonIcon from '../button-icons/';
import { StandardIcon } from '../icons/standard/example';
import { Checkbox } from '../checkbox/base/example';
import { Tooltip } from '../tooltips/base/example';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  Input
} from '../input/base/example';
import MediaObject from '../../utilities/media-objects/index.react';
import { Ellie } from '../dynamic-icons/ellie/example';
import { Score } from '../dynamic-icons/score/example';
import SvgIcon from '../../shared/svg-icon';
import { Radio } from '../radio-group/base/example';

const checkboxRadioGroupHeaderId = 'check-group-header';

export const InlineEditTableContainer = props => (
  <div className="slds-table_edit_container slds-is-relative">
    {props.children}
  </div>
);

/**
 * @name AdvancedDataTable - Base table element for advanced data grids
 * @param {*} props
 * @prop {boolean} isEditable - Sets whether or not the grid is editable
 * @prop {object} style - React based styles object to override base css
 * @prop {string} className - additional table classes
 */
export const AdvancedDataTable = props => (
  <table
    className={classNames(
      'slds-table slds-table_bordered slds-table_resizable-cols slds-table_fixed-layout',
      props.className,
      {
        'slds-table_edit': props.isEditable,
        'slds-table_column-3-wrap': props.columnWrap
      }
    )}
    role="grid"
    style={props.style}
  >
    {props.children}
  </table>
);

/**
 * @name Thead - thead block for advanced, inline, and product edit grids
 * @param {*} props
 * @prop {array} columnHeaderIcons - List of column names->icon name blocks which show an icon
 * @prop {array} columns - Grid columns
 * @prop {boolean} actionableMode - Specifies whether the grid is in actionable or navigation mode
 * @prop {boolean} hasErrorColumn - Specifies whether the grid has a errors column
 * @prop {boolean} hasFocus - Specifies whether a cell in the thead is in user focus
 * @prop {boolean} hasMenus - Specifies whether the cells in the thead have a menu button
 * @prop {boolean} hasNoSelectability - Specifies whether the thead should not contain a "select all" checkbox
 * @prop {boolean} isSingleSelect - Specifies if the row selection uses radio buttons
 * @prop {boolean} selectAll - Specifies whether the select all checkbox is marked
 * @prop {string} mainColumnWidth - Specifies width of main columns
 * @prop {string} singleColumnWidth - Specifies width of a specific column
 * @prop {string} sortDirection - Specifies the sort direction of a specific column
 */
export const Thead = props => {
  const selectAllColumnWidth = props.hasErrorColumn ? '2rem' : '3.25rem';
  const mainColumnWidth = props.mainColumnWidth || null;

  return (
    <thead>
      <tr className="slds-line-height_reset">
        {props.hasErrorColumn ? <ErrorsTh /> : null}

        {props.hasNoSelectability || props.isSingleSelect ? null : (
          <SelectAllTh
            actionableMode={props.actionableMode}
            checked={props.selectAll}
            className={!props.hasErrorColumn ? 'slds-text-align_right' : null}
            style={{ width: selectAllColumnWidth }}
          />
        )}

        {props.isSingleSelect && (
          <RadioGroupTh style={{ width: selectAllColumnWidth }} />
        )}

        {_.times(props.columns.length, i => (
          <Th
            actionableMode={props.actionableMode}
            aria-sort={
              i === 0 && props.sortDirection ? props.sortDirection : null
            }
            className={classNames({
              'slds-is-sorted': i === 0 && props.sortDirection,
              'slds-is-sorted_asc':
                i === 0 && props.sortDirection === 'ascending',
              'slds-is-sorted_desc':
                i === 0 && props.sortDirection === 'descending',
              'slds-has-focus': i === 0 && props.hasFocus,
              'slds-has-button-menu': props.hasMenus
            })}
            columnName={props.columns[i]}
            key={i}
            style={{
              width:
                i === 0 && props.singleColumnWidth
                  ? props.singleColumnWidth
                  : mainColumnWidth
            }}
            columnHeaderIcons={props.columnHeaderIcons}
            hasMenus={props.hasMenus}
          />
        ))}

        <ActionsTh />
      </tr>
    </thead>
  );
};

/**
 * @name Th - Common th cell for use in advanced data grids that have sorting or interaction
 * @param {*} props
 * @prop {boolean} actionableMode - Specifies whether the grid is in actionable or navigation mode
 * @prop {string} aria-sort
 * @prop {string} className
 * @prop {string} columnName - Display name of the column header
 * @prop {array} columnHeaderIcons - List of column names->icon name blocks which show an icon
 */
export let Th = props => {
  const {
    columnName,
    actionableMode,
    hasMenus,
    columnHeaderIcons,
    ...rest
  } = props;
  const tabIndex = actionableMode ? '0' : '-1';
  const uniqueId = _.uniqueId('cell-resize-handle-');
  const getIconName = name => {
    const iconBlock = Array.isArray(columnHeaderIcons)
      ? columnHeaderIcons.find(map => map[0] === columnName)
      : null;
    return iconBlock ? iconBlock[1] : null;
  };
  const getIconComponent = icon => {
    switch (icon) {
      case 'Ellie':
        return (
          <Ellie
            className="slds-is-paused"
            title="Einstein calculated"
            assistiveText="Einstein calculated"
          />
        );
      case 'Account':
        return (
          <SvgIcon
            className="slds-icon slds-icon_x-small slds-icon-standard-account"
            sprite="standard"
            symbol="account"
          />
        );
      default:
        return null;
    }
  };

  return (
    <th
      {...rest}
      aria-label={columnName}
      aria-sort={props['aria-sort'] || 'none'}
      className={classNames(
        'slds-is-sortable slds-is-resizable slds-text-title_caps',
        props.className
      )}
      scope="col"
    >
      <a
        className="slds-th__action slds-text-link_reset"
        href="javascript:void(0);"
        role="button"
        tabIndex={tabIndex}
      >
        <span className="slds-assistive-text">Sort by: </span>
        {getIconName(columnName) ? (
          <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <div className="slds-icon_container slds-m-right_xx-small">
              {getIconComponent(getIconName(columnName))}
            </div>
            <span
              key={`th-${props.index}`}
              className="slds-truncate"
              title={columnName || 'Column Name'}
            >
              {columnName || 'Column Name'}
            </span>
            <div className="slds-icon_container">
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"
                sprite="utility"
                symbol="arrowdown"
              />
            </div>
          </div>
        ) : (
          [
            <span
              key={`th-${props.index}`}
              className="slds-truncate"
              title={columnName || 'Column Name'}
            >
              {columnName || 'Column Name'}
            </span>,
            <div
              key={`sort-icon-${props.index}`}
              className="slds-icon_container"
            >
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"
                sprite="utility"
                symbol="arrowdown"
              />
            </div>
          ]
        )}
      </a>
      <span
        className="slds-assistive-text"
        aria-live="assertive"
        aria-atomic="true"
      >
        Sorted {props['aria-sort'] ? props['aria-sort'] : 'none'}
      </span>
      {props.hasMenus ? (
        <ButtonIcon
          assistiveText={`Show ${props.columnName} column actions`}
          className="slds-th__action-button slds-button_icon-x-small"
          iconClassName="slds-button__icon_hint slds-button__icon_small"
          symbol="chevrondown"
          tabIndex={props.actionableMode ? '0' : '-1'}
          title={`Show ${props.columnName} column actions`}
        />
      ) : null}
      <div className="slds-resizable">
        <input
          aria-label={
            columnName + ' column width' || 'Column Name column width'
          }
          className="slds-resizable__input slds-assistive-text"
          id={uniqueId}
          max="1000"
          min="20"
          tabIndex={tabIndex}
          type="range"
        />
        <span className="slds-resizable__handle">
          <span className="slds-resizable__divider" />
        </span>
      </div>
    </th>
  );
};

/**
 * @name SelectAllTh - Common "Select All" column header for all grids
 * @param {*} props
 * @prop {boolean} actionableMode - Specifies whether or not the grid is in actionable or navigation mode
 * @prop {boolean} checked - Specifies whether or not select all has been checked
 * @prop {object} style - React style object
 */
export const SelectAllTh = props => (
  <th style={props.style} className={props.className} scope="col">
    <span id={checkboxRadioGroupHeaderId} className="slds-assistive-text">
      Choose a row
    </span>
    <div className="slds-th__action slds-th__action_form">
      <Checkbox
        tabIndex={props.actionableMode ? '0' : '-1'}
        labelId="check-select-all-label"
        label="Select All"
        hideLabel
        checked={props.checked ? true : null}
        groupId={checkboxRadioGroupHeaderId}
      />
    </div>
  </th>
);

/**
 * @name RadioGroupTh - Radio group column header
 * @param {*} props
 * @prop {object} style - React style object
 */
export const RadioGroupTh = props => (
  <th className={props.className} scope="col" style={props.style}>
    <span id="radio-group-header" className="slds-assistive-text">
      Choose a row to select
    </span>
  </th>
);

/**
 * @name ActionsTh - Common "Row Level Actions" column header for all grids
 * @param {*} props
 */
export const ActionsTh = props => (
  <th scope="col" style={{ width: '3.25rem' }}>
    <div className="slds-th__action">
      <span className="slds-assistive-text">Actions</span>
    </div>
  </th>
);

/**
 * @name ErrorsTh - Common "Errors" column header for all grids
 * @param {*} props
 */
export const ErrorsTh = props => (
  <th scope="col" style={{ width: '3.75rem' }}>
    <div className="slds-th__action">
      <span className="slds-assistive-text">Errors</span>
    </div>
  </th>
);

/**
 * @name AdvancedDataTableTr - Table row for advanced data table components
 * @param {*} props
 * @prop {boolean} actionableMode - Specifies whether the grid is in actionable or navigation mode
 * @prop {boolean} hasFocus - Specifies whether a specific cell is in focus
 * @prop {boolean} hasScore - Specifies whether a row has a score cell
 * @prop {boolean} isSingleSelect - Specifies whether to use a radio button for selection or not
 * @prop {boolean} rowSelected
 * @prop {integer} index - Row index in the Grid
 * @prop {string} accountName
 * @prop {string} amount
 * @prop {string} amountScore
 * @prop {string} amountScoreLabel
 * @prop {string} className - CSS classes for the tr element
 * @prop {string} closeDate
 * @prop {string} confidence
 * @prop {string} contact
 * @prop {string} recordName
 * @prop {string} stage
 */
export const AdvancedDataTableTr = props => (
  <AdvancedDataTableTrElement
    className={props.className}
    rowSelected={props.rowSelected}
  >
    <SelectRowTd
      className="slds-text-align_right"
      inputTabIndex={props.actionableMode ? '0' : '-1'}
      checked={props.rowSelected}
      index={props.index}
      isSingleSelect={props.isSingleSelect}
    />
    <ReadOnlyBodyTh
      actionableMode={props.actionableMode}
      cellLink="javascript:void(0);"
      cellText={props.recordName}
      hasFocus={!props.actionableMode && props.index === 1 && props.hasFocus}
      index={props.index}
      tabIndex={!props.actionableMode && props.index === 1 ? '0' : null}
    />
    <ReadOnlyTd cellText={props.accountName} />
    <ReadOnlyTd cellText={props.closeDate} />
    <ReadOnlyTd cellText={props.stage} />
    <ReadOnlyTd cellText={props.confidence} />
    {props.hasScores && props.amountScore && props.amountScoreLabel ? (
      <AdvancedDataTableTd>
        <div className="slds-grid slds-grid_vertical-align-center">
          <div className="slds-truncate" title={props.amount}>
            {props.amount}
          </div>
          <div className="slds-icon_container slds-m-left_x-small slds-m-right_xx-small">
            <Score data-slds-state={props.amountScore} />
          </div>
          <div className="slds-truncate" title={props.amountScoreLabel}>
            {props.amountScoreLabel}
          </div>
        </div>
      </AdvancedDataTableTd>
    ) : (
      <ReadOnlyTd cellText={props.amount} />
    )}
    <ReadOnlyTd
      actionableMode={props.actionableMode}
      cellLink="javascript:void(0);"
      cellText={props.contact}
    />
    <RowActionsTd actionableMode={props.actionableMode} />
  </AdvancedDataTableTrElement>
);

/**
 * @name AdvancedDataTableTd
 * @param {*} props
 * @prop {*} children
 * @prop {boolean} hasError - Determines where or not the cell is in an error state
 * @prop {boolean} hasFocus - Determines where or not the cell has user focus
 * @prop {boolean} isEditable - Determines where or not the cell is editable
 * @prop {boolean} isEdited - Determines where or not the cell has been edited
 * @prop {boolean} isEditing - Determines where or not the cell is being edited
 * @prop {boolean} isLocked - Determines where or not the cell is locked from editing
 * @prop {integer} tabIndex - Sets the tabindex on the cell
 * @prop {string} className - Sets additional classnames to the cell
 */
export const AdvancedDataTableTd = props => {
  const {
    children,
    className,
    hasError,
    hasFocus,
    isEditable,
    isEdited,
    isEditing,
    isLocked,
    tabIndex
  } = props;

  let classes = null;

  if (className || isEditable || hasFocus || isEdited || hasError) {
    classes = classNames(className, {
      'slds-cell-edit': isEditable,
      'slds-has-focus': hasFocus,
      'slds-is-edited': isEdited,
      'slds-has-error': hasError
    });
  }

  return (
    <td
      aria-readonly={isLocked}
      aria-selected={isEditing}
      className={classes}
      role="gridcell"
      tabIndex={tabIndex}
    >
      {children}
    </td>
  );
};

/**
 * @name AdvancedDataTableBodyTh
 * @param {*} props
 * @prop {*} children
 * @prop {boolean} hasFocus - Determines where or not the cell has user focus
 * @prop {boolean} isEditable - Determines where or not the cell is editable
 * @prop {integer} tabIndex - Sets the tabindex on the cell
 */
export const AdvancedDataTableBodyTh = props => {
  const { children, hasFocus, isEditable, tabIndex } = props;

  let classes = null;

  if (isEditable || hasFocus) {
    classes = classNames({
      'slds-cell-edit': isEditable,
      'slds-has-focus': hasFocus
    });
  }

  return (
    <th className={classes} scope="row" tabIndex={tabIndex}>
      {children}
    </th>
  );
};

/**
 * @name SelectRowTd - Common table cell for selecting a row in a grid
 * @param {*} props
 * @prop {boolean} checked - Set checked on the cell checkbox
 * @prop {boolean} hasFocus - Determines whether the cell is in user focus
 * @prop {boolean} isEditable - Determines whether the cell is editable
 * @prop {boolean} isSingleSelect - Specifies whether to use a radio button for selection or not
 * @prop {integer} cellTabIndex - Set tabindex on the cell
 * @prop {integer} index - Grid row index
 * @prop {integer} inputTabIndex - Set tabindex on the checkbox
 * @prop {string} className
 */
export const SelectRowTd = props => (
  <AdvancedDataTableTd
    className={props.className}
    hasFocus={props.hasFocus}
    isEditable={props.isEditable}
    tabIndex={props.cellTabIndex}
  >
    {props.isSingleSelect ? (
      <Radio
        checked={props.checked}
        hideLabel
        id={`radio-0${props.index}`}
        labelId={`radio-button-label-0${props.index}`}
        label={`Select item ${props.index}`}
        groupId="radio-group-header"
        tabIndex={props.inputTabIndex}
      />
    ) : (
      <Checkbox
        checked={props.checked}
        hideLabel
        labelId={`check-button-label-0${props.index}`}
        id={`checkbox-0${props.index}`}
        label={`Select item ${props.index}`}
        groupId={checkboxRadioGroupHeaderId}
        tabIndex={props.inputTabIndex}
      />
    )}
  </AdvancedDataTableTd>
);

/**
 * @name RowActionsTd - Common cell for holding Row Level Actions in a Grid
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the Grid is in Actionable or Navigation mode
 * @prop {boolean} hasFocus - Determines whether or not the cell is in user focus
 * @prop {boolean} isEditable - Determines whether or not the cell is editable
 * @prop {string} className - Sets and class name on the cell
 */
export const RowActionsTd = props => (
  <AdvancedDataTableTd
    className={props.className}
    hasFocus={props.hasFocus}
    isEditable={props.isEditable}
  >
    <ButtonIcon
      assistiveText="Show More"
      className="slds-button_icon-border-filled slds-button_icon-x-small"
      iconClassName="slds-button__icon_hint slds-button__icon_small"
      symbol="down"
      tabIndex={props.actionableMode ? '0' : '-1'}
      title="Show More"
    />
  </AdvancedDataTableTd>
);

/**
 * @name ErrorTd - Common table cell to be used for a row errors
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {boolean} hasError - Determines whether or not the row has an error
 * @prop {boolean} hasFocus - Determines whether or not the cell has user focus
 * @prop {integer} index - Row index in the grid
 * @prop {integer} tabIndex - Sets tabindex on the cell
 */
export const ErrorTd = props => (
  <AdvancedDataTableTd
    className="slds-cell-error"
    hasFocus={props.hasFocus}
    isEditable
    tabIndex={props.tabIndex}
  >
    <ButtonIcon
      aria-describedby={
        props.hasError && props.hasFocus ? 'error-tooltip-01' : null
      }
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
      tabIndex={props.actionableMode && props.hasError ? null : '-1'}
      title={`Item ${props.index} has errors`}
    />
    <span className="slds-row-number slds-text-body_small slds-text-color_weak" />
  </AdvancedDataTableTd>
);

/**
 * @name ReadOnlyTd - Cell container for a readonly cell
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {string} cellText
 * @prop {string} cellLink - URL cell text can link to
 */
export const ReadOnlyTd = props => (
  <AdvancedDataTableTd>
    <ReadOnlyCellContent
      actionableMode={props.actionableMode}
      cellLink={props.cellLink}
      cellText={props.cellText}
    />
  </AdvancedDataTableTd>
);

/**
 * @name ReadOnlyBodyTh - Cell container for a readonly row header
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {boolean} hasFocus - Determines whether the cell has user focus
 * @prop {integer} index - Grid row index
 * @prop {string} cellText
 * @prop {string} cellLink - URL cell text can link to
 */
export const ReadOnlyBodyTh = props => (
  <AdvancedDataTableBodyTh hasFocus={props.hasFocus} tabIndex={props.tabIndex}>
    <ReadOnlyCellContent
      actionableMode={props.actionableMode}
      cellLink={props.cellLink}
      cellText={props.cellText}
    />
  </AdvancedDataTableBodyTh>
);

/**
 * @name ReadOnlyCellContent - Cell content common to all readonly data grid cell
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {string} cellLink - URL the cell content should link to
 * @prop {string} cellText
 */
export const ReadOnlyCellContent = props => (
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

/**
 * @name InlineEditTr - Common table row for inline edit data grids
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {boolean} focusableCell - Name of the focusable cell in the grid
 * @prop {boolean} rowSelected - Set whether the row is selected
 * @prop {boolean} showCellError - Show an errored cell
 * @prop {boolean} showEdit - Show the edit dialog
 * @prop {boolean} showEditError - Show cell editing error
 * @prop {boolean} showEditRequired - Show required cell edit
 * @prop {boolean} showEditedCell - Show that a cell was edited
 * @prop {boolean} showRowError - Show the row has an error
 * @prop {integer} index - Grid row index
 * @prop {string} accountName
 * @prop {string} amount
 * @prop {string} closeDate
 * @prop {string} confidence
 * @prop {string} contact
 * @prop {string} focusedCell
 * @prop {string} recordName
 * @prop {string} stage
 */
export const InlineEditTr = props => (
  <AdvancedDataTableTrElement
    className={props.className}
    rowSelected={props.rowSelected}
  >
    <ErrorTd
      tabIndex={props.focusableCell === 'error' && props.index === 1 ? 0 : null}
      hasFocus={
        props.focusedCell === 'error' && props.index === 1 ? true : null
      }
      index={props.index}
      hasError={props.showRowError && props.index === 1 ? true : null}
      actionableMode={props.actionableMode}
    />
    <SelectRowTd
      cellTabIndex={
        !props.actionableMode &&
        props.focusableCell === 'selectRow' &&
        props.index === 1
          ? '0'
          : null
      }
      inputTabIndex={props.actionableMode ? '0' : '-1'}
      checked={props.rowSelected}
      hasFocus={props.focusedCell === 'selectRow' && props.index === 1}
      isEditable
      index={props.index}
    />
    <EditableBodyTh
      buttonText={'Edit Name: Item ' + props.index}
      cellLink="javascript:void(0);"
      cellText={props.recordName}
      index={props.index}
      actionableMode={props.actionableMode}
      tabIndex={
        !props.actionableMode &&
        props.focusableCell === 'recordName' &&
        props.index === 1
          ? '0'
          : null
      }
      hasFocus={props.focusedCell === 'recordName' && props.index === 1}
    />
    <EditableTd
      buttonText={'Edit Account Name: Item ' + props.index}
      cellText={props.accountName}
      index={props.index}
      actionableMode={props.actionableMode}
      tabIndex={
        !props.actionableMode &&
        props.focusableCell === 'accountName' &&
        props.index === 1
          ? '0'
          : null
      }
      hasFocus={props.focusedCell === 'accountName' && props.index === 1}
      isEditing={props.showEdit && props.index === 1}
      isEdited={props.showEditedCell && props.index === 1 ? true : null}
      hasError={props.showCellError && props.index === 1 ? true : null}
    >
      {props.showEdit && props.index === 1 ? (
        <EditPopover
          isRequired={props.showEditRequired}
          hasError={props.showEditError}
        />
      ) : null}
    </EditableTd>
    <EditableTd
      buttonText={'Edit Close Date: Item ' + props.index}
      cellText={props.closeDate}
      index={props.index}
      actionableMode={props.actionableMode}
    />
    <EditableTd
      buttonText={'Edit Stage: Item ' + props.index}
      cellText={props.stage}
      index={props.index}
      actionableMode={props.actionableMode}
    />
    <EditableTd
      buttonText={'Edit Confidence: Item ' + props.index}
      cellText={props.confidence}
      index={props.index}
      actionableMode={props.actionableMode}
      isLocked
    />
    <EditableTd
      buttonText={'Edit Amount: Item ' + props.index}
      cellText={props.amount}
      index={props.index}
      actionableMode={props.actionableMode}
    />
    <EditableTd
      buttonText={'Edit Contact: Item ' + props.index}
      cellText={props.contact}
      index={props.index}
      actionableMode={props.actionableMode}
    />
    <RowActionsTd actionableMode={props.actionableMode} isEditable />
  </AdvancedDataTableTrElement>
);

/**
 * @name EditableTd - A common cell container for an editable cell
 * @param {*} props
 * @prop {*} children
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {boolean} hasError - Shows the cell in error state
 * @prop {boolean} hasFocus - Shows the cell is in user focus
 * @prop {boolean} isEdited - Shows that the cell has been edited
 * @prop {boolean} isEditing - Shows that the cell is being edited
 * @prop {boolean} isLocked - Shows that the cell is locked from editing
 * @prop {integer} index - Row index the cell is displayed in
 * @prop {integer} tabIndex - Sets tabindex on the cell
 * @prop {string} buttonText
 * @prop {string} cellText
 */
export const EditableTd = props => (
  <AdvancedDataTableTd
    hasError={props.hasError}
    hasFocus={props.hasFocus}
    isEditable
    isEdited={props.isEdited}
    isEditing={props.isEditing}
    isLocked={props.isLocked}
    tabIndex={props.tabIndex}
  >
    <EditableCellContent
      actionableMode={props.actionableMode}
      buttonText={props.buttonText}
      cellText={props.cellText}
      index={props.index}
      isLocked={props.isLocked}
    />
    {props.children}
  </AdvancedDataTableTd>
);

/**
 * @name EditableBodyTh - Common cell wrapper for inline edit grid row headers
 * @param {*} props
 * @prop {*} children
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {boolean} hasFocus - Shows the cell is in user focus
 * @prop {integer} index - Row index the cell is displayed in
 * @prop {integer} tabIndex - Sets tabindex on the cell
 * @prop {string} buttonText
 * @prop {string} cellLink - URL cell text should link to
 * @prop {string} cellText
 */
export const EditableBodyTh = props => (
  <AdvancedDataTableBodyTh
    isEditable
    hasFocus={props.hasFocus}
    tabIndex={props.tabIndex}
  >
    <EditableCellContent
      actionableMode={props.actionableMode}
      buttonText={props.buttonText}
      cellLink={props.cellLink}
      cellText={props.cellText}
      index={props.index}
    />
    {props.children}
  </AdvancedDataTableBodyTh>
);

/**
 * EditableCellContent - Common cell content for inline edit grids
 * @param {*} props
 * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
 * @prop {boolean} isLocked - Shows that the cell is locked from editing
 * @prop {integer} index - Row index the cell is displayed in
 * @prop {string} buttonText
 * @prop {string} cellLink - URL cell text should link to
 * @prop {string} cellText
 */
export const EditableCellContent = props => (
  <span className="slds-grid slds-grid_align-spread">
    {props.cellLink ? (
      <a
        href={props.cellLink}
        className="slds-truncate"
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
);

/**
 * @name EditPopover - Popover used to edit a cell in inline edit grids
 * @param {*} props
 * @prop {boolean} hasError
 * @prop {boolean} isRequired
 */
export const EditPopover = props => (
  <section
    className="slds-popover slds-popover_edit"
    role="dialog"
    style={{ position: 'absolute', top: '0', left: '0.0625rem' }}
  >
    <span id="form-start" tabIndex="0" />
    <div className="slds-popover__body">
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
            id="company-01"
            className={classNames('slds-input', {
              'input--required': props.isRequired
            })}
            type="text"
            defaultValue="Acme Enterprises"
            required={props.isRequired}
            aria-describedby={props.hasError ? 'error-message-01' : null}
          />
        </div>
        {props.hasError ? (
          <div id="error-message-01" className="slds-form-element__help">
            This field is required
          </div>
        ) : null}
      </div>
    </div>
    <span id="form-end" tabIndex="0" />
  </section>
);

/**
 * @name ProductDataTableTr - Table row for advanced data table components
 * @param {*} props
 * @prop {boolean} actionableMode - Specifies whether the grid is in actionable or navigation mode
 * @prop {boolean} hasFocus - Specifies whether a specific cell is in focus
 * @prop {boolean} rowSelected
 * @prop {integer} index - Row index in the Grid
 * @prop {string} className - CSS classes for the tr element
 * @prop {string} dateAdded
 * @prop {string} labelInventory
 * @prop {string} priceOriginal
 * @prop {string} priceDiscount
 * @prop {string} productImgSrc
 * @prop {string} productName
 * @prop {*} productProperties
 * @prop {integer} quantity
 */
export const ProductDataTableTr = props => (
  <AdvancedDataTableTrElement
    className={classNames(props.className, 'slds-align-top')}
    rowSelected={props.rowSelected}
  >
    <ProductItemDetailsTd
      productImgSrc={props.productImgSrc}
      productName={props.productName}
      actionableMode={props.actionableMode}
      productProperties={props.productProperties}
      labelInventory={props.labelInventory}
    />
    <ProductQuantityTd
      inputId={`product-quantity-text-input-id-${props.index}`}
      labelText={`${props.productName} quantity`}
      quantity={props.quantity}
    />
    <ReadOnlyTd cellText={props.dateAdded} />
    <ProductPriceTd
      priceDiscount={props.priceDiscount}
      priceOriginal={props.priceOriginal}
    />
    <RowActionsTd actionableMode={props.actionableMode} />
  </AdvancedDataTableTrElement>
);

/**
 * @name ProductImage - A common cell container for product image
 * @param {*} props
 * @prop {string} productImgSrc
 * @prop {string} productName
 */
export const ProductImage = props => (
  <div className="slds-size_xx-small">
    <img
      alt={props.productName}
      src={props.productImgSrc}
      title={props.productName}
    />
  </div>
);

/**
 * @name ProductPriceTd - A common cell container for product price
 * @param {*} props
 * @prop {string} priceDiscount
 * @prop {string} priceOriginal
 */
export const ProductPriceTd = props => (
  <AdvancedDataTableTd>
    <p>
      <s>{props.priceOriginal}</s>
    </p>
    <p>{props.priceDiscount}</p>
  </AdvancedDataTableTd>
);

/**
  * @name ProductItemDetailsTd - A common cell container for product details
  * @param {*} props
  * @prop {*} children
  * @prop {boolean} actionableMode - Determines whether or not the grid is in actionable or navigation mode
  * @prop {string} labelInventory
  * @prop {string} productImgSrc
  * @prop {string} productName
  * @prop {*} productProperties
*/
export const ProductItemDetailsTd = props => (
  <AdvancedDataTableBodyTh>
    <MediaObject
      figureLeft={
        <ProductImage
          productName={props.productName}
          productImgSrc={props.productImgSrc}
        />
      }
    >
      <ReadOnlyCellContent
        actionableMode={props.actionableMode}
        cellLink="javascript:void(0);"
        cellText={props.productName}
      />
      <ul>
        {_.times(props.productProperties.length, i => (
          <li
            key={i}
            className="slds-truncate"
            title={`${props.productProperties[i].label}: ${props
              .productProperties[i].value}`}
          >
            {props.productProperties[i].label}:{' '}
            <strong>{props.productProperties[i].value}</strong>
          </li>
        ))}
      </ul>
      <p className="slds-text-color_success">{props.labelInventory}</p>
    </MediaObject>
  </AdvancedDataTableBodyTh>
);

/**
  * @name ProductQuantityTd - A common cell container for product quantity field
  * @param {*} props
  * @prop {*} children
  * @prop {string} inputId
  * @prop {string} labelText
  * @prop {integer} quantity
*/
export const ProductQuantityTd = props => (
  <AdvancedDataTableTd>
    <FormElement>
      <FormElementLabel className="slds-assistive-text" id={props.inputId}>
        {props.labelText}
      </FormElementLabel>
      <FormElementControl>
        <Input
          id={props.inputId}
          defaultValue={props.quantity}
          placeholder=" "
          className="slds-size_xxx-small slds-text-align_center slds-p-horizontal_x-small"
        />
      </FormElementControl>
    </FormElement>
  </AdvancedDataTableTd>
);

/**
  * @name AdvancedDataTableTrElement - A common row container for advanced data table types: base, inline-edit, and product
  * @param {*} props
  * @prop {*} children
*/
export const AdvancedDataTableTrElement = props => (
  <tr
    className={classNames('slds-hint-parent', props.className)}
    aria-selected={props.rowSelected}
  >
    {props.children}
  </tr>
);
