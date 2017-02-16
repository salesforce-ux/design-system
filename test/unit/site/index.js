// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import { expect } from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import cheerio from 'cheerio';

import page from 'site';

describe('site/', () => {

  const $ = cheerio.load(
    ReactDOMServer.renderToStaticMarkup(page)
  );

  it('should have a download button', () => {
    expect($('.site-cta-download').length).to.equal(1);
  });

  it('should have 2 "Learn More" buttons', () => {
    expect($('.slds-button').filter((index, element) => {
      if ($(element).text() === 'Learn More') {
        return true;
      } else {
        return false;
      }
    }).length).to.equal(2);
  });

  it('should have a navigation area', () => {
    expect($('.site-navigation').length).to.equal(1);
  });

  it('should have a numeric release number of form X.Y.Z', () => {
    const releaseNumberMarkup = $('.site-releasenumber');
    const releaseNumberRaw = releaseNumberMarkup.last().text();
    expect(releaseNumberMarkup).to.have.length(1);
    expect(releaseNumberRaw).to.match(/\d+\.\d+\.\d+/);
  });

});
