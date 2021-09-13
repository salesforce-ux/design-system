// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';

import {
  Table,
  THead,
  THeadTr,
  ColumnTh,
  ColumnHeader,
  ResizeControl,
  InteractiveColumnHeader,
  SelectAllColumnHeader,
  AdvancedDataTableHead,
  TBody,
  TBodyTr,
  Td,
  RowTh,
  SelectRowCell,
  RowActionsCell,
  ErrorCell,
  ReadOnlyCell,
  EditableCell,
  EditPopover,
  cellContentTextLong,
  DataTableContext
} from '../';
import { StandardIcon } from '../../icons/standard/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Data table component', () => {
  it('should render a base table', () => matchesMarkup(<Table type="base" />));

  it('should take children', () =>
    matchesMarkup(
      <Table type="base">
        <tr />
      </Table>
    ));

  it('should render an advanced table with role grid', () =>
    matchesMarkup(<Table type="advanced" />));

  it('should render a treegrid table with role treegrid', () =>
    matchesMarkup(<Table type="treegrid" />));

  it('should render a advanced table with aria-multiselectable applied', () =>
    matchesMarkup(<Table selectionType="multiple" type="advanced" />));

  it('should render a advanced table without aria-multiselectable applied', () =>
    matchesMarkup(<Table selectionType="single" type="advanced" />));

  it('should render a table with cell buffer class', () =>
    matchesMarkup(<Table hasCellBuffer type="base" />));

  it('should render a table with hidden header class', () =>
    matchesMarkup(<Table hasHiddenHeader type="base" />));

  it('should render a table with no cell focus class', () =>
    matchesMarkup(<Table hasNoCellFocus type="base" />));

  it('should render a table with no row hover class', () =>
    matchesMarkup(<Table hasNoRowHover type="base" />));

  it('should render a table with borders', () =>
    matchesMarkup(<Table isBordered type="base" />));

  it('should render a table with column borders', () =>
    matchesMarkup(<Table isColBordered type="base" />));

  it('should render a table with editbale class', () =>
    matchesMarkup(<Table isEditable type="base" />));

  it('should render a table with fixed layout class', () =>
    matchesMarkup(<Table isFixedLayout type="base" />));

  it('should render a table with resizable class', () =>
    matchesMarkup(<Table isResizable type="base" />));

  it('should render a table with responsive class', () =>
    matchesMarkup(<Table isResponsive type="base" />));

  it('should render a table with responsive stacked class', () =>
    matchesMarkup(<Table isResponsiveStacked type="base" />));

  it('should render a table with striped class', () =>
    matchesMarkup(<Table isStriped type="base" />));

  it('should render a table with passed styles', () =>
    matchesMarkup(<Table style={{ width: '10rem' }} type="base" />));

  it('should render a table with a caption with aria-label', () =>
    matchesMarkup(<Table type="base" ariaLabel="Example caption" />));

  it('should render a table with a caption with aria-labelledby', () =>
    matchesMarkup(
      <>
        <h2 id="element-with-table-label">
          Example data table of Opportunities
        </h2>
        <h3 id="other-element-with-table-label">
          Using <code>aria-labelledby</code>, instead of aria-label
        </h3>
        <Table
          type="base"
          ariaLabelledBy="element-with-table-label other-element-with-table-label"
        />
      </>
    ));
});

describe('THead Component', () => {
  it('should render a thead', () => matchesMarkup(<THead />));

  it('should take children', () =>
    matchesMarkup(
      <THead>
        <tr />
      </THead>
    ));

  it('should apply assistive text class when isHidden', () =>
    matchesMarkup(<THead isHidden />));
});

describe('THeadTr component', () => {
  it('should render with children', () =>
    matchesMarkup(
      <THeadTr>
        <td />
      </THeadTr>
    ));
});

describe('ColumnTh component', () => {
  it('should render with children', () =>
    matchesMarkup(
      <ColumnTh>
        <div />
      </ColumnTh>
    ));

  it('should add aria-label when passed', () =>
    matchesMarkup(<ColumnTh aria-label="foo" />));

  it('should apply has focus class with hasFocus', () =>
    matchesMarkup(<ColumnTh hasFocus />));

  it('should apply has menu class with hasMenu', () =>
    matchesMarkup(<ColumnTh hasMenu />));

  it('should apply is resizable class with isResizable', () =>
    matchesMarkup(<ColumnTh isResizable />));

  it('should apply text align right class with isRightAligned', () =>
    matchesMarkup(<ColumnTh isRightAligned />));

  it('should apply is sortable class and aria-sort none with isSortable', () =>
    matchesMarkup(<ColumnTh isSortable />));

  it('should set sort direction of ascending', () =>
    matchesMarkup(<ColumnTh isSortable sortDirection="ascending" />));

  it('should set sort direction of descending', () =>
    matchesMarkup(<ColumnTh isSortable sortDirection="descending" />));

  it('should set sort direction of none', () =>
    matchesMarkup(<ColumnTh isSortable sortDirection="none" />));

  it('should set style attribute when passed', () =>
    matchesMarkup(<ColumnTh style={{ width: '1rem' }} />));
});

