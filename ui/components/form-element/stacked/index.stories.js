import { storiesOf } from '@storybook/react';
import * as FormElementStackedExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Form Element/Stacked', module).add(
  'Base',
  () => FormElementStackedExamples.default
);

FormElementStackedExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementStackedExamples.examples, example.id)
  );
});

FormElementStackedExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementStackedExamples.states, example.id)
  );
});
