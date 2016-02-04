/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';
import Prism from 'app_modules/site/vendor/prism';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';
import _ from 'lodash';

import Heading from 'app_modules/site/components/page/heading';
import Tabs from 'ui/components/tabs/index.react';

import globals from 'app_modules/global';
import whitelistUtilities from '.generated/whitelist-utilities.js';

/**
 * Custom Prism addition to the markup syntax that adds a "utility-class" class
 * to any attribute value tokens that are contained in whitelistUtilities
 */
Prism.languages.markup.tag.inside['attr-value'].inside['utility-class'] = whitelistUtilities
  .map(c => c.replace(/^\./, ''))
  .map(c => `${globals.cssPrefix}${c}`)
  .map(c => new RegExp(_.escapeRegExp(c)));

// Remove wrapping tag if it has the ".demo-only" class in it
// Note: this will also remove other classes too on that tag! :)
const demoPattern = /^\<([a-z]*?)[\s\S]*?class\=\"[^"]*demo-only[^"]*\"[\s\S]*?\>([\S\s]*?)\<\/\1\>$/;

/**
 * Hight a string of text based on the language
 *
 * @param {string} code
 * @param {string} language
 * @returns {string}
 */
function highlight(code, language) {
  return Prism.highlight(
    code.replace(demoPattern, (match, tag, content) => content),
    Prism.languages[language]
  );
}

/**
 * Return a list of tab objects for the "preview" section
 */
function getPreviewTabs() {
  return [{
    key: 'mobile',
    icon: 'phone_portrait',
    iconClass: 'phone-portrait',
    label: 'Small',
    formFactor: 'small'
  },{
    key: 'tablet',
    icon: 'tablet_portrait',
    iconClass: 'tablet-portrait',
    label: 'Medium',
    formFactor: 'medium'
  },{
    key: 'desktop',
    icon: 'desktop',
    iconClass: 'desktop',
    label: 'Large',
    formFactor: 'large'
  }];
}

class ComponentFlavor extends React.Component {

  constructor(props) {
    super(props);
    const { flavor } = props;
    // Get a list of preview tabs that should be displayed based
    // on the list provided by flavor.showFormFactors
    const previewTabs = getPreviewTabs().filter(tab => {
      const { showFormFactors: factors } = flavor;
      return _.isArray(factors) && !_.isEmpty(factors)
        ? _.includes(factors, tab.formFactor)
        : false;
    });
    this.state = {
      previewTabs,
      previewTabActive: previewTabs.length
        // If there is a default specified, use that
        ? (flavor.showFormFactorsDefault
          ? _.find(previewTabs, { formFactor: flavor.showFormFactorsDefault })
          // Otherwise, just use the last tab
          : _.last(previewTabs))
        : null,
      // If the component example has states, set the initial previewState
      previewState: _.has(flavor.example, 'states')
        ? _.first(flavor.example.states) : false,
      // Used for accessibility
      initialView: true
    };
  }

  render() {
    const { flavor } = this.props;
    return (
      <section className={pf('m-bottom--xx-large p-top--x-large')} data-slds-status={flavor.status}>
        <Heading type="h2" id={flavor.id} className={pf('site-text-heading--large site-text-heading--callout')}>
          {flavor.title}
          {this.renderBadge(flavor.status)}
        </Heading>
        <div className={pf('grid wrap grid--vertical-stretch')}>
          <h3 className={pf('assistive-text')}>Preview</h3>
          <div className={pf('col size--1-of-1 large-size--5-of-6 large-order--1 site-component-example')}>
            {this.renderPreview()}
            <h3 className={pf('assistive-text')}>Code</h3>
            {this.renderCode()}
            {this.renderInfo()}
          </div>
        </div>

      </section>
    );
  }

  renderBadge(status) {
    if (!status) return null;
    const words = _.words(status).join(' ');
    const statusBadgeType = _.words(status).join('-');
    const classes = classNames(pf('badge m-left--medium shrink-none align-middle'), 'badge--' + statusBadgeType);
    return (
      <span className={classes}>{words}</span>
    );
  }

  renderInfo() {
    const { flavor } = this.props;
    return flavor.info.markup ? (
      <div dangerouslySetInnerHTML={flavor.info.markup} />
    ) : null;
  }

  renderPreview() {
    if (!this.props.flavor.example) return null;
    const { flavor } = this.props;
    const { previewTabActive, previewTabs, previewState } = this.state;
    const className = classNames(pf('site-example--tabs'), {
      'site-example--tabs-initial-view': this.state.initialView
    });
    const src = previewState ? previewState.id : 'default';
    const iframe = (
      <iframe
        src={`/${flavor.path}/_${src}.html?iframe`}
        height="100%"
        id={`iframe-${flavor.uid}`}
        name={flavor.uid}
        ref="iframe"
        data-form-factor={previewTabActive ? this.state.previewTabActive.key : null}
        scrolling="no" />
    );
    const previewPanel = (
      <Tabs.Content
        id={`${flavor.uid}__preview-content`}
        className={pf('site-example--content m-bottom--xx-large scrollable--x')}
        aria-labelledby={previewTabActive ? `${flavor.uid}__preview-tab-${previewTabActive.key}` : null}>
        {iframe}
      </Tabs.Content>
    );
    // Only use tabs if there are more than 1
    return this.state.previewTabs.length > 1
      ? (
        <Tabs
          className={className}
          flavor="default"
          panel={previewPanel}
          selectedIndex={previewTabs.indexOf(previewTabActive)}>
          {this.renderPreviewTabs()}
        </Tabs>
      )
      : <div className={pf('site-bleed scrollable--x')}>{iframe}</div>;
  }

  renderPreviewTabs() {
    const { flavor } = this.props;
    return this.state.previewTabs.map((tab, index) => {
      const content = (
        <span>
          <SvgIcon sprite="utility" symbol={tab.icon} className={pf(`icon icon__svg icon-utility-${tab.iconClass} icon--x-small icon-text-default m-right--x-small`)} />
          {tab.label}
        </span>
      );
      return (
        <Tabs.Item
          key={tab.key}
          aria-controls={`${flavor.uid}__preview-content`}
          aria-describedby={flavor.uid}
          innerClass={pf('tabs--default__link')}
          data-form-factor={tab.key}
          data-controls={tab.key}
          id={`${flavor.uid}__preview-tab--${tab.key}`}
          content={content}
          initialView={this.state.initialView} />
      );
    });
  }

  renderCode() {
    const { flavor } = this.props;
    const className = 'language-markup';
    const code = flavor.exampleMarkup
      ? highlight(flavor.exampleMarkup, 'markup') : null;
    return (
      <div className={pf('site-code--content scrollable--x')}>
        <pre className={className}>
          <code
            id={`code-${flavor.uid}`}
            className={className}
            dangerouslySetInnerHTML={{__html: code}} />
        </pre>
      </div>
    );
  }

}

export default ComponentFlavor;
