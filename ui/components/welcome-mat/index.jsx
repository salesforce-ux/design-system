// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../shared/helpers';

// component imports
import { Modal, ModalHeader, ModalContent } from '../modals/base/example';

import WelcomeMatTile from './WelcomeMatTile';
import WelcomeMatContent from './WelcomeMatContent';
import WelcomeMatContentTrailhead from './WelcomeMatContentTrailhead';

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

const tileCount = sampleTiles.length;

const Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

const renderTiles = (tiles, complete) => {
  const completeStr = complete ? 'complete' : 'incomplete';

  return tiles.map((tile, ti) => (
    <WelcomeMatTile
      key={`tile-${completeStr}-${ti}`}
      tile={tile}
      completed={complete}
    />
  ));
};

export default props => {
  const { complete = 0, trailhead } = props;
  const completeTiles = sampleTiles.slice(0, complete);
  const incompleteTiles = sampleTiles.slice(complete);
  const uniqueId = _.uniqueId('welcome-mat-');
  const welcomeMatLabelId = `${uniqueId}-label`;
  const welcomeMatDescipId = `${uniqueId}-content`;

  return (
    <Demo style={{ height: '620px' }}>
      <Modal
        className="slds-welcome-mat"
        aria-labelledby={welcomeMatLabelId}
        aria-describedby={welcomeMatDescipId}
      >
        <ModalHeader className="slds-modal__header_empty" />
        <ModalContent
          className="slds-welcome-mat__content slds-grid"
          aria-describedby={welcomeMatDescipId}
        >
          <div className="slds-welcome-mat__info slds-size_1-of-2">
            {trailhead ? (
              <WelcomeMatContentTrailhead
                complete={complete}
                total={tileCount}
                labelId={welcomeMatLabelId}
              />
            ) : (
              <WelcomeMatContent
                complete={complete}
                total={tileCount}
                labelId={welcomeMatLabelId}
              />
            )}
          </div>

          <div className="slds-welcome-mat__tiles slds-size_1-of-2 slds-p-around_medium">
            {renderTiles(incompleteTiles, false)}
            {renderTiles(completeTiles, true)}
          </div>
        </ModalContent>
      </Modal>
    </Demo>
  );
};
