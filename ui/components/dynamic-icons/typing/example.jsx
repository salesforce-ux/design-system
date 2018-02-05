// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const TypingIcon = props => (
  <span
    className={classNames('slds-icon-typing', {
      'slds-is-animated': props.isAnimated,
      'slds-is-paused': props.isPaused
    })}
    title={props.title}
  >
    <span className="slds-icon-typing__dot" />
    <span className="slds-icon-typing__dot" />
    <span className="slds-icon-typing__dot" />
    {props.assistiveText && (
      <span className="slds-assistive-text">{props.assistiveText}</span>
    )}
  </span>
);

TypingIcon.propTypes = {
  isAnimated: PropTypes.bool,
  isPaused: PropTypes.bool,
  title: PropTypes.string.isRequired,
  assistiveText: PropTypes.string
};

export default (
  <TypingIcon
    title="User is typing"
    assistiveText="User is typing"
    isAnimated
  />
);

export let states = [
  {
    id: 'paused',
    label: 'Paused',
    element: (
      <TypingIcon
        title="User is typing"
        assistiveText="User is typing"
        isAnimated
        isPaused
      />
    )
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <TypingIcon title="User is typing" assistiveText="User is typing" />
    )
  }
];
