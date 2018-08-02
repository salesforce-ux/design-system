/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  TabsScoped,
  TabsOverflowing,
  TabsMedium,
  TabsLarge
} from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Scoped Tabs', () => {
  it('render scoped tabs', () => matchesMarkup(<TabsScoped />));
  it('render scoped tabs with overflowing items', () =>
    matchesMarkup(<TabsOverflowing />));
  it('renders medium sized scoped tabs', () => matchesMarkup(<TabsMedium />));
  it('render large sized scoped tabs', () => matchesMarkup(<TabsLarge />));
});
