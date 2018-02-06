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
      'Tap into case history or share notes with fellow agents—it all happens on the utility bar.'
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
  <Demo style={{ height: '740px' }}>
    <Modal className="slds-welcome-mat">
      <ModalHeader className="slds-modal__header_empty" />
      <ModalContent className="slds-welcome-mat__content slds-grid">
        <div className="slds-welcome-mat__info slds-size_1-of-2 slds-p-around_xx-large">
          <h3 className="slds-welcome-mat__info-title">
            Empower Your Agents with Service Cloud
          </h3>
          <p className="slds-welcome-mat__info-description">
            Your 30-day trial is under way. Learn how easy it is to use and set
            up Lightning Service Desk. You'll be your company's service expert
            by the time you're done!
          </p>

          <p className="slds-welcome-mat_info-complete">
            4/8 Walkthroughs completed
          </p>
          <ProgressBar value="50" className="slds-progress-bar_circular" />
        </div>

        <div className="slds-welcome-mat__actions slds-size_1-of-2 slds-p-around_medium">
          {sampleTiles.map((tile, tileIndex) => (
            <VisualPickerMediaObject
              key={`tile-${tileIndex}`}
              symbol={tile.symbol}
            >
              <h4 className="slds-welcome-mat__action-title">{tile.title}</h4>
              <p className="slds-welcome-mat__action-content">{tile.content}</p>
            </VisualPickerMediaObject>
          ))}
        </div>
      </ModalContent>
    </Modal>
  </Demo>
);
