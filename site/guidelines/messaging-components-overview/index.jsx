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

export default (
  <PageBody anchorTitle="Messaging Components" contentClassName="site-guidelines">
    <div className="slds-container--large lmf">
      <p className="site-text-introduction">
        There are a number of messaging components available for use. To
        choose a messaging element, you can refer to either Components
        or <a href="/guidelines/messaging-states">States</a> as a starting
        point.
      </p>

      <figure>
        <img src="/assets/images/messaging/img-messaging-components.png" alt="Grid of available components: Inline Text, Toast, Modal, Popover, Banner, Notice, Notification, and Illustration & Text" width="1090" height="460" />
      </figure>

      <p>
        Each component has <strong>properties</strong> that determine
        their prominence. For example:
      </p>

      <div className="slds-scrollable--x slds-m-vertical--x-large">
        <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover ">
          <thead>
            <tr className="site-text-heading--label">
              <th scope="col" className="slds-text-align--center">
                <img src="/assets/images/messaging/icon-visual.png" alt="" width="60" height="60" />
                <br />
                Visual
              </th>

              <th scope="col" className="slds-text-align--center">
                <img src="/assets/images/messaging/icon-voice-tone.png" alt="" width="60" height="60" />
                <br />
                Voice &#38; Tone
              </th>

              <th scope="col" className="slds-text-align--center">
                <img src="/assets/images/messaging/icon-motion.png" alt="" width="60" height="60" />
                <br />
                Motion
              </th>

              <th scope="col" className="slds-text-align--center">
                <img src="/assets/images/messaging/icon-duration.png" alt="" width="60" height="60" />
                <br />
                Duration
              </th>

              <th scope="col" className="slds-text-align--center">
                <img src="/assets/images/messaging/icon-audio.png" alt="" width="60" height="60" />
                <br />
                Audio
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="slds-text-align--center">
                <ul className="site-list--reset">
                  <li>Camouflaged</li>

                  <li>Visible</li>

                  <li>Pronounced</li>
                </ul>
              </td>

              <td className="slds-text-align--center">
                <ul className="site-list--reset">
                  <li>Conversational</li>

                  <li>Informational</li>

                  <li>Imperative</li>
                </ul>
              </td>

              <td className="slds-text-align--center">
                <ul className="site-list--reset">
                  <li>Static</li>

                  <li>Delicate</li>

                  <li>Dramatic</li>
                </ul>
              </td>

              <td className="slds-text-align--center">
                <ul className="site-list--reset">
                  <li>Temporary</li>

                  <li>Dismissible</li>

                  <li>Permanent</li>
                </ul>
              </td>

              <td className="slds-text-align--center">
                <ul className="site-list--reset">
                  <li>Muted</li>

                  <li>Soft (or Vibrate)</li>

                  <li>Loud</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        These properties are mapped to each component. Below is an example
        for &ldquo;inline text&rdquo; component.
      </p>

      <div className="slds-grid slds-wrap slds-grid--pull-padded">
        <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3 slds-text-align--center">
          <img src="/assets/images/messaging/chart-text.png" alt="" width="240" height="240" />
        </div>

        <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
          <h4 className="site-text-heading--label">Inline Text</h4>

          <ul>
            <li><strong>Visual:</strong> Camouflaged&mdash;Visible</li>

            <li>
              <strong>Voice &amp;
              Tone:</strong> Conversational&mdash;Informational
            </li>

            <li><strong>Motion:</strong> Static</li>

            <li><strong>Duration:</strong> Permanent</li>

            <li><strong>Audio:</strong> Muted</li>
          </ul>
        </div>
      </div>

      <p>Once everything is mapped, an order emerges.</p>

      <figure>
        <ol aria-label="List of messaging components in order of least interruptive to most interruptive" className="slds-grid slds-wrap slds-grid--pull-padded site-text-heading--label">
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-inline-text">
              <img src="/assets/images/messaging/chart-text.png" alt="" width="120" height="120" />
              <br />
              Inline Text
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-popovers">
              <img src="/assets/images/messaging/chart-popover.png" alt="" width="120" height="120" />
              <br />
              Popovers
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-notifications">
              <img src="/assets/images/messaging/chart-notification.png" alt="" width="120" height="120" />
              <br />
              Notifications
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-toasts">
              <img src="/assets/images/messaging/chart-toast.png" alt="" width="120" height="120" />
              <br />
              Toasts
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-banners">
              <img src="/assets/images/messaging/chart-banner.png" alt="" width="120" height="120" />
              <br />
              Banners
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-illustration-and-inline-text">
              <img src="/assets/images/messaging/chart-illustration-text.png" alt="" width="120" height="120" />
              <br />
              Illustration &#38;&nbsp;Text
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-modals">
              <img src="/assets/images/messaging/chart-modal.png" alt="" width="120" height="120" />
              <br />
              Modals
            </a>
          </li>

          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-8 slds-text-align--center">
            <a href="/guidelines/messaging-components-notices">
              <img src="/assets/images/messaging/chart-notice.png" alt="" width="120" height="120" />
              <br />
              Notices
            </a>
          </li>
        </ol>

        <div className="site-dimension" aria-hidden="true">
          <div className="site-dimension__line"></div>
        </div>

        <figcaption>
          <div className="slds-m-top--x-large slds-grid slds-wrap slds-grid--pull-padded slds-text-body--small">
            <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3 slds-text-align--left">
              <h2 className="slds-assistive-text">Least Interruptive</h2>

              <ul className="site-list--reset">
                <li className="slds-m-bottom--small">less interruptive</li>

                <li className="slds-m-bottom--small">
                  occupies a smaller section of the page, either as a component,
                  alongside another component, or in a&nbsp;&ldquo;card&rdquo;
                </li>

                <li className="slds-m-bottom--small">
                  is temporary, dismissible, or displayed inline
                </li>
              </ul>
            </div>

            <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3 slds-col--bump-left slds-text-align--right">
              <h2 className="slds-assistive-text">Most Interruptive</h2>

              <ul className="site-list--reset">
                <li className="slds-m-bottom--small">
                  &ldquo;in-your-face&rdquo;
                </li>

                <li className="slds-m-bottom--small">
                  occupies the whole page or a large amount of space
                </li>

                <li className="slds-m-bottom--small">
                  is either permanent or forces the user to take an action
                  before disappearing
                </li>
              </ul>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </PageBody>
);
