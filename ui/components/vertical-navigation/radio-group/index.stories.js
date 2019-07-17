import { storiesOf } from '@storybook/react';
import * as RadioGroupExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Vertical Navigation/Radio Group',
  module
).add('Base', () => RadioGroupExamples.default);

RadioGroupExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(RadioGroupExamples.examples, example.id)
  );
});
