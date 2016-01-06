/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';
const PT = React.PropTypes;
import componentUtil from 'app_modules/ui/util/component';

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else if (!hasClass(element, className)) {
    element.className = element.className + ' ' + className;
  }
  return element;
}
function removeClass(element, className) {
  if (hasClass(className)) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = (' ' + element.className + ' ').replace(' ' + className + ' ', ' ').trim();
    }
  }
  return element;
}
function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }
}

// CSS Transition group will keep DOM elements around while they are inserted and removed.
// This does a similar thing with classnames, but no removal/insertion is necessary. It's based
// on lifecycle.
class ClassNameTransitionGroup extends React.Component {
  static propTypes = { transitionName: PT.string, timeout: PT.number };
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  getClass(name) {
    return this.props.transitionName + '-' + name;
  }
  componentDidUpdate() {
    let node = ReactDOM.findDOMNode(this);
    let cls = this.getClass('reset');
    addClass(node, cls);
    setTimeout(() => removeClass(node, cls), this.props.timeout);
  }
  render() {
    return this.props.children;
  }
}

export default ClassNameTransitionGroup;
