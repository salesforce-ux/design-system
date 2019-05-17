import { storiesOf } from '@storybook/react';
import * as ButtonIconsBorderedFilledContainerExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Button Icons/Bordered Filled Container',
  module
).add('Base', () => ButtonIconsBorderedFilledContainerExamples.default);

ButtonIconsBorderedFilledContainerExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(
      ButtonIconsBorderedFilledContainerExamples.examples,
      example.id
    )
  );
});

ButtonIconsBorderedFilledContainerExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(
      ButtonIconsBorderedFilledContainerExamples.states,
      example.id
    )
  );
});
