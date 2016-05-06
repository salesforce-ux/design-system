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
import Anchor from 'app_modules/site/components/page/anchor';
import StickyNav from 'app_modules/site/components/sticky/nav';
import SvgIcon from 'app_modules/ui/svg-icon';
import ComponentFlavor from './flavor';
import TableYAML from './table-yaml';
import { prefix as pf } from 'app_modules/ui/util/component';
import { pathToURL } from 'app_modules/util/string';
import classNames from 'classnames';

export default React.createClass({

  defaultProps: {
    component: React.PropTypes.object,
    docs: React.PropTypes.node
  },

  render() {
    const { component } = this.props;
    return (
      <div>
        <Anchor
          title={component.title}
          actions={this.renderComponentOverviewLink()}
          path={`/${component.path}`} />
        <div className={pf('site-content grid wrap large-nowrap')}>
          {this.renderFlavorsNav()}
          <div className={pf('site-main-content col col--rule-right size--1-of-1 large-size--5-of-6 large-order--1')}>
            {this.renderIntro()}
            {this.renderFlavors()}
            <h3 id="overview" className={pf('site-text-heading--large p-top--x-large')}>Component Overview</h3>
            {this.renderDocs()}
            {this.renderInfoTable()}
          </div>
        </div>
      </div>
    );
  },

  renderFlavorsNav() {
    const flavors = this.props.component.flavors
      .map(flavor => {
        let states = null;
        if (flavor.example && _.isArray(flavor.example.states)) {
          states = (
            <ul className={pf('site-states list--vertical')}>
              {flavor.example.states.map((state, index) => {
                const className = classNames('list__name', {
                  [pf('is-active')]: index === 0
                });
                return (
                  <li className={className} key={state.id}>
                    <a
                      href={`/${pathToURL(flavor.path)}/_${state.id}.html?iframe`}
                      data-slds-flavor-states={flavor.uid}
                      data-slds-flavor-href={`#flavor-${flavor.id}`}>
                      {state.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        }
        return (
          <li className={pf('list__name site-states-parent')} key={flavor.uid} data-slds-status={flavor.status}>
            <a href={`#flavor-${flavor.id}`}>
              {flavor.title}
              { states ? <SvgIcon className={pf('icon icon-text-default icon__svg align-middle col--bump-left')} sprite="utility" symbol="down" /> : null }
            </a>
            {states}
          </li>
        );
      });
    return (
      <StickyNav>
        <div className={pf('site-menu--jump-links')}>
          <h3 className="site-text-heading--label">Variants & States</h3>
          <ul className={pf('list--vertical has-block-links--space')}>
            {flavors}
          </ul>
        </div>
      </StickyNav>
    );
  },

  renderIntro() {
    return this.props.docs && this.props.docs.intro ? this.props.docs.intro : null;
  },

  renderDocs() {
    return this.props.docs ? this.props.docs.default : null;
  },

  renderComponentOverviewLink() {
    let info = this.props.component.info;
    if (info.table || info.tableYaml) {
      return (
        <div className={pf('align-middle')}>
          <a className={pf('button button--inverse')} href="#overview">Component Overview</a>
        </div>
      );
    } else {
      return null;
    }
  },

  renderFlavors() {
    return this.props.component.flavors.map(flavor => {
      return (
        <ComponentFlavor {...this.props} key={flavor.uid} flavor={flavor} />
      );
    });
  },

  renderInfoTable() {
    const { component } = this.props;
    if (component.info.tableYaml) {
      return <TableYAML data={component.info.tableYaml} />;
    } else if (component.info.table) {
      return <div className="site-text-longform" dangerouslySetInnerHTML={component.info.table}/>;
    } else {
      return null;
    }
  }

});
