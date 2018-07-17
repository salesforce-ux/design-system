// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import Panel from '../../panels';
import { Button } from '../../buttons/base/example';

export const MobileTabGroup = props => (
  <div className="slds-tabs-mobile__group">{props.children}</div>
);

MobileTabGroup.propTypes = {
  children: PropTypes.node
};

export const MobileTabContainer = props => (
  <div className="slds-tabs-mobile__container">{props.children}</div>
);

MobileTabContainer.propTypes = {
  children: PropTypes.node
};

export const MobileTabList = props => (
  <ul
    className={classNames('slds-tabs-mobile', {
      'slds-hidden': props.isHidden
    })}
  >
    {props.children}
  </ul>
);

MobileTabList.propTypes = {
  children: PropTypes.node,
  isHidden: PropTypes.bool
};

export const MobileTabItem = props => (
  <li className={classNames('slds-tabs-mobile__item')}>{props.children}</li>
);

MobileTabItem.propTypes = {
  children: PropTypes.node
};

export const MobileTabButton = props => (
  <Button isFullWidth onClick={props.onClick}>
    <span className="slds-truncate" title={props.summary}>
      {props.summary}
    </span>
    <SvgIcon
      className="slds-icon slds-icon_x-small slds-icon-text-default"
      sprite="utility"
      symbol="chevronright"
    />
  </Button>
);

MobileTabButton.propTypes = {
  onClick: PropTypes.func,
  summary: PropTypes.string
};

export const MobileTabPanel = props => (
  <Panel
    title={props.title}
    isAnimated
    docked="left"
    invoke="drill-in"
    isInvokedByTab
    isVisible={props.isVisible || false}
    handleVisibility={props.hidePanel}
    hasCenterTitle
  >
    {props.children || 'A panel body accepts any layout or component'}
  </Panel>
);

