// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Spinner } from '../../spinners/base/example';
import {
  FormElement,
  SimpleFormElementWrapper,
  FormElementControl
} from '../../form-element';
import uniqueId from 'lodash.uniqueid';

const inputLabel = 'Input Label';
const placeholderText = 'Placeholder text…';

let Required = () => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement labelContent={inputLabel} inputId={inputId} isRequired>
      <Input id={inputId} placeholder={placeholderText} required />
    </FormElement>
  );
};

let ErrorState = () => {
  const inputId = uniqueId('text-input-id-');
  const errorId = uniqueId('error-message-id-');

  return (
    <FormElement
      hasError
      labelContent={inputLabel}
      inputId={inputId}
      errorId={errorId}
      isRequired
      inlineMessage="Enter a value."
    >
      <Input
        id={inputId}
        placeholder={placeholderText}
        required
        aria-describedby={errorId}
      />
    </FormElement>
  );
};

let ErrorIcon = () => {
  const inputId = uniqueId('text-input-id-');
  const errorId = uniqueId('error-message-id-');

  return (
    <FormElement
      hasError
      labelContent={inputLabel}
      inputId={inputId}
      hasLeftIcon
      errorId={errorId}
      isRequired
      inlineMessage="Enter a value."
    >
      <SvgIcon className="slds-input__icon" sprite="utility" symbol="error" />
      <Input
        id={inputId}
        required
        placeholder={placeholderText}
        aria-describedby={errorId}
      />
    </FormElement>
  );
};

let Disabled = () => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement labelContent={inputLabel} inputId={inputId}>
      <Input id={inputId} placeholder={placeholderText} disabled />
    </FormElement>
  );
};

let Readonly = props => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement labelContent={inputLabel} inputId={inputId}>
      <Input
        id={inputId}
        readOnly
        hasBorders={props.hasBorders}
        defaultValue="Read Only"
        placeholder=""
      />
    </FormElement>
  );
};

let LeftIcon = () => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement labelContent={inputLabel} inputId={inputId} hasLeftIcon>
      <SvgIcon
        className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
        sprite="utility"
        symbol="search"
      />
      <Input id={inputId} placeholder={placeholderText} />
    </FormElement>
  );
};

let RightIcon = () => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement labelContent={inputLabel} inputId={inputId} hasRightIcon>
      <SvgIcon
        className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
        sprite="utility"
        symbol="search"
      />
      <Input id={inputId} placeholder={placeholderText} />
    </FormElement>
  );
};

let DoubleIcon = () => {
  const inputId = uniqueId('text-input-id-');

  return (
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
  );
};

let DoubleIconSpinner = () => {
  const inputId = uniqueId('text-input-id-');

  return (
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
  );
};

let InputWithType = props => {
  const inputId = uniqueId(`${props.type}-input-id-`);

  return (
    <FormElement labelContent={props.label} inputId={inputId}>
      <Input id={inputId} type={props.type} placeholder={props.placeholder} />
    </FormElement>
  );
};

InputWithType.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

InputWithType.defaultProps = {
  label: 'Input Label'
};

let FixedText = () => {
  const inputId = uniqueId('text-input-id-');

  return (
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
  );
};

let InlineHelp = () => {
  const inputId = uniqueId('text-input-id-');
  const errorId = uniqueId('error-message-id-');

  return (
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
  );
};

const FieldLevelHelp = () => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement
      labelContent={inputLabel}
      inputId={inputId}
      hasTooltip
      showTooltip
    >
      <Input id={inputId} placeholder={placeholderText} />
    </FormElement>
  );
};

const Bare = () => {
  const inputId = uniqueId('text-input-id-');

  return (
    <FormElement labelContent={inputLabel} inputId={inputId}>
      <Input id={inputId} isBare placeholder={placeholderText} />
    </FormElement>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <FormElement labelContent={inputLabel} inputId="text-input-id-0">
        <Input id="text-input-id-0" placeholder={placeholderText} />
      </FormElement>
    )
  }
];

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
    element: <ErrorState />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon />
  },
  {
    id: 'read-only',
    label: 'Readonly',
    element: <Readonly />
  },
  {
    id: 'read-only-borders',
    label: 'Readonly with borders',
    element: <Readonly hasBorders />
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
    element: <LeftIcon />
  },
  {
    id: 'right-icon',
    label: 'Right Icon',
    element: <RightIcon />
  },
  {
    id: 'double-icon',
    label: 'Left Icon & Clear Button',
    element: <DoubleIcon />
  },
  {
    id: 'double-icon-spinner',
    label: 'Clear Button with Spinner',
    element: <DoubleIconSpinner />
  },
  {
    id: 'email-input',
    label: 'Email Input',
    element: <InputWithType type="email" label="Email" placeholder="Email" />
  },
  {
    id: 'date-input',
    label: 'Date Input',
    element: <InputWithType type="date" />
  },
  {
    id: 'search-input',
    label: 'Search Input',
    element: <InputWithType type="search" />
  },
  {
    id: 'url-input',
    label: 'URL Input',
    element: <InputWithType type="url" />
  },
  {
    id: 'tel-input',
    label: 'Telephone Input',
    element: <InputWithType type="tel" />
  },
  {
    id: 'fixed-text',
    label: 'Fixed text',
    element: <FixedText />
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: <InlineHelp />
  },
  {
    id: 'field-level-help',
    label: 'Field level help',
    demoStyles: `
      padding-top: 3rem;
      position: relative;
    `,
    storybookStyles: `
      padding-top: 4rem;
      position: relative;
    `,
    element: <FieldLevelHelp />
  },
  {
    id: 'bare',
    label: 'Bare',
    element: <Bare />
  }
];
