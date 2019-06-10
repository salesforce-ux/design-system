import { storiesOf } from '@storybook/react';
import * as ButtonGroupExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Button Group/Base', module).add(
  'Default',
  () => ButtonGroupExamples.default
);

ButtonGroupExamples.states.forEach(states => {
  storiesOf('Modules/Button Group/Base/States', module).add(states.label, () =>
    getDisplayElementById(ButtonGroupExamples.states, states.id)
  );
});

ButtonGroupExamples.examples.forEach(examples => {
  storiesOf('Modules/Button Group/Base/Examples', module).add(
    examples.label,
    () => getDisplayElementById(ButtonGroupExamples.examples, examples.id)
  );
});
