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
        <div className={pf('select_container col--bump-left align-middle')}>
          <select
            id="status-dropdown"
            className={pf('select')}>
            {options}
          </select>
        </div>
      </div>
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
          <a href="#search">Skip to Search</a>
        </div>
      </header>
    );
  },

  renderNav() {
    return (
      <div className="site-navigation">
        <form id="search" tabIndex="-1" noValidate="novalidate" className="searchbox slds-m-bottom--small slds-m-horizontal--medium">
          <div role="search" className="searchbox__wrapper">
            <label htmlFor="docsearch" className="slds-assistive-text">Search: type text, then use the up and down arrows to navigate results</label>
            <input id="docsearch" type="search" name="search" placeholder="Search the docs" autoComplete="off" required="required" className="searchbox__input" />
            <button type="submit" title="Submit your search query" className="searchbox__submit">
              <svg role="img" aria-label="Search" dangerouslySetInnerHTML={{__html: `
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>
                `}} />
            </button>
            <button type="reset" title="Clear the search query." className="searchbox__reset hide">
              <svg role="img" aria-label="Reset" dangerouslySetInnerHTML={{__html: `
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>
                `}} />
            </button>
          </div>
        </form>

        <div className="svg-icons" style={{height: 0, width: 0, position: 'absolute', visibility: 'hidden'}}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"/></symbol>
            <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"/></symbol>
          </svg>
        </div>

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
      <a href="#" {...props}>{content}</a>;
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
