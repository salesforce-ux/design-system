/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ComponentDocs from 'app_modules/site/components/page/component/docs';
import CodeClass from 'app_modules/site/components/code-class';
import CodeBlock from 'app_modules/ui/code-block';

export const intro = (
  <p className="site-text-introduction">
    The App Launcher allows the user to quickly access all the apps and functionality with their organization.
  </p>
);

export default (
  <ComponentDocs>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>
      Each App Launcher section uses the <a href="/components/utilities/text/#flavor-section-title-section-title-open">Section Title</a> component. It contains a button heading that opens and closes the content below it. The button heading needs to be associated with the content so that assistive technology knows what the button opens and closes. The button and section also need aria attributes to indicate the open and closed state of the section.
    </p>

    <div className="slds-p-top--small">
      <strong>Notable attributes</strong>
      <br />

      Button:
      <br />
      <ul>
        <li>
          <code>aria-controls</code> is used to create an association between the button and the section. If the section has an <code>id="content"</code>, then the button should have <code>aria-controls="content"</code>.
        </li>
        <li>
          <code>aria-expanded</code> indicates if the section is open or closed and is read aloud by assitive technology when the button is focused.
        </li>
      </ul>

      Section:
      <br />
      <ul>
        <li>
          <code>aria-hidden</code> indicates if the section is open or closed, and if set to <code>true</code>, assistive technology hides the section.
        </li>
      </ul>
    </div>

    <div className="slds-p-top--medium">
      <strong>Keyboard navigation</strong>
      <br />
      <ul>
        <li>
          The button should behave as a normal button. The user should be able to tab to focus it and press enter/space to activate it.
        </li>
      </ul>
    </div>

    <div className="slds-p-top--medium">
      <strong>Updating Operation and State</strong>
      <br />
      <ul>
        <li>
          When the user interacts with the button to open the section, <code>aria-expanded</code> on the button should be <code>true</code> and <code>aria-hidden</code> on the section should be <code>false</code>.
        </li>
        <li>
          When the user interacts with the button to close the section, <code>aria-expanded</code> on the button should be <code>false</code> and <code>aria-hidden</code> on the section should be <code>true</code>.
        </li>
      </ul>
    </div>

  </ComponentDocs>
);
