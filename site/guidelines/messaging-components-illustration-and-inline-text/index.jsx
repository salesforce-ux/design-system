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
  <PageBody anchorTitle="Illustration & Inline Text" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Illustration &amp; Text in Context</a>
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
        <figure className="slds-p-bottom--large">
          <img src="/assets/images/messaging/diagram-illustration-text.png" alt="" width="250" height="183" />
        </figure>

        <p className="site-text-introduction">
          <strong>Illustration &amp; Inline Text</strong> work in tandem to
          communicate a state in a more friendly way.
        </p>

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-illustration-text.png" alt="" width="400" height="220" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Pronounced</li>

              <li><strong>Voice &amp; Tone:</strong> Informational</li>

              <li><strong>Motion:</strong> Static</li>

              <li><strong>Duration:</strong> Permanent</li>

              <li><strong>Audio:</strong> Soft (or Vibrate)</li>
            </ul>
          </div>
        </div>

        <p>Illustration &#38; inline text is used to show one of these states:</p>

        <ul>
          <li>
            <strong>Empty:</strong> when there is no record in the current
            page or there isn’t any item that needs attention.
          </li>

          <li>
            <strong>Informational:</strong> when system is under maintenance.
          </li>

          <li>
            <strong>Error:</strong> when a page is not found, user doesn’t
            have sufficient privilege, or other miscellaneous error (often
            related to inaccessible content).
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Illustration &amp; Inline Text in Context
        </h2>

        <figure className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/screenshot-illustration-text-mobile.png" alt="Illustration & Text in Context (Mobile)" className="screenshot" width="187" height="334" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <img src="/assets/images/messaging/screenshot-illustration-text-desktop.png" alt="Illustration & Text in Context (Desktop)" className="screenshot" width="640" height="512" />
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li>
            <strong>Do</strong> use illustrations to soften negative impacts
            on the user. When a user expects to see an item but finds out that
            they can&rsquo;t, the experience leaves a negative impression on
            them&mdash;illustrations help reduce this.
          </li>

          <li>
            <strong>Do</strong> include actionable text to guide the user. For
            instance, if the user is seeing an empty list page, include a link
            in the accompanying text to create a new record.
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do Not</h3>

        <ul>
          <li>
            <strong>Do not</strong> use illustrations inside related lists or
            cards. For
            these, <a href="/guidelines/messaging-components-inline-text">plain
            inline text</a> is enough.
          </li>

          <li>
            <strong>Do not</strong> display more than one illustration
            component on a page. Illustrations should not be competing with
            each other for user attention.
          </li>

          <li>
            <strong>Do not</strong> use illustrations as feedback for direct
            CRUD actions. Look
            into <a href="/guidelines/messaging-components-toasts">toasts</a> or <a href="/guidelines/messaging-components-popovers">popovers</a> instead.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Component
        </h2>

        <p>
          Illustrations can either exist as a full page, in the main body, or
          in the sidebar.
        </p>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img className="screenshot" src="/assets/images/messaging/illustration-layout-01.png" alt="illustration as full page" width="160" height="128" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img className="screenshot" src="/assets/images/messaging/illustration-layout-02.png" alt="illustration in main body" width="160" height="128" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img className="screenshot" src="/assets/images/messaging/illustration-layout-03.png" alt="illustration in sidebar" width="160" height="128" />
          </div>
        </div>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <p>
          In general, illustration &amp; text show one of three states (empty,
          informative, or error), but the individual illustration &amp; UI
          text will vary depending on the context. Below are some commonly
          used examples, but you are not limited to these variants.
        </p>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Empty</figcaption>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-empty-object.png" alt="" width="220" height="171" />
              </figure>

              <h4>Hmm&hellip;</h4>

              <p>No opportunities to display.</p>
            </div>

            <figcaption>
              This is used to show an empty list view for an object (e.g.
              empty opportunities, empty leads, etc.)
            </figcaption>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-empty-feed.png" alt="" width="508" height="243" />
              </figure>

              <h4>Collaborate with others</h4>

              <p>No updates here yet.</p>
            </div>

            <figcaption>
              This is used to show an empty feed (e.g. activity feed, chatter
              feed, etc.)
            </figcaption>
          </figure>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Informational
          </figcaption>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-maintenance.png" alt="" width="360" height="260" />
              </figure>

              <h4>We are down for maintenance</h4>

              <p>
                Sorry for the inconvenience. We&rsquo;ll be back shortly.
              </p>
            </div>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-external.png" alt="" width="256" height="194" />
              </figure>

              <h4>You&rsquo;re not connected to Google Drive</h4>

              <p>Let&rsquo;s get you authenticated.</p>

              <button className="slds-button slds-button--neutral" tabIndex="-1">
                Connect to Google Drive
              </button>
            </div>
          </figure>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Error</figcaption>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-page-not-found.png" alt="" width="340" height="217" />
              </figure>

              <h4>Page not available</h4>

              <p>
                Maybe the page was deleted, the URL is incorrect, or something
                else went wrong. If you know the page exists but you still
                can’t get to it, please <a href="#" tabIndex="-1">visit our
                support page</a>.
              </p>
            </div>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-insufficient-privileges.png" alt="" width="180" height="234" />
              </figure>

              <h4>You don&rsquo;t have access to this page</h4>

              <p>
                If you think you should have access, ask your admin for help.
              </p>
            </div>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-na-lightning.png" alt="" width="192" height="256" />
              </figure>

              <h4>Page not available in Lightning Experience</h4>

              <p>Sorry about that.</p>
            </div>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-data-na.png" alt="" width="322" height="308" />
              </figure>

              <h4>Data not available</h4>

              <p>
                The data you’re trying to access isn’t available. It might be
                due to another user deleting it or a system error. If you know
                the data isn’t deleted and you can’t get to it, please visit
                our <a href="#" tabIndex="-1">support&nbsp;page</a>.
              </p>
            </div>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-walkthrough-na.png" alt="" width="360" height="260" />
              </figure>

              <h4>Walkthrough not available</h4>

              <p>
                You may not have access to the items this walkthrough points
                to. <a href="#" tabIndex="-1">Ask your administrator</a> for
                the appropriate permissions for this feature and try again.
              </p>
            </div>
          </figure>

          <figure>
            <div className="slds-notify_container slds-notify_container--inline slds-illustration_container">
              <figure>
                <img src="/assets/images/messaging/illustration-system-failure.png" alt="" width="180" height="323" />
              </figure>

              <h4>Can’t connect!</h4>

              <p>The page didn’t load. Please try again later.</p>
            </div>
          </figure>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Mobile</figcaption>

          <div className="slds-notify_container slds-notify_container--inline slds-notify_container--mobile slds-illustration_container">
            <figure>
              <img src="/assets/images/messaging/illustration-maintenance.png" alt="" width="161" height="115" />
            </figure>

            <h4>We are down for maintenance</h4>

            <p>Sorry for the inconvenience. We’ll be back shortly.</p>
          </div>
        </figure>

        <ul>
          <li>300px max width</li>

          <li>180px max height</li>

          <li>Smaller text</li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-ui-text">
          UI Text
        </h2>

        <p>
          UI text can vary greatly case to case, depending on the context. The
          guidelines below serve as examples, but you are not limited to them.
        </p>

        <div className="slds-scrollable--x">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">State</th>

                <th scope="col">Title</th>

                <th scope="col">Body</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Empty
                </th>

                <td>Hmm&hellip;</td>

                <td>
                  <figure>No opportunities to display.</figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Empty
                </th>

                <td>Collaborate with others</td>

                <td>No updates here yet.</td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>We are down for maintenance</td>

                <td>
                  <figure>
                    Sorry for the inconvenience. We&rsquo;ll be back shortly.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>You&rsquo;re not connected to Google Drive</td>

                <td>
                  <figure>
                    <p>Let&rsquo;s get you authenticated.</p>

                    <p>
                      <a href="#" tabIndex="-1">Connect to Google Drive</a>
                    </p>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Page not available</td>

                <td>
                  <figure>
                    Maybe the page was deleted, the URL is incorrect, or
                    something else went wrong. If you know the page exists but
                    you still can’t get to it,
                    please <a href="#" tabIndex="-1">visit our visit our
                    support page</a>.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>You don&rsquo;t have access to this page</td>

                <td>
                  <figure>
                    If you think you should have access, ask your admin for
                    help.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Page not available in Lightning Experience</td>

                <td>
                  <figure>Sorry about that.</figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Data not available</td>

                <td>
                  <figure>
                    The data you&rsquo;re trying to access isn&rsquo;t
                    available. It might be due to another user deleting it or
                    a system error. If you know the data isn&rsquo;t deleted
                    and you can’t get to it, please visit
                    our <a href="#" tabIndex="-1">support page</a>.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Walkthrough not available</td>

                <td>
                  <figure>
                    You may not have access to the items this walkthrough
                    points to. <a href="#" tabIndex="-1">Ask your
                    administrator</a> for the appropriate permissions for this
                    feature and try again.
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="site-text-heading--large" id="flavor-specs">
          Recommended Specs
        </h2>

        <h3 className="site-text-heading--label">Desktop</h3>

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
                <th scope="row">Title text</th>

                <td><code>$font-size-heading-large</code></td>

                <td>24px</td>
              </tr>

              <tr>
                <th scope="row">Body text</th>

                <td><code>$font-size-text-medium</code></td>

                <td>16px</td>
              </tr>

              <tr>
                <th scope="row">Text color</th>

                <td><code>$color-text-weak</code></td>

                <td>#54698d</td>
              </tr>

              <tr>
                <th scope="row">Maximum image width</th>

                <td><code>-</code></td>

                <td>600px</td>
              </tr>

              <tr>
                <th scope="row">Maximum image height</th>

                <td><code>-</code></td>

                <td>360px</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="site-text-heading--label">Mobile</h3>

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
                <th scope="row">Title text</th>

                <td><code>$font-size-text-x-large</code></td>

                <td>20px</td>
              </tr>

              <tr>
                <th scope="row">Body text</th>

                <td><code>$font-size-text-small</code></td>

                <td>13px</td>
              </tr>

              <tr>
                <th scope="row">Text color</th>

                <td><code>$color-text-weak</code></td>

                <td>#54698d</td>
              </tr>

              <tr>
                <th scope="row">Maximum image width</th>

                <td><code>-</code></td>

                <td>300px</td>
              </tr>

              <tr>
                <th scope="row">Maximum image height</th>

                <td><code>-</code></td>

                <td>180px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
