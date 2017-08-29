// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

let Strength = props => (
  <span
    {...props}
    title="Description of the icon when needed"
    className={classNames('slds-icon-strength', props.className)}
  >
    <svg viewBox="0 0 27 7" aria-hidden="true">
      <circle r="3.025" cx="3.5" cy="3.5" />
      <circle r="3.025" cx="13.5" cy="3.5" />
      <circle r="3.025" cx="23.5" cy="3.5" />
    </svg>
    <span className="slds-assistive-text">Text alternative when needed</span>
  </span>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default <Strength data-slds-strength="0" />;

// States
export let states = [
  {
    id: 'strength-1',
    label: 'Strength: 1',
    element: <Strength data-slds-strength="1" />
  },
  {
    id: 'strength-2',
    label: 'Strength: 2',
    element: <Strength data-slds-strength="2" />
  },
  {
    id: 'strength-3',
    label: 'Strength: 3',
    element: <Strength data-slds-strength="3" />
  },
  {
    id: 'strength-negative-1',
    label: 'Strength: -1',
    element: <Strength data-slds-strength="-1" />
  },
  {
    id: 'strength-negative-2',
    label: 'Strength: -2',
    element: <Strength data-slds-strength="-2" />
  },
  {
    id: 'strength-negative-3',
    label: 'Strength: -3',
    element: <Strength data-slds-strength="-3" />
  },
  {
    id: 'animated',
    label: 'Animated on load',
    element: <Strength className="slds-is-animated" data-slds-strength="3" />
  },
  {
    id: 'animated-negative',
    label: 'Animated on load (negative)',
    element: <Strength className="slds-is-animated" data-slds-strength="-3" />
  },
  {
    id: 'paused',
    label: 'Paused',
    element: (
      <Strength
        className="slds-is-animated slds-is-paused"
        data-slds-strength="3"
      />
    )
  }
];
