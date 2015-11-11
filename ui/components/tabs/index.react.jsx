/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const PT = React.PropTypes;
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const {createChainedFunction, flatMapChildren} = componentUtil;
import AccessibleList from 'ui/components/lib/accessible-list.react';
import classNames from 'classnames';

class TabContent extends React.Component {
  static propTypes = { current: PT.bool };
  static defaultProps = { current: true };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  };

  render() {
    const className = classNames(this.props.className, pf(classNames('tabs__content', {'show': this.props.current, 'hide': !this.props.current})));
    const props = this.$propsWithoutKeys('className');
    return (
      <div {...props} className={className} role="tabpanel">
        {this.props.children}
      </div>
    );
  };
}


class TabItem extends React.Component {
  static propTypes = { title: PT.string, content: PT.node }
  constructor(props) {
    super(props);
    componentUtil.install(this);
  };

 renderCustom(tabIndex) {
  return React.cloneElement(this.props.content, {
    onClick: this.props.onClick.bind(this),
    tabIndex: tabIndex,
    className: pf(this.props.innerClass),
    'aria-selected': this.props.current
  });
}

  renderDefault(tabIndex) {
    return (
      <a className={pf(this.props.innerClass)} onClick={this.props.onClick.bind(this)} href="#" role="tab" tabIndex={tabIndex} aria-selected={this.props.current} aria-controls={this.props.id}>
        {this.props.title}
      </a>
    );
  }

  render() {
    const props = this.$propsWithoutKeys('className', 'id', 'role');
    const className = classNames(this.props.className, pf(classNames('tabs__item text-heading--label', {active: this.props.current})));
    const tabIndex = this.props.current ? 0 : -1;
    
    return (
      <li className={className} {...props} role='presentation'>
        {this.props.content ? this.renderCustom(tabIndex) : this.renderDefault(tabIndex) }
      </li>
    );
  };
}

class TabItemOverflow extends React.Component {
  static propTypes = { title: PT.string, content: PT.node }
  constructor(props) {
    super(props);
    componentUtil.install(this);
  };

  render() {
    const props = this.$propsWithoutKeys('className', 'id', 'role');
    const className = classNames(this.props.className, pf(classNames('tabs__item--overflow text-heading--label', {active: this.props.current})));
    const tabIndex = this.props.current ? 0 : -1;
    const contents = React.Children.map(this.props.children, function(c,i) {
      return React.cloneElement(c);
    });

    return (
      <li className={className} {...props} role='presentation' onClick={null}>
        {contents}
      </li>
    );
  };
}

class Tabs extends React.Component {
  static propTypes = {
    selectedIndex: PT.number,
    flavor: componentUtil.PropTypes.flavor( 'scoped', 'default', 'overflow')
  };
  static defaultProps = { selectedIndex: 0 };
  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = {currentTab: this.props.selectedIndex};
  };

  onClick(index, e) {
    this.setState({currentTab: index});
    e.preventDefault();
    e.stopPropagation();
  }

  tabs() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {current: this.state.currentTab === i, onClick: createChainedFunction(c.props.onClick, this.onClick.bind(this, i))});
    });
  }

  currentPanel() {
    return React.Children.map(this.props.children, (c, i) => {
      if(c.type === TabItemOverflow) {
        return null;
      } else {
        if(c.props.children.type === TabContent) {
          return React.cloneElement(c.props.children, {current: this.state.currentTab === i, id: c.props.id});
        } else {
          return <TabContent current={this.state.currentTab === i} id={c.props.id}>{c.props.children}</TabContent>;
        }
      }
    });
  }

  render() {
    const props = this.$propsWithoutKeys('className', 'flavor');

    return (
      <div {...props} className={pf(`tabs--${this.props.flavor}`)}>
        <AccessibleList selector='a' click={true} className={pf(`tabs--${this.props.flavor}__nav`)} role="tablist" selectedIndex={this.props.selectedIndex}>
          { this.tabs() }
        </AccessibleList>
        { this.props.panel ? this.props.panel : this.currentPanel() }
      </div>
    );
  }
}

Tabs.Item = TabItem;
Tabs.ItemOverflow = TabItemOverflow;
Tabs.Content = TabContent;

module.exports = Tabs;
