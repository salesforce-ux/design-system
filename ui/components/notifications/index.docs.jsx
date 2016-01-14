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
import { prefix as pf } from 'app_modules/ui/util/component';

import CodeClass from 'app_modules/site/components/code-class';

export const intro = (
  <p className="site-text-introduction">
    Page level toasts are universally visible and are fixed to the top of the page even as the user scrolls. This ensures that the message is always delivered to the user.
  </p>
);

export default (
  <ComponentDocs>
    <p>Toasts accept two parameters: duration and dismissible. Duration controls how long the toast is visible, with a minimum time of 5 seconds. Dismissible controls whether the X is visible on the toast to let the user close the toast.</p>
    <p>Toasts should provide a link to the relevant record in the case of creates. Or a primary action- like undo. In the case of toast for items added to a feed or related list, the link should scroll the user down the page until the item is visible.</p>
    <p>All toasts other than success toasts should also provide an icon to distinguish the kind of message that it is. For example error toasts include the error icon.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Notifications should contain <code>role="alert"</code> on the container to signal to assistive technology that they require the user&rsquo;s immediate attention. Use a span with <CodeClass className="assistive-text" /> to let the user know what type of notification it is.</p>
  </ComponentDocs>
);
