// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../../icon';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import commonStyles from '../../common/index.scss';
import tabBarStyles from './index.scss';

class TabBar extends Component {
  render() {
    const tabs = React.Children.toArray(this.props.tabs);
    const { selectedTabIndex, changeSelectedTab } = this.props;
    const tabLabels = tabs.map(tab => tab.props.label);
    const css = rollupAdoptedStylesheets([commonStyles, tabBarStyles]);

    return (
      <Shadow.on name="tab-bar" includes={css}>
        <ul className="lwc-tab-bar">
          {tabLabels.map((label, i) => {
            const {
              startIcon,
              startIconAltText,
              startIconColor,
              endIcon,
              endIconAltText,
              endIconColor
            } = tabs[i].props;
            const isActive = i === selectedTabIndex;

            return (
              <li className="lwc-tab-bar_nav-item" key={`label-${i}`}>
                <a
                  className={classnames('lwc-tab-bar_nav-item-link', {
                    'slds-is-active': isActive
                  })}
                  href="#"
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={`tab-default-${i}`}
                  id={`tab-default-${i}__item`}
                  onClick={e => changeSelectedTab(e, i)}
                >
                  {startIcon ? (
                    <div className="lwc-tab-bar_nav-item-icon-start">
                      <Icon
                        sprite={startIcon.sprite}
                        symbol={startIcon.symbol}
                        title={startIconAltText}
                        color={startIconColor}
                      />
                    </div>
                  ) : null}

                  {label}

                  {endIcon ? (
                    <div className="lwc-tab-bar_nav-item-icon-end">
                      <Icon
                        sprite={endIcon.sprite}
                        symbol={endIcon.symbol}
                        title={endIconAltText}
                        color={endIconColor}
                      />
                    </div>
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </Shadow.on>
    );
  }
}

export default TabBar;
