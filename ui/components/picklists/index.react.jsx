/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ReactDOM = require('react-dom');
const PT = React.PropTypes;
const componentUtil = require('app_modules/ui/util/component');
const {textContent} = componentUtil;
const classNames = require('classnames');
const Popover = require('ui/components/lib/popover/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const AccessibleList = require('ui/components/lib/accessible-list.react');
const pf = componentUtil.prefix;
import Helper from 'ui/components/lib/dom-helpers';

class PickListItem extends React.Component {
  static contextTypes = { itemSelected: PT.func, itemFocused: PT.func };
  static globalIdx = 0;

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.id = this.props.id || `po-${PickListItem.globalIdx++}-${this.props.idx}`;
  }

  itemSelected(e) {
    // skip if chlidren involve a nested ul
    if(React.Children.count(this.props.children) === 1) {
      this.context.itemSelected(this, this.props.idx, this.props.direction);
    }
  }

  itemFocused(e) {
    this.context.itemFocused(this.id);
  }

  isSelected() {
    return this.props.currentSelection.indexOf(this) >= 0 || this.props.currentSelection.indexOf(this.props.idx) >= 0;
  }

  showCheck() {
    return this.props.showCheck && this.isSelected();
  }

  children() {
    return React.Children.map(this.props.children, (c) => {
      return React.cloneElement(c, {currentSelection: this.props.currentSelection});
    });
  }

  render() {
    const props = this.$propsWithoutKeys('className');
    const classNameWithSelected = pf(classNames('picklist__item has-icon has-icon--left', {'is-selected': this.isSelected()}));
    const className = this.$getClassName(classNameWithSelected);
    const tabIndex = this.props.idx === 0 ? 0 : -1;

    return (
      <li {...props} id={this.id} className={className} onFocus={this.itemFocused.bind(this)} onClick={this.itemSelected.bind(this)} onMouseDown={this.itemSelected.bind(this)} aria-selected={this.isSelected()} tabIndex={tabIndex} role="option">
        <span className={pf('truncate')}>
          { this.showCheck() ? <SvgIcon className={pf('icon icon--small icon--left')} sprite="standard" symbol="task2" /> : null }
          {this.children()}
        </span>
      </li>
    );
  }
}


class PickListOptions extends React.Component {
  static contextTypes = { itemSelected: PT.func, itemFocused: PT.func };
  static propTypes = { flavor: componentUtil.PropTypes.flavor('group', 'nested', 'multi'), direction: PT.string, currentSelection: PT.array, showCheck: PT.bool, hidden: PT.bool }
  static defaultProps = { direction: 'left', currentSelection: [], showCheck: true, hidden: false }

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = {mounted: false};
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  children() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {showCheck: this.props.showCheck, currentSelection: this.props.currentSelection, idx: i, direction: this.props.direction});
    });
  }

  render() {
    let flavorClass = this.$getClassNameWithFlavor(pf('picklist__options'));
    let className = classNames(flavorClass, pf(classNames({shown: !this.props.hidden, hidden: this.props.hidden})));
    const props = this.$propsWithoutKeys('className', 'flavor');

    // the extra picklist__options messes this up. Should we alter gcn w/ flavor itself? Why the dup?
    if((this.props.flavor || '').match('nested')) {
      className = className.replace(pf('picklist__options'), '');
    }

    return (
      <AccessibleList {...props} className={pf(className)}>
        {this.children()}
      </AccessibleList>
    );
  }
}

class PickListArrows extends React.Component {
  static propTypes = { flavor: componentUtil.PropTypes.flavor('horizontal', 'vertical') };
  static symbols = {'horizontal': ['left', 'right'], 'vertical': ['up', 'down'] };

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.symbols = PickListArrows.symbols[this.props.flavor];
  }

  arrowClicked(direction, e) {
    return this.props.onClick(direction);
  }

  render() {
    return (
      <div className={pf('grid grid--vertical')}>
        { this.symbols.map((s, i) => <ButtonIcon flavor="icon-container" sprite="utility" assistiveText={'Arrow ' + s} symbol={s} onClick={this.arrowClicked.bind(this, s)} key={i} /> ) }
      </div>
    );
  }
}
// @TODO: assistive text needs to be unique for each icon

class PickList extends React.Component {
  static childContextTypes = { itemSelected: PT.func, itemFocused: PT.func };
  static propTypes = { label: PT.string, flavor: componentUtil.PropTypes.flavor('group', 'nested', 'multi', 'quickfind') }
  static defaultProps = { label: 'Select an option' }

  constructor(props) {
    super(props);
    componentUtil.install(this);
    const isInitiallyHidden = !this.props['aria-expanded'];
    this.state = { hidden: isInitiallyHidden, currentSelection: [], currentFocus: null };
  }

  getChildContext() {
    return { itemSelected: this.itemSelected.bind(this), itemFocused: this.itemFocused.bind(this) };
  }

  isMulti() {
    return this.props.flavor === 'multi';
  }

  itemSelected(item) {
    const sel = this.props.multiple ? this.state.currentSelection : [];
    this.setState({currentSelection: sel.concat(item) });
  }

  itemFocused(id) {
    this.setState({currentFocus: id });
  }

  hasSelection() {
    return this.state.currentSelection.length > 0;
  }

  toggleHidden() {
    this.setState({hidden: !this.state.hidden });
  }

  onSpaceBar(e) {
    if(e.keyCode === Helper.keys.space) return Helper.stopEvent(e) && this.toggleHidden();
  }

