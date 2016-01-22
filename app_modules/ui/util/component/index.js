/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import createChainedFunction from './create-chained-function';
import globals from 'app_modules/global';
import whitelist from '.generated/whitelist';

export { default as createChainedFunction } from './create-chained-function';

/**
 * Traverse all children
 */
export function flatMapChildren(children, f) {
  var result = [];
  function go(xs, f) {
    return React.Children.map(xs, function(c) {
      result.push(f(c));
      if(c.type) go(c.props.children, f);
    });
  }
  go(children, f);
  return result;
}

/**
 * Perhaps there's a more pragmatic way to do this. Eventually, I suspect we'll have some utils to help find children.
 */
export function hasChild(children, name) {
  var flag = false;
  flatMapChildren(children, function(c) {
    flag = flag || (c.type && c.type.name === name);
  });
  return flag;
}


// findDOMNode complains so filter out strings from virtual dom
export function textContent(children) {
  return flatMapChildren(children, (c) => {
    if(typeof c === 'string') return c;
  }).join(' ');
}

const installMethods = {
  /**
   * Return a string with the provided className string
   * combined with this.props.className
   *
   * @return {string}
   */
  getClassName() {
    let args = Array.prototype.slice.call(arguments);
    args = args.concat(this.props.className);
    return classNames.apply(null, args);
  },

  /**
   * Return a string with the provided classNameBase with a flavor modifier
   * combined with this.props.className
   *
   * @param {string} classNameBase
   * @return {string}
   */
  getClassNameWithFlavor(classNameBase, options={}) {
    if (typeof classNameBase !== 'string') {
      throw new Error('"classNameBase" must be a string');
    }
    options = _.assign({}, {
      // The key from this.props to extract the flavors
      prop: 'flavor',
      // Include this.props.className in the returned value
      includeClassName: true,
      // Any additional classes to be addeed in the returned value
      additionalClassName: false
    }, options);
    const flavor = this.props[options.prop];
    const className = options.includeClassName
      ? this.props.className
      : '';
    const flavors = flavor ? flavor.split(',').map(f => {
      return `${classNameBase}--${f}`;
    }) : '';
    return classNames(
      classNameBase, flavors, className, options.additionalClassName
    );
  },

  getClassNameWithVisiblity(ns) {
    let vis = this.props.visible || true;
    return this.$getClassName(ns, vis ? 'is-visible' : 'is-hidden');
  },

  /**
   * Return a copy of this.props without the specified keys
   *
   * @prop {...String} keys
   * @returns {Object}
   */
  propsWithoutKeys(...keys) {
    let target = {};
    for (let i in this.props) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(this.props, i)) continue;
      target[i] = this.props[i];
    }
    return target;
  }
};

/**
 * Install helper methods on the provided context
 *
 * @param {object} context - The object to install the methods
 * @param {array} [methods] - By default, all methods will be installed,
 *  unless an array of methods is provided
 *
 * class Component extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     // Install all methods
 *     componentUtil.install(this);
 *     // Or only install select methods
 *     //componentUtil.install(this, ['getClassName']);
 *   }
 * }
 *
 */
export function install(context, methods) {
  if (typeof context !== 'object') {
    throw new Error('"context" must be an object');
  }
  if (typeof methods === 'undefined') {
    methods = Object.keys(installMethods);
  }
  if (!Array.isArray(methods)) {
    throw new Error('"methods" must be an array');
  }
  methods.forEach(method => {
    const hasMethod = installMethods.hasOwnProperty(method);
    const isFunction = typeof installMethods[method] === 'function';
    if (!hasMethod || !isFunction) {
      throw new Error(`"${method}" is not a valid util method`);
    }
    // Add the method prefixed with a "$" and bind it to the context
    context[`$${method}`] = installMethods[method].bind(context);
  });
}

/**
 * Prefixes all classes in className with globals.cssPrefix.
 */
export function prefix(className) {
  return typeof className === 'string' ?
      className.split(/\s+/).map(c => {
        return (whitelist.indexOf(`.${c}`) >= 0) ? `${globals.cssPrefix}${c}` : c;
      }).join(' ') : className;
}

export const PropTypes = {

  /**
   * Verify that a component has valid flavors
   *
   * @param {...string} flavor
   * @returns {function}
   *
   * @example
   * Component.propTypes = {
   *   flavor: componentUtil.PropTypes.flavor(
   *      'brand', 'inverse', 'stateful', 'hint'
   *   )
   * };
   *
   * <Button flavor="brand" />
   * <Button flavor="brand,inverse" />
   */
  flavor() {
    const validFlavors = Array.prototype.slice.call(arguments);
    return function(props, propName, componentName) {
      const flavor = props[propName];
      if (typeof flavor !== 'undefined' && typeof flavor !== 'string') {
        return new Error(`"\"${propName}\" must be a string"`);
      }
      if (typeof flavor === 'string') {
        const flavors = flavor.split(',');
        const invalidFlavors = flavors.filter(f => {
          return validFlavors.indexOf(f) === -1;
        });
        if (invalidFlavors.length > 0) {
          return new Error(`
            "${invalidFlavors[0]}" is not a valid ${componentName} flavor.
          `);
        }
      }
    };
  }
};

export default {
  install,
  PropTypes,
  createChainedFunction,
  flatMapChildren,
  hasChild,
  prefix,
  textContent
};

