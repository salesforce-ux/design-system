// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Heading from '../../../shared/heading';
import ButtonIcon from '../../button-icons/';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export const exampleDemoStyles = 'height: 640px;';

export const Context = props => (
  <div style={{ height: '640px' }}>{props.children}</div>
);

export let Backdrop = props => {
  return (
    <Fragment>
      {props.children}
      <div className="slds-backdrop slds-backdrop_open" />
    </Fragment>
  );
};

export let Modal = props => (
  <section
    role="dialog"
    tabIndex={props.tabIndex}
    {...props}
    aria-modal="true"
    aria-describedby={props['aria-describedby'] || 'modal-content-id-1'}
    className={classNames('slds-modal slds-fade-in-open', props.className)}
  >
    <div className="slds-modal__container">{props.children}</div>
  </section>
);

Modal.propTypes = {
  tabIndex: PropTypes.oneOf(['-1', '0'])
};

Modal.defaultProps = {
  tabIndex: '-1'
};

export let ModalHeader = props => (
  <header className={classNames('slds-modal__header', props.className)}>
    {props.closeButton !== 'false' ? (
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

export let ModalMenu = ({ id, children }) => (
  <div className="slds-modal__menu" id={id}>
    {children}
  </div>
);

ModalMenu.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
};

export let ModalFooter = props => (
  <footer className={classNames('slds-modal__footer', props.className)}>
    {props.children}
  </footer>
);

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Taglines = props => (
  <Backdrop>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
          Modal header
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
  </Backdrop>
);

export let ModalSizes = props => (
  <Backdrop>
    <Modal
      className={classNames(
        props.size === 'small' && 'slds-modal_small',
        props.size === 'medium' && 'slds-modal_medium',
        props.size === 'large' && 'slds-modal_large'
      )}
      aria-labelledby="modal-heading-01"
    >
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
          Modal header
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
  </Backdrop>
);

ModalSizes.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export let Directional = props => (
  <Backdrop>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
          Modal header
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
  </Backdrop>
);

export let Headless = props => (
  <Backdrop>
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
  </Backdrop>
);

export let Footless = props => (
  <Backdrop>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
          Modal header
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
  </Backdrop>
);

export let HiddenFooter = props => (
  <Backdrop>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
          Modal header
        </h2>
      </ModalHeader>
      <ModalContent className="slds-modal__content_has-hidden-footer slds-p-around_medium">
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
      <ModalFooter className="slds-hide" />
    </Modal>
  </Backdrop>
);

export const Menu = () => {
  const uniqueIDHeading = uniqueId('modal-heading-unique-id-');
  const uniqueIDContent = uniqueId('modal-content-unique-id-');

  return (
    <Backdrop>
      <Modal
        aria-labelledby={uniqueIDHeading}
        aria-describedby={uniqueIDContent}
      >
        <ModalHeader>
          <Heading
            id={uniqueIDHeading}
            className="slds-modal__title slds-hyphenate"
          >
            Modal header
          </Heading>
        </ModalHeader>
        <ModalMenu className="slds-p-around_medium" id={uniqueIDContent}>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Cillum sunt ad dolore quis aute consequat
            ipsum magna exercitation reprehenderit magna. Tempor cupidatat
            consequat elit dolor adipisicing.
          </p>
          <p>
            Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
            officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit
            incididunt nisi consectetur esse laborum eiusmod pariatur proident.
            Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute
            est. Labore esse esse cupidatat amet velit id elit consequat minim
            ullamco mollit enim excepteur ea.
          </p>
        </ModalMenu>
        <ModalFooter className="slds-hide" />
      </Modal>
    </Backdrop>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

const defaultComponent = (
  <Backdrop>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
          Modal header
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
  </Backdrop>
);

export default defaultComponent;

export const examples = [
  {
    id: 'default',
    label: 'Default',
    demoStyles: exampleDemoStyles,
    element: <Taglines />
  },
  {
    id: 'taglines',
    label: 'Taglines',
    demoStyles: exampleDemoStyles,
    element: <Taglines />
  },
  {
    id: 'headless',
    label: 'Header empty',
    demoStyles: exampleDemoStyles,
    element: <Headless />
  },
  {
    id: 'footless',
    label: 'Footer removed',
    demoStyles: exampleDemoStyles,
    element: <Footless />
  },
  {
    id: 'hidden-footer',
    label: 'Footer hidden but not removed (not public)',
    demoStyles: exampleDemoStyles,
    element: <HiddenFooter />
  },
  {
    id: 'large',
    label: 'Large',
    demoStyles: exampleDemoStyles,
    element: <ModalSizes size="large" />
  },
  {
    id: 'medium',
    label: 'Medium',
    demoStyles: exampleDemoStyles,
    element: <ModalSizes size="medium" />
  },
  {
    id: 'small',
    label: 'Small',
    demoStyles: exampleDemoStyles,
    element: <ModalSizes size="small" />
  },
  {
    id: 'directional',
    label: 'Directional',
    demoStyles: exampleDemoStyles,
    element: <Directional />
  },
  {
    id: 'menu',
    label: 'Menu',
    demoStyles: exampleDemoStyles,
    element: <Menu />
  }
];

export const states = [];
