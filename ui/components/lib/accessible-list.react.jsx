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
const {createChainedFunction} = componentUtil;
import Helper from 'ui/components/lib/dom-helpers';

class AccessibleList extends React.Component {
  static propTypes = { selector: PT.string, click: PT.bool, selectedIndex: PT.number }
  static defaultProps = { selector: 'li', click: false, selectedIndex: 0 }

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = { currentIndex: this.props.selectedIndex };
    this.instantiated = false;
  }

  componentWillUnmount() {
    if (this.items) this.items.forEach(t => t.onfocus = undefined);
  }

  setFocusedIndex(e) {
    this.items.forEach((item, i) => {
      if(item === e.currentTarget) {
        this.setState({currentIndex: i});
      }
    });
  }

  getItems() {
    const node = ReactDOM.findDOMNode(this);
    return [].slice.call(node.querySelectorAll(this.props.selector));
  }

  instantiateItems() {
    this.getItems().forEach(t => t.onfocus = this.setFocusedIndex.bind(this));
    this.instantiated = true;
  }

  navigateMenu(e) {
    if(e.keyCode === Helper.keys.space) return Helper.stopEvent(e) && Helper.click(this.items[this.state.currentIndex]);
    const direction = Helper.keys.directions[String(e.keyCode)];
    if(!direction) return;
    if(!this.instantiated) this.instantiateItems(); //not quite sure why this is necessary, but compDidMount didn't find all
    this.items = this.getItems(); // do this everytime to refresh if items have changed
    Helper.stopEvent(e);

    const goingBackwards = ['up', 'left'].indexOf(direction) >= 0;
    const currentIdx = this.state.currentIndex;
    let newIdx = goingBackwards ? currentIdx - 1 : currentIdx + 1;
    let target = this.items[newIdx];

    if(!target) {
      newIdx = goingBackwards ? this.items.length - 1 : 0;
      target = this.items[newIdx];
    }

    target.focus();
    if(this.props.click) Helper.click(target);
    this.setState({currentIndex: newIdx});
  }

  render() {
    const props = Object.assign({onKeyDown: createChainedFunction(this.props.onKeyDown, this.navigateMenu.bind(this))}, this.props);
    return (<ul {...props} />);
  }
}

module.exports = AccessibleList;
