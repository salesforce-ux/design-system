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

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Expression Base', () => {
  xit('renders the default expression', () =>
    matchesMarkupAndStyle(<Expression />));
  xit('renders the disabled initial state', () =>
    matchesMarkupAndStyle(<Expression inputIsDisabled buttonIsDisabled />));
  xit('renders with custom logic', () =>
    matchesMarkupAndStyle(<Expression hasCustomLogic />));
  xit('renders with legend text', () =>
    matchesMarkupAndStyle(<Expression legendText="1" />));
  xit('renders with any option selected', () =>
    matchesMarkupAndStyle(<Expression optionSelected="any" />));
  xit('renders with all option selected', () =>
    matchesMarkupAndStyle(<Expression optionSelected="all" />));
  xit('renders with custom option selected', () =>
    matchesMarkupAndStyle(<Expression optionSelected="custom" />));
  xit('renders with always option selected', () =>
    matchesMarkupAndStyle(<Expression optionSelected="always" />));
  xit('renders with formula option selected', () =>
    matchesMarkupAndStyle(<Expression optionSelected="formula" />));
  xit('renders with a resource selected', () =>
    matchesMarkupAndStyle(<Expression resourceIsSelected />));
  xit('renders with a custom logic value', () =>
    matchesMarkupAndStyle(<Expression customLogicValue="1 OR 2 OR 3" />));
});

describe('Expression Row', () => {
  xit('renders the default row', () =>
    matchesMarkupAndStyle(<ExpressionRow />));
  xit('renders the default row with legend text and sassistive text', () =>
    matchesMarkupAndStyle(
      <ExpressionRow legendText="AND" assistiveText="Condition 1" />
    ));
  xit('renders the default row in a group', () =>
    matchesMarkupAndStyle(<ExpressionRow isGroup />));
  xit('renders the default row with input disabled', () =>
    matchesMarkupAndStyle(<ExpressionRow inputIsDisabled />));
  xit('renders the default row with button disabled', () =>
    matchesMarkupAndStyle(<ExpressionRow buttonIsDisabled />));
  xit('renders the default row with inputs and button disabled', () =>
    matchesMarkupAndStyle(<ExpressionRow inputIsDisabled buttonIsDisabled />));
  xit('renders the default row with a resource selected', () =>
    matchesMarkupAndStyle(<ExpressionRow resourceIsSelected />));
  xit('renders the default row with an error', () =>
    matchesMarkupAndStyle(
      <ExpressionRow errorMessage="This field is required" hasError />
    ));
});

describe('Expression Options', () => {
  xit('renders the default expression options', () =>
    matchesMarkupAndStyle(<ExpressionOptions />));
  xit('renders the default expression options with a label', () =>
    matchesMarkupAndStyle(<ExpressionOptions label="When" />));
  xit('renders the default expression options in a filter', () =>
    matchesMarkupAndStyle(<ExpressionOptions isInFilter />));
  xit('renders the default expression options with an option selected', () =>
    matchesMarkupAndStyle(<ExpressionOptions optionSelected="all" />));
});

describe('Expression List', () => {
  xit('renders the default expression list', () =>
    matchesMarkupAndStyle(
      <ExpressionList>
        <ExpressionRow legendText="AND" assistiveText="Condition 1" />
      </ExpressionList>
    ));
});

describe('Expression Legend', () => {
  xit('renders the default expression legend', () =>
    matchesMarkupAndStyle(<ExpressionLegend />));
  xit('renders the default expression legend for a group', () =>
    matchesMarkupAndStyle(<ExpressionLegend isGroup />));
  xit('renders the default expression legend with custom text', () =>
    matchesMarkupAndStyle(<ExpressionLegend legendText="OR" />));
  xit('renders the default expression legend with assistive text', () =>
    matchesMarkupAndStyle(<ExpressionLegend assistiveText="Condition 2" />));
});

describe('Expression Group', () => {
  xit('renders the default expression group', () =>
    matchesMarkupAndStyle(<ExpressionGroup />));
  xit('renders the default expression group with legend text and assistive text', () =>
    matchesMarkupAndStyle(
      <ExpressionGroup legendText="AND" assistiveText="Condition 1" />
    ));
  xit('renders the default expression group with any option selected', () =>
    matchesMarkupAndStyle(<ExpressionGroup optionSelected="any" />));
  xit('renders the default expression group with all option selected', () =>
    matchesMarkupAndStyle(<ExpressionGroup optionSelected="all" />));
  xit('renders the default expression group with always option selected', () =>
    matchesMarkupAndStyle(<ExpressionGroup optionSelected="always" />));
  xit('renders the default expression group with custom option selected', () =>
    matchesMarkupAndStyle(<ExpressionGroup optionSelected="custom" />));
  xit('renders the default expression group with formula option selected', () =>
    matchesMarkupAndStyle(<ExpressionGroup optionSelected="formula" />));
  xit('renders the default expression group with group option selected', () =>
    matchesMarkupAndStyle(<ExpressionGroup optionSelected="group" />));
  xit('renders the default expression group with a row', () =>
    matchesMarkupAndStyle(
      <ExpressionGroup>
        <ExpressionRow legendText="AND" assistiveText="Condition 1" />
      </ExpressionGroup>
    ));
});

describe('Expression Custom', () => {
  xit('renders the default expression custom', () =>
    matchesMarkupAndStyle(<ExpressionCustom />));
  xit('renders the default expression custom with a default value', () =>
    matchesMarkupAndStyle(<ExpressionCustom defaultValue="1 and 2" />));
});

describe('Expression Column', () => {
  xit('renders the default expression column', () =>
    matchesMarkupAndStyle(<ExpressionCol />));
  xit('renders the default expression column that does not grow', () =>
    matchesMarkupAndStyle(<ExpressionCol doesNotGrow />));
});

describe('Expression Buttons', () => {
  xit('renders the default expression buttons', () =>
    matchesMarkupAndStyle(<ExpressionButtons />));
  xit('renders the default expression buttons in a group', () =>
    matchesMarkupAndStyle(<ExpressionButtons isGroup />));
});

describe('Expression Formula', () => {
  xit('renders the default expression formula variant', () =>
    matchesMarkupAndStyle(<Formula />));
  xit('renders the default expression formula with an option selected', () =>
    matchesMarkupAndStyle(<Formula optionSelected="formula" />));
});

describe('Expression Narrow', () => {
  xit('renders the default expression narrow variant', () =>
    matchesMarkupAndStyle(<ExpressionNarrow />));
  xit('renders the default expression narrow with option selected', () =>
    matchesMarkupAndStyle(<ExpressionNarrow optionSelected="all" />));
});

describe('Expression Narrow Group', () => {
  xit('renders the default expression narrow group', () =>
    matchesMarkupAndStyle(<ExpressionNarrowGroup />));
  xit('renders the default expression narrow with option selected', () =>
    matchesMarkupAndStyle(<ExpressionNarrowGroup optionSelected="any" />));
});

describe('Expression Narrow Footer', () => {
  xit('renders the default expression narrow footer', () =>
    matchesMarkupAndStyle(<ExpressionNarrowFooter />));
  xit('renders the default expression narrow footer with a group', () =>
    matchesMarkupAndStyle(<ExpressionNarrowFooter hasGroup />));
});
