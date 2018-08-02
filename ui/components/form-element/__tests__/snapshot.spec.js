// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  SimpleFormElementWrapper,
  FormElementControl,
  FormElementLabel,
  FormElementSpanFauxLabel,
  FormElementTooltip,
  FormElementHelpMessage,
  FormElementStatic,
  Fieldset,
  FieldsetWrapper,
  Legend,
  FormElement
} from '../';
import { Input } from '../../input/base/example';
import ButtonIcon from '../../button-icons/';

const { matchesMarkup } = createHelpers(__dirname);

describe('Form Element', () => {
  it('renders form element wrapper', () =>
    matchesMarkup(
      <SimpleFormElementWrapper>content</SimpleFormElementWrapper>
    ));
  it('renders form element wrapper with inline edit classname', () =>
    matchesMarkup(
      <SimpleFormElementWrapper isEditable>content</SimpleFormElementWrapper>
    ));
  it('renders form element wrapper with view mode classname', () =>
    matchesMarkup(
      <SimpleFormElementWrapper isViewMode>content</SimpleFormElementWrapper>
    ));
  it('renders form element wrapper with hint classname', () =>
    matchesMarkup(
      <SimpleFormElementWrapper hasHint>content</SimpleFormElementWrapper>
    ));
  it('renders form element wrapper with error classname', () =>
    matchesMarkup(
      <SimpleFormElementWrapper hasError>content</SimpleFormElementWrapper>
    ));
  it('renders form element label', () =>
    matchesMarkup(<FormElementLabel labelContent="Form label" />));
  it('renders form element label with required asterisk', () =>
    matchesMarkup(<FormElementLabel labelContent="Form label" isRequired />));
  it('renders form element label with required asterisk', () =>
    matchesMarkup(<FormElementLabel labelContent="Form label" isRequired />));
  it('renders form element label with hidden label', () =>
    matchesMarkup(
      <FormElementLabel labelContent="Form label" hasHiddenLabel />
    ));
  it('renders form element label with label ID', () =>
    matchesMarkup(
      <FormElementLabel labelContent="Form label" labelId="label-id" />
    ));
  it('renders form element label with label classname', () =>
    matchesMarkup(
      <FormElementLabel labelContent="Form label" labelClassName="slds-foo" />
    ));
  it('renders form element label with input ID', () =>
    matchesMarkup(
      <FormElementLabel labelContent="Form label" inputId="input-id" />
    ));
  it('renders form element label as a span element', () =>
    matchesMarkup(
      <FormElementSpanFauxLabel>content</FormElementSpanFauxLabel>
    ));
  it('renders form element control', () =>
    matchesMarkup(<FormElementControl>content</FormElementControl>));
  it('renders form element control with classname', () =>
    matchesMarkup(
      <FormElementControl className="slds-foo">content</FormElementControl>
    ));
  it('renders form element help text icon', () =>
    matchesMarkup(<FormElementTooltip />));
  it('renders form element help text icon with a tooltip', () =>
    matchesMarkup(<FormElementTooltip showTooltip />));
  it('renders form element inline help message', () =>
    matchesMarkup(<FormElementHelpMessage />));
  it('renders form element inline help message with ID', () =>
    matchesMarkup(<FormElementHelpMessage errorId="error-id" />));
  it('renders form element with static/view only value', () =>
    matchesMarkup(<FormElementStatic>content</FormElementStatic>));
  it('renders form element with static/view only longform value', () =>
    matchesMarkup(<FormElementStatic isLongform>content</FormElementStatic>));
  it('renders form element fieldset wrapper', () =>
    matchesMarkup(<FieldsetWrapper>content</FieldsetWrapper>));
  it('renders form element fieldset wrapper with compound fields', () =>
    matchesMarkup(
      <FieldsetWrapper hasCompoundFields>content</FieldsetWrapper>
    ));
  it('renders form element fieldset wrapper with error classname', () =>
    matchesMarkup(<FieldsetWrapper hasError>content</FieldsetWrapper>));
  it('renders form element fieldset wrapper with required classname', () =>
    matchesMarkup(<FieldsetWrapper isRequired>content</FieldsetWrapper>));
  it('renders form element fieldset legend', () =>
    matchesMarkup(<Legend>content</Legend>));
  it('renders form element fieldset legend with required asterisk', () =>
    matchesMarkup(<Legend isRequired>content</Legend>));
  it('renders form element fieldset legend with help text icon', () =>
    matchesMarkup(<Legend hasTooltip>content</Legend>));
  it('renders form element fieldset legend that is visually hidden', () =>
    matchesMarkup(<Legend hasHiddenLabel>content</Legend>));
  it('renders form element as a fieldset', () =>
    matchesMarkup(<Fieldset label="Fieldset legend">content</Fieldset>));
  it('renders form element as a fieldset with required asterisk', () =>
    matchesMarkup(
      <Fieldset label="Fieldset legend" isRequired>
        content
      </Fieldset>
    ));
  it('renders form element as a fieldset with error classname', () =>
    matchesMarkup(
      <Fieldset label="Fieldset legend" hasError>
        content
      </Fieldset>
    ));
  it('renders form element as a fieldset with compound field classname', () =>
    matchesMarkup(
      <Fieldset label="Fieldset legend" hasCompoundFields>
        content
      </Fieldset>
    ));
  it('renders form element as a fieldset with help text icon', () =>
    matchesMarkup(
      <Fieldset label="Fieldset legend" hasTooltip>
        content
      </Fieldset>
    ));
  it('renders form element as a fieldset with hidden legend', () =>
    matchesMarkup(
      <Fieldset label="Fieldset legend" hasHiddenLabel>
        content
      </Fieldset>
    ));
});

describe('Form Element Composition', () => {
  it('renders form element with input', () =>
    matchesMarkup(
      <FormElement labelContent="Form label" inputId="input-1">
        <Input id="input-1" />
      </FormElement>
    ));
  it('renders form element with input that is required', () =>
    matchesMarkup(
      <FormElement labelContent="Form label" inputId="input-1" isRequired>
        <Input id="input-1" required />
      </FormElement>
    ));
  it('renders form element with input that has an error', () =>
    matchesMarkup(
      <FormElement
        labelContent="Form label"
        inputId="input-1"
        errorId="error-1"
        isRequired
        hasError
        inlineMessage="This field is required"
      >
        <Input id="input-1" required aria-describedby="error-1" />
      </FormElement>
    ));
  it('renders inline editable form element in view mode', () =>
    matchesMarkup(
      <FormElement isViewMode labelContent="Status" isEditable hasHint>
        <FormElementStatic>In Progress</FormElementStatic>
        <ButtonIcon
          iconClassName="slds-button__icon_hint"
          symbol="edit"
          assistiveText="Edit: Status"
          title="Edit: Status"
        />
      </FormElement>
    ));
});
