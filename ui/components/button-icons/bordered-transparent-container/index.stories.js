import { storiesOf } from '@storybook/react';
import * as ButtonIconsBorderedTransparentContainerExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Button Icons/Bordered Transparent Container',
  module
).add('Base', () => ButtonIconsBorderedTransparentContainerExamples.default);

ButtonIconsBorderedTransparentContainerExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(
      ButtonIconsBorderedTransparentContainerExamples.examples,
      example.id
    )
  );
});

ButtonIconsBorderedTransparentContainerExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(
      ButtonIconsBorderedTransparentContainerExamples.states,
      example.id
    )
  );
});
