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

import g from 'app_modules/global';

const versionNumber = process.env.SLDS_VERSION.replace(/(v|\.)/g, '');
const moduleName = g.moduleName;
const staticAssetName = g.filenamePrefix.toUpperCase() + versionNumber;
const lightningTutorialUrl = 'https://developer.salesforce.com/trailhead/project/slds-lightning-components-workshop';

export default (
  <PageBody anchorTitle="Lightning Apps and Components" contentClassName="slds-container--large">
    <p className="site-text-introduction">
      The {g.displayName} is ready to use in your Lightning apps and
      components. It is now automatically included for Lightning Components
      running in the Lightning Experience and Salesforce S1 mobile application. It is no longer necessary to add a static resource for
      Lightning Components running within these environments.
    </p>

    <p>
      Your <a href="https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/lightning_out_dependencies.htm">Lightning Out</a>, <a href="https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/components_visualforce.htm?search_text=lc4vf">LC4VC</a>, and <a href="https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/apps_slds.htm">Lightning Application</a> automatically get the Lightning Design System
      stylesheets and design tokens by using the linked instructions to each.
      This is the easiest way to stay up-to-date and consistent with SLDS
      enhancements.</p>

    <p><strong>Note:</strong> If you still need to use a static resource with the scoped files that were previously included in the download, we have <a href="https://tools.lightningdesignsystem.com/css-customizer">provided a tool for you to create your custom-scoped CSS</a>. You will need to scope to your own unique scoping class name instead of <code>.slds</code>.
    </p>

    <p>
      Please note the following when using the Lightning Design System with
      Lightning components:
    </p>

    <ul className="slds-list--dotted">
      <li>
        The Design System uses SVG icons. You can use them in your Lightning components by using one of the new Base Lightning Components called <a href="https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_icon.htm?search_text=lightning:">lightning:icon</a>. You can explore the other Base Components in the Reference section of the Developer Guide.
      </li>

      <li>
        For details on how to use Design Tokens, read our documentation
        on <a href="https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/tokens_intro.htm">Styling with Design Tokens</a>.
      </li>

      <li>
        You can also find a range of open-sourced sample components in
        the <a href="https://github.com/ForceDotComLabs/sldsx">ForceDotComLabs/sldsx</a> project
        on GitHub.
      </li>
    </ul>

    <p>
      Finally, we’d love to hear your feedback. Share your thoughts about any
      aspect of this
      tutorial or the {g.displayName} in general via
      our <a href="https://github.com/salesforce-ux/design-system/issues">GitHub issues</a>.
    </p>
  </PageBody>
);
