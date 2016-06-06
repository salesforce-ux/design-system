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


import g from 'app_modules/global';

const versionNumber = process.env.SLDS_VERSION.replace(/(v|\.)/g, '');
const moduleName = g.moduleName;
const staticAssetName = g.filenamePrefix.toUpperCase() + versionNumber;

export default (
  <PageBody anchorTitle="Visualforce" contentClassName={pf('container--large')}>
    <p className="site-text-introduction">
      Create a custom CSS file to use the {g.displayName} in Visualforce.
    </p>
    <p>To use the Design System in Visualforce you need to create a CSS file with a custom scoped outer wrapper. <a href="https://tools.lightningdesignsystem.com/css-customizer">A tool to create your custom CSS is available here.</a></p>
    <p>
      If you want to dive straight in, here are a few things to note when working with the {g.displayName} in Visualforce:
    </p>
    <ul className={pf('list--dotted')}>
      <li>When using the component sample code from this site, be sure to replace all static resource paths with the Visualforce URLFOR syntax, as summarized in the <a href="/faq#how-do-i-link-to-visualforce-static-resources-like-stylesheets-and-icons">FAQ</a>.</li>
      <li>Apex tags such as <code>&lt;apex:pageblock&gt;</code> and <code>&lt;apex:inputField&gt;</code> are not yet supported for use with the {g.displayName}. The Trailhead unit on <a href="https://developer.salesforce.com/trailhead/lex_dev_visualforce/lex_dev_visualforce_design">visualforce development within Lightning</a> explains options for styling legacy code to look like the new Lightning UI. For best results with the {g.displayName}, use the markup style as outlined in the component examples, and use JavaScript Remoting, Remote Objects or a similar API for data access.</li>
      <li>To use the SVG spritemap icons, add the attributes <code>xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"</code> to the <code>&lt;html&gt;</code> element as documented in the <a href="https://developer.salesforce.com/trailhead/module/lightning_design_system">Trailhead module</a>. Do not add the attributes to individual <code>&lt;svg&gt;</code> elements as can cause a page rendering bug.</li>
      <li>To use SVG spritemap image icons with Internet Explorer, use the <a href="https://github.com/jonathantneal/svg4everybody">svg4everybody</a> script.</li>
      <li>Currently, if you need to use the Salesforce header or sidebar, you can not specify the <code>xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"</code> on the <code>&lt;html&gt;</code> element. In this case, the SVG icons are not supported.</li>
    </ul>
    <p>
      Details on all the above, as well as introductions to many of the {g.displayName} components, are documented in the <a href="https://developer.salesforce.com/trailhead/module/lightning_design_system">Trailhead module</a>.
    </p>
    <p>
      Finally, we&rsquo;d love to hear your feedback. Please share your thoughts about any aspect of the {g.displayName} via our <a href="https://github.com/salesforce-ux/design-system/issues">GitHub issues</a>.
    </p>
  </PageBody>
);
