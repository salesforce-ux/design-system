import { storiesOf } from '@storybook/react';
import * as ButtonExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button/Base', module).add(
  'Base',
  () => ButtonExamples.default
);

ButtonExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonExamples.examples, example.id)
  );
});

ButtonExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonExamples.states, example.id)
  );
});
