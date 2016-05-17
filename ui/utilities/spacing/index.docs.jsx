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

export default (
  <ComponentDocs>
    <p>
      Spacing indicates <code>margin</code> and <code>padding</code>. The base
      unit of all our spacing metrics is <strong>4</strong>.
    </p>

    <ul>
      <li>
        Most components already come with spacing included. These utility
        classes are for added convenience in laying out components.
      </li>

      <li>
        Classes prefixed by <CodeClass className="m-"/> are used for
        adding <strong>margins</strong>. Classes prefixed
        in <CodeClass className="p-"/> are used for adding <strong>padding</strong>.
      </li>

      <li>
        The directions available for the spacing classes
        are <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
      </li>

      <li>
        You can use the <code>vertical</code> shortcut for
        both <code>top</code> and <code>bottom</code>, <code>horizontal</code> for
        both <code>right</code> and <code>left</code>, and <code>around</code> for
        all sides.
      </li>

      <li>
        Use the <code>--xxx-small</code> through <code>--xx-large</code> scale
        to choose the size needed.
      </li>

      <li>
        Where <strong>vertical centering</strong> is required, check out
        our <a href="/components/utilities/media-objects/#center">centered media
        object</a> instead of applying extra <code>margin</code> or <code>padding</code>.
      </li>
    </ul>
  </ComponentDocs>
);
