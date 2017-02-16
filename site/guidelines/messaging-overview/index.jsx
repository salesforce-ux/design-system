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
import SvgIcon from 'app_modules/ui/svg-icon';

export default (
  <PageBody anchorTitle="Messaging Overview" contentClassName="site slds-container--large">
    <div className="slds-container--large site-lmf">
      <p className="site-text-introduction">
        The Lightning Messaging Framework is a design guideline for
        messaging patterns in the Salesforce ecosystem.
      </p>

      <p>
        Effective messaging instills trust in the system, communicates
        relevant information, &amp; creates moments of delight for the user.
      </p>

      <h2 className="site-text-heading--large">General Guidelines</h2>

      <p>
        <strong>
          How do I determine the appropriate messaging
          for <var>x</var> when <var>y</var> happens?
        </strong>
      </p>

      <ul>
        <li>
          Select the appropriate <a href="/guidelines/messaging-types">messaging
          type</a> based on user&rsquo;s interaction with the application
        </li>

        <li>
          Pick a <a href="/guidelines/messaging-components-overview">messaging
          component</a> from the category that&hellip;

          <ul>
            <li>Makes sense given the user flow &amp; the UI</li>

            <li>Has the appropriate level of prominence</li>
          </ul>
        </li>

        <li>
          Examine which <a href="/guidelines/messaging-states">messaging
          state</a> best characterizes the message.
        </li>
      </ul>

      <div className="slds-scrollable--x">
        <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover ">
          <thead className="slds-theme--shade">
            <tr className="site-text-heading--label">
              <th scope="col">
                <span className="slds-assistive-text">Messaging Type</span>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-inline-text">
                  Inline Text
                </a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-popovers">
                  Popover
                </a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-popovers">
                  Notification
                </a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-toasts">Toast</a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-banners">Banner</a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-illustration-and-inline-text">
                  Illustration &amp; Inline Text
                </a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-modals">Modal</a>
              </th>

              <th scope="col">
                <a href="/guidelines/messaging-components-notices">Notice</a>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className="slds-text-heading--label">System</th>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>
            </tr>

            <tr>
              <th scope="row" className="slds-text-heading--label">
                Engagement
              </th>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>
                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" className="slds-text-heading--label">Access</th>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>
            </tr>

            <tr>
              <th scope="row" className="slds-text-heading--label">
                Feedback
              </th>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>

              <td>
                <span className="slds-assistive-text">Yes</span>

                <span aria-hidden="true">✔</span>
              </td>

              <td>
                <span className="slds-assistive-text">No</span>

                <span className="slds-assistive-text" aria-hidden="true">
                  ✘
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="site-text-heading--large">Principles</h2>

      <p>
        <strong>
          Keep these principles in mind when you design messaging for your
          feature/product
        </strong>
      </p>

      <ul>
        <li>
          <strong>Timely</strong>, not noisy.
          <br />
          Deliver messages at the right time. Not every interaction requires
          messaging to go with it.
        </li>

        <li>
          <strong>Informative</strong>, not verbose.
          <br />
          Say what&rsquo;s necessary and not much more.
        </li>

        <li>
          <strong>Actionable</strong>, not static.
          <br />
          Enable shortcuts for relevant actions to improve efficiency.
        </li>

        <li>
          <strong>Cross device</strong>, not duplicative.
          <br />
          When appropriate, alert users on all their devices, but clear the
          messaging once user has read it.
        </li>
      </ul>

      <h2 className="site-text-heading--large">Icons</h2>

      <p>
        Icons may be used in messaging components. Follow these guidelines
        when deciding which icon to use in your messages.
      </p>

      <div className="slds-scrollable--x">
        <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover ">
          <thead className="slds-theme--shade">
            <tr className="site-text-heading--label">
              <th scope="col">Icon</th>

              <th scope="col">Use when&hellip;</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="error" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">Error</div>
                </div>
              </th>

              <td data-label="When to Use">
                Something is erroneous.
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="info" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">Info</div>
                </div>
              </th>

              <td data-label="When to Use">
                Additional information is available.
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="offline" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">Offline</div>
                </div>
              </th>

              <td data-label="When to Use">User is in offline mode.</td>
            </tr>

            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="success" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">Success</div>
                </div>
              </th>

              <td data-label="When to Use">
                An action was completed.
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="warning" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">Warning</div>
                </div>
              </th>

              <td data-label="When to Use">
                Something is potentially problematic.
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="user" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">User</div>
                </div>
              </th>

              <td data-label="When to Use">
                User-related message is shown.
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="custom_apps" aria-hidden="true" />
                  </div>

                  <div className="slds-media__body">Wrench</div>
                </div>
              </th>

              <td data-label="When to Use">
                Maintenance-related message is shown.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="site-text-heading--large">Example Usage</h2>

      <p>
        A salesperson just got off a call to discuss a potential sale of 100
        widgets with ACME that&rsquo;s been in the pipeline for a while. The
        sale finally went through, but some of the numbers also changed. She
        goes into the application and updates this record so the data is
        properly tracked. <strong>What should be the application&rsquo;s
        response to show that the record is saved?</strong>
      </p>

      <p>
        First, examine the user interaction in this flow to determine the
        messaging type.
      </p>

      <ul>
        <li>User initiated the interaction.</li>

        <li>
          Since it is user-initiated, the possible messaging types for this
          flow are &ldquo;access&rdquo; and &ldquo;feedback.&rdquo;

          <figure>
            <img className="image" src="/assets/images/messaging/img-messaging-types.png" alt="At a high-level, we categorize messaging types by the nature of user interaction: system, engagement, access, and feedback." />
          </figure>
        </li>

        <li>
          The record is accessible, and the user successfully saves their
          changes. Given that, we are left with one option.
        </li>

        <li><strong>Messaging Type: Feedback</strong></li>
      </ul>

      <p>Next, let&rsquo;s take a look at the components.</p>

      <ul>
        <li>
          Based on the guideline, we have these components available for
          feedback messaging: text, popover, toast, &amp; modal.

          <ul>
            <li>
              <a href="/guidelines/messaging-components-inline-text">Inline
              Text</a> is used for empty and inaccessible states in
              feed/card/related list, field-level error message, or in-between
              states (saving, loading, etc.). We need something more prominent
              to display a success message.
            </li>

            <li>
              <a href="/guidelines/messaging-components-popovers">Popover</a> is
              used to either &ldquo;engage the user and nudge them to take an
              action&rdquo; or &ldquo;communicate error messages after a user
              submits their data.&rdquo; Neither of which applies to this
              example.
            </li>

            <li>
              <a href="/guidelines/messaging-components-toasts">Toast</a> serves
              as a &ldquo;confirmation mechanism after the user takes an
              action&hellip; [and] in conjunction with create/edit/delete
              actions.&rdquo;
            </li>

            <li>
              <a href="/guidelines/messaging-components-modals">Modal</a> acts
              as &ldquo;a warning mechanism to ensure the user action is
              intentional and not accidental.&rdquo; In this case, the action
              is completely intentional (editing the record) and no warning is
              needed.
            </li>
          </ul>
        </li>

        <li>
          From the list above, it seems like toast is the right pick. Check
          to see if it&rsquo;s the right level of prominence given the UI.
        </li>

        <li><strong>Messaging Component: Toast</strong></li>
      </ul>

      <p>Finally, determine the messaging state.</p>

      <ul>
        <li>
          In this case, the user successfully saved the changes they made to
          the record.
        </li>

        <li><strong>Messaging State: Success</strong></li>
      </ul>

      <p>
        So what should be the application&rsquo;s response to show that the
        record is saved successfully? Based on the analysis above, the
        application should <strong>show a success toast</strong>.
      </p>
    </div>
  </PageBody>
);
