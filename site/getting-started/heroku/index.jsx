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
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
import { Link } from 'react-router';
import g from 'app_modules/global';

export default (
  <PageBody anchorTitle="Heroku" contentClassName={pf('grid wrap')}>
    <Sticky className={pf('site-sidebar-content col size--1-of-1 large-size--2-of-6 large-order--2')}>
      <div className={pf('site-menu--jump-links')}>
        <h3 className="site-text-heading--label">Steps</h3>
        <ul className={pf('list--vertical has-block-links')}>
          <li><a href="#step-1">1. Initialize your project</a></li>
          <li><a href="#step-2">2. Install node dependencies</a></li>
          <li><a href="#step-3">3. Create index.html</a></li>
          <li><a href="#step-4">4. Create server.js</a></li>
          <li><a href="#step-5">5. Download {g.displayName}</a></li>
          <li><a href="#step-6">6. Add components</a></li>
          <li><a href="#step-7">7. Deploy to Heroku</a></li>
        </ul>
      </div>
    </Sticky>

    <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
      <div className={pf('container--medium')}>

        <p className="site-text-introduction">
          The following tutorial will set you up with the tools you need to
          work with the {g.displayName} in your local development environment
          and deploy to Heroku.
        </p>
        <p>
          If you&rsquo;re interested in a more in-depth tutorial check
          out <strong><a href="https://github.com/ccoenraets/lightning-react-app" target="_blank">Christophe Coenraets&rsquo; GitHub project</a></strong>.
          His project is a reference application built with the
          {g.displayName}, React, Node, Postgres, and Heroku. For a
          static example, please continue with the steps below!
        </p>

        <p>In this tutorial, we&rsquo;ll assume that you have some knowledge of the following:</p>
        <ul className={pf('list--dotted')}>
          <li><a href="https://nodejs.org/" target="_blank">Node.js</a></li>
          <li><a href="https://www.npmjs.com/package/npm" target="_blank">NPM</a></li>
          <li><a href="https://git-scm.com/" target="_blank">Git</a></li>
          <li><a href="https://toolbelt.heroku.com/" target="_blank">Heroku</a></li>
        </ul>

        <div className="slds-box slds-box slds-theme--shade slds-theme--alert-texture slds-m-bottom--medium">
          <p>
            If, for any reason, you wish to bypass the steps to manually create this project, clone the basic setup <a href="https://github.com/salesforce-ux/demo_slds_heroku" target="_blank">here</a>. Once you clone the starter respository, <code>npm install</code>. Then, you can skip to <a href="#step-5">Step 5: Download {g.displayName}</a>.
          </p>
        </div>

        <h2 id="step-1" className="site-text-heading--large">Step 1: Initialize your project</h2>
        <p>Once you&rsquo;ve downloaded and installed all the necessaries for your environment, create a folder for your project.</p>

        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ mkdir demo_slds_heroku
$ cd demo_slds_heroku
          `}</CodeBlock>
        </div>

        <p>
          Inside of your <code>demo_slds_heroku/</code> folder create a <code>package.json</code>.
        </p>

        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ npm init
          `}</CodeBlock>
        </div>

        <p>
          You will get a few prompts. The only prompt that we will update here is the <code>entry point</code>. The new entry point will be <code>server.js</code> instead of <code>index.js</code>.
        </p>

        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
name:
version:
description:
entry point: (index.js) [server.js]
test command:
git repository:
keywords:
author:
license: (ISC)
          `}</CodeBlock>
        </div>

        <p>
          A <code>package.json</code> document will be created inside your <code>demo_slds_heroku/</code> folder and the contents should look similar to the following:
        </p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
{
  "name": "demo_slds_heroku",
  "version": "0.0.0",
  "description": "demo_slds_heroku",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
          `}</CodeBlock>
        </div>

        <h2 id="step-2" className="site-text-heading--large">Step 2: Install node dependencies - Express</h2>
        <p>Use NPM to install Express. While in your project folder, install express via NPM.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ npm install express --save
          `}</CodeBlock>
        </div>
        <p>You should now have a folder called <code>node_modules/express/</code></p>

        <h2 id="step-3" className="site-text-heading--large">Step 3: Create <code>public/index.html</code></h2>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ mkdir public
$ touch pubilc/index.html
          `}</CodeBlock>
        </div>
        <p>The contents of yout <code>public/index.html</code> file should be the following:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
