import { storiesOf } from '@storybook/react';
import * as ButtonExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

console.log(ButtonExamples);

storiesOf('Modules/Button/Base', module).add(
  'Base',
  () => ButtonExamples.default
);

ButtonExamples.states.forEach(example => {
  storiesOf('Modules/Button/Base/States', module).add(example.label, () =>
    getDisplayElementById(ButtonExamples.states, example.id)
  );
});

ButtonExamples.examples.forEach(example => {
  storiesOf('Modules/Button/Base/Examples', module).add(example.label, () =>
    getDisplayElementById(ButtonExamples.examples, example.id)
  );
});
