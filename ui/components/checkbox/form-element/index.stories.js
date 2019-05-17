import { storiesOf } from '@storybook/react';
import * as CheckboxFormElementExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Checkbox/Form Element', module).add(
  'Base',
  () => CheckboxFormElementExamples.default
);

CheckboxFormElementExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxFormElementExamples.examples, example.id)
  );
});

CheckboxFormElementExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxFormElementExamples.states, example.id)
  );
});
