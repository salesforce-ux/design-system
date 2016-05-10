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
import PageBody from 'app_modules/site/components/page/body';
import Sticky from 'app_modules/site/components/sticky';
import StickyNav from 'app_modules/site/components/sticky/nav';
import classNames from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

import releases from '.generated/ui.tokens';
import categories from './_categories';

const nameFormats = [
  {
    role: 'regular',
    name: 'Sass',
    formatter: name => `$${_.kebabCase(name)}`
  },
  {
    role: 'aura',
    name: 'Lightning',
    formatter: name => `t(${_.camelCase(name)})`
  }
];

const Tokens = React.createClass({

  getInitialState() {
    const release = releases[0];
    const group = release.groups[0];
    const tokensByCategory = this.getTokensByCategory(group);
    return {
      role: 'regular',
      release,
      group,
      tokensByCategory
    };
  },

  format() {
    return _.find(nameFormats, { role: this.state.role });
  },

  getTokensByCategory(group) {
    const tokens = group.sets.reduce((tokens, set) =>
      tokens.concat(set.contents.propKeys.map(key => set.contents.props[key]))
    , []);
    return _.groupBy(tokens, 'category');
  },

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className={pf('p-around--xx-large grid wrap site-content')}>
          <StickyNav fixedElementsAbove=".site-tools">
            <div className="site-menu--jump-links">
              <h3 className="site-text-heading--label">Categories</h3>
              <ul className={pf('list--vertical has-block-links')}>
                {this.renderCategories()}
              </ul>
            </div>
          </StickyNav>
          <div className={pf('col col-rule--right size--1-of-1 large-size--5-of-6 large-order--1 site-main-content')}>
            {this.renderInfo()}
            {this.renderTokens()}
          </div>
        </div>
      </div>
    );
  },

  renderHeader() {
    const {release} = this.state;
    const options = release.groups.map(group => {
      return <option key={group.name} value={group.name}>{group.label}</option>;
    });
    const formatSelect = !process.env.INTERNAL
      ? null
      : <div className={pf('col align-middle p-vertical--medium')}>
          <select className={pf('select')} data-slds-tokens-name-format />
        </div>;
    return (
      <Sticky>
        <div className={pf('site-tools grid grid--align-spread')}>
          <div className={pf('col align-middle p-vertical--medium')}>
            <label className={pf('assistive-text')} htmlFor="find-token-input">Find Token</label>
            <input
              className={pf('input')}
              id="find-token-input"
              type="search"
              placeholder="Find Token" />
          </div>
          {formatSelect}
        </div>
      </Sticky>
    );
  },

  renderCategories() {
    const { tokensByCategory } = this.state;
    return categories
      .filter(category => tokensByCategory[category.key])
      .map(category =>
        <li className={pf('list__item')} key={category.key}>
          <a href={`#category-${category.key}`}>
            {category.label}
          </a>
        </li>
      );
  },

  renderInfo() {
    if (this.state.query) { return null; }
    return [
      <div className={pf('container--large')} key="info">
        <p className="site-text-introduction">
          Design tokens are the visual design atoms of the design system &mdash;
          specifically, they are named entities that store visual design
          attributes. We use them in place of hard-coded values (such as
          hex values for color or pixel values for spacing) in order to
          maintain a scalable and consistent visual system
          for <abbr title="User Interface">UI</abbr> development.
        </p>
      </div>
    ];
  },

  renderTokens() {
    const { tokensByCategory } = this.state;
    const nameFormat = this.format();
    return categories
      .filter(category => tokensByCategory[category.key])
      .map(category => {
        const tokens = tokensByCategory[category.key]
          .filter(token => token.deprecated !== true);
        return category.render(tokens, {
          nameFormat,
          role: this.state.role
        });
      });
  }

});

export default (
  <PageBody anchorTitle="Design Tokens" contentClassName={false}>
    <Tokens />
  </PageBody>
);
