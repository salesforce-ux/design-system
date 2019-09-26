// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classnames from 'classnames';

import Tab from './tab';
import Icon from '../icon';
import Shadow from '../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import tabset from './base/index.scss';

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
    const tabs = React.Children.toArray(this.props.children);
    const { customization } = this.props;
    const { selectedTabIndex } = this.state;
    const tabLabels = tabs.map(tab => tab.props.label);
    const activeTab = tabs[selectedTabIndex];
    const css = rollupAdoptedStylesheets([common, tabset, customization]);

    return (
      <Shadow.on name="tabset" includes={css}>
        <div className="lwc-tabset">
          <ul className="lwc-tabset_nav">
            {tabLabels.map((label, i) => {
              const isActive = i === selectedTabIndex;
              const tabIcon = tabs[i].props.tabIcon;

              return (
                <li className="lwc-tabset_nav-item" key={`label-${i}`}>
                  <a
                    className={classnames('lwc-tabset_nav-item-link', {
                      'slds-is-active': isActive
                    })}
                    href="#"
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    aria-selected={isActive}
                    aria-controls={`tab-default-${i}`}
                    id={`tab-default-${i}__item`}
                    onClick={e => this.changeSelectedTab(e, i)}
                  >
                    {tabIcon ? (
                      <div className="lwc-tabset_nav-item-icon">
                        <Icon
                          sprite={tabIcon.sprite}
                          symbol={tabIcon.symbol}
                          title={label}
                        />
                      </div>
                    ) : null}
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <Tab labelledby={`tab-default-${selectedTabIndex}__item`}>
            {activeTab.props.children}
          </Tab>
        </div>
      </Shadow.on>
    );
  }
}

export default Tabset;
