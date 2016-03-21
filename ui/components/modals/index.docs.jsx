/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import CodeClass from 'app_modules/site/components/code-class';
import ComponentDocs from 'app_modules/site/components/page/component/docs';
import { prefix as pf } from 'app_modules/ui/util/component';

export const intro = (
  <p className="site-text-introduction">
    Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.
  </p>
);

export default (
  <ComponentDocs>
    <p>Default modals are used in the vast majority of cases. They are as wide as 50% of the viewport, but include a minimum and maximum width to avoid going too narrow or too wide.</p>
    <p>Modals always have an equal amount of space at the top and bottom to account for the height of the close button.</p>
    <p>Modals grow according to how much content is within, but once the modal reaches full height (including the previously mentioned space on top and bottom), the content area will begin to scroll. (This scrolling is currently not available in Salesforce1 Mobile.)</p>
    <p>Modals can have a tagline in the header, simply by adding a paragraph after the heading.</p>
    <p>By default, the content area of the modal does not have spacing. This allows for content such as Tables to be full-width to the modal. To get spacing when you need it, apply a padding utility (<CodeClass className="p-around--medium" />).</p>
    <p>Modal headers can also have taglines, if you need to provide additional context. This tagline can also contain links, or the whole thing could be a link in and of itself.</p>
    <p>Large modals call for large amounts of content. The height follows the same behavior and styles of other modals. The width changes to 90% of the viewport, and uses a wider minimum width and no maximum width.</p>
    <p>These are modals that require a linearly directional paradigm of navigation (&ldquo;Next&rdquo; and &ldquo;Back&rdquo;, etc.) &mdash; the actionable buttons in the modal footer live on the left and right, rather than all on the right. These can either be within a large or default modal, depending on the use case.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Modals, by definition, trap focus. This means that if a user presses Tab or Shift+Tab while their keyboard focus is in the modal, their focus should stay in and cycle through the modal’s content. Focus shouldn&rsquo;t return to the underlying page until the user presses the Esc key, presses an explicit &ldquo;Cancel&rdquo; or &ldquo;Close&rdquo; button in the modal, or performs another action that closes the modal.</p>
    <p>Expected markup:</p>
    <ul>
      <li>Modal has <code>role="dialog"</code></li>
      <li>When the modal is open, everything behind it has HTML attribute <code>aria-hidden="true"</code>, so assistive technology won't read out the underlying page. The best way to do this is to give the modal and the page separate wrapper elements and toggle <code>aria-hidden="true"</code>/<code>aria-hidden="false"</code> on the main page's wrapper depending on whether or not the modal is open.</li>
      <li>Modal contains an HTML heading</li>
      <li>Modal has an <code>aria-labelledby</code> attribute whose value is the id of the modal&rsquo;s heading</li>
    </ul>
    <p>Expected keyboard interactions:</p>
    <ul>
      <li>Esc key closes the modal and moves focus to whatever triggered the modal to open</li>
      <li>Tab key at bottom of modal cycles focus back to first focusable element at top of modal</li>
      <li>Shift+Tab keys at top of modal cycle focus back to last focusable element at bottom of modal</li>
      <li>Enter key submits modal&rsquo;s form data, if applicable</li>
    </ul>
  </ComponentDocs>
);
