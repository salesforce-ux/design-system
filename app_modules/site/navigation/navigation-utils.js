/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import sitemap from './sitemap';

/**
 * Return a nav item representation of a route
 *
 * @param {Route} route
 * @returns {object}
 */
export function createNavItem (route) {
  return {
    route: route.uid,
    label: route.component.title,
    status: route.component.status,
    children: route.routes.map(createNavItem)
  };
}

/**
 * Add additional fields to a nav item
 *
 * @param {NavItem} item
 * @returns {NavItem}
 */
export function formatNavItem (item) {
  item.id = item.id || _.kebabCase(item.label);
  if (item.route) {
    let route = sitemap.getRoute(item.route);
    if (route) {
      item.path = route.path;
    }
  }
  if (item.children) {
    item.children.forEach(child => {
      child.parent = item;
      formatNavItem(child);
    });
  }
  return item;
}

/**
 * Return a recursivley flattened array representing a nav item and it's children
 */
export function flattenNavItems (navItems) {
  return _.flattenDeep([navItems].concat(
    navItems
      .filter(item => item.children)
      .map(item => {
        return flattenNavItems(item.children);
      })
  ));
}

/**
 * Return an array of active nav items based on a url path
 *
 * @param {NavItems[]} navItems
 * @param {string} path
 * @return {array}
 */
export function getActiveNavItems (navItems, path) {
  let activeItems = [];
  let items = flattenNavItems(navItems).filter(item => item.path);
  let item = _.find(items, { path });
  if (item) {
    activeItems.unshift(item);
    let parent = item.parent;
    while (parent) {
      activeItems.unshift(parent);
      parent = parent.parent;
    }
  }
  return activeItems;
}
