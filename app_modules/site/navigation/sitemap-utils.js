import _ from 'lodash';

/**
 * Return the path for the rotue
 *
 * @param {string} routePath
 * @param {Route} [parent]
 * @returns {string}
 */
function getPath (routePath, parent) {
  // Remove trailing "/"
  routePath = _.trimRight(routePath, '/');
  // If the path begins with "/", return the path
  if (/^\//.test(routePath)) {
    return routePath;
  }
  // If route has a parent, concat the paths
  if (parent) {
    let parentPath = _.trimRight(parent.path, '/');
    return `${parentPath}/${routePath}`;
  }
  // Otherwise just return a root path
  return `/${routePath}`;
}

/**
 * Remove leading and trailing slashes from a path
 *
 * @param {string} str
 * @returns {string}
 */
function trimSlashes (str) {
  return _.trim(str, '/');
}

class Route {
  /**
   * Create a new route
   *
   * @param {string} name
   * @param {object} [options]
   * @param {Route} [parent]
   */
  constructor (name, options, parent) {
    options = _.defaults({}, options, {
      path: name
    });
    parent = parent && parent.isRoot ? null : parent;
    _.assign(this, options, {
      name,
      uid: parent ? `${parent.uid}:${name}` : name,
      path: getPath(options.path, parent),
      routes: []
    });
    this.modulePath = this.getModulePath();
  }
  /**
   * Remove leading and trailing slashes from a path
   *
   * @param {string} p
   * @returns {string}
   */
  trimSlashes (p) {
    return trimSlashes(p);
  }
  /**
   * Return a path that that appends index.jsx and trims slashes
   *
   * "/foo" => "foo/index.jsx"
   *
   * @param {string} basePath
   * @returns {string}
   */
  getIndexPath (basePath) {
    return trimSlashes(`${trimSlashes(basePath)}/index.jsx`);
  }
 /**
   * Return an index path that represents the location of the module
   *
   * @returns {string}
   */
  getModulePath () {
    return this.getIndexPath(this.path);
  }
  /**
   * Create a new route that can have nested routes
   *
   * @param {string} name
   * @param {object} [options]
   * @param {function} [callback]
   */
  resource (name, options, callback) {
    if (_.isFunction(options)) callback = options;
    let route = new Route(name, options, this);
    if (_.isFunction(callback)) {
      callback.call(route);
    }
    this.routes.push(route);
  }
  /**
   * Create a new route
   *
   * @param {string} name
   * @param {object} [options]
   */
  route (name, options) {
    this.routes.push(
      new Route(name, options, this)
    );
  }
  /**
   * Return an array that contains the current route and all the
   * nested rotues
   *
   * @returns {Route[]}
   */
  flattenRoutes () {
    let routes = [this].concat(
      this.routes.map(route => {
        return route.flattenRoutes();
      })
    );
    return _.flatten(routes);
  }
}

export class Router {
  /**
   * Create a new Router
   */
  constructor () {
    this.__route = new Route('root', { isRoot: true });
    ['getFlattenedRoutes', 'getRoute', 'getRouteByPath'].forEach(method => {
      this[method] = _.memoize(this[method].bind(this));
    });
  }
  /**
   * Define URL mappings for the router
   *
   * @returns {Router}
   */
  map (callback) {
    callback.call(this.__route);
    return this;
  }
  /**
   * Return the current route tree
   *
   * @returns {Route[]}
   */
  getRoutes () {
    return this.__route.routes;
  }
  /**
   * Return a flattened version of the route tree
   *
   * @returns {Route[]}
   */
  getFlattenedRoutes () {
    let routes = this.__route.routes.map(route => {
      return route.flattenRoutes();
    });
    return _.flatten(routes);
  }
  /**
   * Return a single route by uid
   *
   * @param {string} uid
   * @returns {Route|Undefined}
   */
  getRoute (uid) {
    return _.find(this.getFlattenedRoutes(), { uid });
  }
  /**
   * Return a single route by path
   *
   * @param {string} path
   * @returns {Route|Undefined}
   */
  getRouteByPath (path) {
    return _.find(this.getFlattenedRoutes(), { path });
  }
}
