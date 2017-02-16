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
  <PageBody anchorTitle="Toasts" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Toast in Context</a>
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
      <div className="slds-container--large site-lmf">
        <p className="site-text-introduction">
          <strong>Toast</strong> serves as a feedback &amp; confirmation
          mechanism after the user takes an action.
        </p>

        <img src="/assets/images/messaging/diagram-toast.png" alt="" width="600" height="48" />

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-toast.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <ul>
              <li><strong>Visual:</strong> Visible</li>
              <li><strong>Voice &amp; Tone:</strong> Informational</li>
              <li><strong>Motion:</strong> Delicate</li>
              <li><strong>Duration:</strong> Dismissible</li>
              <li><strong>Audio:</strong> Soft (or Vibrate)</li>
            </ul>
          </div>
        </div>

        <p>
          A toast appears in reaction to user action: creating, editing,
          deleting. For example, a user edits an opportunity via a modal and
          saves it. The modal closes and the toast appears at the top of the
          opportunity detail page.
        </p>

        <p>A toast can show one of the following states:</p>

        <ul>
          <li>
            <strong>Error:</strong> when a user completes an action, but
            system-related issues prevent the action to be truly executed.
          </li>

          <li>
            <strong>Informational:</strong> when a user completes an action,
            but there are some additional info to be shown.
          </li>

          <li>
            <strong>Success:</strong> when a user completes/executes an
            action.
          </li>

          <li>
            <strong>Warning:</strong> when a user cannot complete an action
            due to external factors (e.g. permission) rather than something
            they can fix right away (e.g. form error).
          </li>
        </ul>

        <p>
          Toasts persist at the top of the page regardless of scrolling, and
          they are visible until a user dismisses them or the defined duration
          elapses. They show 1&ndash;2 full sentences (no truncation),
          including an inline link (when appropriate), and an X to close.
          Toasts on desktop include an icon denoting the type of message, but
          toasts on mobile don&rsquo;t include one.
        </p>

        <p>
          The width of a toast is determined by the length of its content and
          its inside padding, but at minimum it should be 480 px and centered
          within the canvas of the page.
        </p>

        <p>Toasts can appear in one of the following manners:</p>

        <ul>
          <li>
            <strong>Sticky:</strong> displayed until dismissed, no duration
            applies. This forces the user to acknowledge info without blocking
            other interaction on the page, e.g. 10 leads were not converted.
          </li>

          <li>
            <strong>Timed:</strong> displayed temporarily, until duration ends
            or user dismisses, whichever comes first. This shows a message
            that is useful but not crucial, e.g. record was saved.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Toast in Context
        </h2>

        <figure className="slds-grid slds-wrap slds-grid--push-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/screenshot-toast-mobile.png" alt="Toast in Context (Mobile)" className="site-screenshot" width="187" height="334" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <img src="/assets/images/messaging/screenshot-toast-desktop.png" alt="Toast in Context (Desktop)" className="site-screenshot" width="640" height="512" />
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">DO</h3>

        <ul>
          <li className="slds-m-vertical--x-large">
            <strong>Do</strong> batch toasts of the same type to minimize the
            number of toasts that appear.

            <figure className="slds-m-vertical--x-large">
              <img className="image" src="/assets/images/messaging/img-toasts-batch.svg" alt="" width="643" height="77" />
            </figure>
          </li>

          <li className="slds-m-vertical--x-large">
            <strong>Do</strong> stack multiple toasts if you have more than
            one type appearing. Show the most recent on top and the rest
            underneath it in chronological order.

            <figure className="slds-m-vertical--x-large">
              <img className="image" src="/assets/images/messaging/img-toasts-stack.svg" alt="" width="389" height="77" />
            </figure>
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do Not</h3>

        <ul>
          <li>
            <strong>Do not</strong> use toasts to confirm success when a
            create action brings the user to the newly created item. For
            example, creating a new record from a list view leads to the new
            record, so a toast is unnecessary.
          </li>

          <li>
            <strong>Do not</strong> show toasts after inline edit. Returning
            to view state is indication enough that the changes were
            successfully submitted&mdash;if the form didn&rsquo;t save
            properly, it would still be
            open (<a href="/guidelines/messaging-components-popovers">+ error
            popover</a> &amp; message).
          </li>

          <li>
            <strong>Do not</strong> keep toasts after the user navigates away.
            A toast displays status that&rsquo;s only relevant to the current
            page they are on; if they move to a different page, the toast
            message is no longer relevant.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Component
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Title Only
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--toast slds-theme--success" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <div className="slds-notify__content slds-grid">
                  <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="success" />

                  <div className="slds-col slds-align-middle">
                    <h2 className="slds-text-heading--small">
                      &ldquo;Holiday Campaign 2016&rdquo; was updated.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Title &amp; Description
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--toast slds-theme--success" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <div className="slds-notify__content slds-grid">
                  <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="success" />

                  <div className="slds-col slds-align-middle">
                    <h2 className="slds-text-heading--small">
                      &ldquo;Holiday Campaign 2016&rdquo; was updated.
                    </h2>

                    <p>
                      258 contacts were already added and they remained as is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Error</figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--toast slds-theme--error" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>

                </button>

                <div className="slds-notify__content slds-grid">
                  <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="warning" />

                  <div className="slds-col slds-align-middle">
                    <h2 className="slds-text-heading--small">
                      Can&rsquo;t save lead &ldquo;Sally Wong&rdquo; because
                      another lead has the same name.
                    </h2>
                  </div>
                </div>
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
              <div className="slds-notify slds-notify--toast" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <div className="slds-notify__content slds-grid">
                  <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="info" />

                  <div className="slds-col slds-align-middle">
                    <h2 className="slds-text-heading--small">
                      26 potential duplicate leads were
                      found. <a href="#" tabIndex="-1">Select Leads to
                      Merge.</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Success
          </figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline">
              <div className="slds-notify slds-notify--toast slds-theme--success" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <div className="slds-notify__content slds-grid">
                  <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="success" />

                  <div className="slds-col slds-align-middle">
                    <h2 className="slds-text-heading--small">
                      Account <a href="#" tabIndex="-1">ACME - 100
                      widgets</a> was created.
                    </h2>
                  </div>
                </div>
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
              <div className="slds-notify slds-notify--toast slds-theme--warning" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <div className="slds-notify__content slds-grid">
                  <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="warning" />

                  <div className="slds-col slds-align-middle">
                    <h2 className="slds-text-heading--small">
                      Can&rsquo;t share file &ldquo;report-q3.pdf&rdquo;
                      with the selected users.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Mobile</figcaption>

          <div className="slds-box">
            <div className="slds-notify_container slds-notify_container--inline slds-notify_container--mobile slds-toast_container--inline">
              <div className="slds-notify slds-notify--toast slds-theme--success slds-notify--mobile" role="alert">
                <span className="slds-assistive-text">Info</span>

                <button className="slds-button slds-button--icon-inverse slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--medium" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <div className="slds-notify__content slds-grid">
                  <div className="slds-col slds-align-left">
                    <h2>
                      Opportunity &ldquo;Tesla CloudHub + Anypoint Connectors
                      - 300 widgets&rdquo; was saved.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>

        <ul>
          <li>90% width</li>

          <li>No icon</li>

          <li>Smaller, left-aligned text</li>

          <li>No description text</li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-ui-text">
          UI Text
        </h2>

        <p>Basic rules around UI text in toast:</p>

        <ul>
          <li>
            The syntax is as follows:
            <br/>
            <code>&laquo;record type&raquo;&nbsp;&nbsp;&nbsp;&laquo;record
            name&raquo;&nbsp;&nbsp;&nbsp;&nbsp;was/were &nbsp;&nbsp;&nbsp;&laquo;past
            tense action&raquo;</code>
          </li>

          <li>
            If the action is create a record, the newly created record should
            be linked. Otherwise, the affected record should be shown inside
            quotation marks, but not linked.
          </li>

          <li>
            If the action affects multiple recipients, the first one should be
            listed, and the rest should be shown as &ldquo;X others&rdquo; and
            linked.
          </li>
        </ul>

        <div className="slds-scrollable--x">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">State</th>

                <th scope="col">User Action</th>

                <th scope="col">Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>Create a record with potential duplicates</td>

                <td>
                  <figure>
                    Some potential duplicate leads
                    found. <a href="#" tabIndex="-1">Select records to
                    merge</a>.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Warning
                </th>

                <td>Share a file (but there are external issues)</td>

                <td>
                  <figure>
                    File &ldquo;report-q3.pdf&rdquo; could not be shared with
                    the selected users.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Save a record (but the system cannot execute)</td>

                <td>
                  <figure>
                    Lead &ldquo;Sally Wong&rdquo; could not be saved.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Success
                </th>

                <td>Create a record</td>

                <td>
                  <figure>
                    Account <a href="#" tabIndex="-1">Jungle Designs</a> was
                    created.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Success
                </th>

                <td>Edit a record</td>

                <td>
                  <figure>
                    Contact &ldquo;Shirley Jones&rdquo; was saved.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Success
                </th>

                <td>Delete a record</td>

                <td>
                  <figure>
                    File &ldquo;cheers.jpg&rdquo; was deleted.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Success
                </th>

                <td>Clone a record</td>

                <td>
                  <figure>
                    Case &ldquo;Printer Error 2&rdquo; was deleted.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Success
                </th>

                <td>Share a file (multiple recipients)</td>

                <td>
                  <figure>
                    File &ldquo;Presentation Q2 2012&rdquo; was shared with
                    East Coast Sales Team
                    and <a href="#" tabIndex="-1">4 others</a>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Success
                </th>

                <td>Send an email (multiple recipients)</td>

                <td>
                  <figure>
                    Email was sent to Sarah Johnson
                    and <a href="#" tabIndex="-1">3 others</a>.
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
          <a href="/components/toast">Refer to this code
          sample</a> for the toast markup.
        </p>

        <p>
          The &ldquo;dismissible&rdquo; toast is preferred and should work for
          most cases. &ldquo;Dismissible&rdquo; means that the toast remains
          visible until the user dismisses it with the “&times;” or duration has
          elapsed, whichever comes first.
        </p>

        <p>
          If the toast contains a link, the staying duration should be longer.
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
                <th>Fade in &amp; fade out duration</th>

                <td><code>$duration-slowly</code></td>

                <td>0.4 seconds</td>
              </tr>

              <tr>
                <th>Staying duration (with link)</th>

                <td><code>3 * $duration-paused</code></td>

                <td>9.6 seconds</td>
              </tr>

              <tr>
                <th>Staying duration (without link)</th>

                <td><code>1.5 * $duration-paused</code></td>

                <td>4.8 seconds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
