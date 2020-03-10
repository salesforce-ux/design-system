import React from 'react';
import uniqueId from 'lodash.uniqueid';
import Input from '../';

export default <Input id={uniqueId('text-input-')} labelText="Label" />;

export const states = [
  {
    id: 'default-with-value',
    label: 'Default with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Input Text"
      />
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: <Input id={uniqueId('text-input-')} labelText="Label" isRequired />
  },
  {
    id: 'required-with-value',
    label: 'Required with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Value Text"
        isRequired
      />
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Input id={uniqueId('text-input-')} labelText="Label" isDisabled />
  },
  {
    id: 'disabled-with-value',
    label: 'Disabled with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Value Text"
        isDisabled
      />
    )
  },
  {
    id: 'readonly',
    label: 'Read Only',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Read Only"
        isReadOnly
      />
    )
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Static"
        isStatic
      />
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        isRequired
        hasError
        helpText="This field has an error"
      />
    )
  },
  {
    id: 'error-with-value',
    label: 'Error with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        isRequired
        hasError
        inputValue="Value Text"
        helpText="This field has an error"
      />
    )
  }
];

export const examples = [
  {
    id: 'no-label',
    label: 'No Label',
    element: (
      <Input id={uniqueId('text-input-')} labelText="Label" labelIsHidden />
    )
  },
  {
    id: 'password',
    label: 'Password',
    element: (
      <Input id={uniqueId('text-input-')} type="password" labelText="Label" />
    )
  },
  {
    id: 'password-with-value',
    label: 'Password with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        type="password"
        labelText="Label"
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'email',
    label: 'Email',
    element: (
      <Input id={uniqueId('text-input-')} type="email" labelText="Label" />
    )
  },
  {
    id: 'email-with-value',
    label: 'Email with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        type="email"
        labelText="Label"
        inputValue="value@text.com"
      />
    )
  },
  {
    id: 'tel',
    label: 'Telephone',
    element: <Input id={uniqueId('text-input-')} type="tel" labelText="Label" />
  },
  {
    id: 'tel-with-value',
    label: 'Telephone with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        type="tel"
        labelText="Label"
        inputValue="(415) 291-8880"
      />
    )
  },
  {
    id: 'url',
    label: 'URL',
    element: <Input id={uniqueId('text-input-')} type="url" labelText="Label" />
  },
  {
    id: 'url-with-value',
    label: 'URL with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        type="url"
        labelText="Label"
        inputValue="https://salesforce.com"
      />
    )
  },
  {
    id: 'search',
    label: 'Search',
    element: (
      <Input id={uniqueId('text-input-')} type="search" labelText="Label" />
    )
  },
  {
    id: 'search-with-value',
    label: 'Search with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        type="search"
        labelText="Label"
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'prefix-icon',
    label: 'Prefix Icon',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        prefixIcon={{ utility: 'search' }}
      />
    )
  },
  {
    id: 'prefix-icon-with-value',
    label: 'Prefix Icon with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        prefixIcon={{ utility: 'search' }}
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'suffix-icon',
    label: 'Suffix Icon',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        suffixIcon={{ utility: 'search' }}
      />
    )
  },
  {
    id: 'suffix-icon-with-value',
    label: 'Suffix Icon with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        suffixIcon={{ utility: 'search' }}
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'clear-button',
    label: 'Clear Button',
    element: (
      <Input id={uniqueId('text-input-')} labelText="Label" hasClearButton />
    )
  },
  {
    id: 'clear-button-with-value',
    label: 'Clear Button with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        hasClearButton
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'loading-spinner',
    label: 'Loading Spinner',
    element: <Input id={uniqueId('text-input-')} labelText="Label" isLoading />
  },
  {
    id: 'loading-spinner-with-value',
    label: 'Loading Spinner with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        isLoading
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'clear-button-and-loading-spinner',
    label: 'Clear Button and Loading Spinner',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        isLoading
        hasClearButton
      />
    )
  },
  {
    id: 'clear-button-and-loading-spinner-with-value',
    label: 'Clear Button and Loading Spinner with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Value Text"
        isLoading
        hasClearButton
      />
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        helpText="ex: (415) 291-8880"
      />
    )
  },
  {
    id: 'inline-help-with-value',
    label: 'Inline Help with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Value Text"
        helpText="ex: (415) 291-8880"
      />
    )
  },
  {
    id: 'prefix',
    label: 'Prefix Symbol',
    element: (
      <Input id={uniqueId('text-input-')} labelText="Label" prefixSymbol="$" />
    )
  },
  {
    id: 'prefix-with-value',
    label: 'Prefix Symbol with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        prefixSymbol="$"
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'suffix',
    label: 'Suffix Symbol',
    element: (
      <Input id={uniqueId('text-input-')} labelText="Label" suffixSymbol="cm" />
    )
  },
  {
    id: 'suffix-with-value',
    label: 'Suffix Symbol with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        suffixSymbol="cm"
        inputValue="Value Text"
      />
    )
  },
  {
    id: 'prefix-and-suffix',
    label: 'Prefix and Suffix Symbols',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        prefixSymbol="£"
        suffixSymbol="in"
      />
    )
  },
  {
    id: 'prefix-and-suffix-with-value',
    label: 'Prefix and Suffix Symbols with Value',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="Label"
        inputValue="Value Text"
        prefixSymbol="£"
        suffixSymbol="in"
      />
    )
  },
  {
    id: 'rtl',
    label: 'Right to Left',
    element: (
      <Input
        id={uniqueId('text-input-')}
        labelText="ضع الكلمة المناسبة"
        placeholderText="نص العنصر النائب"
        prefixSymbol="$"
        direction="rtl"
      />
    )
  }
];
