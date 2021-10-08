// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _, { getNubbinClass } from '../../../shared/helpers';
import ButtonIcon from '../../button-icons/';
import { Badge, LightestBadge } from '../../badges/';
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

      <div className={computedBodyClassnames} id={bodyUniqueId}>
        {props.badgeTitle ? (
          <div className="slds-popover__meta">
            {props.badgeVariant && props.badgeVariant === 'light' ? (
              <LightestBadge>{props.badgeTitle}</LightestBadge>
            ) : (
              <Badge>{props.badgeTitle}</Badge>
            )}
          </div>
        ) : null}

        <div className="slds-media">
          {props.iconName ? (
            <div className="slds-media__figure">
              <span
                className="slds-icon_container"
                title={props.iconAssistiveText}
              >
                <SvgIcon
                  className="slds-icon slds-icon_small slds-icon-text-default"
                  sprite="utility"
                  symbol={props.iconName}
                />
                <span className="slds-assistive-text">
                  {props.iconAssistiveText}
                </span>
              </span>
            </div>
          ) : null}

          <div className="slds-media__body">
            {!props.header && props.headerTitle ? (
              <Header
                assistiveText={props.headerAssistiveText}
                className={props.headerClassName}
                id={headingUniqueId}
                title={props.headerTitle || 'Heading Title'}
              />
            ) : (
              props.header
            )}

            {props.children}
          </div>
        </div>
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
  badgeTitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
  footer: PropTypes.node,
  footerClassName: PropTypes.string,
  hasFormFooter: PropTypes.bool,
  header: PropTypes.node,
  headerAssistiveText: PropTypes.string,
  headerClassName: PropTypes.string,
  iconName: PropTypes.string,
  iconAssistiveText: PropTypes.string,
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
    id: 'popover-default',
    label: 'Popover – default',
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
    id: 'header',
    label: 'With Header',
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
    id: 'with-icon',
    label: 'With icon',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        headerTitle="Header title"
        iconName="favorite"
        iconAssistiveText="Assistive text here"
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
        footer={
          <div className="slds-grid slds-grid_vertical-align-center">
            <button className="slds-button slds-button_neutral slds-col_bump-left">
              Learn More
            </button>
          </div>
        }
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
    id: 'with-icon-footer',
    label: 'With icon and footer',
    element: (
      <Popover
        className="slds-nubbin_left"
        closeButton
        headerTitle="Header title"
        iconName="favorite"
        iconAssistiveText="Assistive text here"
        footer={
          <div className="slds-grid slds-grid_vertical-align-center">
            <button className="slds-button slds-button_neutral slds-col_bump-left">
              Learn More
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'badge',
    label: 'With Badge',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_large"
        closeButton
        headerTitle="Header title"
        badgeTitle="Admin Notice"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'badge-icon',
    label: 'With Badge and icon',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_large"
        closeButton
        headerTitle="Header title"
        badgeTitle="Admin Notice"
        iconName="favorite"
        iconAssistiveText="Assistive text here"
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
  },
  {
    id: 'width-small',
    label: 'Width - Small',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_small"
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
    id: 'width-medium',
    label: 'Width - Medium',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_medium"
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
    id: 'width-large',
    label: 'Width - Large',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_large"
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
    id: 'width-full-width',
    label: 'Width - Full Width',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_full-width"
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
    id: 'no-close-button',
    label: 'No Close Button',
    element: (
      <Popover className="slds-nubbin_left" headerTitle="Header title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'dark-base',
    label: 'Base [dark]',
    element: (
      <Popover className="slds-popover_dark slds-nubbin_left" closeButton>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'dark-header',
    label: 'With Header [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left"
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
    id: 'dark-with-icon',
    label: 'With icon [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left"
        closeButton
        headerTitle="Header title"
        iconName="favorite"
        iconAssistiveText="Assistive text here"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'dark-footer',
    label: 'With Footer [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left"
        closeButton
        footer={
          <div className="slds-grid slds-grid_vertical-align-center">
            <button className="slds-button slds-button_brand slds-col_bump-left">
              Learn More
            </button>
          </div>
        }
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
    id: 'dark-with-icon-footer',
    label: 'With icon and footer [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left"
        closeButton
        headerTitle="Header title"
        iconName="favorite"
        iconAssistiveText="Assistive text here"
        footer={
          <div className="slds-grid slds-grid_vertical-align-center">
            <button className="slds-button slds-button_brand slds-col_bump-left">
              Learn More
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'dark-badge',
    label: 'With Badge [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left slds-popover_large"
        closeButton
        headerTitle="Header title"
        badgeTitle="Admin Notice"
        badgeVariant="light"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  },
  {
    id: 'dark-badge-icon',
    label: 'With Badge and icon [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left slds-popover_large"
        closeButton
        headerTitle="Header title"
        badgeTitle="Admin Notice"
        iconName="favorite"
        iconAssistiveText="Assistive text here"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Popover>
    )
  }
];
