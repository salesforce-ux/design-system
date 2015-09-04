/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const _ = require('lodash');
const React = require('react');
const ReactDOM = require('react-dom');
const PT = React.PropTypes;
const classNames = require('classnames');
const SvgIcon = require('app_modules/ui/svg-icon');
const AccessibleList = require('ui/components/lib/accessible-list.react');
import Helper from 'ui/components/lib/dom-helpers';

const componentUtil = require('app_modules/ui/util/component');
const {textContent, hasChild} = componentUtil;
const pf = componentUtil.prefix;
const globals = require('app_modules/global');
const cssPrefix = globals.cssPrefix;

const defaultFilter = (term, item) => {
  return textContent(item.props.children).match(new RegExp(_.escapeRegExp(term), 'ig'));
};

class DropdownFilter extends React.Component {
  static contextTypes = { termChanged: PT.func };
  static propTypes = { placeholder: PT.string };
  static defaultProps = { placeholder: 'Search...' };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  render() {
    return (
        <div { ...this.props } className={this.$getClassName(pf('input-has-icon input-has-icon--left m-bottom--x-small'))}>
          <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
          <label className={pf('assistive-text')} htmlFor="input__filter">{this.props.placeholder}</label>
          <input id="input__filter" className={pf('input')} type="text" placeholder={ this.props.placeholder } onChange={ this.context.termChanged } />
        </div>
    );
  }
}


class DropdownTitle extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  render() {
    return (
        <span className={pf('text-heading--label')}>{ this.props.children }</span>
      );
  }
}

class DropdownHeader extends React.Component {
  static contextTypes = { termChanged: PT.func };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  render() {
    return (
        <div { ...this.props } className={this.$getClassName(`${cssPrefix}dropdown__header`)}>
          { this.props.children }
        </div>
      );
  }
}


class DropdownItem extends React.Component {
  static contextTypes = { searchTerm: PT.string, filterWith: PT.func, hasFilter: PT.bool, selectedItem: PT.func, isSelectable: PT.bool, initialFocus: PT.bool, itemFocused: PT.func, itemSelected: PT.func };
  static propTypes = { disabled: PT.bool, href: PT.string };
  static globalIdx = 0;

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.id = this.props.id || `menu-${DropdownItem.globalIdx++}-${this.props.idx}`;
  }

  componentDidMount() {
    if(!this.context.initialFocus) return;
    if(this.props.idx === 0) {
      const i = ReactDOM.findDOMNode(this);
      setTimeout(() => i.focus(), 300);
    }
  }

  shouldRenderItem(term) {
    return this.context.hasFilter ? this.context.filterWith(this.context.searchTerm, this) : true;
  }

  iconClassName() {
    if(hasChild(this.props.children, 'SvgIcon')) {
      return `${cssPrefix}has-icon--left-right`;
    }
  }

  boldSearchText(children) {
    const term = this.context.searchTerm;
    if(!children || !term) return children;
    const regex = new RegExp('(' + term + ')', 'gi');
    return React.Children.map(children, c => {
      return (typeof c === 'string') ? <span dangerouslySetInnerHTML={{ __html: c.replace(regex, '<mark>$1</mark>')}}></span> : c;
    });
  }

  selectedItem(e) {
    if(!this.context.isSelectable) return;
    e.preventDefault();
    if(this.context.itemSelected) this.context.itemSelected(this, this.props.idx);
    return this.context.selectedItem(this.props.idx);
  }

  itemFocused() {
    return this.context.itemFocused(this.id);
  }

  isSelected() {
    return this.context.isSelectable && this.props.currentSelection === this.props.idx;
  }

  renderItem() {
    const className = this.$getClassName(`${cssPrefix}dropdown__item`, this.iconClassName(), {
      [`${cssPrefix}is-selected`]: this.isSelected(),
      [`${cssPrefix}has-icon--left`]: this.context.isSelectable
    });
    const aRole = this.context.isSelectable ? 'menuitemradio' : 'menuitem';

    return (
        <li id={this.id} onClick={this.selectedItem.bind(this)} { ...this.props }
            className={className} onFocus={this.itemFocused.bind(this)}>
          <a href={ this.props.href } aria-disabled={ this.props.disabled }
              className={pf('truncate')} role={aRole}>
            { this.isSelected() ? <SvgIcon className={pf('icon icon--small icon--left')} sprite="standard" symbol="task2" /> : null }
            { this.boldSearchText(this.props.children) }
          </a>
        </li>
      );
  }

  render() {
    return this.shouldRenderItem() ? this.renderItem() : null;
  }
}


class DropdownList extends React.Component {
  static contextTypes = { searchTerm: PT.string, filterWith: PT.func, hasFilter: PT.bool, selectedItem: PT.func, isSelectable: PT.bool };
  static childContextTypes = { selectedItem: PT.func, isSelectable: PT.bool };
  static defaultProps = { isSelectable: true };

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = { currentSelection: this.initialSelection() };
  }

  getChildContext() {
    return { selectedItem: this.selectedItem.bind(this), isSelectable: this.props.isSelectable };
  }

  initialSelection() {
    let found = [];
    React.Children.map(this.props.children, (c, i) => {
      if(c.props && c.props['aria-selected']) found.push(i);
    });
    return found[0];
  }

  selectedItem(item) {
    this.setState({currentSelection: item});
  }

  children() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {currentSelection: this.state.currentSelection, idx: i});
    });
  }

  render() {
    return (
        <AccessibleList { ...this.props } className={this.$getClassName(`${cssPrefix}dropdown__list`)}
            role="menu">
          { this.children() }
        </AccessibleList>
      );
  }
}


class Dropdown extends React.Component {
  static childContextTypes = { searchTerm: PT.string, termChanged: PT.func, filterWith: PT.func, hasFilter: PT.bool, initialFocus: PT.bool, itemFocused: PT.func };
  static propTypes = {filterWith: PT.func, initialFocus: PT.bool };
  static defaultProps = { filterWith: defaultFilter, initialFocus: false, itemFocused: function(){} };

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = { searchTerm: '' };
    this.termChanged = this.termChanged.bind(this);
    this.hasFilter = hasChild(this.props.children, 'DropdownFilter');
  }

  getChildContext() {
    return { searchTerm: this.state.searchTerm, termChanged: this.termChanged.bind(this), filterWith: this.props.filterWith, hasFilter: this.hasFilter, initialFocus: this.props.initialFocus, itemFocused: this.props.itemFocused };
  }

  termChanged(event) {
    const target = event.target || event.currentTarget;
    this.setState({ searchTerm: target.value });
  }

  menuClassName() {
    return classNames(`${cssPrefix}dropdown`, this.props.className, {
      [`${cssPrefix}dropdown--menu`]: !this.hasFilter,
      [`${cssPrefix}dropdown--search`]: this.hasFilter,
      [`${cssPrefix}hide`]: this.props.hidden
    } );
  }

  render() {
    return (
      <div { ...this.props } className={this.menuClassName()}>
        { this.props.children }
      </div>
    );
  }
}

Dropdown.Header = DropdownHeader;
Dropdown.Filter = DropdownFilter;
Dropdown.Title = DropdownTitle;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

module.exports = Dropdown;
