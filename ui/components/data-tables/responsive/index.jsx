// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from '../../button-icons/';
import { Checkbox } from '../../checkbox/base/example';
import {
  Table,
  THead,
  ColumnTh,
  THeadTr,
  ColumnHeader,
  TBody,
  TBodyTr,
  RowTh,
  Td,
  ReadOnlyCell,
  DataTableContext
} from '../';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const checkboxRadioGroupHeaderId = 'check-group-header';

const HeadRowData = props => (
  <THeadTr>
    <ColumnTh>
      <span className="slds-assistive-text" id={checkboxRadioGroupHeaderId}>
        Choose a row to select
      </span>
      <Checkbox
        checked={props.checked}
        groupId={checkboxRadioGroupHeaderId}
        hideLabel
        id="checkbox-all"
        label="Select all"
        labelId="check-button-label-all"
      />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Opportunity Name" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Account Name" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Close Date" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Stage" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Confidence" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Amount" />
    </ColumnTh>
    <ColumnTh>
      <ColumnHeader columnName="Contact" />
    </ColumnTh>
    <ColumnTh columnName="Actions" isAssistiveText />
  </THeadTr>
);
HeadRowData.propTypes = {
  checked: PropTypes.bool
};

const RowData = props => (
  <TBodyTr>
    <Td data-label="Select Row" type="base">
      <Checkbox
        checked={props.checked}
        groupId={checkboxRadioGroupHeaderId}
        hideLabel
        id={`checkbox-0${props.index}`}
        label={`Select item ${props.index}`}
        labelId={`check-button-label-0${props.index}`}
      />
    </Td>
    <RowTh data-label="Opportunity Name" type="base">
      <ReadOnlyCell cellText={props.title} />
    </RowTh>
    <Td data-label="Account Name" type="base">
      <ReadOnlyCell cellText="Cloudhub" />
    </Td>
    <Td data-label="Close Date" type="base">
      <ReadOnlyCell cellText="4/14/2015" />
    </Td>
    <Td data-label="Prospecting" type="base">
      <ReadOnlyCell cellText="Prospecting" />
    </Td>
    <Td data-label="Confidence" type="base">
      <ReadOnlyCell cellText="20%" />
    </Td>
    <Td data-label="Amount" type="base">
      <ReadOnlyCell cellText="$25k" />
    </Td>
    <Td data-label="Contact" type="base">
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <ReadOnlyCell cellLink cellText="jrogers@cloudhub.com" />
      </DataTableContext.Provider>
    </Td>
    <Td data-label="Actions" isShrunken type="base">
      <ButtonIcon
        assistiveText="Show More"
        className="slds-button_icon-border-filled slds-button_icon-x-small"
        iconClassName="slds-button__icon_hint slds-button__icon_small"
        symbol="down"
        title="Show More"
      />
    </Td>
  </TBodyTr>
);
RowData.propTypes = {
  checked: PropTypes.bool,
  index: PropTypes.string,
  title: PropTypes.string
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const Stacked = props => (
  <Table
    isBordered
    isResponsiveStacked
    type="base"
    ariaLabel="Example stacked table"
  >
    <THead>
      <HeadRowData />
    </THead>
    <TBody>
      <RowData index="1" title="Cloudhub" />
      <RowData index="2" title="Cloudhub + Anypoint Connectors" />
    </TBody>
  </Table>
);

export const Horizontal = props => (
  <Table
    isBordered
    isResponsive
    type="base"
    ariaLabel="Example horizontal table"
  >
    <THead>
      <HeadRowData />
    </THead>
    <TBody>
      <RowData index="1" title="Cloudhub" />
      <RowData index="2" title="Cloudhub + Anypoint Connectors" />
    </TBody>
  </Table>
);
