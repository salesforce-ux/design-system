// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../../icon';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import commonStyles from '../../common/index.scss';
import tabBarStyles from '../base/index.scss';

class TabBar extends Component {
  render() {
    const tabs = React.Children.toArray(this.props.tabs);
    const {
      tabsetId,
      activeTabIndex,
      changeActiveTab,
      variant,
      shadow
    } = this.props;
    const tabLabels = tabs.map(tab => tab.props.label);
    const css = rollupAdoptedStylesheets([commonStyles, tabBarStyles]);

    return (
      <Shadow.on name="tab-bar" includes={css} shadow={shadow}>
        <ul
          className={classNames('lwc-tab-bar', {
            'lwc-tab-bar__base': variant === 'base',
            'lwc-tab-bar__scoped': variant === 'scoped',
            'lwc-tab-bar__vertical': variant === 'vertical'
          })}
          role="tablist"
        >
          {tabLabels.map((label, i) => {
            const {
              startIcon,
              startIconAltText,
              startIconColor,
              endIcon,
              endIconAltText,
              endIconColor
            } = tabs[i].props;
            const isActive = i === activeTabIndex;

            return (
              <li
                title=""
                role="presentation"
                className="lwc-tab-bar_nav-item"
                key={`label-${i}`}
              >
                <a
                  href="#"
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={`${tabsetId}-${i}`}
                  id={`${tabsetId}-${i}__item`}
                  className={classNames('lwc-tab-bar_nav-item-link', {
                    'lwc-is-active': isActive
                  })}
                  onClick={e => changeActiveTab(e, i)}
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

                  <span className="lwc-tab-bar_nav-item-label">{label}</span>

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

TabBar.propTypes = {
  tabs: PropTypes.any,
  activeTabIndex: PropTypes.number.isRequired,
  changeActiveTab: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['base', 'scoped', 'vertical'])
};

TabBar.defaultProps = {
  variant: 'base'
};

export default TabBar;
