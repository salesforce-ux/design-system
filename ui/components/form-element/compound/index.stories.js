import { storiesOf } from '@storybook/react';
import * as FormElementCompoundExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Form Element/Compound', module).add(
  'Base',
  () => FormElementCompoundExamples.default
);

FormElementCompoundExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementCompoundExamples.examples, example.id)
  );
});

FormElementCompoundExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementCompoundExamples.states, example.id)
  );
});
