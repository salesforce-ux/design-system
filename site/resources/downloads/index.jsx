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
import version from '.generated/site.version';
import CTALink from 'app_modules/site/components/cta-link';
import { logDownloadEvent } from 'app_modules/site/util/localytics';
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
import g from 'app_modules/global';
import { Link } from 'react-router';

const links = {
  zip: {
    framework: g.downloadPath(version.sldsVersion)
  }
};

function managedPackageUrls() {
  return g.managedPackageUrls.map((item, idx) => {
    return <li key={`package-v${item.version}`}>
      <a href={item.url}>Version {item.version}</a>
    </li>;
  });
}

export default (
  <PageBody anchorTitle="Downloads" contentClassName={pf('container--medium')}>

    <p className="site-text-introduction">
      We provide multiple options for downloading the Design System, as well as specific downloads for icons, design tokens and swatches.
    </p>

    <h2 className="site-text-heading--large" id="framework">Design System Zip</h2>
    <p>
      Download the pre-built <abbr title="Cascading Style Sheets">CSS</abbr> framework, font
      and icons to include in your project. See
      the <CTALink href="/release-notes" ctaEventName='release-notes-top'>release notes</CTALink> for
      details on the latest updates.
    </p>
    <p>
      All source code is licensed under <a href="http://opensource.org/licenses/BSD-2-Clause">BSD License Clause 2</a>. All icons and images are licensed under <a href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0</a>. The font is licensed under our <a href="/assets/licenses/License-for-font.txt">font license</a>.
    </p>
    <form action={links.zip.framework}>
      <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('css'); }}>
        Download Design System ({version.sldsVersion})
      </button>
    </form>

    <h2 className="site-text-heading--large" id="unmanaged">Design System Unmanaged Package</h2>

    <p>
      If you are working within a Salesforce org, the Design System can be installed directly as an unmanaged package:
    </p>
    <ul className={pf('list--dotted')}>
      {managedPackageUrls()}
    </ul>

    <h2 className="site-text-heading--large" id="unmanaged">Design System Npm Module</h2>

    <p>
      If you use npm in your local development environment, we also have a Design System <a href="https://www.npmjs.com/package/@salesforce-ux/design-system">npm module</a>.
    </p>



    <h2 className="site-text-heading--large" id="icons">Icons</h2>
    <p>
      Download all <CTALink href="/resources/icons" ctaEventName='icons-link-click'>icon sets</CTALink>. Each icon is
      available as <abbr title="Scalable Vector Graphics">SVG</abbr> and in
      two different PNG sizes.
    </p>
    <p>
      All icons are licensed under <a href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0</a>.
    </p>
    <form action="/assets/downloads/salesforce-lightning-design-system-icons.zip">
      <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('icons'); }}>
        Download Icons
      </button>
    </form>

    <h2 className="site-text-heading--large" id="design-tokens">Design Tokens</h2>
    <p>
      <CTALink href="/resources/tokens" ctaEventName='design-tokens-link-click'>Design Tokens</CTALink> are available in multiple
      formats depending on which technology your application uses. For
      web-based applications, you can use our tokens
      as <CTALink href="http://alistapart.com/article/getting-started-with-sass#section4" ctaEventName='alistapart-link-click'>variables</CTALink> through
      CSS preprocessors <CTALink href="http://sass-lang.com/" ctaEventName='sass-link-click'>Sass</CTALink>, <CTALink href="http://lesscss.org/" ctaEventName='lesscss-link-click'>Less</CTALink>, and <CTALink href="https://learnboost.github.io/stylus/" ctaEventName='stylus-link-click'>Stylus</CTALink>.
      We recommend Sass as we use it internally, it is well-documented, and
      is the industry standard.
    </p>
    <p>
      For native applications, our tokens are available in XML and JSON
      formats for the Android and iOS platforms, respectively.
    </p>
    <div className={pf('grid wrap')}>

      <div className={pf('col size--1-of-1 medium-size--1-of-3 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="sass-design-tokens">Sass</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_scss.zip">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('design-token-scss'); }}>
            Download Sass Tokens
          </button>
        </form>
      </div>

      <div className={pf('col size--1-of-1 medium-size--1-of-3 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="less-design-tokens">Less</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_less.zip">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('design-token-less'); }}>
            Download Less Tokens
          </button>
        </form>
      </div>

      <div className={pf('col size--1-of-1 medium-size--1-of-3 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="stylus-design-tokens">Stylus</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_styl.zip">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('design-token-stylus'); }}>
            Download Stylus Tokens
          </button>
        </form>
      </div>

      <div className={pf('col size--1-of-1 medium-size--1-of-3 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="android-design-tokens">Android</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_android.zip">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('design-token-android'); }}>
            Download Android Tokens
          </button>
        </form>
      </div>

      <div className={pf('col size--1-of-1 medium-size--1-of-3 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="ios-design-tokens">iOS</h3>
        <form action="/assets/downloads/design-tokens/salesforce_design_tokens_ios.zip">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('design-token-ios'); }}>
            Download iOS Tokens
          </button>
        </form>
      </div>

      <div className={pf('col size--1-of-1 medium-size--1-of-3')}>
        {/* Workaround… */}
      </div>
    </div>

    <h2 className="site-text-heading--large" id="swatches">Swatches</h2>
    <p>
      You can import color swatches for use in design applications like Photoshop and Sketch. Since the CLR format does not include the alpha value, we&rsquo;ve appended each color's name with it.
    </p>
    <div className={pf('grid wrap')}>

      <div className={pf('col size--1-of-1 medium-size--1-of-2 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="ase-swatches">ASE (Adobe)</h3>
        <form action="/assets/downloads/swatches/salesforce-lightning-design-system.ase">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('swatch-ase'); }}>
            Download ASE Swatch
          </button>
        </form>
      </div>

      <div className={pf('col size--1-of-1 medium-size--1-of-2 p-vertical--large')}>
        <h3 className="site-text-heading--label" id="clr-swatches">CLR (iOS)</h3>
        <form action="/assets/downloads/swatches/salesforce-lightning-design-system.clr">
          <button className={pf('button button--neutral')} onClick={()=>{logDownloadEvent('swatch-clr'); }}>
            Download CLR Swatch
          </button>
        </form>
      </div>
    </div>

  </PageBody>
);
