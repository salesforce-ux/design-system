// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from '../';

export const ButtonIconStateful = props => (
  <ButtonIcon
    aria-pressed={props['aria-pressed']}
    assistiveText={props.assistiveText}
    disabled={props.disabled}
    selected={props.selected}
    symbol={props.symbol}
    theme={props.theme}
    title={props.title}
  />
);

ButtonIconStateful.propTypes = {
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  assistiveText: PropTypes.string.isRequired,
  'aria-pressed': PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  theme: PropTypes.string
};

ButtonIconStateful.defaultProps = {
  'aria-pressed': false,
  disabled: false,
  selected: false,
  theme: null
};

/**
 * Default
 */

export default [
  {
    id: 'default',
    label: 'Stateful – default',
    element: (
      <ButtonIconStateful
        aria-pressed="false"
        assistiveText="Like"
        symbol="like"
        theme="neutral"
        title="Like"
      />
    )
  }
];

/**
 * States
 */
export const states = [
  {
    id: 'button-icon-stateful-selected',
    label: 'Stateful - Selected',
    element: (
      <ButtonIconStateful
        title="Like"
        symbol="like"
        theme="neutral"
        assistiveText="Like"
        aria-pressed="true"
        selected
      />
    )
  },
  {
    id: 'button-icon-stateful-disabled',
    label: 'Stateful - Disabled',
    element: (
      <ButtonIconStateful
        title="Pin"
        symbol="pin"
        theme="neutral"
        assistiveText="Pin"
        aria-pressed="false"
        disabled
      />
    )
  },
  {
    id: 'button-icon-stateful-selected-disabled',
    label: 'Stateful - Selected Disabled',
    element: (
      <ButtonIconStateful
        title="Pin"
        symbol="pinned"
        theme="neutral"
        assistiveText="Pin"
        aria-pressed="true"
        selected
        disabled
      />
    )
  }
];
