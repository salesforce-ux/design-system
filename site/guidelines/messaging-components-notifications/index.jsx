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
  <PageBody anchorTitle="Notifications" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Notification in Context</a>
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
        <p className="site-text-introduction">
          <strong>Notification</strong> informs users of relevant activities
          across the board by surfacing actionable information &amp;
          shortcuts.
        </p>

        <img src="/assets/images/messaging/diagram-notification.png" alt="" width="442" height="208" />

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-notification.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Visible</li>

              <li><strong>Voice &amp; Tone:</strong> Informational</li>

              <li><strong>Motion:</strong> Static&mdash;Delicate</li>

              <li><strong>Duration:</strong> Dismissible</li>

              <li><strong>Audio:</strong> Muted&mdash;Soft (or Vibrate)</li>
            </ul>
          </div>
        </div>

        <p>
          Notifications let the user know when there are updates to items that
          are relevant to them. This includes the following:
        </p>

        <ul>
          <li>
            <strong>@ me</strong>. A user&rsquo;s name is mentioned in an
            item, or an item is assigned to the user.
            <br/>
            e.g. Sally Smith mentioned you in a comment: &ldquo;@John Doe can
            you post&hellip;&rdquo;
          </li>

          <li>
            <strong>Custom criteria</strong>. An item meets the custom
            criteria set by the user.
            <br/>
            e.g. let me know when this opportunity reaches
            &ldquo;negotiation&rdquo; stage.
          </li>

          <li>
            <strong>Approval</strong>. A user needs to approve an item, or the
            user&rsquo;s requested approval is completed.
            <br/>
            e.g. you need to approve a 15% discount for &ldquo;ACME - 100
            widgets.&rdquo;
          </li>

          <li>
            <strong>Reminder</strong>. An event or deadline is coming up.
            <br/>
            e.g. you have 7 days left to update your health insurance
            information.
          </li>

          <li>
            <strong>Process update</strong>. A process that the user initiated
            is either successfully completed or has errors.
            <br/>
            e.g. data import is complete.
          </li>

          <li>
            <strong>Product announcement</strong>. The application needs to
            inform the user of product-related news.
            <br/>
            e.g. read the release notes for Summer &rsquo;17.
          </li>
        </ul>

        <p>Notification is composed of two elements:</p>

        <ul>
          <li>
            <strong>Icon:</strong> shows a counter with the number of unread
            notification items.
          </li>

          <li>
            <strong>Tray:</strong> contains all the notification items that
            the user has received.
          </li>
        </ul>

        <p>
          The notification icon resides in the header and clicking on it
          toggles the tray on and off. When a new notification item comes in,
          a counter will be added to the icon; when there are multiple new
          items, the counter is updated accordingly. Each notification item in
          the tray links to the affected item respectively.
        </p>

        <p>A notification item can show one of the following states:</p>

        <ul>
          <li>
            <strong>Error:</strong> when a process that the user initiated
            (e.g. data import) has errors.
          </li>

          <li>
            <strong>Informational:</strong> when a relevant activity happens
            in a different part of the application. This will be the case for
            most notifications.
          </li>

          <li>
            <strong>Success:</strong> when a process that the user initiated
            (e.g. data import) is successfully completed.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Notification in Context
        </h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <figure className="slds-m-vertical--x-large slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/screenshot-notification-mobile.png" alt="Notification in Context (Mobile)" className="screenshot" width="187" height="334" />
          </figure>

          <figure className="slds-m-vertical--x-large slds-p-horizontal--small slds-size--1-of-1- slds-medium-size--2-of-3">
            <img src="/assets/images/messaging/screenshot-notification-desktop.png" alt="Notification in Context (Desktop)" className="screenshot" width="640" height="512" />
          </figure>
        </div>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li>
            <strong>Do</strong> include inline actions when appropriate, so
            the user can resolve an item immediately; e.g. a record needs your
            approval - &ldquo;approve&rdquo; or &ldquo;reject.&rdquo;
          </li>

          <li>
            <strong>Do</strong> allow user to mute individual notification
            items.
          </li>

          <li>
            <strong>Do</strong> batch notifications for the same item to
            minimize noise.

            <figure className="slds-m-vertical--x-large">
              <img className="image" src="/assets/images/messaging/img-notifications-batch.png" alt="" width="587" height="66" />
            </figure>
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do Not</h3>

        <ul>
          <li>
            <strong>Do not</strong> use notifications as a feedback mechanism.
            Look
            into <a href="/guidelines/messaging-components-inline-text">inline
            text</a>, <a href="/guidelines/messaging-components-popovers">popover</a>, <a href="/guidelines/messaging-components-toasts">toast</a>,
            or <a href="/guidelines/messaging-components-modals">modal</a> instead.
          </li>

          <li>
            <strong>Do not</strong> treat notifications as a single source of
            all activities. Notifications are highly customizable and a user
            may choose to mute certain items.
          </li>

          <li>
            <strong>Do not</strong> overload the user. Be selective with what
            you choose to send via notifications.
          </li>

          <li>
            <strong>Do not</strong> include multi-step actions in a
            notification item. Include only one-step actions, e.g. approve or
            reject, check off task, etc.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Component
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Long Text</figcaption>

          <div className="slds-box">
            <div className="slds-popover--large slds-global-header__notification">
              <div className="slds-popover__body slds-p-around--none">
                <ul>
                  <li className="slds-global-header__notification slds-p-around--xx-small">
                    <div className="slds-media slds-has-flexi-truncate slds-p-around--x-small">
                      <div className="slds-media__figure">
                        <img src="/assets/images/messaging/avatar3.jpg" className="slds-avatar--small slds-avatar--circle" alt="" />
                      </div>

                      <div className="slds-media__body">
                        <div className="slds-grid slds-grid--align-spread">
                          <a href="javascript:void(0);" className="slds-text-link--reset slds-has-flexi-truncate" tabIndex="-1">
                            <h3 className="slds-truncate">
                              <strong>
                                Kelly Chan mentioned you in a comment:
                              </strong>
                            </h3>

                            <p className="slds-truncate">
                              I just got off a phone call with the east Coast
                              team to follow up on this. I think the best
                              thing we can do right now is put together
                              another report for the client, but wait until
                              after the long weekend to share it with them.
                            </p>

                            <p className="slds-m-top--x-small slds-text-color--weak">
                              10m ago
                            </p>
                          </a>

                          <div className="slds-no-flex slds-grid slds-grid--vertical">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
                              <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true" title="settings" tabIndex="-1">
                                <SvgIcon aria-hidden="true" className="slds-button__icon" sprite="utility" symbol="down" />

                                <span className="slds-assistive-text">
                                  Show More
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            With Inline Actions
          </figcaption>

          <div className="slds-box">
            <div className="slds-popover--large slds-global-header__notification">
              <div className="slds-popover__body slds-p-around--none">
                <ul>
                  <li className="slds-global-header__notification slds-p-around--xx-small">
                    <div className="slds-media slds-has-flexi-truncate slds-p-around--x-small">
                      <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-opportunity" title="description of icon when needed">
                          <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small" sprite="standard" symbol="opportunity" />

                          <span className="slds-assistive-text">
                            Description of icon
                          </span>
                        </span>
                      </div>

                      <div className="slds-media__body">
                        <div className="slds-grid slds-grid--align-spread">
                          <a href="javascript:void(0);" className="slds-text-link--reset slds-has-flexi-truncate" tabIndex="-1">
                            <h3 className="slds-truncate">
                              <strong>John Doe needs your approval:</strong>
                            </h3>

                            <p className="slds-truncate">
                              ACME - 100 widgets
                            </p>

                            <p className="slds-m-top--x-small slds-text-color--weak">
                              10m ago
                            </p>

                            <div className="slds-button-group" role="group">
                              <button className="slds-button slds-button--neutral" tabIndex="-1">
                                Approve
                              </button>

                              <button className="slds-button slds-button--neutral" tabIndex="-1">
                                Reject
                              </button>
                            </div>
                          </a>

                          <div className="slds-no-flex slds-grid slds-grid--vertical">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
                              <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true" title="settings" tabIndex="-1">
                                <SvgIcon aria-hidden="true" className="slds-button__icon" sprite="utility" symbol="down" />

                                <span className="slds-assistive-text">
                                  Show More
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Task
          </figcaption>

          <div className="slds-box">
            <div className="slds-popover--large slds-global-header__notification">
              <div className="slds-popover__body slds-p-around--none">
                <ul>
                  <li className="slds-global-header__notification slds-p-around--xx-small">
                    <div className="slds-media slds-has-flexi-truncate slds-p-around--x-small">
                      <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-task" title="description of icon when needed">
                          <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small" sprite="standard" symbol="task" />

                          <span className="slds-assistive-text">
                            Description of icon
                          </span>
                        </span>
                      </div>

                      <div className="slds-media__body">
                        <div className="slds-grid slds-grid--align-spread">
                          <a href="javascript:void(0);" className="slds-text-link--reset slds-has-flexi-truncate"  tabIndex="-1">
                            <h3 className="slds-truncate">
                              <strong>
                                Bob Belcher assigned you a task:
                              </strong>
                            </h3>

                            <div className="slds-tile slds-media">
                              <div className="slds-media__figure">
                                <label className="slds-checkbox">
                                  <input type="checkbox" name="options" id="checkbox-01" tabIndex="-1" />

                                  <span className="slds-checkbox--faux"></span>

                                  <span className="slds-form-element__label slds-assistive-text">
                                    Did you complete this task?
                                  </span>
                                </label>
                              </div>

                              <div className="slds-media__body">
                                <p className="slds-truncate" title="Prepare report for Q1 2016 by June 1">
                                  Prepare report for Q1 2016 by June 1
                                </p>
                              </div>
                            </div>

                            <p className="slds-m-top--x-small slds-text-color--weak">
                              10m ago
                            </p>
                          </a>

                          <div className="slds-no-flex slds-grid slds-grid--vertical">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
                              <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true" title="settings" tabIndex="-1">
                                <SvgIcon aria-hidden="true" className="slds-button__icon" sprite="utility" symbol="down" />

                                <span className="slds-assistive-text">
                                  Show More
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Highlighted Text
          </figcaption>

          <div className="slds-box">
            <div className="slds-popover--large slds-global-header__notification">
              <div className="slds-popover__body slds-p-around--none">
                <ul>
                  <li className="slds-global-header__notification slds-p-around--xx-small">
                    <div className="slds-media slds-has-flexi-truncate slds-p-around--x-small">
                      <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-campaign" title="description of icon when needed">
                          <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small" sprite="standard" symbol="campaign" />

                          <span className="slds-assistive-text">
                            Description of icon
                          </span>
                        </span>
                      </div>

                      <div className="slds-media__body">
                        <div className="slds-grid slds-grid--align-spread">
                          <a href="javascript:void(0);" className="slds-text-link--reset slds-has-flexi-truncate" tabIndex="-1">
                            <h3 className="slds-truncate">
                              <strong>
                                &ldquo;Summer 2017&rdquo; met its members
                                goal:
                              </strong>
                            </h3>

                            <h4>5,142 / 5,000</h4>

                            <p className="slds-m-top--x-small slds-text-color--weak">
                              10m ago
                            </p>
                          </a>

                          <div className="slds-no-flex slds-grid slds-grid--vertical">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
                              <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true" title="settings" tabIndex="-1">
                                <SvgIcon aria-hidden="true" className="slds-button__icon" sprite="utility" symbol="down" />

                                <span className="slds-assistive-text">
                                  Show More
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <p>
          A notification item isn&rsquo;t displayed differently whether
          it&rsquo;s showing an informational or success message. It will
          still
          have <a href="/components/global-header/#flavor-notifications">component
          states</a> (unread, hover, etc.), however.
        </p>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Mobile</figcaption>

          <img src="/assets/images/messaging/screenshot-notification-mobile.png" alt="Notification in Context (Mobile)" className="screenshot" width="187" height="334" />
        </figure>

        <p>
          In mobile, the notification tray acts a little differently from its
          desktop equivalent. Instead of floating above the page, the
          notification tray in mobile slides in from the right to reveal the
          items.
        </p>

        <p>
          Additionally, keep in mind that depending on their settings, a user
          may receive OS-level notification on their phone when they are not
          in the application.
        </p>

        <h2 className="site-text-heading--large" id="flavor-ui-text">
          UI Text
        </h2>

        <p>TBD</p>

        <h2 className="site-text-heading--large" id="flavor-specs">
          Recommended Specs
        </h2>

        <p>
          <a href="/components/global-header/#flavor-notifications">Refer
          to this code sample</a> for the notification markup.
        </p>
      </div>
    </div>
  </PageBody>
);
