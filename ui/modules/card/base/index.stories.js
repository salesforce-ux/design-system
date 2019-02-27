import React from 'react';
import { storiesOf } from '@storybook/react';
import CardExample, {
  states as CardStates,
  examples as CardExamples
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Modules/Card/Base', module).add('Base', () => (
  <CardExample />
));

CardStates.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CardStates, example.id)
  );
});

CardExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CardExamples, example.id)
  );
});
