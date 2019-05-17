import { storiesOf } from '@storybook/react';
import * as FormElementExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Form Element/Base', module).add(
  'Base',
  () => FormElementExamples.default
);

FormElementExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementExamples.examples, example.id)
  );
});

FormElementExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementExamples.states, example.id)
  );
});
