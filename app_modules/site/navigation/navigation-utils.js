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