describe('ColumnHeader component', () => {
  it('should render with default column name', () =>
    matchesMarkup(<ColumnHeader />));

  it('should render with set column name and title should match', () =>
    matchesMarkup(<ColumnHeader columnName="foo" />));

  it('should render with an id when passed', () =>
    matchesMarkup(<ColumnHeader id="foo" />));

  it('should render with assistive text class with isAssistiveText prop', () =>
    matchesMarkup(<ColumnHeader isAssistiveText />));
});

describe('ResizeControl component', () => {
  it('should render with a label', () =>
    matchesMarkup(<ResizeControl label="foo" />));

  it('should set a tabindex when tabIndex is passed', () =>
    matchesMarkup(<ResizeControl label="foo" tabIndex="0" />));
});

describe('InteractiveColumnHeader component', () => {
  it('should render the component', () =>
    matchesMarkup(<InteractiveColumnHeader columnName="Column Name" />));

  it('should set tabindex to 0 on focusable elements when actionableMode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <InteractiveColumnHeader columnName="Column Name" />
      </DataTableContext.Provider>
    ));

  it('should show a action menu when hasMenu is applied', () =>
    matchesMarkup(
      <InteractiveColumnHeader columnName="Column Name" hasMenu />
    ));

  it('should hide the resize controls when isResizable is false', () =>
    matchesMarkup(
      <InteractiveColumnHeader columnName="Column Name" isResizable={false} />
    ));

  it('should hide the sort controls when isSortable is false', () =>
    matchesMarkup(
      <InteractiveColumnHeader columnName="Column Name" isSortable={false} />
    ));

  it('should render the sort direction when supplied', () =>
    matchesMarkup(
      <InteractiveColumnHeader
        columnName="Column Name"
        sortDirection="ascending"
      />
    ));

  it('should render a header icon when supplied', () => {
    const AccountNameColumnIcon = (
      <StandardIcon
        assistiveText={false}
        className="slds-icon_x-small"
        containerClassName="slds-m-right_xx-small"
        symbol="account"
        title={false}
      />
    );

    const columnHeaderIcons = [
      {
        column: 'account name',
        icon: AccountNameColumnIcon
      }
    ];
    return matchesMarkup(
      <InteractiveColumnHeader
        columnHeaderIcons={columnHeaderIcons}
        columnName="account name"
      />
    );
  });
});

describe('SelectAllColumnHeader component', () => {
  it('should render the component', () =>
    matchesMarkup(<SelectAllColumnHeader />));

  it('should make the input have tabindex 0 when actionableMode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <SelectAllColumnHeader />
      </DataTableContext.Provider>
    ));

  it('should check the checkbox', () =>
    matchesMarkup(<SelectAllColumnHeader checked />));
});

describe('AdvancedDataTableHead component', () => {
  const columns = ['Name'];

  it('should render', () =>
    matchesMarkup(<AdvancedDataTableHead columns={columns} />));

  it('should render enable actionable mode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <AdvancedDataTableHead columns={columns} />
      </DataTableContext.Provider>
    ));

  it('should render error column header and set select column width', () =>
    matchesMarkup(<AdvancedDataTableHead columns={columns} hasErrorColumn />));

  it('should hide select column header', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} hasNoRowSelection />
    ));

  it('should swap the select column to the single select column header', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} hasSingleRowSelect />
    ));

  it('should should pass hasFocus when supplied to the first column', () =>
    matchesMarkup(<AdvancedDataTableHead columns={columns} hasFocus />));

  it('should render menus', () =>
    matchesMarkup(<AdvancedDataTableHead columns={columns} hasMenus />));

  it('should hide row level actions header', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} hasRowLevelActions={false} />
    ));

  it('should apply hidden class', () =>
    matchesMarkup(<AdvancedDataTableHead columns={columns} isHidden />));

  it('should remove select all, sort and resize controls if hidden', () =>
    matchesMarkup(
      <AdvancedDataTableHead
        columns={columns}
        isHidden
        isResizable
        isSortable
      />
    ));

  it('should hide all the resize controls', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} isResizable={false} />
    ));

  it('should hide all the sorting controls', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} isSortable={false} />
    ));

  it('should set a main column width', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} mainColumnWidth="50rem" />
    ));

  it('should set a single column width', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} singleColumnWidth="5rem" />
    ));

  it('should check the select all column header', () =>
    matchesMarkup(<AdvancedDataTableHead columns={columns} selectAll />));

  it('should set sort direction', () =>
    matchesMarkup(
      <AdvancedDataTableHead columns={columns} sortDirection="ascending" />
    ));
});

