// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* global jasmine */
/* eslint-env jest */

import { assertMatchesDOM } from '@salesforce-ux/instant-vrt/matcher';
import childProcess from 'child_process';
import express from 'express';
import openport from 'openport';
import path from 'path';
import puppeteer from 'puppeteer';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { beautify } from './shared/utils/beautify';
import { renderWithBetterError } from './shared/utils/react';

const getMarkupAndStyle = selector => `
  (function() {
    const el = document.querySelector("${selector}")
    const kids = Array.from(el.querySelectorAll('*'))
    const extractCSS = el => getComputedStyle(el).cssText;
    return {
      html: el.outerHTML,
      style: [extractCSS(el)].concat(kids.map(extractCSS))
    }
  })()
  `;

const delay = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!doctype>
    <html>
      <head>
        <link type="text/css" rel="stylesheet" href="/assets/styles/index.css" />
      </head>
      <body></body>
    </html>
  `);
});
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

let server;
let browser;
let page;
let CURRENT_TEST_NAME;

export default (dirname, port) => {
  jasmine.getEnv().addReporter({
    specStarted: function(result) {
      CURRENT_TEST_NAME = result.fullName;
    }
  });

  const getPort = () =>
    new Promise((resolve, reject) => {
      openport.find(function(err, port) {
        err ? reject(err) : resolve(port);
      });
    });

  const startServer = p =>
    new Promise((resolve, reject) => {
      const server = app.listen(p, () => resolve(server)).on('error', reject);
    });

  beforeAll(async () => {
    // Server gets started before each suite and then closed afterwards
    // This needs to be here so that matchesMarkupAndStyle() will work even when
    // not using the watcher
    port = port || (await getPort());
    console.log('running on port', port);
    try {
      server = await startServer(port);
    } catch (e) {
      console.log('failed to start server', e);
      port = await getPort();
      console.log('trying new port', port);
      server = await startServer(port); // only try twice
    }
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    page = await browser.newPage();
    await page.emulate({
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
      viewport: {
        width: 1280,
        height: 800,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
      }
    });
    await page.goto(`http://localhost:${port}`);
  });

  afterAll(async () => {
    browser.close();
    await new Promise(resolve => {
      server.close(() => resolve());
    });
  });

  return {
    matchesMarkupAndStyle: async element => {
      const renderedMarkup =
        typeof element === 'string'
          ? element
          : renderWithBetterError(ReactDOM)(
              element,
              `${CURRENT_TEST_NAME} failed on ${element}`
            );
      await page.evaluate(`document.body.innerHTML = \`${renderedMarkup}\``);
      await delay(750);
      const markupAndStyle = await page
        .evaluate(getMarkupAndStyle('body > *'))
        .then(diff => ({ html: beautify(renderedMarkup), style: diff.style }));
      assertMatchesDOM(dirname, CURRENT_TEST_NAME, markupAndStyle);
    }
  };
};
