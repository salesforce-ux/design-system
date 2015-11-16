/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import componentUtil from 'app_modules/ui/util/component';
const {createChainedFunction} = componentUtil;
import classNames from 'classnames/dedupe';
import globals from 'app_modules/global';
const cssPrefix = globals.cssPrefix;

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


// TODO: refactor to use with control
class StateClass extends React.Component {
  static events = [
    {on: 'onMouseEnter', off: 'onMouseLeave', className: `${cssPrefix}is-hovered`},
    {on: 'onFocus', off: 'onBlur', className: `${cssPrefix}is-focused`},
    {toggle: 'onClick', className: `${cssPrefix}is-selected`, classNameOff: `${cssPrefix}not-selected`}
  ];

  constructor(props) {
    super(props);
    this.childNode = null;
  };

  addClass(clsName) {
    return (e) => addClass(e.currentTarget, clsName);
  }

  removeClass(clsName) {
    return (e) => removeClass(e.currentTarget, clsName);
  }

  toggleClass(clsNameOn, clsNameOff) {
    return (e) => {
      let target = e.currentTarget;
      if(hasClass(target, clsNameOff)) {
        removeClass(target, clsNameOff);
        addClass(target, clsNameOn);
      } else {
        removeClass(target, clsNameOn);
        addClass(target, clsNameOff);
      }
    };
  }

  // adds a toggle class event while maintaining the controls previous events.
  getProperEventTrigger(childProps) {
    let newProps = {};
    StateClass.events.forEach( e => {
      if(e.toggle) {
        newProps[e.toggle] = createChainedFunction(childProps[e], createChainedFunction(childProps[e.toggle], this.toggleClass(e.className, e.classNameOff).bind(this)));
      } else {
        newProps[e.on] = createChainedFunction(childProps[e], this.addClass(e.className).bind(this));
        newProps[e.off] = createChainedFunction(childProps[e], this.removeClass(e.className).bind(this));
      }
    });
    return newProps;
  }

  initialClassName(clsName) {
    let initialSelection = StateClass.events.filter(e => e.toggle).map(e => clsName.indexOf(e.className) >= 0 ? e.className : e.classNameOff);
    return classNames(clsName, initialSelection);
  }

  render() {
    let child = React.Children.only(this.props.children);
    let className = this.initialClassName(child.props.className || '');
    let props = Object.assign({ref: '$control', className: className}, this.getProperEventTrigger(child.props));
    return React.cloneElement(child, props);
  }
}

export default StateClass;
