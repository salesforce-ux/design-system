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
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Guidelines" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">The Lightning Design System reflects the patterns and components that underpin the Salesforce product. These patterns and components provide a unified language and consistent look and feel when designing apps and products within the Salesforce ecosystem.</p>
      <h2 className="site-text-heading--large">Design Principles</h2>
      <p><strong>We constantly keep these core principles in mind when making design decisions at Salesforce, and we encourage you to adopt them as well.</strong></p>
      <ul className={pf('grid wrap grid--pull-padded-large text-align--center p-vertical--x-large')}>
        <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2')}>
          <div className="grid-card">
            <img src="/assets/images/guidelines/img-clarity.svg" alt="" />
            <dl>
              <dt className="site-text-heading--label-weak-large">Clarity</dt>
              <dd>
                <hr className="hr hr--blue" />
                Eliminate ambiguity. Enable people to see, understand, and act with confidence.
              </dd>
            </dl>
          </div>
        </li>
        <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2')}>
          <div className="grid-card">
            <img src="/assets/images/guidelines/img-efficiency.svg" alt="" />
            <dl>
              <dt className="site-text-heading--label-weak-large">Efficiency</dt>
              <dd>
                <hr className="hr hr--blue"/>
                Streamline and optimize workflows. Intelligently anticipate needs to help people work better, smarter, and faster.
              </dd>
            </dl>
          </div>
        </li>
        <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2')}>
          <div className="grid-card">
            <img src="/assets/images/guidelines/img-consistency.svg" alt="" />
            <dl>
              <dt className="site-text-heading--label-weak-large">Consistency</dt>
              <dd>
                <hr className="hr hr--blue"/>
                Create familiarity and strengthen intuition by applying the same solution to the same problem.
              </dd>
            </dl>
          </div>
        </li>
        <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2')}>
          <div className="grid-card">
            <img src="/assets/images/guidelines/img-beauty.svg" alt="" />
            <dl>
              <dt className="site-text-heading--label-weak-large">Beauty</dt>
              <dd>
                <hr className="hr hr--blue"/>
                Demonstrate respect for people’s time and attention through thoughtful and elegant craftsmanship.
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </PageBody>
);
