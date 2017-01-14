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
  <PageBody anchorTitle="Popovers" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Popover in Context</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-dos-donts">Dos and Don&rsquo;ts</a>
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
          <strong>Popovers</strong> call attention to a record without being
          obtrusive.
        </p>

        <img src="/assets/images/messaging/diagram-popover.png" alt="" width="248" height="92" />

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-popover.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Visible</li>

              <li>
                <strong>Voice &amp; Tone:</strong>
                Conversational&mdash;Informational
              </li>

              <li><strong>Motion:</strong> Static&mdash;Delicate</li>

              <li><strong>Duration:</strong> Dismissible</li>

              <li><strong>Audio:</strong> Muted</li>
            </ul>
          </div>
        </div>

        <p>A popover can show one of the following states:</p>

        <ul>
          <li>
            <strong>Error:</strong> to communicate error messages after a
            user submits their data.
          </li>

          <li>
            <strong>Warning:</strong> when the system nudges the user to
            engage with a record that hasn&rsquo;t had recent activities.
          </li>
        </ul>

        <p>A popover contains a title and body with optional inline links.</p>

        <p>
          In error scenarios, a red alert icon is displayed to the left of the
          action buttons (typically Save and Cancel). The popover is also red
          and appears above the icon. An error popover is displayed in
          conjunction with one or more field level error messages. This is
          more noticeable than an inline message but still doesn’t block other
          components. Show error popovers by default (after user submits the
          form, if there are errors). In case of multiple errors, the body
          text can be a bulleted list.
        </p>

        <figure className="slds-m-vertical--x-large">
          <img className="image" src="/assets/images/messaging/img-popover-form.svg" alt="" width="263" height="106" />
        </figure>

        <p>
          In engagement/warning scenarios, the relevant item displays a yellow
          alert icon, and the popover typically appears to the right of the
          icon. Users display engagement popovers by clicking the icon. Don’t
          show engagement popovers by default.
        </p>

        <figure className="slds-m-vertical--x-large">
          <img className="image" src="/assets/images/messaging/img-popover-tile.svg" alt="" width="366" height="72" />
        </figure>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Popover in Context
        </h2>

        <figure className="slds-m-vertical--x-large">
          <img src="/assets/images/messaging/screenshot-popover-warning-desktop.png" alt="Engagement Popover in Context (Desktop)" className="screenshot" width="640" height="512" />
        </figure>

        <figure className="slds-m-vertical--x-large">
          <img src="/assets/images/messaging/screenshot-popover-error-desktop.png" alt="Error Popover in Context (Desktop)" className="screenshot" width="640" height="512" />
        </figure>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li><strong>Do</strong> use animation to show/hide the popover.</li>

          <li>
            <strong>Do</strong> make sure that links and close button inside
            the popover are accessible via keyboard.
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do not</h3>

        <ul>
          <li><strong>Do not</strong> use error popover outside of forms.</li>

          <li>
            <strong>Do not</strong> use warning popover liberally. Make sure
            the criteria for calling a warning popover is flexible enough so
            the user doesn&rsquo;t constantly feel pestered.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">Error</figcaption>

          <div className="slds-box">
            <div className="slds-popover_container" style={{paddingLeft: 1.5 + 'rem', paddingTop: 6.375 + 'rem'}}>
              <a href="javascript:void(0);" className="slds-button" tabIndex="-1">
                <SvgIcon aria-hidden="true" className="slds-icon slds-icon-text-error slds-icon--small" sprite="utility" symbol="warning" />

                <span className="slds-assistive-text">
                  Review the Following Errors
                </span>
              </a>

              <button className="slds-button slds-button--neutral" type="button" tabIndex="-1">
                Cancel
              </button>

              <button className="slds-button slds-button--brand" type="button" tabIndex="-1">
                Save
              </button>

              <div className="slds-popover slds-nubbin--bottom-left slds-theme--error" role="alert" aria-live="polite" style={{position: 'absolute', top: 0, left: 1.3 + 'rem'}}>
                <div className="slds-popover__body slds-text-longform">
                  <p className="slds-text-heading--small">
                    Review the following errors
                  </p>

                  <ul>
                    <li>Name cannot contain letters</li>

                    <li>Email is not in the correct format</li>
                  </ul>
                </div>

                <button className="slds-button slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--medium" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>
              </div>
            </div>
          </div>
        </figure>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Warning
          </figcaption>

          <div className="slds-box">
            <div className="slds-popover_container">
              <a href="javascript:void(0);" className="slds-button" tabIndex="-1">
                <SvgIcon aria-hidden="true" className="slds-icon slds-icon-text-warning slds-icon--small" sprite="utility" symbol="warning" />

                <span className="slds-assistive-text">Close</span>
              </a>

              <div className="slds-popover slds-nubbin--left" role="dialog">
                <div className="slds-popover__body">
                  <p className="slds-text-heading--small">
                    No open activities
                  </p>

                  <p>
                    <a href="#" tabIndex="-1">Create a
                    task</a> or <a href="#" tabIndex="-1">schedule an
                    event</a> to keep this deal moving!
                  </p>
                </div>

                <button className="slds-button slds-notify__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--medium" sprite="utility" symbol="close" />

                  <span className="slds-assistive-text">Close</span>

                </button>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <p>N/A (do not use this pattern in mobile)</p>

        <h2 className="site-text-heading--large" id="flavor-ui-text">
          UI Text
        </h2>

        <div className="slds-scrollable--x slds-m-vertical--x-large">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover ">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">State</th>

                <th scope="col">Example Title</th>

                <th scope="col">Example Body</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Warning
                </th>

                <td>No open activities</td>

                <td>
                  <figure>
                    <a href="#" tabIndex="-1">Create a
                    task</a> or <a href="#" tabIndex="-1">schedule an
                    event</a> to keep this deal moving!
                  </figure>
                </td>
              </tr>

              <tr>
                <th scope="row" className="slds-text-heading--label">
                  Error
                </th>

                <td>Review the following errors</td>

                <td>
                  <figure>
                    <ul>
                      <li>Name cannot contain letters</li>

                      <li>Email is not in the correct format</li>
                    </ul>
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="site-text-heading--large">Recommended Specs</h2>

        <p>
          <a href="https://www.lightningdesignsystem.com/components/popovers/">Refer
          to this code sample</a> for the popover markup.
        </p>

        <div className="slds-scrollable--x slds-m-vertical--x-large">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover ">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">Description</th>

                <th scope="col">Token</th>

                <th scope="col">Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Fade in &amp; fade out duration</th>

                <td><code>$duration-promptly</code></td>

                <td><code>.2s</code></td>
              </tr>

              <tr>
                <th scope="row">Sliding distance</th>
                <td><code>$spacing-medium</code></td>
                <td><code>16px</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
