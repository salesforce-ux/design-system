// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import ButtonIcon2 from '../';

export let ButtonIcon = props => (
  <button
    className={classNames(
      'slds-button slds-button_icon',
      props.className,
      props.selected ? 'slds-is-selected' : null
    )}
    disabled={props.disabled}
    role={props.role}
    aria-describedby={props['aria-describedby']}
    aria-haspopup={props.hasDropdown ? 'true' : props['aria-haspopup']}
    aria-expanded={props['aria-expanded']}
    aria-controls={props['aria-controls']}
    aria-hidden={props['aria-hidden']}
    aria-pressed={props['aria-pressed']}
    aria-live={props.assertive ? 'assertive' : props['aria-live']}
    id={props.id}
    tabIndex={props.tabIndex}
    title={props.title || 'Provide description of action'}
  >
    <SvgIcon
      className={classNames('slds-button__icon', props.iconClassName)}
      sprite="utility"
      symbol={props.symbol || 'settings'}
    />
    {props.hasDropdown ? (
      <SvgIcon
        className="slds-button__icon slds-button__icon_x-small"
        sprite="utility"
        symbol="down"
      />
    ) : null}
    <span className="slds-assistive-text">
      {props.assistiveText || 'Provide description of action'}
    </span>
  </button>
);

export default <ButtonIcon2 />;

export let states = [
  {
    id: 'button-icon-error',
    label: 'Error',
    element: (
      <ButtonIcon2
        feedback="error"
        symbol="warning"
        title="Error"
        assistiveText="Error"
      />
    )
  },
  {
    id: 'button-icon-disabled',
    label: 'Disabled',
    element: <ButtonIcon2 disabled />
  }
];

export let examples = [
  {
    id: 'brand',
    label: 'Brand',
    element: <ButtonIcon2 theme="brand" symbol="search" />
  },
  {
    id: 'border-transparent',
    label: 'Bordered: Transparent',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon2 theme="transparent" symbol="search" />
      </div>
    )
  },
  {
    id: 'border-filled',
    label: 'Bordered: Filled',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon2 theme="neutral" symbol="search" />
      </div>
    )
  },
  {
    id: 'border-inverse',
    label: 'Bordered: Inverse',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <ButtonIcon2 theme="inverse" size="medium" />
      </div>
    )
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <ButtonIcon2 theme="inverse" />
      </div>
    )
  },
  {
    id: 'size-small',
    label: 'Size: small',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon2 theme="neutral" size="small" symbol="search" />
      </div>
    )
  },
  {
    id: 'size-x-small',
    label: 'Size: x-small',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon2 theme="neutral" size="x-small" symbol="search" />
      </div>
    )
  },
  {
    id: 'size-xx-small',
    label: 'Size: xx-small',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon2 theme="neutral" size="xx-small" symbol="search" />
      </div>
    )
  },
  {
    id: 'hint-hover',
    label: 'Hint on hover',
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon2 iconClassName="slds-button__icon_hint" />
      </div>
    )
  }
];
