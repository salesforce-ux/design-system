// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* global jasmine */
/* eslint-env jest */

const childProcess = require('child_process');
const express = require('express');
const { html: htmlBeautify } = require('js-beautify');
const path = require('path');
const openport = require('openport');
const puppeteer = require('puppeteer');
const React = require('react');
const ReactDOM = require('react-dom/server');
const { assertMatchesDOM } = require('@salesforce-ux/instant-vrt/matcher');

const beautify = html =>
  htmlBeautify(html, {
    indent_size: 2,
    indent_char: ' ',
    unformatted: ['a'],
    'wrap_line_length ': 78,
    indent_inner_html: true
  });

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

module.exports = (dirname, port) => {
  jasmine.getEnv().addReporter({
    specStarted: function(result) {
      CURRENT_TEST_NAME = result.fullName;
    }
  });

  beforeAll(async () => {
    // Server gets started before each suite and then closed afterwards
    // This needs to be here so that matchesMarkupAndStyle() will work even when
    // not using the watcher
    port =
      port ||
      (await new Promise((resolve, reject) => {
        openport.find(function(err, port) {
          err ? reject(err) : resolve(port);
        });
      }));
    console.log('running on port', port);
    server = await new Promise(resolve => {
      const server = app.listen(port, () => {
        resolve(server);
      });
    });
    browser = await puppeteer.launch();
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
      await page.evaluate(
        `document.body.innerHTML = \`${ReactDOM.renderToStaticMarkup(
          element
        )}\``
      );
      await delay(250);
      const markupAndStyle = await page
        .evaluate(getMarkupAndStyle('body > *'))
        .then(diff => ({ html: beautify(diff.html), style: diff.style }));
      assertMatchesDOM(dirname, CURRENT_TEST_NAME, markupAndStyle);
    }
  };
};
