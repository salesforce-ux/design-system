import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';
import withMDX from './addons/withMDX';

import './scss/ui/index.scss';

const req = require.context('../ui/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Global Decorators
// https://storybook.js.org/addons/introduction/#1-decorators
addDecorator(withMDX);
addDecorator(checkA11y);
addDecorator(
  withOptions({
    name: 'SLDS',
    url: 'http://www.lightningdesignsystem.com'
  })
);

configure(loadStories, module);
