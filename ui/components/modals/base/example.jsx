// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

let Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

export let Modal = props => (
  <section
    role="dialog"
    tabIndex="-1"
    {...props}
    aria-modal="true"
    aria-describedby={props['aria-describedby'] || 'modal-content-id-1'}
    className={classNames('slds-modal slds-fade-in-open', props.className)}
  >
    <div className="slds-modal__container">{props.children}</div>
  </section>
);

export let ModalHeader = props => (
  <header className={classNames('slds-modal__header', props.className)}>
    {props.closeButton != 'false' ? (
      <ButtonIcon
        className="slds-modal__close slds-button_icon-inverse"
        iconClassName="slds-button__icon_large"
        symbol="close"
        title="Close"
        assistiveText="Close"
      />
    ) : null}
    {props.children}
  </header>
);

export let ModalContent = props => (
  <div
    className={classNames('slds-modal__content', props.className)}
    id={props.id ? props.id : props['aria-describedby'] || 'modal-content-id-1'}
  >
    {props.children}
  </div>
);

export let ModalFooter = props => (
  <footer className={classNames('slds-modal__footer', props.className)}>
    {props.children}
  </footer>
);

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Taglines = props => (
  <Demo style={{ height: '640px' }}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2
          id="modal-heading-01"
          className="slds-text-heading_medium slds-hyphenate"
        >
          Modal Header
        </h2>
        <p className="slds-m-top_x-small">
          Here&rsquo;s a tagline if you need it. It is allowed to extend across
          mulitple lines, so I&rsquo;m making up content to show that to you. It
          is allowed to{' '}
          <a href="javascript:void(0);">contain links or be a link</a>.
        </p>
      </ModalHeader>
      <ModalContent className="slds-p-around_medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
        <p>
          Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident.
          Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
          est. Labore esse esse cupidatat amet velit id elit consequat minim
          ullamco mollit enim excepteur ea.
        </p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>
);

let Large = props => (
  <Demo style={{ height: '640px' }}>
    <Modal className="slds-modal_large" aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2
          id="modal-heading-01"
          className="slds-text-heading_medium slds-hyphenate"
        >
          Modal Header
        </h2>
      </ModalHeader>
      <ModalContent className="slds-p-around_medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
        <p>
          Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident.
          Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
          est. Labore esse esse cupidatat amet velit id elit consequat minim
          ullamco mollit enim excepteur ea.
        </p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>
);

let Directional = props => (
  <Demo style={{ height: '640px' }}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2
          id="modal-heading-01"
          className="slds-text-heading_medium slds-hyphenate"
        >
          Modal Header
        </h2>
      </ModalHeader>
      <ModalContent className="slds-p-around_medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
        <p>
          Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident.
          Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
          est. Labore esse esse cupidatat amet velit id elit consequat minim
          ullamco mollit enim excepteur ea.
        </p>
      </ModalContent>
      <ModalFooter className="slds-modal__footer_directional">
        <button className="slds-button slds-button_neutral">
          Skip This Step
        </button>
        <button className="slds-button slds-button_brand">
          Save &#38; Next
        </button>
      </ModalFooter>
    </Modal>
  </Demo>
);

let Headless = props => (
  <Demo style={{ height: '640px' }}>
    <Modal aria-label="Meaningful description of the modal content">
      <ModalHeader className="slds-modal__header_empty" />
      <ModalContent className="slds-p-around_medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
        <p>
          Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident.
          Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
          est. Labore esse esse cupidatat amet velit id elit consequat minim
          ullamco mollit enim excepteur ea.
        </p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>
);

let Footless = props => (
  <Demo style={{ height: '640px' }}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2
          id="modal-heading-01"
          className="slds-text-heading_medium slds-hyphenate"
        >
          Modal Header
        </h2>
      </ModalHeader>
      <ModalContent className="slds-p-around_medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
        <p>
          Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident.
          Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
          est. Labore esse esse cupidatat amet velit id elit consequat minim
          ullamco mollit enim excepteur ea.
        </p>
      </ModalContent>
    </Modal>
  </Demo>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Demo style={{ height: '640px' }}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2
          id="modal-heading-01"
          className="slds-text-heading_medium slds-hyphenate"
        >
          Modal Header
        </h2>
      </ModalHeader>
      <ModalContent className="slds-p-around_medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
        <p>
          Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident.
          Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
          est. Labore esse esse cupidatat amet velit id elit consequat minim
          ullamco mollit enim excepteur ea.
        </p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>
);

export let examples = [
  {
    id: 'taglines',
    label: 'Taglines',
    element: <Taglines />
  },
  {
    id: 'headless',
    label: 'Header empty',
    element: <Headless />
  },
  {
    id: 'footless',
    label: 'Footer removed',
    element: <Footless />
  }
];
