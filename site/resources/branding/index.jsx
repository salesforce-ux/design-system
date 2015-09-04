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
import Sticky from 'app_modules/site/components/sticky';
import CodeBlock from 'app_modules/ui/code-block';
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
import globals from 'app_modules/global';
import { Link } from 'react-router';
const moduleName = globals.moduleName;

export default (
   <PageBody anchorTitle="Branding" contentClassName={pf('grid wrap')}>
    <Sticky className={pf('site-sidebar-content col size--1-of-1 large-size--2-of-6 large-order--2')}>
      <div className={pf('site-menu--jump-links')}>
        <h3 className="site-text-heading--label">Steps</h3>
        <ul className={pf('list--vertical has-block-links')}>
          <li><a href="#step-1">Setup NodeJS</a></li>
          <li><a href="#step-2">Override Design Tokens</a></li>
          <li><a href="#step-3">Recompile the CSS</a></li>
        </ul>
      </div>
    </Sticky>

    <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
      <div className={pf('container--medium')}>
        <p className="site-text-introduction">You can customize the {globals.displayName} CSS framework to match the visual design of your brand.</p>

        <p>In this tutorial, you will learn how to override the provided design tokens using
        the popular CSS preprocessor <a href="http://sass-lang.com/community">Sass</a>.</p>

        <p>Before proceeding, first complete the <Link to="/getting-started/getting-started-node-js">Getting Started with Node JS</Link> tutorial.</p>

        <p>Note: these changes will not affect the global header and container of the Salesforce app, but will affect your apps and components inside the Salesforce container.</p>

        <h2 id="step-1" className="site-text-heading--large">Step 1: Setup NodeJS</h2>

        <p>Before proceeding, first complete the <a href="/getting-started/getting-started-node-js">Getting Started with Node JS</a> tutorial.</p>

        <p>Once completed, you should have a <code>getting-started-node-js</code> directory.</p>

        <h2 id="step-2" className="site-text-heading--large">Step 2: Override Design Tokens</h2>

        <p>Open <code>getting-started-node-js/styles.scss</code> in your text editor.
        It should look something like this:</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="scss">{`

// Override tokens here:
// $color-text-default: red;

// ${globals.displayName}
@import "${moduleName}/scss/index.scss";
        `}</CodeBlock>
      </div>

      <p className={pf('container--medium')}>
        In the section marked &ldquo;Override tokens here&rdquo; add any tokens that you
        wish to change and then save the file.
      </p>

      <div className={pf('site-code--content always-show m-bottom--medium')}>
        <CodeBlock language="scss">{`
// Override tokens here:
$color-text-default: red;
        `}</CodeBlock>
      </div>

      <div className={pf('container--medium')}>
        <h2 id="step-3" className="site-text-heading--large">Step 3: Recompile the CSS</h2>

        <p>Once you have finished making your edits, you&rsquo;ll need to compile a new
        CSS file for your project.</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
cd getting-started-node-js
node styles.js > www/assets/styles/${moduleName}-custom.css
        `}</CodeBlock>
      </div>

      <div className={pf('container--medium')}>
        <p>If successful, you should now have a customized version of the {globals.displayName} CSS framework!</p>

        <p>To see the customizations, simply update the <code>link</code> tag in
        your <code>index.html</code> file.</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="markup">{`
<link type="text/css" rel="stylesheet" href="/assets/styles/${moduleName}-custom.css">
        `}</CodeBlock>
      </div>

      <section className={pf('box theme--shade m-bottom--medium')}>
        <p className={pf('container--medium')}>
          <strong>Note:</strong> If you plan to use your customized CSS inside a Visualforce page
          you will need to modify the <code>url()</code> paths. Below is a unix command that will update the
          paths and create a file called <code>salesforce-design-system-custom-vf.css</code>
        </p>

        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
sed 's/url("\\/assets/url("..\/g' < ${moduleName}-custom.css > ${moduleName}-custom-vf.css
          `}</CodeBlock>
        </div>
      </section>

      <div className={pf('container--medium')}>
        <p>If you are using Windows, here is a discussion about some <a target="_blank" href="http://stackoverflow.com/questions/60034/how-can-you-find-and-replace-text-in-a-file-using-the-windows-command-line-envir?lq=1">sed alternatives</a>.</p>

        <h2 id="step-4" className="site-text-heading--large">Step 4: Advanced &mdash; Customize Your Brand Colors</h2>

        <p>In our design, we have 4 &ldquo;brand blues&rdquo; that we use throughout the app
        and on various UI elements.</p>

        <p>We recommend that you develop a similar system, with 4 &ldquo;brand hues&rdquo;. Here are our
        colors for reference, indexed 1&ndash;4.</p>

        <table className={pf('table site-color-mapping no-row-hover')}>
          <thead>
            <tr className="site-text-heading--label">
              <th scope="col">Index</th>
              <th scope="col">Color</th>
              <th scope="col">Hex Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{width: '1%'}}>1</td>
              <td style={{backgroundColor: '#1589ee'}}></td>
              <td>#1589ee</td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{backgroundColor: '#0070d2'}}></td>
              <td>#0070d2</td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{backgroundColor: '#005fb2'}}></td>
              <td>#005fb2</td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{backgroundColor: '#00396b'}}></td>
              <td>#00396b</td>
            </tr>
          </tbody>
        </table>

        <p>While not imperative, we highly recommend that colors 2&ndash;4 pass color
        contrast ratios against white for accessibility reasons (4.5:1 for WCAG AA).
        If you are unfamiliar with how to determine color contrast ratios,
        please use the WebAIM <a href="http://webaim.org/resources/contrastchecker/">Color Contrast Checker</a>.
        Input your brand colors into the foreground or background field with white
        in the other field. If you get a ratio of 4.5:1 or higher for each brand color,
        you&rsquo;re all set!</p>

        <p>If you want to create a fully branded version of the {globals.displayName},
        here is a list of design tokens that you would need to override. We have mapped
        each token to the corresponding brand color index.</p>

        <ul>
          <li><code>$color-brand</code> → 1</li>
          <li><code>$color-border-brand</code> → 1</li>
          <li><code>$color-border-tab-selected</code> → 1</li>
          <li><code>$color-border-input-active</code> → 1</li>
          <li><code>$color-border-row-selected-hover</code> → 1</li>
          <li><code>$color-background-chrome-mobile</code> → 2</li>
          <li><code>$color-background-modal-brand</code> → 2</li>
          <li><code>$color-background-button-brand</code> → 2</li>
          <li><code>$color-background-input-checkbox-selected</code> → 2</li>
          <li><code>$color-text-button-default</code> → 2</li>
          <li><code>$color-text-pill</code> → 2</li>
          <li><code>$color-text-link</code> → 2</li>
          <li><code>$color-text-tab-label-selected</code> → 2</li>
          <li><code>$color-text-icon-brand</code> → 2</li>
          <li><code>$color-border-row-selected</code> → 2</li>
          <li><code>$color-border-button-brand</code> → 2</li>
          <li><code>$color-background-button-brand-hover</code> → 3</li>
          <li><code>$color-text-button-default-hover</code> → 3</li>
          <li><code>$color-text-icon-default-hover</code> → 3</li>
          <li><code>$color-text-link-hover</code> → 3</li>
          <li><code>$color-text-link-focus</code> → 3</li>
          <li><code>$color-text-tab-label-hover</code> → 3</li>
          <li><code>$color-text-tab-label-focus</code> → 3</li>
          <li><code>$color-background-button-brand-active</code> → 4</li>
          <li><code>$color-text-button-default-active</code> → 4</li>
          <li><code>$color-text-link-active</code> → 4</li>
          <li><code>$color-text-tab-label-active</code> → 4</li>
        </ul>

        <p>It is important to note that multiple design tokens reference the same brand color.
        For instance: <code>$color-brand</code> and <code>$color-border-brand</code> both reference
        brand color number 1.</p>

        <p>Once you have determined your brand colors, override the tokens, recompile the CSS, and iterate!</p>
      </div>
    </div>
  </PageBody>
);
