import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

export default Trend;
