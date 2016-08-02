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
import globals from 'app_modules/global';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Getting Started">
    <div className={pf('container--large site-guidelines')}>
      <p className="site-text-introduction">
        The Salesforce Lightning Design System includes the resources to
        create user interfaces consistent with the Salesforce Lightning
        principles, design language, and best practices. Rather than focusing
        on pixels, developers can focus on application logic,
        while&nbsp;designers can focus on user experience, interactions,
        and&nbsp;flows.
      </p>

      <p>
        This site provides a range of resources for designers and developers,
        which&nbsp;includes:
      </p>

      <ul>
        <li>semantic and accessible component&nbsp;markup.</li>

        <li>cross-browser compatible&nbsp;CSS.</li>

        <li>icons, font, and design&nbsp;guidelines.</li>
      </ul>



      <div className={pf('grid grid--pull-padded wrap')}>

        <div className={pf('col--padded size--1-of-1 large-size--1-of-2 small-order--1 large-order--2')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>
            Designers
          </h2>

          <p>Start with the&nbsp;following:</p>

          <ol>
            <li>
              Explore the <a href="/guidelines/overview/">Guidelines</a> to
              learn the Salesforce product design patterns
              and&nbsp;principles.
            </li>

            <li>
              Review the Components section, to familiarize yourself with the
              existing components which you can incorporate into
              your&nbsp;designs.
            </li>
          </ol>
        </div>

        <div className={pf('col--padded size--1-of-1 large-size--1-of-2 small-order--2 large-order--1')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>
            Developers
          </h2>

          <p>Familiarize yourself with the&nbsp;following:</p>

          <ol>
            <li>
              Get an overview of
              our <a href="/guidelines/markup-and-style">Markup and Style</a> guidelines
              including the class naming conventions used in our&nbsp;CSS.
            </li>

            <li>
              Review the Components; each component provides semantically
              correct and accessible markup and&nbsp;documentation.
            </li>

            <li>
              Dive into the platform-specific getting started
              steps&nbsp;below.
            </li>
          </ol>

          <h3 className="site-text-heading--label">Lightning</h3>

          <p>
            Get started with the Lightning Design System
            on <a href="/platforms/lightning">Lightning</a>. Please be careful to
            pay attention to the specific requirements for the Lightning
            technology you are&nbsp;using:
          </p>

          <ul>
            <li>Lightning&nbsp;Experience</li>

            <li>Salesforce1</li>

            <li>Stand-alone Lightning&nbsp;app</li>

            <li>Lightning Out&nbsp;component</li>
          </ul>

          <h3 className={pf('site-text-heading--label')}>
            Visualforce
          </h3>

          <p>
            Get started with the Lightning Design System
            on&nbsp;<a href="/platforms/visualforce">Visualforce</a>.
          </p>
          <h3 className={pf('site-text-heading--label')}>
            Heroku
          </h3>

          <p>
            Get started with the Lightning Design System
            on&nbsp;<a href="/platforms/heroku">Heroku</a>.
          </p>

        </div>
      </div>

    </div>


  </PageBody>
);
