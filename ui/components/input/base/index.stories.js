import { storiesOf } from '@storybook/react';
import * as InputExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Input/Base', module).add(
  'Base',
  () => InputExamples.default
);

InputExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InputExamples.examples, example.id)
  );
});

InputExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InputExamples.states, example.id)
  );
});
