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
  <PageBody anchorTitle="Inline Text" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Inline Text in Context</a>
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
          <strong>Inline text</strong> communicates messages in an
          non-blocking way. It&rsquo;s displayed inline and doesn&rsquo;t
          block any other part of the interface.
        </p>

        <img src="/assets/images/messaging/diagram-text.png" alt="" width="300" height="58" />

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-text.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Camouflaged&ndash;Visible</li>

              <li>
                <strong>Voice &amp;
                Tone:</strong> (Varies per circumstance)
              </li>

              <li><strong>Motion:</strong> Static</li>

              <li><strong>Duration:</strong> Permanent</li>

              <li><strong>Audio:</strong> Muted</li>
            </ul>
          </div>
        </div>

        <p>
          Inline text can be more hidden or visible (depending on the
          context), but it&rsquo;s always displayed inline, inside a UI
          component or next to another UI component. The text should blend
          with the surrounding UI, except for error states.
        </p>

        <p>Inline text can show one of the following states:</p>

        <ul>
          <li><strong>Empty:</strong> when data is absent or unavailable.</li>

          <li>
            <strong>Error:</strong> when the system cannot load content, or
            when a form field is problematic.
          </li>

          <li>
            <strong>Informational:</strong> when an item has an atypical
            status, e.g. duplicates.
          </li>

          <li>
            <strong>Transient:</strong> when the system is processing an
            action, e.g. saving, loading, sending email, etc.
          </li>
        </ul>

        <p>
          For an empty state that affects the whole page, consider
          using <a href="/guidelines/messaging-components-illustration-and-inline-text">Inline Text + Illustration</a>.
        </p>

        <p>
          For form error, the message is displayed in red and typically used
          in conjunction with
          a <a href="/guidelines/messaging-components-popovers">popover</a>.
        </p>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Inline Text in Context
        </h2>

        <p>
          Inline text can appear in many different contexts. Refer to the
          variants sections below to see the different examples.
        </p>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li>
            <strong>Do</strong> keep it short. 1&ndash;2 sentences is
            sufficient for most use cases.
          </li>

          <li>
            <strong>Do</strong> use a different color when displaying error
            messages.
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do not</h3>

        <ul>
          <li>
            <strong>Do not</strong> depend on inline text if the message is
            more urgent, e.g. warn when user is about to delete a record.
          </li>

          <li>
            <strong>Do not</strong> visually differentiate inline text too
            much from the surrounding UI. Avoid significant changes, e.g.
            bigger font size, inverted background colors, etc. At most, the
            text should change color (for errors).
          </li>

          <li>
            <strong>Do not</strong> use animation/motion to display inline
            text. At most, it should fade in/out for transient states.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Component
        </h2>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Text Only
          </figcaption>

          <div className="slds-box">
            <p>
              No next steps. To get things
              moving, <a href="#" tabIndex="-1">add a
              task</a> or <a href="#" tabIndex="-1">set up a meeting</a>.
            </p>
          </div>
        </figure>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Icon &amp; Text
          </figcaption>

          <div className="slds-box">
            <div className="slds-inline_icon_text slds-grid">
              <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="info" />

              <div className="slds-col slds-align-middle">
                <p>
                  This idea has been merged into another idea. To comment or
                  vote on this idea, please
                  visit <a href="#" tabIndex="-1">Open links in Console</a>.
                </p>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">Empty</figcaption>

          <div className="slds-box">
            <p>
              No next steps. To get things
              moving, <a href="#" tabIndex="-1">add a
              task</a> or <a href="#" tabIndex="-1">set up a meeting</a>.
            </p>
          </div>
        </figure>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">Error</figcaption>

          <figure className="slds-box">
            <div className="slds-card_container">
              <div className="slds-card slds-card--narrow">
                <div className="slds-card__header slds-grid">
                  <div className="slds-media slds-media--center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                      <SvgIcon aria-hidden="true" className="slds-icon slds-icon-standard-contact slds-icon--small" sprite="standard" symbol="contact" />
                    </div>

                    <div className="slds-media__body slds-truncate">
                      <a href="javascript:void(0);" className="slds-text-link--reset" tabIndex="-1">
                        <span className="slds-text-heading--small">
                          Contacts
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="slds-no-flex">
                    <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" tabIndex="-1">
                      <SvgIcon aria-hidden="true" className="slds-button__icon" sprite="utility" symbol="down" />

                      <span className="slds-assistive-text">
                        More Options
                      </span>
                    </button>
                  </div>
                </div>

                <div className="slds-card__body">
                  <div className="slds-card__body--inner">
                    <div className="slds-tile slds-has-error">
                      <p>
                        <span className="slds-content-message">Can’t load contact.</span> <a href="#" tabIndex="-1">Try
                        again?</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>

          <figure className="slds-box">
            <div className="slds-form-element is-required slds-has-error slds-card_container">
              <label className="slds-form-element__label" htmlFor="text-input-01">
                <abbr className="slds-required" title="required">*</abbr> Name
              </label>

              <div className="slds-form-element__control">
                <input id="text-input-01" className="slds-input" type="text" placeholder="" required="" aria-describedby="error-message" tabIndex="-1" />
              </div>

              <div id="error-message" className="slds-form-element__help">
                Enter a name
              </div>
            </div>
          </figure>

          <figure className="slds-box">
            <div className="slds-inline_icon_text slds-grid slds-inline_icon_text--error">
              <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="warning" />

              <div className="slds-col slds-align-middle">
                <p>Review the following errors.</p>
              </div>
            </div>
          </figure>
        </figure>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Informational
          </figcaption>

          <div className="slds-box">
            <div className="slds-inline_icon_text slds-grid slds-m-bottom--large">
              <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="info" />

              <div className="slds-col slds-align-middle">
                <p>
                  It looks as if duplicates exist for this lead. <a href="#" tabIndex="-1">View Duplicates</a>.
                </p>
              </div>
            </div>

            <p>3 of 10 files selected</p>
          </div>
        </figure>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Transient
          </figcaption>

          <div className="slds-box">
            <p><em>Saving&hellip;</em></p>
          </div>
        </figure>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Warning
          </figcaption>

          <div className="slds-box">
            <div className="slds-inline_icon_text slds-grid slds-inline_icon_text--warning">
              <SvgIcon aria-hidden="true" className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="warning" />

              <div className="slds-col slds-align-middle">
                <p>3 potential duplicates found.</p>
              </div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>

        <p>
          There are no special variants for text messaging component in
          mobile. Just as it is in desktop, the text should adapt to the
          surrounding UI.
        </p>

        <h2 className="site-text-heading--large" id="flavor-ui-text">
          UI Text
        </h2>

        <p>
          Text can vary greatly case to case, depending on the context. The
          guidelines below serve as examples, but you are not limited to them.
        </p>

        <div className="slds-scrollable--x slds-m-vertical--x-large">
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
                <th className="slds-text-heading--label" scope="row">
                  Empty
                </th>

                <td>State a fact</td>

                <td>No deals to show.</td>
              </tr>

              <tr>
                <th className="slds-text-heading--label" scope="row">
                  Empty
                </th>

                <td>
                  Encourage use of feature / suggest something else / use a
                  best practice
                </td>

                <td>
                  <figure>
                    No results for &ldquo;Acme&rdquo; in Opportunities. To see
                    if there are other results, select another object under
                    Search Results.
                  </figure>
                </td>
              </tr>

              <tr>
                <th className="slds-text-heading--label" scope="row">
                  Informational
                </th>

                <td>Show a status</td>

                <td>
                  <figure>
                    This idea has been merged into another idea. To comment or
                    vote on this idea, please
                    visit <a href="#" tabIndex="-1">Open links in Console</a>.
                  </figure>
                </td>
              </tr>

              <tr>
                <th className="slds-text-heading--label" scope="row">
                  Transient
                </th>

                <td>Show the system is working on a request</td>

                <td>
                  <figure>Saving&hellip;</figure>
                </td>
              </tr>

              <tr>
                <th className="slds-text-heading--label" scope="row">
                  Error
                </th>

                <td>Inform that the required field is empty</td>

                <td>
                  <figure>
                    This field is required.
                  </figure>
                </td>
              </tr>

              <tr>
                <th className="slds-text-heading--label" scope="row">
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
          <a href="/components/utilities/text/#flavor-base">Refer
          to this code sample</a> for basic text markup.
        </p>

        <p>
          In general, the messaging text should conform to the text
          specifications within that UI component. If it&rsquo;s a component
          that normally doesn&rsquo;t have text, treat the messaging text as
          regular body text.
        </p>

        <p>If it&rsquo;s an error, add the specs below.</p>

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
                <th scope="row">Error text color</th>

                <td><code>$color-text-error</code></td>

                <td>#c23934</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
