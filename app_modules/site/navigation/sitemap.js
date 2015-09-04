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
    this.route('data-entry');
    this.route('displaying-data');
    this.route('layout');
    this.route('loading');
    this.route('navigation');
    this.route('messaging');
    this.route('motion');
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
