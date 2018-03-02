/* eslint-env jest */
import React from 'react';

import { TypingIcon } from '../typing/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Typing icon', () => {
  it('renders a typing icon', () =>
    matchesMarkupAndStyle(
      <TypingIcon title="User typing" assistiveText="User typing" />
    ));

  xit('renders an animated typing icon', () =>
    matchesMarkupAndStyle(
      <TypingIcon isAnimated title="User typing" assistiveText="User typing" />
    ));

  it('renders a paused animated typing icon', () =>
    matchesMarkupAndStyle(
      <TypingIcon
        isAnimated
        isPaused
        title="User typing"
        assistiveText="User typing"
      />
    ));
});
