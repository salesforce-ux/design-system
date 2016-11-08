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

export const intro = (
  <p className="site-text-introduction">
    Images are used to provide a visual representation of context. When an avatar isn&rsquo;t available for an object, the object icon will always be displayed in it&rsquo;s place.
  </p>
);

export default (
  <ComponentDocs>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Every <code>&lt;img&gt;</code> you add to your site needs to have an <code>alt</code> attribute. If the image is informational, set the <code>alt</code> equal to a descriptive alternative for that image. If the image is decorative or redundant to adjacent text, set <code>alt=""</code>, which conveys to assistive technology users that the image isn&rsquo;t necessary for understanding the page. Avoid using generic strings like <strong>photo</strong>, <strong>image</strong>, or <strong>icon</strong> as alt values, as they don&rsquo;t communicate valuable content to the user.</p>
  </ComponentDocs>
);
