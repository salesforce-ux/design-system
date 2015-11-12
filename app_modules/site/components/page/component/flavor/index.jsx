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
import _ from 'lodash';
import Prism from 'app_modules/site/vendor/prism';
import SvgIcon from 'app_modules/ui/svg-icon';
import Prefs from 'app_modules/site/preferences';
import svgFix from 'app_modules/site/util/ie/svg';
import { html as prettyHTML } from 'js-beautify';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';

import Heading from 'app_modules/site/components/page/heading';
import Tabs from 'ui/components/tabs/index.react';
import CTALink from 'app_modules/site/components/cta-link';
import { logInputEvent } from 'app_modules/site/util/analytics';

import { cssPrefix } from 'app_modules/global';
import whitelistUtilities from '.generated/whitelist-utilities.js';

Prism.languages.markup.tag.inside['attr-value'].inside['utility-class'] = whitelistUtilities
  .map(c => c.replace(/^\./, ''))
  .map(c => `${cssPrefix}${c}`)
  .map(c => new RegExp(_.escapeRegExp(c)))

function getValueAtKeyPath(obj, keyPath) {
  return _.reduce(keyPath.split('.'), (obj, key) => {
    if (obj) { return obj[key]; } else { return obj; }
  }, obj);
}

function highlight(code, language) {
  return Prism.highlight(code, Prism.languages[language]);
}

function getAvailablePreviewTabs(flavor) {
  return [{
    key: 'mobile',
    icon: 'phone_portrait',
    iconClass: 'phone-portrait',
    label: 'Small',
    stylesheet: 'iframe',
    formFactor: 'small'
  },{
    key: 'tablet',
    icon: 'tablet_portrait',
    iconClass: 'tablet-portrait',
    label: 'Medium',
    stylesheet: 'iframe.medium',
    formFactor: 'medium'
  },{
    key: 'desktop',
    icon: 'desktop',
    iconClass: 'desktop',
    label: 'Large',
    stylesheet: 'iframe.large',
    formFactor: 'large'
  }].filter(tab => {
    const factors = flavor.showFormFactors;
    if (!factors.length) { return true; }
    return _.includes(factors, tab.formFactor);
  });
}

