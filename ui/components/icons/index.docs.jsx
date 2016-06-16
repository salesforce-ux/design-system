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
import CodeBlock from 'app_modules/ui/code-block';
import globals from 'app_modules/global';

export const intro = (
  <p className="site-text-introduction">
    Icons provide visual context and enhance usability.
    <br />
    Looking for the icons? Go to <a href="/icons/">Resources › Icons</a>.
  </p>
);

export default (
  <ComponentDocs>
    <p>Five separate SVG sprites are used to create icons — <a href="/icons/#action">action</a>, <a href="/icons/#custom">custom</a>, <a href="/icons/#doctype">doctype</a>, <a href="/icons/#standard">standard</a> and <a href="/icons/#utility">utility</a>. Link to the icon SVG sprite by targeting the icon&rsquo;s hash/ID value in the use href attribute. (You can find the values on the <a href="/icons/">icon page</a>.)</p>
    <p>When placing the icon code into your page, customize the path in the <code>use</code> attribute of the <code>svg</code> to the proper path and icon name for your specific icon. For example, the <i>case</i> icon in the <i>standard</i> sprite would have a path like this:</p>
    <CodeBlock language="markup">{`
    <svg aria-hidden="true" class="slds-icon">
      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case"></use>
    </svg>
  `}</CodeBlock>
    <p className={pf('m-top--small')}><strong>Note:</strong> If an icon has more than one word in the name, it should be included in the <code>use</code> attribute with the underscore separator as shown on the icon page. For example: log_a_call.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>If an icon has visible descriptive text, nothing more is required. If the icon has no descriptive text, add a <code>span</code> with the <CodeClass className="icon_container"/> class. Place both the <code>svg</code> with the base <CodeClass className="icon"/> class and the description for assistive screen readers inside a <code>span</code> with the <CodeClass className="assistive-text"/> class.</p>
    <p><strong>Note:</strong> You must include the SVG sprites to link to them. If you&rsquo;re using Visualforce, see <a href="/getting-started/visualforce">the Visualforce tutorial</a>. If you’re using <a href="/resources/lightning-svg-icon-component-helper">Lightning components, see tutorial</a>.</p>
    <p>You can access the SVG sprites by downloading the entire <a href="/downloads">CSS Framework or just the icons</a>. To include a sprite in your application, the recommended method is to place it into the page as the first element inside the <code>body</code> element. Alternatively, you can leave the sprite in the assets/icons directory and link to it from your page. To render a sprited icon, add the tiny <a href="https://github.com/jonathantneal/svg4everybody">SVG for Everybody</a> script for Internet Explorer.</p>
    <p>When placed into the <code>body</code>, the SVG sprite takes up space in the page. Use either <code>display:none</code> or <code>position:absolute</code> and set both the width and height to zero.</p>
    <div className={pf('site-code--content scrollable--x')}>
      <CodeBlock language="markup">{`
        <body>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="position:absolute">
            <symbol id="announcement" viewBox="0 0 24 24">
              <path d="M10.5 21l-.6-.5c-.7-.5-.7-1.4-.7-1.9v-1.3c0-.4-.3-.7-.7-.7H5.8c-.4 0-.7.3-.7.7v3.6c0 1.2.7 2.2 1.9 2.2h2.2c1.4 0 1.5-.9 1.5-.9s.2-.9-.2-1.2zM20.8 8.3V2c0-1.1-1.4-1.4-2.2-.7l-4.1 3.9c-.6.5-1.4.8-2.3.8h-7C2.8 6 .9 8.1.9 10.5v.1c0 2.4 1.9 4.2 4.3 4.2h7c.9 0 1.7.3 2.4.9l4 4c.8.7 2.2.4 2.2-.7v-6.3c1.4 0 2.2-.9 2.2-2.2 0-1.2-.8-2.2-2.2-2.2z" />
            </symbol>
            <!-- follow with the sprited list of svgs -->
          </svg>
          ...
      `}</CodeBlock>
    </div>
  </ComponentDocs>
);
