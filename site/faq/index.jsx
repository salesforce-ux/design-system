/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Heading from 'app_modules/site/components/page/heading';
import PageBody from 'app_modules/site/components/page/body';
import StickyNav from 'app_modules/site/components/sticky/nav';
import CTALink from 'app_modules/site/components/cta-link';
import CodeBlock from 'app_modules/ui/code-block';
import { prefix as pf } from 'app_modules/ui/util/component';
import g from 'app_modules/global';

class FAQ extends React.Component {

  constructor(props) {
    super(props);
    this.jumpLinks = [];
    this.content = [];
    this.createContent();
  }

  addContentItem(title, content) {
    const id = _.kebabCase(title);
    this.jumpLinks.push(
      <li key={`${id}-jumplink`}>
        <a href={`#${id}`}>{title}</a>
      </li>
    );
    this.content.push(
      <Heading type="h2" id={id} key={`${id}-h2`}
        className="site-text-heading--large">
        {title}
      </Heading>,
      <div key={`${id}-content`}>{content}</div>
    );
  }

  createContent() {
    this.addContentItem(
      `What is the ${g.displayName}?`,
      <p className={pf('container--large')}>
        It is collection of design patterns, components, and guidelines
        for creating unified UI in the Salesforce ecosystem.
      </p>
    );
    this.addContentItem(
      'Is any JavaScript included as part of the framework?',
      <p className={pf('container--large')}>
        No. The {g.displayName} is a pure CSS framework that you
        can use with any front-end development framework you’d like,
        including Salesforce-specific technologies such as Visualforce
        and Lightning, as well as third-party frameworks like for
        instance React or Angular.
      </p>
    );
    this.addContentItem(
      'What browsers are supported?',
      <table className={pf('table max-medium-table--stacked-horizontal no-row-hover')}>
        <thead>
          <tr className="site-text-heading--label">
            <th scope="col">Browser</th>
            <th scope="col">Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Browser">Google Chrome</td>
            <td data-label="Version">Latest</td>
          </tr>
          <tr>
            <td data-label="Browser">Mozilla Firefox</td>
            <td data-label="Version">Latest</td>
          </tr>
          <tr>
            <td data-label="Browser">Safari</td>
            <td data-label="Version">Latest</td>
          </tr>
          <tr>
            <td data-label="Browser">Internet Explorer</td>
            <td data-label="Version">11</td>
          </tr>
          <tr>
            <td data-label="Browser">Microsoft Edge</td>
            <td data-label="Version">Latest</td>
          </tr>
        </tbody>
      </table>
    );
    this.addContentItem(
      `How can I design responsively using the ${g.displayName}?`,
      <p className={pf('container--large')}>
        We recommend that you make good use of our flexible and
        powerful <CTALink href="/components/utilities/grid" eventType="responsive-grid">Grid System</CTALink>,
        which will help you construct responsive layouts that
        scale elegantly across screen sizes.
      </p>
    );
    this.addContentItem(
      `Can I use the ${g.displayName} together with Bootstrap or any other CSS framework?`,
      <p className={pf('container--large')}>
        Yes. All CSS selectors are prefixed with <code>.slds-</code> to prevent any collisions.
      </p>
    );
    this.addContentItem(
      'Is the Salesforce Sans font full Unicode?',
      <p className={pf('container--large')}>
        Salesforce Sans contains 492 Latin script characters, and supports
        a wide range of languages. It doesn’t contain non-Latin characters,
        so in that sense it’s not &ldquo;full&rdquo; Unicode.
      </p>
    );
    this.addContentItem(
      `What CSS syntax does the ${g.displayName} use? Why do you have double hyphenations and underscores in your CSS classes?`,
      <div className={pf('container--large')}>
        <p>
          The {g.displayName} CSS uses a standard class naming
          convention called &ldquo;BEM&rdquo; (Block-Element-Modifier):
        </p>
        <ul>
          <li>Block represents a high-level component (e.g. <code>{g.filenamePrefix}-button</code>)</li>
          <li>Element represents a descendent of a component (e.g. <code>{g.filenamePrefix}-button__icon</code>)</li>
          <li>Modifier represents a different state of a block or element (e.g. <code>{g.filenamePrefix}-button--neutral</code>)</li>
        </ul>
        <p>
          For more information, refer to our <a href="/getting-started/markup-and-style/">Markup and Style page</a> and <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">this article on guidelines for BEM naming</a> which
          has more detail on why BEM is a useful convention.
        </p>
      </div>
    );
    this.addContentItem(
      'How do I display SVG icons with Lightning Components?',
      <div className={pf('container--large')}>
        <p>
          Please review <a href="/getting-started/lightning">Getting Started with Lightning</a>.
        </p>
      </div>
    );

    let compactVersion = `${g.abbreviatedName.toLowerCase()}${process.env.SLDS_VERSION.replace(/\D/g, '')}`;
    this.addContentItem(
      'How do I link to Visualforce static resources like stylesheets and icons?',
      <div>
        <p className={pf('container--large')}>
          Visualforce uses a special syntax to reference your static resources, and
          you need to edit the code you cut and paste from the {g.displayName}.
          If you want to load the master stylesheet and you uploaded the {g.displayName} as
          a static resource named <code>{compactVersion}</code> then you should
          change the <code>{'<apex:stylesheet />'}</code> value to:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">
          {`
<apex:stylesheet value="{!URLFOR($Resource.${compactVersion}, 'assets/styles/${g.moduleName}-vf.css')}" />
          `}</CodeBlock>
        </div>
        <p className={pf('container--large')}>
          This is similar for icons, for example this User one from the Standard Icons sprite:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">{`
<svg aria-hidden="true" class="${pf('icon icon--large icon-standard-user')}">
  <use xlink:href="{!URLFOR($Resource.${compactVersion}, 'assets/icons/standard-sprite/svg/symbols.svg#user')}" />
</svg>
          `}</CodeBlock>
        </div>
        <p className={pf('container--large')}>
          <em>Note: XML namespaces are required to be added to the <code>html</code> element:</em>
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">{`
<html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          `}</CodeBlock>
        </div>
        <p>
          Please refer to our <a href="https://developer.salesforce.com/trailhead/module/lightning_design_system">Trailhead Module</a> for more detailed instructions and examples.
        </p>

      </div>
    );
    this.addContentItem(
      'How do I link to Lightning static resources like stylesheets and icons?',
      <div>
        <p className={pf('container--large')}>
          Lightning Components also use a special syntax to reference your static resources, and
          you need edit the code you cut and paste from the {g.displayName}.
          If you are adding a custom scoped file as a static resource named <code>{compactVersion}</code> then you should
          include the style sheet in this format:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">{`
<ltng:require styles="/resource/${compactVersion}/assets/styles/${g.moduleName}-ltng.css"/>
          `}</CodeBlock>
        </div>
        <p><a href="https://tools.lightningdesignsystem.com/css-customizer">A tool to create your custom CSS is available here.</a>
        </p>
      </div>
    );
    this.addContentItem(
      'I am seeing Visualforce errors like: The prefix xlink for attribute xlink:href associated with an element ... is not bound',
      <div>
        <p>
          This is likely because the namespace needs to be added to the HTML element:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">{`
<html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          `}</CodeBlock>
        </div>
        <p>
          Please refer to our <a href="https://developer.salesforce.com/trailhead/module/lightning_design_system">Trailhead Module</a> for more detailed instructions and examples.
        </p>
      </div>
    );
  }

  render () {
    return (
      <PageBody {...this.props} anchorTitle="Frequently Asked Questions" contentClassName={pf('grid wrap')}>
        <StickyNav>
          <div className={pf('site-menu--jump-links')}>
            <h3 className="site-text-heading--label">Questions</h3>
            <ul className={pf('list--vertical has-block-links--space')}>
              {this.jumpLinks}
            </ul>
          </div>
        </StickyNav>
        <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
          {this.content}
        </div>
      </PageBody>
    );
  }

}

export default <FAQ />;
