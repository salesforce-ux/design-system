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
import SvgIcon from 'app_modules/ui/svg-icon';
import categories from '.generated/ui.icons';
import CTALink from 'app_modules/site/components/cta-link';
import classNames from 'classnames';
import Sticky from 'app_modules/site/components/sticky';
import _ from 'lodash';
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

class Icons extends React.Component {

  constructor(props) {
    super(props);
    let icons = [];
    categories.forEach(category => {
      icons = [];
      let customIcons = [];
      let matchCustom = new RegExp('custom\\d+');
      category.icons.map(icon => {
        if (matchCustom.test(icon.symbol)) customIcons.push(icon);
        else icons.push(icon);
      });
      customIcons.sort(function(a, b){
        let one = parseInt(a.symbol.match(/\d+/).toString());
        let two = parseInt(b.symbol.match(/\d+/).toString());
        return one - two;
      });
      category.icons = icons.concat(customIcons);
    });
    this.state = {
      categories,
      categoriesFiltered: categories
    };
  }

 onSearchChange(e) {
  const query = e.currentTarget.value;
  const {categories} = this.state;
  let categoriesFiltered = categories;
  if (query) {
    categoriesFiltered = categories
      .map(category => {
        return _.assign({}, category, {
          icons: category.icons.filter(icon => {
            return new RegExp(query, 'i').test(icon.symbol);
          })
        });
      })
      .filter(category => category.icons.length > 0);
  }
  this.setState({
    query,
    categoriesFiltered
  });
}

  renderHeader() {
    return (
      <Sticky>
        <div className={pf('site-tools grid grid--align-spread')}>
          <div className={pf('col align-middle shrink p-vertical--medium')}>
            <label className={pf('assistive-text')} htmlFor="find-icon-input">Find Icon</label>
            <input
              className={pf('input')}
              id="find-icon-input"
              type="search"
              arial-label="text-input"
              placeholder="Find Icon"
              onChange={this.onSearchChange.bind(this)} />
          </div>
          <div className={pf('col align-middle shrink')}>
            <div className={pf('tabs tabs--default')} role="tablist">
              <ul className={pf('tabs__nav')} role="presentation"></ul>
            </div>
          </div>
        </div>
      </Sticky>
    );
  }
  render() {
    return (
      <div>
        <Anchor title="Icons" />
        {this.renderHeader()}
        <div className={pf('p-around--xx-large grid wrap site-content')}>
          <Sticky className={pf('col size--1-of-1 large-size--1-of-6 large-order--2')} fixedElements=".site-tools">
            <div className={pf('site-menu--jump-links')}>
              <h3 className="site-text-heading--label">Categories</h3>
              <ul className={pf('list--vertical has-block-links')}>
                {this.renderCategoryNav()}
              </ul>
            </div>
          </Sticky>
          <div className={pf('col col-rule--right site-text-longform size--1-of-1 large-size--5-of-6 large-order--1 site-main-content')}>
            <p className={pf('site-text-introduction m-bottom--reset container--medium')}>
              Rendering icons in SVG may require an
              additional <CTALink href="/resources/lightning-svg-icon-component-helper" ctaEventName='lightning-svg-icon-helper'>Lightning helper component</CTALink>.
            </p>
            {this.renderCategories()}
          </div>
        </div>
      </div>
    );
  }

  renderCategories() {
    return this.state.categoriesFiltered.map(category => {
      return (
        <div key={category.name}>
          <h2 id={category.name} className={pf('p-top--xx-large site-text-heading--large site-text-heading--callout icon-group-title')}>
            {`${category.name} Icons`}
          </h2>
          {/* This is only outputing text without a paragraph. Can we fix? */}
          <div className={pf('container--medium')} dangerouslySetInnerHTML={{__html: category.description}} />
          <ul className={pf(classNames(`${category.name}__icons`,'m-top--x-large grid wrap icon-grid'))}>
            {this.renderIcons(category)}
          </ul>
        </div>
      );
    });
  }

  renderCategoryNav() {
    const {categoriesFiltered} = this.state;
    let capitalize = (e) => { return e.charAt(0).toUpperCase() + e.slice(1); };
    return categoriesFiltered.map(category => {
      const modCategory = capitalize(category.name);
      return (
        <li className={pf('list__item')} key={category.name}>
          <a href={`#${category.name}`}>
            {modCategory}
          </a>
        </li>
      );
    });
  }

  renderIcons(category) {
    let isAction = category.name === 'action';
    let wrapperClassName = (icon) => isAction ? icon.className : null;
    return category.icons.map(icon => {
      return (
        <li className={pf('col--padded m-bottom--x-large')} key={icon.symbol}>
          <figure>
            <span className={pf(classNames('icon__container', wrapperClassName(icon)))}>
              <SvgIcon sprite={icon.sprite} symbol={icon.symbol} className={pf(classNames(`icon icon__svg ${icon.className}`, {'icon--large': !isAction}))} />
            </span>
            <figcaption className={pf('p-top--x-small text-body--small')}>{icon.symbol}</figcaption>
          </figure>
        </li>
      );
    });
  }
}

export default (
  <PageBody contentClassName={false}>
    <Icons />
  </PageBody>
);
