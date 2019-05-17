import { storiesOf } from '@storybook/react';
import * as CheckboxExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Checkbox/Base', module).add(
  'Base',
  () => CheckboxExamples.default
);

CheckboxExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxExamples.examples, example.id)
  );
});

CheckboxExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxExamples.states, example.id)
  );
});
