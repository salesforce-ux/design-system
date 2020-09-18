// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Input from '../';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Spinner } from '../../spinners/base/example';
import {
  FormElement,
  SimpleFormElementWrapper,
  FormElementControl
} from '../../form-element';

const inputLabel = 'Input Label';
const inputId = 'text-input-id-1';
const errorId = 'error-message-unique-id';
const placeholderText = 'Placeholder text…';

let Required = props => (
  <FormElement labelContent={inputLabel} inputId={inputId} isRequired>
    <Input id={inputId} placeholder={placeholderText} required />
  </FormElement>
);

let ErrorState = props => (
  <FormElement
    hasError
    labelContent={inputLabel}
    inputId={inputId}
    errorId={props.errorId}
    isRequired
    inlineMessage="Enter a value."
  >
    <Input
      id={inputId}
      placeholder={placeholderText}
      required
      aria-describedby={props.errorId}
    />
  </FormElement>
);

let ErrorIcon = props => (
  <FormElement
    hasError
    labelContent={inputLabel}
    inputId={inputId}
    hasLeftIcon
    errorId={props.errorId}
    isRequired
    inlineMessage="Enter a value."
  >
    <SvgIcon className="slds-input__icon" sprite="utility" symbol="error" />
    <Input
      id={inputId}
      required
      placeholder={placeholderText}
      aria-describedby={props.errorId}
    />
  </FormElement>
);

let Disabled = props => (
  <FormElement labelContent={inputLabel} inputId={inputId}>
    <Input id={inputId} placeholder={placeholderText} disabled />
  </FormElement>
);

let Readonly = props => (
  <FormElement labelContent={inputLabel} inputId={inputId}>
    <Input id={inputId} readOnly defaultValue="Read Only" placeholder="" />
  </FormElement>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement labelContent={inputLabel} inputId={inputId}>
    <Input id={inputId} placeholder={placeholderText} />
  </FormElement>
);

export let states = [
  {
    id: 'input-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'input-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'input-error',
    label: 'Error',
    element: <ErrorState errorId={errorId} />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon errorId={errorId} />
  },
  {
    id: 'read-only',
    label: 'Readonly',
    element: <Readonly />
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <SimpleFormElementWrapper>
        <span className="slds-form-element__label">Input Label</span>
        <FormElementControl>
          <span className="slds-form-element__static">Read Only</span>
        </FormElementControl>
      </SimpleFormElementWrapper>
    )
  }
];

export let examples = [
  {
    id: 'left-icon',
    label: 'Left Icon',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId} hasLeftIcon>
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} placeholder={placeholderText} />
      </FormElement>
    )
  },
  {
    id: 'right-icon',
    label: 'Right Icon',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId} hasRightIcon>
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} placeholder={placeholderText} />
      </FormElement>
    )
  },
  {
    id: 'double-icon',
    label: 'Left Icon & Clear Button',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={inputId}
        hasLeftIcon
        hasRightIcon
      >
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} placeholder={placeholderText} />
        <ButtonIcon
          symbol="clear"
          className="slds-input__icon slds-input__icon_right"
          iconClassName="slds-icon-text-light"
          assistiveText="Clear"
          title="Clear"
        />
      </FormElement>
    )
  },
  {
    id: 'double-icon-spinner',
    label: 'Clear Button with Spinner',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={inputId}
        hasLeftIcon
        hasRightIcon
        hasRightIconGroup
      >
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} placeholder={placeholderText} />
        <div className="slds-input__icon-group slds-input__icon-group_right">
          <Spinner className="slds-spinner_brand slds-spinner_x-small slds-input__spinner" />
          <ButtonIcon
            symbol="clear"
            className="slds-input__icon slds-input__icon_right"
            iconClassName="slds-icon-text-light"
            assistiveText="Clear"
            title="Clear"
          />
        </div>
      </FormElement>
    )
  },
  {
    id: 'email-input',
    label: 'Email Input',
    element: (
      <FormElement labelContent="Email" inputId="input-email">
        <Input id="input-email" type="email" placeholder="E-Mail" />
      </FormElement>
    )
  },
  {
    id: 'date-input',
    label: 'Date Input',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId}>
        <Input id={inputId} type="date" />
      </FormElement>
    )
  },
  {
    id: 'search-input',
    label: 'Search Input',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId}>
        <Input id={inputId} type="search" />
      </FormElement>
    )
  },
  {
    id: 'url-input',
    label: 'URL Input',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId}>
        <Input id={inputId} type="url" />
      </FormElement>
    )
  },
  {
    id: 'tel-input',
    label: 'Telephone Input',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId}>
        <Input id={inputId} type="tel" />
      </FormElement>
    )
  },
  {
    id: 'fixed-text',
    label: 'Fixed text',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={inputId}
        formControlClassName="slds-input-has-fixed-addon"
        labelId="fixed-text-label"
      >
        <span className="slds-form-element__addon" id="fixed-text-addon-pre">
          $
        </span>
        <Input
          id={inputId}
          placeholder={placeholderText}
          aria-labelledby="fixed-text-label fixed-text-addon-pre fixed-text-addon-post"
        />
        <span className="slds-form-element__addon" id="fixed-text-addon-post">
          euro
        </span>
      </FormElement>
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <FormElement
        labelId="inline-text-label"
        labelContent={inputLabel}
        inputId={inputId}
        errorId={errorId}
        inlineMessage="ex: (415)111-2222"
      >
        <Input
          id={inputId}
          placeholder={placeholderText}
          aria-describedby={errorId}
        />
      </FormElement>
    )
  },
  {
    id: 'field-level-help',
    label: 'Field level help',
    element: (
      <div
        style={{
          paddingTop: '3rem',
          position: 'relative'
        }}
      >
        <FormElement
          labelContent={inputLabel}
          inputId={inputId}
          hasTooltip
          showTooltip
        >
          <Input id={inputId} placeholder={placeholderText} />
        </FormElement>
      </div>
    )
  }
];
