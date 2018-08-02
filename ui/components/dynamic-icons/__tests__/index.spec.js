/* eslint-env jest */
import React from 'react';

import { TypingIcon } from '../typing/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Typing icon', () => {
  it('renders a typing icon', () =>
    matchesMarkup(
      <TypingIcon title="User typing" assistiveText="User typing" />
    ));

  xit('renders an animated typing icon', () =>
    matchesMarkup(
      <TypingIcon isAnimated title="User typing" assistiveText="User typing" />
    ));

  it('renders a paused animated typing icon', () =>
    matchesMarkup(
      <TypingIcon
        isAnimated
        isPaused
        title="User typing"
        assistiveText="User typing"
      />
    ));
});
