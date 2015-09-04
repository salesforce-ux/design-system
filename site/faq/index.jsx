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
import Sticky from 'app_modules/site/components/sticky';
import CTALink from 'app_modules/site/components/cta-link';
import version from '.generated/site.version';
import CodeBlock from 'app_modules/ui/code-block';
import { prefix as pf } from 'app_modules/ui/util/component';
import { Link } from 'react-router';
import g from 'app_modules/global';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jumpLinks: [],
      content: []
    };
  }

  componentDidMount() {
    this.createContent();
  }

  addContentItem(titleString, contentDom) {
    let kTitle = this.kebabTitle(titleString);

    this.state.jumpLinks.push(<li key={`${kTitle}-jumplink`}>
      <a href={`#${kTitle}`}>{titleString}</a>
    </li>);
    this.state.content.push(<h2 id={kTitle} className="site-text-heading--large" key={`${kTitle}-h2`}>
      {titleString}
    </h2>);
    this.state.content.push(<div key={`${kTitle}-content`}>{contentDom}</div>);

    this.setState({
      jumpLinks: this.state.jumpLinks,
      content: this.state.content
    });
  }

  createContent() {
    this.addContentItem(
      `What is the ${g.displayName}?`,
      <p className={pf('container--medium')}>
        It is collection of design patterns, components, and guidelines
        for creating unified UI in the Salesforce ecosystem.
      </p>
    );
    this.addContentItem(
      `Is any JavaScript included as part of the framework?`,
      <p className={pf('container--medium')}>
        No. The {g.displayName} is a pure CSS framework that you
        can use with any front-end development framework you’d like,
        including Salesforce-specific technologies such as Visualforce
        and Lightning, as well as third-party frameworks like for
        instance React or Angular.
      </p>
    );
    this.addContentItem(
      `What browsers are supported?`,
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
        </tbody>
      </table>
    );
    this.addContentItem(
      `How can I design responsively using the ${g.displayName}?`,
      <p className={pf('container--medium')}>
        We recommend that you make good use of our flexible and
        powerful <CTALink href="/components/grid-system" ctaEventName='responsive-grid'>Grid System</CTALink>,
        which will help you construct responsive layouts that
        scale elegantly across screen sizes.
      </p>
    );
    this.addContentItem(
      `Can I use the ${g.displayName} together with Bootstrap or any other CSS framework?`,
      <p className={pf('container--medium')}>
        Yes, but you have to use the {g.moduleName}-scoped.css. All CSS selectors are uniquely scoped and prefixed to prevent any collisions.
      </p>
    );
    this.addContentItem(
      `Is the Salesforce Sans font full Unicode?`,
      <p className={pf('container--medium')}>
        Salesforce Sans contains 492 Latin script characters, and supports
        a wide range of languages. It doesn’t contain non-Latin characters,
        so in that sense it’s not &ldquo;full&rdquo; Unicode.
      </p>
    );
    this.addContentItem(
      `What CSS syntax does the ${g.displayName} use? Why do you have double hyphenations and underscores in your CSS classes?`,
      <div className={pf('container--medium')}>
        <p>
          The {g.displayName} CSS uses a standard class naming
          convention called &ldquo;BEM&rdquo; (Block-Element-Modifier):
        </p>
        <ul>
          <li>Block represents a high-level component (e.g. <code>{g.filenamePrefix}-button</code>)</li>
          <li>Element represents a descendent of a component (e.g. <code>{g.filenamePrefix}-button__icon</code>)</li>
          <li>Modifier represents a different state of a block or element (e.g. <code>{g.filenamePrefix}-button__icon--x-small</code>)</li>
        </ul>
        <p>
          Using double rather than single hyphens and underscores means that
          the block or modifier can itself contain hyphens or underscores, for
          example <code>--x-small</code>.
        </p>
        <p>
          For more information, refer to <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">this article on guidelines for BEM naming</a> which
          has more detail on why BEM is a useful convention; we would
          highly encourage that you read it if you are confused.
        </p>
      </div>
    );
    this.addContentItem(
      `How do I display SVG icons with Lightning Components?`,
      <div className={pf('container--medium')}>
        <p>
          Please review <Link to="/getting-started/lightning">Getting Started with Lightning</Link>.
        </p>
      </div>
    );

    let compactVersion = `${g.abbreviatedName.toLowerCase()}${version.sldsVersion.replace(/\D/g, '')}`;
    this.addContentItem(
      `How do I link to Visualforce static resources like stylesheets and icons?`,
      <div>
        <p className={pf('container--medium')}>
          Visualforce uses a special syntax to reference your static resources, and
          you need to edit the code you cut and paste from the {g.displayName}.
          If you want to load the master stylesheet and you uploaded the {g.displayName} as
          a static resource named <code>{compactVersion}</code> then you should
          change the <code>{`<apex:stylesheet />`}</code> value to:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">
          {`
<apex:stylesheet value="{!URLFOR($Resource.${compactVersion}, 'assets/styles/${g.moduleName}-vf.css')}" />
          `}</CodeBlock>
        </div>
        <p className={pf('container--medium')}>
          This is similar for icons, for example this User one from the Standard Icons sprite:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">{`
<svg aria-hidden="true" class="${pf('icon icon--large icon-standard-user')}">
  <use xlink:href="{!URLFOR($Resource.${compactVersion}, 'assets/icons/standard-sprite/svg/symbols.svg#user')}" />
</svg>
          `}</CodeBlock>
        </div>
        <p className={pf('container--medium')}>
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
      `How do I link to Lightning static resources like stylesheets and icons?`,
      <div>
        <p className={pf('container--medium')}>
          Lightning Components also use a special syntax to reference your static resources, and
          you need edit the code you cut and paste from the {g.displayName}.
          If you want to load the master stylesheet and you uploaded the {g.displayName} as
          a static resource named <code>{compactVersion}</code> then you should
          include the style sheet like:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="javascript">{`
<ltng:require styles="/resource/${compactVersion}/assets/styles/${g.moduleName}.css"/>
          `}</CodeBlock>
        </div>
      </div>
    );
    this.addContentItem(
      `I am seeing Visualforce errors like: The prefix xlink for attribute xlink:href associated with an element ... is not bound`,
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

  kebabTitle(title) {
    return title.
        split(/\s+/).
        map(x => x.toLowerCase().replace(/\W/g, '')).
        join('-');
  }

  render () {
    return <PageBody anchorTitle="Frequently Asked Questions" contentClassName={pf('grid wrap')}>
      <Sticky key="sticky-menu" className={pf('site-sidebar-content col size--1-of-1 large-size--2-of-6 large-order--2')}>
        <div className={pf('site-menu--jump-links')}>
          <h3 className="site-text-heading--label">Questions</h3>
          <ul className={pf('list--vertical has-block-links')}>
            {this.state.jumpLinks}
          </ul>
        </div>
      </Sticky>
      <div key="main-content" className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
        {this.state.content}
      </div>
    </PageBody>;
  }
}

export default (<Page />);
