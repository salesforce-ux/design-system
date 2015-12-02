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
  .map(c => new RegExp(_.escapeRegExp(c)))

/**
 * Return the value for a keypath
 *
 * @example
 * getValueAtKeyPath(myObject, "foo.bar.baz")
 *
 * @param {object} obj
 * @param {string} keyPath
 * @returns {any}
 */
function getValueAtKeyPath(obj, keyPath) {
  return _.reduce(keyPath.split('.'), (obj, key) => {
    if (obj) { return obj[key]; } else { return obj; }
  }, obj);
}

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
 * Return a string of
 */
const renderHTML = function(element) {
  let html = ReactDOMServer.renderToStaticMarkup(element);
  // Remove wrapping tag if it has the ".demo-only" class in it
  // Note: this will also remove other classes too on that tag! :)
  const pattern = /^\<([a-z]*?)[\s\S]*?class\=\"[^"]*demo-only[^"]*\"[\s\S]*?\>([\S\s]*?)\<\/\1\>$/;
  html = html.replace(pattern, (match, tag, content) => content);
  // Format
  return prettyHTML(html, {
    'indent_size': 2,
    'indent_char': ' ',
    'unformatted': ['a']
  });
}

/**
 * Return true if the current "role" preference can view a tab
 *
 * @param {object} tab
 * @returns {boolean}
 */
function filterTabByRole(tab) {
  return _.contains(tab.roles, Prefs.get('role'));
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
  .filter(tab => !_.isEmpty(getValueAtKeyPath(flavor, tab.code)) ||
    tab.key === 'html' && hasPreview)
  // Get the code and highlight it
  // HTML is rendered/highlighted dynamically in "renderCodeBlock"
  .map(tab => {
    let code = getValueAtKeyPath(flavor, tab.code);
    if (_.isArray(code)) {
      tab.code = code.join('\n');
      return tab;
    } else if (_.isString(code)) {
      tab.code = highlight(code, tab.language);
      return tab;
    }
    return tab;
  })
}

/**
 * Return a cloned ReactElement that has been mutated based on the provided actions
 *
 * @param {ReactElement} element
 * @param {object[]} actions
 * @returns {ReactElement}
 */
function renderElementState (element, actions) {
  let prevProps = _.assign({}, element.props);
  let nextProps = _.defaults({}, _.cloneDeep(prevProps), {
    className: ''
  });
  // Get a filtered list of actions that apply to the current element
  let elementActions = actions.filter(action => {
    if (_.has(action, 'ref') && _.has(prevProps, 'iref')) {
      return action.ref === prevProps.iref;
    }
    if (_.has(action, 'className') && _.has(prevProps, 'className')) {
      return _.includes(prevProps.className, action.className);
    }
  })
  let filterActions = type => elementActions.filter(action => _.has(action, type));
  // Exit early if the current element is being removed
  for (let action of elementActions) {
    if (action.remove === true) {
      return null;
    }
  }
  // Add classes
  filterActions('addClass').forEach(action => {
    let classNames = nextProps.className.split(' ');
    let classNamesAdd = pf(action.addClass).split(' ');
    nextProps.className = _.uniq(classNames.concat(classNamesAdd)).join(' ');
  });
  // Remove classes
  filterActions('removeClass').forEach(action => {
    let classNames = nextProps.className.split(' ');
    let classNamesRemove = pf(action.removeClass).split(' ');
    nextProps.className = _.xor(classNames, classNamesRemove).join(' ');
  });
  // If the className is empty, remove it
  nextProps.className = _.trim(nextProps.className);
  if (_.isEmpty(nextProps.className)) nextProps.className = null;
  // Attributes
  filterActions('attributes').forEach(action =>
    _.assign(nextProps, action.attributes)
  );
  // Children
  if (nextProps.children) {
    // Text
    filterActions('text').forEach(action =>
      nextProps.children = [action.text]
    );
    // Recursivley update the children
    nextProps.children = React.Children.map(nextProps.children, child =>
      React.isValidElement(child) ? renderElementState(child, actions) : child
    );
  }
  return React.cloneElement(element, nextProps);
}

class ComponentFlavor extends React.Component {

