import { storiesOf } from '@storybook/react';
import * as ButtonDualStatefulExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button/Dual Stateful', module).add(
  'Base',
  () => ButtonDualStatefulExamples.default
);

ButtonDualStatefulExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonDualStatefulExamples.examples, example.id)
  );
});

ButtonDualStatefulExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonDualStatefulExamples.states, example.id)
  );
});
