import React from 'react';
import classNames from 'classnames';

let WaffleIcon = props => (
  <button
    {...props}
    className={classNames(
      'slds-button slds-icon-waffle_container',
      props.className
    )}
    title="Description of the icon when needed"
  >
    <span className="slds-icon-waffle">
      <span className="slds-r1" />
      <span className="slds-r2" />
      <span className="slds-r3" />
      <span className="slds-r4" />
      <span className="slds-r5" />
      <span className="slds-r6" />
      <span className="slds-r7" />
      <span className="slds-r8" />
      <span className="slds-r9" />
    </span>
    <span className="slds-assistive-text">Open App Launcher</span>
  </button>
);

export default WaffleIcon;
