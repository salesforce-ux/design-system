import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TypingIcon = props => (
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

export default TypingIcon;