describe('TBody component', () => {
  it('should render with children', () =>
    matchesMarkup(
      <TBody>
        <tr />
      </TBody>
    ));
});

describe('TBodyTr component', () => {
  it('should render with children', () =>
    matchesMarkup(
      <TBodyTr>
        <td />
      </TBodyTr>
    ));

  it('should set aria-expanded', () =>
    matchesMarkup(
      <TBodyTr isExpanded>
        <td />
      </TBodyTr>
    ));

  it('should set aria-expanded to false', () =>
    matchesMarkup(
      <TBodyTr isExpanded={false}>
        <td />
      </TBodyTr>
    ));

  it('should set aria-selected', () =>
    matchesMarkup(
      <TBodyTr isSelected>
        <td />
      </TBodyTr>
    ));

  it('should set aria-selected to false', () =>
    matchesMarkup(
      <TBodyTr isSelected={false}>
        <td />
      </TBodyTr>
    ));

  it('should render top aligned', () =>
    matchesMarkup(
      <TBodyTr isTopAligned>
        <td />
      </TBodyTr>
    ));

  it('should set aria-level', () =>
    matchesMarkup(
      <TBodyTr level="1">
        <td />
      </TBodyTr>
    ));

  it('should set aria-posinset', () =>
    matchesMarkup(
      <TBodyTr positionWithinLevel="2">
        <td />
      </TBodyTr>
    ));

  it('should set aria-setsize', () =>
    matchesMarkup(
      <TBodyTr numberOfItemsAtLevel="10">
        <td />
      </TBodyTr>
    ));

  it('should set tabindex', () =>
    matchesMarkup(
      <TBodyTr tabIndex="0">
        <td />
      </TBodyTr>
    ));
});

describe('Td component', () => {
  it('should render with children', () =>
    matchesMarkup(
      <Td type="base">
        <div />
      </Td>
    ));

  it('should apply a supplied data-label', () =>
    matchesMarkup(
      <Td data-label="foo" type="base">
        <div />
      </Td>
    ));

  it('should apply the has error class', () =>
    matchesMarkup(
      <Td hasError type="base">
        <div />
      </Td>
    ));

  it('should apply the has focus class', () =>
    matchesMarkup(
      <Td hasFocus type="base">
        <div />
      </Td>
    ));

  it('should apply the is editable class', () =>
    matchesMarkup(
      <Td isEditable type="base">
        <div />
      </Td>
    ));

  it('should apply the is edited class', () =>
    matchesMarkup(
      <Td isEdited type="base">
        <div />
      </Td>
    ));

  it('should apply aria-selected', () =>
    matchesMarkup(
      <Td isEditing type="base">
        <div />
      </Td>
    ));

  it('should apply the error cell class', () =>
    matchesMarkup(
      <Td isErrorCell type="base">
        <div />
      </Td>
    ));

  it('should apply aria-readonly', () =>
    matchesMarkup(
      <Td isLocked type="base">
        <div />
      </Td>
    ));

  it('should apply the right aligned class', () =>
    matchesMarkup(
      <Td isRightAligned type="base">
        <div />
      </Td>
    ));

  it('should apply the cell shrink class', () =>
    matchesMarkup(
      <Td isShrunken type="base">
        <div />
      </Td>
    ));

  it('should set style', () =>
    matchesMarkup(
      <Td style={{ width: '2rem' }} type="base">
        <div />
      </Td>
    ));

  it('should set tabindex', () =>
    matchesMarkup(
      <Td tabIndex="0" type="base">
        <div />
      </Td>
    ));

  it('should set role of gridcell for advanced', () =>
    matchesMarkup(
      <Td type="advanced">
        <div />
      </Td>
    ));

  it('should set role of gridcell for treegrid', () =>
    matchesMarkup(
      <Td type="advanced">
        <div />
      </Td>
    ));

  it('should have truncated text', () =>
    matchesMarkup(
      <Td type="base">
        <ReadOnlyCell cellText={cellContentTextLong} />
      </Td>
    ));

  it('should wrap and line clamp text', () =>
    matchesMarkup(
      <Td type="base" hasWrap>
        <ReadOnlyCell cellText={cellContentTextLong} hasWrap />
      </Td>
    ));
});

