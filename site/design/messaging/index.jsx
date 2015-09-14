/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Link } from 'react-router';
import PageBody from 'app_modules/site/components/page/body';
import CodeBlock from 'app_modules/ui/code-block';
import SvgIcon from 'app_modules/ui/svg-icon';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

export default (
  <PageBody anchorTitle="Messaging" contentClassName={pf('site-design site-design-layout')}>
    <div className={pf('container--medium')}>
      <p className="site-text-introduction">When the user or system takes action, various messaging patterns are used to show the result or impact.</p>
      <h2 className={pf('site-text-heading--large')}>Icons</h2>
      <p>Icons are used in all the various messaging patterns. Follow these guidelines when deciding which icon to use in your messages.</p>
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
              <td data-label="When to Use">Action completed successfully.</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="warning" />
                </span>
                Warning
              </th>
              <td data-label="When to Use">Something undersirable might occur.</td>
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
              <td data-label="When to Use">A message about maintenance</td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="offline" />
                </span>
                Offline
              </th>
              <td data-label="When to Use">Something happened as a result of being offline. </td>
            </tr>
            <tr>
              <th scope="row" data-label="Icon">
                <span className={pf('m-right--small')}>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="utility" symbol="info" />
                </span>
                Info
              </th>
              <td data-label="When to Use">Indicates additional information - either positive or negative - is available.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Toasts */}
      <div className={pf('p-vertical--xx-large')}>
        <h2 className={pf('site-text-heading--large')}>Toast Messages</h2>
        <p><strong>Use a toast when you have important, high-level information to communicate about a recently attempted or completed action.</strong></p>
        <p>A toast is a dismissable message used to communicate a successful process, an unsuccessful process, or a warning.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toasts.svg" alt="" />
        </figure>
        <p>You can show a toast at the top of a page or modal, depending on where the user lands after attempting the action. For example, if a user successfully saves edits made to a record in a modal, the modal closes, and the toast appears at the top of the page from which the edit action was triggered. However, if the edits are unsuccessful, the modal doesn’t close, and the toast appears at the top of the modal to inform the user about the errors that prevented the edits from being saved.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toast-app.svg" alt="" />
        </figure>
        <p>Toasts are always dismissible via an X icon on the top right. Success and informational toasts dismiss themselves after 5 seconds. Error toasts never dismiss themselves. The user must explicitly dismiss them.</p>
        <p>The width of a toast is determined primarily by the length of its content and its inside padding. The minimum width is 480px. Center the toast within the canvas of the page (excluding the left navigation bar).The toast text wraps to as many lines as necessary without truncation.</p>
        <p>Fix page­level toasts to the top of the page so that they’re always visible, even as the user scrolls, to ensure that the message is always delivered to the user.</p>
        <p>If you have <strong>more than one</strong> toast appearing at the same time, stack them, with the most recent toast on top. The other toasts stack underneath in chronological order.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toasts-alt.svg" alt="" />
        </figure>
        <p>To minimize the number of toasts that appear, <strong>batch</strong> toasts of the same type.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-toasts-batch.svg" alt="" />
        </figure>
        <p><strong>Note:</strong>  Don’t use a toast to confirm success when a create action brings the user to the newly created item. For example, successfully creating a new record from a listview doesn’t call a toast, because the user is taken directly to the new record. No more information is needed.</p>
      </div>

      {/* Prompts */}
      <div className={pf('p-vertical--xx-large')}>
        <h2 className={pf('site-text-heading--large')}>Prompts</h2>
        <p><strong>A prompt is a notification that requires action from the user to proceed.</strong></p>
        <p>Prompts provide the user with one or more options to proceed. The user must pick one of them to dismiss the prompt. The prompt has no close icon. The alert behaves like a modal, in that it sits on top of a mask that obscures the rest of the UI.</p>
        <p>It can be used to confirm actions that have major impact, such as sending out an email to thousands of people, or destructive actions, such as deleting a record. It can also be used to notify the user of a systemic occurrence that requires action from the user to proceed, such as a session timeout that will force the user to log out.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-modal-notifications.svg" alt="" />
        </figure>
        <p>Size the prompt at 50% of the width of the viewport, with a minimum width of 480px. The content inside the prompt determines the height.</p>
      </div>


      {/* System Level Messaging */}
      <div className={pf('p-vertical--xx-large')}>
        <h2 className={pf('site-text-heading--large')}>System Level Messaging</h2>
        <p><strong>These global messages communicate the status of the system when it affects how a user can expect the system to behave.</strong></p>
        <p><strong>Note:</strong> System messages are handled internally by Salesforce. Partners building apps that appear within Salesforce shouldn’t use system messaging.</p>
        <p>Use system-­level messaging when something affects the entire system, not just a feature or page. Typically, the user doesn’t have to perform an action.</p>
        <figure className={pf('p-bottom--large')}>
          <img className={pf('image')} src="/assets/images/messaging/img-system-level.svg" alt="" />
        </figure>
        <p>Examples of when to use system­-level messaging include:</p>
        <ul>
          <li>The user is using an unsupported browser.</li>
          <li>An admin is logged in as one of the users.</li>
          <li>The user is using a trial version of Salesforce.</li>
          <li>The user is offline.</li>
        </ul>
        <p>System-­level messaging is generally not dismissible. It always appears as a strip above the global header. A system message can be dismissible if it communicates future impact to the system, but has no bearing on the system at the moment. For example, a system message notifying users of scheduled maintenance is dismissable.</p>
      </div>
    </div>
  </PageBody>
);
