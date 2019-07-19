import { storiesOf } from '@storybook/react';
import * as PredefinedExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Color Picker/Predefined Only',
  module
).add('Base', () => PredefinedExamples.default);

PredefinedExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PredefinedExamples.states, example.id)
  );
});
