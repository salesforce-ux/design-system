import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonExample, {
  examples as ButtonExamples,
  states as ButtonStates
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Modules/Button/Base', module).add('Base', () => (
  <ButtonExample />
));

ButtonExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonExamples, example.id)
  );
});

ButtonStates.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonStates, example.id)
  );
});
