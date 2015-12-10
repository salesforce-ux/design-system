/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import Sticky from 'app_modules/site/components/sticky';
import CodeBlock from 'app_modules/ui/code-block';
import version from '.generated/site.version';
import { prefix as pf } from 'app_modules/ui/util/component';

import { Link } from 'react-router';
import globals from 'app_modules/global';
const moduleName = globals.moduleName;

const links = {
  zip: {
    gettingStarted: '/assets/downloads/getting-started/getting-started-node-js.zip'
  }
};

export default (
  <PageBody anchorTitle="Local development with Node.js" contentClassName={pf('grid wrap')}>
    <Sticky className={pf('site-sidebar-content col size--1-of-1 large-size--2-of-6 large-order--2')}>
      <div className={pf('site-menu--jump-links')}>
        <h3 className="site-text-heading--label">Steps</h3>
        <ul className={pf('list--vertical has-block-links')}>
          <li><a href="#step-1">Install NodeJS</a></li>
          <li><a href="#step-2">Download "Getting Started" Files</a></li>
          <li><a href="#step-3">Download the {globals.displayName}</a></li>
          <li><a href="#step-4">Serve an Example Page</a></li>
        </ul>
      </div>
    </Sticky>

    <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
      <div className={pf('container--large')}>

        <p className="site-text-introduction">The following tutorial will set you up with the tools you need to work with the {globals.displayName} in your local development environment.</p>

        <p>By the end of this tutorial, you will be able to view a page styled with the
        {globals.displayName} in your browser.</p>

        <p>In this tutorial, we&rsquo;ll assume that you have a directory referred to
        as <code>DEV_DIRECTORY</code> where you do all your work.</p>

        <h2 id="step-1" className="site-text-heading--large">Step 1: Install NodeJS</h2>

        <p>Download and install <a href="https://nodejs.org/">NodeJS</a>.</p>

        <h2 id="step-2" className="site-text-heading--large">Step 2: Download "Getting Started" Files</h2>

        <p>Download the <a href={links.zip.gettingStarted}>getting started files</a> zip file
        and extract the contents to your <code>DEV_DIRECTORY</code>.</p>

        <p>You should now have a folder called <code>getting-started-node-js</code></p>

        <h2 id="step-3" className="site-text-heading--large">Step 3: Download the {globals.displayName}</h2>

        <p>Download the <Link to="/resources/downloads">Design System</Link> zip file
          and extract the contents to your <code>DEV_DIRECTORY</code>.</p>

        <p>You should now have a folder called <code>{moduleName}-{version.sldsVersion}</code></p>

        <p>Once you have unzipped the CSS framework, you need to move a few things into the correct location :</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
# Replace "DEV_DIRECTORY" with your path
cd DEV_DIRECTORY

# Copy ${globals.abbreviatedName} into the Node tutorial
cp -R ${moduleName}-${version.sldsVersion} getting-started-node-js/salesforce-design-system
# Copy ${globals.abbreviatedName} assets over too
cp -R ${moduleName}-${version.sldsVersion}/assets getting-started-node-js/www
        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>
        <p>You should now have a directory structure like this:</p>

        <ul>
          <li>
            <code>getting-started-node-js/</code>
            <ul>
              <li><code>salesforce-design-system-vXXX/</code></li>
              <li>
                <code>www/</code>
                  <ul>
                    <li>
                      <code>assets/</code>
                        <ul>
                          <li><code>fonts/</code></li>
                          <li><code>icons/</code></li>
                          <li><code>images/</code></li>
                          <li><code>styles/</code></li>
                        </ul>
                    </li>
                  </ul>
              </li>
              <li><code>package.json</code></li>
              <li><code>server.js</code></li>
              <li><code>styles.scss</code></li>
              <li><code>styles.js</code></li>
            </ul>
          </li>
        </ul>

        <p><strong>Note:</strong> This is a temporary solution until the {globals.displayName} is available as an npm module.</p>

        <h2 id="step-4" className="site-text-heading--large">Step 4: Serve an Example Page</h2>

        <p>Now you are ready to view a sample page styled using the {globals.displayName}.</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
# Replace "DEV_DIRECTORY" with your path
cd DEV_DIRECTORY/getting-started-node-js
npm install && npm start
        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>
        <p>You should see the following message on your console:</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="javascript">{`
Express: listening on 5000
        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>
        <p>Open a new window in your browser and enter <a href="http://localhost:5000">http://localhost:5000</a> in the address bar.</p>

        <p>A sample page using the {globals.displayName} should be displayed!</p>
      </div>
    </div>
  </PageBody>
);
