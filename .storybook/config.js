import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { initializeRTL } from 'storybook-addon-rtl';

import loadStories from './stories';
import sldsTheme from './sldsTheme';

import '../ui/index.scss'; // load slds css
import '../ui/touch.scss'; // load touch stylesheet
import './scss/ui/index.scss'; // Our custom Storybook presentation styles
import '../shared/styles/doc.scss'; // docs styles

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

configure(loadStories, module);
