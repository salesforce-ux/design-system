import { storiesOf } from '@storybook/react';
import * as InputExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

storiesOf('Components/Input', module).add('Kitchen Sink', () => [
  InputExamples.default,
  InputExamples.examples.map(example =>
    getDisplayElementById(InputExamples.examples, example.id)
  ),
  InputExamples.states.map(example =>
    getDisplayElementById(InputExamples.states, example.id)
  )
]);

const stories = storiesOf('Components/Input/Base', module).add(
  'Base',
  () => InputExamples.default
);

InputExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InputExamples.examples, example.id)
  );
});

InputExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InputExamples.states, example.id)
  );
});
