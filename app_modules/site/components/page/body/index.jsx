/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import _ from 'lodash';
import Anchor from 'app_modules/site/components/page/anchor';
import Settings from 'app_modules/site/components/page/settings';
import BodyContent from './content';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import shared from 'app_modules/site/shared';
import version from '.generated/site.version';
import Immutable from 'immutable';
import { EventEmitter } from 'events';
import Prefs from 'app_modules/site/preferences';
import IfPrefs from 'app_modules/site/preferences/component';
import PrefsMixin from 'app_modules/site/preferences/mixin';
import Status from 'app_modules/site/util/component/status';
import { Link } from 'react-router';
import CTALink from 'app_modules/site/components/cta-link';
import { logCTAEvent } from 'app_modules/site/util/localytics';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';
import navigation from 'app_modules/site/navigation/navigation';
import { getActiveNavItems } from 'app_modules/site/navigation/navigation-utils';
import CSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * Add extra meta data to the nav items
 *
 * @param {array} items
 * @param {array} activeItems
 * @param {array} keyPath
 */
function transformNavItems(items, activeItems, keyPath=[]) {
  items.forEach((item, index) => {
    // Prevent stack overflow from circular dependency
    delete item.parent;
    item.keyPath = keyPath.concat(index);
    item.hasChildren = item.children && item.children.length;
    item.isSelected = _.includes(activeItems, item);
    item.isOpen = item.hasChildren && item.isSelected;
    item.isActive = item === _.last(activeItems);
    if (item.hasChildren) {
      transformNavItems(item.children, activeItems, item.keyPath.concat('children'));
    } else {
      delete item.children;
    }
  });
}

/**
 * Recursively iterate over each navItem
 *
 * @param {Immutable.List} items
 * @param {function} fn
 */
function eachNavItem(items, fn) {
  items.forEach(item => {
    fn(item);
    if (item.has('children')) {
      eachNavItem(item.get('children'), fn);
    }
  });
}

/**
 * Recursively flatten the nav items
 *
 * @param {Immutable.List} items
 * @returns {Immutable.List}
 */
function flattenNavItems(items) {
  let flattenedItems = Immutable.List();
  eachNavItem(items, item => {
    flattenedItems = flattenedItems.push(item);
  });
  return flattenedItems;
}

