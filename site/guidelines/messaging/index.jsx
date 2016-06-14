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
import CodeBlock from 'app_modules/ui/code-block';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Messaging" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">When the user or system takes action, various messaging patterns are used to show the result or impact.</p>
      <h2 className="site-text-heading--large">Icons</h2>
      <p>Icons may be used in messaging components. Follow these guidelines when deciding which icon to use in your messages.</p>
      <div className={pf('scrollable--x m-bottom--xx-large')}>
        <table className={pf('table max-medium-table--stacked no-row-hover')}>
          <thead>
            <tr className={pf('site-text-heading--label')}>
              <th scope="col">Icons</th>
              <th scope="col">When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="success" />
                </span>
                Success
              </th>
              <td data-label="When to Use">Action was completed successfully.</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="warning" />
                </span>
                Warning
              </th>
              <td data-label="When to Use">Something undesirable might occur.</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="error" />
                </span>
                Error
              </th>
              <td data-label="When to Use">Something went wrong.</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="custom_apps" />
                </span>
                Wrench
              </th>
              <td data-label="When to Use">Maintenance - or admin - related message.</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="offline" />
                </span>
                Offline
              </th>
              <td data-label="When to Use">Offline mode.</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="info" />
                </span>
                Info
              </th>
              <td data-label="When to Use">Additional information &mdash; either positive or negative &mdash; is available.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Toasts */}
      <div className={pf('p-vertical--xx-large')}>
        <h2 className="site-text-heading--large">Toasts</h2>
        <p><strong>Use a toast as a feedback mechanism to communicate important, high-level information after the user takes an action.</strong></p>
        <p>Use a toast to communicate a successful process, an unsuccessful process, or a warning.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toasts.svg" alt="" />
        </figure>
        <p>Toasts appear on top of a page. For example, a user edits an opportunity via a modal and successfully saves it; the modal closes and the success toast appears on top of the opportunity detail page.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toast-app.svg" alt="" />
        </figure>
        <p>Toasts may appear in three different manners:</p>
        <ul>
          <li>Sticky &mdash; remains visible until the user dismisses it with the “X”.  Duration doesn’t apply to this type of toast.</li>
          <li>Dismissible &mdash; remains visible until the user dismisses it with the “X” or duration has elapsed, whichever comes first.</li>
          <li>Pester &mdash; remains visible until duration has elapsed. No “X” is presented and user cannot dismiss it early. This mode forces the user to “see” the toast for the full duration period.</li>
        </ul>
        <p>The width of a toast is determined primarily by the length of its content and its inside padding. The minimum width is 480px. Center the toast within the canvas of the page (excluding the left navigation bar).The toast text wraps to as many lines as necessary without truncation.</p>
        <p>Fix toasts to the top of the page so that they’re always visible to the user, even as they scroll the page.</p>
        <p>If you have <strong>more than one</strong> toast appearing at the same time, stack them, with the most recent toast on top. The other toasts stack underneath in chronological order.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toasts-alt.svg" alt="" />
        </figure>
        <p>To minimize the number of toasts that appear, <strong>batch</strong> toasts of the same type.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toasts-batch.svg" alt="" />
        </figure>
        <p><strong>Note:</strong> Don’t use a toast to confirm success when a create action brings the user to the newly created item. For example, successfully creating a new record from a listview doesn’t call a toast, because the user is taken directly to the new record. No more information is needed.</p>
      </div>

      {/* Prompts */}
      <div className={pf('p-vertical--xx-large')}>
        <h2 className="site-text-heading--large">Prompts</h2>
        <p><strong>A prompt is a notification that requires action from the user to proceed.</strong></p>
        <p><strong>Note:</strong> Prompts are part of system messaging and are handled internally by Salesforce. Partners building apps that appear within Salesforce shouldn’t use prompts.</p>
        <p>Prompts provide the user with one or more options to proceed. Prompts have no close icon; to dismiss them, the user must pick one of the options presented. Prompts behave like a modal in that it sits on top of a mask that obscures the rest of the UI.</p>
        <p>Prompts are used to communicate system-related messaging to the user. For instance, to inform users about an upcoming maintenance or to warn users that they are about to be logged out due to inactivity.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-modal-notifications.svg" alt="" />
        </figure>
        <p>Size the prompt at 50% of the width of the viewport, with a minimum width of 480px. The content inside the prompt determines the height.</p>
      </div>


      {/* Banners */}
      <div className={pf('p-vertical--xx-large')}>
        <h2 className="site-text-heading--large">Banners</h2>
        <p><strong>Note:</strong> Banners are part of system messaging and are handled internally by Salesforce. Partners building apps that appear within Salesforce shouldn’t use banners.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-system-level.svg" alt="" />
        </figure>
        <p>Banners communicate something that affects the entire system, not just a feature or page. They appear without the user taking an action. Examples of when to use banners include:</p>
        <ul>
          <li>The user is using an unsupported browser.</li>
          <li>An admin is logged in as one of the users.</li>
          <li>The user is using a trial version of Salesforce.</li>
          <li>The user is offline.</li>
        </ul>
        <p>Banners appear as a strip above the global header and are generally not dismissible. Banners can be dismissed if they communicate future impact to the system, but has no bearing on the system at the moment, e.g. notifying users of scheduled maintenance.</p>
        <h2 className="site-text-heading--large">Popovers</h2>
        <p>Popovers are used in two cases:</p>
        <ul>
          <li>As a feedback mechanism to communicate error messages after a user submits data.</li>
          <li>As a way to engage the user and nudge them to do something (e.g. update a record that hasn’t been touched in 30 days, adding a task to a new record, etc).</li>
        </ul>
        <p>In the first case, the popover appears in conjunction with forms, and the icon is always placed to the left of action buttons (typically Save/Cancel).</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-popover-form.svg" alt="" />
        </figure>
        <p>In the second case, the popover icon typically appears to the right of the relevant item. However, depending on the item affected, the icon may appear in other positions.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-popover-tile.svg" alt="" />
        </figure>
        <p>The popover can be shown/hidden by clicking on the icon or by clicking on the X button.</p>
      </div>
    </div>
  </PageBody>
);
