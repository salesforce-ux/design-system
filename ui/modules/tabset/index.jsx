// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';

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
    const {
      id,
      variant,
      customization,
      overflowThreshold,
      shadow
    } = this.props;
    const { activeTabIndex } = this.state;
    const activeTabId = `${id}-${activeTabIndex}`;
    const tabChildren = this.props.children[activeTabIndex].props.children;
    const css = rollupAdoptedStylesheets([
      commonStyles,
      tabsetStyles,
      customization
    ]);

    return (
      <Shadow.on name="tabset" includes={css} shadow={shadow}>
        <div
          className={classNames('lwc-tabset', {
            'lwc-tabset_scoped': variant === 'scoped',
            'lwc-tabset_vertical': variant === 'vertical'
          })}
        >
          <TabBar
            tabsetId={id}
            tabs={this.props.children}
            activeTabIndex={activeTabIndex}
            changeActiveTab={this.changeActiveTab}
            overflowThreshold={overflowThreshold}
            variant={variant}
          />

          <Tab
            tabId={activeTabId}
            labelledby={`${activeTabId}__item`}
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
  id: PropTypes.string,
  variant: PropTypes.oneOf(['base', 'scoped', 'vertical']),
  activeTabValue: PropTypes.number
};

Tabset.defaultProps = {
  id: uniqueId('tabset-'),
  variant: 'base',
  activeTabIndex: 0
};

export default Tabset;
