/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import CodeBlock from 'app_modules/ui/code-block';
import globals from 'app_modules/global';

export default (
  <PageBody anchorTitle="Colors" contentClassName="site-guidelines site-guidelines-layout">
    <div className="slds-container--large">

      {/* Usage */}
      <h2 className="site-text-heading--large">Usage</h2>

      {/* Visual Messaging */}
      <div className="site-side-by-side slds-grid slds-wrap slds-m-bottom--x-large">
        <div className="slds-size--1-of-1 slds-medium-size--2-of-3 slds-grow-none">
          <h2 className="site-text-heading--medium slds-p-top--x-large">Visual Messaging</h2>
          <p>Certain colors have inherent meaning for a large majority of users, although we recognize that cultural differences are plentiful. For example, we use red to communicate an error.</p>
        </div>
        <figure className="slds-size--1-of-1 slds-medium-size--1-of-3 slds-shrink-none">
          <img className="slds-image" src="/assets/images/color/img-messaging.svg" alt="" />
        </figure>
      </div>

      {/* Visual Differentiation */}
      <div className="site-side-by-side slds-grid slds-wrap slds-m-bottom--x-large">
        <div className="slds-size--1-of-1 slds-medium-size--2-of-3 slds-grow-none">
          <h2 className="site-text-heading--medium slds-p-top--x-large">Visual Differentiation</h2>
          <p>Salesforce uses many secondary colors in conjunction with iconography to visually differentiate between similar types of content, such as records of different object types. However, it’s important to not always rely on color to provide visual differentiation. If too many use cases employ color in this manner, the colors lose their meaning.</p>
        </div>
        <figure className="slds-size--1-of-1 slds-medium-size--1-of-3 slds-shrink-none">
          <img className="slds-image" src="/assets/images/color/img-differentiation.svg" alt="" />
        </figure>
      </div>

      {/* Visual Hierarchy */}
      <div className="site-side-by-side slds-grid slds-wrap slds-m-bottom--x-large">
        <div className="slds-size--1-of-1 slds-medium-size--2-of-3 slds-grow-none">
          <h2 className="site-text-heading--medium slds-p-top--x-large">Visual Hierarchy</h2>
          <p>Color is used sparingly to draw attention to important elements and those that we want the user to take action on. Because most of the application is gray, pops of color catch a user’s eye.</p>
        </div>
        <figure className="slds-size--1-of-1 slds-medium-size--1-of-3 slds-shrink-none">
          <img className="slds-image" src="/assets/images/color/img-hierarchy.svg" alt="" />
        </figure>
      </div>

      {/* Accessibility */}
      <div className="site-side-by-side slds-grid slds-wrap slds-m-bottom--x-large">
        <div className="slds-size--1-of-1 slds-medium-size--2-of-3 slds-grow-none">
          <h2 className="site-text-heading--medium slds-p-top--x-large">Accessibility</h2>
          <p>It’s important that our products meet all web accessibility standards, including the minimum contrast ratios that the WCAG 2.0 specifies for text and background color combinations. This adherence helps users who are colorblind or have low vision to better interact with Salesforce, but it also improves usability and readability for all users.</p>
          <p>You can find some of the most common text and background color combinations in the CSS Framework Themes section. They are all vetted to pass the minimum contrast ratios, including both normal text and link text styles.</p>
        </div>
        <figure className="slds-size--1-of-1 slds-medium-size--1-of-3 slds-shrink-none">
          <img className="slds-image" src="/assets/images/color/img-accessibility.svg" alt="" />
        </figure>
      </div>
    </div>
  </PageBody>
);
