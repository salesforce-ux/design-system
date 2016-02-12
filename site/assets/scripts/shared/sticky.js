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

class Sticky {

  constructor(node) {
    this.node = node;
    this.refs = {
      content: node.querySelector('[data-slds-sticky-content]'),
      placeholder: node.querySelector('[data-slds-sticky-placeholder]'),
      footer: document.querySelector('footer')
    };
    this.fixedElements = this.refs.content
      .getAttribute('data-slds-sticky-fixed-elements');
    this.state = {
      isFixed: false
    };
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
    fastdom.clear(this.layoutId);
    this.state = Object.assign({}, this.state, nextState);
    this.layoutId = fastdom.mutate(() => this.layout());
  }

  getPaddingTop(element) {
    return parseFloat(window.getComputedStyle(element)['padding-top'], 10) || 0;
  }

  calculate(first) {
    fastdom.measure(() => {
      this.refs.content.style.width = '';
      // Content
      const content = this.refs.content;
      const contentRect = content.getBoundingClientRect();
      const contentPadding = this.getPaddingTop(content);
      // Calculate the extra offset added by any other fixed elements above this one
      const fixedElements = this.fixedElements ? $(this.fixedElements) : [];
      const fixedOffset = fixedElements.reduce((offset, el) => {
        return offset + el.getBoundingClientRect().height;
      }, 0);
      this.setState({
        contentRect,
        contentTop: contentPadding + fixedOffset,
        contentBottom: this.refs.footer.getBoundingClientRect().height
      });
      if (first) {
        this.setState({
          scrollOffset: contentRect.top + window.pageYOffset - fixedOffset - contentPadding
        });
      }
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
    const { isFixed, contentRect, contentTop, contentBottom } = this.state;
    // Content
    this.refs.content.style.top = isFixed && contentTop
      ? `${contentTop}px` : '';
    this.refs.content.style.bottom = isFixed && contentBottom
      ? `${contentBottom}px` : '';
    this.refs.content.style.width = isFixed && contentRect
      ? `${contentRect.width}px` : '';
    this.refs.content.style.overflowY = isFixed
      ? 'auto' : '';
    this.refs.content.scrollTop = 0;
    this.refs.content.scrollLeft = 0;
    // Placeholder
    setClassName(this.refs.placeholder, {
      'sticky__placeholder--on': isFixed
    });
    this.refs.placeholder.style.height = contentRect
      ? `${contentRect.height}px` : '';
    setClassName(this.refs.content, {
      'sticky--fixed': isFixed
    });
  }

}

export default () => ({
  hooks: {
    listen_dom: delegate => {
      $('[data-slds-sticky]').forEach(node => new Sticky(node));
    }
  }
});