function allCodeTabs() {
  return [{
    key: 'html',
    label: 'HTML',
    language: 'markup',
    code: 'example.html',
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
    key: 'aura-css',
    label: 'Lightning CSS',
    language: 'scss',
    code: 'styles.aura',
    info: 'info.styles',
    roles: [Prefs.roles.aura]
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

const renderHTML = _.memoize(function(uid, previewComponent) {
  if (previewComponent.code) previewComponent = previewComponent.code;
  if (previewComponent.default) previewComponent = previewComponent.default;
  const pattern = /^\<([a-z]*?)[\s\S]*?class\=\"[^"]*demo-only[^"]*\"[\s\S]*?\>([\S\s]*?)\<\/\1\>$/;
  let html = ReactDOMServer.renderToStaticMarkup(previewComponent);
  // Remove wrapping tag if it has the ".demo-only" class in it
  // Note: this will also remove other classes too on that tag! :)
  html = html.replace(pattern, (match, tag, content) => content);
  // Format
  html = prettyHTML(html, {
    'indent_size': 2,
    'indent_char': ' ',
    'unformatted': ['a']
  });
  // Highlight
  return highlight(html, 'markup');
});

function userTypeShouldSeeTab(tab) {
  return _.contains(tab.roles, Prefs.get('role'));
}

function getCodeTabs(flavor, previewComponent, role) {
  return _(allCodeTabs())
    // Make sure code for this tab exists
    .filter(tab => {
      const val = getValueAtKeyPath(flavor, tab.code); // multiple return types, [] is truthy.
      return userTypeShouldSeeTab(tab) && ((val && val.length) || (tab.key === 'html' && previewComponent));
    })
    // Get the code and highlight it
    .forEach(tab => {
      tab.code = getValueAtKeyPath(flavor, tab.code);
      if (_.isArray(tab.code)) {
        tab.code = tab.code.join('\n');
      }
      else if (_.isString(tab.code)) {
        tab.code = highlight(tab.code, tab.language);
      }
      else if (tab.key === 'html') {
        let shouldHighlightUtilityClasses = role === Prefs.roles.aura;
        tab.code = renderHTML(flavor.uid, previewComponent);
      }
    })
    .value();
}

export default class ComponentFlavor extends React.Component {

  constructor(props) {
    super(props);
    const {flavor, elements} = props;
    const previewComponent = elements[`example/flavor/${flavor.id}`];
    const previewTabs = getAvailablePreviewTabs(flavor);
    this.state = {
      previewComponent,
      previewTabs,
      previewTabActive: _.last(previewTabs),
      codeTabs: [],
      role: Prefs.roles.aura,
      initialView: true
    };
    // Listen for the iframe to load
    if (typeof window !== 'undefined') {
      window.__events.once(`iframe:load:${flavor.uid}`, this.onFrameLoad.bind(this, 'event'));
    }
    this.prefsChanged = this.updateCodeTabs.bind(this);
  }

  componentDidMount() {
    this.setState({role: Prefs.get('role')});
    Prefs.listen(this.prefsChanged);
    this.updateCodeTabs();
  }

  componentWillUnmount() {
    Prefs.unlisten(this.prefsChanged);
  }

  isRegularUser() {
    return this.state.role === Prefs.roles.regular;
  }

  updateCodeTabs() {
    this.setState({
      codeTabs: getCodeTabs(this.props.flavor, this.state.previewComponent, Prefs.get('role')),
      role: Prefs.get('role')
    });
  }

  handleCodeMouseUp(tabKey) {
    let sel = window.getSelection && window.getSelection();
    if (sel && sel.toString().length > 0) {
      logInputEvent('component-code-text-select', {flavor: this.props.flavor.id, tab: tabKey});
    }
  }

  onFrameLoad(caller) {
    if(!this.refs.iframe) return;
    this.mountPreview();
    this.updatePreview();
  }

  mountPreview() {
    let {previewComponent, previewTabActive: tab} = this.state;
    // If the module exported a different "preview" element
    if (previewComponent.preview) previewComponent = previewComponent.preview;
    if (previewComponent.default) previewComponent = previewComponent.default;
    const doc = this.refs.iframe.contentWindow.document;
    ReactDOM.render(previewComponent, doc.getElementById('preview'));
    svgFix(doc);
  }

  updatePreview() {
    const {previewComponent, previewTabActive: tab} = this.state;
    const node = this.refs.iframe;
    const doc = node.contentWindow.document;
    // Adjust the height after the stylesheet loads
    function adjustHeight() {
      node.contentWindow.requestAnimationFrame(() => {
        const style = window.getComputedStyle(doc.body);
        const padding = _.reduce(['padding-top', 'padding-bottom'], (total, key) => {
          return total + parseFloat(style[key], 10);
        }, 0);
        node.height = _.reduce(doc.getElementById('preview').childNodes, (height, node) => {
          return height + node.offsetHeight;
        }, padding);
      });
    }
    // Update the stylehsheet
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = `/assets/styles/${tab.stylesheet}.css`;
    link.onload = function() {
      // Don't remove the old stylesheet until the new one has loaded
      _.filter(doc.head.querySelectorAll('link'), tag => {
        return tag !== link;
      }).forEach(tag => {
        tag.parentNode.removeChild(tag);
      });
      adjustHeight();
    };
    doc.head.appendChild(link);
  }

  onPreviewTabClick(tab, event) {
    event.preventDefault();
    this.setState({
      initialView: false,
      previewTabActive: tab
    }, this.updatePreview);
  }

  render() {
    const {flavor} = this.props;
    return (
      <section>
        <Heading type="h2" id={flavor.id} className="p-top--xx-large site-text-heading--large site-text-heading--callout">
          {flavor.title}
          {this.renderBadge(flavor.status)}
        </Heading>
        {this.renderInfo()}
        <h3 className={pf('assistive-text')}>Preview</h3>
        {this.renderPreview()}
        <h3 className={pf('assistive-text')}>Code</h3>
        {this.renderCode()}
      </section>
    );
  }

  renderBadge(status) {
    if (!status) return null;
    const words = _.words(status).join(' ');
    return (
      <span className={pf('badge m-left--medium shrink-none align-middle')}>{words}</span>
    );
  }

  renderInfo() {
    const {flavor} = this.props;
    if (!flavor.info.markup) return null;
    return (
      <div dangerouslySetInnerHTML={flavor.info.markup}/>
    );
  }

  renderPreview() {
    if (!this.state.previewComponent) return null;
    const {flavor} = this.props;
    const className = classNames(pf('site-example--tabs'), {'site-example--tabs-initial-view': this.state.initialView})
    const previewPanel = (
      <Tabs.Content
        id={`${flavor.uid}__preview-content`}
        className={pf('site-example--content m-bottom--xx-large scrollable--x')}
        aria-labelledby={`${flavor.uid}__preview-tab-${this.state.previewTabActive.key}`}>
        <iframe
          src="/components/preview-frame"
          height='100%'
          name={flavor.uid}
          ref="iframe"
          data-form-factor={this.state.previewTabActive.key}
          scrolling="no" />
      </Tabs.Content>
    );
    return (
      <Tabs className={className} flavor="default" panel={previewPanel} selectedIndex={2}>
        {this.renderPreviewTabs()}
      </Tabs>
    );
  }

  renderPreviewTabs() {
    if (!this.state.previewComponent) return null;
    const {flavor} = this.props;
    return this.state.previewTabs.map((tab, index) => {
      const content = (
        <CTALink ctaEventName='component-preview-tab-click' ctaExtraValues={{ flavor: flavor.id, tab: tab.key }}>
          <SvgIcon sprite="utility" symbol={tab.icon} className={pf(`icon icon__svg icon-utility-${tab.iconClass} icon--x-small icon-text-default m-right--x-small`)} />
          {tab.label}
        </CTALink>
      );
      return (
        <Tabs.Item
          key={tab.key}
          aria-controls={`${flavor.uid}__preview-content`}
          aria-describedby={flavor.uid}
          id={`${flavor.uid}__preview-tab--${tab.key}`}
          content={content}
          onClick={this.onPreviewTabClick.bind(this, tab)}
          initialView={this.state.initialView}>
        </Tabs.Item>
      );
    });
  }

  renderCode() {
    if (!this.state.codeTabs.length) return null;
    const {flavor} = this.props;
    return (
      <Tabs className={{'site-example--tabs-initial-view': this.state.initialView}} flavor="default">
        {this.renderCodeTabs()}
      </Tabs>
    );
  }

  renderCodeTabs() {
    const {flavor} = this.props;
    return this.state.codeTabs.map((tab, index) => {
      const content = (
        <CTALink ctaEventName='component-code-tab-click' ctaExtraValues={{ flavor: flavor.id, tab: tab.key }}>
          {tab.label}
        </CTALink>
      );
      return (
        <Tabs.Item
          key={tab.key}
          aria-controls={`${flavor.uid}__code-block--${tab.key}`}
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
    const {flavor} = this.props;
    const className = classNames(`language-${tab.language}`);
    return (
      <pre
        key={tab.key}
        id={`${flavor.uid}__code-block--${tab.key}`}
        className={pf(className)}
        aria-labelledby={`${flavor.uid}__code-tab--${tab.key}`}>
        <code className={pf(className)} data-key={tab.key}
          dangerouslySetInnerHTML={{__html: tab.code}} onMouseUp={this.handleCodeMouseUp.bind(this, tab.key)} />
      </pre>
    );
  }

}
