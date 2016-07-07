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

export const intro = (
  <p className="site-text-introduction">
    Lookup is an advanced inline search form.
  </p>
);

export default (
  <ComponentDocs>
    <p>The lookup can parse through single or multi scoped datasets. The parsed dataset can be filtered by single or multi option selects.</p>
    <p>You can find the lookup component throughout most data fields that allow inline inputs. Most commonly used on <strong>record home</strong> and <strong>object home</strong>.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Lookups allow the user to have dual keyboard focus: while focus in the input search field, the user can type text into the field and simultaneously use arrow keys to navigate up and down the results list. Use the appropriate <strong>ARIA</strong> attributes in your markup in order to effectively communicate the relationship between the input field and the results list to users of assistive technology.</p>
    <p>Expected markup:</p>
    <ul>
      <li>Input field has attributes <code>role="combobox"</code>, <code>aria-autocomplete="list"</code></li>
      <li>Input field has an <code>aria-expanded</code> attribute whose value is <code>false</code> when the results list is hidden, <code>true</code> when the results list is visible</li>
      <li>Input field has an <code>aria-activedescendant</code> attribute whose value is the id of the highlighted results list option, no value if nothing&rsquo;s highlighted in the list</li>
      <li>Results list is an <code>&lt;ul role="presentation"&gt;</code>, where each item is containing an <code>&lt;a href="javascript:void(0);" role="option"&gt;</code></li>
    </ul>
    <p>Expected keyboard interactions:</p>
    <ul>
      <li>Character keys filter the list</li>
      <li>Up and down arrow keys cycle through the available options in the list and update the input field&rsquo;s <code>aria-activedescendant</code> value</li>
      <li>Enter key selects highlighted option and collapses the results list</li>
      <li>Escape key collapses the results list</li>
    </ul>
  </ComponentDocs>
);
