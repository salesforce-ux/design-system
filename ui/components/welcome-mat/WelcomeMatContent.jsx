import React from 'react';
import { ProgressBar } from '../progress-bar/base/example';

export default props => {
  const { complete, total } = props;
  const completePercent = complete / total * 100;

  return (
    <div>
      <h3 className="slds-welcome-mat__info-title">
        Empower Your Agents with Service Cloud
      </h3>
      <p className="slds-welcome-mat__info-description">
        Your 30-day trial is under way. Learn how easy it is to use and set up
        Lightning Service Desk. You'll be your company's service expert by the
        time you're done!
      </p>

      <div className="slds-welcome-mat__info-progress">
        <p>
          <strong>
            {complete}/{total} Walkthroughs completed
          </strong>
        </p>
      </div>
      <ProgressBar
        value={completePercent}
        className="slds-progress-bar_circular"
      />
    </div>
  );
};
