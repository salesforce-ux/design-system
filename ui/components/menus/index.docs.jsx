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
    A Menu offers a list of actions or functions that a user can access.
  </p>
);

export default (
  <ComponentDocs>
    <p>The unordered menu list with <code>[role="menu"]</code> should be contained in a <code>&lt;div&gt;</code> with the class <CodeClass className="dropdown"/>. The exception to this is the <strong>Action Overflow for Touch</strong>, which not a dropdown menu.</p>

    <p>Since we are triggering the dropdown through CSS, the menu will show on hover. The target HTML element and dropdown need to be wrapped in the class <CodeClass className="dropdown-trigger"/>.</p>

    <p>By default, dropdown menus do not display a nubbin (the little cute triangle pointing at your target). If you want to apply one, you can add the class that defines the nubbin position and <CodeClass className="nubbin--top"/> to the <CodeClass className="dropdown"/> HTML element.</p>
    <p>See the <a href="#overview">Component Overview</a> table for further nubbin support.</p>

    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>The main thing that distinguishes menus from other popover blocks is keyboard navigation: elsewhere, users press the Tab key to navigate through actionable items, but in a menu, users press the arrow keys to navigate.</p>

    <p>Expected markup:</p>
    <ul>
      <li>Menu trigger is a focusable element (<code>&lt;a&gt;</code> or <code>&lt;button&gt;</code>) with <code>aria-haspopup="true"</code></li>
      <li>Menu has <code>role="menu"</code> and an <code>aria-labelledby</code> attribute whose value is the id of the menu trigger</li>
      <li>Menu items have <code>role="menuitem"</code>, <code>role="menuitemcheckbox"</code>, or <code>role="menuitemradio"</code></li>
    </ul>

    <p>Expected keyboard interactions:</p>
    <ul>
      <li>Arrow keys cycle focus through menu items (you should use JS to disable focus for any disabled items)</li>
      <li>Tab key closes menu and moves focus to the next focusable element on the page</li>
      <li>Esc key closes menu and moves focus back to the menu trigger</li>
      <li>Any character key moves focus to the next menu item that starts with that character, if applicable</li>
    </ul>

  </ComponentDocs>
);
