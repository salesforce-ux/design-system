/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
const PT = React.PropTypes;
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';

const {createChainedFunction, flatMapChildren} = componentUtil;
import AccessibleList from 'ui/components/lib/accessible-list.react';
import classNames from 'classnames';

class TabContent extends React.Component {

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  render() {
    const className = classNames(
      this.props.className,
      pf(classNames(`tabs--${this.props.flavor}__content`, {
        show: this.props.current,
        hide: !this.props.current
      }))
    );
    const props = this.$propsWithoutKeys('className');
    return (
      <div
        {...props}
        className={className}
        role="tabpanel"
        aria-labelledby={`${this.props.id}__item`}>
        {this.props.children}
      </div>
    );
  }

}
TabContent.propTypes = {
  current: PT.bool,
  flavor: componentUtil.PropTypes.flavor('scoped', 'default', 'path')
};

TabContent.defaultProps = { current: true };



class TabItem extends React.Component {

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  renderCustom(tabIndex) {
    return React.cloneElement(this.props.content, {
      onClick: this.props.onClick.bind(this),
      tabIndex: tabIndex,
      className: pf(`tabs--${this.props.flavor}__link`),
      'aria-selected': this.props.current,
      'aria-controls': this.props['aria-controls'] || this.props.id
    });
  }

  renderDefault(tabIndex) {
    return (
      <a
        className={pf(`tabs--${this.props.flavor}__link`)}
        onClick={this.props.onClick.bind(this)}
        href="javascript:void(0);" role="tab"
        tabIndex={tabIndex}
        aria-selected={this.props.current}
        aria-controls={this.props.id}
        id={`${this.props.id}__item`}>
        {this.props.title}
      </a>
    );
  }

  render() {
    const props = this.$propsWithoutKeys('className', 'id', 'role', 'content');
    const className = classNames(
      this.props.className,
      pf(classNames(`tabs--${this.props.flavor}__item`, 'text-heading--label', {
        active: this.props.current
      }))
    );
    const tabIndex = this.props.current ? 0 : -1;
    return (
      <li className={className} {...props} role="presentation">
        {this.props.content ? this.renderCustom(tabIndex) : this.renderDefault(tabIndex) }
      </li>
    );
  }

}

TabItem.propTypes = {
  title: PT.string,
  content: PT.node,
  flavor: componentUtil.PropTypes.flavor('scoped', 'default', 'path')
};

class TabItemOverflow extends React.Component {

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  render() {
    const props = this.$propsWithoutKeys('className', 'id', 'role');
    const className = classNames(
      this.props.className,
      pf(classNames('tabs__item--overflow text-heading--label', {
        active: this.props.current
      }))
    );
    const tabIndex = this.props.current ? 0 : -1;
    const contents = React.Children.map(this.props.children, function(c,i) {
      return React.cloneElement(c);
    });
    return (
      <li className={className} {...props} role="presentation" onClick={null}>
        {contents}
      </li>
    );
  }

}
TabItemOverflow.propTypes = {
  title: PT.string,
  content: PT.node,
  flavor: componentUtil.PropTypes.flavor('scoped', 'default', 'path')
};


class Tabs extends React.Component {

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = {currentTab: this.props.selectedIndex};
  }

  onClick(index, e) {
    this.setState({currentTab: index});
    e.preventDefault();
    e.stopPropagation();
  }

  tabs() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {
        current: this.state.currentTab === i,
        flavor: this.props.flavor,
        onClick: createChainedFunction(
          c.props.onClick, this.onClick.bind(this, i)
        )
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
          return <TabContent
            current={this.state.currentTab === i}
            id={c.props.id}
            flavor={this.props.flavor}>
            {c.props.children}
          </TabContent>;
        }
      }
    });
  }

  render() {
    const props = this.$propsWithoutKeys('className', 'flavor');
    const className = classNames(
      this.props.className,
      pf(`tabs--${this.props.flavor}`)
    );
    return (
      <div {...props} className={className}>
        <AccessibleList
          selector="a"
          click={true}
          className={pf(`tabs--${this.props.flavor}__nav`)}
          role="tablist"
          selectedIndex={this.props.selectedIndex}>
        {this.tabs()}
        </AccessibleList>
        { this.props.panel ? this.props.panel : this.currentPanel() }
      </div>
    );
  }

}
Tabs.propTypes = {
  selectedIndex: PT.number,
  flavor: componentUtil.PropTypes.flavor('scoped', 'default', 'path')
};

Tabs.defaultProps = {
  selectedIndex: 0,
  flavor: 'default'
};


Tabs.Item = TabItem;
Tabs.ItemOverflow = TabItemOverflow;
Tabs.Content = TabContent;

export default Tabs;
