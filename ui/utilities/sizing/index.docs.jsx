/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ComponentDocs = require('app_modules/site/components/page/component/docs');
const CodeBlock = require('app_modules/ui/code-block');
import { Link } from 'react-router';
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const globals = require('app_modules/global');
const CodeClass = require('app_modules/site/components/code-class');

module.exports = (
<ComponentDocs>
  <p className="site-text-introduction">Sizing utilities allow for easy width sizing on an element.</p>
  <p>Our sizing class names are set up in a human-readable format, e.g. <CodeClass className="size--1-of-2" />. This equates to a width of 50%.</p>
  <p>By default, a group of sizing helpers are created based on standard grid column spans of &ndash;2, 3, 4, 5, 6, and 12. For example, if you need 3 cards to horizontally align along the same x-axis, you would use the class <CodeClass className="size--1-of-3" /> on each element. This will make each card take up 33.333% of containing section.</p>
  <p>Our sizing helpers have the option to be responsive. By pre-pending a breakpoint name to a sizing helper, e.g. <CodeClass className="medium-size--1-of-3" /> you will output a width at the specified breakpoint name. Here is an overview of our available breakpoint names:</p>
  <div className={pf('scrollable--x m-bottom--medium')}>
    <table className={pf('table table--bordered max-medium-table--stacked-horizontal no-row-hover')}>
      <thead>
        <tr className="site-text-heading--label">
          <th scope="col">Breakpoint Name</th>
          <th scope="col">Breakpoint Width</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Breakpoint Name:">small-</td>
          <td data-label="Width:">30rem / 480px</td>
        </tr>
        <tr>
          <td data-label="Breakpoint Name:">medium-</td>
          <td data-label="Width:">48rem / 768px</td>
        </tr>
        <tr>
          <td data-label="Breakpoint Name:">large-</td>
          <td data-label="Width:">64rem / 1024px</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>Our responsive sizing helpers are built upon a mobile first approach. To achieve the desired outcome of this approach, you will need to append responsive sizing helpers to an element that overrides the previous breakpoint. A default sizing helper is <strong>required</strong> and responsive sizing helpers are additive. The following example demonstrates the class name position for each breakpoint:</p>
  <p><code>&lt;div class="[default] [small size override] [medium size override] [large size override]"&gt;</code></p>
  <p>A real world example would look like this:</p>
  <p><code>&lt;div class="{globals.cssPrefix}size--1-of-2 {globals.cssPrefix}small-size--1-of-3 {globals.cssPrefix}medium-size--1-of-4 {globals.cssPrefix}large-size--1-of-3"&gt;</code></p>
  <p>This will equate to the following width output for your element:</p>
  <div className={pf('site-code--content scrollable--x')}>
    <CodeBlock language="scss">{`
.foo {
  width: 50%;
  @media screen-only and (min-width:30rem) {
    width: 33.3333%;
  }
  @media screen-only and (min-width:48rem) {
    width: 25%;
  }
  @media screen-only and (min-width:64rem) {
    width: 33.3333%;
  }
}
    `}</CodeBlock>
  </div>
  <p>See <Link to="/components/grid-system">Grid System</Link> for more information and examples.</p>
</ComponentDocs>
);
