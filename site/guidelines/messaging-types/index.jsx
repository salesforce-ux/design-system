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
  <PageBody anchorTitle="Messaging Types" contentClassName="site-guidelines">
    <div className="slds-container--large site-lmf">
      <img className="image" src="/assets/images/messaging/img-messaging-types.png" alt="At a high-level, we categorize messaging types by the nature of user interaction: system, engagement, access, and feedback." width="2000" height="620" />

      <p>
        At a high-level, we categorize messaging types by the nature of user
        interaction:
      </p>

      <ul>
        <li className="slds-m-bottom--x-large">
          <strong>System messaging</strong> alerts the user of important
          system-related issues or status. It&rsquo;s initiated by the system
          and it&rsquo;s not a result of the user&rsquo;s actions.
          <br/>
          e.g. System maintenance coming up this weekend.
        </li>

        <li className="slds-m-bottom--x-large">
          <strong>Engagement messaging</strong> nudges the user to enter or
          update data in the system. It can be initiated by either the system
          or another user.
          <br/>
          e.g. No activity on Opportunity <var>x</var> in the past 30 days.
          Create a task or schedule an event.
        </li>

        <li className="slds-m-bottom--x-large">
          <strong>Access messaging</strong> appears when the user tries to
          access an item that&rsquo;s not available to them. It may be because
          the record has been deleted, the user doesn’t have access, etc.
          etc.
          <br/>
          e.g. Lead <var>x</var> isn’t available.
        </li>

        <li>
          <strong>Feedback messaging</strong> is the application&rsquo;s
          response when the user is interacting with it. The majority of
          create, read, update, delete (CRUD) actions will result in feedback
          messaging.
          <br/>
          e.g. Account <var>x</var> was created.
        </li>
      </ul>
    </div>
  </PageBody>
);
