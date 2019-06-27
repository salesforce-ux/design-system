import { storiesOf } from '@storybook/react';
import * as ButtonIconsBorderedInverse from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Button Icons/Bordered Inverse',
  module
).add('Base', () => ButtonIconsBorderedInverse.default);

ButtonIconsBorderedInverse.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsBorderedInverse.examples, example.id)
  );
});

ButtonIconsBorderedInverse.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsBorderedInverse.states, example.id)
  );
});
