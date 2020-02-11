import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import sldsTheme from '../shared/storybook/sldsTheme';

import '../ui/index.scss'; // load slds css
import '../shared/storybook/scss/ui/index.scss'; // Our custom Storybook presentation styles
import '../shared/styles/doc.scss'; // docs styles

const req = require.context(
  '../ui/modules',
  true,
  /^(?!.*__fixtures__).*\/.*\.stories\.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Global Decorators
// https://storybook.js.org/addons/introduction/#1-decorators
addDecorator(withA11y);
addParameters({
  options: {
    theme: sldsTheme,
    showPanel: false
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'shaded', value: '#f3f2f2' },
    { name: 'inverse', value: '#16325c' }
  ]
});

configure(loadStories, module);