describe('RowTh component', () => {
  it('should render', () =>
    matchesMarkup(
      <RowTh type="base">
        <div />
      </RowTh>
    ));

  it('should set a data-label', () =>
    matchesMarkup(
      <RowTh data-label="foo" type="base">
        <div />
      </RowTh>
    ));

  it('should apply the has focus class', () =>
    matchesMarkup(
      <RowTh hasFocus type="base">
        <div />
      </RowTh>
    ));

  it('should apply the cell edit class', () =>
    matchesMarkup(
      <RowTh isEditable type="base">
        <div />
      </RowTh>
    ));

  it('should set tabindex', () =>
    matchesMarkup(
      <RowTh tabIndex="0" type="base">
        <div />
      </RowTh>
    ));

  it('should apply tree item class', () =>
    matchesMarkup(
      <RowTh type="treegrid">
        <div />
      </RowTh>
    ));
});

describe('SelectRowCell component', () => {
  it('should render', () => matchesMarkup(<SelectRowCell index={1} />));

  it('should render a radio button', () =>
    matchesMarkup(<SelectRowCell hasSingleRowSelect index={1} />));

  it('should render a checked checkbox', () =>
    matchesMarkup(<SelectRowCell checked index={1} />));

  it('should render a checked radio button', () =>
    matchesMarkup(<SelectRowCell checked hasSingleRowSelect index={1} />));

  it('should set tabindex on a checkbox', () =>
    matchesMarkup(<SelectRowCell index={1} inputTabIndex="-1" />));

  it('should set tabindex on a radio', () =>
    matchesMarkup(
      <SelectRowCell hasSingleRowSelect index={1} inputTabIndex="-1" />
    ));
});

describe('RowActionsCell component', () => {
  it('should render', () =>
    matchesMarkup(<RowActionsCell rowName="row name" />));

  it('should set tabindex to 0 when in actionable mode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <RowActionsCell rowName="row name" />
      </DataTableContext.Provider>
    ));
});

describe('ErrorCell component', () => {
  it('should render', () => matchesMarkup(<ErrorCell index={1} />));

  it('should remove aria-hidden and slds-hidden from button when hasError', () =>
    matchesMarkup(<ErrorCell hasError index={1} />));

  it('should set tabindex on the button to 0 in actionable mode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <ErrorCell hasError index={1} />
      </DataTableContext.Provider>
    ));
});

describe('ReadOnlyCell component', () => {
  it('should render', () =>
    matchesMarkup(<ReadOnlyCell cellText="cell text" />));

  it('should set linkable cell text', () =>
    matchesMarkup(<ReadOnlyCell cellLink cellText="cell text" />));

  it('should set tabindex to 0 on links in actionableMode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <ReadOnlyCell cellLink cellText="cell text" />
      </DataTableContext.Provider>
    ));
});

describe('EditableCell component', () => {
  it('should render', () =>
    matchesMarkup(
      <EditableCell buttonText="Edit field of cell text" cellText="cell text" />
    ));

  it('should render a cell text as link', () =>
    matchesMarkup(
      <EditableCell
        buttonText="Edit field of cell text"
        cellLink
        cellText="cell text"
      />
    ));

  it('should set tabindex to 0 on focusable elements when in actionableMode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <EditableCell
          buttonText="Edit field of cell text"
          cellLink
          cellText="cell text"
        />
      </DataTableContext.Provider>
    ));

  it('should lock the cell', () =>
    matchesMarkup(
      <EditableCell
        buttonText="Edit field of cell text"
        cellText="cell text"
        isLocked
      />
    ));

  it('should show editting', () =>
    matchesMarkup(
      <EditableCell
        buttonText="Edit field of cell text"
        cellText="cell text"
        showEdit
      />
    ));

  it('should show field required in editing', () =>
    matchesMarkup(
      <EditableCell
        buttonText="Edit field of cell text"
        cellText="cell text"
        isRequired
        showEdit
      />
    ));

  it('should show an error', () =>
    matchesMarkup(
      <EditableCell
        buttonText="Edit field of cell text"
        cellText="cell text"
        hasError
        showEdit
      />
    ));
});

describe('EditPopover component', () => {
  it('should render', () => matchesMarkup(<EditPopover />));

  it('should set field required', () =>
    matchesMarkup(<EditPopover isRequired />));

  it('should show error', () =>
    matchesMarkup(<EditPopover hasError isRequired />));
});