  selectionText() {
    return this.state.currentSelection.map(s => textContent(s.props.children)).join(', ');
  }

  label() {
    return this.hasSelection() ? this.selectionText() : this.props.label;
  }

  children() {
    return React.Children.map(this.props.children, (c, i) => {
      return React.cloneElement(c, {currentSelection: this.state.currentSelection, showCheck: true, hidden: this.state.hidden});
    });
  }

  render() {
    let className = this.$getClassNameWithFlavor(pf('picklist'));
    const props = this.$propsWithoutKeys('className', 'label', 'flavor');
    if(this.isMulti()) return <PickListMulti {...this.props} />;

    return (
      <div className={className} aria-expanded={!this.state.hidden} {...props} >
        <button onClick={this.toggleHidden.bind(this)} onKeyDown={this.onSpaceBar.bind(this)} className={pf('button button--neutral picklist__label')} aria-haspopup="true" aria-activedescendant={this.state.currentFocus}>
          <span className={pf('truncate')}>{this.label()}</span> <SvgIcon className={pf('icon')} sprite="utility" symbol="down" />
        </button>
        { this.children() }
      </div>
    );
  }
}

class PickListMulti extends PickList {

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = { leftSelected: [], rightSelected: [], leftBox: this.initialLeft(), rightBox: this.initialRight() };
  }

  itemSelected(item, idx, direction) {
    const name = `${direction}Selected`;
    const dir = this.state[name] || [];
    this.setState({[name]: [idx]}); //concat this with this.state[name] to allow more than 1 selection
  }

  dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
  }

  drop(e) {
    if(ReactDOM.findDOMNode(this.refs.rightBox) === e.currentTarget) {
      return this.arrowClicked('right');
    }
    if(ReactDOM.findDOMNode(this.refs.leftBox) === e.currentTarget) {
      return this.arrowClicked('left');
    }
  }

  dragOver(e) {
    e.preventDefault();
  }

  prepKids(dir, kids=[]) {
    // want to work with a "real" array, so don't React.Children.map
    return kids.map((c, i) => {
      return React.cloneElement(c, {draggable: true, onDragStart: this.dragStart.bind(this), key: `dir-${i}`, idx: i });
    });
  }

  initialLeft() {
    return this.prepKids('left', this.props.children[0].props.children);
  }

  initialRight() {
    return this.prepKids('right', this.props.children[1].props.children);
  }

  isMulti() {
    return true;
  }

  swapPosition(curIdx, swapIdx) {
    const {rightBox, leftBox, rightSelected, leftSelected} = this.state;
    const curEl = rightBox[curIdx];
    const swapEl = rightBox[swapIdx];
    if(!swapEl) return this.state.rightBox;

    rightBox[curIdx] = swapEl;
    rightBox[swapIdx] = curEl;
    return rightBox;
  }

  arrowClicked(direction) {
    const {rightBox, leftBox, rightSelected, leftSelected} = this.state;
    let curIdx, prevIdx, nextIdx;
    switch(direction) {
    case 'left':
      rightSelected.map(i => {
        const child = rightBox.splice(i, 1);
        this.setState({leftBox: leftBox.concat(child), rightBox: rightBox, rightSelected: []});
      });
      break;
    case 'right':
      leftSelected.map(i => {
        const child = leftBox.splice(i, 1);
        this.setState({leftBox: leftBox, rightBox: rightBox.concat(child), leftSelected: []});
      });
      break;
    case 'up':
      curIdx = rightSelected[0];
      prevIdx = curIdx - 1;
      this.setState({leftBox: leftBox, rightBox: this.swapPosition(curIdx, prevIdx), rightSelected: []});
      break;
    case 'down':
      curIdx = rightSelected[0];
      nextIdx = curIdx + 1;
      this.setState({leftBox: leftBox, rightBox: this.swapPosition(curIdx, nextIdx), rightSelected: []});
      break;
    }
  }

  render() {
    let className = this.$getClassNameWithFlavor(pf('picklist'));
    const props = this.$propsWithoutKeys('className', 'flavor', 'label');

    return (
      <div className={pf('picklist--draggable grid')} {...props} >
        <div className={pf('form-element')}>
          <span className={pf('form-element__label')} aria-label="select-1">{this.props.label}</span>
          <div className={className}>
            <PickListOptions flavor="multi" currentSelection={this.state.leftSelected} direction="left" ref="leftBox" onDragOver={this.dragOver.bind(this)} onDrop={this.drop.bind(this)} showCheck={false}>
              {this.state.leftBox}
            </PickListOptions>
          </div>
        </div>
        <PickList.Arrows flavor="horizontal" onClick={this.arrowClicked.bind(this) } />
        <div className={pf('form-element')}>
          <span className={pf('form-element__label')} aria-label="select-2">{this.props.label2}</span>
          <div className={className}>
            <PickListOptions flavor="multi" currentSelection={this.state.rightSelected} direction="right" ref="rightBox" onDragOver={this.dragOver.bind(this)} onDrop={this.drop.bind(this)} showCheck={false}>
              {this.state.rightBox}
            </PickListOptions>
          </div>
        </div>
        <PickList.Arrows flavor="vertical" onClick={this.arrowClicked.bind(this) }/>
      </div>
    );
  }
}

PickList.Options = PickListOptions;
PickList.Item = PickListItem;
PickList.Arrows = PickListArrows;

module.exports = PickList;
