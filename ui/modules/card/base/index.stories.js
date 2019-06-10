import { storiesOf } from '@storybook/react';
import * as CardExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Card/Base', module).add('Base', () => CardExamples.default);

CardExamples.states.forEach(example => {
  storiesOf('Modules/Card/Base/States', module).add(example.label, () =>
    getDisplayElementById(CardExamples.states, example.id)
  );
});

CardExamples.examples.forEach(example => {
  storiesOf('Modules/Card/Base/Examples', module).add(example.label, () =>
    getDisplayElementById(CardExamples.examples, example.id)
  );
});