MobileTabPanel.propTypes = {
  hidePanel: PropTypes.func,
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export const NestedMobileStacked = props => (
  <MobileTabContainer>
    <MobileTabList isHidden>
      <MobileTabItem>
        <MobileTabButton summary="Item One" />
      </MobileTabItem>
      <MobileTabItem>
        <MobileTabButton summary="Item Two" />
      </MobileTabItem>
      <MobileTabItem>
        <MobileTabButton summary="Item Three" />
      </MobileTabItem>
    </MobileTabList>
    <MobileTabPanel title="Item 1 Panel" isVisible>
      <MobileTabList>
        <MobileTabItem>
          <MobileTabButton summary="Nested Item One" />
        </MobileTabItem>
        <MobileTabItem>
          <MobileTabButton summary="Nested Item Two" />
        </MobileTabItem>
        <MobileTabItem>
          <MobileTabButton summary="Nested Item Three" />
        </MobileTabItem>
      </MobileTabList>
      <div> Any content can be here </div>
      <MobileTabList>
        <MobileTabItem>
          <MobileTabButton summary="Nested Item Four" />
        </MobileTabItem>
        <MobileTabItem>
          <MobileTabButton summary="Nested Item Five" />
        </MobileTabItem>
      </MobileTabList>
    </MobileTabPanel>
    <MobileTabPanel title="Item 2 Panel" />
    <MobileTabPanel title="Item 3 Panel" />
    <MobileTabPanel title="Nested Item 1 Panel" />
    <MobileTabPanel title="Nested Item 2 Panel" />
    <MobileTabPanel title="Nested Item 3 Panel" />
    <MobileTabPanel title="Nested Item 4 Panel" />
    <MobileTabPanel title="Nested Item 5 Panel" />
  </MobileTabContainer>
);

class MobileTabs extends Component {
  constructor(props) {
    super(props);
    this.hidePanel = this.hidePanel.bind(this);

    this.state = {
      visiblePanelIdx: -1
    };
  }

  componentDidMount() {
    if (
      this.props.visiblePanelIdx !== undefined &&
      this.state.visiblePanelIdx === -1
    ) {
      this.setState({
        visiblePanelIdx: this.props.visiblePanelIdx
      });
    }
  }

  showPanel(panelIdx) {
    if (!this.props.isStatic) {
      this.setState({
        visiblePanelIdx: panelIdx
      });
    }
  }

  hidePanel() {
    if (!this.props.isStatic) {
      this.setState({
        visiblePanelIdx: -1
      });
    }
  }

  render() {
    const { visiblePanelIdx } = this.state;

    return (
      <MobileTabContainer>
        <MobileTabList isHidden={visiblePanelIdx !== -1}>
          <MobileTabItem>
            <MobileTabButton
              summary="Item One"
              onClick={this.showPanel.bind(this, 0)}
            />
          </MobileTabItem>
          <MobileTabItem>
            <MobileTabButton
              summary="Item Two"
              onClick={this.showPanel.bind(this, 1)}
            />
          </MobileTabItem>
          <MobileTabItem>
            <MobileTabButton
              summary="Item Three"
              onClick={this.showPanel.bind(this, 2)}
            />
          </MobileTabItem>
        </MobileTabList>
        <MobileTabPanel
          title="Item 1 Panel"
          isVisible={visiblePanelIdx === 0}
          hidePanel={this.hidePanel}
        />
        <MobileTabPanel
          title="Item 2 Panel"
          isVisible={visiblePanelIdx === 1}
          hidePanel={this.hidePanel}
        />
        <MobileTabPanel
          title="Item 3 Panel"
          isVisible={visiblePanelIdx === 2}
          hidePanel={this.hidePanel}
        />
      </MobileTabContainer>
    );
  }
}

MobileTabs.propTypes = {
  visiblePanelIdx: PropTypes.number,
  isStatic: PropTypes.bool
};

export default MobileTabs;

// Deprecated examples to use for VRT
export const DeprecatedMobileTabList = props => (
  <ul className={classNames('slds-tabs_mobile')}>{props.children}</ul>
);

export const DeprecatedMobileTabItem = props => (
  <li className={classNames('slds-tabs_mobile__item')}>{props.children}</li>
);

export const DeprecatedMobileTabTitle = props => (
  <div className={classNames('slds-tabs_mobile__title', props.className)}>
    {props.children}
  </div>
);

export const DeprecatedMobileTabAction = props => (
  <button className="slds-tabs_mobile__title-action slds-button slds-button_reset">
    <span className="slds-truncate" title={props.summary}>
      {props.summary}
    </span>
    <SvgIcon
      className="slds-icon slds-icon_x-small slds-icon-text-default"
      sprite="utility"
      symbol="chevronright"
    />
  </button>
);

export const DeprecatedMobileStacked = props => (
  <DeprecatedMobileTabList>
    <DeprecatedMobileTabItem>
      <DeprecatedMobileTabTitle>
        <DeprecatedMobileTabAction summary="Item One" />
      </DeprecatedMobileTabTitle>
    </DeprecatedMobileTabItem>
    <DeprecatedMobileTabItem>
      <DeprecatedMobileTabTitle>
        <DeprecatedMobileTabAction summary="Item Two" />
      </DeprecatedMobileTabTitle>
    </DeprecatedMobileTabItem>
    <DeprecatedMobileTabItem>
      <DeprecatedMobileTabTitle>
        <DeprecatedMobileTabAction summary="Item Three" />
      </DeprecatedMobileTabTitle>
    </DeprecatedMobileTabItem>
  </DeprecatedMobileTabList>
);

export const DeprecatedAdjacentMobileStacked = props => (
  <div>
    <DeprecatedMobileTabList>
      <DeprecatedMobileTabItem>
        <DeprecatedMobileTabTitle>
          <DeprecatedMobileTabAction summary="List 1 Item One" />
        </DeprecatedMobileTabTitle>
      </DeprecatedMobileTabItem>
      <DeprecatedMobileTabItem>
        <DeprecatedMobileTabTitle>
          <DeprecatedMobileTabAction summary="List 1 Item Two" />
        </DeprecatedMobileTabTitle>
      </DeprecatedMobileTabItem>
    </DeprecatedMobileTabList>
    <DeprecatedMobileTabList>
      <DeprecatedMobileTabItem>
        <DeprecatedMobileTabTitle>
          <DeprecatedMobileTabAction summary="List 2 Item One" />
        </DeprecatedMobileTabTitle>
      </DeprecatedMobileTabItem>
      <DeprecatedMobileTabItem>
        <DeprecatedMobileTabTitle>
          <DeprecatedMobileTabAction summary="List 2 Item Two with A Really Long Name" />
        </DeprecatedMobileTabTitle>
      </DeprecatedMobileTabItem>
      <DeprecatedMobileTabItem>
        <DeprecatedMobileTabTitle>
          <DeprecatedMobileTabAction summary="List 2 Item Three" />
        </DeprecatedMobileTabTitle>
      </DeprecatedMobileTabItem>
    </DeprecatedMobileTabList>
  </div>
);
