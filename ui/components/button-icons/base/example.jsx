// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import ButtonIcon from '../';

export default <ButtonIcon />;

export let states = [
  {
    id: 'error',
    label: 'Error',
    element: (
      <ButtonIcon
        feedback="error"
        symbol="warning"
        title="Error"
        assistiveText="Error"
      />
    )
  },
  {
    id: 'bare-disabled',
    label: 'Bare - Disabled',
    element: <ButtonIcon disabled />
  },
  {
    id: 'border-transparent-disabled',
    label: 'Bordered with Transparent Container - Disabled',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="transparent" symbol="settings" disabled />
      </div>
    )
  },
  {
    id: 'border-filled-disabled',
    label: 'Bordered with Filled Container - Disabled',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="neutral" symbol="settings" disabled />
      </div>
    )
  },
  {
    id: 'brand-disabled',
    label: 'Brand - Disabled',
    element: <ButtonIcon theme="brand" symbol="settings" disabled />
  }
];

export let examples = [
  {
    id: 'brand',
    label: 'Brand',
    element: <ButtonIcon theme="brand" symbol="search" />
  },
  {
    id: 'container-transparent',
    label: 'Transparent Container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon size="medium" symbol="search" />
      </div>
    )
  },
  {
    id: 'border-transparent',
    label: 'Bordered with Transparent Container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="transparent" symbol="search" />
      </div>
    )
  },
  {
    id: 'border-filled',
    label: 'Bordered with Filled Container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="neutral" symbol="search" />
      </div>
    )
  },
  {
    id: 'border-inverse',
    label: 'Bordered on Inverse Background',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <ButtonIcon theme="inverse" size="medium" />
      </div>
    )
  },
  {
    id: 'inverse',
    label: 'Bare on Inverse Background',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <ButtonIcon theme="inverse" />
      </div>
    )
  },
  {
    id: 'size-small',
    label: 'Small sized container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="neutral" size="small" symbol="search" />
      </div>
    )
  },
  {
    id: 'size-x-small',
    label: 'x-small sized container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="neutral" size="x-small" symbol="search" />
      </div>
    )
  },
  {
    id: 'size-xx-small',
    label: 'xx-small sized container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon theme="neutral" size="xx-small" symbol="search" />
      </div>
    )
  },
  {
    id: 'hint-hover',
    label: 'Hint on hover',
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon iconClassName="slds-button__icon_hint" />
      </div>
    )
  },
  {
    id: 'hint-hover-bordered-transparent',
    label: 'Hint on hover - Bordered with Transparent Container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <div className="slds-hint-parent">
          <ButtonIcon
            theme="transparent"
            iconClassName="slds-button__icon_hint"
          />
        </div>
      </div>
    )
  },
  {
    id: 'hint-hover-bordered-filled',
    label: 'Hint on hover - Bordered with Filled Container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <div className="slds-hint-parent">
          <ButtonIcon theme="neutral" iconClassName="slds-button__icon_hint" />
        </div>
      </div>
    )
  },
  {
    id: 'hint-hover-bare-inverse',
    label: 'Hint on hover - Bare on Inverse Background',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <div className="slds-hint-parent">
          <ButtonIcon
            theme="inverse"
            iconClassName="slds-button__icon_inverse-hint"
          />
        </div>
      </div>
    )
  },
  {
    id: 'hint-hover-bordered-inverse',
    label: 'Hint on hover - Bordered on Inverse Background',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <div className="slds-hint-parent">
          <ButtonIcon
            theme="inverse"
            size="medium"
            iconClassName="slds-button__icon_inverse-hint"
          />
        </div>
      </div>
    )
  }
];
