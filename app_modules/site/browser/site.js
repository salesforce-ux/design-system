/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/**
 * DO NOT import this module inside any components because it will only
 * run in the browser
 */

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { last } from 'lodash';
import 'app_modules/site/util/localytics';
import svgFix from 'app_modules/site/util/ie/svg';
import { logCurrentPageVisit } from 'app_modules/site/util/localytics';
import sitemap from 'app_modules/site/navigation/sitemap';
import shared from 'app_modules/site/shared';
import Prefs from 'app_modules/site/preferences';
import { LocalStorageStrategy, UrlPrefsStrategy } from 'app_modules/site/preferences/strategies';
import globals from 'app_modules/global';

/**
 * Fix <svg:use> in IE
 */
svgFix(document);

/**
 * This will cause webpack to code split all the site pages into bundles
 * that can be lazy loaded using the requirePage() function
 */
const requirePage = require.context('bundle?lazy!.tmp/site', true, /\.jsx$/);

/**
 * A wrapper component needed for ReactRouter
 */
const Root = React.createClass({
  render() { return last(this.props.components); }
});

window.LIGHTNING_DESIGN_SYSTEM = {

  /**
   * Called by an inline script tag once the page loads
   *
   * 1. Lazy load the JS module for this page
   * 2. Build the client-side router
   * 3. Render the router
   */
  init(modulePath) {
    logCurrentPageVisit();
    requirePage(`./${modulePath}`)(pageElement => {
      this.router = this.buildRouter(modulePath, pageElement);
      ReactDOM.render(this.router, document.getElementById('app'), () => {
        // Set the defaults based on user type
        Prefs.setAll(
          Prefs.getDefaults()[this.userType()],
          false
        );
        //Keep track of the preferences in the url hash
        Prefs.setStrategies([LocalStorageStrategy(), UrlPrefsStrategy()]);
      });
    });
  },

  /**
   * Build the router
   *
   * @param {string} modulePath
   * @param {ReactElement} pageElement
   * @returns {ReactElement}
   */
  buildRouter(modulePath, pageElement) {
    let routes = sitemap.getFlattenedRoutes().map(route => {
      let props = { path: route.path, name: route.uid };
      // If we're on the current page, we DON'T want to fetch the pageElement
      // async because ReactRouter will render a temporary <noscript>
      if (route.modulePath === modulePath) {
        props.components = pageElement;
      } else {
        // Fetch the page async
        // TODO: Not sure how webpack signals an error
        // TODO: Spinner if the load takes longer than X milliseconds
        props.getComponents = function(callback) {
          requirePage(`./${route.modulePath}`)(pageElement => {
            callback(null, pageElement);
          });
        };
      }
      return React.createElement(Route, props);
    });
    // ReactRouter requires a class to be the root element
    let wrapper = React.createElement(Route, {
      component: Root
    }, ...routes);
    // Return the router using HTML5 pushState
    return React.createElement(Router, {
      history,
      onUpdate: function () {
        logCurrentPageVisit();
        shared.store = shared.store.set('route', sitemap.getRouteByPath(
          this.state.location.pathname
        ));
        // Restore the preferences hash after a page change
        Prefs.sync(false);
      }
    }, wrapper);
  },

  /**
   * User Type and Browser Information
   *
   */
  userType: function() {
    // there will be no usertype in dev
    return globals.userType(document.cookie) || 'dev';
  },

  isExternalUser: function(){
    return this.userType() !== 'internal';
  },

  isMobile: function() {
    return (window.innerWidth || screen.width) <= 960;
  }

};
