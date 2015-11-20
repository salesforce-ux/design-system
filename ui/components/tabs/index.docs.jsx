/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ComponentDocs = require('app_modules/site/components/page/component/docs');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const CodeClass = require('app_modules/site/components/code-class');

module.exports = (
  <ComponentDocs>
    <p className="site-text-introduction">A tab keeps related content in a single container that is shown and hidden through navigation.</p>
    <p>Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets.</p>
    <h4 className="site-text-heading--label">Javascript Needs</h4>
    <p>The active tab has two markup requirements:</p>
    <ul>
      <li>The <CodeClass className="active"/> class should be placed on the <code>li</code> with <CodeClass className="tabs__item"/>.</li>
      <li>The corresponding <CodeClass className="tabs__content"/> container receives <CodeClass className="show"/>.</li>
    </ul>
    <p>Inactive <CodeClass className="tabs__content"/> containers receive <CodeClass className="hide"/>. When the user clicks a different tab, move the <CodeClass className="active"/> class and toggle the <CodeClass className="hide"/>/<CodeClass className="show"/> classes.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Tabbed UIs have three parts with specific <strong>ARIA</strong> role requirements:</p>
    <ul>
      <li>The tab list, which should have <code>role="tablist"</code></li>
      <li>The tabs in that list, which should each be an <code>&lt;a role="tab"&gt;</code> anchor wrapped in a <code>&lt;li role="presentation"&gt;</code> list item</li>
      <li>The tab panels, which display each tab&rsquo;s content and should each have <code>role="tabpanel"</code></li>
    </ul>
    <p>Expected markup:</p>
    <ul>
      <li>Selected tab&rsquo;s anchor has <code>aria-selected="true"</code>, all other tabs&rsquo; anchors have <code>aria-selected="false"</code></li>
      <li>Selected tab&rsquo;s anchor has <code>tabindex="0"</code>, all other tabs have <code>tabindex="-1"</code></li>
      <li>Each tab panel has an <code>aria-labelledby</code> attribute whose value is the id of its associated <code>&lt;a role="tab"&gt;</code></li>
    </ul>
    <p>Expected keyboard interactions:</p>
    <ul>
      <li>Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab</li>
      <li>Tab key, when focus is before the tab list, moves focus to the selected tab</li>
      <li>Tab key, when focus is on selected tab, moves focus into the selected tab&rsquo;s associated tab panel or to the next focusable element on the page if that panel has no focusable elements</li>
      <li>Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab</li>
    </ul>
  </ComponentDocs>
);
