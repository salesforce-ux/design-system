// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import ButtonIcon from '../button-icons/';

/**
 * Panel Container
 */
export const Container = props => {
  return (
    <div
      className={classNames(
        'slds-panel',
        props.size && `slds-size_${props.size}`,
        props.docked && `slds-panel_docked slds-panel_docked-${props.docked}`,
        props.isAnimated && 'slds-panel_animated',
        props.drawer && 'slds-panel_drawer',
        props.isVisible ? 'slds-is-open' : 'slds-hidden'
      )}
      aria-hidden={!props.isVisible}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export const HeaderActions = ({ children }) => (
  <div className="slds-panel__header-actions">{children}</div>
);

export const HeaderButton = ({ symbol, handleVisibility, title }) => {
  const computedClassNames = classNames({
    'slds-panel__back': symbol === 'back' || symbol === 'chevronleft',
    'slds-panel__close': symbol === 'close'
  });
  return (
    <ButtonIcon
      key="panel-header-close-button"
      className={computedClassNames}
      symbol={symbol}
      size="small"
      assistiveText={`Collapse ${title}`}
      title={`Collapse ${title}`}
      onClick={handleVisibility}
    />
  );
};

HeaderButton.propTypes = {
  symbol: PropTypes.oneOf(['back', 'chevronleft', 'close']),
  handleVisibility: PropTypes.func,
  title: PropTypes.string
};

export const HeaderTitle = props => (
  <h2
    className="slds-panel__header-title slds-text-heading_small slds-truncate"
    key="panel-header-title"
    title={props.title}
  >
    {props.title}
  </h2>
);

/**
 * Panel Header
 */
export const Header = props => {
  let closeSymbol = 'close';
  let headerContent = (
    <>
      <HeaderTitle title={props.title} />
      <HeaderActions>
        {props.headerActions}
        <HeaderButton
          title={props.title}
          handleVisibility={props.handleVisibility}
          symbol={closeSymbol}
        />
      </HeaderActions>
    </>
  );
  if (props.invoke === 'drill-in') {
    if (props.isInvokedByTab) {
      headerContent = (
        <>
          <HeaderButton
            title={props.title}
            handleVisibility={props.handleVisibility}
            symbol={props.iconBack}
          />
          <HeaderTitle title={props.title} />
        </>
      );
    } else {
      headerContent = (
        <>
          <HeaderButton
            title={props.title}
            handleVisibility={props.handleVisibility}
            symbol={props.iconBack}
          />
          <HeaderTitle title={props.title} />
          <HeaderActions>
            {props.headerActions}
            <HeaderButton
              title={props.title}
              handleVisibility={props.handleVisibility}
              symbol={closeSymbol}
            />
          </HeaderActions>
        </>
      );
    }
  }

  return (
    <div
      className={classNames(
        'slds-panel__header',
        props.hasCenterTitle && 'slds-panel__header_align-center',
        props.customHeader && 'slds-panel__header_custom'
      )}
    >
      {props.customHeader ? props.customHeader : headerContent}
    </div>
  );
};

/**
 * Deprecated Panel Header for testing only
 */
export const HeaderDeprecated = ({
  title,
  closeSymbol,
  hasCenterTitle,
  customHeader
}) => (
  <div
    className={classNames(
      'slds-panel__header',
      hasCenterTitle && 'slds-panel__header_align-center',
      customHeader && 'slds-panel__header_custom'
    )}
  >
    {customHeader || (
      <>
        <HeaderTitle title={title} />
        <HeaderButton title={title} symbol={closeSymbol} />
      </>
    )}
  </div>
);

HeaderDeprecated.propTypes = {
  title: PropTypes.string,
  closeSymbol: PropTypes.string,
  hasCenterTitle: PropTypes.bool,
  customHeader: PropTypes.node
};

HeaderDeprecated.defaultProps = {
  title: 'Deprecated Panel Header',
  closeSymbol: 'close'
};

/**
 * Panel Body
 */
const Body = props => <div className="slds-panel__body">{props.children}</div>;

const Panel = ({
  size,
  title,
  docked,
  invoke,
  drawer,
  isVisible = true,
  handleVisibility,
  customHeader,
  children,
  isAnimated,
  hasCenterTitle,
  isInvokedByTab,
  iconBack,
  headerActions,
  headerSlot,
  id
}) => (
  <Container
    docked={docked}
    drawer={drawer}
    size={size}
    invoke={invoke}
    isVisible={isVisible}
    isAnimated={isAnimated}
    id={id}
  >
    {headerSlot || (
      <Header
        title={title}
        docked={docked}
        invoke={invoke}
        customHeader={customHeader}
        handleVisibility={handleVisibility}
        hasCenterTitle={hasCenterTitle}
        isInvokedByTab={isInvokedByTab}
        iconBack={iconBack}
        headerActions={headerActions}
      />
    )}
    <Body>{children}</Body>
  </Container>
);

Panel.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large', 'full']),
  docked: PropTypes.oneOf(['left', 'right', 'bottom']),
  invoke: PropTypes.oneOf(['drill-in', 'toggle']),
  hasCenterTitle: PropTypes.bool,
  isInvokedByTab: PropTypes.bool,
  iconBack: PropTypes.string,
  headerActions: PropTypes.node,
  headerSlot: PropTypes.node,
  id: PropTypes.string
};

Panel.defaultProps = {
  iconBack: 'chevronleft'
};

export default Panel;

export const PanelPlayground = ({
  size,
  title,
  docked,
  invoke,
  drawer,
  hasCenterTitle,
  icon,
  iconTitle,
  children
}) => {
  const [isVisible, setVisibility] = useState(true);

  const exampleId = uniqueId('example-unique-id-');

  const headerComputedClassnames = classNames(
    'demo-only-element',
    'slds-theme_default',
    'slds-border_bottom',
    'slds-p-around_small',
    {
      'slds-text-align_right': docked === 'right'
    }
  );

  const handleVisibility = () => setVisibility(!isVisible);

  const demoContainerStyles = {
    backgroundColor: '#fafaf9',
    position: 'relative',
    height: '600px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: docked === 'right' && 'row-reverse'
  };

  return (
    <>
      <header className={headerComputedClassnames} style={{ zIndex: '1' }}>
        <ButtonIcon
          theme="neutral"
          selected={isVisible}
          symbol={icon}
          title={iconTitle}
          className="slds-button_icon-border"
          onClick={handleVisibility}
          aria-expanded={isVisible}
          aria-controls={exampleId}
          aria-pressed={isVisible}
        />
      </header>
      <div className="demo-only-element" style={demoContainerStyles}>
        <Panel
          isVisible={isVisible}
          size={size}
          title={title}
          docked={docked}
          invoke={invoke}
          drawer={drawer}
          handleVisibility={handleVisibility}
          hasCenterTitle={hasCenterTitle}
          id={exampleId}
        >
          {children}
        </Panel>
        <div className="demo-only-content slds-col slds-p-around_medium">
          This section is demo-only content representing a custom layout in
          conjunction with the panel. It is not a part of the blueprint.
        </div>
      </div>
    </>
  );
};

PanelPlayground.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  docked: PropTypes.string,
  invoke: PropTypes.string,
  drawer: PropTypes.bool,
  hasCenterTitle: PropTypes.bool,
  icon: PropTypes.string,
  iconTitle: PropTypes.string,
  children: PropTypes.node
};

PanelPlayground.defaultProps = {
  size: 'medium',
  title: 'Panel Header',
  docked: 'left',
  invoke: 'toggle',
  icon: 'toggle_panel_left',
  iconTitle: 'Toggle panel',
  children: 'A panel body accepts any layout or component'
};
