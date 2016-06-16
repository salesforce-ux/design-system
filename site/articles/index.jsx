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
import Heading from 'app_modules/site/components/page/heading';
import { prefix as pf } from 'app_modules/ui/util/component';
import g from 'app_modules/global';

export default (
  <PageBody anchorTitle="Articles" contentClassName={pf('text-longform')}>
    <div className={pf('container--large')}>
      <p>Interested in learning more about the Design System, how we built it, and how you can use it? Check out the links below, and check back often - we&#39;re always writing articles and gathering community-generated content:</p>
      <ul>
        <li>Christophe Coenraets: <a href="http://coenraets.org/blog/2015/10/react-university-sample-app-react-node-js-4-lightning-design-system">React University: Sample Application with React, Node.js 4, and the Lightning Design System</a></li>
        <li>Jina Bolton: <a href="https://medium.com/salesforce-ux/the-salesforce-team-model-for-scaling-a-design-system-d89c2a2d404b">The Salesforce Team Model for Scaling a Design System</a></li>
        <li>Ken Skistimas: <a href="https://medium.com/salesforce-ux/people-powered-design-371a6d180d2e">People-Powered Design</a></li>
        <li>Stephanie Rewis: <a href="https://medium.com/salesforce-ux/building-an-enterprise-framework-is-hard-1e8d8b33e082">Building an Enterprise CSS Framework</a></li>
        <li>Christophe Coenraets: <a href="https://medium.com/salesforce-ux/salesforce-lightning-design-system-lightning-experience-everywhere-dd15400da69">Salesforce Lightning Design System</a></li>
        <li>Christophe Coenraets: <a href="http://coenraets.org/blog/2015/09/the-new-salesforce-lightning-design-system-lightning-experience-everywhere">The New Salesforce Lightning Design System: Lightning Experience Everywhere</a></li>
        <li>Amy Lee: <a href="https://medium.com/salesforce-ux/the-lightning-design-system-is-the-next-generation-of-living-style-guides-9addc769c317">The Lightning Design System — the Next Generation of Living Style Guides</a></li>
        <li>Craig Villamor: <a href="https://medium.com/salesforce-ux/how-we-designed-the-new-salesforce-at-scale-6d3607fd92e5">How We Designed the New Salesforce at Scale</a></li>
        <li>Sönke Rohde: <a href="https://medium.com/salesforce-ux/living-design-system-3ab1f2280ef7">Living Design System</a></li>
      </ul>
    </div>
  </PageBody>
);