  constructor(props) {
    super(props);
    const { flavor, elements } = props;
    const role = Prefs.get('role');
    // Get a list of preview tabs that should be displayed based
    // on the list provided by flavor.showFormFactors
    const previewTabs = getPreviewTabs().filter(tab => {
      const { showFormFactors: factors } = flavor;
      return _.isArray(factors) && !_.isEmpty(factors)
        ? _.includes(factors, tab.formFactor)
        : true;
    });
    // Prep the codeTabs by updating the "code" property with appropriate
    // formatting / highlighting
    const codeTabs = prepareCodeTabs(flavor, this.getExampleElement());
    this.state = {
      role,
      previewTabs,
      // Just use the last tab as the initial tab
      previewTabActive: _.last(previewTabs),
      // If the component example has states, set the initial previewState
      previewState: _.has(this.getExample(), 'states')
        ? _.first(this.getExample().states) : false,
      codeTabs,
      // Show tabs appropriate for the current role
      codeTabsFiltered: codeTabs.filter(filterTabByRole),
      // Used for accessibility
      initialView: true
    };
    // Listen for the iframe to load
    if (typeof window !== 'undefined') {
      window.__events.on(
        `iframe:load:${flavor.uid}`,
        this.onPreviewFrameLoad.bind(this, 'event')
      );
    }
    // Called by Prefs.listen()
    this.prefsChanged = this.updateCodeTabs.bind(this);
  }

  componentDidMount() {
    Prefs.listen(this.prefsChanged);
  }

  componentWillUnmount() {
    Prefs.unlisten(this.prefsChanged);
    window.__events.removeListener(
      `iframe:load:${this.props.flavor.uid}`,
      this.onPreviewFrameLoad.bind(this, 'event')
    );
  }

  /**
   * Return the example for the current flavor
   *
   * @returns {object}
   */
  getExample() {
    return this.props.elements[`example/flavor/${this.props.flavor.id}`];
  }

  /**
   * Return the example element for the current flavor
   *
   * @param {object} options
   * @returns {ReactElement|null}
   */
  getExampleElement(options) {
    options = _.defaults({}, options, {
      // The keys (in order) that will be checked for a ReactElement
      keys: ['preview', 'default'],
      // If true, the element will be passed to renderElementState
      renderState: false,
      // If true, previewActions will be concated with actions during renderElementState
      preview: true
    });
    const example = this.getExample();
    // Get the first valid ReactElement
    const element = _(options.keys)
      .filter(key => _.has(example, key))
      .map(key => example[key])
      .filter(React.isValidElement)
      .first();
    // If we don't have a state yet, just return the raw ReactElement
    if (!this.state) return element
    const { previewState } = this.state;
    // If we have an element and should render it with a specific state
    if (element && options.renderState === true && _.isArray(previewState.actions)) {
      let { actions, previewActions } = previewState;
      // Optionally concat "previewActions" to the primary actions
      if (options.preview === true && _.isArray(previewActions)) {
        actions = actions.concat(previewActions);
      }
      return renderElementState(element, actions);
    }
    return element;
  }

  /**
   * The preview can only be mounted once the iFrame has loaded
   */
  onPreviewFrameLoad(caller) {
    if(!this.refs.iframe) return;
    this.mountPreview();
    this.updatePreviewStyle(this.state.previewTabActive, () => {
      this.updatePreviewHeight();
    });
  }

  /**
   * Get the window/document object for the iFrame
   *
   * @returns {object}
   */
  getPreviewWindow() {
    const iframe = this.refs.iframe;
    const iwindow = iframe.contentWindow
      ? iframe.contentWindow
      : iframe.contentDocument.defaultView;
    const idocument = iwindow.document;
    return { iframe, iwindow, idocument };
  }

  /**
   * Mount the example element in the preview area
   */
  mountPreview() {
    const { idocument } = this.getPreviewWindow();
    const $preview = idocument.getElementById('preview');
    if (!$preview) return;
    const element = this.getExampleElement({ renderState: true });
    ReactDOM.render(element, $preview);
    svgFix(idocument);
  }

  /**
   * Update the iFrame height to fit the content
   */
  updatePreviewHeight() {
    const { iframe, iwindow, idocument } = this.getPreviewWindow();
    iwindow.requestAnimationFrame(() => {
      const style = iwindow.getComputedStyle(idocument.body);
      const padding = _.reduce(['padding-top', 'padding-bottom'], (total, key) => {
        return total + parseFloat(style[key], 10);
      }, 0);
      iframe.height = _.reduce(idocument.getElementById('preview').childNodes, (height, node) => {
        return height + node.offsetHeight;
      }, padding);
    });
  }

  /**
   * Update the preview iFrame with the correct style sheet based on the tab
   *
   * @param {object} tab
   * @param {function} [afterLoad]
   */
  updatePreviewStyle(tab, afterLoad = _.noop) {
    const { idocument } = this.getPreviewWindow();
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = `${getHistory().createHref('/')}assets/styles/${tab.stylesheet}.css`;
    link.onload = () => {
      // Don't remove the old stylesheet until the new one has loaded
      _(idocument.head.querySelectorAll('link'))
        .filter(tag => tag !== link)
        .forEach(tag => {
          tag.parentNode.removeChild(tag);
        }).value();
      afterLoad();
    };
    idocument.head.appendChild(link);
  }

