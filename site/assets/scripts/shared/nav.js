/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fastdom from 'fastdom';

import { $, setClassName, hide } from '../framework/dom';
import { globals } from '../framework/helpers';

import Status from 'app_modules/site/util/component/status';

/**
 * Expand/collapse the left nav
 */
const handleNavClick = (event, node) => {
  event.preventDefault();
  const isOpen = /is-open/.test(node.parentElement.className);
  setClassName(node.parentElement, {
    [`${globals.cssPrefix}is-open`]: !isOpen,
    'is-closed': isOpen
  });
};

/**
 * Updates nav and flavor visibilty based on pref
 */
const updateStatusVisibility = event => {
  $('[data-slds-status]').forEach(node => {
    const shouldShow = Status.shouldDisplay(event.status, node.dataset.sldsStatus);
    hide(node, !shouldShow);
  });
};

/**
 * Initialize a scroll spy nav that matches `.site-jump-anchor` with corresponding
 * anchor tags in a `.site-menu--jump-links`
 */
export const updateScrollSpy = (() => {
  let instances = [];
  const onScroll = () => {
    const y = window.pageYOffset;
    instances.forEach(instance => {
      const anchor = instance.anchors.reduce((currentAnchor, anchor) =>
        y >= anchor.top ? anchor : currentAnchor, instance.anchors[0]);
      if (anchor !== instance.currentAnchor) {
        instance.currentAnchor = anchor;
        instance.anchors.forEach(anchor => {
          setClassName(anchor.linkNode.parentElement, {
            'slds-is-open': false,
            'slds-is-selected': false
          });
        });
        setClassName(instance.currentAnchor.linkNode.parentElement, {
          'slds-is-open': true,
          'slds-is-selected': true
        });
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  // This function can be invoked multiple times and will update
  // the "instances" variable
  return () => {
    fastdom.measure(() => {
      const anchors = $('.site-jump-anchor').map(node => ({
        id: node.id,
        top: node.getBoundingClientRect().top + window.pageYOffset
      }));
      instances = $('.site-menu--jump-links').map(() => {
        const filteredAnchors = anchors
          .map(a => Object.assign({}, a, {
            linkNode: $(`[href="#${a.id}"]`)[0]
          }))
          .filter(a => a.linkNode);
        return {
          anchors: filteredAnchors,
          currentAnchor: null
        };
      });
      onScroll();
    });
  };
})();

export default () => ({
  hooks: {
    listen_event: emitter => {
      emitter.on('preferences:updated', updateStatusVisibility);
    },
    listen_dom: delegate => {
      delegate('click', '[data-slds-nav-children] > a', handleNavClick);
      updateScrollSpy();
    }
  }
});
