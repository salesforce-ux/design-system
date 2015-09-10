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
import version from '.generated/site.version';
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
import g from 'app_modules/global';
import { Link } from 'react-router';
import CTALink from 'app_modules/site/components/cta-link';

const versionNumber = version.sldsVersion.replace(/(v|\.)/g, '');
const moduleName = g.moduleName;
const staticAssetName = g.filenamePrefix.toUpperCase() + versionNumber;
const lightningTutorialUrl = 'https://developer.salesforce.com/trailhead/project/slds-lightning-components-workshop';

export default (
  <PageBody anchorTitle="Lightning Apps and Components" contentClassName={pf('container--medium')}>

    <p className="site-text-introduction">
      The {g.displayName} is ready to use in your Lightning apps and components.
    </p>
    <p>
      We have prepared a <a href={lightningTutorialUrl}>self-guided workshop</a> to guide you through installation, usage, and examples. It also includes details on how to use the Design System SVG spritemap icons in Lightning components.
    </p>
    <p>
      You can also find a range of open-sourced sample components in the <a href="https://github.com/ForceDotComLabs/sldsx">ForceDotComLabs/sldsx</a> project on github.
    </p>
    <p>
      Also, please note the following when using the Lightning Design System with Lightning components:
    </p>
    <ul className={pf('list--dotted')}>
      <li>When using the component sample code from this site, be sure to replace all static resource paths with the Lightning resource URL syntax, as summarized in the <a href="/faq#how-do-i-link-to-lightning-static-resources-like-stylesheets-and-icons">FAQ</a></li>
      <li>
        For details on how to use the Design System SVG spritemap icons in Lightning components, please review the <a href={lightningTutorialUrl}>tutorial</a> which covers this in detail.  Also note that when using SVG spritemap image icons with MSIE you will need to use a small script called <a href="https://github.com/jonathantneal/svg4everybody">svg4everybody</a>
      </li>
    </ul>
    <p>
      Finally, we’d love to hear your feedback. Share your thoughts about any aspect of this
      tutorial or the {g.displayName} in general via our <a href="https://github.com/salesforce-ux/design-system/issues">GitHub issues</a>.
    </p>
  </PageBody>
);
