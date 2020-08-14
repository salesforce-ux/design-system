// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PT = PropTypes;

class TabContent extends React.Component {
  render() {
    const { current, flavor, ...rest } = this.props;
    const classNameComputed = classNames(
      classNames(`slds-tabs_${flavor}__content`, {
        'slds-show': current,
        'slds-hide': !current
      })
    );

    return (
      <div
        {...rest}
        className={classNameComputed}
        role="tabpanel"
        aria-labelledby={`${this.props.id}__item`}
      >
        {this.props.children}
      </div>
    );
  }
}

TabContent.propTypes = {
  current: PT.bool,
  flavor: PT.oneOf(['scoped', 'default', 'path'])
};

TabContent.defaultProps = { current: true };

class TabItem extends React.Component {
  renderCustom(tabIndex) {
    return React.cloneElement(this.props.content, {
      tabIndex: tabIndex,
      className: `slds-tabs_${this.props.flavor}__link`,
      'aria-selected': this.props.current,
      'aria-controls': this.props['aria-controls'] || this.props.id
    });
  }

  renderDefault(tabIndex, leftIcon, rightIcon) {
    const { flavor, current, id, title } = this.props;
    return (
      <a
        className={`slds-tabs_${flavor}__link`}
        href="#"
        role="tab"
        tabIndex={tabIndex}
        aria-selected={current}
        aria-controls={id}
        id={`${id}__item`}
        onClick={e => e.preventDefault()}
      >
        {leftIcon && <span className="slds-tabs__left-icon">{leftIcon}</span>}
        {title}
        {rightIcon && (
          <span className="slds-tabs__right-icon">{rightIcon}</span>
        )}
      </a>
    );
  }

  render() {
    const {
      className,
      id,
      role,
      current,
      flavor,
      content,
      size,
      leftIcon,
      rightIcon,
      ...rest
    } = this.props;
    const classNameComputed = classNames(
      className,
      classNames(`slds-tabs_${flavor}__item`, {
        'slds-is-active': current
      })
    );
    const tabIndex = current ? 0 : -1;
    return (
      <li className={classNameComputed} {...rest} role="presentation">
        {content
          ? this.renderCustom(tabIndex)
          : this.renderDefault(tabIndex, leftIcon, rightIcon)}
      </li>
    );
  }
}

TabItem.propTypes = {
  title: PT.string,
  content: PT.node,
  flavor: PT.oneOf(['scoped', 'default', 'path'])
};

export const TabItemOverflow = props => {
  const { flavor, children, title } = props;
  return (
    <li
      className={`slds-tabs_${flavor}__item slds-tabs_${flavor}__overflow-button`}
      title={title}
      role="presentation"
    >
      {children}
    </li>
  );
};

TabItemOverflow.propTypes = {
  title: PT.string,
  children: PT.node,
  flavor: PT.oneOf(['scoped', 'default', 'path'])
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: this.props.selectedIndex };
  }

  tabs() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {
        current: this.state.currentTab === i,
        flavor: this.props.flavor
      });
    });
  }

  currentPanel() {
    return React.Children.map(this.props.children, (c, i) => {
      if (c.type === TabItemOverflow) {
        return null;
      } else {
        if (c.props.children.type === TabContent) {
          return React.cloneElement(c.props.children, {
            id: c.props.id,
            current: this.state.currentTab === i,
            flavor: this.props.flavor
          });
        } else {
          return (
            <TabContent
              current={this.state.currentTab === i}
              id={c.props.id}
              flavor={this.props.flavor}
            >
              {c.props.children}
            </TabContent>
          );
        }
      }
    });
  }

  render() {
    const { flavor, panel, size, isCard, selectedIndex, ...rest } = this.props;
    const composedClassName = classNames(`slds-tabs_${flavor}`, {
      'slds-tabs_medium': size === 'medium',
      'slds-tabs_large': size === 'large',
      'slds-tabs_card': isCard
    });
    return (
      <div {...rest} className={composedClassName}>
        <ul className={`slds-tabs_${flavor}__nav`} role="tablist">
          {this.tabs()}
        </ul>
        {panel || this.currentPanel()}
      </div>
    );
  }
}

Tabs.propTypes = {
  selectedIndex: PT.number,
  flavor: PT.oneOf(['scoped', 'default', 'path']),
  size: PT.oneOf(['medium', 'large']),
  isCard: PT.bool
};

Tabs.defaultProps = {
  selectedIndex: 0,
  flavor: 'default'
};

Tabs.Item = TabItem;
Tabs.ItemOverflow = TabItemOverflow;
Tabs.Content = TabContent;

export default Tabs;
