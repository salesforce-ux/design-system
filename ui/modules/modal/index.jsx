import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icon/';
import Shadow from '../../shared/shadow/';
import {
  rollupAdoptedStylesheets,
  recursivelyCloneChildren
} from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import modal from './base/index.scss';

/**
 * Backdrop
 */
const Backdrop = props => {
  const { isOpen } = props;
  const computedClassNames = classNames(
    'lwc-backdrop',
    isOpen && 'lwc-backdrop_is-open'
  );

  return <div className={computedClassNames} />;
};

Backdrop.defaultProps = {
  isOpen: true
};

Backdrop.propTypes = {
  isOpen: PropTypes.bool
};

/**
 * Modal
 */
const ModalContainer = React.forwardRef((props, ref) => {
  const {
    animation,
    hasHeader,
    headerId,
    contentId,
    children,
    isOpen,
    hasCloseButton,
    size,
    role,
    position,
    tabIndex,
    handleClose,
    modalRef,
    showSource,
    hideSourceOf
  } = props;

  const computedVisibilityClassNames = {
    'lwc-modal_is-open': isOpen
  };

  const computedAnimationClassNames = {
    'lwc-modal_fade-in': animation === 'fade-in',
    'lwc-modal_fade-out': animation === 'fade-out',
    'lwc-modal_slide-up': animation === 'slide-up',
    'lwc-modal_slide-down': animation === 'slide-down'
  };

  const computedSizingClassNames = {
    'lwc-modal__container_xx-small': size === 'xx-small',
    'lwc-modal__container_x-small': size === 'x-small',
    'lwc-modal__container_small': size === 'small',
    'lwc-modal__container_medium': size === 'medium',
    'lwc-modal__container_large': size === 'large',
    'lwc-modal__container_full': size === 'full',
    'lwc-modal__container_fixed': size === 'fixed'
  };

  const computedPositionClassNames = {
    'lwc-modal__container_top': position === 'top',
    'lwc-modal__container_top-right': position === 'top-right',
    'lwc-modal__container_top-left': position === 'top-left',
    'lwc-modal__container_bottom': position === 'bottom',
    'lwc-modal__container_bottom-left': position === 'bottom-left',
    'lwc-modal__container_bottom-right': position === 'bottom-right'
  };

  return (
    <section
      className={classNames(
        'lwc-modal',
        computedVisibilityClassNames,
        computedAnimationClassNames
      )}
      role={role}
      aria-labelledby={hasHeader && headerId}
      aria-modal="true"
      aria-describedby={contentId}
      tabIndex={tabIndex}
      ref={modalRef}
    >
      <div
        className={classNames(
          'lwc-modal__container',
          computedSizingClassNames,
          computedPositionClassNames
        )}
      >
        {hasCloseButton && (
          <ModalClose
            handleClose={handleClose}
            showSource={showSource}
            hideSourceOf={hideSourceOf}
          />
        )}
        <div className="lwc-modal__surface">{children}</div>
      </div>
    </section>
  );
});

ModalContainer.defaultProps = {
  headerId: 'modal-heading-id-01',
  contentId: 'modal-content-id-01',
  isOpen: true,
  hasCloseButton: true,
  role: 'dialog',
  tabIndex: '-1'
};

ModalContainer.propTypes = {
  hasHeader: PropTypes.bool,
  headerId: PropTypes.string,
  contentId: PropTypes.string,
  children: PropTypes.node,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
  tabIndex: PropTypes.string,
  role: PropTypes.oneOf(['dialog', 'alertdialog']),
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

/**
 * Modal Close Button
 */
const ModalClose = props => {
  const { handleClose, showSource, hideSourceOf } = props;

  return (
    <span className="lwc-modal__close">
      <ButtonIcon
        symbol="close"
        variant="inverse"
        size="small"
        onClick={handleClose}
        assistiveText="Close Dialog"
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      />
    </span>
  );
};

/**
 * Modal Header
 */
const ModalHeader = props => {
  const { id, title, tagline, isPrompt } = props;

  const computedClassNames = {
    'lwc-modal__header_prompt': isPrompt
  };

  return (
    <header className={classNames('lwc-modal__header', computedClassNames)}>
      <h2 id={id} className="lwc-modal__header-title">
        {title}
      </h2>
      {tagline && <p>{tagline}</p>}
    </header>
  );
};

ModalHeader.defaultProps = {
  id: 'modal-heading-id-01',
  title: 'Modal Title'
};

ModalHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  tagline: PropTypes.node,
  isPrompt: PropTypes.bool
};

