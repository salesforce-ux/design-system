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
import StickyNav from 'app_modules/site/components/sticky/nav';
import SvgIcon from 'app_modules/ui/svg-icon';

export default (
  <PageBody anchorTitle="Banners" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Banner in Context</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-dos-donts">Dos and Don&rsquo;ts</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-variants-component">Variants - Component</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-variants-state">Variants - State</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-variants-screen">Variants - Screen Size</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-ui-text">UI Text</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-specs">Recommended Specs</a>
          </li>
        </ul>
      </div>
    </StickyNav>

    <div className="site-main-content slds-col slds-col-rule--right slds-size--1-of-1 slds-large-size--4-of-6 slds-large-order--1">
      <div className="slds-container--large lmf">
        <figure>
          <img src="/assets/images/messaging/diagram-banner.png" alt="" width="640" height="40" />
        </figure>

        <p className="site-text-introduction">
          <strong>Banner</strong> communicates a state that affects the
          entire system, not just a feature or page. It persists over a
          session and appear without user initiating the action.
        </p>

        <p>
          <strong>Note:</strong> Banners are part of system messaging and
          are handled internally by Salesforce. Partners building apps that
          appear within Salesforce shouldn&rsquo;t use banners.
        </p>

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-banner.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Visible</li>

              <li><strong>Voice &amp; Tone:</strong> Informational</li>

              <li><strong>Motion:</strong> Delicate</li>

              <li><strong>Duration:</strong> Permanent</li>

              <li><strong>Audio:</strong> Muted</li>
            </ul>
          </div>
        </div>

        <p>
          A banner persists over a session and appears without user initiating
          the action. It communicates system-level messages that are relevant
          to the user regardless of their place in the application.
        </p>

        <p>A banner can show one of the following states:</p>

        <ul>
          <li>
            <strong>Error:</strong> to tell the user that they cannot proceed
            with their Salesforce experience, e.g. due to an outdated browser.
          </li>

          <li>
            <strong>Informational:</strong> to show admin-related status (e.g.
            logged in as a user), system maintenance, etc.
          </li>

          <li>
            <strong>Offline:</strong> to inform the user that they are in
            offline mode.
          </li>

          <li>
            <strong>Warning:</strong> to warn the user of potential issues
            with their Salesforce experience, e.g. due to an outdated browser.
          </li>
        </ul>

        <p>
          Banners appear as soon as the user logs in as a full-width strip
          above the global header. They persist while a user is logged in, and
          are generally not dismissible. Banners are dismissible only if they
          communicate future impact to the system, but has no bearing on the
          system at the moment, e.g. notifying users of scheduled maintenance.
        </p>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Banner in Context
        </h2>

        <figure className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/screenshot-banner-mobile.png" alt="Banner in Context (Mobile)" className="screenshot" width="187" height="334" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <img src="/assets/images/messaging/screenshot-banner-desktop.png" alt="Banner in Context (Desktop)" className="screenshot" width="640" height="512" />
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li><strong>Do</strong> use banners sparingly.</li>

          <li>
            <strong>Do</strong> keep the UI text short. If needed, include a
            link to let the user take an action or read the message in more
            details.
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do Not</h3>

        <ul>
          <li>
            <strong>Do not</strong> use banners as a feedback
            mechanism. Look
            into <a href="/guidelines/messaging-components-inline-text">inline
            text</a>, <a href="/guidelines/messaging-components-popovers">popover</a>, <a href="/guidelines/messaging-components-toasts">toast</a>,
            or <a href="/guidelines/messaging-components-modals">modal</a> instead.
          </li>

          <li>
            <strong>Do not</strong> make banners dismissible if the message
            remains relevant to the user while they are logged in.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Component
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Dismissible
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--alert slds-theme--info slds-theme--alert-texture slds-banner" role="alert">
                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <span className="slds-assistive-text">Success</span>

                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--small slds-m-right--x-small" sprite="custom" symbol="custom19" />

                  Scheduled Maintenance Notification: Sunday March 15, 8:00
                  AM–10:00 PST. <a href="javascript:void(0);" tabIndex="-1">More information</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Not Dismissible
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--alert slds-theme--alert-texture slds-banner" role="alert">
                <span className="slds-assistive-text">Info</span>

                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="user" />

                  Logged in as John Smith (johnsmith@acme.com). <a href="#" tabIndex="-1">Log out</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Error
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--alert slds-theme--error slds-theme--alert-texture slds-banner" role="alert">
                <span className="slds-assistive-text">Error</span>

                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="warning" />
                  Your browser is not supported. Your app will not run. <a href="#" tabIndex="-1">More Information</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Informational
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--alert slds-theme--alert-texture slds-banner" role="alert">
                <span className="slds-assistive-text">Info</span>

                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="user" />

                  Logged in as John Smith (johnsmith@acme.com). <a href="#" tabIndex="-1">Log out</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Offline
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--alert slds-theme--offline slds-theme--alert-texture slds-banner" role="alert">
                <span className="slds-assistive-text">Offline</span>

                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="offline" />

                  You are in offline mode. <a href="javascript:void(0);" tabIndex="-1">More information</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Warning
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--alert slds-theme--warning slds-theme--alert-texture slds-banner" role="alert">
                <span className="slds-assistive-text">Warning</span>

                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="warning" />

                  Your browser is outdated. Your Salesforce experience may be
                  degraded. <a href="javascript:void(0);" tabIndex="-1">More
                  information</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Mobile
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline slds-notify_container--mobile">
              <div className="slds-notify slds-notify--alert slds-theme--info slds-theme--alert-texture slds-notify--mobile slds-align-left" role="alert">
                <h2>
                  <SvgIcon aria-hidden="true" className="slds-icon icon-text-email slds-icon--small slds-m-right--x-small" sprite="custom" symbol="custom19" />

                  Scheduled Maintenance Notification: Sunday March 15, 8:00
                  AM–10:00 PST. <a href="javascript:void(0);" tabIndex="-1">More information</a>
                </h2>
              </div>
            </div>
          </div>
        </figure>

        <ul>
          <li>100% width</li>

          <li>No icon</li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-ui-text">
          UI Text
        </h2>

        <p>
          UI text can vary greatly case to case, depending on the context.
          The guidelines below serve as examples, but you are not limited to
          them.
        </p>

        <div className="slds-scrollable--x">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">State</th>

                <th scope="col">Intent</th>

                <th scope="col">Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>Show admin-related status</td>

                <td>
                  <figure>
                    Logged in as John Smith (johnsmith@acme.com). <a href="#" tabIndex="-1">Log out</a>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Warning
                </th>

                <td>Warn user of sub-optimal experience</td>

                <td>
                  <figure>
                    Your browser is outdated. Your Salesforce experience may
                    be degraded. <a href="#" tabIndex="-1">More
                    information</a>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Tell user that the system will not run properly</td>

                <td>
                  <figure>
                    Your browser is not supported. Your app will not run. <a href="#" tabIndex="-1">More information</a>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Offline
                </th>

                <td>Show offline state</td>

                <td>
                  <figure>
                    You are in offline mode. <a href="#" tabIndex="-1">More
                    information</a>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>Inform user of an upcoming maintenance</td>

                <td>
                  <figure>
                    Scheduled Maintenance Notification: Sunday March 15, 8:00
                    AM–10:00 PST. <a href="#" tabIndex="-1">More
                    information</a>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Inform that the input is not a valid value.</td>

                <td>
                  <figure>
                    Email is not in the right format (joesmith@example.com).
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="site-text-heading--large" id="flavor-specs">
          Recommended Specs
        </h2>

        <p>
          <a href="/components/alert">Refer to this code
          sample</a> for the banner markup.
        </p>

        <div className="slds-scrollable--x">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">Description</th>

                <th scope="col">Token</th>

                <th scope="col">Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Slide down duration</th>

                <td><code>$duration-slowly</code></td>

                <td>0.4 seconds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
