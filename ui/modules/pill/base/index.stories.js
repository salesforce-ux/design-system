import { storiesOf } from '@storybook/react';
import * as PillExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Pill/Base', module).add('Base', () => PillExamples.default);

PillExamples.states.forEach(example => {
  storiesOf('Modules/Button/Base/States', module).add(example.label, () =>
    getDisplayElementById(PillExamples.states, example.id)
  );
});

PillExamples.examples.forEach(example => {
  storiesOf('Modules/Button/Base/Examples', module).add(example.label, () =>
    getDisplayElementById(PillExamples.examples, example.id)
  );
});
