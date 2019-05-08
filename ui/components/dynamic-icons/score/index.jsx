import React from 'react';

const Score = props => (
  <span
    {...props}
    className="slds-icon-score"
    title="Description of the icon when needed"
  >
    <svg
      viewBox="0 0 5 5"
      className="slds-icon-score__positive"
      aria-hidden="true"
    >
      <circle cx="50%" cy="50%" r="1.875" />
    </svg>
    <svg
      viewBox="0 0 5 5"
      className="slds-icon-score__negative"
      aria-hidden="true"
    >
      <circle cx="50%" cy="50%" r="1.875" />
    </svg>
    <span className="slds-assistive-text">Text alternative when needed</span>
  </span>
);

export default Score;
