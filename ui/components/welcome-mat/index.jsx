import React from 'react';

// component imports
import { Modal, ModalHeader, ModalContent } from '../modals/base/example';
import { ProgressBar } from '../progress-bar/base/example';
import { VisualPickerMediaObject } from '../visual-picker/link/example';

let Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

let sampleTiles = [
  {
    symbol: 'animal_and_nature',
    title: 'Welcome to Salesforce!',
    content: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.'
  },
  {
    symbol: 'call',
    title: 'Learn About OpenCTI',
    content: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.'
  },
  {
    symbol: 'upload',
    title: 'Power Up the Utility Bar',
    content:
      'Tap into case history or share notes with fellow agents&mdash;it all happens on the utility bar.'
  },
  {
    symbol: 'magicwand',
    title: 'Customize your view',
    content: "Tailor your cases to your team's workflow with custom list views."
  },
  {
    symbol: 'knowledge_base',
    title: 'Share the Knowledge',
    content:
      "Harness your team's collective know-how with our powerful knowledge base."
  }
];

export default () => (
  <Demo style={{ height: '640px' }}>
    <Modal className="slds-welcome-mat">
      <ModalHeader className="slds-modal__header_empty" />
      <ModalContent className="slds-welcome-mat__content slds-grid">
        <div className="slds-size_1-of-2 slds-p-around_xx-large">
          <h1>Empower Your Agents with Service Cloud</h1>
          <p>
            Your 30-day trial is under way. Learn how easy it is to use and set
            up Lightning Service Desk. You'll be your company's service expert
            by the time you're done!
          </p>

          <p>4/8 Walkthroughs completed</p>
          <ProgressBar value="50" className="slds-progress-bar_circular" />
        </div>

        <div className="slds-size_1-of-2 slds-p-around_medium">
          {sampleTiles.map((tile, tileIndex) => (
            <VisualPickerMediaObject
              key={`tile-${tileIndex}`}
              symbol={tile.symbol}
            >
              <h2>{tile.title}</h2>
              <p>{tile.content}</p>
            </VisualPickerMediaObject>
          ))}
        </div>
      </ModalContent>
    </Modal>
  </Demo>
);
