import { storiesOf } from '@storybook/react';
import * as Examples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Accordion/Base', module).add('Base', () => Examples.default);

Examples.examples.forEach(example => {
  storiesOf('Modules/Accordion/Base', module).add(example.label, () =>
    getDisplayElementById(Examples.examples, example.id)
  );
});

Examples.states.forEach(example => {
  storiesOf('Modules/Accordion/Base', module).add(example.label, () =>
    getDisplayElementById(Examples.states, example.id)
  );
});
