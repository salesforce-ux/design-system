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
import { prefix as pf } from 'app_modules/ui/util/component';
import globals from 'app_modules/global';

export default (
  <PageBody anchorTitle="Accessibility" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">The Lightning Design System provides accessible markup which will serve as a foundation for your application development. In order to make sure you build accessible components, however, you will need to follow the accessibility guidance for our interactive components. This includes keyboard behavior as well as the management of ARIA roles and properties.</p>

      <h2 className="site-text-heading--large">What is Accessibility?</h2>
      <p>Web accessibility ensures that people with disabilities can perceive, understand, navigate, interact with, and contribute to the applications you create. This means that pages are <a href="https://www.w3.org/TR/WCAG20/">Perceivable, Operable, Understandable and Robust</a>. This includes providing keyboard interaction alternatives for all mouse-based actions, properly identifying all form fields and buttons, providing text based alternatives for all images, videos, icons and SVGs, as well as building components that properly convey their identity, operation model, and state to assistive technologies.</p>
      <p>The Design System enables accessible development by providing a set of semantically correct components, each with appropriate <a href="https://www.w3.org/TR/wai-aria/">ARIA</a> markup so they can be identified correctly to users of assistive technologies.</p>

      <h2 className="site-text-heading--large">Standards Compliant Markup</h2>
      <p>The semantic markup and use of ARIA roles in our components are based on W3C standards and industry best practices. This markup is the perfect starting point for building accessible components.</p>

      <h2 className="site-text-heading--large">Keyboard Navigation</h2>
      <p>While we do not provide the JavaScript that is necessary to make our components interactive, we offer advice on how to use scripting languages to create keyboard-accessible components.</p>

      <h2 className="site-text-heading--large">Appropriate use of color</h2>
      <p>Our components follow the two main rules of accessibility as it relates to color:</p>
      <ul>
        <li>We never use color as the only means of providing information or requesting an action.</li>
        <li>The combinations of text and their background colors do not fall below the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG recommended threshold</a> ratio of 4.5:1 for standard or small text and 3:1 for larger text.</li>
      </ul>

      <h2 className="site-text-heading--large">Accessible Forms</h2>
      <p>Our forms offer proper use of <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> tags as well as appropriate labeling for input controls. Our radio button and checkbox controls provide a balanced solution that offers accessibility as well as design flexibility.</p>

      <h2 className="site-text-heading--large">Images and icons</h2>
      <p>We provide a means of offering text-based alternatives for all images, icons and SVGs.</p>

      <h2 className="site-text-heading--large">Component Identity</h2>
      <p>Our interactive components are created in accordance with the latest <a href="http://w3c.github.io/aria/practices/aria-practices.html">ARIA Authoring Practices</a>, with attributes that are understandable by screen reader users on key page elements. It is important to note that as a component is interacted with, the ARIA attributes may need updating to reflect the new state. Hence, we provided detailed guidance on how and when to do this.</p>

      <h2 className="site-text-heading--large">Validating your applications</h2>
      <p>The Design System is only the foundation for accessible application development. We recommend that you review the accessibility of your applications before release and ensure that it meets the <a href="https://www.w3.org/TR/WCAG20/#conformance">WCAG Standard at the AA Level</a>.</p>

      <h2 className="site-text-heading--large">Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/">W3C Web Accessibility Initiative</a></li>
        <li><a href="http://w3c.github.io/aria/practices/aria-practices.html">WAI-ARIA Authoring Practices</a></li>
        <li><a href="https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b#.o8n02j9rr">7 Things Every Designer Needs to Know about Accessibility</a></li>
        <li><a href="https://medium.com/salesforce-ux/accessible-interface-design-d80e95cbb2c1#.i5tl6ffv3">Accessible Interface Design: on designing with accessible color contrast ratios</a></li>
        <li><a href="http://webaim.org/">WebAIM</a></li>
        <li><a href="http://a11yproject.com/">The A11Y Project</a></li>
      </ul>

    </div>
  </PageBody>
);
