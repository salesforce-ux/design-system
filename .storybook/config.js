import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { initializeRTL } from 'storybook-addon-rtl';

import loadStories, { mobileStories } from './stories';
import sldsTheme from './sldsTheme';

import './scss/ui/index.scss'; // Our custom Storybook presentation styles
import '../ui/index.scss'; // SLDS stylesheet
import '../ui/touch.scss'; // SLDS touch stylesheet (with media/feature query)
import '../ui/touch-demo.scss'; // SLDS touch stylesheet for documentation site (without media/feature query)

initializeRTL();

// Global Decorators
// https://storybook.js.org/addons/introduction/#1-decorators
addDecorator(withA11y);
addParameters({
  options: {
    theme: sldsTheme
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'shaded', value: '#f3f2f2' },
    { name: 'inverse', value: '#16325c' }
  ]
});

// decide which stories to load based on environment variable value
let whatToLoad = loadStories;

switch (process.env.STORYBOOK_STORIES_TYPE) {
  case 'mobile':
    whatToLoad = mobileStories;
    break;
}

configure(whatToLoad, module);
