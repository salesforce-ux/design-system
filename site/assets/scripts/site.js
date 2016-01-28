import classNames from 'classnames/dedupe';
import fastdom from 'fastdom';
import Gator from 'gator';
import Prism from 'app_modules/site/vendor/prism';
import svg4everybody from 'app_modules/site/vendor/svg4everybody';

import forEach from 'lodash/forEach';
import escapeRegExp from 'lodash/escapeRegExp';

import { logCurrentPageVisit, logCTAEvent } from 'app_modules/site/analytics';
import globals from 'app_modules/global';
import whitelistUtilities from '.generated/whitelist-utilities.js';

/**
 * Custom Prism addition to the markup syntax that adds a "utility-class" class
 * to any attribute value tokens that are contained in whitelistUtilities
 */
Prism.languages.markup.tag.inside['attr-value'].inside['utility-class'] = whitelistUtilities
  .map(c => c.replace(/^\./, ''))
  .map(c => `${globals.cssPrefix}${c}`)
  .map(c => new RegExp(escapeRegExp(c)));

// Log the current page visit as an event in GA/LL
logCurrentPageVisit();

// NOTE: This module has been shimmed
// to support passing in a custom document
svg4everybody(document);

/**
 * Alias for document.querySelectorAll
 */
const $ = document.querySelectorAll.bind(document);

/**
 * Event delegation helper
 *
 * @param {string} event
 * @param {string} selector
 * @param {function} listener
 */
const delegate = (event, selector, listener) =>
  Gator(document).on(event, selector, function (event) {
    listener(event, this);
  });

/**
 * Set the className using "classnames" inside a fastdom.mutate
 *
 * @param {Node} node
 * @param {...string|object}
 */
const setClassName = (node, ...args) =>
  fastdom.mutate(() =>
    node.className = classNames(node.className, ...args));

///////////////////////////////////////////////////////////////////////////////
// Application
///////////////////////////////////////////////////////////////////////////////

window.APPLICATION_DELEGATE = {
  /**
   * Called by an <iframe> to update the markup
   *
   * @param {string} flavor
   * @param {string} code
   */
  updateComponentPreviewMarkup: (flavor, html) => {
    // TODO: Ignore this on first load since it was already
    // rendered by the server
    html = Prism.highlight(html, Prism.languages['markup']);
    fastdom.mutate(() => {
      document.getElementById(`code-${flavor}`).innerHTML = html;
    });
  },
  /**
   * Called by an <iframe> to update the preview height
   *
   * @param {string} flavor
   * @param {number} height
   */
  updateComponentPreviewHeight: (flavor, height) => {
    fastdom.mutate(() => {
      document.getElementById(`iframe-${flavor}`).height = height;
    });
  },
  /**
   * Called by an <iframe> to fix SVG elements
   *
   * @param {object} document
   */
  updateComponentPreviewSVG: document => svg4everybody(document)
};

///////////////////////////////////////////////////////////////////////////////
// Left Nav
///////////////////////////////////////////////////////////////////////////////

delegate('click', '[data-slds-nav-children] > a', (event, node) => {
  event.preventDefault();
  const isOpen = /is-open/.test(node.parentNode.className);
  setClassName(node.parentNode, {
    [`${globals.cssPrefix}is-open`]: !isOpen,
    'is-closed': isOpen
  });
});

///////////////////////////////////////////////////////////////////////////////
// Analytics
///////////////////////////////////////////////////////////////////////////////

delegate('click', '[data-slds-cta-event]', (event, node) => {
  let values = {};
  try {
    values = JSON.parse(node.getAttribute('data-slds-cta-event-values'));
  } catch (e) {}
  logCTAEvent(
    node.getAttribute('data-slds-cta-event-name'),
    node.getAttribute('data-slds-cta-event-type'),
    values
  );
});

///////////////////////////////////////////////////////////////////////////////
// Components
///////////////////////////////////////////////////////////////////////////////

// Flavor States
delegate('click', '[data-slds-flavor-states]', (event, element) => {
  event.preventDefault();
  const [ flavor, src ] = ['', '-src'].map(key =>
    element.getAttribute(`data-slds-flavor-states${key}`));
  fastdom.measure(() => {
    // Remove all "is-active" classes from the states
    forEach($(`[data-slds-flavor-states="${flavor}"]`), node => {
      setClassName(node.parentNode, { 'is-active': false });
    });
    // Add "is-active" to the selected state
    setClassName(element.parentNode, { 'is-active': true });
  });
  fastdom.mutate(() => {
    // Update the iframe src
    // The code will be updated by the <iframe> using the delegate
    document.getElementById(`iframe-${flavor}`).setAttribute('src', src);
  });
});
