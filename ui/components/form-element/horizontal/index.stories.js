import { storiesOf } from '@storybook/react';
import * as FormElementHorizontalExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Form Element/Horizontal', module).add(
  'Base',
  () => FormElementHorizontalExamples.default
);

FormElementHorizontalExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementHorizontalExamples.examples, example.id)
  );
});

FormElementHorizontalExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementHorizontalExamples.states, example.id)
  );
});
