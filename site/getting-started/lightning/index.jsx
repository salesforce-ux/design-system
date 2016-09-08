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
import { prefix as pf } from 'app_modules/ui/util/component';

import g from 'app_modules/global';

const versionNumber = process.env.SLDS_VERSION.replace(/(v|\.)/g, '');
const moduleName = g.moduleName;
const staticAssetName = g.filenamePrefix.toUpperCase() + versionNumber;
const lightningTutorialUrl = 'https://developer.salesforce.com/trailhead/project/slds-lightning-components-workshop';

export default (
  <PageBody anchorTitle="Lightning Apps and Components" contentClassName={pf('container--large')}>

    <p className="site-text-introduction">
      The {g.displayName} is ready to use in your Lightning apps and components.
    </p>

      <p>The Lightning Design System CSS is now automatically included for Lightning Components running in the Lightning Experience and Salesforce S1 mobile application (via app.css). It is no longer necessary to add a static resource for Lightning Components running within these environments.</p>
      <p>There <strong>are</strong> still cases where you will need to use a static resource with Lightning Components. Current examples are —  when building a standalone Lightning Application (my.app), or in a component that will be used via Lightning Out. In this case, you'll need to <a href="https://tools.lightningdesignsystem.com/css-customizer">create a customized scoped CSS file to use.</a></p>
    <p>
      We have prepared a <a href={lightningTutorialUrl}>self-guided workshop</a> to guide you through installation, usage, and examples. It includes details on how to use the Design System SVG spritemap icons in Lightning components.
    </p>
    <p>
      Please note the following when using the Lightning Design System with Lightning components:
    </p>
    <ul className={pf('list--dotted')}>
      <li>When using the component sample code from the Trailhead module, be sure to replace all static resource paths with the Lightning resource URL syntax, as summarized in the <a href="/faq#how-do-i-link-to-lightning-static-resources-like-stylesheets-and-icons">FAQ</a></li>
      <li>
        For details on how to use the Design System SVG spritemap icons in Lightning components, please review the <a href={lightningTutorialUrl}>tutorial</a> which covers this in detail.  Also note that when using SVG spritemap image icons with MSIE you will need to use a small script called <a href="https://github.com/jonathantneal/svg4everybody">svg4everybody</a>
      </li>
    </ul>

    <p>
      You can also find a range of open-sourced sample components in the <a href="https://github.com/ForceDotComLabs/sldsx">ForceDotComLabs/sldsx</a> project on github.
    </p>
    <p>
      Finally, we’d love to hear your feedback. Share your thoughts about any aspect of this
      tutorial or the {g.displayName} in general via our <a href="https://github.com/salesforce-ux/design-system/issues">GitHub issues</a>.
    </p>
  </PageBody>
);
