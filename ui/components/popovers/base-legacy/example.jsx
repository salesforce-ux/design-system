// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _, { getNubbinClass } from '../../../shared/helpers';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Popover = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  const computedClassnames = classNames(
    'slds-popover',
    props.className,
    props.nubbinPosition && getNubbinClass(props.nubbinPosition),
    props.isFullWidth && 'slds-popover_full-width',
    props.isHidden && 'slds-popover_hide',
    props.isWarning && 'slds-popover_warning',
    props.isError && 'slds-popover_error'
  );

  const computedBodyClassnames = classNames(
    'slds-popover__body',
    props.bodyClassName,
    props.isWarning && 'slds-popover_warning__body',
    props.isError && 'slds-popover_error__body',
    {
      'slds-popover__body_small': props.size === 'small'
    }
  );

  return (
    <section
      aria-describedby={bodyUniqueId}
      aria-label={!props.header && !props.headerTitle ? props.title : null}
      aria-labelledby={
        !props.header && props.headerTitle ? headingUniqueId : props.headingId
      }
      className={computedClassnames}
      id={props.popoverId}
      role="dialog"
      style={props.style}
      ref={props.innerRef}
    >
      {props.closeButton ? (
        <ButtonIcon
          assistiveText="Close dialog"
          className={classNames(
            'slds-button_icon-small slds-float_right slds-popover__close',
            props.inverse && 'slds-button_icon-inverse'
          )}
          symbol="close"
          title="Close dialog"
          onClick={props.onClose}
        />
      ) : null}
      {!props.header && props.headerTitle ? (
        <Header
          assistiveText={props.headerAssistiveText}
          className={props.headerClassName}
          id={headingUniqueId}
          symbol={props.headerIconName}
          title={props.headerTitle || 'Heading Title'}
        />
      ) : (
        props.header
      )}
      <div className={computedBodyClassnames} id={bodyUniqueId}>
        {props.children}
      </div>
      {props.footer ? (
        <footer
          className={classNames(
            'slds-popover__footer',
            props.footerClassName,
            props.hasFormFooter && 'slds-popover__footer_form'
          )}
        >
          {props.footer}
        </footer>
      ) : null}
    </section>
  );
};

Popover.propTypes = {
  bodyClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
  footer: PropTypes.node,
  footerClassName: PropTypes.string,
  hasFormFooter: PropTypes.bool,
  header: PropTypes.node,
  headerAssistiveText: PropTypes.string,
  headerClassName: PropTypes.string,
  headerIconName: PropTypes.string,
  headerTitle: PropTypes.string,
  headingId: PropTypes.string,
  inverse: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isHidden: PropTypes.bool,
  nubbinPosition: PropTypes.string,
  popoverId: PropTypes.string,
  size: PropTypes.oneOf(['small']),
  style: PropTypes.object,
  title: PropTypes.string
};

let Header = props => (
  <header className={classNames('slds-popover__header', props.className)}>
    {props.symbol ? (
      <span
        className="slds-icon_container slds-m-right_small"
        title={props.assistiveText}
      >
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-text-default"
          sprite="utility"
          symbol={props.symbol}
        />
        <span className="slds-assistive-text">{props.assistiveText}</span>
      </span>
    ) : null}
    <h2 className="slds-text-heading_small" id={props.id}>
      {props.title}
    </h2>
  </header>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'Legacy',
    id: 'legacy-default',
    label: 'Legacy – default',
    element: (
      <Popover className="slds-nubbin_left" closeButton title="Dialog Title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  }
];

export let examples = [
  {
    context: 'Legacy',
    id: 'header',
    label: 'With Header [Legacy for testing]',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        headerTitle="Header title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    context: 'Legacy',
    id: 'footer',
    label: 'With Footer [Legacy for testing]',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        footer={<p>Footer Item</p>}
        title="Dialog Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    context: 'Legacy',
    id: 'scrolling',
    label: 'Body max height small [Legacy for testing]',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        footer={<p>Footer Item</p>}
        headerTitle="Header title"
        size="small"
        title="Dialog Title"
      >
        <div className="slds-text-longform">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Popover>
    )
  }
];
