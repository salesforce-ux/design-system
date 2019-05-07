import React from 'react';
import classNames from 'classnames';

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

export default Strength;
