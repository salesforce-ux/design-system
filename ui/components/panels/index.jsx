// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
        props.invoke === 'drill-in' && 'slds-is-directional',
        props.drawer && 'slds-panel_drawer',
        props.isVisible && 'slds-is-open',
        props.className
      )}
      aria-hidden={!props.isVisible}
    >
      {props.children}
    </div>
  );
};

/**
 * Panel Header
 */
export const Header = props => {
  let closeSymbol = 'close';
  if (props.invoke === 'drill-in') {
    if (props.docked === 'left') {
      closeSymbol = 'back';
    } else if (props.docked === 'right') {
      closeSymbol = 'forward';
    }
  }
  return (
    <div
      className={classNames(
        'slds-panel__header',
        props.customHeader && 'slds-panel__header_custom'
      )}
    >
      {!props.customHeader
        ? [
            <h2
              className="slds-panel__header-title slds-text-heading_small"
              key="panel-header-title"
            >
              {props.title}
            </h2>,
            <ButtonIcon
              key="panel-header-close-button"
              className="slds-panel__close slds-button_icon-small"
              symbol={closeSymbol}
              assistiveText="Close Filter Panel"
              title="Close Filter Panel"
              onClick={() => props.handleVisibility()}
            />
          ]
        : props.customHeader}
    </div>
  );
};

/**
 * Panel Body
 */
const Body = props => <div className="slds-panel__body">{props.children}</div>;

class Panel extends Component {
  render() {
    const {
      size,
      title,
      docked,
      invoke,
      drawer,
      isVisible = true,
      handleVisibility,
      customHeader,
      children
    } = this.props;
    return (
      <Container
        docked={docked}
        drawer={drawer}
        size={size}
        invoke={invoke}
        isVisible={isVisible}
      >
        <Header
          title={title}
          docked={docked}
          invoke={invoke}
          customHeader={customHeader}
          handleVisibility={handleVisibility}
        />
        <Body>{children}</Body>
      </Container>
    );
  }
}

Panel.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large', 'full']),
  docked: PropTypes.oneOf(['left', 'right', 'bottom']),
  invoke: PropTypes.oneOf(['drill-in', 'toggle'])
};

export default Panel;

export class PanelPlayground extends Component {
  constructor() {
    super();
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visible: true
    };
  }
  handleVisibility() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    const {
      size = 'medium',
      title = 'Panel Header',
      docked = 'left',
      invoke = 'toggle',
      drawer
    } = this.props;
    return (
      <div className="docs-codeblock-example">
        <header
          className="slds-size_1-of-1 slds-is-relative slds-theme_default slds-border_bottom slds-p-around_small"
          style={{ zIndex: '1' }}
        >
          <ButtonIcon
            theme="neutral"
            selected={this.state.visible}
            symbol="filterList"
            className="slds-button_icon-border"
            onClick={() => this.handleVisibility()}
          />
        </header>
        <div
          style={{
            backgroundColor: '#fafaf9',
            position: 'relative',
            height: '600px',
            overflow: 'hidden',
            display: 'flex'
          }}
        >
          <Panel
            isVisible={this.state.visible}
            size={size}
            title={title}
            docked={docked}
            invoke={invoke}
            drawer={drawer}
            handleVisibility={this.handleVisibility}
          >
            A panel body accepts any layout or component
          </Panel>
          <div className="slds-col slds-p-around_medium">Page Content</div>
        </div>
      </div>
    );
  }
}
