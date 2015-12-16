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
import Anchor from 'app_modules/site/components/page/anchor';
import CTALink from 'app_modules/site/components/cta-link';
import IfPrefs from 'app_modules/site/preferences/component';
import globals from 'app_modules/global';

import { prefix as pf } from 'app_modules/ui/util/component';

const anchor = (
  <Anchor title="Components" />
);

class UILib extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<div>

      <section className={pf('container--x-large site-text-longform')}>
        <p className="site-text-introduction">
          At the heart of the {globals.displayName} is
          a <abbr title="Cascading Style Sheets">CSS</abbr> framework that enables
          you to create consistent web&nbsp;applications.
        </p>

        <p>Our CSS framework includes reusable UI elements from forms and lists, to modals and dropdowns. We also provide powerful global CSS scaffolding such as a modern responsive grid system to enable high quality development. <strong>Our CSS framework does not include JavaScript</strong>.</p>
        <ul>
          <IfPrefs role="regular">
            <li>Review the <CTALink href="/getting-started" ctaEventName="tutorials-top">Getting Started tutorials</CTALink></li>
          </IfPrefs>
          <IfPrefs role="regular">
            <li><CTALink href="/resources/downloads" ctaEventName="downloads-top">Download the CSS framework</CTALink> and reference the CSS in your HTML file.</li>
          </IfPrefs>
          <li>Be sure to review the component status &mdash; look for the badge to the right of the heading on each flavor. You can also use the filter at the top right to see only the dev ready elements:</li>
          <ul>
            <li><strong>Prototype</strong> &mdash; The component is under development and may require small to significant changes. We note these changes in our release notes.</li>
            <li><strong>Dev Ready</strong> &mdash; The component is fully tested and production ready</li>
          </ul>

          <li>Copy and paste the example markup into your file</li>
          <li>Customize away!</li>
        </ul>
      </section>
      <IfPrefs role="regular">
        <section className="site-download--landing">
          <p className={pf('m-top--x-large')}>
            <CTALink href="/getting-started" className={pf('button button--brand')}
                ctaEventName="tutorials-bottom">Read Tutorials</CTALink> <CTALink href="/resources/downloads/"
                className={pf('button button--brand button-space-left')} ctaEventName="downloads-bottom">Get Design System</CTALink>
          </p>
        </section>
      </IfPrefs>

    </div>
  );
  }
}

export default (
  <PageBody anchor={anchor}>
    <UILib />
  </PageBody>
);
