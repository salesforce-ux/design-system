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

import globals from 'app_modules/global';
import Anchor from 'app_modules/site/components/page/anchor';
import SvgIcon from 'app_modules/ui/svg-icon';
import CTALink from 'app_modules/site/components/cta-link';
import { prefix as pf } from 'app_modules/ui/util/component';
import navigation, { getActiveNavItems } from 'app_modules/site/navigation';
import Status from 'app_modules/site/util/component/status';
import moment from 'moment';

/**
 * Add extra meta data to the nav items
 *
 * @param {object} item
 * @param {array} activeItems
 * @returns {object}
 */
const mapNav = (item, activeItems = []) => {
  const hasChildren = _.isArray(item.children) && item.children.length;
  const isSelected = _.includes(activeItems.map(i => i.path), item.path);
  const isOpen = hasChildren && isSelected;
  const isActive = activeItems.length
    ? item.path === _.last(activeItems).path : false;
  const children = hasChildren
    ? { children: item.children.map(i => mapNav(i, activeItems)) }
    : null;
  return _.assign({}, item, children, {
    hasChildren, isSelected, isOpen, isActive
  });
};

export default React.createClass({

  propTypes: {
    path: React.PropTypes.string,
    anchor: React.PropTypes.node,
    anchorTitle: React.PropTypes.string,
    header: React.PropTypes.node,
    contentClassName: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool
    ])
  },

  getInitialState() {
    let nav = mapNav(
      navigation(),
      getActiveNavItems(navigation(), this.props.path)
    );
    return {
      navItems: nav.children
    };
  },

  shouldShowNavItem(item) {
    return this.shouldShowNavItemToUserType(item);
  },

  shouldShowNavItemToUserType(item) {
    if (typeof item.internal === 'undefined') return true;
    return !!process.env.INTERNAL === item.internal;
  },

  render() {
    let { contentClassName } = this.props;
    if (contentClassName === false) {
      contentClassName = '';
    } else {
      contentClassName = classNames(
        pf('site-content p-around--xx-large'),
        contentClassName
      );
    }
    return (
      <div>
        {this.renderBanner()}

        <main className="site-main" role="main">
          {this.renderInternalBanner()}
          {this.renderAnchor()}
          {this.props.header}
          <div className={contentClassName}>
            {this.props.children}
          </div>
        </main>
        {this.renderNav()}
        {this.renderFooter()}
      </div>
    );
  },

  renderInternalBanner() {
    if (!process.env.INTERNAL) return;
    const options = Object.keys(Status.states).map(s => {
      const status = Status.states[s];
      const label = _.words(status).map(_.upperFirst).join(' ');
      return <option value={status}>Component Status: {label}</option>;
    });
    return (
      <div className={pf('site-banner-badge grid')}>
        <span>Internal Only ({process.env.INTERNAL_RELEASE_NAME})</span>
      </div>
    );
  },

  renderSearch() {
    if (!globals.displaySearch) return;
    return (
      <form id="search" aria-hidden="true" noValidate="novalidate" className="searchbox">
        <div role="search" className="searchbox__wrapper">
          <label htmlFor="docsearch" className="slds-assistive-text">Search: type text, then use the up and down arrows to navigate results</label>
          <input id="docsearch" type="search" name="search" placeholder="Search" autoComplete="off" required="required" className="searchbox__input slds-input" />
          <button type="submit" className="slds-assistive-text">
            Submit your search query
          </button>
          <button type="reset" title="Clear the search query" className="searchbox__reset hide">
            <svg role="img" aria-label="Reset">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close" />
            </svg>
          </button>
        </div>
      </form>
    );
  },

  renderAnchor() {
    if (this.props.anchor) return this.props.anchor;
    if (this.props.anchorTitle) {
      return <Anchor title={this.props.anchorTitle} path={this.props.path} />;
    }
    return null;
  },

  renderBanner() {
    return (
      <header className="site-banner" role="banner">
        <a href="/">
          <span className={pf('site-logo')}>Salesforce</span>
          Design System
        </a>
        <div className={pf('site-skip-content')}>
          <a href="#navigation">Skip to Navigation</a>
        </div>
      </header>
    );
  },

  renderNav() {
    return (
      <div className={classNames('site-navigation', globals.displaySearch ? 'site-navigation--has-search' : '')}>
        {this.renderSearch()}

        <nav id="navigation" role="navigation" tabIndex="-1">
          {this.renderNavItems(this.state.navItems)}
        </nav>
      </div>
    );
  },

  renderNavItems(items, level = 0) {
    items = items.filter(item => this.shouldShowNavItem(item)).map(item => {
      const listItemClass = item.separator ?
        'list__item has-divider--top-space' :
        'list__item';
      const className = classNames(listItemClass, {
        'is-open': item.isOpen,
        'is-selected': item.isSelected,
        'is-active': item.isActive,
        'is-closed': !item.isOpen && item.hasChildren
      });
      const dataProps = {'data-slds-status': item.status};
      if (item.hasChildren) {
        dataProps['data-slds-nav-children'] = true;
      }
      return (
        <li className={pf(className)} key={item.uid} {...dataProps}>
          {this.renderLink(item)}
          {item.hasChildren
            ? this.renderNavItems(item.children, level + 1)
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
        {items}
      </ul>
    );
  },

  renderLink(item) {
    let label = this.renderLinkLabel(item);
    let renderAnchor = (props, content = label) =>
      <a href="javascript:void(0);" {...props}>{content}</a>;
    if (_.every(['url', 'path', 'hash'], key => !item[key])) {
      return renderAnchor();
    }
    if (item.url) return renderAnchor({ href: item.url });
    let content = (
      <span className={pf('media media--center')}>
        <span className={pf('media__body')}>
          {label}
        </span>
        {this.renderNavItemIcons(item)}
      </span>
    );
    if (item.hasChildren) {
      return renderAnchor({}, content);
    }
    return renderAnchor({ href: item.path }, content);
  },

  renderLinkLabel(item) {
    let { label, abbrTitle } = item;
    return abbrTitle
      ? <abbr title={abbrTitle}>{label}</abbr>
      : label;
  },

  renderNavItemIcons(item) {
    if (!item.hasChildren) return null;
    let direction = item.isOpen ? 'down' : 'right';
    return (
      <span className={pf('media__figure--reverse')}>
        <SvgIcon sprite="utility" symbol={direction} className={`icon icon__svg icon-utility-${direction} icon--small icon-text-default`} />
      </span>
    );
  },

  renderFooter(footer) {
    const updated = moment().format('MMMM Do YYYY, h:mm a');
    const versionDateBuildString = `Version ${process.env.SLDS_VERSION}. Last Updated on ${updated}.`;
    return (
      <footer className={pf('site-contentinfo grid wrap site-text-longform text-body--small')} role="contentinfo">
        <p className={pf('p-horizontal--x-large size--1-of-1 shrink-none large-size--2-of-3')}>
          Copyright &copy; 2015-2016 <span className={pf('site-name')}>Sales<i>f</i>orce. </span>
          <CTALink
            href="http://salesforce.com/company/legal/intellectual.jsp"
            eventType="copyright">
            All rights reserved
          </CTALink>. {versionDateBuildString}
        </p>
        <p className={pf('p-horizontal--x-large text-align--right size--1-of-1 shrink-none large-size--1-of-3')}>
          <a className="site-social-twitter" href="http://twitter.com/salesforceux" title="Follow @salesforceux on Twitter">Twitter</a>
          <a className="site-social-dribbble" href="http://dribbble.com/salesforce" title="Find us on Dribbble">Dribbble</a>
          <a className="site-social-github" href="https://github.com/salesforce-ux/design-system" title="Get the code on GitHub">GitHub Repository</a>
        </p>
      </footer>
    );
  }

});
