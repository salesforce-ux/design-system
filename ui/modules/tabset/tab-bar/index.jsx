// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ButtonMenu from '../../button-menu';
import MenuItem from '../../menu/menuitem';

import Icon from '../../icon';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import commonStyles from '../../common/index.scss';
import tabBarStyles from '../base/index.scss';

class TabBarItem extends Component {
  render() {
    const { tab, iter, tabsetId, isActive, changeActiveTab } = this.props;

    const {
      label,
      startIcon,
      startIconAltText,
      startIconColor,
      endIcon,
      endIconAltText,
      endIconColor
    } = tab.props;

    return (
      <li
        title={label}
        role="presentation"
        className={classNames('lwc-tab-bar__nav-item', {
          'lwc-is-active': isActive
        })}
        key={`label-${iter}`}
      >
        <a
          href="#"
          role="tab"
          tabIndex={isActive ? 0 : -1}
          aria-selected={isActive}
          aria-controls={`${tabsetId}-${iter}`}
          id={`${tabsetId}-${iter}__item`}
          className="lwc-tab-bar__nav-item-link"
          onClick={e => changeActiveTab(e, iter)}
        >
          {startIcon ? (
            <div className="lwc-tab-bar__nav-item-icon-start">
              <Icon
                sprite={startIcon.sprite}
                symbol={startIcon.symbol}
                title={startIconAltText}
                color={startIconColor}
              />
            </div>
          ) : null}

          <span className="lwc-tab-bar__nav-item-label">{label}</span>

          {endIcon ? (
            <div className="lwc-tab-bar__nav-item-icon-end">
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
  }
}

class TabBar extends Component {
  render() {
    const tabs = React.Children.toArray(this.props.tabs);
    const {
      tabsetId,
      activeTabIndex,
      changeActiveTab,
      variant,
      overflowThreshold,
      shadow
    } = this.props;
    // const tabLabels = tabs.map(tab => tab.props.label);
    const css = rollupAdoptedStylesheets([commonStyles, tabBarStyles]);
    const tabLabelLimit = overflowThreshold || tabs.length;
    let tabsList = [];
    let menu = null;

    // create tab items for all the visible items
    for (let i = 0; i < tabLabelLimit; i++) {
      const isActive = i === activeTabIndex;

      tabsList.push(
        <TabBarItem
          tab={tabs[i]}
          key={`tab-bar-item-${i}`}
          iter={i}
          tabsetId={tabsetId}
          isActive={isActive}
          changeActiveTab={changeActiveTab}
        />
      );
    }

    // (optional) create menu for overflow tabs
    if (tabLabelLimit < tabs.length) {
      menu = (
        <li
          title="More"
          role="presentation"
          className="lwc-tab-bar__nav-item lwc-tab-bar__nav-item_overflow"
        >
          <div className="lwc-tabset__menu">
            <ButtonMenu title="More" label="More">
              <MenuItem label="Fourth Tab" />
            </ButtonMenu>
          </div>
        </li>
      );
    }

    return (
      <Shadow.on name="tab-bar" includes={css} shadow={shadow}>
        <ul
          className={classNames('lwc-tab-bar', {
            'lwc-tab-bar_base': variant === 'base',
            'lwc-tab-bar_scoped': variant === 'scoped',
            'lwc-tab-bar_vertical': variant === 'vertical'
          })}
          role="tablist"
        >
          {tabsList}
          {menu}
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
