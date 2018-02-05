// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

let Trend = props => {
  const { assistiveText, ...rest } = props;

  return (
    <span {...rest} className={classNames('slds-icon-trend', props.className)}>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          className="slds-icon-trend__arrow"
          d="M.75 8H11M8 4.5L11.5 8 8 11.5"
        />
        <circle
          className="slds-icon-trend__circle"
          cy="8"
          cx="8"
          r="7.375"
          transform="rotate(-28 8 8) scale(-1 1) translate(-16 0)"
        />
      </svg>
      <span className="slds-assistive-text">{assistiveText}</span>
    </span>
  );
};

Trend.propTypes = {
  title: PropTypes.string.isRequired,
  assistiveText: PropTypes.string.isRequired
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default (
  <Trend
    data-slds-trend="neutral"
    className="slds-is-animated"
    title="Description of the icon"
    assistiveText="Text alternative"
  />
);

// States
export let states = [
  {
    id: 'down',
    label: 'Down',
    element: (
      <Trend
        data-slds-trend="down"
        className="slds-is-animated"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'up',
    label: 'Up',
    element: (
      <Trend
        data-slds-trend="up"
        className="slds-is-animated"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'static',
    label: 'Static (no animation)',
    element: (
      <Trend
        data-slds-trend="up"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'paused',
    label: 'Paused',
    element: (
      <Trend
        data-slds-trend="up"
        className="slds-is-animated slds-is-paused"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  }
];
