// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './tab';
import TabBar from './tab-bar';
import Shadow from '../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import commonStyles from '../common/index.scss';
import tabsetStyles from './base/index.scss';

class Tabset extends Component {
  constructor() {
    super();

    this.state = {
      selectedTabIndex: 0
    };

    this.changeSelectedTab = this.changeSelectedTab.bind(this);
  }

  changeSelectedTab(clickEvent, selectedTabIndex) {
    this.setState({ selectedTabIndex });
    clickEvent.preventDefault();
  }

  render() {
    const { customization } = this.props;
    const { selectedTabIndex } = this.state;
    const css = rollupAdoptedStylesheets([
      commonStyles,
      tabsetStyles,
      customization
    ]);

    return (
      <Shadow.on name="tabset" includes={css}>
        <div className="lwc-tabset">
          <TabBar
            tabs={this.props.children}
            selectedTabIndex={selectedTabIndex}
            changeSelectedTab={this.changeSelectedTab}
          />

          <Tab labelledby={`tab-default-${selectedTabIndex}__item`}>
            {this.props.children[selectedTabIndex]}
          </Tab>
        </div>
      </Shadow.on>
    );
  }
}

Tabset.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['base', 'scoped', 'vertical']),
  activeTabValue: PropTypes.number
};

export default Tabset;
