// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import _ from '../../shared/helpers';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PT = PropTypes;

class TabContent extends React.Component {
  render() {
    const { className, current, flavor, ...rest } = this.props;
    const classNameComputed = classNames(
      className,
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
  renderDefault(tabIndex) {
    return (
      <a
        className={`slds-tabs_${this.props.flavor}__link`}
        href="javascript:void(0);"
        role="tab"
        tabIndex={tabIndex}
        aria-selected={this.props.current}
        aria-controls={this.props.id}
        id={`${this.props.id}__item`}
      >
        {this.props.title}
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
        {content ? this.renderCustom(tabIndex) : this.renderDefault(tabIndex)}
      </li>
    );
  }
}

TabItem.propTypes = {
  title: PT.string,
  content: PT.node,
  flavor: PT.oneOf(['scoped', 'default', 'path'])
};

class TabItemOverflow extends React.Component {
  render() {
    const {
      className,
      id,
      role,
      current,
      flavor,
      children,
      ...rest
    } = this.props;
    const classNameComputed = classNames(
      className,
      classNames('slds-tabs__item_overflow', {
        'slds-is-active': current
      })
    );
    const tabIndex = current ? 0 : -1;
    const contents = React.Children.map(children, function(c, i) {
      return React.cloneElement(c);
    });
    return (
      <li className={classNameComputed} {...rest} role="presentation">
        {contents}
      </li>
    );
  }
}

TabItemOverflow.propTypes = {
  title: PT.string,
  content: PT.node,
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
    const { className, flavor, panel, selectedIndex, ...rest } = this.props;
    const composedClassName = classNames(className, `slds-tabs_${flavor}`);
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
  flavor: PT.oneOf(['scoped', 'default', 'path'])
};

Tabs.defaultProps = {
  selectedIndex: 0,
  flavor: 'default'
};

Tabs.Item = TabItem;
Tabs.ItemOverflow = TabItemOverflow;
Tabs.Content = TabContent;

export default Tabs;
