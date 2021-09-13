// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';

import { DataTableContext } from '../';
import { InlineEditTr } from '../inline-edit/';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Inline edit data table row', () => {
  it('should render', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        recordName="Acme"
        stage="Open"
      />
    ));

  it('should enable focusing on focusable elements in actionableMode', () =>
    matchesMarkup(
      <DataTableContext.Provider value={{ isActionableMode: true }}>
        <InlineEditTr
          accountName="Salesforce"
          amount="$1000"
          closeDate="08/20/2028"
          confidence="low"
          contact="Art V"
          index={0}
          recordName="Acme"
          stage="Open"
        />
      </DataTableContext.Provider>
    ));

  it('should set a focusable cell', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        focusableCell="recordName"
        index={0}
        recordName="Acme"
        stage="Open"
      />
    ));

  it('should set a focused cell', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        focusableCell="recordName"
        focusedCell="recordName"
        index={0}
        recordName="Acme"
        stage="Open"
      />
    ));

  it('should set a locked cell', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        isLocked
        recordName="Acme"
        stage="Open"
      />
    ));

  it('should set a selected row and check the checkbox', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        isSelected
        recordName="Acme"
        stage="Open"
      />
    ));

  it('should show an errored cell', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        recordName="Acme"
        showCellError
        showRowError
        stage="Open"
      />
    ));

  it('should show a cell edit', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        recordName="Acme"
        showEdit
        stage="Open"
      />
    ));

  it('should show a cell edit with required field', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        recordName="Acme"
        showEdit
        showEditRequired
        stage="Open"
      />
    ));

  it('should show a cell edit with required field and an error', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        recordName="Acme"
        showEdit
        showEditError
        showEditRequired
        stage="Open"
      />
    ));

  it('should show a edited cell', () =>
    matchesMarkup(
      <InlineEditTr
        accountName="Salesforce"
        amount="$1000"
        closeDate="08/20/2028"
        confidence="low"
        contact="Art V"
        index={0}
        recordName="Acme"
        showEditedCell
        stage="Open"
      />
    ));
});
