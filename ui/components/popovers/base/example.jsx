// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Popover = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  return (
    <section
      aria-describedby={bodyUniqueId}
      aria-label={!props.header && !props.headerTitle ? props.title : null}
      aria-labelledby={
        !props.header && props.headerTitle ? headingUniqueId : props.headingId
      }
      className={classNames(
        'slds-popover',
        props.className,
        props.isFullWidth && 'slds-popover_full-width',
        props.isHidden && 'slds-popover_hide'
      )}
      id={props.popoverId}
      role="dialog"
      style={props.style}
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
      <div
        className={classNames(
          'slds-popover__body',
          {
            'slds-popover__body_small': props.size === 'small'
          },
          props.bodyClassName
        )}
        id={bodyUniqueId}
      >
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

export default (
  <Popover className="slds-nubbin_left" closeButton title="Dialog Title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Popover>
);

export let examples = [
  {
    id: 'header',
    label: 'With Header',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        headerTitle="Header Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'footer',
    label: 'With Footer',
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
    id: 'scrolling',
    label: 'Body max height small',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        footer={<p>Footer Item</p>}
        headerTitle="Header Title"
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
  },
  {
    id: 'width-small',
    label: 'Width - Small',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_small"
        closeButton
        headerTitle="Header Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'width-medium',
    label: 'Width - Medium',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_medium"
        closeButton
        headerTitle="Header Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'width-large',
    label: 'Width - Large',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_large"
        closeButton
        headerTitle="Header Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'width-full-width',
    label: 'Width - Full Width',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_full-width"
        closeButton
        headerTitle="Header Title"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  }
];
