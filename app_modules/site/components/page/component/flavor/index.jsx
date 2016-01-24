/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import classNames from 'classnames';
import Prism from 'app_modules/site/vendor/prism';
import SvgIcon from 'app_modules/ui/svg-icon';
import Prefs from 'app_modules/site/preferences';
import svgFix from 'app_modules/site/util/ie/svg';
import { html as prettyHTML } from 'js-beautify';
import { prefix as pf } from 'app_modules/ui/util/component';
import { getHistory } from 'app_modules/site/navigation/history';
import _ from 'lodash';

import Heading from 'app_modules/site/components/page/heading';
import Tabs from 'ui/components/tabs/index.react';
import CTALink from 'app_modules/site/components/cta-link';

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

/**
 * Hight a string of text based on the language
 *
 * @param {string} code
 * @param {string} language
 * @returns {string}
 */
function highlight(code, language) {
  return Prism.highlight(code, Prism.languages[language]);
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

/**
 * Return a list of tab objects for the "code" section
 */
function getCodeTabs() {
  return [{
    key: 'html',
    label: 'HTML',
    language: 'markup',
    code: '',
    info: 'info.markup',
    roles: Prefs.roles
  },{
    key: 'scss',
    label: 'SCSS',
    language: 'scss',
    code: 'styles.scss',
    info: 'info.styles',
    roles: [Prefs.roles.regular]
  },{
    key: 'design-tokens',
    label: 'Design Tokens',
    language: 'scss',
    code: 'properties',
    roles: Prefs.roles
  },{
    key: 'dependencies',
    label: 'Dependencies',
    language: 'markup',
    code: 'dependencies',
    roles: [Prefs.roles.aura]
  }];
}

/**
 * Return an array of code tabs that can be used for the current flavor
 *
 * @param {object} flavor
 * @param {boolean} hasPreview
 * @returns {object[]}
 */
function prepareCodeTabs(flavor, hasPreview) {
  return getCodeTabs()
  // Make sure code for this tab exists
  .filter(tab => !_.isEmpty(_.get(flavor, tab.code)) ||
    tab.key === 'html' && hasPreview)
  // Get the code and highlight it
  // HTML is rendered/highlighted dynamically in "renderCodeBlock"
  .map(tab => {
    let code = _.get(flavor, tab.code);
    if (_.isArray(code)) {
      tab.code = code.join('\n');
      return tab;
    } else if (_.isString(code)) {
      tab.code = highlight(code, tab.language);
      return tab;
    }
    return tab;
  });
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
    // Prep the codeTabs by updating the "code" property with appropriate
    // formatting / highlighting
    const codeTabs = prepareCodeTabs(flavor, flavor.example);
    this.state = {
      previewTabs,
      // Only set an active tab if there are more than 1
      previewTabActive: previewTabs.length > 0
        // If there is a default specified, use that
        ? (flavor.showFormFactorsDefault
          ? _.find(previewTabs, { formFactor: flavor.showFormFactorsDefault })
          // Otherwise, just use the last tab
          : _.last(previewTabs))
        : null,
      // If the component example has states, set the initial previewState
      previewState: _.has(flavor.example, 'states')
        ? _.first(flavor.example.states) : false,
      codeTabs,
      // Show tabs appropriate for the current role
      codeTabsFiltered: codeTabs,
      // Used for accessibility
      initialView: true
    };
    // Listen for the iframe to load
    /*if (typeof window !== 'undefined') {
      window.__events.on(
        `iframe:load:${flavor.uid}`,
        this.onPreviewFrameLoad.bind(this, 'event')
      );
    }*/
  }

  render() {
    const { flavor } = this.props;
    return (
      <section className={pf('m-bottom--xx-large p-top--x-large')}>
        <Heading type="h2" id={flavor.id} className={pf('site-text-heading--large site-text-heading--callout')}>
          {flavor.title}
          {this.renderBadge(flavor.status)}
        </Heading>
        <div className={pf('grid wrap grid--vertical-stretch')}>
          {this.renderPreviewStates()}
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

  renderPreviewStates() {
    const { flavor } = this.props;
    const { previewState } = this.state;
    return !previewState ? null : (
      <div className={pf('site-states col size--1-of-1 large-size--1-of-6 large-order--2')}>
        <h3 className={pf('site-text-heading--label')}>States</h3>
        <ul className={pf('list--vertical has-block-links--space')}>
          {flavor.example.states.map(state =>
            <li
              className={state === previewState ? 'is-active' : null}
              key={state.label}>
              <a role="button">
                {state.label}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  renderPreview() {
    if (!this.props.flavor.example) return null;
    const { flavor } = this.props;
    const { previewTabActive, previewTabs } = this.state;
    const className = classNames(pf('site-example--tabs'), {
      'site-example--tabs-initial-view': this.state.initialView
    });
    const iframe = (
      <iframe
        src={`${getHistory().createHref('/')}components/preview-frame`}
        height="100%"
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
          id={`${flavor.uid}__preview-tab--${tab.key}`}
          content={content}
          initialView={this.state.initialView} />
      );
    });
  }

  renderCode() {
    if (!this.state.codeTabsFiltered.length) return null;
    const { flavor } = this.props;
    return (
      <Tabs className={{ 'site-example--code site-example--tabs-initial-view': this.state.initialView, [pf('m-vertical--x-large')]: true }} flavor="default">
        {this.renderCodeTabs()}
      </Tabs>
    );
  }

  renderCodeTabs() {
    const { flavor } = this.props;
    return this.state.codeTabsFiltered.map((tab, index) => {
      const content = (
        <CTALink ctaEventName="component-code-tab-click" ctaExtraValues={{ flavor: flavor.id, tab: tab.key }}>
          {tab.label}
        </CTALink>
      );
      return (
        <Tabs.Item
          key={tab.key}
          aria-controls={`${flavor.uid}__code-block--${tab.key}`}
          innerClass={pf('tabs--default__link')}
          content={content}
          aria-describedby={flavor.uid}>
          <Tabs.Content className={pf('site-code--content scrollable--x')}>
            {this.renderCodeBlock(tab)}
          </Tabs.Content>
        </Tabs.Item>
      );
    });
  }

  renderCodeBlock(tab) {
    const { flavor } = this.props;
    const className = classNames(`language-${tab.language}`);
    if (tab.key === 'html') {
      tab.code = flavor.exampleMarkup
        ? highlight(flavor.exampleMarkup, 'markup') : null;
    }
    return (
      <pre
        key={tab.key}
        id={`${flavor.uid}__code-block--${tab.key}`}
        className={pf(className)}
        aria-labelledby={`${flavor.uid}__code-tab--${tab.key}`}>
        <code className={pf(className)} data-key={tab.key}
          dangerouslySetInnerHTML={{__html: tab.code}} />
      </pre>
    );
  }

}

export default ComponentFlavor;