<!DOCTYPE html>
<html>
  <head>
    <title>Playground</title>
  </head>
  <body>
    Kaixo!
  </body>
</html>
          `}</CodeBlock>
        </div>

        <h2 id="step-4" className="site-text-heading--large">Step 4: Create <code>server.js</code></h2>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ touch server.js
          `}</CodeBlock>
        </div>
        <p>The contents of yout <code>server.js</code> file should be the following:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
          `}</CodeBlock>
        </div>
        <p><strong>Sanity Checkpoint:</strong> Run <code>node server.js</code> in your terminal and your project will be served on <a href="http://localhost:8080/">http:&#47;&#47;localhost:8080&#47;</a>. You may also run <code>npm run start</code> as it will yield the same results.</p>
        <figure className={pf('large-size--2-of-2 order--1 large-order--2')}>
          <img className={pf('image tutorial-image')} src="/assets/images/tutorial/heroku/image1.png" alt="Sanity checkpoint of static text." />
        </figure>

        <h2 id="step-5" className="site-text-heading--large">Step 5: Download the {g.displayName}</h2>
        <p><a href="https://www.lightningdesignsystem.com/resources/downloads/">Download the {g.displayName} CSS framework</a></p>
        <p>Once you unzip the CSS framework, you need to move a few things into the correct location. Grab the <code>assets/</code> folder and put it in your <code>demo_slds_heroku/public/</code> folder. Your project should have a similar file structure to the following:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
demo_slds_heroku/
  public/
    assets/
      fonts/
      icons/
      images/
      styles/
    index.html
  node_modules/
    express/
  package.json
  server.js
          `}</CodeBlock>
        </div>

        <h2 id="step-6" className="site-text-heading--large">Step 6: Add components</h2>
        <p>Add {g.displayName} styles to your <code>public/index.html</code> page by adding the following underneath the <code>title</code> tags:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
        <link rel="stylesheet" type="text/css" href="/assets/styles/salesforce-lightning-design-system.css">
          `}</CodeBlock>
        </div>
        <p>Your <code>public/index.html</code> file should look similar to the following:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
<!DOCTYPE html>
<html>
  <head>
    <title>Playground</title>
    <link rel="stylesheet" type="text/css" href="/assets/styles/salesforce-lightning-design-system.css">
  </head>
  <body>
    Kaixo!
  </body>
</html>
          `}</CodeBlock>
        </div>
        <p><strong>Sanity Checkpoint:</strong> You will notice that when you refresh your localhost the font will change!</p>

        <h3 className="site-text-heading--medium">
          A. Use the Grid System Component (Order)
        </h3>
        <p>Replace the text inside the <code>body</code> tags with the following. You can find the markup on the <a href="http://www.lightningdesignsystem.com/components/grid-system#order" target="_blank">Grid System component page</a>.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
<div class="slds-grid slds-wrap">
  <nav class="slds-col slds-size--1-of-1">
    Page Header Component
  </nav>
  <main class="slds-col slds-size--1-of-2">
    Image
  </main>
  <aside class="slds-col slds-size--1-of-2">
    Tab Component
  </aside>
  <nav class="slds-col slds-size--1-of-1">
    Card Component
  </nav>
