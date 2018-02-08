import React from 'react';
import classNames from 'classnames';

// component imports
import { Modal, ModalHeader, ModalContent } from '../modals/base/example';
import { ProgressBar } from '../progress-bar/base/example';
import { VisualPickerMediaObject } from '../visual-picker/link/example';
import { UtilityIcon } from '../icons/base/example';

const sampleTiles = [
  {
    symbol: 'animal_and_nature',
    title: 'Welcome to Salesforce!',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.'
  },
  {
    symbol: 'call',
    title: 'Learn About OpenCTI',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.'
  },
  {
    symbol: 'upload',
    title: 'Power Up the Utility Bar',
    description:
      'Tap into case history or share notes with fellow agents—it all happens on the utility bar.'
  },
  {
    symbol: 'magicwand',
    title: 'Customize your view',
    description:
      "Tailor your cases to your team's workflow with custom list views."
  },
  {
    symbol: 'knowledge_base',
    title: 'Share the Knowledge',
    description:
      "Harness your team's collective know-how with our powerful knowledge base."
  }
];

const sampleWalkthroughCount = 5;

const Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

const WelcomeMatTile = props => {
  const className = classNames('slds-welcome-mat__tile', {
    'slds-welcome-mat__tile_complete': props.completed
  });

  const iconContent = props.completed ? (
    <div className="slds-welcome-mat__tile-icon-container">
      <UtilityIcon
        className="slds-icon-text-default"
        symbol={props.tile.symbol}
      />
      <div className="slds-welcome-mat__icon-check">
        <UtilityIcon className="slds-icon-text-default" symbol="check" />
      </div>
    </div>
  ) : (
    undefined
  );

  return (
    <VisualPickerMediaObject
      symbol={props.tile.symbol}
      className={className}
      icon={iconContent}
    >
      <h4 className="slds-welcome-mat__tile-title">{props.tile.title}</h4>
      <p className="slds-welcome-mat__tile-description">
        {props.tile.description}
      </p>
    </VisualPickerMediaObject>
  );
};

const RegularContent = props => {
  const { complete } = props;
  const completePercent = complete / sampleWalkthroughCount * 100;

  return (
    <div>
      <div className="slds-welcome-mat__info-progress">
        <p>
          <strong>
            {complete}/{sampleWalkthroughCount} Walkthroughs completed
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

const TrailheadContent = props => {
  const { complete } = props;
  const completePercent = complete / sampleWalkthroughCount * 100;

  return (
    <div>
      <div className="slds-welcome-mat__info-progress">
        <img
          className="slds-welcome-mat__info-badge"
          src="/assets/images/welcome-mat/trailhead_badge@2x.png"
          width="50"
          height="50"
          alt="Trailhead Badge Title"
        />
        <p>
          <strong>Essentials Explorer</strong>
        </p>
        <p>
          {complete} of {sampleWalkthroughCount} modules completed
        </p>
      </div>
      <ProgressBar
        value={completePercent}
        className="slds-progress-bar_circular"
      />
    </div>
  );
};

export default props => {
  const { showAsCompleted, trailhead } = props;
  const complete = showAsCompleted ? sampleWalkthroughCount : 0;

  const infoContent = trailhead ? (
    <TrailheadContent complete={1} />
  ) : (
    <RegularContent complete={complete} />
  );

  return (
    <Demo style={{ height: '720px' }}>
      <Modal className="slds-welcome-mat">
        <ModalHeader className="slds-modal__header_empty" />
        <ModalContent className="slds-welcome-mat__content slds-grid">
          <div className="slds-welcome-mat__info slds-size_1-of-2 slds-p-around_xx-large">
            <h3 className="slds-welcome-mat__info-title">
              Empower Your Agents with Service Cloud
            </h3>
            <p className="slds-welcome-mat__info-description">
              Your 30-day trial is under way. Learn how easy it is to use and
              set up Lightning Service Desk. You'll be your company's service
              expert by the time you're done!
            </p>

            {infoContent}
          </div>

          <div className="slds-welcome-mat__tiles slds-size_1-of-2 slds-p-around_medium">
            {sampleTiles.map((tile, tileIndex) => (
              <WelcomeMatTile
                key={`tile-${tileIndex}`}
                tile={tile}
                completed={showAsCompleted}
              />
            ))}
          </div>
        </ModalContent>
      </Modal>
    </Demo>
  );
};
