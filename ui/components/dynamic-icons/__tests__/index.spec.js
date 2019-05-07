/* eslint-env jest */
import React from 'react';

import TypingIcon from '../typing';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Typing icon', () => {
  it('renders a typing icon', () =>
    matchesMarkup(
      <TypingIcon assistiveText="User typing" title="User typing" />
    ));

  it('renders an animated typing icon', () =>
    matchesMarkup(
      <TypingIcon assistiveText="User typing" isAnimated title="User typing" />
    ));

  it('renders a paused animated typing icon', () =>
    matchesMarkup(
      <TypingIcon
        assistiveText="User typing"
        isAnimated
        isPaused
        title="User typing"
      />
    ));
});