/**
 * Modal Content Area
 */
const ModalContent = props => {
  const { id, children } = props;

  return (
    <div className="lwc-modal__content" id={id}>
      <slot name="content">{children}</slot>
    </div>
  );
};

ModalContent.defaultProps = {
  id: 'modal-content-id-01'
};

ModalContent.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
};

/**
 * Modal Footer
 */
const ModalFooter = props => {
  const { children, isDirectional, isPrompt, showSource, hideSourceOf } = props;

  const computedClassNames = {
    'lwc-modal__footer_directional': isDirectional,
    'lwc-modal__footer_prompt': isPrompt
  };

  // add shadow related props to all child elements
  const childElements = recursivelyCloneChildren(
    children,
    showSource,
    hideSourceOf
  );

  return (
    <footer className={classNames('lwc-modal__footer', computedClassNames)}>
      <slot name="footer">{childElements}</slot>
    </footer>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  isDirectional: PropTypes.bool,
  isPrompt: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

class Modal extends Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    this.setState({
      open: this.props.isOpen
    });
  }

  componentDidUpdate(prev, next) {
    if (this.props.isOpen !== prev.isOpen) {
      this.setState({ open: !prev.isOpen });
    }
  }

  renderHeader() {
    const { hasHeader, headerId, title, tagline, isPrompt } = this.props;
    if (!hasHeader) return false;
    return (
      <ModalHeader
        id={headerId}
        title={title}
        tagline={tagline}
        isPrompt={isPrompt}
      />
    );
  }

  renderContent() {
    const { children, contentId } = this.props;
    return (
      <ModalContent id={contentId}>
        {!children ? 'Modal requires content' : children}
      </ModalContent>
    );
  }

  renderFooter() {
    const {
      hasFooter,
      footer,
      isDirectional,
      isPrompt,
      showSource,
      hideSourceOf
    } = this.props;
    if (!hasFooter) return false;
    return (
      <ModalFooter
        isDirectional={isDirectional}
        isPrompt={isPrompt}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      >
        {!footer ? 'Modal footer requires content' : footer}
      </ModalFooter>
    );
  }

  render() {
    const {
      hasHeader,
      headerId,
      contentId,
      hasCloseButton,
      hasBackdrop,
      size,
      position,
      tabIndex,
      shadow,
      showSource,
      hideSourceOf,
      customization,
      role,
      handleClose
    } = this.props;

    const css = rollupAdoptedStylesheets([common, modal, customization]);

    return (
      <Shadow.on
        name="modal"
        includes={css}
        shadow={shadow}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      >
        <ModalContainer
          hasHeader={hasHeader}
          headerId={headerId}
          contentId={contentId}
          isOpen={this.state.open}
          hasCloseButton={hasCloseButton}
          size={size}
          role={role}
          tabIndex={tabIndex}
          position={position}
          handleClose={handleClose}
          modalRef={el => (this.modalRef = el)}
          showSource={showSource}
          hideSourceOf={hideSourceOf}
        >
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </ModalContainer>
        {hasBackdrop && <Backdrop isOpen={this.state.open} />}
      </Shadow.on>
    );
  }
}

Modal.defaultProps = {
  hasBackdrop: true,
  animation: 'default'
};

Modal.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.node,
  hasHeader: PropTypes.bool,
  hasFooter: PropTypes.bool,
  hasBackdrop: PropTypes.bool,
  footer: PropTypes.node,
  isDirectional: PropTypes.bool,
  isPrompt: PropTypes.bool,
  headerId: PropTypes.string,
  contentId: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.string,
  role: PropTypes.oneOf(['dialog', 'alertdialog']),
  tabIndex: PropTypes.string,
  position: PropTypes.string,
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

export default Modal;

export class ModalPlayground extends Component {
  constructor() {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.renderDialog = this.renderDialog.bind(this);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    console.log('Mounted');
  }

  handleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  renderDialog() {
    return (
      <Modal
        shadow={false}
        isOpen={this.state.open}
        handleClose={this.handleOpen}
        animation="slide"
      >
        Hi!
      </Modal>
    );
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleOpen}>Open Modal</button>
        {this.renderDialog()}
      </React.Fragment>
    );
  }
}
