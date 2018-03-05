// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import puppeteer from 'puppeteer';
import { argv } from 'yargs';

import { watch } from './gulpfile';

// Needed for Jest workers
process.env.JEST_UPDATE_SNAPSHOTS = argv.u === true;

const startServer = port =>
  new Promise((resolve, reject) => {
    const server = app
      .listen(port, () => {
        console.log(`server started on port ${port}`);
        resolve(server);
      })
      .on('error', reject);
  });

const delay = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

const createPage = async () => {
  const page = await browser.newPage();
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
  await page.goto(`http://localhost:12345`);
  return page;
};

const getMarkupAndStyle = selector => {
  const node = document.querySelector(selector);
  const nodes = Array.from(node.querySelectorAll('*'));
  const extractCSS = n => window.getComputedStyle(n).cssText;
  return {
    html: node.outerHTML,
    style: [extractCSS(node)].concat(nodes.map(extractCSS))
  };
};

const app = express();
const pages = [];

let server;
let browser;

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send(`
    <!doctype>
    <html>
      <head>
        <link type="text/css" rel="stylesheet" href="/assets/styles/index.css" />
        <style type="text/css"
      </head>
      <body></body>
    </html>
  `);
});

app.get('/api/jest/teardown', async (req, res) => {
  await Promise.all(pages.map(page => page.close()));
  await browser.close();
  await server.close();
  res.sendStatus(200);
});

app.post('/api/getMarkupAndStyle', bodyParser.text(), async (req, res) => {
  const page = pages.pop() || (await createPage());
  await page.evaluate(html => (document.body.innerHTML = html), req.body);
  await delay(200);
  const markupAndStyle = await page.evaluate(getMarkupAndStyle, 'body > *');
  res.json(markupAndStyle);
  pages.push(page);
});

// Jest can't handle exports.default
module.exports = async () => {
  server = await startServer(12345);
  browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  if (argv.watch) watch();
};
