// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  Expression,
  ExpressionRow,
  ExpressionOptions,
  ExpressionList,
  ExpressionLegend,
  ExpressionGroup,
  ExpressionCustom,
  ExpressionCol,
  ExpressionButtons
} from '..';
import { Formula } from '../formula/example';
import {
  ExpressionNarrow,
  ExpressionNarrowGroup,
  ExpressionNarrowFooter
} from '../filters/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Expression Base', () => {
  it('renders the default expression', () => matchesMarkup(<Expression />));
  it('renders the disabled initial state', () =>
    matchesMarkup(<Expression buttonIsDisabled inputIsDisabled />));
  it('renders with custom logic', () =>
    matchesMarkup(<Expression hasCustomLogic />));
  it('renders with legend text', () =>
    matchesMarkup(<Expression legendText="1" />));
  it('renders with any option selected', () =>
    matchesMarkup(<Expression optionSelected="any" />));
  it('renders with all option selected', () =>
    matchesMarkup(<Expression optionSelected="all" />));
  it('renders with custom option selected', () =>
    matchesMarkup(<Expression optionSelected="custom" />));
  it('renders with always option selected', () =>
    matchesMarkup(<Expression optionSelected="always" />));
  it('renders with formula option selected', () =>
    matchesMarkup(<Expression optionSelected="formula" />));
  it('renders with a resource selected', () =>
    matchesMarkup(<Expression resourceIsSelected />));
  it('renders with a custom logic value', () =>
    matchesMarkup(<Expression customLogicValue="1 OR 2 OR 3" />));
});

describe('Expression Row', () => {
  it('renders the default row', () => matchesMarkup(<ExpressionRow />));
  it('renders the default row with legend text and sassistive text', () =>
    matchesMarkup(
      <ExpressionRow assistiveText="Condition 1" legendText="AND" />
    ));
  it('renders the default row in a group', () =>
    matchesMarkup(<ExpressionRow groupName="group name" isGroup />));
  it('renders the default row with input disabled', () =>
    matchesMarkup(<ExpressionRow inputIsDisabled />));
  it('renders the default row with button disabled', () =>
    matchesMarkup(<ExpressionRow buttonIsDisabled />));
  it('renders the default row with inputs and button disabled', () =>
    matchesMarkup(<ExpressionRow buttonIsDisabled inputIsDisabled />));
  it('renders the default row with a resource selected', () =>
    matchesMarkup(<ExpressionRow resourceIsSelected />));
  it('renders the default row with an error', () =>
    matchesMarkup(
      <ExpressionRow errorMessage="This field is required" hasError />
    ));
});

describe('Expression Options', () => {
  it('renders the default expression options', () =>
    matchesMarkup(<ExpressionOptions />));
  it('renders the default expression options with a label', () =>
    matchesMarkup(<ExpressionOptions label="When" />));
  it('renders the default expression options in a filter', () =>
    matchesMarkup(<ExpressionOptions isInFilter />));
  it('renders the default expression options with an option selected', () =>
    matchesMarkup(<ExpressionOptions optionSelected="all" />));
});

describe('Expression List', () => {
  it('renders the default expression list', () =>
    matchesMarkup(
      <ExpressionList>
        <ExpressionRow assistiveText="Condition 1" legendText="AND" />
      </ExpressionList>
    ));
});

describe('Expression Legend', () => {
  it('renders the default expression legend', () =>
    matchesMarkup(<ExpressionLegend />));
  it('renders the default expression legend for a group', () =>
    matchesMarkup(<ExpressionLegend isGroup />));
  it('renders the default expression legend with custom text', () =>
    matchesMarkup(<ExpressionLegend legendText="OR" />));
  it('renders the default expression legend with assistive text', () =>
    matchesMarkup(<ExpressionLegend assistiveText="Condition 2" />));
});

describe('Expression Group', () => {
  it('renders the default expression group', () =>
    matchesMarkup(<ExpressionGroup />));
  it('renders the default expression group with legend text and assistive text', () =>
    matchesMarkup(
      <ExpressionGroup assistiveText="Condition 1" legendText="AND" />
    ));
  it('renders the default expression group with any option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="any" />));
  it('renders the default expression group with all option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="all" />));
  it('renders the default expression group with always option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="always" />));
  it('renders the default expression group with custom option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="custom" />));
  it('renders the default expression group with formula option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="formula" />));
  it('renders the default expression group with group option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="group" />));
  it('renders the default expression group with a row', () =>
    matchesMarkup(
      <ExpressionGroup>
        <ExpressionRow assistiveText="Condition 1" legendText="AND" />
      </ExpressionGroup>
    ));
});

describe('Expression Custom', () => {
  it('renders the default expression custom', () =>
    matchesMarkup(<ExpressionCustom />));
  it('renders the default expression custom with a default value', () =>
    matchesMarkup(<ExpressionCustom defaultValue="1 and 2" />));
});

describe('Expression Column', () => {
  it('renders the default expression column', () =>
    matchesMarkup(<ExpressionCol />));
  it('renders the default expression column that does not grow', () =>
    matchesMarkup(<ExpressionCol doesNotGrow />));
});

describe('Expression Buttons', () => {
  it('renders the default expression buttons', () =>
    matchesMarkup(<ExpressionButtons />));
  it('renders the default expression buttons in a group', () =>
    matchesMarkup(<ExpressionButtons isGroup />));
});

describe('Expression Formula', () => {
  it('renders the default expression formula variant', () =>
    matchesMarkup(<Formula />));
  it('renders the default expression formula with an option selected', () =>
    matchesMarkup(<Formula optionSelected="formula" />));
});

describe('Expression Narrow', () => {
  it('renders the default expression narrow variant', () =>
    matchesMarkup(<ExpressionNarrow />));
  it('renders the default expression narrow with option selected', () =>
    matchesMarkup(<ExpressionNarrow optionSelected="all" />));
});

describe('Expression Narrow Group', () => {
  it('renders the default expression narrow group', () =>
    matchesMarkup(<ExpressionNarrowGroup />));
  it('renders the default expression narrow with option selected', () =>
    matchesMarkup(<ExpressionNarrowGroup optionSelected="any" />));
});

describe('Expression Narrow Footer', () => {
  it('renders the default expression narrow footer', () =>
    matchesMarkup(<ExpressionNarrowFooter />));
  it('renders the default expression narrow footer with a group', () =>
    matchesMarkup(<ExpressionNarrowFooter hasGroup />));
});
