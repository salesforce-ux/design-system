import classNames from 'classnames/dedupe';
import fastdom from 'fastdom';
import Gator from 'gator';

import { logCurrentPageVisit } from 'app_modules/site/analytics';
import svg4everybody from 'app_modules/site/vendor/svg4everybody';

// NOTE: This module has been shimmed
// to support passing in a custom document
svg4everybody(document);

// Log the current page visit as an event in GA/LL
logCurrentPageVisit();

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

// Left Nav
// TODO: Prefix "is-closed"
delegate('click', '[data-slds-nav-children] > a', (event, element) => {
  event.preventDefault();
  const { className } = element.parentNode;
  const isOpen = /is-open/.test(className);
  fastdom.mutate(() =>
    element.parentNode.className = classNames(className, {
      'slds-is-open': !isOpen, 'is-closed': isOpen
    })
  );
});
