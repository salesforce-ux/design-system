import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';

const req = require.context('../ui/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Global Decorators
// https://storybook.js.org/addons/introduction/#1-decorators
addDecorator(withA11y);
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'SLDS',
      brandUrl: 'http://www.lightningdesignsystem.com'
    })
  }
});

configure(loadStories, module);
