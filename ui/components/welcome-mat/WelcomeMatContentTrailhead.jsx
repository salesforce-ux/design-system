import React from 'react';
import classNames from 'classnames';
import { ProgressBar } from '../progress-bar/base/example';
import { Button } from '../buttons/base/example';
import { ActionIcon } from '../icons/action/example';

export default props => {
  const { complete, total } = props;
  const completePercent = complete / total * 100;
  const isComplete = completePercent === 100;

  const badgeProgressMessage = isComplete ? (
    <p>Cha-ching! You earned the badge.</p>
  ) : (
    <p>
      {complete} of {total} modules completed
    </p>
  );

  return (
    <div>
      <h3 className="slds-welcome-mat__info-title">Hey there, Trailblazer!</h3>
      <p className="slds-welcome-mat__info-description">
        Your 30-day trial is under way. Learn how easy it is to use and set up
        Lightning Service Desk. You'll be your company's service expert by the
        time you're done!
      </p>

      <div
        className={classNames('slds-welcome-mat__info-progress', {
          'slds-welcome-mat__info-progress_complete': isComplete
        })}
      >
        <div className="slds-welcome-mat__info-badge-container">
          <img
            className="slds-welcome-mat__info-badge"
            src="/assets/images/welcome-mat/trailhead_badge@2x.png"
            width="50"
            height="50"
            alt="Trailhead Badge Title"
          />
          <ActionIcon
            className="slds-welcome-mat__icon-check slds-icon_xx-small"
            symbol="check"
          />
        </div>
        <p>
          <strong>Essentials Explorer</strong>
        </p>
        {badgeProgressMessage}
      </div>

      {isComplete ? (
        <Button className="slds-button_brand">
          View on your Trailblazer Profile
        </Button>
      ) : (
        <ProgressBar
          value={completePercent}
          className="slds-progress-bar_circular"
        />
      )}
    </div>
  );
};
