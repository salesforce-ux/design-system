/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Anchor from 'app_modules/site/components/page/anchor';
import Sticky from 'app_modules/site/components/sticky';
import ComponentFlavor from './flavor';
import Status from 'app_modules/site/util/component/status';
import TableYAML from './table-yaml';
import PrefsMixin from 'app_modules/site/preferences/mixin';
import { prefix as pf } from 'app_modules/ui/util/component';

const ComponentBody = React.createClass({

  mixins: [PrefsMixin],

  render() {
    const { component } = this.props;
    return (
      <div>
        <Anchor title={component.title} />
        <div className={pf('site-content p-around--xx-large grid wrap')}>
          {this.renderFlavorsDropDown()}
          <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--5-of-6 large-order--1')}>
            {this.renderIntro()}
            {this.renderFlavors()}
            {this.renderDocs()}
            {this.renderInfoTable()}
          </div>
        </div>
      </div>
    );
  },

  renderFlavorsDropDown() {
    const flavors = this.props.component.flavors.filter(this.shouldDisplayFlavor, this).map(flavor => {
      return (
        <li className={pf('list__name')} key={flavor.uid}>
          <a href={`#${flavor.id}`}>
            {flavor.title}
          </a>
        </li>
      );
    });
    return (

      <Sticky className={pf('col size--1-of-1 large-size--1-of-6 large-order--2')}>
        <div className={pf('site-menu--jump-links')}>
          <h3 className="site-text-heading--label">Variants</h3>
          <ul className={pf('list--vertical has-block-links')}>
            {flavors}
            {this.renderComponentOverviewLink()}
          </ul>
        </div>
      </Sticky>
    );
  },

  renderIntro() {
    let { docs } = this.props.elements;
    return docs && docs.intro ? docs.intro : null;
  },

  renderDocs() {
    let { docs } = this.props.elements;
    return docs ? this.props.elements.docs.default : null;
  },

  renderComponentOverviewLink() {
    let info = this.props.component.info;
    if (info.table || info.tableYaml) {
      return (
        <li className={pf('list__name has-divider--top-space')}>
          <a href="#overview">
            Component Overview
          </a>
        </li>
      );
    } else {
      return null;
    }
  },

  renderFlavors() {
    return this.props.component.flavors.filter(this.shouldDisplayFlavor, this).map(flavor => {
      return (
        <ComponentFlavor {...this.props} key={flavor.uid} flavor={flavor} />
      );
    });
  },

  renderInfoTable() {
    const {component} = this.props;

    if (component.info.tableYaml) {
      return <TableYAML data={component.info.tableYaml} />;
    } else if (component.info.table) {
      return <div className="site-text-longform" dangerouslySetInnerHTML={component.info.table}/>;
    } else {
      return null;
    }
  },

  shouldDisplayFlavor(flavor) {
    return Status.shouldDisplay(this.state.status, flavor.status);
  }

});

export default ComponentBody;
