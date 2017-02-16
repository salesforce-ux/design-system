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
import Heading from 'app_modules/site/components/page/heading';

export default (
  <PageBody anchorTitle="Messaging States" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">States</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#empty">Empty</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#error">Error</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#informational">Informational</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#offline">Offline</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#success">Success</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#transient">Transient</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#warning">Warning</a>
          </li>
        </ul>
      </div>
    </StickyNav>

    <div className="site-main-content slds-col slds-col-rule--right slds-size--1-of-1 slds-large-size--4-of-6 slds-large-order--1">
      <div className="slds-container--large site-lmf">
        <p className="site-text-introduction">
          Messaging state informs the UI text&rsquo;s voice &amp; tone. In
          keeping with messaging principles, the UI text should
          be <strong>informative</strong> and <strong>actionable</strong> (when
          possible).
        </p>

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="empty" className="site-text-heading--large">Empty</Heading>

          <p>Empty state can appear in these scenarios:</p>

          <ul>
            <li>A component on a page has no item to show</li>

            <li>A page has no item to show</li>
          </ul>

          <p>
            Each of the scenario above shows the empty message a little
            differently. Below are some guidelines around what components to
            use for each case.
          </p>

          <h3 className="site-text-heading--label">Empty component</h3>

          <p>
            If&hellip; a component on a page has no item to show,
            <br/>
            Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">inline
            text</a> inside the component.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-empty-component.png" alt="" width="300" height="90" />
          </figure>

          <h3 className="site-text-heading--label">Empty page</h3>

          <p>
            If&hellip; a page has no item to show,
            <br/>
            Then&hellip; load the page
            with <a href="/guidelines/messaging-components-illustration-and-inline-text">illustration
            &amp; inline text</a>.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-illustration.png" alt="" width="400" height="220" />
          </figure>
        </section>

        <hr className="slds-m-vertical--xx-large" />

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="error" className="site-text-heading--large">Error</Heading>

          <p>Error state can appear in these scenarios:</p>

          <ul>
            <li>
              A user submits a form that contains error on one or more fields
            </li>

            <li>
              A user completes an action (e.g. submitting a form), but
              system-related issues prevent the action to be truly executed
            </li>

            <li>A card&rsquo;s content cannot be loaded</li>

            <li>
              A system-related error is affecting the user&rsquo;s current
              session
            </li>

            <li>A system-related error occurs at random</li>

            <li>
              A page&rsquo;s content is inaccessible (e.g. it cannot be found,
              user doesn&rsquo;t have sufficient privilege, etc).
            </li>

            <li>
              A process that the user initiated (e.g. data import) has errors.
            </li>
          </ul>

          <p>
            Each of the scenario above shows the error message a little
            differently. Below are some guidelines around what components to
            use for each case.
          </p>

          <h3 className="site-text-heading--label">Form Field Error</h3>

          <p>
            If&hellip; a user submits a form that contains error on one or
            more fields,
            <br/>
            Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">inline
            text</a> &amp; pair it up
            with <a href="/guidelines/messaging-components-popovers">popover</a>.
          </p>

          <p>
            The field-level inline text displays error message relevant to
            that field (e.g. phone number cannot contain letters), whereas the
            popover shows a high-level summary (e.g. Review the following
            fields: phone number).
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-form-01.png" alt="" width="448" height="234" />
          </figure>

          <p>
            Alternatively&hellip; if you cannot use a popover in your design,
            show <a href="/guidelines/messaging-components-inline-text">inline
            text (+ icon variant)</a> instead.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-form-02.png" alt="" width="448" height="287" />
          </figure>

          <h3 className="site-text-heading--label">
            Incomplete Action Error
          </h3>

          <p>
            If&hellip; a user completes an action, but system-related issues
            prevent the action to be truly executed,
            <br/>Then&hellip; display
            an <a href="/guidelines/messaging-components-toasts">error
            toast</a> after the action fails to finish.
          </p>

          <p>
            Use the &ldquo;title &amp; description&rdquo; variant if you need
            to display additional information.
          </p>

          <p>
            This should appear <strong>rarely</strong> and generally should
            not be a part of a typical user flow.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-incomplete.png" alt="" width="600" height="48" />
          </figure>

          <h3 className="site-text-heading--label">Card Content Error</h3>

          <p>
            If&hellip; a card&rsquo;s content cannot be loaded,
            <br/>
            Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">error
            inline text</a> inside the card.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-card.png" alt="" width="300" height="90" />
          </figure>

          <h3 className="site-text-heading--label">
            System Error (Current Session)
          </h3>

          <p>
            If&hellip; a system-related error is affecting the user&rsquo;s
            current session,
            <br/>
            Then&hellip; display
            a <a href="/guidelines/messaging-components-banners">banner</a> while
            the user is using the application.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-system-session.png" alt="" width="640" height="40" />
          </figure>

          <h3 className="site-text-heading--label">System Error (Random)</h3>

          <p>
            If&hellip; a system-related error occurs at random,
            <br/>
            Then&hellip; call
            a <a href="/guidelines/messaging-components-notices">notice</a> to
            notify the user.
          </p>

          <p>
            Note that a notice should appear <strong>rarely</strong> and
            generally should not be a part of a typical user flow.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-system-random.png" alt="" width="646" height="175" />
          </figure>

          <h3 className="site-text-heading--label">
            Inaccessible Page Content
          </h3>

          <p>
            If&hellip; a page&rsquo;s content is not accessible after the user
            tries to open it,
            <br/>
            Then&hellip; load the page
            with <a href="/guidelines/messaging-components-illustration-and-inline-text">illustration
            &amp; inline text</a>.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-illustration.png" alt="" width="400" height="220" />
          </figure>

          <h3 className="site-text-heading--label">Process Error</h3>

          <p>
            If&hellip; a process that the user initiated (e.g. data import)
            has errors,
            <br/>
            Then&hellip; alert the user
            via <a href="/guidelines/messaging-components-notifications">notification</a>.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-notification.png" alt="" width="442" height="150" />
          </figure>
        </section>

        <hr className="slds-m-vertical--xx-large" />

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="informational" className="site-text-heading--large">Informational</Heading>

          <p>Informational state can appear in these scenarios:</p>

          <ul>
            <li>An item has an atypical status, e.g. duplicates</li>

            <li>
              A user completes an action, but there are some additional info
              to be shown
            </li>

            <li>
              An admin-related status applies to user&rsquo;s current session
            </li>

            <li>The system is unavailable, e.g. under maintenance</li>

            <li>
              The system needs to relay information that&rsquo;s important but
              not immediately work-stopping
            </li>

            <li>
              The system needs to inform the user about a relevant activity
              that happened in a different part of the application.
            </li>
          </ul>

          <p>
            Each of the scenario above shows the informational message a
            little differently. Below are some guidelines around what
            components to use for each case.
          </p>

          <h3 className="site-text-heading--label">
            Item with Atypical Status
          </h3>

          <p>
            If&hellip; an item has an atypical status,
            <br/>Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">inline
            text with an icon</a> on top of the content.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-item-status.png" alt="" width="400" height="44" />
          </figure>

          <h3 className="site-text-heading--label">
            Additional Information After a Successful Action
          </h3>

          <p>
            If&hellip; a user completes an action, but there are some
            additional info to be shown,
            <br/>
            Then&hellip; display
            an <a href="/guidelines/messaging-components-toasts">informational
            toast</a>.
          </p>

          <p>
            Use the &ldquo;title &amp; description&rdquo; variant if you need
            to display additional information.
          </p>

          <p>
            For example, a user may have successfully added 100 people to a
            campaign, but 20 of those were already in the list. The system
            still added the remaining 80, but it&rsquo;s useful to tell the
            user that 20 of them were in the list to begin with.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-additional.png" alt="" width="600" height="48" />
          </figure>

          <h3 className="site-text-heading--label">Admin-related Status</h3>

          <p>
            If&hellip; an admin-related status applies to user&rsquo;s current
            session,
            <br/>
            Then&hellip; display
            a <a href="/guidelines/messaging-components-banners">banner</a> while
            the user is using the application.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-session.png" alt="" width="640" height="40" />
          </figure>

          <h3 className="site-text-heading--label">System is Unavailable</h3>

          <p>
            If&hellip; the system is unavailable,
            <br/>
            Then&hellip; load the page
            with <a href="/guidelines/messaging-components-illustration-and-inline-text">illustration
            &amp; inline text</a>.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-error-illustration.png" alt="" width="400" height="220" />
          </figure>

          <h3 className="site-text-heading--label">System Information</h3>

          <p>
            If&hellip; the system needs to relay information that&rsquo;s
            important but not immediately work-stopping,
            <br/>
            Then&hellip; call
            a <a href="/guidelines/messaging-components-notices">notice</a> to
            notify the user.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-system-info.png" alt="" width="646" height="175" />
          </figure>

          <h3 className="site-text-heading--label">Activity Update</h3>

          <p>
            If&hellip; the system needs to inform the user about a relevant
            activity that happened in a different part of the application,
            <br/>
            Then&hellip; alert the user
            via <a href="/guidelines/messaging-components-notifications">notification</a>.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-notification.png" alt="" width="442" height="150" />
          </figure>
        </section>

        <hr className="slds-m-vertical--xx-large" />

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="offline" className="site-text-heading--large">Offline</Heading>

          <p>
            Offline state appears when the system detects that the user
            isn&rsquo;t connected.
          </p>

          <p>
            If&hellip; the system detects that the user isn&rsquo;t connected,
            <br/>
            Then&hellip; display
            a <a href="/guidelines/messaging-components-banners">banner</a> until
            the user is back online.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img src="/assets/images/messaging/state-offline.png" alt="" width="640" height="40" />
          </figure>
        </section>

        <hr className="slds-m-vertical--xx-large" />

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="success" className="site-text-heading--large">Success</Heading>

          <p>Success state can appear in these scenarios:</p>

          <ul>
            <li>
              An action that requires user&rsquo;s manual input (e.g.
              submitting a form) is successfully completed
            </li>

            <li>
              An action that is triggered automatically (e.g. auto-saving a
              note) is successfully completed
            </li>

            <li>
              A process that the user initiated (e.g. data import) is
              successfully completed
            </li>
          </ul>

          <p>
            Each of the scenario above shows the success message a little
            differently. Below are some guidelines around what components to
            use for each case.
          </p>

          <h3 className="site-text-heading--label">Manual Action</h3>

          <p>
            If&hellip; an action is completed after user&rsquo;s manual input,
            <br/>
            Then&hellip; display
            a <a href="/guidelines/messaging-components-toasts">success
            toast</a> afterward.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-success-manual.png" alt="" width="600" height="48" />
          </figure>

          <h3 className="site-text-heading--label">Automatic Action</h3>

          <p>
            If&hellip; an action is completed automatically,
            <br/>
            Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">inline
            text</a> afterward.
          </p>

          <p>
            In this case, the success message is likely to appear frequently,
            so we want to use a component that is the least obtrusive.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-success-automatic.png" alt="" width="138" height="6" />
          </figure>

          <h3 className="site-text-heading--label">Process Success</h3>

          <p>
            If&hellip; a process that the user initiated (e.g. data import) is
            successfully completed,
            <br/>
            Then&hellip; alert the user
            via <a href="/guidelines/messaging-components-notifications">notification</a>.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-informational-notification.png" alt="" width="442" height="150" />
          </figure>
        </section>

        <hr className="slds-m-vertical--xx-large" />

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="transient" className="site-text-heading--large">Transient</Heading>

          <p>
            Transient state appears when the system is processing an action,
            e.g. saving, loading, sending email, etc.
          </p>

          <p>
            If&hellip; the system is processing an action,
            <br/>
            Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">inline
            text</a> and remove it when the system is done processing.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img src="/assets/images/messaging/state-success-automatic.png" alt="" width="138" height="6" />
          </figure>

          <p>
            If… the system is processing file upload(s),
            <br />
            Then… show a modal with progress bar and remove it when the system
            is done processing.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img src="/assets/images/messaging/state-transient-progress.png" alt="" width="656" height="129" />
          </figure>
        </section>

        <hr className="slds-m-vertical--xx-large" />

        <section className="slds-p-vertical--x-large">
          <Heading type="h2" id="warning" className="site-text-heading--large">Warning</Heading>

          <p>Warning state can appear in these scenarios:</p>

          <ul>
            <li>
              The system detects potential issues with the form a user is
              working on (e.g. duplicates)
            </li>

            <li>
              The system nudges the user to engage with a record that
              hasn&rsquo;t had recent activities
            </li>

            <li>
              A user cannot complete an action due to external factors (e.g.
              permission) rather than something they can fix right away (e.g.
              form error)
            </li>

            <li>
              A system-related issue is affecting the user&rsquo;s current
              session
            </li>

            <li>
              A user is about to commit an action that is destructive, has
              major impacts, or abandons incomplete action
            </li>
          </ul>

          <h3 className="site-text-heading--label">Form Warning</h3>

          <p>
            If&hellip; the system detects potential issues with the form a
            user is working on,
            <br/>
            Then&hellip;
            show <a href="/guidelines/messaging-components-inline-text">inline
            text (+ icon variant)</a> on top of the form as soon as it loads.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-warning-form.png" alt="" width="448" height="241" />
          </figure>

          <h3 className="site-text-heading--label">Outdated Item</h3>

          <p>
            If&hellip; the system nudges the user to engage with a record that
            hasn&rsquo;t had recent activities,
            <br/>
            Then&hellip; show
            a <a href="/guidelines/messaging-components-popovers">popover</a> next
            to the item in question.
          </p>

          <p>
            This typically appears in a list/card view, where many records are
            displayed on the page; the icon would appear inside the affected
            card.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-warning-outdated.png" alt="" width="278" height="68" />
          </figure>

          <h3 className="site-text-heading--label">
            Incomplete Action Warning
          </h3>

          <p>
            If&hellip; a user cannot complete an action due to external
            factors,
            <br/>
            Then&hellip; display
            a <a href="/guidelines/messaging-components-toasts">warning
            toast</a> after the action fails to finish.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-warning-incomplete.png" alt="" width="600" height="48" />
          </figure>

          <h3 className="site-text-heading--label">
            System Warning (Current Session)</h3>

          <p>
            If&hellip; a system-related issue is affecting the user&rsquo;s
            current session,
            <br/>
            Then&hellip; display
            a <a href="/guidelines/messaging-components-banners">banner</a> while
            the user is using the application.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-warning-system-session.png" alt="" width="640" height="40" />
          </figure>

          <h3 className="site-text-heading--label">User Confirmation</h3>

          <p>
            If&hellip; a user is about to commit an action that is
            destructive, completes an action that has major impacts, or
            abandons incomplete action,
            <br/>
            Then&hellip; call
            a <a href="/guidelines/messaging-components-modals">modal</a> to
            ask for user confirmation.
          </p>

          <figure className="slds-m-vertical--xx-large">
            <img className="image" src="/assets/images/messaging/state-warning-confirmation.png" alt="" width="656" height="184" />
          </figure>
        </section>
      </div>
    </div>
  </PageBody>
);
