/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import componentUtil, { createChainedFunction } from 'app_modules/ui/util/component';
import classNames from 'classnames';

const eventDict = {
  click: ['onClick'],
  hover: ['onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'],
  focus: ['onFocus', 'onBlur']
};

const PT = React.PropTypes;

class Control extends React.Component {
  static propTypes = { trigger: PT.oneOf(Object.keys(eventDict)), target: PT.string };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  componentDidMount() {
    this.$targets().forEach(this.initialVisibility.bind(this));
  }

  initialVisibility(t) {
    if(t.className.match(/hide|show/ig)) { return; } // already has class so leave be
    t.className = this.updatedClassName(t, 'show');
  }

  updatedClassName(t, name) {
    return classNames(t.className.replace(/(hide|show)/ig, ''), name);
  }

  getClassWithVisibility(t) {
    let showing = t.className.match(/show/ig);
    let name = showing ? 'hide' : 'show';
    return this.updatedClassName(t, name);
  }

  updateTarget(t) {
    t.className = this.getClassWithVisibility(t);
  }

  $toggle() {
    return this.$targets().forEach(this.updateTarget.bind(this));
  }

  $show() {
    return this.$toggle();
  }

  $hide() {
    return this.$toggle();
  }

  $targets() {
    return [].slice.call(document.querySelectorAll(this.props.target));
  }

  isShowEvent(e) {
    return ['onMouseEnter', 'onFocus'].indexOf(e) >= 0;
  }

  isHideEvent(e) {
    return ['onMouseLeave', 'onBlur'].indexOf(e) >= 0;
  }

  // adds a toggle/hide/show event while maintaining the controls previous events.
  getProperEventTrigger(childProps) {
    let obj = {};
    let events = eventDict[this.props.trigger] || ['onClick'];
    events.forEach( e => {
      if(this.isShowEvent(e)) {
        obj[e] = createChainedFunction(childProps[e], this.$show.bind(this));
      } else if(this.isHideEvent(e)) {
        obj[e] = createChainedFunction(childProps[e], this.$hide.bind(this));
      } else {
        obj[e] = createChainedFunction(childProps[e], this.$toggle.bind(this));
      }
    });
    return obj;
  }

  renderControl() {
    let child = React.Children.only(this.props.children);
    let props = Object.assign({ref: '$control'}, this.getProperEventTrigger(child.props));
    return React.cloneElement(child, props);
  }

  render() {
    return this.renderControl();
  }
}

export default Control;
