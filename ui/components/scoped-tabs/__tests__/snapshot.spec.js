/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  TabsScoped,
  TabsOverflowing,
  TabsMedium,
  TabsLarge
} from '../base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Scoped Tabs', () => {
  it('render scoped tabs', () => matchesMarkupAndStyle(<TabsScoped />));
  it('render scoped tabs with overflowing items', () =>
    matchesMarkupAndStyle(<TabsOverflowing />));
  it('renders medium sized scoped tabs', () =>
    matchesMarkupAndStyle(<TabsMedium />));
  it('render large sized scoped tabs', () =>
    matchesMarkupAndStyle(<TabsLarge />));
});
