/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import Anchor from 'app_modules/site/components/page/anchor';
import Sticky from 'app_modules/site/components/sticky';
import _ from 'lodash';
import classNames from 'classnames';
import { logInputEvent } from 'app_modules/site/util/localytics';
import CTALink from 'app_modules/site/components/cta-link';
import { Link } from 'react-router';
import { prefix as pf } from 'app_modules/ui/util/component';
import Prefs from 'app_modules/site/preferences';
import IfPref from 'app_modules/site/preferences/component';
import PrefsMixin from 'app_modules/site/preferences/mixin';

import releases from '.generated/ui.tokens';
import categories from './_categories';

const nameFormats = [
  { role: Prefs.roles.regular, name: 'Sass', formatter: (name) => `$${_.kebabCase(name)}` },
  { role: Prefs.roles.aura, name: 'Lightning', formatter: (name) => `t(${_.camelCase(name)})` }
];

const nameSegments = _.memoize(_.words);

const Tokens = React.createClass({
  mixins: [PrefsMixin],

  getInitialState: function() {
    const release = releases[0];
    const group = release.groups[0];
    const tokensByCategory = this.getTokensByCategory(group);
    return {
      release, group,
      tokensByCategory,
      tokensByCategoryFiltered: tokensByCategory
    };
  },

  format: function() {
    return _.find(nameFormats, { role: this.state.role });
  },

  getTokensByCategory: function(group) {
    const overrides = ['small', 'medium', 'large'];
    const categories = {};
    group.sets.forEach(set => {
      set.contents.propKeys.forEach(tokenName => {
        const token = set.contents.props[tokenName];
        const category = categories[token.category] = categories[token.category] || [];
        const existingToken = _.find(category, { name: tokenName });
        if (existingToken) {
          const size = _.last(set.name.split('-'));
          if (_.includes(overrides, size)) {
            const tokenOverrides = existingToken.overrides = existingToken.overrides || {};
            tokenOverrides[size] = token;
          }
        } else {
          category.push(token);
        }
      });
    });
    return categories;
  },

  logSearchChange: function(query) {
    logInputEvent('design-token-search', { format: this.format().name, query: query });
  },

  onSearchChange: function(e) {
    let {tokensByCategory} = this.state;
    const target = event.target || event.currentTarget;
    const query = target.value;
    const querySegments = _.words(query);
    if (query) {
      tokensByCategory = _.mapValues(tokensByCategory, tokens => {
        return tokens.filter(token => {
          const tokenSegments = nameSegments(token.name);
          let matches = 0;
          for (let q of querySegments) {
            for (let t of tokenSegments) {
              if (new RegExp(q, 'i').test(t)) {
                matches++;
                break;
              }
            }
          }
          return matches === querySegments.length;
        });
      });
      tokensByCategory = _.pick(tokensByCategory, tokens => {
        return tokens.length > 0;
      });

      if (this.logSearchChangeDebounce) {
        clearTimeout(this.logSearchChangeDebounce);
      }
      this.logSearchChangeDebounce = setTimeout(() => {
        this.logSearchChangeDebounce = null;
        this.logSearchChange(query);
      }, 600);
    }
    this.setState({
      query,
      tokensByCategoryFiltered: tokensByCategory
    });
  },

  render: function() {
    return (
      <div>
        {this.renderAnchor()}
        {this.renderHeader()}
        <div className={pf('p-around--xx-large grid wrap site-content')}>
          <Sticky className={pf('col size--1-of-1 large-size--1-of-6 large-order--2')} fixedElements=".site-tools">
            <div className="site-menu--jump-links">
              <h3 className="site-text-heading--label">Categories</h3>
              <ul className={pf('list--vertical has-block-links')}>
                {this.renderCategories()}
              </ul>
            </div>
          </Sticky>
          <div className={pf('col col-rule--right size--1-of-1 large-size--5-of-6 large-order--1 site-main-content')}>
            {this.renderInfo()}
            {this.renderTokens()}
          </div>
        </div>
      </div>
    );
  },

  renderAnchor: function() {
    return (
      <Anchor title="Design Tokens" />
    );
  },

  renderHeader: function() {
    const {release} = this.state;
    const options = release.groups.map(group => {
      return <option key={group.name} value={group.name}>{group.label}</option>;
    });
    return (
      <Sticky>
        <div className={pf('site-tools grid grid--align-spread')}>
          <div className={pf('col align-middle p-vertical--medium')}>
            <label className={pf('assistive-text')} htmlFor="find-token-input">Find Token</label>
            <input
              className={pf('input')}
              id="find-token-input"
              type="search"
              arial-label="text-input"
              placeholder="Find Token"
              onChange={this.onSearchChange} />
          </div>
        </div>
      </Sticky>
    );
  },

  renderCategories: function() {
    const {tokensByCategoryFiltered} = this.state;
    return categories.filter(category => {
      return tokensByCategoryFiltered[category.key];
    }).map(category => {
      return (
        <li className={pf('list__item')} key={category.key}>
          <CTALink href={`#category-${category.key}`}
              ctaEventName='tokens-category-click'
              ctaExtraValues={{ category: category.key, format: this.format().name }}>
            {category.label}
          </CTALink>
        </li>
      );
    });
  },

  renderInfo: function() {
    if (this.state.query) { return null; }
    return [
      <div className={pf('container--medium')} key="info">
        <p className="site-text-introduction">
          Design tokens are the visual design atoms of the design system &mdash;
          specifically, they are named entities that store visual design
          attributes. We use them in place of hard-coded values (such as
          hex values for color or pixel values for spacing) in order to
          maintain a scalable and consistent visual system
          for <abbr title="User Interface">UI</abbr> development.
        </p>
        <IfPref role="aura">
          <div>
            <h3 className={pf('site-text-heading--label')}>Form Factor Overrides</h3>
            <p>
              Design tokens default to the <strong>Small</strong> form
              factor, usually viewed on mobile devices. The form factors
              for <strong>Medium</strong> (usually viewed on tablets)
              and <strong>Large</strong> (desktop browsers) use their
              overridden values; if no override exists, it will default to
              the Small form factor token.
            </p>
          </div>
        </IfPref>
      </div>
    ];
  },

  renderTokens() {
    const {tokensByCategoryFiltered} = this.state;
    const nameFormat = this.format();
    return categories.filter(category => {
      return tokensByCategoryFiltered[category.key];
    }).map(category => {
      const tokens = (tokensByCategoryFiltered[category.key] || []).filter(token => {
        return token.deprecated !== true
      })
      return category.render(tokens, {
        nameFormat,
        role: this.state.role
      });
    });
  }
});

export default (
  <PageBody contentClassName={false}>
    <Tokens />
  </PageBody>
);
