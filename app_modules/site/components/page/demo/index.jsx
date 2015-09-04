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
import Heading from 'ui/components/heading/index.react';
import classNames from 'classnames';
import version from '.generated/site.version';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;
import { Link } from 'react-router';


class Demo extends React.Component {

  render() {
    return (
      <div className={pf('grid grid--frame nowrap app-demo')}>
        {this.renderBanner()}
        {this.renderNav()}
        <section className={pf('stage grid grid--vertical nowrap')}>
          <div className={pf('region region--top shrink-none')}>
            {this.renderAnchor()}
          </div>
          <main className={pf('stage-main grid grid--align-spread nowrap')} role="main">
            <div className={pf('region region--main grow')}>
              {this.props.children}
            </div>
            {this.renderSidebar()}
          </main>
        </section>
      </div>
    );
  }

  renderBanner() {
    return (
      <header className={pf('header')} role="banner">
        <div className={pf('grid')}>
          {this.renderBannerLeft()}
          {this.renderBannerRight()}
        </div>
      </header>
    );
  }

  renderBannerLeft() {
    return (
      <div className={pf('has-flexi-truncate align-middle')}>
        <div className={pf('grid')}>
          <span className={pf('site-logo shrink-none')}></span>
          <Link className={pf('truncate align-middle')} to="home">Back to Salesforce Design</Link>
        </div>
      </div>
    );
  }

  renderBannerRight() {
    let versionDateBuildString;
    if (version.travisJobNumber && version.travisJobNumber !== 'NOT_SET') {
      versionDateBuildString = `Version ${version.sldsVersion}. Last Updated on ${ version.dateNow}. Travis build ${version.travisJobNumber}.`;
    } else {
      versionDateBuildString = `Version ${version.sldsVersion}. Last Updated on ${version.dateNow}.`;
    }
    return (
      <span className={pf('no-flex align-middle version-number')}>
        <span className={pf('truncate site-text-heading--label')}>{versionDateBuildString}</span>
      </span>
    );
  }

  renderNav(content=this.renderNavItems(this.getNavItems())) {
    return (
      <nav id="navigation" className={pf('stage-left')} role="navigation">
        {content}
      </nav>
    );
  }

  getNavItems() {
    return [
      { url: '/a', label: 'Nav Item A' }
    ];
  }

  renderNavItems(items, level) {
    level = level ? level : 0;
    items = items.map(item => {
      return (
        <li className={pf('list__item')} key={item.label}>
          <a href={item.url}>
            <span className={pf('media media--center media--reverse')}>
              <span className={pf('media__body')}>
                {item.label}
              </span>
            </span>
          </a>
          {item.children ? this.renderNavItems(item.children, level + 1) : null}
        </li>
      );
    });
    const classnames = classNames('list--vertical has-block-links', {
      'nested': level > 0
    });
    return (
      <ul className={classnames}>
        {items}
      </ul>
    );
  }

  renderAnchor() {
    return (
      <div className={pf('page-header page-header--obj-home')}>
        <div className={pf('grid')}>
          <div className={pf('col has-flexi-truncate')}>
            {this.renderAnchorBreadcrumb()}
            <div className={pf('grid')}>
              <div className={pf('grid type-focus no-space')}>
                {this.renderAnchorHeading()}
              </div>
            </div>
          </div>
        </div>
        {this.renderAnchorSubHeading()}
      </div>
    );
  }

  renderAnchorBreadcrumb(content='Breadcrumb') {
    return (
      <Heading flavor="label">
        {content}
      </Heading>
    );
  }

  renderAnchorHeading(content='Page Heading') {
    return (
      <Heading flavor="medium" className={pf('truncate')}>
        {content}
      </Heading>
    );
  }

  renderAnchorSubHeading(content='10 items, sorted by name') {
    return (
      <p className={pf('text-body--small anchor__detail')}>
        {content}
      </p>
    );
  }

  renderSidebar(content='Sidebar Region') {
    return (
      <div className={pf('region region--sidebar shrink-none')} role="complementary">
        {content}
      </div>
    );
  }

}

export default Demo;
