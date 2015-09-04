/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageDemo from 'app_modules/site/components/page/demo';

class MyDemo extends PageDemo {

  renderAnchorHeading() {
    return super.renderAnchorHeading(
      'My Page Heading'
    );
  }

  getNavItems() {
    /**
     * Option A: Overwrite the nav items
     */
    return [
      { url: '/demos/template', label: 'My Nav Item' }
    ];

    /**
     * Option B: Append / modify the default nav items
     */

    // return super.getNavItems().concat([
    //   { url: '/custom', label: 'My Nav Item' }
    // ]);

    /**
     * Option C: Remove this method and use the default nav items
     */
  }

  renderSidebar() {
    /**
     * Option A: Overwrite just the content with a string
     */
    return super.renderSidebar(
      'My Sidebar'
    );

    /**
     * Option B: Overwrite just the content markup
     */
    // return super.renderSidebar(
    //   <span>My Sidebar</span>
    // );

    /**
     * Option C: Overwrite the markup
     */

    // return (
    //   <div>My Custom Sidebar</div>
    // );

    /**
     * Option D: Remove the sidebar
     */

    // return null;

    /**
     * Option E: Remove this method and use the default sidebar
     */
  }

}

export default (
  <MyDemo>
    Test
  </MyDemo>
);
