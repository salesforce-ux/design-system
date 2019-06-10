import { storiesOf } from '@storybook/react';
import * as ButtonIconExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Button Icon/Base', module).add(
  'Default',
  () => ButtonIconExamples.default
);

ButtonIconExamples.states.forEach(example => {
  storiesOf('Modules/Button Icon/Base/States', module).add(example.label, () =>
    getDisplayElementById(ButtonIconExamples.states, example.id)
  );
});

ButtonIconExamples.examples.forEach(example => {
  storiesOf('Modules/Button Icon/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(ButtonIconExamples.examples, example.id)
  );
});
