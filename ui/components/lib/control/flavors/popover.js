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
const classNames = require('classnames');
const Registry = require('../registry');
const Control = require('../index.react');
const domAlign = require('../dom-align/index');
const pf = componentUtil.prefix;

// This component clones calculates position for popover.
// It inherits from the Control Component which sets up listeners...ugh inheritence
class PopoverControl extends Control {
  static propTypes = { placement: PT.string, trigger: PT.oneOf(['click', 'hover', 'focus']), target: PT.string };

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.showingPopover = false;
    this.popover = undefined;
    this.wrapper = undefined;
  }

  componentDidMount() {
    this.wrapper = this.appendTargetDiv();
    this.popover = this.createPopover();
    this.unmountPopover();
  }

  unmountPopover() {
    this.placeTooltip();
    if (this.props.placement === 'top') {
      this.wrapper.className = 'popover-wrapper fall-into-ground slide-from-bottom-to-top';
    } else if (this.props.placement === 'left') {
      this.wrapper.className = 'popover-wrapper fall-into-ground slide-from-right-to-left';
    } else if (this.props.placement === 'bottom') {
      this.wrapper.className = 'popover-wrapper fall-into-ground slide-from-top-to-bottom';
    } else if (this.props.placement === 'right') {
      this.wrapper.className = 'popover-wrapper fall-into-ground slide-from-left-to-right';
    }
    this.wrapper.className = pf(this.wrapper.className);
    return false;
  }

  mountPopover() {
    ReactDOM.render(this.popover, this.wrapper, () => {
      this.placeTooltip();
      this.wrapper.className = pf('popover-wrapper rise-from-ground');
    });
    return true;
  }

  oppositePlacement(p) {
    return {top: 'bottom', right: 'left', bottom: 'top', left: 'right'}[p];
  }

  nubbinClass() {
    return pf('nubbin nubbin--' + this.oppositePlacement(this.props.placement));
  }

  // return center-right, bottom-center, etc for domAlign to use.
  getPoints() {
    switch(this.props.placement) {
    case 'left': return ['cr', 'cl'];
    case 'right': return ['cl', 'cr'];
    case 'top': return ['bc', 'tc'];
    case 'bottom': return ['tc', 'bc'];
    }
  }

  placeTooltip() {
    const placement = this.props.placement;
    let rootNode = ReactDOM.findDOMNode(this.refs.$control);
    domAlign(this.wrapper, rootNode, { points: this.getPoints() });
  }

  getDoc() {
    return ReactDOM.findDOMNode(this.refs.$control).ownerDocument || document;
  }

  appendTargetDiv() {
    const doc = this.getDoc();
    const div = doc.createElement('div');
    div.className = pf('popover-wrapper fall-into-ground');
    doc.body.appendChild(div);
    return div;
  }

  createPopover() {
    return React.cloneElement(this.target()._reactInternalInstance._currentElement, {
      visible: true,
      className: pf(classNames(this.nubbinClass()))
    });
  }

  $targets() {
    let target = ReactDOM.findDOMNode(this.target());
    return target ? [target] : [];
  }

  $show() {
    this.showingPopover = this.mountPopover();
  }

  $hide() {
    this.showingPopover = this.unmountPopover();
  }

  $toggle() {
    this.showingPopover = this.showingPopover ? this.unmountPopover() : this.mountPopover();
  }

  target() {
    return Registry.lookup(this.props.target.replace(/^#/, ''));
  }
}

module.exports = PopoverControl;
