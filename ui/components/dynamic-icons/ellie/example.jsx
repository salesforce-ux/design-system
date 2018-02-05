// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// This icon is a sprite of 20 frames laid out horizontally
// Each frame is composed of 2 circles positioned on top of each other
const frames = 20;

export const Ellie = props => (
  <span
    className={classNames('slds-icon-ellie', props.className)}
    title={props.title}
  >
    <svg viewBox={`0 0 ${frames * 14} 14`} aria-hidden="true">
      {/* Loop through frames 1 through 20 */}
      {_.range(1, frames + 1).map(frame => [
        <circle
          cx={14 * frame - 7}
          cy="7"
          r="4"
          key={`outer-circle-${frame}`}
        />,
        <circle
          cx={14 * frame - 7}
          cy="7"
          r="3"
          key={`inner-circle-${frame}`}
        />
      ])}
    </svg>
    <span className="slds-assistive-text">{props.assistiveText}</span>
  </span>
);

Ellie.propTypes = {
  title: PropTypes.string.isRequired,
  assistiveText: PropTypes.string.isRequired
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default (
  <Ellie
    className="slds-is-animated"
    title="Description of the icon"
    assistiveText="Text alternative"
  />
);

export let states = [
  {
    id: 'paused',
    label: 'Paused',
    element: (
      <Ellie
        className="slds-is-animated slds-is-paused"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'static',
    label: 'Static (no animation)',
    element: (
      <Ellie title="Description of the icon" assistiveText="Text alternative" />
    )
  }
];