export default React.createClass({

  mixins: [PrefsMixin],

  propTypes: {
    url: React.PropTypes.string,
    anchor: React.PropTypes.node,
    anchorTitle: React.PropTypes.string,
    header: React.PropTypes.node,
    contentClassName: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool
    ])
  },

  getInitialState() {
    // Store
    shared.store = shared.store.set('url', this.props.url);
    // Nav
    let navItems = _.cloneDeep(navigation);
    let navItemsActive = getActiveNavItems(navItems, this.props.url);
    transformNavItems(navItems, navItemsActive);
    return {
      navItems: Immutable.fromJS(navItems),
      showingSettings: false,
      isExternal: true
    };
  },

  componentWillMount() {
    // Events
    if (typeof window !== 'undefined') {
      window.__events = new EventEmitter();
    }
  },

  componentDidMount() {
    // Some events (from iframes) might have been triggered before
    // the EventEmitter was created — so emit events for queued items
    // and then drain the queue
    if (_.isArray(window.__eventsQueue)) {
      window.__eventsQueue.filter(event => {
        return _.isObject(event) && _.has(event, 'name');
      }).forEach(event => {
        const args = _.isArray(event.args) ? event.args : [];
        window.__events.emit(event.name, ...args);
      });
      window.__eventsQueue.length = 0;
    }
    const slds = window.LIGHTNING_DESIGN_SYSTEM;
    this.setState({
      showingSettings: !(Prefs.hasBeenViewed() || slds.isMobile()) && slds.userType() === 'internal',
      isExternal: slds.isExternalUser()
    });
  },

  componentWillReceiveProps(nextProps) {
    // Store
    shared.store = shared.store.set('url', nextProps.url);
    // Nav
    let nextNavItem = flattenNavItems(this.state.navItems).find(item => {
      return item.get('path') === nextProps.url;
    });
    if (nextNavItem) {
      this.onSelectNavItem(nextNavItem);
    } else {
      this.setState({
        navItems: this.resetNavItems(this.state.navItems)
      });
    }
  },

  resetNavItems(navItems) {
    eachNavItem(navItems, item => {
      let keyPath = item.get('keyPath');
      navItems = navItems.setIn(keyPath.push('isActive'), false);
      navItems = navItems.setIn(keyPath.push('isSelected'), false);
    });
    return navItems;
  },

  onToggleNavItem(item, e) {
    e.preventDefault();
    let isOpen = item.get('isOpen');
    let keyPath = item.get('keyPath').push('isOpen');
    this.setState({
      navItems: this.state.navItems.setIn(keyPath, !isOpen)
    });
  },

  onSelectNavItem(item) {
    let keyPath = item.get('keyPath');
    let navItems = this.resetNavItems(this.state.navItems);
    // Active
    navItems = navItems.setIn(keyPath.push('isActive'), true);
    // Selected
    while (keyPath.size > 0) {
      // If the last key is a number, we have a nav item
      if (_.isNumber(keyPath.last())) {
        // If the nav item has children, open it
        if (navItems.hasIn(keyPath.push('children'))) {
          navItems = navItems.setIn(keyPath.push('isOpen'), true);
        }
        // Select the item
        navItems = navItems.setIn(keyPath.push('isSelected'), true);
      }
      // Keep selecting/opening the ancestors
      keyPath = keyPath.pop();
    }
    this.setState({
      navItems
    });
  },

  shouldShowToUserType(item) {
    if (!item.has('internal')) return true;
    let isExternal = this.state.isExternal;
    let isInternal = !isExternal;
    return _.some([
      isExternal && !item.get('internal'),
      isInternal && item.get('internal')
    ]);
  },

  shouldShowToRole(item) {
    if (!item.has('aura')) return true;
    let hasRegular = this.hasPreference('role', 'regular');
    let hasAura = this.hasPreference('role', 'aura');
    return _.some([
      hasRegular && !item.get('aura'),
      hasAura && item.get('aura')
    ]);
  },

  shouldShowNavItem(item) {
    return _.every([
      this.shouldShowToRole(item),
      this.shouldShowToUserType(item),
      Status.shouldDisplay(this.state.status, item.get('status'))
    ]);
  },

  showSettings(e) {
    e.preventDefault();
    if (this.state.isExternal) {
      return;
    }
    this.setState({showingSettings: true});
  },

  closeSettings() {
    this.setState({showingSettings: false});
    Prefs.storeViewed();
  },

  render() {
    let {contentClassName} = this.props;
    if (contentClassName === false) {
      contentClassName = '';
    } else {
      contentClassName = classNames(pf('site-content p-around--xx-large'), contentClassName);
    }
    return (
      <div>
        {this.renderBanner()}
          <main className={pf('site-main')} role="main">
            {this.renderAnchor()}
            {this.props.header}
            <BodyContent role={this.state.role} className={contentClassName}>
              {this.props.children}
            </BodyContent>
          </main>
          {this.renderNav()}
        {this.renderFooter()}
        <Settings isOpen={this.state.showingSettings} onClose={this.closeSettings} />
      </div>
    );
  },

  renderAnchor() {
    if (this.props.anchor) return this.props.anchor;
    if (this.props.anchorTitle) {
      return <Anchor title={this.props.anchorTitle} />;
    }
    return null;
  },

  renderBanner(banner) {
    return (
      <header className={pf('site-banner')} role="banner">
        <Link to="/">
          <span className={pf('site-logo')}>Salesforce</span>
          Design System
        </Link>
        <div className={pf('site-skip-content')}>
          <a href="#navigation">Skip to Navigation</a>
        </div>
      </header>
    );
  },

  renderNav(nav) {
    return (
      <nav id="navigation" className={pf('site-navigation')} role="navigation">
        {this.renderNavItems(this.state.navItems)}
      </nav>
    );
  },

  renderLink(item) {
    let label = this.renderLinkLabel(item);
    let handler = this.getNavItemHandler(item);
    if (!item.has('url') && !item.has('path')) {
      return <a href="#" onClick={handler}>{label}</a>;
    }
    if (item.has('url')) {
      return <a href={item.get('url')} onClick={handler}>{label}</a>;
    }
    let content = (
      <span className={pf('media media--center media--reverse')}>
        {this.renderNavItemIcons(item)}
        <span className={pf('media__body')}>
          {label}
        </span>
      </span>
    );
    if (item.has('children')) {
      return (
        <a href="#" onClick={handler}>{content}</a>
      );
    }
    return (
      <Link to={item.get('path')} onClick={handler}>
        {content}
      </Link>
    );
  },

  renderLinkLabel(item) {
    if (item.get('abbrTitle')) {
      return (
        <abbr title={item.get('abbrTitle')}>
          {item.get('label')}
        </abbr>
      );
    }
    return item.get('label');
  },

  getNavItemHandler(item) {
    switch (item.get('id')) {
    case 'settings':
      return this.showSettings;
    }
    if (item.get('hasChildren')) {
      return this.onToggleNavItem.bind(this, item);
    }
    return function() {};
  },

  renderNavItems(items, level) {
    level = level ? level : 0;
    items = items.filter(this.shouldShowNavItem, this).map(item => {
      let listItemClass = item.get('separator') ?
        'list__item has-divider' :
        'list__item';
      let className = classNames(listItemClass, {
        'is-open': item.get('isOpen'),
        'is-selected': item.get('isSelected'),
        'is-active': item.get('isActive'),
        'is-closed': !item.get('isOpen') && item.get('hasChildren')
      });
      return (
        <li className={pf(className)} key={item.get('id')}>
          {this.renderLink(item)}
          {item.get('hasChildren') && item.get('isOpen')
            ? this.renderNavItems(item.get('children'), level + 1)
            : null
          }
        </li>
      );
    });
    let classnames = classNames('list--vertical has-block-links', {
      'is-nested': level > 0
    });
    return (
      <ul className={pf(classnames)}>
        <CSSTransitionGroup transitionName="site-fade-transition">
          {items.toArray()}
        </CSSTransitionGroup>
      </ul>
    );
  },

  renderNavItemIcons(item) {
    if (!item.get('hasChildren')) return null;
    let direction = item.get('isOpen') ? 'down' : 'right';
    return (
      <span className={pf('media__figure')}>
        <SvgIcon sprite="utility" symbol={direction} className={`icon icon__svg icon-utility-${direction} icon--small icon-text-default`} />
      </span>
    );
  },

  renderFooter(footer) {
    let versionDateBuildString;
    if (version.travisJobNumber && version.travisJobNumber !== 'NOT_SET') {
      versionDateBuildString = `Version ${version.sldsVersion}. Last Updated on ${ version.dateNow}. Travis build ${version.travisJobNumber}.`;
    } else {
      versionDateBuildString = `Version ${version.sldsVersion}. Last Updated on ${version.dateNow}.`;
    }
    return (
      <footer className={pf('site-contentinfo grid wrap site-text-longform text-body--small')} role="contentinfo">
        <p className={pf('col--padded size--1-of-1 shrink-none large-size--2-of-3')}>
          Copyright &copy; 2015 <span className={pf('site-name')}>Sales<i>f</i>orce</span>. <CTALink href="http://salesforce.com/company/legal/intellectual.jsp" ctaEventName='copyright'>All rights reserved</CTALink>. {versionDateBuildString}
        </p>
        <p className={pf('col--padded size--1-of-1 shrink-none large-size--1-of-3')}>
          <a className="site-social-twitter" href="http://twitter.com/salesforceux">Twitter</a>
          <a className="site-social-dribbble" href="http://dribbble.com/salesforce">Dribbble</a>
          <a className="site-social-github" href="https://github.com/salesforce-ux/design-system">GitHub Repository</a>
        </p>
      </footer>
    );
  }

});
