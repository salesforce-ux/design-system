/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import classNames from 'classnames';
import fastdom from 'fastdom';

import throttle from 'lodash/throttle';

import { $, setClassName } from '../framework/dom';

const TRBL = ['top', 'right', 'bottom', 'left'];

const PADDING_IDENTITY = (value = 0) => TRBL.reduce((padding, prop) =>
  Object.assign({}, padding, {
    [prop]: value
  })
, {});

class Sticky {

  constructor(node) {
    this.node = node;
    this.refs = {
      content: node.querySelector('[data-slds-sticky-content]'),
      placeholder: node.querySelector('[data-slds-sticky-placeholder]'),
      footer: document.querySelector('footer')
    };
    this.props = {
      fixedElementsAbove: this.refs.content.dataset.sldsStickyFixedElementsAbove,
      fixedElementsBelow: this.refs.content.dataset.sldsStickyFixedElementsBelow,
      fixedContentPadding: JSON.parse(
        this.refs.content.dataset.sldsStickyFixedContentPadding
      ),
      pinBottom: this.refs.content.dataset.sldsStickyPinBottom ? true : false
    };
    this.state = {
      isFixed: false,
      origin: {},
      size: {},
      contentPaddingFixed: {}
    };
    this.scheduledLayouts = [];
    this.calculate(true);
    this.onResize = throttle(this.onResize, 1000).bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('resize', this.onResize, false);
    window.addEventListener('scroll', this.onScroll, false);
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);
  }

  setState(nextState) {
    this.scheduledLayouts.forEach(job => fastdom.clear(job));
    this.state = Object.assign({}, this.state, nextState);
    this.scheduledLayouts.push(fastdom.mutate(() => {
      this.scheduledLayouts.length = 0;
      this.layout();
    }));
  }

  getPadding(node, padding) {
    return TRBL
      .filter(prop => padding.hasOwnProperty(prop))
      .reduce((padding, side) =>
        Object.assign({}, padding, {
          [side]: parseFloat(window.getComputedStyle(node)[`padding-${side}`], 10) || 0
        })
      , {});
  }

  setPadding(node, padding, includesUnits = false) {
    TRBL
      .filter(prop => padding.hasOwnProperty(prop))
      .forEach(prop => {
        const styleProp = `padding-${prop}`;
        if (padding[prop]) {
          node.style.setProperty(styleProp, padding[prop] + (includesUnits ? '' : 'px'));
        } else {
          node.style.removeProperty(styleProp);
        }
      });
  }

  setStyleProperty(node, prop, value) {
    if (value) {
      node.style.setProperty(prop, value);
    } else {
      node.style.removeProperty(prop);
    }
  }

  convertPadding(padding) {
    const node = document.createElement('div');
    this.setPadding(node, padding, true);
    document.body.appendChild(node);
    const calculatedPadding = this.getPadding(node, padding);
    node.parentElement.removeChild(node);
    return calculatedPadding;
  }

  calculate(first) {
    fastdom.mutate(() => {
      if (first) {
        this.setState({
          contentPaddingFixed: this.convertPadding(this.props.fixedContentPadding)
        });
      }
      fastdom.measure(() => {
        // Calculate the extra offset added by any other fixed elements above this one
        const fixedElementsAbove = this.props.fixedElementsAbove
          ? $(this.props.fixedElementsAbove) : [];
        const fixedOffsetAbove = fixedElementsAbove.reduce((offset, el) =>
          offset + el.getBoundingClientRect().height
        , 0);
        // Calculate the extra offset added by any other fixed elements below this one
        const fixedElementsBelow = this.props.fixedElementsBelow
          ? $(this.props.fixedElementsBelow) : [];
        const fixedOffsetBelow = fixedElementsBelow.reduce((offset, el) =>
          offset + el.getBoundingClientRect().height
        , 0);
        // Content
        const content = this.refs.content;
        const contentRect = content.getBoundingClientRect();
        const contentPadding = this.getPadding(content, PADDING_IDENTITY());
        const contentPaddingFixed = Object.assign({}, PADDING_IDENTITY(), this.state.contentPaddingFixed);
        // If there are fixed elements below, add that offset to the padding
        if (fixedOffsetBelow) {
          this.setState({
            contentPaddingFixed: Object.assign({}, this.state.contentPaddingFixed, {
              bottom: fixedOffsetBelow + (this.state.contentPaddingFixed.bottom ? this.state.contentPaddingFixed.bottom : 0)
            })
          });
        }
        this.setState({
          origin: {
            top: contentPadding.top + fixedOffsetAbove,
            left: this.node.getBoundingClientRect().left
          },
          size: {
            width: contentRect.width + contentPadding.left + contentPadding.right,
            height: contentRect.height + contentPadding.top
          }
        });
        if (first) {
          this.setState({
            scrollOffset: contentRect.top - fixedOffsetAbove - contentPadding.top - contentPaddingFixed.top + window.pageYOffset
          });
        }
      });
    });
  }

  onResize() {
    this.calculate();
  }

  onScroll() {
    // The page has scrolled past the top of the nav
    // Attempt to stick it to the top
    if (window.pageYOffset > this.state.scrollOffset) {
      // It only needs to be adjusted once
      if (!this.state.isFixed) {
        this.setState({
          isFixed: true
        });
      }
    }
    // The page has scrolled up past the original top of the nav
    // Attempt to unstick it
    else {
      if (this.state.isFixed) {
        this.setState({
          isFixed: false
        });
      }
    }
  }

  layout() {
    const { isFixed, origin, size, contentPaddingFixed } = this.state;
    // Content
    this.setStyleProperty(this.refs.content, 'top',
      isFixed && origin.top ? `${origin.top}px` : null);
    this.setStyleProperty(this.refs.content, 'left',
      isFixed && origin.left ? `${origin.left}px` : null);
    this.setPadding(
      this.refs.content,
      isFixed ? this.state.contentPaddingFixed : PADDING_IDENTITY(null)
    );
    if (this.props.pinBottom) {
      this.setStyleProperty(this.refs.content, 'bottom',
        isFixed ? '0px' : null);
      this.setStyleProperty(this.refs.content, 'overflow-y',
        isFixed ? 'auto' : null);
      this.refs.content.scrollTop = 0;
      this.refs.content.scrollLeft = 0;
    }
    setClassName(this.refs.content, {
      'sticky--fixed': isFixed
    });
    // Placeholder
    setClassName(this.refs.placeholder, {
      'sticky__placeholder--on': isFixed
    });
    this.setStyleProperty(this.refs.placeholder, 'height',
      isFixed && size.height ? `${size.height}px` : '');
  }

}

export default () => ({
  hooks: {
    listen_dom: delegate => {
      $('[data-slds-sticky]').forEach(node => new Sticky(node));
    }
  }
});
