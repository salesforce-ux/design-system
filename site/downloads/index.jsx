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
import CTALink from 'app_modules/site/components/cta-link';
import g from 'app_modules/global';

export default (
  <PageBody anchorTitle="Downloads" contentClassName="slds-container--large">

    <p className="site-text-introduction">
      We provide multiple options for downloading the Design System, as well as specific downloads for icons, design tokens and swatches.
    </p>

    <h2 className="site-text-heading--large" id="framework">Find us on GitHub</h2>
    <p>
      Instead of downloading the Design System you can also <a href="https://github.com/salesforce-ux/design-system">fork or clone it on GitHub</a>.
    </p>
    <CTALink href="https://github.com/salesforce-ux/design-system" className="slds-button slds-button--neutral" eventType="GitHub">
      <img src="/assets/images/social-github-icon-only.svg" className="slds-button__icon--large slds-button__icon--left" />
      Design System on GitHub
    </CTALink>

    <h2 className="site-text-heading--large" id="npm-package">npm Package</h2>

    <p>
      If you use <a href="https://www.npmjs.com/">npm</a> in your local development environment, it can be installed with the following command:
    </p>

    <div className="site-code--content slds-scrollable--x">
      <CodeBlock language="bash">{`
npm install @salesforce-ux/design-system --save
      `}</CodeBlock>
    </div>

    <h2 className="site-text-heading--large" id="bower-package">Bower Package</h2>

    <p>
      If you use <a href="http://bower.io/">Bower</a> in your local development environment, it can be installed with the following command:
    </p>

    <div className="site-code--content slds-scrollable--x">
      <CodeBlock language="bash">{`
bower install salesforce-lightning-design-system --save
      `}</CodeBlock>
    </div>

    <h2 className="site-text-heading--large" id="zip">Design System Zip</h2>
    <p>
      Download the pre-built <abbr title="Cascading Style Sheets">CSS</abbr> framework, font
      and icons to include in your project. See
      the <CTALink href="/release-notes" eventType="release-notes-top">release notes</CTALink> for
      details on the latest updates.
      </p>
      <p><strong>Note:</strong> If you need to use the scoped files that were previously included in the download, we have <a href="https://tools.lightningdesignsystem.com/css-customizer">provided a tool for you to create your custom-scoped CSS</a>. You will need to scope to your own unique scoping class name instead of <code>.slds</code>
    </p>
    <p>
      All source code is licensed under <a href="http://opensource.org/licenses/BSD-2-Clause">BSD License Clause 2</a>. All icons and images are licensed under <a href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0</a>. The font is licensed under our <a href="/assets/licenses/License-for-font.txt">font license</a>.
    </p>
    <form action={`/${g.downloadPath(process.env.SLDS_VERSION)}`}>
      <CTALink eventName="Download" eventType="css">
        <button className="slds-button slds-button--neutral">
          Download Design System ({process.env.SLDS_VERSION})
        </button>
      </CTALink>
    </form>

    <h3 className="site-text-heading--large" id="archives">Archives</h3>
    <ul className="slds-list--dotted">
      <li><CTALink href="https://archive-2_0_3.lightningdesignsystem.com" eventType="SLDS-Archives">Version 2.0.3</CTALink></li>
      <li><CTALink href="https://archive-1_0_5.lightningdesignsystem.com" eventType="SLDS-Archives">Version 1.0.5</CTALink></li>
      <li><CTALink href="http://design-system-v-0-12-2.herokuapp.com/" eventType="SLDS-Archives">Version 0.12.2</CTALink></li>
    </ul>

    <h2 className="site-text-heading--large" id="ui-kit">Sketch UI Kit</h2>
    <p>
      A Sketch file of common design patterns.
    </p>
    <form action={'/assets/downloads/salesforce-lightning-design-system-ui-kit.zip'}>
      <CTALink eventName="Download" eventType="uikit">
        <button className="slds-button slds-button--neutral">
          Download the Sketch UI Kit
        </button>
      </CTALink>
    </form>

    <h2 className="site-text-heading--large" id="unmanaged">Design System Unmanaged Package</h2>
    <p><strong>The unmanaged package has been deprecated.</strong></p>
    <p>The Lightning Design System CSS is now automatically included for Lightning Components running in the Lightning Experience and Salesforce S1 mobile application, as well as when extending the SLDS template when building a standalone Lightning Application (my.app), in LC4VF, or in a component that will be used via Lightning Out. It is no longer necessary to add a static resource for Lightning Components running within these environments. Please see <a href="/platforms/lightning/">the Lightning page</a> for more information on extending the template.</p>
    <p>There <strong>are</strong> still cases where you will need to use a static resource — specifically, within Visualforce. In this case, we have <a href="https://tools.lightningdesignsystem.com/css-customizer">provided a tool for you to create your custom-scoped CSS</a>.</p>

    <h2 className="site-text-heading--large" id="icons">Icons</h2>
    <p>
      Download all <CTALink href="/icons" eventType="icons-link-click">icon sets</CTALink>. Each icon is
      available as <abbr title="Scalable Vector Graphics">SVG</abbr> and in
      two different PNG sizes.
    </p>
    <p>
      All icons are licensed under <a href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0</a>.
    </p>
    <form action="/assets/downloads/salesforce_icons.zip">
      <CTALink eventName="Download" eventType="icons">
        <button className="slds-button slds-button--neutral">
          Download Icons
        </button>
      </CTALink>
    </form>

    <h2 className="site-text-heading--large" id="design-tokens">Design Tokens</h2>
    <p>
      <CTALink href="/design-tokens" eventType="design-tokens-link-click">Design Tokens</CTALink> are available in multiple
      formats depending on which technology your application uses. For
      web-based applications, you can use our tokens
      as <CTALink href="http://alistapart.com/article/getting-started-with-sass#section4" eventType="alistapart-link-click">variables</CTALink> through
      CSS preprocessors <CTALink href="http://sass-lang.com/" eventType="sass-link-click">Sass</CTALink>, <CTALink href="http://lesscss.org/" eventType="lesscss-link-click">Less</CTALink>, and <CTALink href="https://learnboost.github.io/stylus/" eventType="stylus-link-click">Stylus</CTALink>.
      We recommend Sass as we use it internally, it is well-documented, and
      is the industry standard.
    </p>
    <p>
      For native applications, our tokens are available in XML and JSON
      formats for the Android and iOS platforms, respectively.
    </p>
    <p>
      Using Lightning Components? Read the Developer Guide
      on <a href="https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/tokens_intro.htm">Styling with Design Tokens</a>.
    </p>
    <div className="slds-grid slds-wrap">

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-3 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="sass-design-tokens">Sass</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_scss.zip">
          <CTALink eventName="Download" eventType="design-token-scss">
            <button className="slds-button slds-button--neutral">
              Download Sass Tokens
            </button>
          </CTALink>
        </form>
      </div>

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-3 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="less-design-tokens">Less</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_less.zip">
          <CTALink eventName="Download" eventType="design-token-less">
            <button className="slds-button slds-button--neutral">
              Download Less Tokens
            </button>
          </CTALink>
        </form>
      </div>

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-3 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="stylus-design-tokens">Stylus</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_styl.zip">
          <CTALink eventName="Download" eventType="design-token-stylus">
            <button className="slds-button slds-button--neutral">
              Download Stylus Tokens
            </button>
          </CTALink>
        </form>
      </div>

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-3 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="android-design-tokens">Android</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_android.zip">
          <CTALink eventName="Download" eventType="design-token-android">
            <button className="slds-button slds-button--neutral">
              Download Android Tokens
            </button>
          </CTALink>
        </form>
      </div>

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-3 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="ios-design-tokens">iOS</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_ios.zip">
          <CTALink eventName="Download" eventType="design-token-ios">
            <button className="slds-button slds-button--neutral">
              Download iOS Tokens
            </button>
          </CTALink>
        </form>
      </div>

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-3">
        {/* Workaround… */}
      </div>
    </div>

    <h2 className="site-text-heading--large" id="swatches">Swatches</h2>
    <p>
      You can import color swatches for use in design applications like Photoshop and Sketch. Since the CLR format does not include the alpha value, we&rsquo;ve appended each color’s name with it.
    </p>
    <div className="slds-grid slds-wrap">

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-2 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="ase-swatches">ASE (Adobe)</h3>
        <form action="/assets/downloads/swatches/salesforce-lightning-design-system.ase">
          <CTALink eventName="Download" eventType="swatch-ase">
            <button className="slds-button slds-button--neutral">
              Download ASE Swatch
            </button>
          </CTALink>
        </form>
      </div>

      <div className="slds-col slds-size--1-of-1 slds-medium-size--1-of-2 slds-p-vertical--large">
        <h3 className="site-text-heading--label" id="clr-swatches">CLR (iOS)</h3>
        <form action="/assets/downloads/swatches/salesforce-lightning-design-system.clr">
          <CTALink eventName="Download" eventType="swatch-clr">
            <button className="slds-button slds-button--neutral">
              Download CLR Swatch
            </button>
          </CTALink>
        </form>
      </div>
    </div>
  </PageBody>
);
