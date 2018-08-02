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
  xit('renders the default expression', () => matchesMarkup(<Expression />));
  xit('renders the disabled initial state', () =>
    matchesMarkup(<Expression inputIsDisabled buttonIsDisabled />));
  xit('renders with custom logic', () =>
    matchesMarkup(<Expression hasCustomLogic />));
  xit('renders with legend text', () =>
    matchesMarkup(<Expression legendText="1" />));
  xit('renders with any option selected', () =>
    matchesMarkup(<Expression optionSelected="any" />));
  xit('renders with all option selected', () =>
    matchesMarkup(<Expression optionSelected="all" />));
  xit('renders with custom option selected', () =>
    matchesMarkup(<Expression optionSelected="custom" />));
  xit('renders with always option selected', () =>
    matchesMarkup(<Expression optionSelected="always" />));
  xit('renders with formula option selected', () =>
    matchesMarkup(<Expression optionSelected="formula" />));
  xit('renders with a resource selected', () =>
    matchesMarkup(<Expression resourceIsSelected />));
  xit('renders with a custom logic value', () =>
    matchesMarkup(<Expression customLogicValue="1 OR 2 OR 3" />));
});

describe('Expression Row', () => {
  xit('renders the default row', () => matchesMarkup(<ExpressionRow />));
  xit('renders the default row with legend text and sassistive text', () =>
    matchesMarkup(
      <ExpressionRow legendText="AND" assistiveText="Condition 1" />
    ));
  xit('renders the default row in a group', () =>
    matchesMarkup(<ExpressionRow isGroup />));
  xit('renders the default row with input disabled', () =>
    matchesMarkup(<ExpressionRow inputIsDisabled />));
  xit('renders the default row with button disabled', () =>
    matchesMarkup(<ExpressionRow buttonIsDisabled />));
  xit('renders the default row with inputs and button disabled', () =>
    matchesMarkup(<ExpressionRow inputIsDisabled buttonIsDisabled />));
  xit('renders the default row with a resource selected', () =>
    matchesMarkup(<ExpressionRow resourceIsSelected />));
  xit('renders the default row with an error', () =>
    matchesMarkup(
      <ExpressionRow errorMessage="This field is required" hasError />
    ));
});

describe('Expression Options', () => {
  xit('renders the default expression options', () =>
    matchesMarkup(<ExpressionOptions />));
  xit('renders the default expression options with a label', () =>
    matchesMarkup(<ExpressionOptions label="When" />));
  xit('renders the default expression options in a filter', () =>
    matchesMarkup(<ExpressionOptions isInFilter />));
  xit('renders the default expression options with an option selected', () =>
    matchesMarkup(<ExpressionOptions optionSelected="all" />));
});

describe('Expression List', () => {
  xit('renders the default expression list', () =>
    matchesMarkup(
      <ExpressionList>
        <ExpressionRow legendText="AND" assistiveText="Condition 1" />
      </ExpressionList>
    ));
});

describe('Expression Legend', () => {
  xit('renders the default expression legend', () =>
    matchesMarkup(<ExpressionLegend />));
  xit('renders the default expression legend for a group', () =>
    matchesMarkup(<ExpressionLegend isGroup />));
  xit('renders the default expression legend with custom text', () =>
    matchesMarkup(<ExpressionLegend legendText="OR" />));
  xit('renders the default expression legend with assistive text', () =>
    matchesMarkup(<ExpressionLegend assistiveText="Condition 2" />));
});

describe('Expression Group', () => {
  xit('renders the default expression group', () =>
    matchesMarkup(<ExpressionGroup />));
  xit('renders the default expression group with legend text and assistive text', () =>
    matchesMarkup(
      <ExpressionGroup legendText="AND" assistiveText="Condition 1" />
    ));
  xit('renders the default expression group with any option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="any" />));
  xit('renders the default expression group with all option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="all" />));
  xit('renders the default expression group with always option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="always" />));
  xit('renders the default expression group with custom option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="custom" />));
  xit('renders the default expression group with formula option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="formula" />));
  xit('renders the default expression group with group option selected', () =>
    matchesMarkup(<ExpressionGroup optionSelected="group" />));
  xit('renders the default expression group with a row', () =>
    matchesMarkup(
      <ExpressionGroup>
        <ExpressionRow legendText="AND" assistiveText="Condition 1" />
      </ExpressionGroup>
    ));
});

describe('Expression Custom', () => {
  xit('renders the default expression custom', () =>
    matchesMarkup(<ExpressionCustom />));
  xit('renders the default expression custom with a default value', () =>
    matchesMarkup(<ExpressionCustom defaultValue="1 and 2" />));
});

describe('Expression Column', () => {
  xit('renders the default expression column', () =>
    matchesMarkup(<ExpressionCol />));
  xit('renders the default expression column that does not grow', () =>
    matchesMarkup(<ExpressionCol doesNotGrow />));
});

describe('Expression Buttons', () => {
  xit('renders the default expression buttons', () =>
    matchesMarkup(<ExpressionButtons />));
  xit('renders the default expression buttons in a group', () =>
    matchesMarkup(<ExpressionButtons isGroup />));
});

describe('Expression Formula', () => {
  xit('renders the default expression formula variant', () =>
    matchesMarkup(<Formula />));
  xit('renders the default expression formula with an option selected', () =>
    matchesMarkup(<Formula optionSelected="formula" />));
});

describe('Expression Narrow', () => {
  xit('renders the default expression narrow variant', () =>
    matchesMarkup(<ExpressionNarrow />));
  xit('renders the default expression narrow with option selected', () =>
    matchesMarkup(<ExpressionNarrow optionSelected="all" />));
});

describe('Expression Narrow Group', () => {
  xit('renders the default expression narrow group', () =>
    matchesMarkup(<ExpressionNarrowGroup />));
  xit('renders the default expression narrow with option selected', () =>
    matchesMarkup(<ExpressionNarrowGroup optionSelected="any" />));
});

describe('Expression Narrow Footer', () => {
  xit('renders the default expression narrow footer', () =>
    matchesMarkup(<ExpressionNarrowFooter />));
  xit('renders the default expression narrow footer with a group', () =>
    matchesMarkup(<ExpressionNarrowFooter hasGroup />));
});