  /**
   * When a preview tab is clicked, update the style, resize it (with setState),
   * and then update the height
   *
   * @param {object} tab
   * @param {object} event
   */
  onPreviewTabClick(tab, event) {
    event.preventDefault();
    this.updatePreviewStyle(tab, () => {
      this.setState({
        initialView: false,
        previewTabActive: tab
      }, () => {
        this.updatePreviewHeight();
      });
    });
  }

  /**
   * When a preview state is changed, set it to the component state
   * and then remount the preview
   *
   * @param {object} tab
   * @param {object} event
   */
  onPreviewStateChange(event) {
    let state = _.find(this.getExample().states, {
      label: event.target.value
    });
    if (state) {
      this.setState({
        previewState: state
      }, () => {
        this.mountPreview();
        this.updatePreviewHeight();
      });
    }
  }

  handleCodeMouseUp(tabKey) {
    const sel = window.getSelection && window.getSelection();
  }

  /**
   * Called when user preferences are changed
   */
  updateCodeTabs() {
    this.setState({
      role: Prefs.get('role'),
      codeTabsFiltered: this.state.codeTabs.filter(filterTabByRole),
    });
  }

  render() {
    const { flavor } = this.props;
    return (
      <section>
        <Heading type="h2" id={flavor.id} className="p-top--xx-large site-text-heading--large site-text-heading--callout">
          {flavor.title}
          {this.renderBadge(flavor.status)}
        </Heading>
        {this.renderInfo()}
        <h3 className={pf('assistive-text')}>Preview</h3>
        {this.renderPreviewStates()}
        {this.renderPreview()}
        <h3 className={pf('assistive-text')}>Code</h3>
        {this.renderCode()}
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
    if (!flavor.info.markup) return null;
    return (
      <div dangerouslySetInnerHTML={flavor.info.markup}/>
    );
  }

  renderPreviewStates() {
    if (!this.state.previewState) return null;
    return (
      <select
        value={this.state.previewState.label}
        onChange={this.onPreviewStateChange.bind(this)}>
        {this.getExample().states.map(state =>
          <option key={state.label} value={state.label}>{state.label}</option>
        )}
      </select>
    );
  }

  renderPreview() {
    if (!this.getExampleElement()) return null;
    const { flavor } = this.props;
    const className = classNames(pf('site-example--tabs'), {'site-example--tabs-initial-view': this.state.initialView})
    const previewPanel = (
      <Tabs.Content
        id={`${flavor.uid}__preview-content`}
        className={pf('site-example--content m-bottom--xx-large scrollable--x')}
        aria-labelledby={`${flavor.uid}__preview-tab-${this.state.previewTabActive.key}`}>
        <iframe
          src={`${getHistory().createHref('/')}components/preview-frame`}
          height='100%'
          name={flavor.uid}
          ref="iframe"
          data-form-factor={this.state.previewTabActive.key}
          scrolling="no" />
      </Tabs.Content>
    );
    return (
      <Tabs className={className} flavor="default" panel={previewPanel} selectedIndex={this.state.previewTabs.length-1}>
        {this.renderPreviewTabs()}
      </Tabs>
    );
  }

  renderPreviewTabs() {
    if (!this.getExampleElement()) return null;
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
          onClick={this.onPreviewTabClick.bind(this, tab)}
          initialView={this.state.initialView}>
        </Tabs.Item>
      );
    });
  }

  renderCode() {
    if (!this.state.codeTabsFiltered.length) return null;
    const { flavor } = this.props;
    return (
      <Tabs className={{'site-example--tabs-initial-view': this.state.initialView}} flavor="default">
        {this.renderCodeTabs()}
      </Tabs>
    );
  }

  renderCodeTabs() {
    const { flavor } = this.props;
    return this.state.codeTabsFiltered.map((tab, index) => {
      const content = (
        <CTALink ctaEventName='component-code-tab-click' ctaExtraValues={{ flavor: flavor.id, tab: tab.key }}>
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
      const codeElement = this.getExampleElement({
        keys: ['code']
      });
      const previewElement = this.getExampleElement({
        renderState: true,
        preview: false
      });
      if (codeElement) {
        tab.code = highlight(renderHTML(codeElement), tab.language);
      } else if (previewElement) {
        tab.code = highlight(renderHTML(previewElement), tab.language);
      }
    }
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

export default ComponentFlavor;
