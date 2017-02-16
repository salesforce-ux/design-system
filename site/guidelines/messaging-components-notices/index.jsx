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
  <PageBody anchorTitle="Notices" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Notice in Context</a>
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
        <figure>
          <img src="/assets/images/messaging/diagram-notice.png" alt="" width="411" height="123" />
        </figure>

        <p className="site-text-introduction">
          <strong>Notice</strong> alerts users to system-related issues and
          updates.
        </p>

        <p>
          <strong>Note:</strong> If you’re a partner building an app that
          appears within Salesforce, don’t use this component.
        </p>

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-notice.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Pronounced</li>

              <li><strong>Voice &amp; Tone:</strong> (Varies per circumstance)</li>

              <li><strong>Motion:</strong> Dramatic</li>

              <li><strong>Duration:</strong> Permanent</li>

              <li><strong>Audio:</strong> Loud</li>
            </ul>
          </div>
        </div>

        <p>
          Notices appear when the system needs to communicate a message to
          the user; it doesn&rsquo;t show up as a result of user action.
          Notices should appear <strong>rarely</strong> and generally should
          not be a part of a typical user flow.
        </p>

        <p>
          Notices do not have a close (&times;) button. To dismiss a notice,
          the user needs to hit the action button inside of the notice.
        </p>

        <p>A notice can show one of the following states:</p>

        <ul>
          <li>
            <strong>Error:</strong> when the system is running into a system
            issue that may prevent the user from moving forward properly.
          </li>

          <li>
            <strong>Informational:</strong> when the system needs to relay
            system-related information that isn’t necessarily work-stopping.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Notice in Context
        </h2>

        <figure className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/screenshot-notice-mobile.png" alt="Notice in Context (Mobile)" className="site-screenshot" width="187" height="334" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <img src="/assets/images/messaging/screenshot-notice-desktop.png" alt="Notice in Context (Desktop)" className="site-screenshot" width="640" height="512" />
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li>
            <strong>Do</strong> use notices sparingly. They should not be your
            first choice to display system messaging because they interrupt
            the user and block everything else on the page.
          </li>

          <li>
            <strong>Do</strong> solicit user feedback in notices when it makes
            sense. When an unexpected system error happens, for example, user
            feedback may be a good way to identify the issue.
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do Not</h3>

        <ul>
          <li>
            <strong>Do not</strong> use notices as a confirmation for user
            action, e.g. warning before user deletes an item. Use
            a <a href="/guidelines/messaging-components-modals">standard modal</a> instead
            for this.
          </li>

          <li>
            <strong>Do not</strong> stack multiple notices.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Component
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            One Action Button
          </figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div aria-hidden="false" aria-labelledby="prompt-heading-id" aria-describedby="prompt-message-wrapper" role="alertdialog" className="slds-modal slds-modal--prompt">
              <div className="slds-modal__container slds-modal--prompt" role="document" id="prompt-message-wrapper" tabIndex="0">
                <div className="slds-modal__header slds-theme--info slds-theme--alert-texture">
                  <h2 className="slds-text-heading--medium" id="prompt-heading-id">
                    Scheduled Maintenance
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--medium">
                  <div>
                    <p>
                      <strong>
                        Sunday March 15, 08:00 AM PST &ndash; 10:00 AM PDT
                      </strong>
                    </p>

                    <p>
                      Please be advised that salesforce.com will be performing
                      scheduled maintenance during the above time period.
                    </p>

                    <p>
                      Salesforce.com may be intermittently unavailable or slow
                      during this period.
                    </p>
                  </div>
                </div>

                <div className="slds-modal__footer slds-theme--default">
                  <button className="slds-button slds-button--neutral" tabIndex="-1">
                    OK
                  </button>
                </div>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Multiple Action Buttons
          </figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div aria-hidden="false" aria-labelledby="prompt-heading-id" aria-describedby="prompt-message-wrapper" role="alertdialog" className="slds-modal slds-modal--prompt">
              <div className="slds-modal__container slds-modal--prompt" role="document" id="prompt-message-wrapper" tabIndex="0">
                <div className="slds-modal__header slds-theme--info slds-theme--alert-texture">
                  <h2 className="slds-text-heading--medium" id="prompt-heading-id">
                    Still There?
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--medium">
                  <div>
                    <p>
                      For security, we log you out if you&rsquo;re inactive
                      for too long.
                    </p>
                  </div>
                </div>

                <div className="slds-modal__footer slds-theme--default">
                  <button className="slds-button slds-button--neutral" tabIndex="-1">
                    Log out now
                  </button>

                  <button className="slds-button slds-button--brand" tabIndex="-1">
                    Continue working
                  </button>
                </div>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            One Action Button + Input
          </figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div aria-hidden="false" aria-labelledby="prompt-heading-id" aria-describedby="prompt-message-wrapper" role="alertdialog" className="slds-modal slds-modal--prompt">
              <div className="slds-modal__container slds-modal--prompt" role="document" id="prompt-message-wrapper" tabIndex="0">
                <div className="slds-modal__header slds-theme--error slds-theme--alert-texture">
                  <h2 className="slds-text-heading--medium" id="prompt-heading-id">
                    Sorry to Interrupt
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--medium">
                  <div>
                    <p>
                      This page has an error. You might just need to refresh
                      it. First, would you give us some details?
                    </p>

                    <p>
                      (We&rsquo;re reporting this as error ID:
                      7491d3-88xd-5obnp034271twp).
                    </p>

                    <div className="slds-form-element">
                      <label className="slds-form-element__label" htmlFor="textarea-input-01">
                        What was going on right before this error happened?
                      </label>

                      <div className="slds-form-element__control">
                        <textarea id="textarea-input-02" className="slds-textarea" tabIndex="-1">
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slds-modal__footer slds-theme--default">
                  <button className="slds-button slds-button--neutral" tabIndex="-1">
                    OK
                  </button>
                </div>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Error</figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div aria-hidden="false" aria-labelledby="prompt-heading-id" aria-describedby="prompt-message-wrapper" role="alertdialog" className="slds-modal slds-modal--prompt">
              <div className="slds-modal__container slds-modal--prompt" role="document" id="prompt-message-wrapper" tabIndex="0">
                <div className="slds-modal__header slds-theme--error slds-theme--alert-texture">
                  <h2 className="slds-text-heading--medium" id="prompt-heading-id">
                    Something Has Gone Wrong
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--medium">
                  <div>
                    <p>
                      Unfortunately, there was a problem. Please try again. If
                      the problem continues, get in touch with your
                      adminstrator.
                    </p>
                  </div>
                </div>

                <div className="slds-modal__footer slds-theme--default">
                  <button className="slds-button slds-button--neutral" tabIndex="-1">
                    OK
                  </button>
                </div>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">
            Informational
          </figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div aria-hidden="false" aria-labelledby="prompt-heading-id" aria-describedby="prompt-message-wrapper" role="alertdialog" className="slds-modal slds-modal--prompt">
              <div className="slds-modal__container slds-modal--prompt" role="document" id="prompt-message-wrapper" tabIndex="0">
                <div className="slds-modal__header slds-theme--info slds-theme--alert-texture">
                  <h2 className="slds-text-heading--medium" id="prompt-heading-id">
                    Scheduled Maintenance
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--medium">
                  <div>
                    <p>
                      <strong>
                        Sunday March 15, 08:00 AM PST &ndash; 10:00 AM PDT
                      </strong>
                    </p>

                    <p>
                      Please be advised that salesforce.com will be performing
                      scheduled maintenance during the above time period.
                    </p>

                    <p>
                      Salesforce.com may be intermittently unavailable or slow
                      during this period.
                    </p>
                  </div>
                </div>

                <div className="slds-modal__footer slds-theme--default">
                  <button className="slds-button slds-button--neutral" tabIndex="-1">
                    OK
                  </button>
                </div>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Mobile</figcaption>

          <div className="slds-notify_container slds-notify_container--inline slds-notify_container--mobile">
            <div aria-hidden="false" aria-labelledby="prompt-heading-id" aria-describedby="prompt-message-wrapper" role="alertdialog" className="slds-modal slds-modal--prompt">
              <div className="slds-modal__container slds-notify--mobile slds-notify--modal slds-modal--prompt" role="document" id="prompt-message-wrapper" tabIndex="0">
                <div className="slds-modal__header slds-theme--info slds-theme--alert-texture">
                  <h2 className="slds-text-heading--medium" id="prompt-heading-id">
                    Scheduled Maintenance
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--medium">
                  <div>
                    <p>
                      <strong>
                        Sunday March 15, 08:00 AM PST &ndash; 10:00 AM PDT
                      </strong>
                    </p>

                    <p>
                      Please be advised that salesforce.com will be performing
                      scheduled maintenance during the above time period.
                    </p>

                    <p>
                      Salesforce.com may be intermittently unavailable or slow
                      during this period.
                    </p>
                  </div>
                </div>

                <div className="slds-modal__footer slds-theme--default">
                  <button className="slds-button slds-button--neutral" tabIndex="-1">
                    OK
                  </button>
                </div>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <ul>
          <li>Smaller title</li>

          <li>Full-width button</li>
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

                <th scope="col">Intent</th>

                <th scope="col">Example Title</th>

                <th scope="col">Example Body</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>Inform user of upcoming maintenance</td>

                <td>Scheduled Maintenance</td>

                <td>
                  <figure>
                    <p>Sunday March 15, 08:00 AM PST – 10:00 AM PDT.</p>

                    <p>
                      Please be advised that salesforce.com will be performing
                      scheduled maintenance during the above time period.
                    </p>

                    <p>
                      Salesforce.com may be intermittently unavailable or slow
                      during this period.
                    </p>
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Informational
                </th>

                <td>Asks user if they still want to be logged in</td>

                <td>Still There?</td>

                <td>
                  <figure>
                    For security, we log you out if you&rsquo;re inactive for
                    too long.
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Alerts user that an unspecified system error happened</td>

                <td>Something Has Gone Wrong</td>

                <td>
                  <figure>
                    Unfortunately, there was a problem. Please try again. If
                    the problem continues, get in touch with your
                    adminstrator.
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
          <a href="/components/prompt">Refer to this
          code sample</a> for the notice markup.
        </p>

        <p>
          Use the default notice component specs plus the animation specs
          below.
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
                <th scope="row">
                  Background fade in &amp; fade out duration
                </th>

                <td><code>$duration-quickly</code></td>

                <td>0.1 seconds</td>
              </tr>

              <tr>
                <th scope="row">
                  Notice grow animation duration
                </th>

                <td><code>$duration-quickly</code></td>

                <td>0.1 seconds</td>
              </tr>

              <tr>
                <th scope="row">
                  Notice grow initial size
                </th>

                <td><code>N/A</code></td>

                <td>0.9</td>
              </tr>

              <tr>
                <th scope="row">
                  Notice grow final size
                </th>

                <td><code>N/A</code></td>

                <td>1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
