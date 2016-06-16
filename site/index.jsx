/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import CTALink from 'app_modules/site/components/cta-link';
import SvgIcon from 'app_modules/ui/svg-icon';
import PageBody from 'app_modules/site/components/page/body';
import DynamicShapes from 'app_modules/site/components/dynamic-shapes';
import globals from 'app_modules/global';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody contentClassName="site-landing-page">
    {/* Hero */}
    <header className={pf('site-masthead--landing p-around--xx-large container--buffer')}>
      <h1 className={pf('site-text-heading--large')}>
        Lightning <span className="text-no-wrap">Design System</span>
      </h1>
      <h2 className={pf('site-text-heading--medium m-bottom--xx-large')}>
        Create the world’s best enterprise app experiences.
      </h2>
      <p className={pf('site-cta-buttons m-bottom--medium')}>
        <CTALink href="/downloads" className={pf('button button--neutral site-cta-download')} eventType="downloads-top">Get the Design System</CTALink>
        <CTALink
          href="https://github.com/salesforce-ux/design-system"
          className={pf('button button--neutral')}
          eventType="github-start">
          <img src="/assets/images/social-github-icon-only.svg" className={pf('button__icon--large button__icon--left')} alt="" />
          Star
        </CTALink>
      </p>
      <p className={pf('site-releasenumber m-bottom--medium')}>Current release: <CTALink href="/release-notes" eventType="release-notes-top">{process.env.SLDS_VERSION}</CTALink></p>
    </header>

    <div className={pf('container--buffer container--x-large')}>
      {/* Grid */}
      <section className={pf('site-grid--landing p-vertical--xx-large site-text-longform')}>
        <div className="site-video-container">
          <div className="site-video">
            <iframe src="https://www.youtube.com/embed/inqe8D1XwrA?showinfo=0" allowFullScreen></iframe>
          </div>
        </div>
        <ul className={pf('grid wrap grid--pull-padded-large site-grid--landing-primary')}>
          <li className={pf('col--padded-large p-vertical--xx-large clearfix')}>
            <p className={pf('size--1-of-1 medium-size--1-of-2 float--right')}>
              <img className="image" src="/assets/images/landing/img-icon-group.svg" alt="" />
            </p>
            <dl className={pf('medium-size--1-of-2')}>
              <dt className="site-text-heading--large">Style with Ease</dt>
              <dd>With the {globals.displayName} you can build custom applications with a look and feel that is consistent with Salesforce core features &mdash; without reverse engineering our styles! Simply download our platform-agnostic CSS framework and get started today.</dd>
            </dl>
          </li>
          <li className={pf('col--padded-large p-vertical--xx-large clearfix')}>
            <p className={pf('size--1-of-1 medium-size--1-of-2 float--left')}>
              <img className="image" src="/assets/images/landing/img-expertise.svg" alt="" />
            </p>
            <dl className={pf('medium-size--1-of-2 float--right')}>
              <dt className="site-text-heading--large">Design with Expertise</dt>
              <dd>Utilize our detailed guidelines to confidently design excellent apps that fit right into the Salesforce ecosystem. With the Design System, you get access to all of the Salesforce core visual and interaction design patterns so that you can follow established best practices and build apps that have a consistent look and feel with the Salesforce user experience.</dd>
            </dl>
          </li>
          <li className={pf('col--padded-large p-vertical--xx-large clearfix')}>
            <p className={pf('size--1-of-1 medium-size--1-of-2 float--right')}>
              <img className="image" src="/assets/images/landing/img-opensource.svg" alt="" />
            </p>
            <dl className={pf('medium-size--1-of-2')}>
              <dt className={pf('site-text-heading--large')}>Contribute with Purpose</dt>
              <dd>The Design System is an <a href="https://github.com/salesforce-ux/design-system">open source project on GitHub</a>, meaning you can directly impact its evolution by filing issues and submitting pull requests. This is as much your tool as it is ours, and we look forward to collaborating with developers and partners on making it even better.</dd>
            </dl>
          </li>
        </ul>
        <ul className={pf('grid wrap grid--align-spread grid--pull-padded-large')}>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-3')}>
            <div className="grid-card">
              <img src="/assets/images/landing/icon-trust.svg" alt="" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Trustworthy</dt>
                <dd><hr className="hr hr--orange" />We’ve put the design system through its paces. We’ve engaged in thousands of hours of user research, and tested the system in all of the same browsers that the Lightning Experience supports.</dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-3')}>
            <div className="grid-card">
              <img src="/assets/images/landing/icon-platform.svg" alt="" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Platform-Agnostic</dt>
                <dd><hr className="hr hr--purple" />You can use our CSS framework with any technology stack you can dream up. Additionally, we provide guidance around how to use it in conjunction with Salesforce technologies such as Lightning, Visualforce, and Heroku.</dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-3')}>
            <div className="grid-card">
              <img src="/assets/images/landing/icon-living.svg" alt="" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Living</dt>
                <dd><hr className="hr hr--pink" />The Salesforce UX team actively designs, develops, tests, and maintains the design system. As Salesforce pushes out UI changes with every release, the design system stays seamlessly in sync.</dd>
              </dl>
            </div>
          </li>
        </ul>
      </section>
      {/* Resources */}
      <footer className={pf('site-resources--landing p-vertical--xx-large')}>
        <ul className={pf('grid wrap grid--align-spread grid--pull-padded-large')}>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-2')}>
            <div className="grid-card">
              <div className={pf('grid grid--align-spread')}>
                <h3 className={pf('site-text-heading--label-weak-large align-middle')} id="downloads-header">Downloads</h3>
                <img src="/assets/images/landing/icon-download.svg" alt="" />
              </div>
              <hr className="hr hr--pink" />
              <p>Get all of the pieces of the {globals.displayName}, including our icons, fonts, and CSS&nbsp;framework.</p>
              <CTALink aria-describedby="downloads-header" className={pf('button button--neutral m-top--large')} href="/downloads" eventType="downloads-bottom">Learn More</CTALink>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-2')}>
            <div className="grid-card">
              <div className={pf('grid grid--align-spread')}>
                <h3 className={pf('site-text-heading--label-weak-large align-middle')} id="getting-started-header">Getting started</h3>
                <img src="/assets/images/landing/icon-getting-started.svg" alt="" />
              </div>
              <hr className="hr hr--orange" />
              <p>Learn best practices, tips and tricks on how to use, customize, and implement the {globals.displayName}.</p>
              <CTALink aria-describedby="getting-started-header" className={pf('button button--neutral m-top--large')} href="/getting-started" eventType="getting-started-bottom">Learn More</CTALink>
            </div>
          </li>
        </ul>
      </footer>
    </div>
    {/* Shapes */}
    <DynamicShapes x={1170} y={330} />
  </PageBody>
);
