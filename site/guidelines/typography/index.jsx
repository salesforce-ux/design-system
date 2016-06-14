/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import PageBody from 'app_modules/site/components/page/body';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Typography" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.</p>
      <h2 className="site-text-heading--large">Salesforce Sans</h2>
      <p>At the heart of good typography is a good typeface. We started from the ground up, partnering with <a href="http://www.monotype.com/">Monotype</a>, to design one that reflects our brand and personality, while also maintaining versatility to address diverse applications, from massive billboards to miniscule UI text.</p>
      <p>Salesforce Sans is the result: a friendly, professional, and modern typeface with four weights. Salesforce Sans is available to partners and developers in our ecosystem to use in conjunction with the Design System.</p>
      <h2 className="site-text-heading--label">Salesforce Sans</h2>
        <h3 className={pf('text-heading--large')}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h3>
        <h3 className={pf('text-heading--large')}>a b c d e f g h i j k l m n o p q r s t u v w x y z</h3>
        <h3 className={pf('text-heading--large')}>0 1 2 3 4 5 6 7 8 9</h3>
      <figure className={pf('p-top--medium')}>
        <img className={pf('image')} src="/assets/images/typography/img-font-scale.svg" alt="" />
      </figure>
      <h2 className="site-text-heading--large">Type Sizes</h2>
      <p>We use different type sizes and weights to convey a visual</p>
      <div className={pf('p-vertical--x-large m-bottom--medium')}>
          <h3 className={pf('text-heading--large m-bottom--x-small')}>The quick brown fox jumps over the lazy dog.</h3>
          <p className={pf('site-text-heading--label m-top--reset')}>Heading Large</p>
          <h3 className={pf('text-heading--medium m-bottom--x-small')}>The quick brown fox jumps over the lazy dog.</h3>
          <p className={pf('site-text-heading--label m-top--reset')}>Heading Medium</p>
          <h3 className={pf('text-heading--small m-bottom--x-small')}>The quick brown fox jumps over the lazy dog.</h3>
          <p className={pf('site-text-heading--label m-top--reset')}>Heading Small</p>
          <h3 className={pf('text-heading--label m-bottom--x-small')}>The quick brown fox jumps over the lazy dog.</h3>
          <p className={pf('site-text-heading--label m-top--reset')}>Heading Label</p>
          <h3 className={pf('text-body--default m-bottom--x-small')}>The quick brown fox jumps over the lazy dog.</h3>
          <p className={pf('site-text-heading--label m-top--reset')}>Body Default</p>
          <h3 className={pf('text-body--small m-bottom--x-small')}>The quick brown fox jumps over the lazy dog.</h3>
          <p className={pf('site-text-heading--label m-top--reset')}>Body Small</p>
      </div>
      <p>For more information about these styles, check out our <a href="/components/utilities/text/">CSS Text Utilities.</a></p>

      <div className={pf('p-vertical--x-large')}>
        <h2 className={pf('site-text-heading--large size--1-of-1')}>Line Height</h2>
        <p>In the context of an enterprise application, the need for longform text is quite rare. More often, application design involves many small bits of text that all represent the user’s data. This text is spaced intentionally to maintain distinction between different types and rows of data.</p>
        <p>As a result, we take a pragmatic approach to spacing and line height by resetting all margins and paddings to 0, and allowing the line-height property for all text to inherit a globally defined ratio of 1.5 of the text size. This allows designers and developers to easily opt-in to specific text spacing by leveraging our CSS Text and Spacing Utilities.</p>
        <p>We do provide a longform text CSS utility, which will result in our recommended vertical text rhythm for optimizing a balance between readability and space efficiency.</p>
      </div>
    </div>
  </PageBody>
);
