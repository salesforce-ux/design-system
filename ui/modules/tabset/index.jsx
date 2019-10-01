// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tab from './tab';
import TabBar from './tab-bar';
import Shadow from '../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import commonStyles from '../common/index.scss';
import tabsetStyles from './base/index.scss';

class Tabset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: props.activeTabIndex
    };

    this.changeActiveTab = this.changeActiveTab.bind(this);
  }

  changeActiveTab(clickEvent, activeTabIndex) {
    this.setState({ activeTabIndex });
    clickEvent.preventDefault();
  }

  render() {
    const { customization, variant } = this.props;
    const { activeTabIndex } = this.state;
    const tabChildren = this.props.children[activeTabIndex].props.children;
    const css = rollupAdoptedStylesheets([
      commonStyles,
      tabsetStyles,
      customization
    ]);

    return (
      <Shadow.on name="tabset" includes={css}>
        <div
          className={classNames('lwc-tabset', {
            'lwc-tabset__scoped': variant === 'scoped',
            'lwc-tabset__vertical': variant === 'vertical'
          })}
        >
          <TabBar
            tabs={this.props.children}
            activeTabIndex={activeTabIndex}
            changeActiveTab={this.changeActiveTab}
            variant={variant}
          />

          <Tab
            labelledby={`tab-default-${activeTabIndex}__item`}
            variant={variant}
          >
            {tabChildren}
          </Tab>
        </div>
      </Shadow.on>
    );
  }
}

Tabset.propTypes = {
  variant: PropTypes.oneOf(['base', 'scoped', 'vertical']),
  activeTabValue: PropTypes.number
};

Tabset.defaultProps = {
  variant: 'base',
  activeTabIndex: 0
};

export default Tabset;
