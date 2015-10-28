/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import ui from '.generated/ui';
import { Router as SitemapRouter } from './sitemap-utils';

export default new SitemapRouter().map(function () {

  this.route('home', { path: '/' });

  this.resource('getting-started', function () {
    this.route('visualforce');
    this.route('lightning');
    this.route('heroku');
    this.route('getting-started-node-js');
  });

  this.resource('design', function () {
    this.route('overview');
    this.route('color');
    this.route('data-entry');
    this.route('displaying-data');
    this.route('layout');
    this.route('loading');
    this.route('navigation');
    this.route('messaging');
    this.route('motion');
    this.route('typography');
  });

  this.resource('components', function () {
    _.find(ui, { id: 'components' }).components.forEach(component => {
      this.route(component.id, {
        component
      });
    });
    this.resource('utilities', function () {
      _.find(ui, { id: 'utilities' }).components.forEach(component => {
        this.route(component.id, {
          component
        });
      });
    });
  });

  this.resource('resources', function () {
    this.route('downloads');
    this.route('icons');
    this.route('tokens');
    this.route('links');
    this.route('branding');
    this.route('lightning-svg-icon-component-helper');
  });

  this.resource('native', function () {
    this.route('ios');
    this.route('android');
  });

  this.route('faq');
  this.route('voice-and-tone');
  this.route('release-notes');
  this.route('examples');

});