</div>
          `}</CodeBlock>
        </div>
        <p>Your <code>public/index.html</code> file should look like the following:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
<!DOCTYPE html>
<html>
  <head>
    <title>Playground</title>
    <link rel="stylesheet" type="text/css" href="/assets/styles/salesforce-lightning-design-system.css">
  </head>
  <body>

    <div class="slds-grid slds-wrap">
      <nav class="slds-col slds-size--1-of-1">
        Page Header Component
      </nav>
      <main class="slds-col slds-size--1-of-2">
        Image
      </main>
      <aside class="slds-col slds-size--1-of-2">
        Tab Component
      </aside>
      <nav class="slds-col slds-size--1-of-1">
        Card Component
      </nav>
    </div>

  </body>
</html>
          `}</CodeBlock>
          </div>
        <figure className={pf('large-size--2-of-2 order--1 large-order--2')}>
          <img className={pf('image tutorial-image')} src="/assets/images/tutorial/heroku/image2.png" alt="Static page with grid system" />
        </figure>

        <h3 className="site-text-heading--medium">
          B. Use the Page Header Component (Record-Home)
        </h3>
        <p>Swap the text <strong>Page Header Component</strong> with the markup from the example on the <a href="https://www.lightningdesignsystem.com/components/page-headers#record-home" target="_blank">Page Header component page</a>.</p>

        <h3 className="site-text-heading--medium">C. Add a Fun Image</h3>
        <p>Swap the text <code>Image</code> with an image.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
<img src="http://www.lightningdesignsystem.com/assets/images/tutorial/heroku/house.jpg" alt="Cool house.">
// or
<img src="http://fakeimg.pl/700x400/?text=Wicked Cool Image Here">
          `}</CodeBlock>
        </div>

        <h3 className="site-text-heading--medium">D. Use the Tabs Component</h3>
        <p>Swap the text <code>Tab Component</code> with the markup from the example on the <a href="http://www.lightningdesignsystem.com/components/tabs#default" target="_blank">Tabs component page</a></p>

        <h3 className="site-text-heading--medium">E. Use the Activity Timeline Component</h3>
        <p>Swap the <code>H2</code> tags and its contents <code>Item One Content</code> with the markup from the example on the <a href="http://www.lightningdesignsystem.com/components/activity-timeline#base" target="_blank">Activity Timeline component page</a>.</p>

        <h3 className="site-text-heading--medium">F. Use the Card Component (Base)</h3>
        <p>Swap the text <code>Card Component</code> with the markup from the example on the <a href="http://www.lightningdesignsystem.com/components/cards#base" target="_blank">Card component page</a>.</p>

        <h3 className="site-text-heading--medium">G. Things are looking kind of squashed!</h3>
        <p>If you feel kind of cramped, check out the <a href="http://www.lightningdesignsystem.com/components/utilities/spacing">Utilities</a> page for spacing classes.</p>
        <figure className={pf('large-size--2-of-2 order--1 large-order--2')}>
          <img className={pf('image tutorial-image')} src="/assets/images/tutorial/heroku/image8.png" alt="Static page header, image, tabs, activity timeline, and card components." />
        </figure>

        <h2 id="step-7" className="site-text-heading--large">Step 7: Deploy to Heroku</h2>
        <p>Lets create a Heroku `Procfile` file. In the root of your <code>demo_slds_heroku/</code> project make a <code>Procfile</code> file.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ touch Procfile
          `}</CodeBlock>
        </div>
        <p>The contents of your <code>Procfile</code> file (yes, no filetype!) should be the following:</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
web: node server.js
          `}</CodeBlock>
        </div>
        <p>Log into your Heroku account.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
        $ heroku login
Email: [your@email.com]
Password: [typing will be hidden]

$ git init
$ heroku create [name-of-your-project]
          `}</CodeBlock>
        </div>
        <p>You should see the following information in your console.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
        Creating [name-of-your-project]... done, stack is cedar-14
        https://[name-of-your-project].herokuapp.com/ | https://git.heroku.com/[name-of-your-project]git
          `}</CodeBlock>
        </div>
        <p><strong>Sanity Checkpoint:</strong> Run <code>git remote -v</code> in your terminal to check that the <code>heroku</code> remote was added.</p>
        <p>Commit and push to Heroku.</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ git add .
$ git commit -m "Init"
$ git push heroku master
          `}</CodeBlock>
        </div>
        <p>Check out your project!</p>
        <div className={pf('site-code--content scrollable--x')}>
          <CodeBlock language="bash">{`
$ heroku open
          `}</CodeBlock>
        </div>

        <h2 id="step-8" className="site-text-heading--large">Congrats! You now have a static  application!</h2>
        <p>Now that you have a static project using the {g.displayName} and Heroku you can use it with any framework, add a database to it, whatever! The world is your oyster!</p>
      </div>
    </div>
  </PageBody>
);
